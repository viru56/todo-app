"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const services_1 = require("../services");
class TaskRoutes {
    static routes(app) {
        app
            .route("/task")
            //get all items
            .get(services_1.validateToken, controllers_1.TaskController.getAllTasks)
            //create new item
            .post(services_1.validateToken, controllers_1.TaskController.addTask)
            // update a specific item
            .put(services_1.validateToken, controllers_1.TaskController.upadateTask);
        //get specific item details
        app.route("/task/:id").get(services_1.validateToken, controllers_1.TaskController.getTask);
        // delete specific item
        app.route("/task/:id").delete(services_1.validateToken, controllers_1.TaskController.deleteTask);
        app
            .route("/task/:page/:limit")
            .get(services_1.validateToken, controllers_1.TaskController.getAllTasks);
    }
}
exports.TaskRoutes = TaskRoutes;
//# sourceMappingURL=task.route.js.map