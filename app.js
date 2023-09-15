const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Data = require('./models/data')


const dataControl = require('./controlles/data')
const sequelize = require('./util/database');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.get('/api/data', dataControl.sendData);

app.post('/data', dataControl.addData );

// Example: Delete data by ID
app.delete('/store/:id', dataControl.deleteData);





sequelize.sync()
    .then(result=>{
    // console.log(result)

    app.listen(3000);//did
})
    .catch(err=>console.log(err))