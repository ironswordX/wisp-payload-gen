import { Resolve_Args_Or_URL } from "./config-resolver";
import * as ContentResolver from "./content-resolver";
import * as PayloadBuilder from "./payload";
const configDefaults = {
    http_ver: "1.1",
};
export default function Post_Payload(configInput, body) {
    const parsedInput = Resolve_Args_Or_URL(configInput);
    const contentParsed = ContentResolver.Resolve_Request_Body(body);
    const config = Object.assign(Object.assign({ type: "POST" }, parsedInput), configDefaults);
    var payload = PayloadBuilder.Base_Request_Payload(config, false);
    ContentResolver.Append_Request_Body_Headers(payload, contentParsed);
    PayloadBuilder.Request_Terminate_Headers(payload);
    payload.push(contentParsed.content);
    return PayloadBuilder.Assemble_Payload(payload);
}
//# sourceMappingURL=post-payload.js.map