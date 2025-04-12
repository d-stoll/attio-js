/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { commentsPostV2Comments } from "../../funcs/commentsPostV2Comments.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostV2CommentsRequestBody$inboundSchema,
};

export const tool$commentsPostV2Comments: ToolDefinition<typeof args> = {
  name: "comments-post-v2-comments",
  description: `Create a comment

Creates a new comment related to an existing thread, record or entry.

To create comments on records, you will need the \`object_configuration:read\` and \`record_permission:read\` scopes.

To create comments on list entries, you will need the \`list_configuration:read\` and \`list_entry:read\` scopes.

Required scopes: \`comment:read-write\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await commentsPostV2Comments(
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
