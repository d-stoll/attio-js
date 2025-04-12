/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues } from "../../funcs/entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .GetV2ListsListEntriesEntryIdAttributesAttributeValuesRequest$inboundSchema,
};

export const tool$entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues:
  ToolDefinition<typeof args> = {
    name:
      "entries-get-v2-lists-list-entries-entry-id-attributes-attribute-values",
    description: `List attribute values for a list entry

Gets all values for a given attribute on a list entry. If the attribute is historic, this endpoint has the ability to return all historic values using the \`show_historic\` query param.

Required scopes: \`list_entry:read\`, \`list_configuration:read\`.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues(
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
