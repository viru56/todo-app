import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { config } from "../config";
const expiresIn: number = 60 * 60 * 1000 * 24;

export const jwtToken = payload => {
    var data = {
      userId: payload.userId,
      iss: config.hostName,
      type: payload.type || "login",
      email: payload.email || "Unknown"
    };
    return jwt.sign(data, config.secret, { expiresIn });
  };
  
  export const validateToken = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // check header or url parameters or post parameters for token
    var token = req.body.Authorization || req.query.Authorization || req.headers["Authorization"] || req.headers["authorization"];
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
          if ((err.name = "TokenExpiredError")) {
            return res.status(401).json({ message: "Token is expired" });
          }
          return res
            .status(401)
            .json({ message: "Failed to authenticate token." });
        } else {
          if (decoded.type !== "login") {
            return res.status(401).json({ message: "Not a valid token" });
          }
          // if everything is good, save to request for use in other routes
          req.params.userId = decoded.userId;
          req.params.email = decoded.email;
          next();
        }
      });
    } else {
      // if there is no token
      // return an error
      return res.status(401).send({
        message: "No token provided."
      });
    }
  };
 