import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersService from './app/modules/users/users.service'
const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// testing
app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('Working successfully')
})

export default app
