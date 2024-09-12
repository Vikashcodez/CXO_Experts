const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);
