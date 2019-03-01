module.exports=function (app) {

  //user api list
  app.get('/api/website', helloworld);

  //function list
  function helloworld(req, res) {
    res.status(200).send("hello website....");
  }
}
