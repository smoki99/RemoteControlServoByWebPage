"use strict";
var express = require("express");
var path = require("path");
var Server = (function () {
    // Start the configuration
    function Server() {
        var ledstatus="on";
        this.app = express();
        this.app.use("/lib", express.static(path.resolve(__dirname, "lib")));
        this.app.use("/", express.static(path.resolve(__dirname, "views")));
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