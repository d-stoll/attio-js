/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  PatchV2TargetIdentifierAttributesAttributeCode,
  PatchV2TargetIdentifierAttributesAttributeCode$inboundSchema,
  PatchV2TargetIdentifierAttributesAttributeCode$outboundSchema,
} from "./patchv2targetidentifierattributesattributecode.js";
import {
  Response400Type,
  Response400Type$inboundSchema,
  Response400Type$outboundSchema,
} from "./response400type.js";

/**
 * Bad Request
 */
export type PatchV2TargetIdentifierAttributesAttributeResponseBodyData = {
  statusCode: number;
  type: Response400Type;
  code: PatchV2TargetIdentifierAttributesAttributeCode;
  message: string;
};

/**
 * Bad Request
 */
export class PatchV2TargetIdentifierAttributesAttributeResponseBody
  extends Error
{
  statusCode: number;
  type: Response400Type;
  code: PatchV2TargetIdentifierAttributesAttributeCode;

  /** The original data that was passed to this error instance. */
  data$: PatchV2TargetIdentifierAttributesAttributeResponseBodyData;

  constructor(err: PatchV2TargetIdentifierAttributesAttributeResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "PatchV2TargetIdentifierAttributesAttributeResponseBody";
  }
}

/** @internal */
export const PatchV2TargetIdentifierAttributesAttributeResponseBody$inboundSchema:
  z.ZodType<
    PatchV2TargetIdentifierAttributesAttributeResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number(),
    type: Response400Type$inboundSchema,
    code: PatchV2TargetIdentifierAttributesAttributeCode$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
      });

      return new PatchV2TargetIdentifierAttributesAttributeResponseBody(
        remapped,
      );
    });

/** @internal */
export type PatchV2TargetIdentifierAttributesAttributeResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const PatchV2TargetIdentifierAttributesAttributeResponseBody$outboundSchema:
  z.ZodType<
    PatchV2TargetIdentifierAttributesAttributeResponseBody$Outbound,
    z.ZodTypeDef,
    PatchV2TargetIdentifierAttributesAttributeResponseBody
  > = z.instanceof(PatchV2TargetIdentifierAttributesAttributeResponseBody)
    .transform(v => v.data$)
    .pipe(
      z.object({
        statusCode: z.number(),
        type: Response400Type$outboundSchema,
        code: PatchV2TargetIdentifierAttributesAttributeCode$outboundSchema,
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
export namespace PatchV2TargetIdentifierAttributesAttributeResponseBody$ {
  /** @deprecated use `PatchV2TargetIdentifierAttributesAttributeResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PatchV2TargetIdentifierAttributesAttributeResponseBody$inboundSchema;
  /** @deprecated use `PatchV2TargetIdentifierAttributesAttributeResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PatchV2TargetIdentifierAttributesAttributeResponseBody$outboundSchema;
  /** @deprecated use `PatchV2TargetIdentifierAttributesAttributeResponseBody$Outbound` instead. */
  export type Outbound =
    PatchV2TargetIdentifierAttributesAttributeResponseBody$Outbound;
}
