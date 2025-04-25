# NoteCreatedByActor

The actor that created this note.

## Example Usage

```typescript
import { NoteCreatedByActor } from "attio-js/models/components/note.js";

let value: NoteCreatedByActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | An ID to identify the actor.                                                  |
| `type`                                                                        | [components.NoteType](../../models/components/notetype.md)                    | :heavy_minus_sign:                                                            | The type of actor. [Read more information on actor types here](/docs/actors). |