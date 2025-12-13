<!-- Start SDK Example Usage [usage] -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.objects.list();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->