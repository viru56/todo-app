"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
const expiresIn = 60 * 60 * 1000 * 24;
exports.jwtToken = payload => {
    var data = {
        userId: payload.userId,
        iss: config_1.config.hostName,
        type: payload.type || "login",
        email: payload.email || "Unknown"
    };
    return jwt.sign(data, config_1.config.secret, { expiresIn });
};
exports.validateToken = (req, res, next) => {
    // check header or url parameters or post parameters for token
    var token = req.body.Authorization || req.query.Authorization || req.headers["Authorization"] || req.headers["authorization"];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config_1.config.secret, function (err, decoded) {
            if (err) {
                if ((err.name = "TokenExpiredError")) {
                    return res.status(401).json({ message: "Token is expired" });
                }
                return res
                    .status(401)
                    .json({ message: "Failed to authenticate token." });
            }
            else {
                if (decoded.type !== "login") {
                    return res.status(401).json({ message: "Not a valid token" });
                }
                // if everything is good, save to request for use in other routes
                req.params.userId = decoded.userId;
                req.params.email = decoded.email;
                next();
            }
        });
    }
    else {
        // if there is no token
        // return an error
        return res.status(401).send({
            message: "No token provided."
        });
    }
};
//# sourceMappingURL=authorization.service.js.map