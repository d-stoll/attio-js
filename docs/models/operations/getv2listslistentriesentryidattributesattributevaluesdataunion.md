# GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataUnion


## Supported Types

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataActorReference`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataActorReference =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataCheckbox`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataCheckbox =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataCurrency`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataCurrency =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataDate`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataDate = {
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataDomain`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataDomain = {
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataEmailAddress`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataEmailAddress =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataRecordReference`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataRecordReference =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataInteraction`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataInteraction =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataLocation`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataLocation =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataNumber`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataNumber = {
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataPersonalName`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataPersonalName =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataPhoneNumber`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataPhoneNumber =
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataStatus`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataStatus = {
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataRating`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataRating = {
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataSelect`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataSelect = {
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataText`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataText = {
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

### `operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataTimestamp`

```typescript
const value:
  operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataTimestamp =
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

