const mongoose=require('mongoose')
const url='mongodb://localhost:27017'
const dbName='FindCoaches';

mongoose.connect(`${url}/${dbName}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const conn=mongoose.connection
conn.on('error',err=>{
    console.log('连接出错',err)
})
module.exports=mongoose