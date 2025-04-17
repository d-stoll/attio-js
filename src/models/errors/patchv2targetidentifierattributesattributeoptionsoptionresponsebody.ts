/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Response400400Code,
  Response400400Code$inboundSchema,
  Response400400Code$outboundSchema,
} from "./response400400code.js";
import {
  Response400Type,
  Response400Type$inboundSchema,
  Response400Type$outboundSchema,
} from "./response400type.js";

/**
 * Bad Request
 */
export type PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBodyData =
  {
    statusCode: number;
    type: Response400Type;
    code: Response400400Code;
    message: string;
  };

/**
 * Bad Request
 */
export class PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody
  extends Error
{
  statusCode: number;
  type: Response400Type;
  code: Response400400Code;

  /** The original data that was passed to this error instance. */
  data$:
    PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBodyData;

  constructor(
    err:
      PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name =
      "PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody";
  }
}

/** @internal */
export const PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$inboundSchema:
  z.ZodType<
    PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status_code: z.number(),
    type: Response400Type$inboundSchema,
    code: Response400400Code$inboundSchema,
    message: z.string(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "status_code": "statusCode",
      });

      return new PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody(
        remapped,
      );
    });

/** @internal */
export type PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$Outbound =
  {
    status_code: number;
    type: string;
    code: string;
    message: string;
  };

/** @internal */
export const PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$outboundSchema:
  z.ZodType<
    PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$Outbound,
    z.ZodTypeDef,
    PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody
  > = z.instanceof(
    PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody,
  )
    .transform(v => v.data$)
    .pipe(
      z.object({
        statusCode: z.number(),
        type: Response400Type$outboundSchema,
        code: Response400400Code$outboundSchema,
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
export namespace PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$ {
  /** @deprecated use `PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$inboundSchema;
  /** @deprecated use `PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$outboundSchema;
  /** @deprecated use `PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$Outbound` instead. */
  export type Outbound =
    PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody$Outbound;
}
