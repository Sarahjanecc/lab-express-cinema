

const { Schema, model} = require("mongoose");

const peliSchema = new Schema({
    title:{
        type: String,
    },
    director:{
        type: String,
    },
    starts:{
        enum : ["actors"],
    },
    image:{
        type: String,
    },
    description: {
        type:String,
    },
    showtimes:{
        enum : ["times"]
    }
})

const peliModel = model("peli",peliSchema);

module.exports = peliModel;