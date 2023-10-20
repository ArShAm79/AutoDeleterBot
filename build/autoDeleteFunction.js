"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autuDeleter = (Bot) => {
    Bot.on('channel_post', async (ctx) => {
        try {
            const { channelPost } = ctx;
            ctx.channelPost.chat;
            console.log(channelPost, 'Channel Post');
        }
        catch (error) {
            console.log(error.message);
        }
    });
    Bot.on('message', async (ctx) => {
        try {
            const { message } = ctx;
            ctx.message.chat;
            console.log(message, 'Message');
        }
        catch (error) {
            console.log(error.message);
        }
    });
};
exports.default = autuDeleter;
