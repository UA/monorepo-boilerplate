"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = __importDefault(require("../reducers"));
var redux_saga_1 = __importDefault(require("redux-saga"));
var sagas_1 = __importDefault(require("../sagas"));
var sagaMiddleware = redux_saga_1.default();
exports.store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas_1.default);
