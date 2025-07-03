import type { Post_Payload as PayloadType } from "../payload-types/post-payload.ts";
import { Resolve_Args_Or_URL, type PayloadInput } from "./config-resolver.ts";
import * as ContentResolver from "./content-resolver.ts";
import * as PayloadBuilder from "./payload.ts";
const configDefaults: Partial<PayloadType> = {
    http_ver: "1.1",
};
export default function Post_Payload(configInput: PayloadInput, body: unknown): string {
    const parsedInput: PayloadBuilder.Base_Payload_Args = Resolve_Args_Or_URL(configInput);
    const contentParsed: ContentResolver.Content_Data = ContentResolver.Resolve_Request_Body(body);
    const config = { type: "POST", ...parsedInput, ...configDefaults } as PayloadBuilder.Base_Payload;
    var payload = PayloadBuilder.Base_Request_Payload(config, false);
    ContentResolver.Append_Request_Body_Headers(payload, contentParsed);
    PayloadBuilder.Request_Terminate_Headers(payload);
    payload.push(contentParsed.content);
    return PayloadBuilder.Assemble_Payload(payload);
}