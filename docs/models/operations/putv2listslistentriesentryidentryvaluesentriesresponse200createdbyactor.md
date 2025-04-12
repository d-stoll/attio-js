# PutV2ListsListEntriesEntryIdEntryValuesEntriesResponse200CreatedByActor

The actor that created this value.

## Example Usage

```typescript
import { PutV2ListsListEntriesEntryIdEntryValuesEntriesResponse200CreatedByActor } from "attio-js/models/operations";

let value:
  PutV2ListsListEntriesEntryIdEntryValuesEntriesResponse200CreatedByActor = {
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    type: "workspace-member",
  };
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | An ID to identify the actor.                                                                                                                                         |
| `type`                                                                                                                                                               | [operations.PutV2ListsListEntriesEntryIdEntryValuesEntriesResponse200Type](../../models/operations/putv2listslistentriesentryidentryvaluesentriesresponse200type.md) | :heavy_minus_sign:                                                                                                                                                   | The type of actor. [Read more information on actor types here](/docs/actors).                                                                                        |