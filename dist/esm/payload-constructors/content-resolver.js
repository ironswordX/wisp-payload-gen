import { Request_Add_Header } from "./payload";
export function Resolve_Request_Body(obj) {
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
export function Append_Request_Body_Headers(headers, body) {
    Request_Add_Header(headers, "Content-Type", body.mime);
    Request_Add_Header(headers, "Content-Length", body.length.toString());
    return void 0;
}
//# sourceMappingURL=content-resolver.js.map