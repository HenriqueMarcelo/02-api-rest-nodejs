import { knex as setupNext } from 'knex'

const knex = setupNext({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})

export default knex
