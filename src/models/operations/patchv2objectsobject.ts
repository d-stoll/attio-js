/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ObjectT,
  ObjectT$inboundSchema,
  ObjectT$Outbound,
  ObjectT$outboundSchema,
} from "../components/object.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PatchV2ObjectsObjectData = {
  /**
   * A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case.
   */
  apiSlug?: string | undefined;
  /**
   * The singular form of the object's name.
   */
  singularNoun?: string | undefined;
  /**
   * The plural form of the object's name.
   */
  pluralNoun?: string | undefined;
};

export type PatchV2ObjectsObjectRequestBody = {
  data: PatchV2ObjectsObjectData;
};

export type PatchV2ObjectsObjectRequest = {
  object: string;
  requestBody: PatchV2ObjectsObjectRequestBody;
};

/**
 * Success
 */
export type PatchV2ObjectsObjectResponse = {
  data: ObjectT;
};

/** @internal */
export const PatchV2ObjectsObjectData$inboundSchema: z.ZodType<
  PatchV2ObjectsObjectData,
  z.ZodTypeDef,
  unknown
> = z.object({
  api_slug: z.string().optional(),
  singular_noun: z.string().optional(),
  plural_noun: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "api_slug": "apiSlug",
    "singular_noun": "singularNoun",
    "plural_noun": "pluralNoun",
  });
});

/** @internal */
export type PatchV2ObjectsObjectData$Outbound = {
  api_slug?: string | undefined;
  singular_noun?: string | undefined;
  plural_noun?: string | undefined;
};

/** @internal */
export const PatchV2ObjectsObjectData$outboundSchema: z.ZodType<
  PatchV2ObjectsObjectData$Outbound,
  z.ZodTypeDef,
  PatchV2ObjectsObjectData
> = z.object({
  apiSlug: z.string().optional(),
  singularNoun: z.string().optional(),
  pluralNoun: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    apiSlug: "api_slug",
    singularNoun: "singular_noun",
    pluralNoun: "plural_noun",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV2ObjectsObjectData$ {
  /** @deprecated use `PatchV2ObjectsObjectData$inboundSchema` instead. */
  export const inboundSchema = PatchV2ObjectsObjectData$inboundSchema;
  /** @deprecated use `PatchV2ObjectsObjectData$outboundSchema` instead. */
  export const outboundSchema = PatchV2ObjectsObjectData$outboundSchema;
  /** @deprecated use `PatchV2ObjectsObjectData$Outbound` instead. */
  export type Outbound = PatchV2ObjectsObjectData$Outbound;
}

export function patchV2ObjectsObjectDataToJSON(
  patchV2ObjectsObjectData: PatchV2ObjectsObjectData,
): string {
  return JSON.stringify(
    PatchV2ObjectsObjectData$outboundSchema.parse(patchV2ObjectsObjectData),
  );
}

export function patchV2ObjectsObjectDataFromJSON(
  jsonString: string,
): SafeParseResult<PatchV2ObjectsObjectData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV2ObjectsObjectData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV2ObjectsObjectData' from JSON`,
  );
}

/** @internal */
export const PatchV2ObjectsObjectRequestBody$inboundSchema: z.ZodType<
  PatchV2ObjectsObjectRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => PatchV2ObjectsObjectData$inboundSchema),
});

/** @internal */
export type PatchV2ObjectsObjectRequestBody$Outbound = {
  data: PatchV2ObjectsObjectData$Outbound;
};

/** @internal */
export const PatchV2ObjectsObjectRequestBody$outboundSchema: z.ZodType<
  PatchV2ObjectsObjectRequestBody$Outbound,
  z.ZodTypeDef,
  PatchV2ObjectsObjectRequestBody
