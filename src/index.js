import express from 'express'
import morgan from 'morgan'
import cron from 'node-cron'
import usersRouter from './routes/user.routes.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/users', usersRouter)

cron.schedule('0 8 * * *', () => {
  console.log('Buenos días! Son las 08:00')
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
