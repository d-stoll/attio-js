# GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataUnion


## Supported Types

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataActorReference`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataActorReference =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      referencedActorType: "workspace-member",
      referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      attributeType: "actor-reference",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataCheckbox`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataCheckbox =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      value: true,
      attributeType: "checkbox",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataCurrency`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataCurrency =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      currencyValue: 99,
      currencyCode: "USD",
      attributeType: "currency",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataDate`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataDate =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      attributeType: "date",
      value: "2023-01-01",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataDomain`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataDomain =
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
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataEmailAddress`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataEmailAddress =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      originalEmailAddress: "alice@app.attio.com",
      emailAddress: "alice@app.attio.com",
      emailDomain: "app.attio.com",
      emailRootDomain: "attio.com",
      emailLocalSpecifier: "alice",
      attributeType: "email-address",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataRecordReference`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataRecordReference =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      targetObject: "people",
      targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      attributeType: "record-reference",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataInteraction`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataInteraction =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      interactionType: "email",
      interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
      ownerActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      attributeType: "interaction",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataLocation`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataLocation =
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
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataNumber`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataNumber =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      value: 42,
      attributeType: "number",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataPersonalName`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataPersonalName =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      firstName: "Ada",
      lastName: "Lovelace",
      fullName: "Ada Lovelace",
      attributeType: "personal-name",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataPhoneNumber`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataPhoneNumber =
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
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataStatus`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataStatus =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      status: {
        id: {
          workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
          objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
          attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
          statusId: "11f07f01-c10f-4e05-a522-33e050bc52ee",
        },
        title: "In Progress",
        isArchived: false,
        celebrationEnabled: false,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
      },
      attributeType: "status",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataRating`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataRating =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      value: 3,
      attributeType: "rating",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataSelect`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataSelect =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      option: {
        id: {
          workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
          objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
          attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
          optionId: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
        },
        title: "Medium",
        isArchived: false,
      },
      attributeType: "select",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataText`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataText =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      attributeType: "text",
    };
```

### `operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataTimestamp`

```typescript
const value:
  operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataTimestamp =
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      attributeType: "timestamp",
      value: new Date("2023-01-01T15:00:00.000000000Z"),
    };
```

