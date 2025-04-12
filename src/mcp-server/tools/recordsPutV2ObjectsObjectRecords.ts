/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { recordsPutV2ObjectsObjectRecords } from "../../funcs/recordsPutV2ObjectsObjectRecords.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutV2ObjectsObjectRecordsRequest$inboundSchema,
};

export const tool$recordsPutV2ObjectsObjectRecords: ToolDefinition<
  typeof args
> = {
  name: "records-put-v2-objects-object-records",
  description: `Assert a record

Use this endpoint to create or update people, companies and other records. A matching attribute is used to search for existing records. If a record is found with the same value for the matching attribute, that record will be updated. If no record with the same value for the matching attribute is found, a new record will be created instead. If you would like to avoid matching, please use the [Create record endpoint](/reference/post_v2-objects-object-records).

If the matching attribute is a multiselect attribute, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values.

Required scopes: \`record_permission:read-write\`, \`object_configuration:read\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await recordsPutV2ObjectsObjectRecords(
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
