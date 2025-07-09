import type { Get_Payload as PayloadType } from "../payload-types/get-payload";
import { Resolve_Args_Or_URL, type PayloadInput } from "./config-resolver";
import * as PayloadBuilder from "./payload";
const configDefaults: Partial<PayloadBuilder.Base_Payload_Args> = {
    http_ver: "1.1",
};
export default function Get_Payload(configInput: PayloadInput, headers: Record<string, string>): string {
    const parsedInput: PayloadBuilder.Base_Payload_Args = Resolve_Args_Or_URL(configInput);
    const config = { type: "GET", ...parsedInput, ...configDefaults } as PayloadBuilder.Base_Payload;
    var payload = PayloadBuilder.Base_Request_Payload(config, headers ? false : true);
    if (headers) {
        var keys = Object.keys(headers);
        for (var i = 0; i < keys.length; i++) {
            PayloadBuilder.Request_Add_Header(payload, keys[i], headers[keys[i]]);
        }
    }
    return PayloadBuilder.Assemble_Payload(payload);
}
