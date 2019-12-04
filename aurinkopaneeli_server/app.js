var fs = require("fs");
var path = require("path");
var cors = require("cors");
var express = require("express");
var app = express();
app.use(cors());

//app.get("/url", (req, res, next) => {
//    res.json(["test1", "test2", "test3"]);
//});
app.get("/arvot", (req, res, next) => {
    var tiedosto = bufferFile ("arvot.txt");
    separatedArray = tiedosto.split(':');
    var tempTemp = "";
    var tempDate = "";
    var tempTime = "";
    var tempArray = [];
    for (i = 0; i < separatedArray.length; i++) {
      if (i % 3 == 0) {
        tempTemp = separatedArray[i];
      }
      else if (i % 3 == 1) {
        tempDate = separatedArray[i];
      }
      else {
        tempTime = separatedArray[i];
        let tempObject = new TempObject(tempTemp, tempDate, tempTime);
        tempArray.push(tempObject);
      }
    }
    var myJSON = JSON.stringify(tempArray);
    res.send(myJSON);
});
app.listen(3000, ()=>{

});

function bufferFile(relPath){
    return fs.readFileSync(path.join(__dirname, relPath),"utf8"); //palauttaa stringin
}

function TempObject(temp, date, time) {
   this.temp = temp;
   this.date = date;
   this.time = time;
}
