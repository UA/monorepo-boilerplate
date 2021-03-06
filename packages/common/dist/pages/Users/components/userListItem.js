"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var UserListItem = function (_a) {
    var user = _a.user;
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null,
            user.firstName,
            " ",
            user.lastName)));
};
exports.default = UserListItem;
