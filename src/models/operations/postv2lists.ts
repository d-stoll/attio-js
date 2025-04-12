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
 * The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.
 */
export const WorkspaceAccess = {
  FullAccess: "full-access",
  ReadAndWrite: "read-and-write",
  ReadOnly: "read-only",
} as const;
/**
 * The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.
 */
export type WorkspaceAccess = ClosedEnum<typeof WorkspaceAccess>;

/**
 * The level of access to the list.
 */
export const Level = {
  FullAccess: "full-access",
  ReadAndWrite: "read-and-write",
  ReadOnly: "read-only",
} as const;
/**
 * The level of access to the list.
 */
export type Level = ClosedEnum<typeof Level>;

export type WorkspaceMemberAccess = {
  /**
   * A UUID to identify the workspace member to grant access to.
   */
  workspaceMemberId: string;
  /**
   * The level of access to the list.
   */
  level: Level;
};

export type PostV2ListsData = {
  /**
   * The human-readable name of the list.
   */
  name: string;
  /**
   * A unique, human-readable slug to access the list through API calls. Should be formatted in snake case.
   */
  apiSlug: string;
  /**
   * A UUID or slug to identify the allowed object type for records added to this list.
   */
  parentObject: string;
  /**
   * The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.
   */
  workspaceAccess: WorkspaceAccess | null;
  /**
   * The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members.
   */
  workspaceMemberAccess: Array<WorkspaceMemberAccess>;
};

export type PostV2ListsRequestBody = {
  data: PostV2ListsData;
};

/**
 * Success
 */
export type PostV2ListsResponseBody = {
  data: components.List;
};

/** @internal */
export const WorkspaceAccess$inboundSchema: z.ZodNativeEnum<
  typeof WorkspaceAccess
> = z.nativeEnum(WorkspaceAccess);

/** @internal */
export const WorkspaceAccess$outboundSchema: z.ZodNativeEnum<
  typeof WorkspaceAccess
> = WorkspaceAccess$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceAccess$ {
  /** @deprecated use `WorkspaceAccess$inboundSchema` instead. */
  export const inboundSchema = WorkspaceAccess$inboundSchema;
  /** @deprecated use `WorkspaceAccess$outboundSchema` instead. */
  export const outboundSchema = WorkspaceAccess$outboundSchema;
}

/** @internal */
export const Level$inboundSchema: z.ZodNativeEnum<typeof Level> = z.nativeEnum(
  Level,
);

/** @internal */
export const Level$outboundSchema: z.ZodNativeEnum<typeof Level> =
  Level$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Level$ {
  /** @deprecated use `Level$inboundSchema` instead. */
  export const inboundSchema = Level$inboundSchema;
  /** @deprecated use `Level$outboundSchema` instead. */
  export const outboundSchema = Level$outboundSchema;
}

/** @internal */
export const WorkspaceMemberAccess$inboundSchema: z.ZodType<
  WorkspaceMemberAccess,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_member_id: z.string(),
  level: Level$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "workspace_member_id": "workspaceMemberId",
  });
});

/** @internal */
export type WorkspaceMemberAccess$Outbound = {
  workspace_member_id: string;
  level: string;
};

/** @internal */
export const WorkspaceMemberAccess$outboundSchema: z.ZodType<
  WorkspaceMemberAccess$Outbound,
  z.ZodTypeDef,
  WorkspaceMemberAccess
> = z.object({
  workspaceMemberId: z.string(),
  level: Level$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    workspaceMemberId: "workspace_member_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceMemberAccess$ {
  /** @deprecated use `WorkspaceMemberAccess$inboundSchema` instead. */
  export const inboundSchema = WorkspaceMemberAccess$inboundSchema;
  /** @deprecated use `WorkspaceMemberAccess$outboundSchema` instead. */
  export const outboundSchema = WorkspaceMemberAccess$outboundSchema;
  /** @deprecated use `WorkspaceMemberAccess$Outbound` instead. */
  export type Outbound = WorkspaceMemberAccess$Outbound;
}

export function workspaceMemberAccessToJSON(
  workspaceMemberAccess: WorkspaceMemberAccess,
): string {
  return JSON.stringify(
    WorkspaceMemberAccess$outboundSchema.parse(workspaceMemberAccess),
  );
}

export function workspaceMemberAccessFromJSON(
  jsonString: string,
): SafeParseResult<WorkspaceMemberAccess, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkspaceMemberAccess$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkspaceMemberAccess' from JSON`,
  );
}

