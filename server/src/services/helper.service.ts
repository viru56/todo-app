import * as crypto from "crypto";
import { config } from "../config";

export const hashPassword = (password: string) => {
    return crypto
      .createHmac("sha256", config.secret)
      .update(password)
      .digest("hex");
};

export const parseUser = (user: any) => {
  return {
    name: user.name,
    email: user.email
  };
};

export const parseTask = (task: any) => {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    updatedAt:task.updatedAt
  };
};