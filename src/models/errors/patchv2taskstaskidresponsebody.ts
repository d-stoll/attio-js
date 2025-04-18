/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ResponseCode,
  ResponseCode$inboundSchema,
  ResponseCode$outboundSchema,
} from "./responsecode.js";
import {
  ResponseType,
  ResponseType$inboundSchema,
  ResponseType$outboundSchema,
} from "./responsetype.js";

/**
 * Not Found
 */
export type PatchV2TasksTaskIdResponseBodyData = {
  statusCode: number;
  type: ResponseType;
  code: ResponseCode;
  message: string;
};

/**
 * Not Found
 */
export class PatchV2TasksTaskIdResponseBody extends Error {
  statusCode: number;
  type: ResponseType;
  code: ResponseCode;

  /** The original data that was passed to this error instance. */
  data$: PatchV2TasksTaskIdResponseBodyData;

  constructor(err: PatchV2TasksTaskIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "PatchV2TasksTaskIdResponseBody";
  }
}

/** @internal */
export const PatchV2TasksTaskIdResponseBody$inboundSchema: z.ZodType<
  PatchV2TasksTaskIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: ResponseType$inboundSchema,
  code: ResponseCode$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new PatchV2TasksTaskIdResponseBody(remapped);
  });

/** @internal */
export type PatchV2TasksTaskIdResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const PatchV2TasksTaskIdResponseBody$outboundSchema: z.ZodType<
  PatchV2TasksTaskIdResponseBody$Outbound,
  z.ZodTypeDef,
  PatchV2TasksTaskIdResponseBody
> = z.instanceof(PatchV2TasksTaskIdResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: ResponseType$outboundSchema,
      code: ResponseCode$outboundSchema,
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
export namespace PatchV2TasksTaskIdResponseBody$ {
  /** @deprecated use `PatchV2TasksTaskIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = PatchV2TasksTaskIdResponseBody$inboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = PatchV2TasksTaskIdResponseBody$outboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdResponseBody$Outbound` instead. */
  export type Outbound = PatchV2TasksTaskIdResponseBody$Outbound;
}
