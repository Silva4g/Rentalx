"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
express_1.default().get('/', function (req, res) {
    return res.json({ message: 'Hello World!' });
});
express_1.default().listen(3333, function () {
    console.log("Server Started 🚀");
});
