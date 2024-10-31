"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getProducts_1 = require("./services/getProducts");
const router = express_1.default.Router();
router.get("/products", getProducts_1.getProducts);
exports.default = router;
//# sourceMappingURL=routes.js.map