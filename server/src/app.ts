import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as path from "path";
import { Routes } from "./routes";
import { config } from "./config";

class App {
  public app: express.Application;
  public mongoUrl: string = config.mongoUrl;
  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    Routes.routes(this.app);
  }
  private config(): void {
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
      setHeaders: function(res, path, stat) {
        res.set("x-timestamp", Date.now());
      }
    };
    // for css files
    this.app.use(express.static(path.join(__dirname, "../client"), options));
  }
  private async mongoSetup(): Promise<void> {
    try {
     mongoose.Promise = global.Promise;
      await mongoose.connect(this.mongoUrl, {
        useNewUrlParser: true
      });
      console.log("connected to mongodb...:)");
    } catch (error) {
      console.error("mongo connection error, reason:- ", error.toString());
    }
  }
}

export default new App().app;
