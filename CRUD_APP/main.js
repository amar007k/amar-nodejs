import express from 'express';
import route from './routes/routes.js';
import path from 'path';
import connectDb from './ConnectDB/connectDb.js'
import bodyParser from 'body-parser';


const app = express();
const port = 4000;

//Connection to database

connectDb();
// Middleware to handle JSON requests (if needed)
app.use(express.json());

// body-parser
app.use(bodyParser.urlencoded({extended:false}));


// setup for static files
app.use(express.static(path.join(process.cwd(), 'public')))


//setup for ejs template
app.set('view engine','ejs')
app.set('views','./views')
// Route
app.use('/',route);

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

