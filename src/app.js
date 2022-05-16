const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors=require('koa2-cors')
const session=require('koa-generic-session')
const index = require('./routes/index')
const users = require('./routes/users')
const content=require('./routes/content')
// error handler
onerror(app)
app.use(cors({
  origin:'http://localhost:8080', //支持前端哪个域跨域  如果服务端功能不要求跨域带cookie可以写*，所有域都能跨域
  credentials:true    //允许跨域的时候带着cookie
}))
app.keys=['qioghw!%$@%*(&']
app.use(session({
  cookie:{
    path:'/',
    httpOnly:true,
    maxAge:60*60*1000*24
  }
}))
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(content.routes(), content.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
