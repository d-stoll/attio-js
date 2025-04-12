# PutV2ObjectsObjectRecordsValues


## Supported Types

### `operations.PutV2ObjectsObjectRecordsValues1`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues1 = {
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

### `operations.PutV2ObjectsObjectRecordsValues2`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues2 = {
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

### `operations.PutV2ObjectsObjectRecordsValues3`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues3 = {
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

### `operations.PutV2ObjectsObjectRecordsValues4`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues4 = {
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

### `operations.PutV2ObjectsObjectRecordsValues5`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues5 = {
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

### `operations.PutV2ObjectsObjectRecordsValues6`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues6 = {
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

### `operations.PutV2ObjectsObjectRecordsValues7`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues7 = {
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

### `operations.PutV2ObjectsObjectRecordsValues8`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues8 = {
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

### `operations.PutV2ObjectsObjectRecordsValues9`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues9 = {
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

### `operations.PutV2ObjectsObjectRecordsValues10`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues10 = {
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

### `operations.PutV2ObjectsObjectRecordsValues11`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues11 = {
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

### `operations.PutV2ObjectsObjectRecordsValues12`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues12 = {
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

### `operations.PutV2ObjectsObjectRecordsValues13`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues13 = {
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

### `operations.PutV2ObjectsObjectRecordsValues14`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues14 = {
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

### `operations.PutV2ObjectsObjectRecordsValues15`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues15 = {
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

### `operations.PutV2ObjectsObjectRecordsValues16`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues16 = {
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

### `operations.PutV2ObjectsObjectRecordsValues17`

```typescript
const value: operations.PutV2ObjectsObjectRecordsValues17 = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    type: "workspace-member",
  },
  attributeType: "timestamp",
  value: new RFCDate("2023-01-01T15:00:00.000000000Z"),
};
```

