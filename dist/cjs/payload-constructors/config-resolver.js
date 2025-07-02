"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolve_Args_Or_URL = Resolve_Args_Or_URL;
function Resolve_Args_Or_URL(input) {
    var returnVal = {
        host: "",
        path: "",
    };
    if (typeof input === "string") {
        const obj = new URL(input);
        returnVal = {
            host: obj.hostname,
            path: obj.pathname + obj.search
        };
    }
    else {
        returnVal = input;
    }
    return returnVal;
}
;
//# sourceMappingURL=config-resolver.js.map