import { Request, Response } from "express";
import { parseTask } from "../services";
import { Task } from "../models";
export class TaskController {
  public static async addTask(req: Request, res: Response) {
    try {
      req.body.createdBy = req.params.userId;
      const newItem = await new Task(req.body).save();
      return res.status(200).json(parseTask(newItem));
    } catch (error) {
      return res.status(400).json({ message: "failed to add task", error });
    }
  }
  public static async getTask(req: Request, res: Response) {
    try {
      const item = await Task.findOne(
        { _id: req.params.id },
        { title: 1, description: 1, updatedAt: 1 }
      );
      return res.status(200).json(item);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed to get task", error });
    }
  }
  public static async getAllTasks(req: Request, res: Response) {
    try {
      const page: number = parseInt(req.params.page);
      const limit: number = parseInt(req.params.limit);
      let items = [];
      if (page && limit) {
        items = await Task.paginate(
          { createdBy: req.params.userId },
          {
            page,
            limit,
            sort:{updatedAt:-1},
            select:{ title: 1, description: 1, updatedAt: 1 }
          },
        );
      } else {
        items = await Task.find(
          { createdBy: req.params.userId },
          { title: 1, description: 1, updatedAt: 1 }
        ).sort({
          updatedAt: -1
        });
      }
      return res.status(200).json(items);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "failed to get tasks", error });
    }
  }
  public static async upadateTask(req: Request, res: Response) {
    try {
      req.body.updatedAt = new Date();
      const result = await Task.updateOne({ _id: req.body.id }, req.body, {
        runValidators: true
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: "failed to update task", error });
    }
  }
  public static async deleteTask(req: Request, res: Response) {
    try {
      const result = await Task.deleteOne({ _id: req.params.id });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: "failed to delete task", error });
    }
  }
}
