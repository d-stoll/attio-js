/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetV2WebhooksRequest = {
  limit?: number | undefined;
  offset?: number | undefined;
};

/**
 * Type of event the webhook is subscribed to.
 */
export const GetV2WebhooksEventType = {
  CommentCreated: "comment.created",
  CommentResolved: "comment.resolved",
  CommentUnresolved: "comment.unresolved",
  CommentDeleted: "comment.deleted",
  ListCreated: "list.created",
  ListUpdated: "list.updated",
  ListDeleted: "list.deleted",
  ListAttributeCreated: "list-attribute.created",
  ListAttributeUpdated: "list-attribute.updated",
  ListEntryCreated: "list-entry.created",
  ListEntryUpdated: "list-entry.updated",
  ListEntryDeleted: "list-entry.deleted",
  ObjectAttributeCreated: "object-attribute.created",
  ObjectAttributeUpdated: "object-attribute.updated",
  NoteCreated: "note.created",
  NoteUpdated: "note.updated",
  NoteDeleted: "note.deleted",
  RecordCreated: "record.created",
  RecordMerged: "record.merged",
  RecordUpdated: "record.updated",
  RecordDeleted: "record.deleted",
  TaskCreated: "task.created",
  TaskUpdated: "task.updated",
  TaskDeleted: "task.deleted",
  WorkspaceMemberCreated: "workspace-member.created",
} as const;
/**
 * Type of event the webhook is subscribed to.
 */
export type GetV2WebhooksEventType = ClosedEnum<typeof GetV2WebhooksEventType>;

export const GetV2WebhooksDollarAndOperator = {
  NotEquals: "not_equals",
} as const;
export type GetV2WebhooksDollarAndOperator = ClosedEnum<
  typeof GetV2WebhooksDollarAndOperator
>;

export type GetV2WebhooksDollarAnd2 = {
  field: string;
  operator: GetV2WebhooksDollarAndOperator;
  value: string;
};

export const GetV2WebhooksDollarAndWebhooksOperator = {
  Equals: "equals",
} as const;
export type GetV2WebhooksDollarAndWebhooksOperator = ClosedEnum<
  typeof GetV2WebhooksDollarAndWebhooksOperator
>;

export type GetV2WebhooksDollarAnd1 = {
  field: string;
  operator: GetV2WebhooksDollarAndWebhooksOperator;
  value: string;
};

export type GetV2WebhooksFilterDollarAnd =
  | GetV2WebhooksDollarAnd1
  | GetV2WebhooksDollarAnd2;

export type GetV2WebhooksFilter2 = {
  dollarAnd: Array<GetV2WebhooksDollarAnd1 | GetV2WebhooksDollarAnd2>;
};

export const GetV2WebhooksDollarOrWebhooksOperator = {
  NotEquals: "not_equals",
} as const;
export type GetV2WebhooksDollarOrWebhooksOperator = ClosedEnum<
  typeof GetV2WebhooksDollarOrWebhooksOperator
>;

export type GetV2WebhooksDollarOr2 = {
  field: string;
  operator: GetV2WebhooksDollarOrWebhooksOperator;
  value: string;
};

export const GetV2WebhooksDollarOrOperator = {
  Equals: "equals",
} as const;
export type GetV2WebhooksDollarOrOperator = ClosedEnum<
  typeof GetV2WebhooksDollarOrOperator
>;

export type GetV2WebhooksDollarOr1 = {
  field: string;
  operator: GetV2WebhooksDollarOrOperator;
  value: string;
};

export type GetV2WebhooksFilterDollarOr =
  | GetV2WebhooksDollarOr1
  | GetV2WebhooksDollarOr2;

export type GetV2WebhooksFilter1 = {
  dollarOr: Array<GetV2WebhooksDollarOr1 | GetV2WebhooksDollarOr2>;
};

/**
 * Filters to determine whether the webhook event should be sent. If null, the filter always passes.
 */
export type GetV2WebhooksFilter = GetV2WebhooksFilter1 | GetV2WebhooksFilter2;

