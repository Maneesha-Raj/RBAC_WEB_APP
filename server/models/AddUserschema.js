
//AddUserschema.js

const { Schema } = require('mongoose');
const { model } = require('mongoose');


const AddUserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    status: { type: String, default: "Active" },
  }
);

const addUser = model('AddUser', AddUserSchema );


module.exports = addUser;