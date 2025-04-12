# DisplayType

How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".

## Example Usage

```typescript
import { DisplayType } from "attio-js/models/components";

let value: DisplayType = "code";
```

## Values

```typescript
"code" | "name" | "narrowSymbol" | "symbol"
```