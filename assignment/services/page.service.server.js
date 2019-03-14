module.exports = function (app) {
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  pages = [
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
  ];

  function createPage(req, res) {
    var websiteId = req.params.websiteId;
    var page = req.body;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === page.websiteId && pages[i].name === page.name) {
        res.status(404).send("This page has already existed.");
        return;
      }
    }
    page._id = Math.random().toString();
    page.websiteId = websiteId;
    pages.push(page);
    res.json(page);
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var resultSet = [];
    for (var x = 0; x < pages.length; x++) {
      if (pages[x].websiteId === websiteId) {
        resultSet.push(pages[x]);
      }
    }
    res.json(resultSet);
  }

  function findPageById(req, res) {
    var pageId = req.params.pageId;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        return res.json(pages[i]);
      }
    }
    res.status(404).send("Cannot find page.");
  }

  function updatePage(req, res) {
    var pageId = req.params.pageId;
    var updatedPage = req.body;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages[i].name = updatedPage.name;
        pages[i].title = updatedPage.title;
        res.json(pages[i]);
        return;
      }
    }
    res.status(404).send("Cannot find page");
  }

  function deletePage(req, res) {
    var pageId = req.params.pageId;
    for (var x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        res.json(pages[x]);
        pages.splice(x, 1);
        return;
      }
    }
    res.status(404).send("Cannot find page");
  }
}
