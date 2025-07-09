import type { Post_Payload as PayloadType } from "../payload-types/post-payload";
import { Resolve_Args_Or_URL, type PayloadInput } from "./config-resolver";
import * as ContentResolver from "./content-resolver";
import * as PayloadBuilder from "./payload";
const configDefaults: Partial<PayloadType> = {
    http_ver: "1.1",
};
export default function Post_Payload(configInput: PayloadInput, body: unknown, headers?: Record<string, any>, type?: string): string {
    const parsedInput: PayloadBuilder.Base_Payload_Args = Resolve_Args_Or_URL(configInput);
    const contentParsed: ContentResolver.Content_Data = ContentResolver.Resolve_Request_Body(body, type);
    const config = { type: "POST", ...parsedInput, ...configDefaults } as PayloadBuilder.Base_Payload;
    var payload = PayloadBuilder.Base_Request_Payload(config, false);
    if (headers) {
        var keys = Object.keys(headers);
        for (var i = 0; i < keys.length; i++) {
            PayloadBuilder.Request_Add_Header(payload, keys[i], headers[keys[i]]);
        }
    }
    ContentResolver.Append_Request_Body_Headers(payload, contentParsed);
    PayloadBuilder.Request_Terminate_Headers(payload);
    payload.push(contentParsed.content);
    return PayloadBuilder.Assemble_Payload(payload);
}