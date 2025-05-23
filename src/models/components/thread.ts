/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Comment,
  Comment$inboundSchema,
  Comment$Outbound,
  Comment$outboundSchema,
} from "./comment.js";

export type ThreadId = {
  /**
   * The ID of the workspace the thread belongs to.
   */
  workspaceId: string;
  /**
   * The ID of the thread.
   */
  threadId: string;
};

export type Thread = {
  id: ThreadId;
  /**
   * An array of comments in the thread, sorted by `created_at`.
   */
  comments: Array<Comment>;
  /**
   * When the thread was created.
   */
  createdAt: string;
};

/** @internal */
export const ThreadId$inboundSchema: z.ZodType<
  ThreadId,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  thread_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "thread_id": "threadId",
  });
});

/** @internal */
export type ThreadId$Outbound = {
  workspace_id: string;
  thread_id: string;
};

/** @internal */
export const ThreadId$outboundSchema: z.ZodType<
  ThreadId$Outbound,
  z.ZodTypeDef,
  ThreadId
> = z.object({
  workspaceId: z.string(),
  threadId: z.string(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    threadId: "thread_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreadId$ {
  /** @deprecated use `ThreadId$inboundSchema` instead. */
  export const inboundSchema = ThreadId$inboundSchema;
  /** @deprecated use `ThreadId$outboundSchema` instead. */
  export const outboundSchema = ThreadId$outboundSchema;
  /** @deprecated use `ThreadId$Outbound` instead. */
  export type Outbound = ThreadId$Outbound;
}

export function threadIdToJSON(threadId: ThreadId): string {
  return JSON.stringify(ThreadId$outboundSchema.parse(threadId));
}

export function threadIdFromJSON(
  jsonString: string,
): SafeParseResult<ThreadId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreadId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreadId' from JSON`,
  );
}

/** @internal */
export const Thread$inboundSchema: z.ZodType<Thread, z.ZodTypeDef, unknown> = z
  .object({
    id: z.lazy(() => ThreadId$inboundSchema),
    comments: z.array(Comment$inboundSchema),
    created_at: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
    });
  });

/** @internal */
export type Thread$Outbound = {
  id: ThreadId$Outbound;
  comments: Array<Comment$Outbound>;
  created_at: string;
};

/** @internal */
export const Thread$outboundSchema: z.ZodType<
  Thread$Outbound,
  z.ZodTypeDef,
  Thread
> = z.object({
  id: z.lazy(() => ThreadId$outboundSchema),
  comments: z.array(Comment$outboundSchema),
  createdAt: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Thread$ {
  /** @deprecated use `Thread$inboundSchema` instead. */
  export const inboundSchema = Thread$inboundSchema;
  /** @deprecated use `Thread$outboundSchema` instead. */
  export const outboundSchema = Thread$outboundSchema;
  /** @deprecated use `Thread$Outbound` instead. */
  export type Outbound = Thread$Outbound;
}

export function threadToJSON(thread: Thread): string {
  return JSON.stringify(Thread$outboundSchema.parse(thread));
}

export function threadFromJSON(
  jsonString: string,
): SafeParseResult<Thread, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Thread$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Thread' from JSON`,
  );
}
