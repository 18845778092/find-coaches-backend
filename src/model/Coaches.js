const mongoose=require('../db/db')
const CoachesSchema=mongoose.Schema({
            firstName:{
                type:String,
                required:true,
            },
            lastName:{
                type:String,
                required:true,
            },
            fullName:{
                type:String,
                required:true,
                unique:true
            },
            description:{
                type:String,
                required:true,
                unique:true
            },
            hourlyRate: Number,
            areas: Array,
            userId:String
},{
    timestamps:true //时间戳
})

const Coaches=mongoose.model('coaches',CoachesSchema)

module.exports=Coaches