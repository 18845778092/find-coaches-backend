const router = require('koa-router')()
const {register,getCoachesList}=require('../controller/Coaches')
const {signup,login}=require('../controller/Auth')
router.prefix('/users')

//注册coaches接口
router.put('/register',async (ctx,next)=>{
    const registerData=ctx.request.body
    const data=JSON.parse(registerData)
    //往数据库插入注册表单数据
    try{
      const result=await register(data)
      ctx.body={
        errno:0,
        data:result,
        message:'插入成功'
      }
    }catch(ex){
        console.log('注册失败',ex)
        ctx.body={
          errno:-1,
          message:'注册失败'
        }
    }
})

//获取coachesList
router.get('/coachesList',async(ctx,next)=>{
  //获取 返回
  try{
    const result=await getCoachesList()
    ctx.body={
      errno:0,
      data:result
    }
  }catch(ex){
    ctx.body={
      errno:-1,
      message:ex
    }
  }
})

//注册
router.post('/signup',async(ctx,next)=>{
  const signupData=ctx.request.body
  const {email,password}=JSON.parse(signupData)
  try{
    console.log(email,password)
    const result=await signup(email,password)
    ctx.body={
      errno:0,
      data:result
    }
  }catch(ex){
    console.log('faild to singup.',ex)
    ctx.body={
      errno:-1,
      message:'aild to singup.'
    }
  }
})

//登录
router.post('/login',async(ctx,next)=>{
  const signupData=ctx.request.body
  const {email,password}=JSON.parse(signupData)
  try{
    console.log(email,password)
    const result=await login(email,password)
    ctx.body={
      errno:0,
      data:result
    }
  }catch(ex){
    console.log('faild to signup.',ex)
    ctx.body={
      errno:-1,
      message:'faild to signup. check your login data.'
    }
  }
})
module.exports = router
