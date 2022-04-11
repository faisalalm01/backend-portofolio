const jobRoutes = require('express').Router();
const jobControllers = require('../controllers/jobControllers');


jobRoutes.get('/', jobControllers.getAll);
jobRoutes.post('/', jobControllers.postData);
jobRoutes.put('/:id', jobControllers.editData);
jobRoutes.delete('/:id', jobControllers.deleteData);

module.exports = jobRoutes;