import { User } from "../models";
import { Request, Response } from "express";
import { hashPassword, jwtToken, parseUser } from "../services";
export class UserController {
  public static async addNewUser(req: Request, res: Response) {
    try {
      if (req.body.password.length < 6) {
        return res
          .status(400)
          .json({ message: "password should be greater than 6 chars" });
      }
      await new User(req.body).save();
      return res.status(200).json({ message: "user created" });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  public static async getUser(req: Request, res: Response) {
    try {
      const user = await User.findOne(
        { _id: req.params.userId },
        { name: 1, email: 1}
      )
      return res.status(200).json(parseUser(user));
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  public static async userLogin(req: Request, res: Response) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (hashPassword(req.body.password) !== user.password) {
        return res.status(400).json({
          message: "password is not valid"
        });
      } else {
        const token = jwtToken({
          userId: user.id,
          type: "login",
          email: req.body.email
        });
        return res.status(200).json({ token, user: parseUser(user) });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
