
var mongoose = require('mongoose');

var widgetModel = new mongoose.Schema({
  pageId:{type: mongoose.Schema.ObjectId, ref:"Page"},
  type:{type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT','TEXT']},
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable:Boolean,
  formatted: Boolean,
  position: Number,
  dateCreated: {type:Date, default: Date.now()}
},{collection: 'Widgets'});

module.exports = widgetModel;

widgetModel.createWidget = createWidget;

function createWidget(pageId, widget) {
  return widgetModel.create(widget);
}




