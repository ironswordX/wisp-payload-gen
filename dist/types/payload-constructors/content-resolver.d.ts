export interface Content_Data {
    mime: string;
    length: number;
    content: string;
}
export declare function Resolve_Request_Body(obj: unknown): Content_Data;
export declare function Append_Request_Body_Headers(headers: string[], body: Content_Data): void;
//# sourceMappingURL=content-resolver.d.ts.map