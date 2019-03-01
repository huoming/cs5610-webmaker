module.exports=function (app) {
  //refactor api calls
  app.get("/api/test", test);

  function test(req, res) {
    console.log("Hit test api....")
    res.status(400).send('Bad request...');
  }
}

