const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes/routes')
    //import { methods as languageController } from "./../controllers/language.contoller";



const app = express();
const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'cyadb'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// routes -------------------------------------------
// app.get('/', (req, res) => {
//     console.log("ptm");
// })
app.use('/', routes)



// server running -----------------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})