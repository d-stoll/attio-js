/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Comment,
  Comment$inboundSchema,
  Comment$Outbound,
  Comment$outboundSchema,
} from "../components/comment.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV2CommentsCommentIdRequest = {
  commentId: string;
};

/**
 * Success
 */
export type GetV2CommentsCommentIdResponse = {
  data: Comment;
};

/** @internal */
export const GetV2CommentsCommentIdRequest$inboundSchema: z.ZodType<
  GetV2CommentsCommentIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  comment_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "comment_id": "commentId",
  });
});

/** @internal */
export type GetV2CommentsCommentIdRequest$Outbound = {
  comment_id: string;
};

/** @internal */
export const GetV2CommentsCommentIdRequest$outboundSchema: z.ZodType<
  GetV2CommentsCommentIdRequest$Outbound,
  z.ZodTypeDef,
  GetV2CommentsCommentIdRequest
> = z.object({
  commentId: z.string(),
}).transform((v) => {
  return remap$(v, {
    commentId: "comment_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2CommentsCommentIdRequest$ {
  /** @deprecated use `GetV2CommentsCommentIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetV2CommentsCommentIdRequest$inboundSchema;
  /** @deprecated use `GetV2CommentsCommentIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetV2CommentsCommentIdRequest$outboundSchema;
  /** @deprecated use `GetV2CommentsCommentIdRequest$Outbound` instead. */
  export type Outbound = GetV2CommentsCommentIdRequest$Outbound;
}

export function getV2CommentsCommentIdRequestToJSON(
  getV2CommentsCommentIdRequest: GetV2CommentsCommentIdRequest,
): string {
  return JSON.stringify(
    GetV2CommentsCommentIdRequest$outboundSchema.parse(
      getV2CommentsCommentIdRequest,
    ),
  );
}

export function getV2CommentsCommentIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV2CommentsCommentIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2CommentsCommentIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2CommentsCommentIdRequest' from JSON`,
  );
}

/** @internal */
export const GetV2CommentsCommentIdResponse$inboundSchema: z.ZodType<
  GetV2CommentsCommentIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Comment$inboundSchema,
});

/** @internal */
export type GetV2CommentsCommentIdResponse$Outbound = {
  data: Comment$Outbound;
};

/** @internal */
export const GetV2CommentsCommentIdResponse$outboundSchema: z.ZodType<
  GetV2CommentsCommentIdResponse$Outbound,
  z.ZodTypeDef,
  GetV2CommentsCommentIdResponse
> = z.object({
  data: Comment$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2CommentsCommentIdResponse$ {
  /** @deprecated use `GetV2CommentsCommentIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetV2CommentsCommentIdResponse$inboundSchema;
  /** @deprecated use `GetV2CommentsCommentIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetV2CommentsCommentIdResponse$outboundSchema;
  /** @deprecated use `GetV2CommentsCommentIdResponse$Outbound` instead. */
  export type Outbound = GetV2CommentsCommentIdResponse$Outbound;
}

export function getV2CommentsCommentIdResponseToJSON(
  getV2CommentsCommentIdResponse: GetV2CommentsCommentIdResponse,
): string {
  return JSON.stringify(
    GetV2CommentsCommentIdResponse$outboundSchema.parse(
      getV2CommentsCommentIdResponse,
    ),
  );
}

export function getV2CommentsCommentIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetV2CommentsCommentIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2CommentsCommentIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2CommentsCommentIdResponse' from JSON`,
  );
}
