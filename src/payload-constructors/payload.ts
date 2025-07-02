import type { Base_Payload } from "../payload-types/payload.types";
export type { Base_Payload, Base_Payload_Args } from "../payload-types/payload.types";
export function Request_Terminate_Headers(headers: string[]): void {
    headers[headers.length-1] += "\r\n";
    return void 0;
}
export function Request_Add_Header(headers: string[], name: string, value: string): void {
    headers.push(`${name}: ${value}\r\n`);
    return void 0;
}
export function Request_Add_Body(headers: string[], body: string): void {
    if (headers[headers.length-1].endsWith("\r\n\r\n")) {
        headers.push(body);
    }
    return void 0;
}
export function Base_Request_Payload(config: Base_Payload, end_headers: boolean = true): string[] {
    const payload: string[] = [
        `${config.type} ${config.path.replace(/ /g, "%20")} HTTP/${config.http_ver}\r\n`,
        `Host: ${config.host}\r\n`,
        `Connection: close\r\n`,
    ];
    if (end_headers) {
        Request_Terminate_Headers(payload);
    }
    return payload;
}
export function Assemble_Payload(headers: string[]): string {
    return headers.join("");
}