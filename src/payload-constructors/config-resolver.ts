import type { Base_Payload_Args } from "../payload-types/payload.types.ts";
import { Base_Request_Payload } from "./payload.ts";
export type PayloadInput = string | Base_Payload_Args;
export function Resolve_Args_Or_URL(input: PayloadInput): Base_Payload_Args {
    var returnVal = {
        host: "",
        path: "",
    };
    if (typeof input === "string") {
        const obj: URL = new URL(input);
        returnVal = {
            host: obj.hostname,
            path: obj.pathname + obj.search
        };
    } else {
        returnVal = input;
    }
    return returnVal;
};