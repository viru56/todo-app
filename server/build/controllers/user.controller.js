"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const services_1 = require("../services");
class UserController {
    static addNewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body.password.length < 6) {
                    return res
                        .status(400)
                        .json({ message: "password should be greater than 6 chars" });
                }
                yield new models_1.User(req.body).save();
                return res.status(200).json({ message: "user created" });
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield models_1.User.findOne({ _id: req.params.userId }, { name: 1, email: 1 });
                return res.status(200).json(services_1.parseUser(user));
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
    }
    static userLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield models_1.User.findOne({ email: req.body.email });
                if (services_1.hashPassword(req.body.password) !== user.password) {
                    return res.status(400).json({
                        message: "password is not valid"
                    });
                }
                else {
                    const token = services_1.jwtToken({
                        userId: user.id,
                        type: "login",
                        email: req.body.email
                    });
                    return res.status(200).json({ token, user: services_1.parseUser(user) });
                }
            }
            catch (error) {
                return res.status(400).json(error);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map