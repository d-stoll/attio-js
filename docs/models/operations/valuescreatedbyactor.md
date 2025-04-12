# ValuesCreatedByActor

The actor that created this value.

## Example Usage

```typescript
import { ValuesCreatedByActor } from "attio-js/models/operations";

let value: ValuesCreatedByActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An ID to identify the actor.                                                                                                 |
| `type`                                                                                                                       | [operations.PostV2ObjectsObjectRecordsQueryValuesType](../../models/operations/postv2objectsobjectrecordsqueryvaluestype.md) | :heavy_minus_sign:                                                                                                           | The type of actor. [Read more information on actor types here](/docs/actors).                                                |