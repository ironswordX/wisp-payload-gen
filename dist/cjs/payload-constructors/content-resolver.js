"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolve_Request_Body = Resolve_Request_Body;
exports.Append_Request_Body_Headers = Append_Request_Body_Headers;
const payload_1 = require("./payload");
function Resolve_Request_Body(obj) {
    var cData = {
        mime: "",
        length: 0,
        content: "",
    };
    if (typeof obj === "object" && obj !== null) {
        const cast = obj;
        cData.mime = cast.mime || cast.type || "text/plain";
        cData.content = cast.data || cast.content || "";
        cData.length = Buffer.byteLength(cData.content, "utf8");
    }
    else if (typeof obj === "string") {
        const cast = obj;
        cData.mime = "text/plain";
        cData.content = obj;
        cData.length = Buffer.byteLength(obj, "utf8");
    }
    return cData;
}
function Append_Request_Body_Headers(headers, body) {
    (0, payload_1.Request_Add_Header)(headers, "Content-Type", body.mime);
    (0, payload_1.Request_Add_Header)(headers, "Content-Length", body.length.toString());
    return void 0;
}
//# sourceMappingURL=content-resolver.js.map