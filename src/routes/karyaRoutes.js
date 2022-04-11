const karyaRoutes = require('express').Router();
const karyaControllers = require('../controllers/karyaControllers');
const authMiddleware = require('../helpers/authMiddleware');
const uploadMiddleware = require('../helpers/uploadMiddleware');
const cloudinaryupload = require('../helpers/cloudinary')


karyaRoutes.get('/',
//  authMiddleware.checkLogin, 
 karyaControllers.getAllData);
 karyaRoutes.post('/', uploadMiddleware,cloudinaryupload, karyaControllers.postData)
 karyaRoutes.put('/:id', karyaControllers.editDataById);
 karyaRoutes.delete(':/id', karyaControllers.deleteData);

module.exports = karyaRoutes;