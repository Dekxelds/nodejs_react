'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemModel = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Item', itemModel, 'items'); 
