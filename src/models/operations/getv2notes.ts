/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV2NotesRequest = {
  limit?: number | undefined;
  offset?: number | undefined;
  parentObject?: string | undefined;
  parentRecordId?: string | undefined;
};

/**
 * Success
 */
export type GetV2NotesResponseBody = {
  data: Array<components.Note>;
};

/** @internal */
export const GetV2NotesRequest$inboundSchema: z.ZodType<
  GetV2NotesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
  parent_object: z.string().optional(),
  parent_record_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "parent_object": "parentObject",
    "parent_record_id": "parentRecordId",
  });
});

/** @internal */
export type GetV2NotesRequest$Outbound = {
  limit?: number | undefined;
  offset?: number | undefined;
  parent_object?: string | undefined;
  parent_record_id?: string | undefined;
};

/** @internal */
export const GetV2NotesRequest$outboundSchema: z.ZodType<
  GetV2NotesRequest$Outbound,
  z.ZodTypeDef,
  GetV2NotesRequest
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
  parentObject: z.string().optional(),
  parentRecordId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    parentObject: "parent_object",
    parentRecordId: "parent_record_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2NotesRequest$ {
  /** @deprecated use `GetV2NotesRequest$inboundSchema` instead. */
  export const inboundSchema = GetV2NotesRequest$inboundSchema;
  /** @deprecated use `GetV2NotesRequest$outboundSchema` instead. */
  export const outboundSchema = GetV2NotesRequest$outboundSchema;
  /** @deprecated use `GetV2NotesRequest$Outbound` instead. */
  export type Outbound = GetV2NotesRequest$Outbound;
}

export function getV2NotesRequestToJSON(
  getV2NotesRequest: GetV2NotesRequest,
): string {
  return JSON.stringify(
    GetV2NotesRequest$outboundSchema.parse(getV2NotesRequest),
  );
}

export function getV2NotesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV2NotesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2NotesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2NotesRequest' from JSON`,
  );
}

/** @internal */
export const GetV2NotesResponseBody$inboundSchema: z.ZodType<
  GetV2NotesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(components.Note$inboundSchema),
});

/** @internal */
export type GetV2NotesResponseBody$Outbound = {
  data: Array<components.Note$Outbound>;
};

/** @internal */
export const GetV2NotesResponseBody$outboundSchema: z.ZodType<
  GetV2NotesResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2NotesResponseBody
> = z.object({
  data: z.array(components.Note$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2NotesResponseBody$ {
  /** @deprecated use `GetV2NotesResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2NotesResponseBody$inboundSchema;
  /** @deprecated use `GetV2NotesResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetV2NotesResponseBody$outboundSchema;
  /** @deprecated use `GetV2NotesResponseBody$Outbound` instead. */
  export type Outbound = GetV2NotesResponseBody$Outbound;
}

export function getV2NotesResponseBodyToJSON(
  getV2NotesResponseBody: GetV2NotesResponseBody,
): string {
  return JSON.stringify(
    GetV2NotesResponseBody$outboundSchema.parse(getV2NotesResponseBody),
  );
}

export function getV2NotesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetV2NotesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2NotesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2NotesResponseBody' from JSON`,
  );
}
