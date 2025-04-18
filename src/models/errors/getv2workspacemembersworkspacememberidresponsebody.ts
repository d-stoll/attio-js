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
export type GetV2WorkspaceMembersWorkspaceMemberIdResponseBodyData = {
  statusCode: number;
  type: ResponseType;
  code: ResponseCode;
  message: string;
};

/**
 * Not Found
 */
export class GetV2WorkspaceMembersWorkspaceMemberIdResponseBody extends Error {
  statusCode: number;
  type: ResponseType;
  code: ResponseCode;

  /** The original data that was passed to this error instance. */
  data$: GetV2WorkspaceMembersWorkspaceMemberIdResponseBodyData;

  constructor(err: GetV2WorkspaceMembersWorkspaceMemberIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "GetV2WorkspaceMembersWorkspaceMemberIdResponseBody";
  }
}

/** @internal */
export const GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$inboundSchema:
  z.ZodType<
    GetV2WorkspaceMembersWorkspaceMemberIdResponseBody,
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

      return new GetV2WorkspaceMembersWorkspaceMemberIdResponseBody(remapped);
    });

/** @internal */
export type GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$outboundSchema:
  z.ZodType<
    GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetV2WorkspaceMembersWorkspaceMemberIdResponseBody
  > = z.instanceof(GetV2WorkspaceMembersWorkspaceMemberIdResponseBody)
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
export namespace GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$ {
  /** @deprecated use `GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$inboundSchema;
  /** @deprecated use `GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$outboundSchema;
  /** @deprecated use `GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$Outbound` instead. */
  export type Outbound =
    GetV2WorkspaceMembersWorkspaceMemberIdResponseBody$Outbound;
}
