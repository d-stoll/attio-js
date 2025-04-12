/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV2ThreadsThreadIdRequest = {
  threadId: string;
};

/**
 * Success
 */
export type GetV2ThreadsThreadIdResponseBody = {
  data: components.Thread;
};

/** @internal */
export const GetV2ThreadsThreadIdRequest$inboundSchema: z.ZodType<
  GetV2ThreadsThreadIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  thread_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "thread_id": "threadId",
  });
});

/** @internal */
export type GetV2ThreadsThreadIdRequest$Outbound = {
  thread_id: string;
};

/** @internal */
export const GetV2ThreadsThreadIdRequest$outboundSchema: z.ZodType<
  GetV2ThreadsThreadIdRequest$Outbound,
  z.ZodTypeDef,
  GetV2ThreadsThreadIdRequest
> = z.object({
  threadId: z.string(),
}).transform((v) => {
  return remap$(v, {
    threadId: "thread_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ThreadsThreadIdRequest$ {
  /** @deprecated use `GetV2ThreadsThreadIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetV2ThreadsThreadIdRequest$inboundSchema;
  /** @deprecated use `GetV2ThreadsThreadIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetV2ThreadsThreadIdRequest$outboundSchema;
  /** @deprecated use `GetV2ThreadsThreadIdRequest$Outbound` instead. */
  export type Outbound = GetV2ThreadsThreadIdRequest$Outbound;
}

export function getV2ThreadsThreadIdRequestToJSON(
  getV2ThreadsThreadIdRequest: GetV2ThreadsThreadIdRequest,
): string {
  return JSON.stringify(
    GetV2ThreadsThreadIdRequest$outboundSchema.parse(
      getV2ThreadsThreadIdRequest,
    ),
  );
}

export function getV2ThreadsThreadIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV2ThreadsThreadIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2ThreadsThreadIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2ThreadsThreadIdRequest' from JSON`,
  );
}

/** @internal */
export const GetV2ThreadsThreadIdResponseBody$inboundSchema: z.ZodType<
  GetV2ThreadsThreadIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Thread$inboundSchema,
});

/** @internal */
export type GetV2ThreadsThreadIdResponseBody$Outbound = {
  data: components.Thread$Outbound;
};

/** @internal */
export const GetV2ThreadsThreadIdResponseBody$outboundSchema: z.ZodType<
  GetV2ThreadsThreadIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2ThreadsThreadIdResponseBody
> = z.object({
  data: components.Thread$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ThreadsThreadIdResponseBody$ {
  /** @deprecated use `GetV2ThreadsThreadIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2ThreadsThreadIdResponseBody$inboundSchema;
  /** @deprecated use `GetV2ThreadsThreadIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetV2ThreadsThreadIdResponseBody$outboundSchema;
  /** @deprecated use `GetV2ThreadsThreadIdResponseBody$Outbound` instead. */
  export type Outbound = GetV2ThreadsThreadIdResponseBody$Outbound;
}

export function getV2ThreadsThreadIdResponseBodyToJSON(
  getV2ThreadsThreadIdResponseBody: GetV2ThreadsThreadIdResponseBody,
): string {
  return JSON.stringify(
    GetV2ThreadsThreadIdResponseBody$outboundSchema.parse(
      getV2ThreadsThreadIdResponseBody,
    ),
  );
}

export function getV2ThreadsThreadIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetV2ThreadsThreadIdResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2ThreadsThreadIdResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2ThreadsThreadIdResponseBody' from JSON`,
  );
}
