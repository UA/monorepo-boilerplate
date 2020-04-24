"use strict";
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
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var store_1 = require("./redux/store");
var Users_1 = __importDefault(require("./pages/Users"));
var react_redux_1 = require("react-redux");
var helper_1 = require("./utils/helper");
exports.App = function (props) {
    console.log(props.text);
    helper_1.setBaseUrl();
    return (React.createElement(react_redux_1.Provider, { store: store_1.store },
        React.createElement(react_native_1.View, { style: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            } },
            React.createElement(Users_1.default, null))));
};
exports.default = exports.App;
