# OutputValueStatus2

## Example Usage

```typescript
import { OutputValueStatus2 } from "attio-js/models/components/outputvalue.js";

let value: OutputValueStatus2 = {
  status: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
      statusId: "11f07f01-c10f-4e05-a522-33e050bc52ee",
    },
    title: "In Progress",
    isArchived: false,
    celebrationEnabled: false,
    targetTimeInStatus: "P0Y0M1DT0H0M0S",
  },
  attributeType: "status",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `status`                                                                           | [components.Status](../../models/components/status.md)                             | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `attributeType`                                                                    | [components.AttributeTypeStatus2](../../models/components/attributetypestatus2.md) | :heavy_check_mark:                                                                 | The attribute type of the value.                                                   | status                                                                             |