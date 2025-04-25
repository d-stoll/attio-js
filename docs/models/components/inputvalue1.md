# InputValue1

## Example Usage

```typescript
import { InputValue1 } from "attio-js/models/components/inputvalueunion.js";

let value: InputValue1 = {
  workspaceMemberEmailAddress: "alice@attio.com",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `workspaceMemberEmailAddress`                                                   | *string*                                                                        | :heavy_check_mark:                                                              | Workspace member actors can be referenced by email address as well as actor ID. | alice@attio.com                                                                 |