import express from "express"
import cors from "cors"
import apiRouter from './routes/routes.js'

const app = express();
app.use(cors());
app.use('/api', apiRouter);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});