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
export type TasksResponseResponseBodyData = {
  statusCode: number;
  type: ResponseType;
  code: ResponseCode;
  message: string;
};

/**
 * Not Found
 */
export class TasksResponseResponseBody extends Error {
  statusCode: number;
  type: ResponseType;
  code: ResponseCode;

  /** The original data that was passed to this error instance. */
  data$: TasksResponseResponseBodyData;

  constructor(err: TasksResponseResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.type = err.type;
    this.code = err.code;

    this.name = "TasksResponseResponseBody";
  }
}

/** @internal */
export const TasksResponseResponseBody$inboundSchema: z.ZodType<
  TasksResponseResponseBody,
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

    return new TasksResponseResponseBody(remapped);
  });

/** @internal */
export type TasksResponseResponseBody$Outbound = {
  status_code: number;
  type: string;
  code: string;
  message: string;
};

/** @internal */
export const TasksResponseResponseBody$outboundSchema: z.ZodType<
  TasksResponseResponseBody$Outbound,
  z.ZodTypeDef,
  TasksResponseResponseBody
> = z.instanceof(TasksResponseResponseBody)
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
export namespace TasksResponseResponseBody$ {
  /** @deprecated use `TasksResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema = TasksResponseResponseBody$inboundSchema;
  /** @deprecated use `TasksResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema = TasksResponseResponseBody$outboundSchema;
  /** @deprecated use `TasksResponseResponseBody$Outbound` instead. */
  export type Outbound = TasksResponseResponseBody$Outbound;
}
