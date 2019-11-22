import { Request, Response } from "express";
import { UserRoutes, TaskRoutes } from "./";
import * as cors from "cors";
import * as path from "path";
export class Routes {
  public static routes(app): void {
    app.use(cors()); // allow request from all origions
    app.route("/").get((req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "../../", "client", "index.html"));
    });
    app.route("/user", UserRoutes.routes(app));
    app.route("/task", TaskRoutes.routes(app));
  }
}
