/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspaceMembersGet } from "../funcs/workspaceMembersGet.js";
import { workspaceMembersList } from "../funcs/workspaceMembersList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetV2WorkspaceMembersResponse } from "../models/operations/getv2workspacemembers.js";
import {
  GetV2WorkspaceMembersWorkspaceMemberIdRequest,
  GetV2WorkspaceMembersWorkspaceMemberIdResponse,
} from "../models/operations/getv2workspacemembersworkspacememberid.js";
import { unwrapAsync } from "../types/fp.js";

export class WorkspaceMembers extends ClientSDK {
  /**
   * List workspace members
   *
   * @remarks
   * Lists all workspace members in the workspace.
   *
   * Required scopes: `user_management:read`.
   */
  async list(
    options?: RequestOptions,
  ): Promise<GetV2WorkspaceMembersResponse> {
    return unwrapAsync(workspaceMembersList(
      this,
      options,
    ));
  }

  /**
   * Get a workspace member
   *
   * @remarks
   * Gets a single workspace member by ID.
   *
   * Required scopes: `user_management:read`.
   */
  async get(
    request: GetV2WorkspaceMembersWorkspaceMemberIdRequest,
    options?: RequestOptions,
  ): Promise<GetV2WorkspaceMembersWorkspaceMemberIdResponse> {
    return unwrapAsync(workspaceMembersGet(
      this,
      request,
      options,
    ));
  }
}
