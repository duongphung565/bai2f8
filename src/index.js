var handlebars = require('express-handlebars');
const express = require('express');
const path = require('path');
var morgan = require('morgan');

const app = express();
const port = 3000;
const route = require('./routes');
const db=require('./config/db');

//connect dB
db.connect();
// express.static(root,path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.use(morgan('combined'));
app.set('views', path.join(__dirname, 'resources','views'));
route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
