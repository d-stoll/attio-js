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
export type PostV2ObjectsResponseBodyData = {
  statusCode: number;
  type: Type;
  code: Code;
  message: string;
};

/**
 * Conflict
 */
export class PostV2ObjectsResponseBody extends Error {
  statusCode: number;
  type: Type;
  code: Code;

  /** The original data that was passed to this error instance. */
  data$: PostV2ObjectsResponseBodyData;

  constructor(err: PostV2ObjectsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "PostV2ObjectsResponseBody";
  }
}

/** @internal */
export const PostV2ObjectsResponseBody$inboundSchema: z.ZodType<
  PostV2ObjectsResponseBody,
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

    return new PostV2ObjectsResponseBody(remapped);
  });

/** @internal */
export type PostV2ObjectsResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const PostV2ObjectsResponseBody$outboundSchema: z.ZodType<
  PostV2ObjectsResponseBody$Outbound,
  z.ZodTypeDef,
  PostV2ObjectsResponseBody
> = z.instanceof(PostV2ObjectsResponseBody)
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
export namespace PostV2ObjectsResponseBody$ {
  /** @deprecated use `PostV2ObjectsResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostV2ObjectsResponseBody$inboundSchema;
  /** @deprecated use `PostV2ObjectsResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostV2ObjectsResponseBody$outboundSchema;
  /** @deprecated use `PostV2ObjectsResponseBody$Outbound` instead. */
  export type Outbound = PostV2ObjectsResponseBody$Outbound;
}
