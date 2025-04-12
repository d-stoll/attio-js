/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { objectsPatchV2ObjectsObject } from "../../funcs/objectsPatchV2ObjectsObject.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PatchV2ObjectsObjectRequest$inboundSchema,
};

export const tool$objectsPatchV2ObjectsObject: ToolDefinition<typeof args> = {
  name: "objects-patch-v2-objects-object",
  description: `Update an object

Updates a single object. The object to be updated is identified by its \`object_id\`.

Required scopes: \`object_configuration:read-write\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await objectsPatchV2ObjectsObject(
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
