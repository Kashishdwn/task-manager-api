const express=require('express')
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app=express()
const port=process.env.PORT


// using multer
// const multer=require('multer')
// const upload=multer({
//     dest:'images',
//     limits:{
//         fileSize: 1000000,
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error ('Please upload a Word Document!'))
//         }
//         cb(undefined,true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }
// })
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })


//Express Middleware
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GET requests are disabled')
//     } else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is cuurently down. Check back soon!')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up on port '+port)
})

// const bcrypt=require('bcryptjs')
// const myFunction=async()=>{
//     const password='Red12345'
//     const hashPassword=await bcrypt.hash(password,8)
//     console.log(password,hashPassword)
//     const isMatch=await bcrypt.compare("Red12345",hashPassword)
//     console.log(isMatch)
// }
// myFunction()


// const jwt=require('jsonwebtoken')
// const { json } = require('express')
// const myfunction=(async)=>{
//     const token=jwt.sign({_id:'abcd123'},'thisismynewcourse',{expiresIn:'1 second'})
//     console.log(token)
//     const data=jwt.verify(token,'thisismynewcourse')
//     console.log(data)
// }
// myfunction()

// const main=async ()=>{
//     // const task= await Task.findById('5ef270e9b95c8b20a01ce1ef')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user=await User.findById('5ef270e4b95c8b20a01ce1ed')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()

