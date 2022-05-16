const mongoose=require('../db/db')

const UsersSchema=mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:String
},{
    timestamps:true
})

const Users=mongoose.model('user',UsersSchema)

module.exports=Users