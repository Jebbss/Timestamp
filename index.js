var server = require('express');
var moment = require('moment');
var fs = require('fs');
var path = require('path');
var app = server();

var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.get('/', function(req, res) {
  var file = path.join(__dirname, 'index.html');
  res.sendFile(file, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log("Sent: ", file);
    }
  });
});

app.get('/:datestring', function(req,res) {
  var date;
  if(/^\d{8,}$/.test(req.params.datestring)) {
    date = moment(req.params.datestring, "X");
  } else {
    date = moment(req.params.datestring, "MMMM D, YYYY");
  }

  if(date.isValid()) {
    res.json({
      unix: date.format("X"),
      natural: date.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }


});
