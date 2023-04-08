const mongoose = require('mongoose');

const planetsSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    description:{
        type:String,
        require:true,
        unique:true,
    },
    img:{
        type:String,
        require:true,
        unique:true,
    }
});

const planetsSchemaModels = mongoose.model('planets', planetsSchema);
module.exports =  planetsSchemaModels;