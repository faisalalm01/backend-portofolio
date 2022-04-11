const mainRoutes = require('express').Router();
const adminRoutes = require('./adminRoutes');
const jobRoutes = require('./jobRoutes');
const karyaRoutes = require('./karyaRoutes');

mainRoutes.use('/auth', adminRoutes);
mainRoutes.use('/karya', karyaRoutes);
mainRoutes.use('/job', jobRoutes);

module.exports = mainRoutes;