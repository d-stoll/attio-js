# PostV2TargetIdentifierAttributesDisplayType

How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesDisplayType } from "attio-js/models/operations/postv2targetidentifierattributes.js";

let value: PostV2TargetIdentifierAttributesDisplayType = "symbol";
```

## Values

```typescript
"code" | "name" | "narrowSymbol" | "symbol"
```