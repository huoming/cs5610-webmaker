var mongoose = require('mongoose');

var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("Widgets", widgetSchema);

module.exports = widgetModel;


function createWidget(pageId,widget) {

  return widgetModel.create(widget)
    .then(
      function (widget) {
        pageModel.findPageById(pageId)
          .then(
            function (page) {

              widget.position = page.widgets.length;
              page.widgets.push(widget);

              widget.save();
              page.save();
            }
          );
        return createdWidget;
      }
    );
}

function findAllWidgetsForPage(pageId) {
  return widgetModel.find({pageId:pageId});
}

function findWidgetById(widgetId) {
  return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return widgetModel.findByIdAndUpdate(widgetId,widget);
}

function deleteWidget(widgetId) {
}

function updatePosition (pageId, position) {
}

function reorderWidget(pageId,start,end) {

}
