import express from 'express';
import cors from 'cors';
import TasksRouter from './routes/index.js';

const app = express();
app.use(cors());
app.set('port', process.env.PORT || 8081);

app.get('/', (req, res) => {
    res.json({message: 'welcome to my app'})
})

app.use('/api/tasks', TasksRouter)

export default app;