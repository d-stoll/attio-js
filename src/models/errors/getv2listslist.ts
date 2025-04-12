/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const GetV2ListsListType = {
  InvalidRequestError: "invalid_request_error",
} as const;
export type GetV2ListsListType = ClosedEnum<typeof GetV2ListsListType>;

export const GetV2ListsListCode = {
  NotFound: "not_found",
} as const;
export type GetV2ListsListCode = ClosedEnum<typeof GetV2ListsListCode>;

/**
 * Not Found
 */
export type GetV2ListsListResponseBodyData = {
  statusCode: number;
  type: GetV2ListsListType;
  code: GetV2ListsListCode;
  message: string;
};

/**
 * Not Found
 */
export class GetV2ListsListResponseBody extends Error {
  statusCode: number;
  type: GetV2ListsListType;
  code: GetV2ListsListCode;

  /** The original data that was passed to this error instance. */
  data$: GetV2ListsListResponseBodyData;

  constructor(err: GetV2ListsListResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "GetV2ListsListResponseBody";
  }
}

/** @internal */
export const GetV2ListsListType$inboundSchema: z.ZodNativeEnum<
  typeof GetV2ListsListType
> = z.nativeEnum(GetV2ListsListType);

/** @internal */
export const GetV2ListsListType$outboundSchema: z.ZodNativeEnum<
  typeof GetV2ListsListType
> = GetV2ListsListType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ListsListType$ {
  /** @deprecated use `GetV2ListsListType$inboundSchema` instead. */
  export const inboundSchema = GetV2ListsListType$inboundSchema;
  /** @deprecated use `GetV2ListsListType$outboundSchema` instead. */
  export const outboundSchema = GetV2ListsListType$outboundSchema;
}

/** @internal */
export const GetV2ListsListCode$inboundSchema: z.ZodNativeEnum<
  typeof GetV2ListsListCode
> = z.nativeEnum(GetV2ListsListCode);

/** @internal */
export const GetV2ListsListCode$outboundSchema: z.ZodNativeEnum<
  typeof GetV2ListsListCode
> = GetV2ListsListCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ListsListCode$ {
  /** @deprecated use `GetV2ListsListCode$inboundSchema` instead. */
  export const inboundSchema = GetV2ListsListCode$inboundSchema;
  /** @deprecated use `GetV2ListsListCode$outboundSchema` instead. */
  export const outboundSchema = GetV2ListsListCode$outboundSchema;
}

/** @internal */
export const GetV2ListsListResponseBody$inboundSchema: z.ZodType<
  GetV2ListsListResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: GetV2ListsListType$inboundSchema,
  code: GetV2ListsListCode$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new GetV2ListsListResponseBody(remapped);
  });

/** @internal */
export type GetV2ListsListResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const GetV2ListsListResponseBody$outboundSchema: z.ZodType<
  GetV2ListsListResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2ListsListResponseBody
> = z.instanceof(GetV2ListsListResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: GetV2ListsListType$outboundSchema,
      code: GetV2ListsListCode$outboundSchema,
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
export namespace GetV2ListsListResponseBody$ {
  /** @deprecated use `GetV2ListsListResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2ListsListResponseBody$inboundSchema;
  /** @deprecated use `GetV2ListsListResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetV2ListsListResponseBody$outboundSchema;
  /** @deprecated use `GetV2ListsListResponseBody$Outbound` instead. */
  export type Outbound = GetV2ListsListResponseBody$Outbound;
}
