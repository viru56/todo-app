"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const cors = require("cors");
const path = require("path");
class Routes {
    static routes(app) {
        app.use(cors()); // allow request from all origions
        app.route("/").get((req, res) => {
            res.sendFile(path.join(__dirname, "../../", "client", "index.html"));
        });
        app.route("/user", _1.UserRoutes.routes(app));
        app.route("/task", _1.TaskRoutes.routes(app));
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map