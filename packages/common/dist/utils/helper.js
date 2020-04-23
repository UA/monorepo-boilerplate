"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
exports.setBaseUrl = function () {
    axios_1.default.defaults.withCredentials = true;
    axios_1.default.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";
};
exports.stringToHslColor = function (str) {
    if (str === void 0) { str = ""; }
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var h = hash % 360;
    return "hsl(" + h + ",60%,80%)";
};
exports.sort = function (users) {
    if (users.length === undefined)
        return users;
    users.sort(function (a, b) {
        if (a.firstName > b.firstName) {
            return 1;
        }
        else if (a.firstName < b.firstName) {
            return -1;
        }
        else if (a.lastName > b.lastName) {
            return 1;
        }
        else if (a.lastName < b.lastName) {
            return -1;
        }
        return 0;
    });
    return users;
};
