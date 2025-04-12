/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { listsGetV2Lists } from "../../funcs/listsGetV2Lists.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$listsGetV2Lists: ToolDefinition = {
  name: "lists-get-v2-lists",
  description: `List all lists

List all lists that your access token has access to. lists are returned in the order that they are sorted in the sidebar.

Required scopes: \`list_configuration:read\`.`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await listsGetV2Lists(
      client,
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
