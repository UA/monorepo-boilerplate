"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../utils/constants");
exports.getUsersRequest = function () { return ({
    type: constants_1.Types.GET_USERS_REQUEST,
}); };
exports.getUsersSuccess = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b;
    return ({
        type: constants_1.Types.GET_USERS_SUCCESS,
        payload: {
            items: items,
        },
    });
};
exports.createUserRequest = function (firstName, lastName) { return ({
    type: constants_1.Types.CREATE_USER_REQUEST,
    payload: {
        firstName: firstName,
        lastName: lastName,
    },
}); };
exports.deleteUserRequest = function (userId) { return ({
    type: constants_1.Types.DELETE_USER_REQUEST,
    payload: {
        userId: userId,
    },
}); };
exports.usersError = function (error) { return ({
    type: constants_1.Types.USERS_ERROR,
    payload: {
        error: error,
    },
}); };
