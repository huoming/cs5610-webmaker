var mongoose = require('mongoose');

var pageSchema = require('../page/page.schema.server');

var websiteSchema = mongoose.Schema(
  {
    userId: {type: mongoose.Schema.ObjectId, ref: "User"},
    name: String,
    description: String,
    pages: [pageSchema],
    dateCreate: {type: Date, default: Date.now()}

  },{collection: "Websites"}
);

module.exports = websiteSchema;
