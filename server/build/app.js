"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const routes_1 = require("./routes");
const config_1 = require("./config");
class App {
    constructor() {
        this.mongoUrl = config_1.config.mongoUrl;
        this.app = express();
        this.config();
        this.mongoSetup();
        routes_1.Routes.routes(this.app);
    }
    config() {
        //support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
        // support for html
        const options = {
            dotfiles: "ignore",
            etag: false,
            extensions: ["htm", "html", "css", "png", "jpg"],
            index: false,
            maxAge: "1d",
            redirect: false,
            setHeaders: function (res, path, stat) {
                res.set("x-timestamp", Date.now());
            }
        };
        // for css files
        this.app.use(express.static(path.join(__dirname, "../client"), options));
    }
    mongoSetup() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                mongoose.Promise = global.Promise;
                yield mongoose.connect(this.mongoUrl, {
                    useNewUrlParser: true
                });
                console.log("connected to mongodb...:)");
            }
            catch (error) {
                console.error("mongo connection error, reason:- ", error.toString());
            }
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map