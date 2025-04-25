# PatchV2TargetIdentifierAttributesAttributeDisplayType

How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".

## Example Usage

```typescript
import { PatchV2TargetIdentifierAttributesAttributeDisplayType } from "attio-js/models/operations/patchv2targetidentifierattributesattribute.js";

let value: PatchV2TargetIdentifierAttributesAttributeDisplayType = "symbol";
```

## Values

```typescript
"code" | "name" | "narrowSymbol" | "symbol"
```