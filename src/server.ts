'use strict'
import * as path from 'path'
import * as express from 'express'

const app: express.Application = express()
const port = 5000

app.use(express.static(path.join(__dirname, '../public')))

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`App running on port ${port}`)
})
