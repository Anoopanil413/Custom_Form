const mongoose = require('mongoose');
const { Schema } = mongoose;

const FieldSchema = new Schema({
  name: String,
  type: String,
  required: Boolean,
  options: [String]
});

const FormSchema = new Schema({
  title: String,
  description: String,
  fields: [FieldSchema]
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form