/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tasksPostV2Tasks } from "../../funcs/tasksPostV2Tasks.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostV2TasksRequestBody$inboundSchema,
};

export const tool$tasksPostV2Tasks: ToolDefinition<typeof args> = {
  name: "tasks-post-v2-tasks",
  description: `Create a task

Creates a new task.

At present, tasks can only be created from plaintext without record reference formatting.

Required scopes: \`task:read-write\`, \`object_configuration:read\`, \`record_permission:read\`, \`user_management:read\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await tasksPostV2Tasks(
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
