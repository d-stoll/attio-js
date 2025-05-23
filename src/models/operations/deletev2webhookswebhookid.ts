/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteV2WebhooksWebhookIdRequest = {
  webhookId: string;
};

/**
 * Success
 */
export type DeleteV2WebhooksWebhookIdResponse = {};

/** @internal */
export const DeleteV2WebhooksWebhookIdRequest$inboundSchema: z.ZodType<
  DeleteV2WebhooksWebhookIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "webhook_id": "webhookId",
  });
});

/** @internal */
export type DeleteV2WebhooksWebhookIdRequest$Outbound = {
  webhook_id: string;
};

/** @internal */
export const DeleteV2WebhooksWebhookIdRequest$outboundSchema: z.ZodType<
  DeleteV2WebhooksWebhookIdRequest$Outbound,
  z.ZodTypeDef,
  DeleteV2WebhooksWebhookIdRequest
> = z.object({
  webhookId: z.string(),
}).transform((v) => {
  return remap$(v, {
    webhookId: "webhook_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV2WebhooksWebhookIdRequest$ {
  /** @deprecated use `DeleteV2WebhooksWebhookIdRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteV2WebhooksWebhookIdRequest$inboundSchema;
  /** @deprecated use `DeleteV2WebhooksWebhookIdRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteV2WebhooksWebhookIdRequest$outboundSchema;
  /** @deprecated use `DeleteV2WebhooksWebhookIdRequest$Outbound` instead. */
  export type Outbound = DeleteV2WebhooksWebhookIdRequest$Outbound;
}

export function deleteV2WebhooksWebhookIdRequestToJSON(
  deleteV2WebhooksWebhookIdRequest: DeleteV2WebhooksWebhookIdRequest,
): string {
  return JSON.stringify(
    DeleteV2WebhooksWebhookIdRequest$outboundSchema.parse(
      deleteV2WebhooksWebhookIdRequest,
    ),
  );
}

export function deleteV2WebhooksWebhookIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteV2WebhooksWebhookIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteV2WebhooksWebhookIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteV2WebhooksWebhookIdRequest' from JSON`,
  );
}

/** @internal */
export const DeleteV2WebhooksWebhookIdResponse$inboundSchema: z.ZodType<
  DeleteV2WebhooksWebhookIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DeleteV2WebhooksWebhookIdResponse$Outbound = {};

/** @internal */
export const DeleteV2WebhooksWebhookIdResponse$outboundSchema: z.ZodType<
  DeleteV2WebhooksWebhookIdResponse$Outbound,
  z.ZodTypeDef,
  DeleteV2WebhooksWebhookIdResponse
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV2WebhooksWebhookIdResponse$ {
  /** @deprecated use `DeleteV2WebhooksWebhookIdResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteV2WebhooksWebhookIdResponse$inboundSchema;
  /** @deprecated use `DeleteV2WebhooksWebhookIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV2WebhooksWebhookIdResponse$outboundSchema;
  /** @deprecated use `DeleteV2WebhooksWebhookIdResponse$Outbound` instead. */
  export type Outbound = DeleteV2WebhooksWebhookIdResponse$Outbound;
}

export function deleteV2WebhooksWebhookIdResponseToJSON(
  deleteV2WebhooksWebhookIdResponse: DeleteV2WebhooksWebhookIdResponse,
): string {
  return JSON.stringify(
    DeleteV2WebhooksWebhookIdResponse$outboundSchema.parse(
      deleteV2WebhooksWebhookIdResponse,
    ),
  );
}

export function deleteV2WebhooksWebhookIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteV2WebhooksWebhookIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteV2WebhooksWebhookIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteV2WebhooksWebhookIdResponse' from JSON`,
  );
}
