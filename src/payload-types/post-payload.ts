import type { Base_Payload_Args } from "./payload.types.ts";
export interface Post_Payload extends Base_Payload_Args {
    content_type: string;
    content_length: number;
    body: string;
}