const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    details: String
});

module.exports = mongoose.model('Service', ServiceSchema);
