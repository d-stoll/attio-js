# GetV2WorkspaceMembersResponse

Success

## Example Usage

```typescript
import { GetV2WorkspaceMembersResponse } from "attio-js/models/operations/getv2workspacemembers.js";

let value: GetV2WorkspaceMembersResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      },
      firstName: "Susan",
      lastName: "Kare",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ABdFTp7z6OgAW9EqZx78wTqPfWClGCJCZXFjQfBG7rd9=s96-c",
      emailAddress: "susan.kare@apple.com",
      createdAt: "2022-11-21T13:22:49.061281000Z",
      accessLevel: "member",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.WorkspaceMember](../../models/components/workspacemember.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |