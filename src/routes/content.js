const router=require('koa-router')()
const {createMessages,getMessagesList}=require('../controller/Messages')
//request的路由

router.post('/contact',async(ctx,next)=>{
    const requestBody=ctx.request.body;
    const request=JSON.parse(requestBody)
    try{
        const result=await createMessages(request)
        ctx.body={
            errno:0,
            data:result
        }
    }catch(ex){
        console.log('联系Coach失败',ex)
        ctx.body={
            errno:-1,
            message:'联系Coach失败'
        }
    }
})

router.get('/getRequestList',async(ctx,next)=>{
    const coachId=ctx.query['id']
    console.log(coachId)
    if(coachId!=null){
        const result=await getMessagesList(coachId)
        ctx.body={
            errno:0,
            data:result
        }
    }else{
        ctx.body={
            errno:-1,
            data:'参数有误'
        }
    }
})
module.exports=router