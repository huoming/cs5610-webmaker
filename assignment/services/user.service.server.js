module.exports = function (app) {

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  app.get("/api/user/:userId", findUserById);


  function findUserById(req, res) {

    console.log("hit find user by id...");

    var id = req.params.userId;

    for (var i in users){
      if(users[i]._id === id){
        res.send(users[i]);
        return;
      }
    } res.send({});
  }

}
