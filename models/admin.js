import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  adminname: {
    type: String,
    required: true,
    unique: true,
  },
  numbercode: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  currency: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  ballance: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    default: "admin"
  },
  active: {
    type: Boolean,
    default: true
  }
});

const Admin = mongoose.model("admin", userSchema);

export default Admin;
