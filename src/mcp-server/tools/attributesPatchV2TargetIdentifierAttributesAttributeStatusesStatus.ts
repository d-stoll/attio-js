/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus } from "../../funcs/attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PatchV2TargetIdentifierAttributesAttributeStatusesStatusRequest$inboundSchema,
};

export const tool$attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus:
  ToolDefinition<typeof args> = {
    name:
      "attributes-patch-v2-target-identifier-attributes-attribute-statuses-status",
    description: `Update a status

Update a status on an status attribute on either an object or a list.

Required scopes: \`object_configuration:read-write\`.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus(
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
