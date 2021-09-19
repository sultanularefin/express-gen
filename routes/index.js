var express = require('express');
// var router = express.Router();

// const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();



/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/





app.use(
    fileUpload()
);

/*
router.get('/', function(
    req,
    res,
    next) {

  // res.render('index', { title: 'Express' });

  res.sendFile(path.join(__dirname, "index.html" ))


});
*/

/*

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD");
   // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3001/","http://localhost:3001");
    // res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Origin", "*");
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 70:18:8B:81:D9:89
// 70-18-8B-81-D9-89

app.get("/", (
    req,
    res) => {
    res.sendFile(path.join(__dirname, "/../index.html"));
});

// + '/../../foo.bar'
app.post(
    "/upload",
    (
        req,
        res

    ) => {

        if (!req.files) {

            return res.status(400).send("No files were uploaded.");
        }


        const file = req.files.myFile;
        // const path = __dirname + "/files/" + file.name;

        // return res.status(200).send(path);

        // return res.status(400).send(file.name);


        // 400 bad request.
        // 200 ok
        // 201 created.
        // 202 accepted.



        /*
        const path = __dirname + "../files/" + file.name;

        file.mv(path, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          return res.send({ status: "success", path: path });
        });

        */


        const path = __dirname + "/files/" + file.name;

        // return res.status(200).send(path);

        // 500 Internal Server Error

        file.mv(path, (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send({ status: "success", path: path });
        });
    });

// module.exports = router;

module.exports = app;
