const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    current_market_price: {
        type: String,
        required: true
    },
    market_cap:{
      type: String,
      required: true
    },
    stock: {
        type: String,
        required: true
    },
    divident_yeald: {
        type: String,
        required: true
    },
    roce: {
        type: String,
        required: true
    },
    roe: {
        type: String,
        required: true
    },
    eps: {
        type: String,
        required: true
    },
    debt_to_equity: {
        type: String,
        trim: true,
        maxlength: 20,
        required: true
    },
    reserves: {
        type: String,
        required: true
    },
    Debt: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Company", companySchema);