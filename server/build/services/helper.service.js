"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const config_1 = require("../config");
exports.hashPassword = (password) => {
    return crypto
        .createHmac("sha256", config_1.config.secret)
        .update(password)
        .digest("hex");
};
exports.parseUser = (user) => {
    return {
        name: user.name,
        email: user.email
    };
};
exports.parseTask = (task) => {
    return {
        id: task.id,
        title: task.title,
        description: task.description,
        updatedAt: task.updatedAt
    };
};
//# sourceMappingURL=helper.service.js.map