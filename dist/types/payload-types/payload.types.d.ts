export type Payload_Type = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type HTTP_Vers = "1.1" | "2.0" | "3.0";
export interface Base_Payload {
    type: Payload_Type;
    http_ver: HTTP_Vers;
    host: string;
    path: string;
}
export interface Base_Payload_Args {
    http_ver?: HTTP_Vers;
    host: string;
    path: string;
}
//# sourceMappingURL=payload.types.d.ts.map