# Status

## Example Usage

```typescript
import { Status } from "attio-js/models/components";

let value: Status = {
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
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                            | [components.StatusId](../../models/components/statusid.md)                                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `title`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The title of the status                                                                                                         | In Progress                                                                                                                     |
| `isArchived`                                                                                                                    | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | Whether or not to archive the status. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving. | false                                                                                                                           |
| `celebrationEnabled`                                                                                                            | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | Whether arriving at this status triggers a celebration effect in the UI                                                         | false                                                                                                                           |
| `targetTimeInStatus`                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Target time for a record to spend in given status expressed as a ISO-8601 duration string                                       | P0Y0M1DT0H0M0S                                                                                                                  |