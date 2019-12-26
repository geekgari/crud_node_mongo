const mongoose = require("mongoose");

const statesArray = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
];

const genderArray = ["male", "female"];

const listStudentSchema = new mongoose.Schema({
  id: String,
  fname: String,
  lname: String,
  email: String,
  gender: {
    type: String,
    enum: genderArray
  },
  street: String,
  city: String,
  state: {
    type: String,
    uppercase: true,
    required: true,
    enum: statesArray
  },
  zip: Number
});

const listStudent = mongoose.model("Students", listStudentSchema);
module.exports = { listStudent };
