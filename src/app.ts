import fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transaction'

export const app = fastify()

app.register(fastifyCookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
