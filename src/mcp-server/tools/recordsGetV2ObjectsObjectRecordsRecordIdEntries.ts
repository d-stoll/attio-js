/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { recordsGetV2ObjectsObjectRecordsRecordIdEntries } from "../../funcs/recordsGetV2ObjectsObjectRecordsRecordIdEntries.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.GetV2ObjectsObjectRecordsRecordIdEntriesRequest$inboundSchema,
};

export const tool$recordsGetV2ObjectsObjectRecordsRecordIdEntries:
  ToolDefinition<typeof args> = {
    name: "records-get-v2-objects-object-records-record-id-entries",
    description: `List record entries

List all entries, across all lists, for which this record is the parent.

Required scopes: \`record_permission:read\`, \`object_configuration:read\`, \`list_entry:read\`.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await recordsGetV2ObjectsObjectRecordsRecordIdEntries(
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
