
module.exports=function (app) {

  app.get("/api/app", hello);

  function hello (req, res) {
    res.status(200).send("Hitting app js file....");
  }

  //user related api
  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  app.get("/api/user/:userId", findUserById);


  function findUserById(req, res) {
    var id = req.params.userId;

    for (var i in users){
         if(users[i]._id === id){
             res.send(users[i]);
             return;
        }
    } res.send({});
  }

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
