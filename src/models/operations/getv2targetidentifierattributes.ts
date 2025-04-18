/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Whether the attributes are on an object or a list.
 */
export const Target = {
  Objects: "objects",
  Lists: "lists",
} as const;
/**
 * Whether the attributes are on an object or a list.
 */
export type Target = ClosedEnum<typeof Target>;

export type GetV2TargetIdentifierAttributesRequest = {
  /**
   * Whether the attributes are on an object or a list.
   */
  target: Target;
  identifier: string;
  limit?: number | undefined;
  offset?: number | undefined;
  showArchived?: boolean | undefined;
};

/**
 * Success
 */
export type GetV2TargetIdentifierAttributesResponseBody = {
  data: Array<components.Attribute>;
};

/** @internal */
export const Target$inboundSchema: z.ZodNativeEnum<typeof Target> = z
  .nativeEnum(Target);

/** @internal */
export const Target$outboundSchema: z.ZodNativeEnum<typeof Target> =
  Target$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Target$ {
  /** @deprecated use `Target$inboundSchema` instead. */
  export const inboundSchema = Target$inboundSchema;
  /** @deprecated use `Target$outboundSchema` instead. */
  export const outboundSchema = Target$outboundSchema;
}

/** @internal */
export const GetV2TargetIdentifierAttributesRequest$inboundSchema: z.ZodType<
  GetV2TargetIdentifierAttributesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  target: Target$inboundSchema,
  identifier: z.string(),
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
  show_archived: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "show_archived": "showArchived",
  });
});

/** @internal */
export type GetV2TargetIdentifierAttributesRequest$Outbound = {
  target: string;
  identifier: string;
  limit?: number | undefined;
  offset?: number | undefined;
  show_archived?: boolean | undefined;
};

/** @internal */
export const GetV2TargetIdentifierAttributesRequest$outboundSchema: z.ZodType<
  GetV2TargetIdentifierAttributesRequest$Outbound,
  z.ZodTypeDef,
  GetV2TargetIdentifierAttributesRequest
> = z.object({
  target: Target$outboundSchema,
  identifier: z.string(),
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
  showArchived: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    showArchived: "show_archived",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2TargetIdentifierAttributesRequest$ {
  /** @deprecated use `GetV2TargetIdentifierAttributesRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV2TargetIdentifierAttributesRequest$inboundSchema;
  /** @deprecated use `GetV2TargetIdentifierAttributesRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV2TargetIdentifierAttributesRequest$outboundSchema;
  /** @deprecated use `GetV2TargetIdentifierAttributesRequest$Outbound` instead. */
  export type Outbound = GetV2TargetIdentifierAttributesRequest$Outbound;
}

export function getV2TargetIdentifierAttributesRequestToJSON(
  getV2TargetIdentifierAttributesRequest:
    GetV2TargetIdentifierAttributesRequest,
): string {
  return JSON.stringify(
    GetV2TargetIdentifierAttributesRequest$outboundSchema.parse(
      getV2TargetIdentifierAttributesRequest,
    ),
  );
}

export function getV2TargetIdentifierAttributesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV2TargetIdentifierAttributesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV2TargetIdentifierAttributesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2TargetIdentifierAttributesRequest' from JSON`,
  );
}

/** @internal */
export const GetV2TargetIdentifierAttributesResponseBody$inboundSchema:
  z.ZodType<
    GetV2TargetIdentifierAttributesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: z.array(components.Attribute$inboundSchema),
  });

/** @internal */
export type GetV2TargetIdentifierAttributesResponseBody$Outbound = {
  data: Array<components.Attribute$Outbound>;
};

/** @internal */
export const GetV2TargetIdentifierAttributesResponseBody$outboundSchema:
  z.ZodType<
    GetV2TargetIdentifierAttributesResponseBody$Outbound,
    z.ZodTypeDef,
    GetV2TargetIdentifierAttributesResponseBody
  > = z.object({
    data: z.array(components.Attribute$outboundSchema),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2TargetIdentifierAttributesResponseBody$ {
  /** @deprecated use `GetV2TargetIdentifierAttributesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetV2TargetIdentifierAttributesResponseBody$inboundSchema;
  /** @deprecated use `GetV2TargetIdentifierAttributesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2TargetIdentifierAttributesResponseBody$outboundSchema;
  /** @deprecated use `GetV2TargetIdentifierAttributesResponseBody$Outbound` instead. */
  export type Outbound = GetV2TargetIdentifierAttributesResponseBody$Outbound;
}

export function getV2TargetIdentifierAttributesResponseBodyToJSON(
  getV2TargetIdentifierAttributesResponseBody:
    GetV2TargetIdentifierAttributesResponseBody,
): string {
  return JSON.stringify(
    GetV2TargetIdentifierAttributesResponseBody$outboundSchema.parse(
      getV2TargetIdentifierAttributesResponseBody,
    ),
  );
}

export function getV2TargetIdentifierAttributesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV2TargetIdentifierAttributesResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV2TargetIdentifierAttributesResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV2TargetIdentifierAttributesResponseBody' from JSON`,
  );
}
