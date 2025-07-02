import type { Base_Payload } from "../payload-types/payload.types";
export type { Base_Payload, Base_Payload_Args } from "../payload-types/payload.types";
export declare function Request_Terminate_Headers(headers: string[]): void;
export declare function Request_Add_Header(headers: string[], name: string, value: string): void;
export declare function Request_Add_Body(headers: string[], body: string): void;
export declare function Base_Request_Payload(config: Base_Payload, end_headers?: boolean): string[];
export declare function Assemble_Payload(headers: string[]): string;
//# sourceMappingURL=payload.d.ts.map