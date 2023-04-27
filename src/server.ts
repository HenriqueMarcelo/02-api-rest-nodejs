import fastify from 'fastify'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'

const app = fastify()

// app.addHook('preHandler', async (request, reply) => {
//   console.log(`[${request.method}] ${request.url}`)
// })

app.register(fastifyCookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