export type GetV2WebhooksSubscriptions = {
  /**
   * Type of event the webhook is subscribed to.
   */
  eventType: GetV2WebhooksEventType;
  /**
   * Filters to determine whether the webhook event should be sent. If null, the filter always passes.
   */
  filter: GetV2WebhooksFilter1 | GetV2WebhooksFilter2 | null;
};

export type GetV2WebhooksId = {
  /**
   * The ID of the workspace the webhook belongs to.
   */
  workspaceId: string;
  /**
   * The ID of the webhook.
   */
  webhookId: string;
};

/**
 * The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.
 */
export const Status = {
  Active: "active",
  Degraded: "degraded",
  Inactive: "inactive",
} as const;
/**
 * The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.
 */
export type Status = ClosedEnum<typeof Status>;

export type GetV2WebhooksData = {
  /**
   * URL where the webhook events will be delivered to.
   */
  targetUrl: string;
  /**
   * One or more events the webhook is subscribed to.
   */
  subscriptions: Array<GetV2WebhooksSubscriptions>;
  id: GetV2WebhooksId;
  /**
   * The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.
   */
  status: Status;
  /**
   * When the webhook was created.
   */
  createdAt: string;
};

/**
 * Success
 */
export type GetV2WebhooksResponseBody = {
  data: Array<GetV2WebhooksData>;
};

/** @internal */
export const GetV2WebhooksRequest$inboundSchema: z.ZodType<
  GetV2WebhooksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
});

/** @internal */
export type GetV2WebhooksRequest$Outbound = {
  limit?: number | undefined;
  offset?: number | undefined;
};

/** @internal */
export const GetV2WebhooksRequest$outboundSchema: z.ZodType<
  GetV2WebhooksRequest$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksRequest
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksRequest$ {
  /** @deprecated use `GetV2WebhooksRequest$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksRequest$inboundSchema;
  /** @deprecated use `GetV2WebhooksRequest$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksRequest$outboundSchema;
  /** @deprecated use `GetV2WebhooksRequest$Outbound` instead. */
  export type Outbound = GetV2WebhooksRequest$Outbound;
}

export function getV2WebhooksRequestToJSON(
  getV2WebhooksRequest: GetV2WebhooksRequest,
): string {
  return JSON.stringify(
    GetV2WebhooksRequest$outboundSchema.parse(getV2WebhooksRequest),
  );
}

export function getV2WebhooksRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksRequest' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksEventType$inboundSchema: z.ZodNativeEnum<
  typeof GetV2WebhooksEventType
> = z.nativeEnum(GetV2WebhooksEventType);

/** @internal */
export const GetV2WebhooksEventType$outboundSchema: z.ZodNativeEnum<
  typeof GetV2WebhooksEventType
> = GetV2WebhooksEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksEventType$ {
  /** @deprecated use `GetV2WebhooksEventType$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksEventType$inboundSchema;
  /** @deprecated use `GetV2WebhooksEventType$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksEventType$outboundSchema;
}

/** @internal */
export const GetV2WebhooksDollarAndOperator$inboundSchema: z.ZodNativeEnum<
  typeof GetV2WebhooksDollarAndOperator
> = z.nativeEnum(GetV2WebhooksDollarAndOperator);

/** @internal */
export const GetV2WebhooksDollarAndOperator$outboundSchema: z.ZodNativeEnum<
  typeof GetV2WebhooksDollarAndOperator
> = GetV2WebhooksDollarAndOperator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksDollarAndOperator$ {
  /** @deprecated use `GetV2WebhooksDollarAndOperator$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksDollarAndOperator$inboundSchema;
  /** @deprecated use `GetV2WebhooksDollarAndOperator$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksDollarAndOperator$outboundSchema;
}

/** @internal */
export const GetV2WebhooksDollarAnd2$inboundSchema: z.ZodType<
  GetV2WebhooksDollarAnd2,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: z.string(),
  operator: GetV2WebhooksDollarAndOperator$inboundSchema,
  value: z.string(),
});

/** @internal */
export type GetV2WebhooksDollarAnd2$Outbound = {
  field: string;
  operator: string;
  value: string;
};

/** @internal */
export const GetV2WebhooksDollarAnd2$outboundSchema: z.ZodType<
  GetV2WebhooksDollarAnd2$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksDollarAnd2
> = z.object({
  field: z.string(),
  operator: GetV2WebhooksDollarAndOperator$outboundSchema,
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksDollarAnd2$ {
  /** @deprecated use `GetV2WebhooksDollarAnd2$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksDollarAnd2$inboundSchema;
  /** @deprecated use `GetV2WebhooksDollarAnd2$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksDollarAnd2$outboundSchema;
  /** @deprecated use `GetV2WebhooksDollarAnd2$Outbound` instead. */
  export type Outbound = GetV2WebhooksDollarAnd2$Outbound;
}

export function getV2WebhooksDollarAnd2ToJSON(
  getV2WebhooksDollarAnd2: GetV2WebhooksDollarAnd2,
): string {
  return JSON.stringify(
    GetV2WebhooksDollarAnd2$outboundSchema.parse(getV2WebhooksDollarAnd2),
  );
}

export function getV2WebhooksDollarAnd2FromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksDollarAnd2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksDollarAnd2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksDollarAnd2' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksDollarAndWebhooksOperator$inboundSchema:
  z.ZodNativeEnum<typeof GetV2WebhooksDollarAndWebhooksOperator> = z.nativeEnum(
    GetV2WebhooksDollarAndWebhooksOperator,
  );

/** @internal */
export const GetV2WebhooksDollarAndWebhooksOperator$outboundSchema:
  z.ZodNativeEnum<typeof GetV2WebhooksDollarAndWebhooksOperator> =
    GetV2WebhooksDollarAndWebhooksOperator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksDollarAndWebhooksOperator$ {
  /** @deprecated use `GetV2WebhooksDollarAndWebhooksOperator$inboundSchema` instead. */
  export const inboundSchema =
    GetV2WebhooksDollarAndWebhooksOperator$inboundSchema;
  /** @deprecated use `GetV2WebhooksDollarAndWebhooksOperator$outboundSchema` instead. */
  export const outboundSchema =
    GetV2WebhooksDollarAndWebhooksOperator$outboundSchema;
}

/** @internal */
export const GetV2WebhooksDollarAnd1$inboundSchema: z.ZodType<
  GetV2WebhooksDollarAnd1,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: z.string(),
  operator: GetV2WebhooksDollarAndWebhooksOperator$inboundSchema,
  value: z.string(),
});

/** @internal */
export type GetV2WebhooksDollarAnd1$Outbound = {
  field: string;
  operator: string;
  value: string;
};

/** @internal */
export const GetV2WebhooksDollarAnd1$outboundSchema: z.ZodType<
  GetV2WebhooksDollarAnd1$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksDollarAnd1
> = z.object({
  field: z.string(),
  operator: GetV2WebhooksDollarAndWebhooksOperator$outboundSchema,
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksDollarAnd1$ {
  /** @deprecated use `GetV2WebhooksDollarAnd1$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksDollarAnd1$inboundSchema;
  /** @deprecated use `GetV2WebhooksDollarAnd1$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksDollarAnd1$outboundSchema;
  /** @deprecated use `GetV2WebhooksDollarAnd1$Outbound` instead. */
  export type Outbound = GetV2WebhooksDollarAnd1$Outbound;
}

export function getV2WebhooksDollarAnd1ToJSON(
  getV2WebhooksDollarAnd1: GetV2WebhooksDollarAnd1,
): string {
  return JSON.stringify(
    GetV2WebhooksDollarAnd1$outboundSchema.parse(getV2WebhooksDollarAnd1),
  );
}

export function getV2WebhooksDollarAnd1FromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksDollarAnd1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksDollarAnd1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksDollarAnd1' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksFilterDollarAnd$inboundSchema: z.ZodType<
  GetV2WebhooksFilterDollarAnd,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetV2WebhooksDollarAnd1$inboundSchema),
  z.lazy(() => GetV2WebhooksDollarAnd2$inboundSchema),
]);

/** @internal */
export type GetV2WebhooksFilterDollarAnd$Outbound =
  | GetV2WebhooksDollarAnd1$Outbound
  | GetV2WebhooksDollarAnd2$Outbound;

/** @internal */
export const GetV2WebhooksFilterDollarAnd$outboundSchema: z.ZodType<
  GetV2WebhooksFilterDollarAnd$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksFilterDollarAnd
> = z.union([
  z.lazy(() => GetV2WebhooksDollarAnd1$outboundSchema),
  z.lazy(() => GetV2WebhooksDollarAnd2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksFilterDollarAnd$ {
  /** @deprecated use `GetV2WebhooksFilterDollarAnd$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksFilterDollarAnd$inboundSchema;
  /** @deprecated use `GetV2WebhooksFilterDollarAnd$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksFilterDollarAnd$outboundSchema;
  /** @deprecated use `GetV2WebhooksFilterDollarAnd$Outbound` instead. */
  export type Outbound = GetV2WebhooksFilterDollarAnd$Outbound;
}

export function getV2WebhooksFilterDollarAndToJSON(
  getV2WebhooksFilterDollarAnd: GetV2WebhooksFilterDollarAnd,
): string {
  return JSON.stringify(
    GetV2WebhooksFilterDollarAnd$outboundSchema.parse(
      getV2WebhooksFilterDollarAnd,
    ),
  );
}

export function getV2WebhooksFilterDollarAndFromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksFilterDollarAnd, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksFilterDollarAnd$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksFilterDollarAnd' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksFilter2$inboundSchema: z.ZodType<
  GetV2WebhooksFilter2,
  z.ZodTypeDef,
  unknown
> = z.object({
  $and: z.array(
    z.union([
      z.lazy(() => GetV2WebhooksDollarAnd1$inboundSchema),
      z.lazy(() => GetV2WebhooksDollarAnd2$inboundSchema),
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    "$and": "dollarAnd",
  });
});

/** @internal */
export type GetV2WebhooksFilter2$Outbound = {
  $and: Array<
    GetV2WebhooksDollarAnd1$Outbound | GetV2WebhooksDollarAnd2$Outbound
  >;
};

/** @internal */
export const GetV2WebhooksFilter2$outboundSchema: z.ZodType<
  GetV2WebhooksFilter2$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksFilter2
> = z.object({
  dollarAnd: z.array(
    z.union([
      z.lazy(() => GetV2WebhooksDollarAnd1$outboundSchema),
      z.lazy(() => GetV2WebhooksDollarAnd2$outboundSchema),
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    dollarAnd: "$and",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksFilter2$ {
  /** @deprecated use `GetV2WebhooksFilter2$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksFilter2$inboundSchema;
  /** @deprecated use `GetV2WebhooksFilter2$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksFilter2$outboundSchema;
  /** @deprecated use `GetV2WebhooksFilter2$Outbound` instead. */
  export type Outbound = GetV2WebhooksFilter2$Outbound;
}

export function getV2WebhooksFilter2ToJSON(
  getV2WebhooksFilter2: GetV2WebhooksFilter2,
): string {
  return JSON.stringify(
    GetV2WebhooksFilter2$outboundSchema.parse(getV2WebhooksFilter2),
  );
}

export function getV2WebhooksFilter2FromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksFilter2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksFilter2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksFilter2' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksDollarOrWebhooksOperator$inboundSchema:
  z.ZodNativeEnum<typeof GetV2WebhooksDollarOrWebhooksOperator> = z.nativeEnum(
    GetV2WebhooksDollarOrWebhooksOperator,
  );

/** @internal */
export const GetV2WebhooksDollarOrWebhooksOperator$outboundSchema:
  z.ZodNativeEnum<typeof GetV2WebhooksDollarOrWebhooksOperator> =
    GetV2WebhooksDollarOrWebhooksOperator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksDollarOrWebhooksOperator$ {
  /** @deprecated use `GetV2WebhooksDollarOrWebhooksOperator$inboundSchema` instead. */
  export const inboundSchema =
    GetV2WebhooksDollarOrWebhooksOperator$inboundSchema;
  /** @deprecated use `GetV2WebhooksDollarOrWebhooksOperator$outboundSchema` instead. */
  export const outboundSchema =
    GetV2WebhooksDollarOrWebhooksOperator$outboundSchema;
}

/** @internal */
export const GetV2WebhooksDollarOr2$inboundSchema: z.ZodType<
  GetV2WebhooksDollarOr2,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: z.string(),
  operator: GetV2WebhooksDollarOrWebhooksOperator$inboundSchema,
  value: z.string(),
});

/** @internal */
export type GetV2WebhooksDollarOr2$Outbound = {
  field: string;
  operator: string;
  value: string;
};

/** @internal */
export const GetV2WebhooksDollarOr2$outboundSchema: z.ZodType<
  GetV2WebhooksDollarOr2$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksDollarOr2
> = z.object({
  field: z.string(),
  operator: GetV2WebhooksDollarOrWebhooksOperator$outboundSchema,
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksDollarOr2$ {
  /** @deprecated use `GetV2WebhooksDollarOr2$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksDollarOr2$inboundSchema;
  /** @deprecated use `GetV2WebhooksDollarOr2$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksDollarOr2$outboundSchema;
  /** @deprecated use `GetV2WebhooksDollarOr2$Outbound` instead. */
  export type Outbound = GetV2WebhooksDollarOr2$Outbound;
}

export function getV2WebhooksDollarOr2ToJSON(
  getV2WebhooksDollarOr2: GetV2WebhooksDollarOr2,
): string {
  return JSON.stringify(
    GetV2WebhooksDollarOr2$outboundSchema.parse(getV2WebhooksDollarOr2),
  );
}

export function getV2WebhooksDollarOr2FromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksDollarOr2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksDollarOr2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksDollarOr2' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksDollarOrOperator$inboundSchema: z.ZodNativeEnum<
  typeof GetV2WebhooksDollarOrOperator
> = z.nativeEnum(GetV2WebhooksDollarOrOperator);

/** @internal */
export const GetV2WebhooksDollarOrOperator$outboundSchema: z.ZodNativeEnum<
  typeof GetV2WebhooksDollarOrOperator
> = GetV2WebhooksDollarOrOperator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksDollarOrOperator$ {
  /** @deprecated use `GetV2WebhooksDollarOrOperator$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksDollarOrOperator$inboundSchema;
  /** @deprecated use `GetV2WebhooksDollarOrOperator$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksDollarOrOperator$outboundSchema;
}

/** @internal */
export const GetV2WebhooksDollarOr1$inboundSchema: z.ZodType<
  GetV2WebhooksDollarOr1,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: z.string(),
  operator: GetV2WebhooksDollarOrOperator$inboundSchema,
  value: z.string(),
});

/** @internal */
export type GetV2WebhooksDollarOr1$Outbound = {
  field: string;
  operator: string;
  value: string;
};

/** @internal */
export const GetV2WebhooksDollarOr1$outboundSchema: z.ZodType<
  GetV2WebhooksDollarOr1$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksDollarOr1
> = z.object({
  field: z.string(),
  operator: GetV2WebhooksDollarOrOperator$outboundSchema,
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksDollarOr1$ {
  /** @deprecated use `GetV2WebhooksDollarOr1$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksDollarOr1$inboundSchema;
  /** @deprecated use `GetV2WebhooksDollarOr1$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksDollarOr1$outboundSchema;
  /** @deprecated use `GetV2WebhooksDollarOr1$Outbound` instead. */
  export type Outbound = GetV2WebhooksDollarOr1$Outbound;
}

export function getV2WebhooksDollarOr1ToJSON(
  getV2WebhooksDollarOr1: GetV2WebhooksDollarOr1,
): string {
  return JSON.stringify(
    GetV2WebhooksDollarOr1$outboundSchema.parse(getV2WebhooksDollarOr1),
  );
}

export function getV2WebhooksDollarOr1FromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksDollarOr1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksDollarOr1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksDollarOr1' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksFilterDollarOr$inboundSchema: z.ZodType<
  GetV2WebhooksFilterDollarOr,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetV2WebhooksDollarOr1$inboundSchema),
  z.lazy(() => GetV2WebhooksDollarOr2$inboundSchema),
]);

/** @internal */
export type GetV2WebhooksFilterDollarOr$Outbound =
  | GetV2WebhooksDollarOr1$Outbound
  | GetV2WebhooksDollarOr2$Outbound;

/** @internal */
export const GetV2WebhooksFilterDollarOr$outboundSchema: z.ZodType<
  GetV2WebhooksFilterDollarOr$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksFilterDollarOr
> = z.union([
  z.lazy(() => GetV2WebhooksDollarOr1$outboundSchema),
  z.lazy(() => GetV2WebhooksDollarOr2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksFilterDollarOr$ {
  /** @deprecated use `GetV2WebhooksFilterDollarOr$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksFilterDollarOr$inboundSchema;
  /** @deprecated use `GetV2WebhooksFilterDollarOr$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksFilterDollarOr$outboundSchema;
  /** @deprecated use `GetV2WebhooksFilterDollarOr$Outbound` instead. */
  export type Outbound = GetV2WebhooksFilterDollarOr$Outbound;
}

export function getV2WebhooksFilterDollarOrToJSON(
  getV2WebhooksFilterDollarOr: GetV2WebhooksFilterDollarOr,
): string {
  return JSON.stringify(
    GetV2WebhooksFilterDollarOr$outboundSchema.parse(
      getV2WebhooksFilterDollarOr,
    ),
  );
}

export function getV2WebhooksFilterDollarOrFromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksFilterDollarOr, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksFilterDollarOr$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksFilterDollarOr' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksFilter1$inboundSchema: z.ZodType<
  GetV2WebhooksFilter1,
  z.ZodTypeDef,
  unknown
> = z.object({
  $or: z.array(
    z.union([
      z.lazy(() => GetV2WebhooksDollarOr1$inboundSchema),
      z.lazy(() => GetV2WebhooksDollarOr2$inboundSchema),
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    "$or": "dollarOr",
  });
});

/** @internal */
export type GetV2WebhooksFilter1$Outbound = {
  $or: Array<GetV2WebhooksDollarOr1$Outbound | GetV2WebhooksDollarOr2$Outbound>;
};

/** @internal */
export const GetV2WebhooksFilter1$outboundSchema: z.ZodType<
  GetV2WebhooksFilter1$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksFilter1
> = z.object({
  dollarOr: z.array(
    z.union([
      z.lazy(() => GetV2WebhooksDollarOr1$outboundSchema),
      z.lazy(() => GetV2WebhooksDollarOr2$outboundSchema),
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    dollarOr: "$or",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksFilter1$ {
  /** @deprecated use `GetV2WebhooksFilter1$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksFilter1$inboundSchema;
  /** @deprecated use `GetV2WebhooksFilter1$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksFilter1$outboundSchema;
  /** @deprecated use `GetV2WebhooksFilter1$Outbound` instead. */
  export type Outbound = GetV2WebhooksFilter1$Outbound;
}

export function getV2WebhooksFilter1ToJSON(
  getV2WebhooksFilter1: GetV2WebhooksFilter1,
): string {
  return JSON.stringify(
    GetV2WebhooksFilter1$outboundSchema.parse(getV2WebhooksFilter1),
  );
}

export function getV2WebhooksFilter1FromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksFilter1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksFilter1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksFilter1' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksFilter$inboundSchema: z.ZodType<
  GetV2WebhooksFilter,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetV2WebhooksFilter1$inboundSchema),
  z.lazy(() => GetV2WebhooksFilter2$inboundSchema),
]);

/** @internal */
export type GetV2WebhooksFilter$Outbound =
  | GetV2WebhooksFilter1$Outbound
  | GetV2WebhooksFilter2$Outbound;

/** @internal */
export const GetV2WebhooksFilter$outboundSchema: z.ZodType<
  GetV2WebhooksFilter$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksFilter
> = z.union([
  z.lazy(() => GetV2WebhooksFilter1$outboundSchema),
  z.lazy(() => GetV2WebhooksFilter2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksFilter$ {
  /** @deprecated use `GetV2WebhooksFilter$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksFilter$inboundSchema;
  /** @deprecated use `GetV2WebhooksFilter$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksFilter$outboundSchema;
  /** @deprecated use `GetV2WebhooksFilter$Outbound` instead. */
  export type Outbound = GetV2WebhooksFilter$Outbound;
}

export function getV2WebhooksFilterToJSON(
  getV2WebhooksFilter: GetV2WebhooksFilter,
): string {
  return JSON.stringify(
    GetV2WebhooksFilter$outboundSchema.parse(getV2WebhooksFilter),
  );
}

export function getV2WebhooksFilterFromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksFilter' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksSubscriptions$inboundSchema: z.ZodType<
  GetV2WebhooksSubscriptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  event_type: GetV2WebhooksEventType$inboundSchema,
  filter: z.nullable(
    z.union([
      z.lazy(() => GetV2WebhooksFilter1$inboundSchema),
      z.lazy(() => GetV2WebhooksFilter2$inboundSchema),
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    "event_type": "eventType",
  });
});

/** @internal */
export type GetV2WebhooksSubscriptions$Outbound = {
  event_type: string;
  filter: GetV2WebhooksFilter1$Outbound | GetV2WebhooksFilter2$Outbound | null;
};

/** @internal */
export const GetV2WebhooksSubscriptions$outboundSchema: z.ZodType<
  GetV2WebhooksSubscriptions$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksSubscriptions
> = z.object({
  eventType: GetV2WebhooksEventType$outboundSchema,
  filter: z.nullable(
    z.union([
      z.lazy(() => GetV2WebhooksFilter1$outboundSchema),
      z.lazy(() => GetV2WebhooksFilter2$outboundSchema),
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    eventType: "event_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksSubscriptions$ {
  /** @deprecated use `GetV2WebhooksSubscriptions$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksSubscriptions$inboundSchema;
  /** @deprecated use `GetV2WebhooksSubscriptions$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksSubscriptions$outboundSchema;
  /** @deprecated use `GetV2WebhooksSubscriptions$Outbound` instead. */
  export type Outbound = GetV2WebhooksSubscriptions$Outbound;
}

export function getV2WebhooksSubscriptionsToJSON(
  getV2WebhooksSubscriptions: GetV2WebhooksSubscriptions,
): string {
  return JSON.stringify(
    GetV2WebhooksSubscriptions$outboundSchema.parse(getV2WebhooksSubscriptions),
  );
}

export function getV2WebhooksSubscriptionsFromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksSubscriptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksSubscriptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksSubscriptions' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksId$inboundSchema: z.ZodType<
  GetV2WebhooksId,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  webhook_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "webhook_id": "webhookId",
  });
});

/** @internal */
export type GetV2WebhooksId$Outbound = {
  workspace_id: string;
  webhook_id: string;
};

/** @internal */
export const GetV2WebhooksId$outboundSchema: z.ZodType<
  GetV2WebhooksId$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksId
> = z.object({
  workspaceId: z.string(),
  webhookId: z.string(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    webhookId: "webhook_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksId$ {
  /** @deprecated use `GetV2WebhooksId$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksId$inboundSchema;
  /** @deprecated use `GetV2WebhooksId$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksId$outboundSchema;
  /** @deprecated use `GetV2WebhooksId$Outbound` instead. */
  export type Outbound = GetV2WebhooksId$Outbound;
}

export function getV2WebhooksIdToJSON(
  getV2WebhooksId: GetV2WebhooksId,
): string {
  return JSON.stringify(GetV2WebhooksId$outboundSchema.parse(getV2WebhooksId));
}

export function getV2WebhooksIdFromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksId' from JSON`,
  );
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const GetV2WebhooksData$inboundSchema: z.ZodType<
  GetV2WebhooksData,
  z.ZodTypeDef,
  unknown
> = z.object({
  target_url: z.string(),
  subscriptions: z.array(
    z.lazy(() => GetV2WebhooksSubscriptions$inboundSchema),
  ),
  id: z.lazy(() => GetV2WebhooksId$inboundSchema),
  status: Status$inboundSchema,
  created_at: z.string(),
}).transform((v) => {
  return remap$(v, {
    "target_url": "targetUrl",
    "created_at": "createdAt",
  });
});

/** @internal */
export type GetV2WebhooksData$Outbound = {
  target_url: string;
  subscriptions: Array<GetV2WebhooksSubscriptions$Outbound>;
  id: GetV2WebhooksId$Outbound;
  status: string;
  created_at: string;
};

/** @internal */
export const GetV2WebhooksData$outboundSchema: z.ZodType<
  GetV2WebhooksData$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksData
> = z.object({
  targetUrl: z.string(),
  subscriptions: z.array(
    z.lazy(() => GetV2WebhooksSubscriptions$outboundSchema),
  ),
  id: z.lazy(() => GetV2WebhooksId$outboundSchema),
  status: Status$outboundSchema,
  createdAt: z.string(),
}).transform((v) => {
  return remap$(v, {
    targetUrl: "target_url",
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksData$ {
  /** @deprecated use `GetV2WebhooksData$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksData$inboundSchema;
  /** @deprecated use `GetV2WebhooksData$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksData$outboundSchema;
  /** @deprecated use `GetV2WebhooksData$Outbound` instead. */
  export type Outbound = GetV2WebhooksData$Outbound;
}

export function getV2WebhooksDataToJSON(
  getV2WebhooksData: GetV2WebhooksData,
): string {
  return JSON.stringify(
    GetV2WebhooksData$outboundSchema.parse(getV2WebhooksData),
  );
}

export function getV2WebhooksDataFromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksData' from JSON`,
  );
}

/** @internal */
export const GetV2WebhooksResponseBody$inboundSchema: z.ZodType<
  GetV2WebhooksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(z.lazy(() => GetV2WebhooksData$inboundSchema)),
});

/** @internal */
export type GetV2WebhooksResponseBody$Outbound = {
  data: Array<GetV2WebhooksData$Outbound>;
};

/** @internal */
export const GetV2WebhooksResponseBody$outboundSchema: z.ZodType<
  GetV2WebhooksResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2WebhooksResponseBody
> = z.object({
  data: z.array(z.lazy(() => GetV2WebhooksData$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2WebhooksResponseBody$ {
  /** @deprecated use `GetV2WebhooksResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2WebhooksResponseBody$inboundSchema;
  /** @deprecated use `GetV2WebhooksResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetV2WebhooksResponseBody$outboundSchema;
  /** @deprecated use `GetV2WebhooksResponseBody$Outbound` instead. */
  export type Outbound = GetV2WebhooksResponseBody$Outbound;
}

export function getV2WebhooksResponseBodyToJSON(
  getV2WebhooksResponseBody: GetV2WebhooksResponseBody,
): string {
  return JSON.stringify(
    GetV2WebhooksResponseBody$outboundSchema.parse(getV2WebhooksResponseBody),
  );
}

export function getV2WebhooksResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetV2WebhooksResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetV2WebhooksResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2WebhooksResponseBody' from JSON`,
  );
}
