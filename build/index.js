"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const env_1 = __importDefault(require("./env"));
const autoDeleteFunction_1 = __importDefault(require("./autoDeleteFunction"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const main = async () => {
    const Bot = new telegraf_1.Telegraf((0, env_1.default)('BOT_TOKEN'));
    (0, autoDeleteFunction_1.default)(Bot);
    await Bot.launch();
    console.log('Bot is running');
};
main();
