import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transaction'
import fastifyCookie from '@fastify/cookie'
const app = fastify()

app.register(fastifyCookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('server listening on port 3333')
  })
