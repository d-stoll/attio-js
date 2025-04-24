# OutputValue

A union of possible value types, as returned in response bodies.


## Supported Types

### `components.OutputValue1`

```typescript
const value: components.OutputValue1 = {
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  attributeType: "actor-reference",
};
```

### `components.OutputValue2`

```typescript
const value: components.OutputValue2 = {
  value: true,
  attributeType: "checkbox",
};
```

### `components.Three`

```typescript
const value: components.Three = {
  currencyValue: 99,
  currencyCode: "USD",
  attributeType: "currency",
};
```

### `components.Four`

```typescript
const value: components.Four = {
  attributeType: "date",
  value: "2023-01-01",
};
```

### `components.Five`

```typescript
const value: components.Five = {
  domain: "app.attio.com",
  rootDomain: "attio.com",
  attributeType: "domain",
};
```

### `components.Six`

```typescript
const value: components.Six = {
  originalEmailAddress: "alice@app.attio.com",
  emailAddress: "alice@app.attio.com",
  emailDomain: "app.attio.com",
  emailRootDomain: "attio.com",
  emailLocalSpecifier: "alice",
  attributeType: "email-address",
};
```

### `components.Seven`

```typescript
const value: components.Seven = {
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  attributeType: "record-reference",
};
```

### `components.Eight`

```typescript
const value: components.Eight = {
  interactionType: "email",
  interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
  ownerActor: {
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    type: "workspace-member",
  },
  attributeType: "interaction",
};
```

### `components.Nine`

```typescript
const value: components.Nine = {
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

### `components.Ten`

```typescript
const value: components.Ten = {
  value: 42,
  attributeType: "number",
};
```

### `components.Eleven`

```typescript
const value: components.Eleven = {
  firstName: "Ada",
  lastName: "Lovelace",
  fullName: "Ada Lovelace",
  attributeType: "personal-name",
};
```

### `components.Twelve`

```typescript
const value: components.Twelve = {
  originalPhoneNumber: "5558675309",
  countryCode: "US",
  phoneNumber: "+15558675309",
  attributeType: "phone-number",
};
```

### `components.Thirteen`

```typescript
const value: components.Thirteen = {
  status: "11f07f01-c10f-4e05-a522-33e050bc52ee",
  attributeType: "status",
};
```

### `components.Fourteen`

```typescript
const value: components.Fourteen = {
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

### `components.Fifteen`

```typescript
const value: components.Fifteen = {
  value: 3,
  attributeType: "rating",
};
```

### `components.Sixteen`

```typescript
const value: components.Sixteen = {
  option: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
  attributeType: "select",
};
```

### `components.Seventeen`

```typescript
const value: components.Seventeen = {
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

### `components.Eighteen`

```typescript
const value: components.Eighteen = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  attributeType: "text",
};
```

### `components.Nineteen`

```typescript
const value: components.Nineteen = {
  attributeType: "timestamp",
  value: new Date("2023-01-01T15:00:00.000000000Z"),
};
```

