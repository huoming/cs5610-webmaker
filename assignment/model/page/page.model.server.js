var mongoose = require('mongoose');

var pageSchema = require('./page.schema.server');
var pageModel = mongoose.model(Page",pageSchema);

var websiteModel = require('../website/website.model.server');

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;

function createPage(webId,page) {
  return pageModel.create(page)
    .then(
      function (createdPage) {
        websiteModel.findWebsiteById(webId)
          .then(
            function (website) {
              website.pages.push(createdPage);
              websiteModel.updateWebsite(webId,website);
            }
          );
        return createdPage;
      }
    );
}

function findAllPagesForWebsite(websiteId) {
  return pageModel.find({websiteId:websiteId});
}

function findPageById(pageId){
  return pageModel.findById(pageId);
}

function updatePage(pageId,page) {
  return pageModel.findByIdAndUpdate(pageId,page);
}

function deletePage(pageId) {
  return pageModel.findByIdAndRemove(pageId);
}

