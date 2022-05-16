const Users=require('../model/Users')

async function signup(email,password){
    const result=await Users.create({
        email,password
    })
    return result
}
async function login(email,password){
    const result=await Users.findOne({
        email,password
    })
    return result
}
module.exports={
    signup,login
}