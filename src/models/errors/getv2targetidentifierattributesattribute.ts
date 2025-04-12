/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const GetV2TargetIdentifierAttributesAttributeType = {
  InvalidRequestError: "invalid_request_error",
} as const;
export type GetV2TargetIdentifierAttributesAttributeType = ClosedEnum<
  typeof GetV2TargetIdentifierAttributesAttributeType
>;

export const GetV2TargetIdentifierAttributesAttributeCode = {
  NotFound: "not_found",
} as const;
export type GetV2TargetIdentifierAttributesAttributeCode = ClosedEnum<
  typeof GetV2TargetIdentifierAttributesAttributeCode
>;

/**
 * Not Found
 */
export type GetV2TargetIdentifierAttributesAttributeResponseBodyData = {
  statusCode: number;
  type: GetV2TargetIdentifierAttributesAttributeType;
  code: GetV2TargetIdentifierAttributesAttributeCode;
  message: string;
};

/**
 * Not Found
 */
export class GetV2TargetIdentifierAttributesAttributeResponseBody
  extends Error
{
  statusCode: number;
  type: GetV2TargetIdentifierAttributesAttributeType;
  code: GetV2TargetIdentifierAttributesAttributeCode;

  /** The original data that was passed to this error instance. */
  data$: GetV2TargetIdentifierAttributesAttributeResponseBodyData;

  constructor(err: GetV2TargetIdentifierAttributesAttributeResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "GetV2TargetIdentifierAttributesAttributeResponseBody";
  }
}

/** @internal */
export const GetV2TargetIdentifierAttributesAttributeType$inboundSchema:
  z.ZodNativeEnum<typeof GetV2TargetIdentifierAttributesAttributeType> = z
    .nativeEnum(GetV2TargetIdentifierAttributesAttributeType);

/** @internal */
export const GetV2TargetIdentifierAttributesAttributeType$outboundSchema:
  z.ZodNativeEnum<typeof GetV2TargetIdentifierAttributesAttributeType> =
    GetV2TargetIdentifierAttributesAttributeType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2TargetIdentifierAttributesAttributeType$ {
  /** @deprecated use `GetV2TargetIdentifierAttributesAttributeType$inboundSchema` instead. */
  export const inboundSchema =
    GetV2TargetIdentifierAttributesAttributeType$inboundSchema;
  /** @deprecated use `GetV2TargetIdentifierAttributesAttributeType$outboundSchema` instead. */
  export const outboundSchema =
    GetV2TargetIdentifierAttributesAttributeType$outboundSchema;
}

/** @internal */
export const GetV2TargetIdentifierAttributesAttributeCode$inboundSchema:
  z.ZodNativeEnum<typeof GetV2TargetIdentifierAttributesAttributeCode> = z
    .nativeEnum(GetV2TargetIdentifierAttributesAttributeCode);

/** @internal */
export const GetV2TargetIdentifierAttributesAttributeCode$outboundSchema:
  z.ZodNativeEnum<typeof GetV2TargetIdentifierAttributesAttributeCode> =
    GetV2TargetIdentifierAttributesAttributeCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2TargetIdentifierAttributesAttributeCode$ {
  /** @deprecated use `GetV2TargetIdentifierAttributesAttributeCode$inboundSchema` instead. */
  export const inboundSchema =
    GetV2TargetIdentifierAttributesAttributeCode$inboundSchema;
  /** @deprecated use `GetV2TargetIdentifierAttributesAttributeCode$outboundSchema` instead. */
  export const outboundSchema =
    GetV2TargetIdentifierAttributesAttributeCode$outboundSchema;
}

/** @internal */
export const GetV2TargetIdentifierAttributesAttributeResponseBody$inboundSchema:
  z.ZodType<
    GetV2TargetIdentifierAttributesAttributeResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number(),
    type: GetV2TargetIdentifierAttributesAttributeType$inboundSchema,
    code: GetV2TargetIdentifierAttributesAttributeCode$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
      });

      return new GetV2TargetIdentifierAttributesAttributeResponseBody(remapped);
    });

/** @internal */
export type GetV2TargetIdentifierAttributesAttributeResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const GetV2TargetIdentifierAttributesAttributeResponseBody$outboundSchema:
  z.ZodType<
    GetV2TargetIdentifierAttributesAttributeResponseBody$Outbound,
    z.ZodTypeDef,
    GetV2TargetIdentifierAttributesAttributeResponseBody
  > = z.instanceof(GetV2TargetIdentifierAttributesAttributeResponseBody)
    .transform(v => v.data$)
    .pipe(
      z.object({
        statusCode: z.number(),
        type: GetV2TargetIdentifierAttributesAttributeType$outboundSchema,
        code: GetV2TargetIdentifierAttributesAttributeCode$outboundSchema,
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
export namespace GetV2TargetIdentifierAttributesAttributeResponseBody$ {
  /** @deprecated use `GetV2TargetIdentifierAttributesAttributeResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetV2TargetIdentifierAttributesAttributeResponseBody$inboundSchema;
  /** @deprecated use `GetV2TargetIdentifierAttributesAttributeResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2TargetIdentifierAttributesAttributeResponseBody$outboundSchema;
  /** @deprecated use `GetV2TargetIdentifierAttributesAttributeResponseBody$Outbound` instead. */
  export type Outbound =
    GetV2TargetIdentifierAttributesAttributeResponseBody$Outbound;
}
