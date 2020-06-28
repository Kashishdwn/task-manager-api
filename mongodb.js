//there is no need of this in project as we use mongoose

//CRUD create read update delete
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

//Destructure Method
const {MongoClient, ObjectID}=require('mongodb')

//ObjectID
// const id=new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

//Connecting to mongodb via MongoClient
MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db=client.db(databaseName)

//Using collection insertOne method
    // db.collection('users').insertOne({
    //     name:'abc',
    //     age:27
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })


//Using collection insertMany method
    // db.collection('users').insertMany([
    //     {
    //         name:'Kashish',
    //         age:18
    //     },{
    //         name:'Kashish Dhawan',
    //         age:19
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description:'Clean the house',
    //         completed:true
    //     },{
    //        description:'Renew inspection',
    //        completed:false
    //     },{
    //         description:'Pot plants',
    //         completed:false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })

//Using collection findOne method and finding with a field
    // db.collection('tasks').findOne({description:'Renew inspection'},(error,task)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     if(task==null){
    //         return console.log('Unable to find the data provided!')
    //     }
    //     console.log(task)
    // })

//Using collection findOne method and finding with an ID
    // db.collection('tasks').findOne({_id:new ObjectID("5ee513e5b50c76390443f03f")},(error,task)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })

//Using collection find method to find multiple things at same time but this method donot use callbackfunction it returns a cursor method like .toArray(), .count(), .limit()
    // db.collection('tasks').find({completed:false}).toArray((error,task)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed:false}).count((error,count)=>{
    //     console.log(count)
    // })




    // const updatePromise=db.collection('users').updateOne({
    //     _id:ObjectID("5ee62597635f3720309250c7")
    // },{
    //     $set:{
    //         name:'Mike'
    //     }
    // })
    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    //         OR

    // db.collection('users').updateOne({
    //     _id:ObjectID("5ee62597635f3720309250c7")
    // },{
    //     // $set:{
    //     //     name:'Mike'
    //     // }
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //         console.log(result.modifiedCount)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })

    // db.collection('users').deleteOne({
    //     _id:ObjectID("5ee62597635f3720309250c7")
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     completed:false
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    
})