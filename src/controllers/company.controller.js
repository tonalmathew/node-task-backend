const Company = require("../models/company.model");

exports.createCompany = (req, res) => {
  const company = new Company(req.body);

  company.save((err, result) => {
    if (err) {
      res.status(400).json({
        status: res.statusCode,
        result: {
          error: err,
        },
      });
    } else {
      res.status(201).json({
        status: res.statusCode,
        result: {
          msg: "company created successFully",
          company: result,
        },
      });
    }
  });
};

exports.getAllCompany = async (req, res) => {
  try {
    const companies = await Company.find({});
    res.status(200).json({
      status: res.statusCode,
      result: companies,
    });
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      result: {
        error: error,
      },
    });
  }
};

exports.getCompany = async (req, res) => {
  try {
    const companies = await Company.find({company_name: req.params.company_name});
    res.status(200).json({
      status: res.statusCode,
      result: companies,
    });
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      result: {
        error: error,
      },
    });
  }
};
