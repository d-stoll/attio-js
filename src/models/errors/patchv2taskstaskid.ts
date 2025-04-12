/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const PatchV2TasksTaskIdTasksType = {
  InvalidRequestError: "invalid_request_error",
} as const;
export type PatchV2TasksTaskIdTasksType = ClosedEnum<
  typeof PatchV2TasksTaskIdTasksType
>;

export const PatchV2TasksTaskIdTasksCode = {
  NotFound: "not_found",
} as const;
export type PatchV2TasksTaskIdTasksCode = ClosedEnum<
  typeof PatchV2TasksTaskIdTasksCode
>;

/**
 * Not Found
 */
export type PatchV2TasksTaskIdTasksResponseBodyData = {
  statusCode: number;
  type: PatchV2TasksTaskIdTasksType;
  code: PatchV2TasksTaskIdTasksCode;
  message: string;
};

/**
 * Not Found
 */
export class PatchV2TasksTaskIdTasksResponseBody extends Error {
  statusCode: number;
  type: PatchV2TasksTaskIdTasksType;
  code: PatchV2TasksTaskIdTasksCode;

  /** The original data that was passed to this error instance. */
  data$: PatchV2TasksTaskIdTasksResponseBodyData;

  constructor(err: PatchV2TasksTaskIdTasksResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "PatchV2TasksTaskIdTasksResponseBody";
  }
}

export const PatchV2TasksTaskIdType = {
  InvalidRequestError: "invalid_request_error",
} as const;
export type PatchV2TasksTaskIdType = ClosedEnum<typeof PatchV2TasksTaskIdType>;

export const PatchV2TasksTaskIdCode = {
  ValidationType: "validation_type",
} as const;
export type PatchV2TasksTaskIdCode = ClosedEnum<typeof PatchV2TasksTaskIdCode>;

/**
 * Bad Request
 */
export type PatchV2TasksTaskIdResponseBodyData = {
  statusCode: number;
  type: PatchV2TasksTaskIdType;
  code: PatchV2TasksTaskIdCode;
  message: string;
};

/**
 * Bad Request
 */
export class PatchV2TasksTaskIdResponseBody extends Error {
  statusCode: number;
  type: PatchV2TasksTaskIdType;
  code: PatchV2TasksTaskIdCode;

  /** The original data that was passed to this error instance. */
  data$: PatchV2TasksTaskIdResponseBodyData;

  constructor(err: PatchV2TasksTaskIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "PatchV2TasksTaskIdResponseBody";
  }
}

/** @internal */
export const PatchV2TasksTaskIdTasksType$inboundSchema: z.ZodNativeEnum<
  typeof PatchV2TasksTaskIdTasksType
> = z.nativeEnum(PatchV2TasksTaskIdTasksType);

/** @internal */
export const PatchV2TasksTaskIdTasksType$outboundSchema: z.ZodNativeEnum<
  typeof PatchV2TasksTaskIdTasksType
> = PatchV2TasksTaskIdTasksType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV2TasksTaskIdTasksType$ {
  /** @deprecated use `PatchV2TasksTaskIdTasksType$inboundSchema` instead. */
  export const inboundSchema = PatchV2TasksTaskIdTasksType$inboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdTasksType$outboundSchema` instead. */
  export const outboundSchema = PatchV2TasksTaskIdTasksType$outboundSchema;
}

/** @internal */
export const PatchV2TasksTaskIdTasksCode$inboundSchema: z.ZodNativeEnum<
  typeof PatchV2TasksTaskIdTasksCode
> = z.nativeEnum(PatchV2TasksTaskIdTasksCode);

/** @internal */
export const PatchV2TasksTaskIdTasksCode$outboundSchema: z.ZodNativeEnum<
  typeof PatchV2TasksTaskIdTasksCode
> = PatchV2TasksTaskIdTasksCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV2TasksTaskIdTasksCode$ {
  /** @deprecated use `PatchV2TasksTaskIdTasksCode$inboundSchema` instead. */
  export const inboundSchema = PatchV2TasksTaskIdTasksCode$inboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdTasksCode$outboundSchema` instead. */
  export const outboundSchema = PatchV2TasksTaskIdTasksCode$outboundSchema;
}

