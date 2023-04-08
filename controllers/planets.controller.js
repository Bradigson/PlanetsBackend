const planetsModels = require('../models/planets.models');

class planetsController{

    async allPlanets(req, res){
        await planetsModels.find()
        .then(data=>{
            res.status(200).json({
                data:data
            })
        })
        .catch((err)=>{
            res.status(400).json(
                {
                    error: {
                      code: 400,
                      message: "not found",
                      details: {
                        missing_parameter: err
                      }
                    }
                }
            )
        })
    }




    async addPlanets(req, res){
        const request = await planetsModels(req.body)
        .save()
        .then((data)=>{
            res.status(200).json({
                code:200,
                message:"Planets added"
            })
        })
        .catch(err=>{
            res.status(400).json(
                {
                    error: {
                      code: 400,
                      message: "Planets no added",
                      details: {
                        missing_parameter: err,
                        errorMessage:"Planets already exist or missing some parameters"
                      }
                    }
                }
            )
        })
    }

}


module.exports = new planetsController;