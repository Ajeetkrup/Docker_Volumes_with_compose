const express = require('express');
const app = express();
const pool = require('./postgres');

app.get('/', async function(req, res){
    try{
        const results = await pool.query('Select * from users;');
        return res.status(200).json(results.rows);
    }
    catch(err){
        console.log('Internal Server Error.');
        return res.status(401).send('Internal Server Error');
    }
});

app.listen(3000, function(err){
    if(err){
        throw err;
    }

    console.log('Server is up and running at 3000.');
});