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
export type PostV2TargetIdentifierAttributesAttributeStatusesResponseBodyData =
  {
    statusCode: number;
    type: Response400Type;
    code: Response400Code;
    message: string;
  };

/**
 * Bad Request
 */
export class PostV2TargetIdentifierAttributesAttributeStatusesResponseBody
  extends Error
{
  statusCode: number;
  type: Response400Type;
  code: Response400Code;

  /** The original data that was passed to this error instance. */
  data$: PostV2TargetIdentifierAttributesAttributeStatusesResponseBodyData;

  constructor(
    err: PostV2TargetIdentifierAttributesAttributeStatusesResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "PostV2TargetIdentifierAttributesAttributeStatusesResponseBody";
  }
}

/** @internal */
export const PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$inboundSchema:
  z.ZodType<
    PostV2TargetIdentifierAttributesAttributeStatusesResponseBody,
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

      return new PostV2TargetIdentifierAttributesAttributeStatusesResponseBody(
        remapped,
      );
    });

/** @internal */
export type PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$Outbound =
  {
    status_code: number;
    type: string;
    code: string;
    message: string;
  };

/** @internal */
export const PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$outboundSchema:
  z.ZodType<
    PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$Outbound,
    z.ZodTypeDef,
    PostV2TargetIdentifierAttributesAttributeStatusesResponseBody
  > = z.instanceof(
    PostV2TargetIdentifierAttributesAttributeStatusesResponseBody,
  )
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
export namespace PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$ {
  /** @deprecated use `PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$inboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$outboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$Outbound` instead. */
  export type Outbound =
    PostV2TargetIdentifierAttributesAttributeStatusesResponseBody$Outbound;
}
