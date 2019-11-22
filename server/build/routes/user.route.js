"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const services_1 = require("../services");
class UserRoutes {
    constructor() {
        this.userController = new controllers_1.UserController();
    }
    static routes(app) {
        app
            .route("/user")
            //create new user
            .post(controllers_1.UserController.addNewUser)
            .get(services_1.validateToken, controllers_1.UserController.getUser);
        app.route('/user/login').post(controllers_1.UserController.userLogin);
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user.route.js.map