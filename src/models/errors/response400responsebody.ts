/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Response400Code,
  Response400Code$inboundSchema,
  Response400Code$outboundSchema,
} from "./response400code.js";
import {
  Response400Type,
  Response400Type$inboundSchema,
  Response400Type$outboundSchema,
} from "./response400type.js";

/**
 * Bad Request
 */
export type Response400ResponseBodyData = {
  statusCode: number;
  type: Response400Type;
  code: Response400Code;
  message: string;
};

/**
 * Bad Request
 */
export class Response400ResponseBody extends Error {
  statusCode: number;
  type: Response400Type;
  code: Response400Code;

  /** The original data that was passed to this error instance. */
  data$: Response400ResponseBodyData;

  constructor(err: Response400ResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "Response400ResponseBody";
  }
}

/** @internal */
export const Response400ResponseBody$inboundSchema: z.ZodType<
  Response400ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: Response400Type$inboundSchema,
  code: Response400Code$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new Response400ResponseBody(remapped);
  });

/** @internal */
export type Response400ResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const Response400ResponseBody$outboundSchema: z.ZodType<
  Response400ResponseBody$Outbound,
  z.ZodTypeDef,
  Response400ResponseBody
> = z.instanceof(Response400ResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: Response400Type$outboundSchema,
      code: Response400Code$outboundSchema,
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
export namespace Response400ResponseBody$ {
  /** @deprecated use `Response400ResponseBody$inboundSchema` instead. */
  export const inboundSchema = Response400ResponseBody$inboundSchema;
  /** @deprecated use `Response400ResponseBody$outboundSchema` instead. */
  export const outboundSchema = Response400ResponseBody$outboundSchema;
  /** @deprecated use `Response400ResponseBody$Outbound` instead. */
  export type Outbound = Response400ResponseBody$Outbound;
}
