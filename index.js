
const Express = require("express");
var app = Express();



var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});

app.get("/time", (request, response) => {
	var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

response.send({dateTime: dateTime});
    });
