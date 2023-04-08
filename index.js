const express = require('express');
const cors = require('cors');
const db = require('./db/planet.db.connection');
const routers = require('./routes/planets.route');


const app = express();
app.set('port', process.env.PORT || 2000);
app.use(cors('*'));
app.use(express.json())

app.use('/api/v1',routers);

const port = app.get('port');

app.listen(port, ()=>{
    console.log('port available at:', port);
});