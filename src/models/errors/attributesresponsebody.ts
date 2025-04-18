/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { Code, Code$inboundSchema, Code$outboundSchema } from "./code.js";
import { Type, Type$inboundSchema, Type$outboundSchema } from "./type.js";

/**
 * Conflict
 */
export type AttributesResponseBodyData = {
  statusCode: number;
  type: Type;
  code: Code;
  message: string;
};

/**
 * Conflict
 */
export class AttributesResponseBody extends Error {
  statusCode: number;
  type: Type;
  code: Code;

  /** The original data that was passed to this error instance. */
  data$: AttributesResponseBodyData;

  constructor(err: AttributesResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "AttributesResponseBody";
  }
}

/** @internal */
export const AttributesResponseBody$inboundSchema: z.ZodType<
  AttributesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: Type$inboundSchema,
  code: Code$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new AttributesResponseBody(remapped);
  });

/** @internal */
export type AttributesResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const AttributesResponseBody$outboundSchema: z.ZodType<
  AttributesResponseBody$Outbound,
  z.ZodTypeDef,
  AttributesResponseBody
> = z.instanceof(AttributesResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: Type$outboundSchema,
      code: Code$outboundSchema,
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
export namespace AttributesResponseBody$ {
  /** @deprecated use `AttributesResponseBody$inboundSchema` instead. */
  export const inboundSchema = AttributesResponseBody$inboundSchema;
  /** @deprecated use `AttributesResponseBody$outboundSchema` instead. */
  export const outboundSchema = AttributesResponseBody$outboundSchema;
  /** @deprecated use `AttributesResponseBody$Outbound` instead. */
  export type Outbound = AttributesResponseBody$Outbound;
}
