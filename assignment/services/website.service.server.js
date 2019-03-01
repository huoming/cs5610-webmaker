module.exports = function (app) {

//website related api
  app.get("/api/user/:userId/website", findWebsiteById);

  var websites = [
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo",  developerId: "456", description: "Lorem" },
    { _id: "890", name: "Go",       developerId: "123", description: "Lorem" },
    { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    { _id: "678", name: "Checkers",    developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess",       developerId: "234", description: "Lorem" }
  ]

  function findWebsiteById(req, res) {
    var id = req.params.userId;

    for (var i in websites){
      if(websites[i].developerId=== id){
        res.send(websites[i]);
        return;
      }
    } res.send({});
  }

}
