const express = require('express');
const router = express.Router();
const peliModel= require("../models/movie.model.js")

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
  });

router.get("/movies", (req,res,next) =>{

    peliModel.find().select()
 .then((response) => {
     console.log (response)

     res.render("movies.hbs",{
        movies: response
     })
 })

 .catch((err) =>{
console.log(response)
 })
})


router.get("/movies/:peliId", async (req, res, next)=>{

    const {peliId}= req.params
    
    try{
    const response = await peliModel.findById(peliId)
    console.log(response)
    
    res.render("peli_details.hbs", {
      peli_details:response
    })
    }catch(err){
      console.log(err)
    }
    })

module.exports = router;
