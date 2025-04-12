/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const GetV2ListsListEntriesEntryIdType = {
  InvalidRequestError: "invalid_request_error",
} as const;
export type GetV2ListsListEntriesEntryIdType = ClosedEnum<
  typeof GetV2ListsListEntriesEntryIdType
>;

export const GetV2ListsListEntriesEntryIdCode = {
  NotFound: "not_found",
} as const;
export type GetV2ListsListEntriesEntryIdCode = ClosedEnum<
  typeof GetV2ListsListEntriesEntryIdCode
>;

/**
 * Not Found
 */
export type GetV2ListsListEntriesEntryIdResponseBodyData = {
  statusCode: number;
  type: GetV2ListsListEntriesEntryIdType;
  code: GetV2ListsListEntriesEntryIdCode;
  message: string;
};

/**
 * Not Found
 */
export class GetV2ListsListEntriesEntryIdResponseBody extends Error {
  statusCode: number;
  type: GetV2ListsListEntriesEntryIdType;
  code: GetV2ListsListEntriesEntryIdCode;

  /** The original data that was passed to this error instance. */
  data$: GetV2ListsListEntriesEntryIdResponseBodyData;

  constructor(err: GetV2ListsListEntriesEntryIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "GetV2ListsListEntriesEntryIdResponseBody";
  }
}

/** @internal */
export const GetV2ListsListEntriesEntryIdType$inboundSchema: z.ZodNativeEnum<
  typeof GetV2ListsListEntriesEntryIdType
> = z.nativeEnum(GetV2ListsListEntriesEntryIdType);

/** @internal */
export const GetV2ListsListEntriesEntryIdType$outboundSchema: z.ZodNativeEnum<
  typeof GetV2ListsListEntriesEntryIdType
> = GetV2ListsListEntriesEntryIdType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ListsListEntriesEntryIdType$ {
  /** @deprecated use `GetV2ListsListEntriesEntryIdType$inboundSchema` instead. */
  export const inboundSchema = GetV2ListsListEntriesEntryIdType$inboundSchema;
  /** @deprecated use `GetV2ListsListEntriesEntryIdType$outboundSchema` instead. */
  export const outboundSchema = GetV2ListsListEntriesEntryIdType$outboundSchema;
}

/** @internal */
export const GetV2ListsListEntriesEntryIdCode$inboundSchema: z.ZodNativeEnum<
  typeof GetV2ListsListEntriesEntryIdCode
> = z.nativeEnum(GetV2ListsListEntriesEntryIdCode);

/** @internal */
export const GetV2ListsListEntriesEntryIdCode$outboundSchema: z.ZodNativeEnum<
  typeof GetV2ListsListEntriesEntryIdCode
> = GetV2ListsListEntriesEntryIdCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ListsListEntriesEntryIdCode$ {
  /** @deprecated use `GetV2ListsListEntriesEntryIdCode$inboundSchema` instead. */
  export const inboundSchema = GetV2ListsListEntriesEntryIdCode$inboundSchema;
  /** @deprecated use `GetV2ListsListEntriesEntryIdCode$outboundSchema` instead. */
  export const outboundSchema = GetV2ListsListEntriesEntryIdCode$outboundSchema;
}

/** @internal */
export const GetV2ListsListEntriesEntryIdResponseBody$inboundSchema: z.ZodType<
  GetV2ListsListEntriesEntryIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: GetV2ListsListEntriesEntryIdType$inboundSchema,
  code: GetV2ListsListEntriesEntryIdCode$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new GetV2ListsListEntriesEntryIdResponseBody(remapped);
  });

/** @internal */
export type GetV2ListsListEntriesEntryIdResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const GetV2ListsListEntriesEntryIdResponseBody$outboundSchema: z.ZodType<
  GetV2ListsListEntriesEntryIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2ListsListEntriesEntryIdResponseBody
> = z.instanceof(GetV2ListsListEntriesEntryIdResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: GetV2ListsListEntriesEntryIdType$outboundSchema,
      code: GetV2ListsListEntriesEntryIdCode$outboundSchema,
      message: z.string(),
    }).transform((v) => {
      return remap$(v, {
        statusCode: "status_code",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ListsListEntriesEntryIdResponseBody$ {
  /** @deprecated use `GetV2ListsListEntriesEntryIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ListsListEntriesEntryIdResponseBody$inboundSchema;
  /** @deprecated use `GetV2ListsListEntriesEntryIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ListsListEntriesEntryIdResponseBody$outboundSchema;
  /** @deprecated use `GetV2ListsListEntriesEntryIdResponseBody$Outbound` instead. */
  export type Outbound = GetV2ListsListEntriesEntryIdResponseBody$Outbound;
}
