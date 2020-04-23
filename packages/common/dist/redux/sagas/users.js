"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("redux-saga/effects");
var actions = __importStar(require("../actions/users"));
var userService = __importStar(require("../../services/users"));
var constants_1 = require("../../utils/constants");
function getUsers() {
    var result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(userService.getUsers)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, effects_1.put(actions.getUsersSuccess({
                        items: result.data.data,
                    }))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(actions.usersError({
                        error: "An error occured when trying to get the users",
                    }))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function createUser(action) {
    var e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(userService.createUser, action)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.call(getUsers)];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_2 = _a.sent();
                return [4 /*yield*/, effects_1.put(actions.usersError({
                        error: "An error occured when trying to create the user",
                    }))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function deleteUser(userId) {
    var e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(userService.deleteUser, userId)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.call(getUsers)];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_3 = _a.sent();
                return [4 /*yield*/, effects_1.put(actions.usersError({
                        error: "An error occured when trying to delete the user",
                    }))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function watchGetUsersRequest() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(constants_1.Types.GET_USERS_REQUEST, getUsers)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function watchCreateUserRequest() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(constants_1.Types.CREATE_USER_REQUEST, createUser)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function watchDeleteUserRequest() {
    var action;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, effects_1.take(constants_1.Types.DELETE_USER_REQUEST)];
            case 1:
                action = _a.sent();
                return [4 /*yield*/, effects_1.call(deleteUser, action.payload.userId)];
            case 2:
                _a.sent();
                return [3 /*break*/, 0];
            case 3: return [2 /*return*/];
        }
    });
}
var usersSagas = [
    effects_1.fork(watchGetUsersRequest),
    effects_1.fork(watchCreateUserRequest),
    effects_1.fork(watchDeleteUserRequest),
];
exports.default = usersSagas;
