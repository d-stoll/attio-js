/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { threadsGetV2ThreadsThreadId } from "../../funcs/threadsGetV2ThreadsThreadId.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV2ThreadsThreadIdRequest$inboundSchema,
};

export const tool$threadsGetV2ThreadsThreadId: ToolDefinition<typeof args> = {
  name: "threads-get-v2-threads-thread-id",
  description: `Get a thread

Get all comments in a thread.

To view threads on records, you will need the \`object_configuration:read\` and \`record_permission:read\` scopes.

To view threads on list entries, you will need the \`list_configuration:read\` and \`list_entry:read\` scopes.

Required scopes: \`comment:read\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await threadsGetV2ThreadsThreadId(
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