/** @internal */
export const PostV2ListsData$inboundSchema: z.ZodType<
  PostV2ListsData,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  api_slug: z.string(),
  parent_object: z.string(),
  workspace_access: z.nullable(WorkspaceAccess$inboundSchema),
  workspace_member_access: z.array(
    z.lazy(() => WorkspaceMemberAccess$inboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    "api_slug": "apiSlug",
    "parent_object": "parentObject",
    "workspace_access": "workspaceAccess",
    "workspace_member_access": "workspaceMemberAccess",
  });
});

/** @internal */
export type PostV2ListsData$Outbound = {
  name: string;
  api_slug: string;
  parent_object: string;
  workspace_access: string | null;
  workspace_member_access: Array<WorkspaceMemberAccess$Outbound>;
};

/** @internal */
export const PostV2ListsData$outboundSchema: z.ZodType<
  PostV2ListsData$Outbound,
  z.ZodTypeDef,
  PostV2ListsData
> = z.object({
  name: z.string(),
  apiSlug: z.string(),
  parentObject: z.string(),
  workspaceAccess: z.nullable(WorkspaceAccess$outboundSchema),
  workspaceMemberAccess: z.array(
    z.lazy(() => WorkspaceMemberAccess$outboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    apiSlug: "api_slug",
    parentObject: "parent_object",
    workspaceAccess: "workspace_access",
    workspaceMemberAccess: "workspace_member_access",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ListsData$ {
  /** @deprecated use `PostV2ListsData$inboundSchema` instead. */
  export const inboundSchema = PostV2ListsData$inboundSchema;
  /** @deprecated use `PostV2ListsData$outboundSchema` instead. */
  export const outboundSchema = PostV2ListsData$outboundSchema;
  /** @deprecated use `PostV2ListsData$Outbound` instead. */
  export type Outbound = PostV2ListsData$Outbound;
}

export function postV2ListsDataToJSON(
  postV2ListsData: PostV2ListsData,
): string {
  return JSON.stringify(PostV2ListsData$outboundSchema.parse(postV2ListsData));
}

export function postV2ListsDataFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ListsData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2ListsData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ListsData' from JSON`,
  );
}

/** @internal */
export const PostV2ListsRequestBody$inboundSchema: z.ZodType<
  PostV2ListsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => PostV2ListsData$inboundSchema),
});

/** @internal */
export type PostV2ListsRequestBody$Outbound = {
  data: PostV2ListsData$Outbound;
};

/** @internal */
export const PostV2ListsRequestBody$outboundSchema: z.ZodType<
  PostV2ListsRequestBody$Outbound,
  z.ZodTypeDef,
  PostV2ListsRequestBody
> = z.object({
  data: z.lazy(() => PostV2ListsData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ListsRequestBody$ {
  /** @deprecated use `PostV2ListsRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV2ListsRequestBody$inboundSchema;
  /** @deprecated use `PostV2ListsRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostV2ListsRequestBody$outboundSchema;
  /** @deprecated use `PostV2ListsRequestBody$Outbound` instead. */
  export type Outbound = PostV2ListsRequestBody$Outbound;
}

export function postV2ListsRequestBodyToJSON(
  postV2ListsRequestBody: PostV2ListsRequestBody,
): string {
  return JSON.stringify(
    PostV2ListsRequestBody$outboundSchema.parse(postV2ListsRequestBody),
  );
}

export function postV2ListsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ListsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2ListsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ListsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV2ListsResponseBody$inboundSchema: z.ZodType<
  PostV2ListsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.List$inboundSchema,
});

/** @internal */
export type PostV2ListsResponseBody$Outbound = {
  data: components.List$Outbound;
};

/** @internal */
export const PostV2ListsResponseBody$outboundSchema: z.ZodType<
  PostV2ListsResponseBody$Outbound,
  z.ZodTypeDef,
  PostV2ListsResponseBody
> = z.object({
  data: components.List$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2ListsResponseBody$ {
  /** @deprecated use `PostV2ListsResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostV2ListsResponseBody$inboundSchema;
  /** @deprecated use `PostV2ListsResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostV2ListsResponseBody$outboundSchema;
  /** @deprecated use `PostV2ListsResponseBody$Outbound` instead. */
  export type Outbound = PostV2ListsResponseBody$Outbound;
}

export function postV2ListsResponseBodyToJSON(
  postV2ListsResponseBody: PostV2ListsResponseBody,
): string {
  return JSON.stringify(
    PostV2ListsResponseBody$outboundSchema.parse(postV2ListsResponseBody),
  );
}

export function postV2ListsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV2ListsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2ListsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2ListsResponseBody' from JSON`,
  );
}
