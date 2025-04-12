/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WorkspaceMemberId = {
  /**
   * The ID of the workspace the workspace member belongs to.
   */
  workspaceId: string;
  /**
   * The ID of the workspace member.
   */
  workspaceMemberId: string;
};

/**
 * Whether the workspace member is suspended or not and what level of privileges they have inside the workspace. We do not delete workspace members so that you can successfully attribute past actions to suspended workspace members.
 */
export const AccessLevel = {
  Admin: "admin",
  Member: "member",
  Suspended: "suspended",
} as const;
/**
 * Whether the workspace member is suspended or not and what level of privileges they have inside the workspace. We do not delete workspace members so that you can successfully attribute past actions to suspended workspace members.
 */
export type AccessLevel = ClosedEnum<typeof AccessLevel>;

export type WorkspaceMember = {
  id: WorkspaceMemberId;
  /**
   * The first name of the user.
   */
  firstName: string;
  /**
   * The last name of the user.
   */
  lastName: string;
  /**
   * A URL to the user's avatar image.
   */
  avatarUrl: string | null;
  /**
   * The user's email address.
   */
  emailAddress: string;
  /**
   * When the workspace member was created.
   */
  createdAt: string;
  /**
   * Whether the workspace member is suspended or not and what level of privileges they have inside the workspace. We do not delete workspace members so that you can successfully attribute past actions to suspended workspace members.
   */
  accessLevel: AccessLevel;
};

/** @internal */
export const WorkspaceMemberId$inboundSchema: z.ZodType<
  WorkspaceMemberId,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  workspace_member_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "workspace_member_id": "workspaceMemberId",
  });
});

/** @internal */
export type WorkspaceMemberId$Outbound = {
  workspace_id: string;
  workspace_member_id: string;
};

/** @internal */
export const WorkspaceMemberId$outboundSchema: z.ZodType<
  WorkspaceMemberId$Outbound,
  z.ZodTypeDef,
  WorkspaceMemberId
> = z.object({
  workspaceId: z.string(),
  workspaceMemberId: z.string(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    workspaceMemberId: "workspace_member_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceMemberId$ {
  /** @deprecated use `WorkspaceMemberId$inboundSchema` instead. */
  export const inboundSchema = WorkspaceMemberId$inboundSchema;
  /** @deprecated use `WorkspaceMemberId$outboundSchema` instead. */
  export const outboundSchema = WorkspaceMemberId$outboundSchema;
  /** @deprecated use `WorkspaceMemberId$Outbound` instead. */
  export type Outbound = WorkspaceMemberId$Outbound;
}

export function workspaceMemberIdToJSON(
  workspaceMemberId: WorkspaceMemberId,
): string {
  return JSON.stringify(
    WorkspaceMemberId$outboundSchema.parse(workspaceMemberId),
  );
}

export function workspaceMemberIdFromJSON(
  jsonString: string,
): SafeParseResult<WorkspaceMemberId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkspaceMemberId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkspaceMemberId' from JSON`,
  );
}

/** @internal */
export const AccessLevel$inboundSchema: z.ZodNativeEnum<typeof AccessLevel> = z
  .nativeEnum(AccessLevel);

/** @internal */
export const AccessLevel$outboundSchema: z.ZodNativeEnum<typeof AccessLevel> =
  AccessLevel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccessLevel$ {
  /** @deprecated use `AccessLevel$inboundSchema` instead. */
  export const inboundSchema = AccessLevel$inboundSchema;
  /** @deprecated use `AccessLevel$outboundSchema` instead. */
  export const outboundSchema = AccessLevel$outboundSchema;
}

/** @internal */
export const WorkspaceMember$inboundSchema: z.ZodType<
  WorkspaceMember,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.lazy(() => WorkspaceMemberId$inboundSchema),
  first_name: z.string(),
  last_name: z.string(),
  avatar_url: z.nullable(z.string()),
  email_address: z.string(),
  created_at: z.string(),
  access_level: AccessLevel$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "avatar_url": "avatarUrl",
    "email_address": "emailAddress",
    "created_at": "createdAt",
    "access_level": "accessLevel",
  });
});

/** @internal */
export type WorkspaceMember$Outbound = {
  id: WorkspaceMemberId$Outbound;
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  email_address: string;
  created_at: string;
  access_level: string;
};

/** @internal */
export const WorkspaceMember$outboundSchema: z.ZodType<
  WorkspaceMember$Outbound,
  z.ZodTypeDef,
  WorkspaceMember
> = z.object({
  id: z.lazy(() => WorkspaceMemberId$outboundSchema),
  firstName: z.string(),
  lastName: z.string(),
  avatarUrl: z.nullable(z.string()),
  emailAddress: z.string(),
  createdAt: z.string(),
  accessLevel: AccessLevel$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    avatarUrl: "avatar_url",
    emailAddress: "email_address",
    createdAt: "created_at",
    accessLevel: "access_level",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceMember$ {
  /** @deprecated use `WorkspaceMember$inboundSchema` instead. */
  export const inboundSchema = WorkspaceMember$inboundSchema;
  /** @deprecated use `WorkspaceMember$outboundSchema` instead. */
  export const outboundSchema = WorkspaceMember$outboundSchema;
  /** @deprecated use `WorkspaceMember$Outbound` instead. */
  export type Outbound = WorkspaceMember$Outbound;
}

export function workspaceMemberToJSON(
  workspaceMember: WorkspaceMember,
): string {
  return JSON.stringify(WorkspaceMember$outboundSchema.parse(workspaceMember));
}

export function workspaceMemberFromJSON(
  jsonString: string,
): SafeParseResult<WorkspaceMember, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkspaceMember$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkspaceMember' from JSON`,
  );
}
