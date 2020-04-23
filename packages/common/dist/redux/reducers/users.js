"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../utils/constants");
var INITIAL_STATE = {
    items: [],
    error: "",
};
function users(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case constants_1.Types.GET_USERS_SUCCESS: {
            return __assign(__assign({}, state), { items: action.payload.items });
        }
        case constants_1.Types.USERS_ERROR: {
            return __assign(__assign({}, state), { items: action.payload.error });
        }
        default: {
            return state;
        }
    }
}
exports.default = users;
