const Messages=require('../model/Requests')
//创建message
async function createMessages(messaages={}){
        const result=await Messages.create(messaages)
        return result
}

async function getMessagesList(id){
    const result=await Messages.find({coachId:id})
    return result
}
module.exports={
    createMessages,getMessagesList
}