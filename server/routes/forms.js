const express = require('express');
const router = express.Router();

const formController = require('../controllers/forms')




router.post('/forms',formController.createForm);
  
router.get('/forms', formController.getAllForms);
  
router.get('/forms/:id', formController.getFormById);

router.post('/forms/:id/submit',formController.submitForm)


  module.exports =router