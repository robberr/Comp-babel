import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.get('/', (req, res) => {
        res.send("Hello Js Babel")
    })
module.exports = app;