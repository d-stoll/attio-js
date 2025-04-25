# GetV2ObjectsObjectRecordsRecordIdEntriesData

## Example Usage

```typescript
import { GetV2ObjectsObjectRecordsRecordIdEntriesData } from "attio-js/models/operations/getv2objectsobjectrecordsrecordidentries.js";

let value: GetV2ObjectsObjectRecordsRecordIdEntriesData = {
  listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  listApiSlug: "hiring-engineering",
  entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  createdAt: "2022-11-21T13:22:49.061281000Z",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `listId`                                                          | *string*                                                          | :heavy_check_mark:                                                | A UUID identifying the list that this record is in.               | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                              |
| `listApiSlug`                                                     | *string*                                                          | :heavy_check_mark:                                                | A human-readable slug for the list for use in URLs and responses. | hiring-engineering                                                |
| `entryId`                                                         | *string*                                                          | :heavy_check_mark:                                                | A UUID identifying this entry on the list.                        | 2e6e29ea-c4e0-4f44-842d-78a891f8c156                              |
| `createdAt`                                                       | *string*                                                          | :heavy_check_mark:                                                | When this entry was created.                                      | 2022-11-21T13:22:49.061281000Z                                    |