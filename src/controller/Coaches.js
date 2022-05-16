const Coaches=require('../model/Coaches')

async function register(registerData){
    const result=await Coaches.create(registerData)
    return result
}
async function getCoachesList(){
    const result=await Coaches.find()
    return result
}
module.exports={
    register,getCoachesList
}