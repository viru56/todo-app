import { TaskController } from "../controllers";
import { validateToken } from "../services";
export class TaskRoutes {
  public static routes(app): void {
    app
      .route("/task")
      //get all items
      .get(validateToken, TaskController.getAllTasks)
      //create new item
      .post(validateToken, TaskController.addTask)
      // update a specific item
      .put(validateToken, TaskController.upadateTask);
    //get specific item details
    app.route("/task/:id").get(validateToken, TaskController.getTask);
    // delete specific item
    app.route("/task/:id").delete(validateToken, TaskController.deleteTask);
    app
      .route("/task/:page/:limit")
      .get(validateToken, TaskController.getAllTasks);
  }
}
