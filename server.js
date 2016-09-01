"use strict";
var express = require("express");
var path = require("path");
var Server = (function () {
    // Start the configuration
    function Server() {
        var ledstatus="on";
        var servoangle1 = 1;
        var servoangle2 = 2;
        this.app = express();
        this.app.use("/lib", express.static(path.resolve(__dirname, "lib")));
        this.app.use("/", express.static(path.resolve(__dirname, "views")));
        this.app.get("/servoangle1", function (req, res) {
            res.send("Servo1: "+servoangle1);
        });
        this.app.get("/servoangle2", function (req, res) {
            res.send("Servo2: "+servoangle2);
        });
        this.app.get("/servoleft1", function (req, res) {
            servoangle1-=10;
            if (servoangle1<=0)
                servoangle1=1;
            res.send('ok');
        });
        this.app.get("/servoright1", function (req, res) {
            servoangle1+=10;
            if (servoangle1>=128)
                servoangle1=127;
            res.send('ok');
        });


        this.app.get("/ledstatus", function (req, res) {
            res.send(ledstatus);
        });
        this.app.get("/ledseton", function (req, res) {
            ledstatus="on";
            res.send("done");
        });
        this.app.get("/ledsetoff", function (req, res) {
            ledstatus="off";
            res.send("done");
        });
        this.app.listen(process.env.PORT || 3000, function () {
            console.log("Example app is listing!");
        });
    }
    // initialize the Server, which calls the constructor see below
    Server.init = function () {
        return new Server();
    };
    return Server;
}());
Server.init();