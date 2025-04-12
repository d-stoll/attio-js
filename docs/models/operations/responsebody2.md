# ResponseBody2

## Example Usage

```typescript
import { ResponseBody2 } from "attio-js/models/operations";

let value: ResponseBody2 = {
  active: false,
  scope: "<value>",
  clientId: "<id>",
  tokenType: "Bearer",
  exp: 4790.46,
  iat: 6694.72,
  sub: "5878d821-b1c2-4080-b5cb-8430e987c776",
  aud: "<value>",
  iss: "attio.com",
  authorizedByWorkspaceMemberId: "1aa115e2-9771-4a03-b443-5220168be091",
  workspaceId: "71a3b216-43d9-4800-bf03-dbb9b1782586",
  workspaceName: "<value>",
  workspaceSlug: "<value>",
  workspaceLogoUrl: "https://imaginative-freezing.info/",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `active`                                                                                           | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the token is currently active and usable.                                                  |
| `scope`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | A space-separated list of scopes associated with this token                                        |
| `clientId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | The app ID of the OAuth application that requested this token                                      |
| `tokenType`                                                                                        | [operations.TokenType](../../models/operations/tokentype.md)                                       | :heavy_check_mark:                                                                                 | The type of token, always Bearer for tokens acquired via the OAuth 2.0 flow.                       |
| `exp`                                                                                              | *number*                                                                                           | :heavy_check_mark:                                                                                 | The time at which this token will expire, if set, as a number of seconds since January 1 1970 UTC. |
| `iat`                                                                                              | *number*                                                                                           | :heavy_check_mark:                                                                                 | The time at which this token was issued, as a number of seconds since January 1 1970 UTC.          |
| `sub`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Since Bearer tokens grant Workspace-level permissions, this property contains the workspace_id.    |
| `aud`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | The intended audience for this token, for Bearer tokens this is the same as the client_id.         |
| `iss`                                                                                              | [operations.Iss](../../models/operations/iss.md)                                                   | :heavy_check_mark:                                                                                 | The issuer of the token. Always attio.com                                                          |
| `authorizedByWorkspaceMemberId`                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the workspace member who authorised this token initially, if known                       |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the workspace the token is scoped to.                                                    |
| `workspaceName`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | The name of the workspace the token is scoped to.                                                  |
| `workspaceSlug`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | The slug of the workspace the token is scoped to.                                                  |
| `workspaceLogoUrl`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | The logo URL of the workspace the token is scoped to.                                              |