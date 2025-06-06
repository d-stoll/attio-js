/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV2ObjectsObjectRecordsDataRequest = {
  /**
   * An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
   */
  values: { [k: string]: any };
};

export type PostV2ObjectsObjectRecordsRequestBody = {
  data: PostV2ObjectsObjectRecordsDataRequest;
};

export type PostV2ObjectsObjectRecordsRequest = {
  object: string;
  requestBody: PostV2ObjectsObjectRecordsRequestBody;
};

export type PostV2ObjectsObjectRecordsId = {
  /**
   * A UUID identifying the workspace this record belongs to.
   */
  workspaceId: string;
  /**
   * A UUID identifying the object this record belongs to.
   */
  objectId: string;
  /**
   * A UUID identifying this record.
   */
  recordId: string;
};

export type PostV2ObjectsObjectRecordsDataResponse = {
  id: PostV2ObjectsObjectRecordsId;
  /**
   * When this record was created.
   */
  createdAt: string;
  /**
   * A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
   */
  values: { [k: string]: any };
};

/**
 * Success
 */
export type PostV2ObjectsObjectRecordsResponse = {
  data: PostV2ObjectsObjectRecordsDataResponse;
};

/** @internal */
export const PostV2ObjectsObjectRecordsDataRequest$inboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsDataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  values: z.record(z.any()),
});

/** @internal */
export type PostV2ObjectsObjectRecordsDataRequest$Outbound = {
  values: { [k: string]: any };
};

/** @internal */
export const PostV2ObjectsObjectRecordsDataRequest$outboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsDataRequest$Outbound,
  z.ZodTypeDef,
  PostV2ObjectsObjectRecordsDataRequest
> = z.object({
  values: z.record(z.any()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ObjectsObjectRecordsDataRequest$ {
  /** @deprecated use `PostV2ObjectsObjectRecordsDataRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV2ObjectsObjectRecordsDataRequest$inboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsDataRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV2ObjectsObjectRecordsDataRequest$outboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsDataRequest$Outbound` instead. */
  export type Outbound = PostV2ObjectsObjectRecordsDataRequest$Outbound;
}

export function postV2ObjectsObjectRecordsDataRequestToJSON(
  postV2ObjectsObjectRecordsDataRequest: PostV2ObjectsObjectRecordsDataRequest,
): string {
  return JSON.stringify(
    PostV2ObjectsObjectRecordsDataRequest$outboundSchema.parse(
      postV2ObjectsObjectRecordsDataRequest,
    ),
  );
}

export function postV2ObjectsObjectRecordsDataRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ObjectsObjectRecordsDataRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV2ObjectsObjectRecordsDataRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ObjectsObjectRecordsDataRequest' from JSON`,
  );
}

/** @internal */
export const PostV2ObjectsObjectRecordsRequestBody$inboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => PostV2ObjectsObjectRecordsDataRequest$inboundSchema),
});

/** @internal */
export type PostV2ObjectsObjectRecordsRequestBody$Outbound = {
  data: PostV2ObjectsObjectRecordsDataRequest$Outbound;
};

/** @internal */
export const PostV2ObjectsObjectRecordsRequestBody$outboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsRequestBody$Outbound,
  z.ZodTypeDef,
  PostV2ObjectsObjectRecordsRequestBody
> = z.object({
  data: z.lazy(() => PostV2ObjectsObjectRecordsDataRequest$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ObjectsObjectRecordsRequestBody$ {
  /** @deprecated use `PostV2ObjectsObjectRecordsRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV2ObjectsObjectRecordsRequestBody$inboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV2ObjectsObjectRecordsRequestBody$outboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsRequestBody$Outbound` instead. */
  export type Outbound = PostV2ObjectsObjectRecordsRequestBody$Outbound;
}

export function postV2ObjectsObjectRecordsRequestBodyToJSON(
  postV2ObjectsObjectRecordsRequestBody: PostV2ObjectsObjectRecordsRequestBody,
): string {
  return JSON.stringify(
    PostV2ObjectsObjectRecordsRequestBody$outboundSchema.parse(
      postV2ObjectsObjectRecordsRequestBody,
    ),
  );
}

export function postV2ObjectsObjectRecordsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ObjectsObjectRecordsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV2ObjectsObjectRecordsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ObjectsObjectRecordsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV2ObjectsObjectRecordsRequest$inboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: z.string(),
  RequestBody: z.lazy(() =>
    PostV2ObjectsObjectRecordsRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV2ObjectsObjectRecordsRequest$Outbound = {
  object: string;
  RequestBody: PostV2ObjectsObjectRecordsRequestBody$Outbound;
};

/** @internal */
export const PostV2ObjectsObjectRecordsRequest$outboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsRequest$Outbound,
  z.ZodTypeDef,
  PostV2ObjectsObjectRecordsRequest
> = z.object({
  object: z.string(),
  requestBody: z.lazy(() =>
    PostV2ObjectsObjectRecordsRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ObjectsObjectRecordsRequest$ {
  /** @deprecated use `PostV2ObjectsObjectRecordsRequest$inboundSchema` instead. */
  export const inboundSchema = PostV2ObjectsObjectRecordsRequest$inboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV2ObjectsObjectRecordsRequest$outboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsRequest$Outbound` instead. */
  export type Outbound = PostV2ObjectsObjectRecordsRequest$Outbound;
}

export function postV2ObjectsObjectRecordsRequestToJSON(
  postV2ObjectsObjectRecordsRequest: PostV2ObjectsObjectRecordsRequest,
): string {
  return JSON.stringify(
    PostV2ObjectsObjectRecordsRequest$outboundSchema.parse(
      postV2ObjectsObjectRecordsRequest,
    ),
  );
}

export function postV2ObjectsObjectRecordsRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ObjectsObjectRecordsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2ObjectsObjectRecordsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ObjectsObjectRecordsRequest' from JSON`,
  );
}

/** @internal */
export const PostV2ObjectsObjectRecordsId$inboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsId,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  object_id: z.string(),
  record_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "object_id": "objectId",
    "record_id": "recordId",
  });
});

/** @internal */
export type PostV2ObjectsObjectRecordsId$Outbound = {
  workspace_id: string;
  object_id: string;
  record_id: string;
};

/** @internal */
export const PostV2ObjectsObjectRecordsId$outboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsId$Outbound,
  z.ZodTypeDef,
  PostV2ObjectsObjectRecordsId
> = z.object({
  workspaceId: z.string(),
  objectId: z.string(),
  recordId: z.string(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    objectId: "object_id",
    recordId: "record_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ObjectsObjectRecordsId$ {
  /** @deprecated use `PostV2ObjectsObjectRecordsId$inboundSchema` instead. */
  export const inboundSchema = PostV2ObjectsObjectRecordsId$inboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsId$outboundSchema` instead. */
  export const outboundSchema = PostV2ObjectsObjectRecordsId$outboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsId$Outbound` instead. */
  export type Outbound = PostV2ObjectsObjectRecordsId$Outbound;
}

export function postV2ObjectsObjectRecordsIdToJSON(
  postV2ObjectsObjectRecordsId: PostV2ObjectsObjectRecordsId,
): string {
  return JSON.stringify(
    PostV2ObjectsObjectRecordsId$outboundSchema.parse(
      postV2ObjectsObjectRecordsId,
    ),
  );
}

export function postV2ObjectsObjectRecordsIdFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ObjectsObjectRecordsId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2ObjectsObjectRecordsId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ObjectsObjectRecordsId' from JSON`,
  );
}

/** @internal */
export const PostV2ObjectsObjectRecordsDataResponse$inboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsDataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.lazy(() => PostV2ObjectsObjectRecordsId$inboundSchema),
  created_at: z.string(),
  values: z.record(z.any()),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
  });
});

