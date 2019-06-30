const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/mindfull';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify: false
});

mongoose.connection.on('connected', ()=>{
    console.log(`Mongoose is connected`)
});

mongoose.connection.on('disconnected', ()=>{
    console.log(`Mongoose is disconnected`)
});

mongoose.connection.on('error', err=>{
    console.log(`${err} <===== Mongoose error`)
})