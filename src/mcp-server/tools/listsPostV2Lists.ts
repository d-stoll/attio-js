/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { listsPostV2Lists } from "../../funcs/listsPostV2Lists.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostV2ListsRequestBody$inboundSchema,
};

export const tool$listsPostV2Lists: ToolDefinition<typeof args> = {
  name: "lists-post-v2-lists",
  description: `Create a list

Creates a new list.

Once you have your list, add attributes to it using the [Create attribute](/reference/post_v2-target-identifier-attributes) API, and add records to it using the [Add records to list](/reference/post_v2-lists-list-entries) API. 

New lists must specify which records can be added with the \`parent_object\` parameter which accepts either an object slug or an object ID. Permissions for the list are controlled with the \`workspace_access\` and \`workspace_member_access\` parameters.

Please note that new lists must have either \`workspace_access\` set to \`"full-access"\` or one or more element of \`workspace_member_access\` with a \`"full-access"\` level. It is also possible to receive a \`403\` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member-level access for lists.

Required scopes: \`list_configuration:read-write\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await listsPostV2Lists(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
