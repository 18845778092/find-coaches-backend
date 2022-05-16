const mongoose=require('../db/db')

const RequestsSchema=mongoose.Schema({
    email:String,
    message:{
        type:String,
        required:true
    },
    coachId:{
        type:String,
        required:true,
        uinque:true
    }
},{
    timestamps:true
})

const Messages=mongoose.model('message',RequestsSchema)
module.exports=Messages