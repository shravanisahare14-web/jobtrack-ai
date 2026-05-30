
const mongoose = require("mongoose")



const applicationSchema = new mongoose.Schema({

  company: String,

  role: String,

  status: String,

  salary: String,

  location: String,

  workMode: String,

  appliedDate: String,

  matchScore: Number,

})



module.exports = mongoose.model(
  "Application",
  applicationSchema
)
