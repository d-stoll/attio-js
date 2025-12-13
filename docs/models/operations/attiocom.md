# AttioCom

## Example Usage

```typescript
import { AttioCom } from "attio-js/models/operations/getv2self.js";

let value: AttioCom = {
  active: false,
  scope: "<value>",
  clientId: "<id>",
  tokenType: "Bearer",
  exp: 2840.47,
  iat: 7160.48,
  sub: "e62ad58d-f815-4dde-b855-af4c6ce52a9f",
  aud: "<value>",
  iss: "attio.com",
  authorizedByWorkspaceMemberId: "0807272f-feeb-4d8b-a9df-b37aafb6a122",
  workspaceId: "d73f441c-f38e-45ad-a535-cb08f6fbd353",
  workspaceName: "<value>",
  workspaceSlug: "<value>",
  workspaceLogoUrl: "https://poor-space.net",
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