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
const services_1 = require("../services");
const models_1 = require("../models");
class TaskController {
    static addTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.createdBy = req.params.userId;
                const newItem = yield new models_1.Task(req.body).save();
                return res.status(200).json(services_1.parseTask(newItem));
            }
            catch (error) {
                return res.status(400).json({ message: "failed to add task", error });
            }
        });
    }
    static getTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield models_1.Task.findOne({ _id: req.params.id }, { title: 1, description: 1, updatedAt: 1 });
                return res.status(200).json(item);
            }
            catch (error) {
                console.log(error);
                return res.status(400).json({ message: "failed to get task", error });
            }
        });
    }
    static getAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = parseInt(req.params.page);
                const limit = parseInt(req.params.limit);
                let items = [];
                if (page && limit) {
                    items = yield models_1.Task.paginate({ createdBy: req.params.userId }, {
                        page,
                        limit,
                        sort: { updatedAt: -1 },
                        select: { title: 1, description: 1, updatedAt: 1 }
                    });
                }
                else {
                    items = yield models_1.Task.find({ createdBy: req.params.userId }, { title: 1, description: 1, updatedAt: 1 }).sort({
                        updatedAt: -1
                    });
                }
                return res.status(200).json(items);
            }
            catch (error) {
                console.log(error);
                return res.status(400).json({ message: "failed to get tasks", error });
            }
        });
    }
    static upadateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.updatedAt = new Date();
                const result = yield models_1.Task.updateOne({ _id: req.body.id }, req.body, {
                    runValidators: true
                });
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ message: "failed to update task", error });
            }
        });
    }
    static deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield models_1.Task.deleteOne({ _id: req.params.id });
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ message: "failed to delete task", error });
            }
        });
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map