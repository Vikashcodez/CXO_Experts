const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serviceRoutes = require('./routes/service');
const newsletterRoutes = require('./routes/newsletter');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

app.use('/admin', adminRoutes);
app.use('/services', serviceRoutes);
app.use('/newsletters', newsletterRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
