  import express , {json} from 'express';
  import morgan from 'morgan';

  import proyectRoutes from './routes/projects';
  import taskRoutes from './routes/task';

  const app = express()

  app.use(morgan('dev'))
  app.use(json())

  app.use('/api/projects', proyectRoutes)
  app.use('/api/task',taskRoutes)

  export default app