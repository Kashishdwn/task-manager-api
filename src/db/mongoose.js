const mongoose=require('mongoose')
// const validator=require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true,useFindAndModify:false
})
//For user but done in index.js
// const me=new User({
//     name:'    Kashish   ',
//     email:'KaSHISHTHEBOy@GmAil.com',
//     password:'abcdefg'
// })
// me.save().then((result)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error",error)
// })

//For task but done in index.js
// const task=new Task({
//     description:'                   Eat Lunch             ',
// })
// task.save().then((result)=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })