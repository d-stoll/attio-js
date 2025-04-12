/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const DeleteV2WebhooksWebhookIdType = {
  InvalidRequestError: "invalid_request_error",
} as const;
export type DeleteV2WebhooksWebhookIdType = ClosedEnum<
  typeof DeleteV2WebhooksWebhookIdType
>;

export const DeleteV2WebhooksWebhookIdCode = {
  NotFound: "not_found",
} as const;
export type DeleteV2WebhooksWebhookIdCode = ClosedEnum<
  typeof DeleteV2WebhooksWebhookIdCode
>;

/**
 * Not Found
 */
export type DeleteV2WebhooksWebhookIdResponseBodyData = {
  statusCode: number;
  type: DeleteV2WebhooksWebhookIdType;
  code: DeleteV2WebhooksWebhookIdCode;
  message: string;
};

/**
 * Not Found
 */
export class DeleteV2WebhooksWebhookIdResponseBody extends Error {
  statusCode: number;
  type: DeleteV2WebhooksWebhookIdType;
  code: DeleteV2WebhooksWebhookIdCode;

  /** The original data that was passed to this error instance. */
  data$: DeleteV2WebhooksWebhookIdResponseBodyData;

  constructor(err: DeleteV2WebhooksWebhookIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "DeleteV2WebhooksWebhookIdResponseBody";
  }
}

/** @internal */
export const DeleteV2WebhooksWebhookIdType$inboundSchema: z.ZodNativeEnum<
  typeof DeleteV2WebhooksWebhookIdType
> = z.nativeEnum(DeleteV2WebhooksWebhookIdType);

/** @internal */
export const DeleteV2WebhooksWebhookIdType$outboundSchema: z.ZodNativeEnum<
  typeof DeleteV2WebhooksWebhookIdType
> = DeleteV2WebhooksWebhookIdType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV2WebhooksWebhookIdType$ {
  /** @deprecated use `DeleteV2WebhooksWebhookIdType$inboundSchema` instead. */
  export const inboundSchema = DeleteV2WebhooksWebhookIdType$inboundSchema;
  /** @deprecated use `DeleteV2WebhooksWebhookIdType$outboundSchema` instead. */
  export const outboundSchema = DeleteV2WebhooksWebhookIdType$outboundSchema;
}

/** @internal */
export const DeleteV2WebhooksWebhookIdCode$inboundSchema: z.ZodNativeEnum<
  typeof DeleteV2WebhooksWebhookIdCode
> = z.nativeEnum(DeleteV2WebhooksWebhookIdCode);

/** @internal */
export const DeleteV2WebhooksWebhookIdCode$outboundSchema: z.ZodNativeEnum<
  typeof DeleteV2WebhooksWebhookIdCode
> = DeleteV2WebhooksWebhookIdCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV2WebhooksWebhookIdCode$ {
  /** @deprecated use `DeleteV2WebhooksWebhookIdCode$inboundSchema` instead. */
  export const inboundSchema = DeleteV2WebhooksWebhookIdCode$inboundSchema;
  /** @deprecated use `DeleteV2WebhooksWebhookIdCode$outboundSchema` instead. */
  export const outboundSchema = DeleteV2WebhooksWebhookIdCode$outboundSchema;
}

/** @internal */
export const DeleteV2WebhooksWebhookIdResponseBody$inboundSchema: z.ZodType<
  DeleteV2WebhooksWebhookIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: DeleteV2WebhooksWebhookIdType$inboundSchema,
  code: DeleteV2WebhooksWebhookIdCode$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new DeleteV2WebhooksWebhookIdResponseBody(remapped);
  });

/** @internal */
export type DeleteV2WebhooksWebhookIdResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const DeleteV2WebhooksWebhookIdResponseBody$outboundSchema: z.ZodType<
  DeleteV2WebhooksWebhookIdResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteV2WebhooksWebhookIdResponseBody
> = z.instanceof(DeleteV2WebhooksWebhookIdResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: DeleteV2WebhooksWebhookIdType$outboundSchema,
      code: DeleteV2WebhooksWebhookIdCode$outboundSchema,
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
export namespace DeleteV2WebhooksWebhookIdResponseBody$ {
  /** @deprecated use `DeleteV2WebhooksWebhookIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV2WebhooksWebhookIdResponseBody$inboundSchema;
  /** @deprecated use `DeleteV2WebhooksWebhookIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV2WebhooksWebhookIdResponseBody$outboundSchema;
  /** @deprecated use `DeleteV2WebhooksWebhookIdResponseBody$Outbound` instead. */
  export type Outbound = DeleteV2WebhooksWebhookIdResponseBody$Outbound;
}