/** @internal */
export const PatchV2TasksTaskIdTasksResponseBody$inboundSchema: z.ZodType<
  PatchV2TasksTaskIdTasksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: PatchV2TasksTaskIdTasksType$inboundSchema,
  code: PatchV2TasksTaskIdTasksCode$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new PatchV2TasksTaskIdTasksResponseBody(remapped);
  });

/** @internal */
export type PatchV2TasksTaskIdTasksResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const PatchV2TasksTaskIdTasksResponseBody$outboundSchema: z.ZodType<
  PatchV2TasksTaskIdTasksResponseBody$Outbound,
  z.ZodTypeDef,
  PatchV2TasksTaskIdTasksResponseBody
> = z.instanceof(PatchV2TasksTaskIdTasksResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: PatchV2TasksTaskIdTasksType$outboundSchema,
      code: PatchV2TasksTaskIdTasksCode$outboundSchema,
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
export namespace PatchV2TasksTaskIdTasksResponseBody$ {
  /** @deprecated use `PatchV2TasksTaskIdTasksResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PatchV2TasksTaskIdTasksResponseBody$inboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdTasksResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PatchV2TasksTaskIdTasksResponseBody$outboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdTasksResponseBody$Outbound` instead. */
  export type Outbound = PatchV2TasksTaskIdTasksResponseBody$Outbound;
}

/** @internal */
export const PatchV2TasksTaskIdType$inboundSchema: z.ZodNativeEnum<
  typeof PatchV2TasksTaskIdType
> = z.nativeEnum(PatchV2TasksTaskIdType);

/** @internal */
export const PatchV2TasksTaskIdType$outboundSchema: z.ZodNativeEnum<
  typeof PatchV2TasksTaskIdType
> = PatchV2TasksTaskIdType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV2TasksTaskIdType$ {
  /** @deprecated use `PatchV2TasksTaskIdType$inboundSchema` instead. */
  export const inboundSchema = PatchV2TasksTaskIdType$inboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdType$outboundSchema` instead. */
  export const outboundSchema = PatchV2TasksTaskIdType$outboundSchema;
}

/** @internal */
export const PatchV2TasksTaskIdCode$inboundSchema: z.ZodNativeEnum<
  typeof PatchV2TasksTaskIdCode
> = z.nativeEnum(PatchV2TasksTaskIdCode);

/** @internal */
export const PatchV2TasksTaskIdCode$outboundSchema: z.ZodNativeEnum<
  typeof PatchV2TasksTaskIdCode
> = PatchV2TasksTaskIdCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV2TasksTaskIdCode$ {
  /** @deprecated use `PatchV2TasksTaskIdCode$inboundSchema` instead. */
  export const inboundSchema = PatchV2TasksTaskIdCode$inboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdCode$outboundSchema` instead. */
  export const outboundSchema = PatchV2TasksTaskIdCode$outboundSchema;
}

/** @internal */
export const PatchV2TasksTaskIdResponseBody$inboundSchema: z.ZodType<
  PatchV2TasksTaskIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number(),
  type: PatchV2TasksTaskIdType$inboundSchema,
  code: PatchV2TasksTaskIdCode$inboundSchema,
  message: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
    });

    return new PatchV2TasksTaskIdResponseBody(remapped);
  });

/** @internal */
export type PatchV2TasksTaskIdResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const PatchV2TasksTaskIdResponseBody$outboundSchema: z.ZodType<
  PatchV2TasksTaskIdResponseBody$Outbound,
  z.ZodTypeDef,
  PatchV2TasksTaskIdResponseBody
> = z.instanceof(PatchV2TasksTaskIdResponseBody)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number(),
      type: PatchV2TasksTaskIdType$outboundSchema,
      code: PatchV2TasksTaskIdCode$outboundSchema,
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
export namespace PatchV2TasksTaskIdResponseBody$ {
  /** @deprecated use `PatchV2TasksTaskIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = PatchV2TasksTaskIdResponseBody$inboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = PatchV2TasksTaskIdResponseBody$outboundSchema;
  /** @deprecated use `PatchV2TasksTaskIdResponseBody$Outbound` instead. */
  export type Outbound = PatchV2TasksTaskIdResponseBody$Outbound;
}
