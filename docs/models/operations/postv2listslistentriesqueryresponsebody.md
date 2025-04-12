# PostV2ListsListEntriesQueryResponseBody

Success

## Example Usage

```typescript
import { PostV2ListsListEntriesQueryResponseBody } from "attio-js/models/operations";

let value: PostV2ListsListEntriesQueryResponseBody = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
        entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
      },
      parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      parentObject: "people",
      createdAt: "2022-11-21T13:22:49.061281000Z",
      entryValues: {
        "status": [
          {
            activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
            activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
            createdByActor: {
              id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
              type: "workspace-member",
            },
            domain: "app.attio.com",
            rootDomain: "attio.com",
            attributeType: "domain",
          },
        ],
        "created_at": [
          {
            activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
            activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
            createdByActor: {
              id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
              type: "workspace-member",
            },
            originalPhoneNumber: "5558675309",
            countryCode: "US",
            phoneNumber: "+15558675309",
            attributeType: "phone-number",
          },
        ],
        "created_by": [
          {
            activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
            activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
            createdByActor: {
              id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
              type: "workspace-member",
            },
            line1: "1 Infinite Loop",
            line2: "Block 1",
            line3: "Hilldrop Estate",
            line4: "Westborough",
            locality: "Cupertino",
            region: "CA",
            postcode: "95014",
            countryCode: "US",
            latitude: "37.331741",
            longitude: "-122.030333",
            attributeType: "location",
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [operations.PostV2ListsListEntriesQueryData](../../models/operations/postv2listslistentriesquerydata.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |