# ListCreatedByActor

The actor which created this list.

## Example Usage

```typescript
import { ListCreatedByActor } from "attio-js/models/components/list.js";

let value: ListCreatedByActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | An ID to identify the actor.                                                  |
| `type`                                                                        | [components.ListType](../../models/components/listtype.md)                    | :heavy_minus_sign:                                                            | The type of actor. [Read more information on actor types here](/docs/actors). |