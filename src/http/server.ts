import fastify  from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'

import { createPoll } from '../routes/createPoll'
import { getPoll } from '../routes/getPoll'
import { voteOnPoll } from '../routes/voteOnPoll'
import { pollResults } from './ws/pollResults'

export const app = fastify()

app.register(cookie, {
    secret: 'polls-app-nlw',
    hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
    console.log('http server running')
})