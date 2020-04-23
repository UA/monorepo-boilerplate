"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var userListItem_1 = __importDefault(require("./userListItem"));
var helper_1 = require("../../../utils/helper");
var react_native_1 = require("react-native");
var UserList = function (_a) {
    var users = _a.users;
    if (users.length === undefined)
        users = [];
    var sortedUsers = helper_1.sort(users);
    return (react_1.default.createElement(react_native_1.View, null, sortedUsers &&
        sortedUsers.map(function (user) {
            return (react_1.default.createElement(react_native_1.View, { key: user.id },
                react_1.default.createElement(userListItem_1.default, { user: user })));
        })));
};
exports.default = UserList;
