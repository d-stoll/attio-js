# PostV2ObjectsObjectRecordsQueryRequest

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsQueryRequest } from "attio-js/models/operations";

let value: PostV2ObjectsObjectRecordsQueryRequest = {
  object: "people",
  requestBody: {
    filter: {
      "name": "Ada Lovelace",
    },
    sorts: [
      {
        direction: "asc",
        attribute: "name",
        field: "last_name",
      },
    ],
    limit: 500,
    offset: 0,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            | people                                                                                                                         |
| `requestBody`                                                                                                                  | [operations.PostV2ObjectsObjectRecordsQueryRequestBody](../../models/operations/postv2objectsobjectrecordsqueryrequestbody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |