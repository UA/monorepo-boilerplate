"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
exports.getUsers = function () {
    return axios_1.default.get("/users", {
        params: {
            limit: 1000,
        },
    });
};
exports.createUser = function (action) {
    var firstName = action.payload.firstName;
    var lastName = action.payload.lastName;
    return axios_1.default.post("/users", {
        firstName: firstName,
        lastName: lastName,
    });
};
exports.deleteUser = function (userId) {
    return axios_1.default.delete("/users/" + userId);
};
