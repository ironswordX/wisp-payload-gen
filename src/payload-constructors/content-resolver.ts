import { Request_Add_Header } from "./payload.ts";
export interface Content_Data {
    mime: string;
    length: number;
    content: string;
}
export function Resolve_Request_Body(obj: unknown): Content_Data {
    var cData: Content_Data = {
        mime: "",
        length: 0,
        content: "",
    } 
    if (typeof obj === "object" && obj !== null) {
        const cast = obj as { mime?: string; type?: string; data?: string; content?: string; };
        cData.mime = cast.mime || cast.type || "text/plain";
        cData.content = cast.data || cast.content || "";
        cData.length = Buffer.byteLength(cData.content, "utf8");
    } else if (typeof obj === "string") {
        const cast = obj as string;
        cData.mime = "text/plain";
        cData.content = obj;
        cData.length = Buffer.byteLength(obj, "utf8");
    }
    return cData;
}
export function Append_Request_Body_Headers(headers: string[], body: Content_Data): void {
    Request_Add_Header(headers, "Content-Type", body.mime);
    Request_Add_Header(headers, "Content-Length", body.length.toString());
    return void 0;
}