import { Resolve_Args_Or_URL } from "./config-resolver";
import * as PayloadBuilder from "./payload";
const configDefaults = {
    http_ver: "1.1",
};
export default function Get_Payload(configInput) {
    const parsedInput = Resolve_Args_Or_URL(configInput);
    const config = Object.assign(Object.assign({ type: "GET" }, parsedInput), configDefaults);
    var payload = PayloadBuilder.Base_Request_Payload(config);
    return PayloadBuilder.Assemble_Payload(payload);
}
//# sourceMappingURL=get-payload.js.map