"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var users_1 = require("../../redux/actions/users");
var userList_1 = __importDefault(require("./components/userList"));
var react_native_1 = require("react-native");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users(props) {
        var _this = _super.call(this, props) || this;
        _this.handleCreateUserSubmit = function (_a) {
            var firstName = _a.firstName, lastName = _a.lastName;
            _this.props.createUserRequest(firstName, lastName);
        };
        _this.handleDeleteUserClick = function (userId) {
            _this.props.deleteUserRequest(userId);
        };
        _this.handleCloseAlert = function () {
            _this.props.usersError({
                error: "",
            });
        };
        _this.props.getUsersRequest();
        return _this;
    }
    Users.prototype.render = function () {
        var users = this.props.users;
        return (react_1.default.createElement(react_native_1.View, { style: { margin: "0 auto", padding: 20, maxWidth: "600" } },
            react_1.default.createElement(userList_1.default, { users: users.items })));
    };
    return Users;
}(react_1.Component));
exports.default = react_redux_1.connect(function (_a) {
    var users = _a.users;
    return ({ users: users });
}, {
    getUsersRequest: users_1.getUsersRequest,
    createUserRequest: users_1.createUserRequest,
    deleteUserRequest: users_1.deleteUserRequest,
    usersError: users_1.usersError,
})(Users);
