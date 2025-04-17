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
export type PutV2ListsListEntriesEntriesResponseBodyData = {
  statusCode: number;
  type: ResponseType;
  code: ResponseCode;
  message: string;
};

/**
 * Not Found
 */
export class PutV2ListsListEntriesEntriesResponseBody extends Error {
  statusCode: number;
  type: ResponseType;
  code: ResponseCode;

  /** The original data that was passed to this error instance. */
  data$: PutV2ListsListEntriesEntriesResponseBodyData;

  constructor(err: PutV2ListsListEntriesEntriesResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "PutV2ListsListEntriesEntriesResponseBody";
  }
}

/** @internal */
export const PutV2ListsListEntriesEntriesResponseBody$inboundSchema: z.ZodType<
  PutV2ListsListEntriesEntriesResponseBody,
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

    return new PutV2ListsListEntriesEntriesResponseBody(remapped);
  });

/** @internal */
export type PutV2ListsListEntriesEntriesResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const PutV2ListsListEntriesEntriesResponseBody$outboundSchema: z.ZodType<
  PutV2ListsListEntriesEntriesResponseBody$Outbound,
  z.ZodTypeDef,
  PutV2ListsListEntriesEntriesResponseBody
> = z.instanceof(PutV2ListsListEntriesEntriesResponseBody)
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
export namespace PutV2ListsListEntriesEntriesResponseBody$ {
  /** @deprecated use `PutV2ListsListEntriesEntriesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PutV2ListsListEntriesEntriesResponseBody$inboundSchema;
  /** @deprecated use `PutV2ListsListEntriesEntriesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PutV2ListsListEntriesEntriesResponseBody$outboundSchema;
  /** @deprecated use `PutV2ListsListEntriesEntriesResponseBody$Outbound` instead. */
  export type Outbound = PutV2ListsListEntriesEntriesResponseBody$Outbound;
}
