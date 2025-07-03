"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request_Terminate_Headers = Request_Terminate_Headers;
exports.Request_Add_Header = Request_Add_Header;
exports.Request_Add_Body = Request_Add_Body;
exports.Base_Request_Payload = Base_Request_Payload;
exports.Assemble_Payload = Assemble_Payload;
function Request_Terminate_Headers(headers) {
    headers[headers.length - 1] += "\r\n";
    return void 0;
}
function Request_Add_Header(headers, name, value) {
    headers.push(`${name}: ${value}\r\n`);
    return void 0;
}
function Request_Add_Body(headers, body) {
    if (headers[headers.length - 1].endsWith("\r\n\r\n")) {
        // noop
    }
    else if (headers[headers.length - 1].endsWith("\r\n")) {
        headers[headers.length - 1] += "\r\n";
    }
    return void 0;
}
function Base_Request_Payload(config, end_headers = true) {
    const payload = [
        `${config.type} ${config.path.replace(/ /g, "%20")} HTTP/${config.http_ver}\r\n`,
        `Host: ${config.host}\r\n`,
        `Connection: close\r\n`,
    ];
    if (end_headers) {
        Request_Terminate_Headers(payload);
    }
    return payload;
}
function Assemble_Payload(headers) {
    return headers.join("");
}
//# sourceMappingURL=payload.js.map