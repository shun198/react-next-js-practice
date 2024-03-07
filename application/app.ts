import express from 'express'
const app: express.Express = express()
const port: number = 8000

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hello World!')
})

app.use((req: express.Request, res: express.Response, next) => {
    console.log('In the middleware')
    next();
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
