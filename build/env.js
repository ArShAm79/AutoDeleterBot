"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function env(name) {
    const _ = process.env[name];
    if (!_)
        throw new Error('No value for env variable : ' + name);
    return _;
}
exports.default = env;
