import mongoose from 'mongoose'
import config from './config/index'
import app from '../src/app'
async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`database is connected successfuly`)

    app.listen(config.port, () => {
      console.log(`application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('failed to connet database', err)
  }
}

boostrap()