> = z.object({
  data: z.lazy(() => PatchV2ObjectsObjectData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV2ObjectsObjectRequestBody$ {
  /** @deprecated use `PatchV2ObjectsObjectRequestBody$inboundSchema` instead. */
  export const inboundSchema = PatchV2ObjectsObjectRequestBody$inboundSchema;
  /** @deprecated use `PatchV2ObjectsObjectRequestBody$outboundSchema` instead. */
  export const outboundSchema = PatchV2ObjectsObjectRequestBody$outboundSchema;
  /** @deprecated use `PatchV2ObjectsObjectRequestBody$Outbound` instead. */
  export type Outbound = PatchV2ObjectsObjectRequestBody$Outbound;
}

export function patchV2ObjectsObjectRequestBodyToJSON(
  patchV2ObjectsObjectRequestBody: PatchV2ObjectsObjectRequestBody,
): string {
  return JSON.stringify(
    PatchV2ObjectsObjectRequestBody$outboundSchema.parse(
      patchV2ObjectsObjectRequestBody,
    ),
  );
}

export function patchV2ObjectsObjectRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PatchV2ObjectsObjectRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV2ObjectsObjectRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV2ObjectsObjectRequestBody' from JSON`,
  );
}

/** @internal */
export const PatchV2ObjectsObjectRequest$inboundSchema: z.ZodType<
  PatchV2ObjectsObjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: z.string(),
  RequestBody: z.lazy(() => PatchV2ObjectsObjectRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PatchV2ObjectsObjectRequest$Outbound = {
  object: string;
  RequestBody: PatchV2ObjectsObjectRequestBody$Outbound;
};

/** @internal */
export const PatchV2ObjectsObjectRequest$outboundSchema: z.ZodType<
  PatchV2ObjectsObjectRequest$Outbound,
  z.ZodTypeDef,
  PatchV2ObjectsObjectRequest
> = z.object({
  object: z.string(),
  requestBody: z.lazy(() => PatchV2ObjectsObjectRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV2ObjectsObjectRequest$ {
  /** @deprecated use `PatchV2ObjectsObjectRequest$inboundSchema` instead. */
  export const inboundSchema = PatchV2ObjectsObjectRequest$inboundSchema;
  /** @deprecated use `PatchV2ObjectsObjectRequest$outboundSchema` instead. */
  export const outboundSchema = PatchV2ObjectsObjectRequest$outboundSchema;
  /** @deprecated use `PatchV2ObjectsObjectRequest$Outbound` instead. */
  export type Outbound = PatchV2ObjectsObjectRequest$Outbound;
}

export function patchV2ObjectsObjectRequestToJSON(
  patchV2ObjectsObjectRequest: PatchV2ObjectsObjectRequest,
): string {
  return JSON.stringify(
    PatchV2ObjectsObjectRequest$outboundSchema.parse(
      patchV2ObjectsObjectRequest,
    ),
  );
}

export function patchV2ObjectsObjectRequestFromJSON(
  jsonString: string,
): SafeParseResult<PatchV2ObjectsObjectRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV2ObjectsObjectRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV2ObjectsObjectRequest' from JSON`,
  );
}

/** @internal */
export const PatchV2ObjectsObjectResponse$inboundSchema: z.ZodType<
  PatchV2ObjectsObjectResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: ObjectT$inboundSchema,
});

/** @internal */
export type PatchV2ObjectsObjectResponse$Outbound = {
  data: ObjectT$Outbound;
};

/** @internal */
export const PatchV2ObjectsObjectResponse$outboundSchema: z.ZodType<
  PatchV2ObjectsObjectResponse$Outbound,
  z.ZodTypeDef,
  PatchV2ObjectsObjectResponse
> = z.object({
  data: ObjectT$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV2ObjectsObjectResponse$ {
  /** @deprecated use `PatchV2ObjectsObjectResponse$inboundSchema` instead. */
  export const inboundSchema = PatchV2ObjectsObjectResponse$inboundSchema;
  /** @deprecated use `PatchV2ObjectsObjectResponse$outboundSchema` instead. */
  export const outboundSchema = PatchV2ObjectsObjectResponse$outboundSchema;
  /** @deprecated use `PatchV2ObjectsObjectResponse$Outbound` instead. */
  export type Outbound = PatchV2ObjectsObjectResponse$Outbound;
}

export function patchV2ObjectsObjectResponseToJSON(
  patchV2ObjectsObjectResponse: PatchV2ObjectsObjectResponse,
): string {
  return JSON.stringify(
    PatchV2ObjectsObjectResponse$outboundSchema.parse(
      patchV2ObjectsObjectResponse,
    ),
  );
}

export function patchV2ObjectsObjectResponseFromJSON(
  jsonString: string,
): SafeParseResult<PatchV2ObjectsObjectResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV2ObjectsObjectResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV2ObjectsObjectResponse' from JSON`,
  );
}
