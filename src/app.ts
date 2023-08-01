import express from 'express'
import path from 'path';
import routes from './routes/index'
const app = express();

app.use(express.static(path.join(__dirname,'../public')))


// set template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(routes)

export default app
