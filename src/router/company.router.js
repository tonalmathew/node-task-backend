const express = require('express')
const companyController = require('../controllers/company.controller')

const router = express.Router()

router
  .route('/:id')
  .get(companyController.getCompany)

router
  .route('/')
  .get(companyController.getAllCompany)
  .post(companyController.createCompany)

module.exports = router