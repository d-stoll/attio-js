/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const GetV2CommentsCommentIdType = {
  InvalidRequestError: "invalid_request_error",
} as const;
export type GetV2CommentsCommentIdType = ClosedEnum<
  typeof GetV2CommentsCommentIdType
>;

export const GetV2CommentsCommentIdCode = {
  NotFound: "not_found",
} as const;
export type GetV2CommentsCommentIdCode = ClosedEnum<
  typeof GetV2CommentsCommentIdCode
>;

/**
 * Not Found
 */
export type GetV2CommentsCommentIdResponseBodyData = {
  statusCode: number;
  type: GetV2CommentsCommentIdType;
  code: GetV2CommentsCommentIdCode;
  message: string;
};

/**
 * Not Found
 */
export class GetV2CommentsCommentIdResponseBody extends Error {
  statusCode: number;
  type: GetV2CommentsCommentIdType;
  code: GetV2CommentsCommentIdCode;

  /** The original data that was passed to this error instance. */
  data$: GetV2CommentsCommentIdResponseBodyData;

  constructor(err: GetV2CommentsCommentIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "GetV2CommentsCommentIdResponseBody";
  }
}

/** @internal */
export const GetV2CommentsCommentIdType$inboundSchema: z.ZodNativeEnum<
  typeof GetV2CommentsCommentIdType
> = z.nativeEnum(GetV2CommentsCommentIdType);

/** @internal */
export const GetV2CommentsCommentIdType$outboundSchema: z.ZodNativeEnum<
  typeof GetV2CommentsCommentIdType
> = GetV2CommentsCommentIdType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2CommentsCommentIdType$ {
  /** @deprecated use `GetV2CommentsCommentIdType$inboundSchema` instead. */
  export const inboundSchema = GetV2CommentsCommentIdType$inboundSchema;
  /** @deprecated use `GetV2CommentsCommentIdType$outboundSchema` instead. */
  export const outboundSchema = GetV2CommentsCommentIdType$outboundSchema;
}

/** @internal */
export const GetV2CommentsCommentIdCode$inboundSchema: z.ZodNativeEnum<
  typeof GetV2CommentsCommentIdCode
> = z.nativeEnum(GetV2CommentsCommentIdCode);

/** @internal */
export const GetV2CommentsCommentIdCode$outboundSchema: z.ZodNativeEnum<
  typeof GetV2CommentsCommentIdCode
> = GetV2CommentsCommentIdCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2CommentsCommentIdCode$ {
  /** @deprecated use `GetV2CommentsCommentIdCode$inboundSchema` instead. */
  export const inboundSchema = GetV2CommentsCommentIdCode$inboundSchema;
  /** @deprecated use `GetV2CommentsCommentIdCode$outboundSchema` instead. */
  export const outboundSchema = GetV2CommentsCommentIdCode$outboundSchema;
}

/** @internal */
export const GetV2CommentsCommentIdResponseBody$inboundSchema: z.ZodType<
  GetV2CommentsCommentIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: GetV2CommentsCommentIdType$inboundSchema,
  code: GetV2CommentsCommentIdCode$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new GetV2CommentsCommentIdResponseBody(remapped);
  });

/** @internal */
export type GetV2CommentsCommentIdResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const GetV2CommentsCommentIdResponseBody$outboundSchema: z.ZodType<
  GetV2CommentsCommentIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2CommentsCommentIdResponseBody
> = z.instanceof(GetV2CommentsCommentIdResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: GetV2CommentsCommentIdType$outboundSchema,
      code: GetV2CommentsCommentIdCode$outboundSchema,
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
export namespace GetV2CommentsCommentIdResponseBody$ {
  /** @deprecated use `GetV2CommentsCommentIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2CommentsCommentIdResponseBody$inboundSchema;
  /** @deprecated use `GetV2CommentsCommentIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2CommentsCommentIdResponseBody$outboundSchema;
  /** @deprecated use `GetV2CommentsCommentIdResponseBody$Outbound` instead. */
  export type Outbound = GetV2CommentsCommentIdResponseBody$Outbound;
}
