const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const contractSchema= new Schema({
    contractId: {
        type: String,
        require: true
    },
})

contractSchema.plugin(uniqueValidator);

module.exports = mongoose.model('contractmodel', contractSchema)