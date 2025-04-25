# Bearer

## Example Usage

```typescript
import { Bearer } from "attio-js/models/operations/getv2self.js";

let value: Bearer = {
  active: false,
  scope: "<value>",
  clientId: "<id>",
  tokenType: "Bearer",
  exp: 8372.17,
  iat: 9701.78,
  sub: "3a422077-1297-4444-92a7-38cea12c1fbc",
  aud: "<value>",
  iss: "attio.com",
  authorizedByWorkspaceMemberId: "0a99c8d3-9dd1-4fa3-89a7-8c04964d82a6",
  workspaceId: "32a06ed1-c2e7-45fd-a6f7-b0f8a10821ce",
  workspaceName: "<value>",
  workspaceSlug: "<value>",
  workspaceLogoUrl: "https://glass-sightseeing.name/",
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