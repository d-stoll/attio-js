# PutV2ObjectsObjectRecordsValuesRecordsResponse200ApplicationJSONResponseBodyCreatedByActor

The actor that created this value.

## Example Usage

```typescript
import {
  PutV2ObjectsObjectRecordsValuesRecordsResponse200ApplicationJSONResponseBodyCreatedByActor,
} from "attio-js/models/operations";

let value:
  PutV2ObjectsObjectRecordsValuesRecordsResponse200ApplicationJSONResponseBodyCreatedByActor =
    {
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      type: "workspace-member",
    };
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                         | An ID to identify the actor.                                                                                                                                                                               |
| `type`                                                                                                                                                                                                     | [operations.PutV2ObjectsObjectRecordsValuesRecordsResponse200ApplicationJSONResponseBodyType](../../models/operations/putv2objectsobjectrecordsvaluesrecordsresponse200applicationjsonresponsebodytype.md) | :heavy_minus_sign:                                                                                                                                                                                         | The type of actor. [Read more information on actor types here](/docs/actors).                                                                                                                              |