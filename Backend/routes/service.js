const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

router.post('/', async (req, res) => {
    const { title, description, imageUrl, details } = req.body;
    const newService = new Service({ title, description, imageUrl, details });
    await newService.save();
    res.json(newService);
});

router.get('/', async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

router.delete('/:id', async (req, res) => {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;
