module.exports=function (app) {

  app.get("/api/hello-world", hello);

  function hello (req, res) {
    res.status(200).send("Hitting hello world js file....");
  }
}
