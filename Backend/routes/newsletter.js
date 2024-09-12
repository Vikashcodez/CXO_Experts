const express = require('express');
const Newsletter = require('../models/Newsletter');
const router = express.Router();

router.post('/', async (req, res) => {
    const { title,description, imageUrl } = req.body;
    const newNewsletter = new Newsletter({ title,description, imageUrl });
    await newNewsletter.save();
    res.json(newNewsletter);
});

router.get('/', async (req, res) => {
    const newsletters = await Newsletter.find();
    res.json(newsletters);
});

router.delete('/:id', async (req, res) => {
    await Newsletter.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;
