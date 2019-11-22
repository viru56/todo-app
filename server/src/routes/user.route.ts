import { UserController } from "../controllers";
import { validateToken } from "../services";
export class UserRoutes {
  public userController: UserController = new UserController();
  public static routes(app): void {
    app
      .route("/user")
      //create new user
      .post(UserController.addNewUser)
      .get(validateToken, UserController.getUser)
    app.route('/user/login').post(UserController.userLogin);
  }
}
