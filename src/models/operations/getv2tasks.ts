/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Optionally sort the results. "created_at:asc" returns oldest results first, "created_at:desc" returns the newest results first. If unspecified, defaults to "created_at:asc" (oldest results first).
 */
export const Sort = {
  CreatedAtAsc: "created_at:asc",
  CreatedAtDesc: "created_at:desc",
} as const;
/**
 * Optionally sort the results. "created_at:asc" returns oldest results first, "created_at:desc" returns the newest results first. If unspecified, defaults to "created_at:asc" (oldest results first).
 */
export type Sort = ClosedEnum<typeof Sort>;

export type GetV2TasksRequest = {
  limit?: number | undefined;
  offset?: number | undefined;
  /**
   * Optionally sort the results. "created_at:asc" returns oldest results first, "created_at:desc" returns the newest results first. If unspecified, defaults to "created_at:asc" (oldest results first).
   */
  sort?: Sort | undefined;
  linkedObject?: string | undefined;
  linkedRecordId?: string | undefined;
  assignee?: string | null | undefined;
  isCompleted?: boolean | undefined;
};

/**
 * Success
 */
export type GetV2TasksResponseBody = {
  data: Array<components.Task>;
};

/** @internal */
export const Sort$inboundSchema: z.ZodNativeEnum<typeof Sort> = z.nativeEnum(
  Sort,
);

/** @internal */
export const Sort$outboundSchema: z.ZodNativeEnum<typeof Sort> =
  Sort$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Sort$ {
  /** @deprecated use `Sort$inboundSchema` instead. */
  export const inboundSchema = Sort$inboundSchema;
  /** @deprecated use `Sort$outboundSchema` instead. */
  export const outboundSchema = Sort$outboundSchema;
}

/** @internal */
export const GetV2TasksRequest$inboundSchema: z.ZodType<
  GetV2TasksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
  sort: Sort$inboundSchema.optional(),
  linked_object: z.string().optional(),
  linked_record_id: z.string().optional(),
  assignee: z.nullable(z.string()).optional(),
  is_completed: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "linked_object": "linkedObject",
    "linked_record_id": "linkedRecordId",
    "is_completed": "isCompleted",
  });
});

/** @internal */
export type GetV2TasksRequest$Outbound = {
  limit?: number | undefined;
  offset?: number | undefined;
  sort?: string | undefined;
  linked_object?: string | undefined;
  linked_record_id?: string | undefined;
  assignee?: string | null | undefined;
  is_completed?: boolean | undefined;
};

/** @internal */
export const GetV2TasksRequest$outboundSchema: z.ZodType<
  GetV2TasksRequest$Outbound,
  z.ZodTypeDef,
  GetV2TasksRequest
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
  sort: Sort$outboundSchema.optional(),
  linkedObject: z.string().optional(),
  linkedRecordId: z.string().optional(),
  assignee: z.nullable(z.string()).optional(),
  isCompleted: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    linkedObject: "linked_object",
    linkedRecordId: "linked_record_id",
    isCompleted: "is_completed",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2TasksRequest$ {
  /** @deprecated use `GetV2TasksRequest$inboundSchema` instead. */
  export const inboundSchema = GetV2TasksRequest$inboundSchema;
  /** @deprecated use `GetV2TasksRequest$outboundSchema` instead. */
  export const outboundSchema = GetV2TasksRequest$outboundSchema;
  /** @deprecated use `GetV2TasksRequest$Outbound` instead. */
  export type Outbound = GetV2TasksRequest$Outbound;
}

export function getV2TasksRequestToJSON(
  getV2TasksRequest: GetV2TasksRequest,
): string {
  return JSON.stringify(
    GetV2TasksRequest$outboundSchema.parse(getV2TasksRequest),
  );
}

export function getV2TasksRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV2TasksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2TasksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2TasksRequest' from JSON`,
  );
}

/** @internal */
export const GetV2TasksResponseBody$inboundSchema: z.ZodType<
  GetV2TasksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(components.Task$inboundSchema),
});

/** @internal */
export type GetV2TasksResponseBody$Outbound = {
  data: Array<components.Task$Outbound>;
};

/** @internal */
export const GetV2TasksResponseBody$outboundSchema: z.ZodType<
  GetV2TasksResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2TasksResponseBody
> = z.object({
  data: z.array(components.Task$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2TasksResponseBody$ {
  /** @deprecated use `GetV2TasksResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2TasksResponseBody$inboundSchema;
  /** @deprecated use `GetV2TasksResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetV2TasksResponseBody$outboundSchema;
  /** @deprecated use `GetV2TasksResponseBody$Outbound` instead. */
  export type Outbound = GetV2TasksResponseBody$Outbound;
}

export function getV2TasksResponseBodyToJSON(
  getV2TasksResponseBody: GetV2TasksResponseBody,
): string {
  return JSON.stringify(
    GetV2TasksResponseBody$outboundSchema.parse(getV2TasksResponseBody),
  );
}

export function getV2TasksResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetV2TasksResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2TasksResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2TasksResponseBody' from JSON`,
  );
}