/** @internal */
export type PostV2ObjectsObjectRecordsDataResponse$Outbound = {
  id: PostV2ObjectsObjectRecordsId$Outbound;
  created_at: string;
  values: { [k: string]: any };
};

/** @internal */
export const PostV2ObjectsObjectRecordsDataResponse$outboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsDataResponse$Outbound,
  z.ZodTypeDef,
  PostV2ObjectsObjectRecordsDataResponse
> = z.object({
  id: z.lazy(() => PostV2ObjectsObjectRecordsId$outboundSchema),
  createdAt: z.string(),
  values: z.record(z.any()),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ObjectsObjectRecordsDataResponse$ {
  /** @deprecated use `PostV2ObjectsObjectRecordsDataResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV2ObjectsObjectRecordsDataResponse$inboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsDataResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV2ObjectsObjectRecordsDataResponse$outboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsDataResponse$Outbound` instead. */
  export type Outbound = PostV2ObjectsObjectRecordsDataResponse$Outbound;
}

export function postV2ObjectsObjectRecordsDataResponseToJSON(
  postV2ObjectsObjectRecordsDataResponse:
    PostV2ObjectsObjectRecordsDataResponse,
): string {
  return JSON.stringify(
    PostV2ObjectsObjectRecordsDataResponse$outboundSchema.parse(
      postV2ObjectsObjectRecordsDataResponse,
    ),
  );
}

export function postV2ObjectsObjectRecordsDataResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ObjectsObjectRecordsDataResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV2ObjectsObjectRecordsDataResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ObjectsObjectRecordsDataResponse' from JSON`,
  );
}

/** @internal */
export const PostV2ObjectsObjectRecordsResponse$inboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => PostV2ObjectsObjectRecordsDataResponse$inboundSchema),
});

/** @internal */
export type PostV2ObjectsObjectRecordsResponse$Outbound = {
  data: PostV2ObjectsObjectRecordsDataResponse$Outbound;
};

/** @internal */
export const PostV2ObjectsObjectRecordsResponse$outboundSchema: z.ZodType<
  PostV2ObjectsObjectRecordsResponse$Outbound,
  z.ZodTypeDef,
  PostV2ObjectsObjectRecordsResponse
> = z.object({
  data: z.lazy(() => PostV2ObjectsObjectRecordsDataResponse$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ObjectsObjectRecordsResponse$ {
  /** @deprecated use `PostV2ObjectsObjectRecordsResponse$inboundSchema` instead. */
  export const inboundSchema = PostV2ObjectsObjectRecordsResponse$inboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV2ObjectsObjectRecordsResponse$outboundSchema;
  /** @deprecated use `PostV2ObjectsObjectRecordsResponse$Outbound` instead. */
  export type Outbound = PostV2ObjectsObjectRecordsResponse$Outbound;
}

export function postV2ObjectsObjectRecordsResponseToJSON(
  postV2ObjectsObjectRecordsResponse: PostV2ObjectsObjectRecordsResponse,
): string {
  return JSON.stringify(
    PostV2ObjectsObjectRecordsResponse$outboundSchema.parse(
      postV2ObjectsObjectRecordsResponse,
    ),
  );
}

export function postV2ObjectsObjectRecordsResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ObjectsObjectRecordsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV2ObjectsObjectRecordsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ObjectsObjectRecordsResponse' from JSON`,
  );
}
