# InputValueOwnerActor

The actor that created this value.

## Example Usage

```typescript
import { InputValueOwnerActor } from "attio-js/models/components/inputvalueunion.js";

let value: InputValueOwnerActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | An ID to identify the actor.                                                  |
| `type`                                                                        | [components.InputValueType](../../models/components/inputvaluetype.md)        | :heavy_minus_sign:                                                            | The type of actor. [Read more information on actor types here](/docs/actors). |