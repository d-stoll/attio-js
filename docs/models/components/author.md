# Author

Who wrote this comment. Note that the API provides the ability for API tokens to write comments on behalf of other actors.

## Example Usage

```typescript
import { Author } from "attio-js/models/components/comment.js";

let value: Author = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | An ID to identify the actor.                                                  |
| `type`                                                                        | [components.AuthorType](../../models/components/authortype.md)                | :heavy_minus_sign:                                                            | The type of actor. [Read more information on actor types here](/docs/actors). |