# InputValueUnion

A union of possible value types, as required in request bodies.


## Supported Types

### `components.InputValueWorkspaceMember`

```typescript
const value: components.InputValueWorkspaceMember = {
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

### `components.InputValue1`

```typescript
const value: components.InputValue1 = {
  workspaceMemberEmailAddress: "alice@attio.com",
};
```

### `components.InputValue2`

```typescript
const value: components.InputValue2 = {
  value: true,
};
```

### `components.InputValue3`

```typescript
const value: components.InputValue3 = {
  currencyValue: 99,
};
```

### `components.InputValue4`

```typescript
const value: components.InputValue4 = {
  value: "2023-01-01",
};
```

### `components.InputValue5`

```typescript
const value: components.InputValue5 = {
  domain: "app.attio.com",
};
```

### `components.InputValue6`

```typescript
const value: components.InputValue6 = {
  emailAddress: "alice@app.attio.com",
};
```

### `components.InputValue7`

```typescript
const value: components.InputValue7 = {
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

### `components.InputValue8`

```typescript
const value: components.InputValue8 = {
  targetObject: "people",
  slugOrIdOfMatchingAttribute: [
    {
      value: 17224912,
    },
  ],
};
```

### `components.InputValue9`

```typescript
const value: components.InputValue9 = {
  interactionType: "email",
  interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
  ownerActor: {
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    type: "workspace-member",
  },
};
```

### `components.InputValue10`

```typescript
const value: components.InputValue10 = {
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
};
```

### `components.InputValue11`

```typescript
const value: components.InputValue11 = {
  value: 42,
};
```

### `components.InputValue12`

```typescript
const value: components.InputValue12 = {
  firstName: "Ada",
  lastName: "Lovelace",
  fullName: "Ada Lovelace",
};
```

### `components.InputValue13`

```typescript
const value: components.InputValue13 = {
  originalPhoneNumber: "+15558675309",
  countryCode: "GB",
};
```

### `components.InputValue14`

```typescript
const value: components.InputValue14 = {
  status: "In Progress",
};
```

### `components.InputValue15`

```typescript
const value: components.InputValue15 = {
  value: 3,
};
```

### `components.InputValue16`

```typescript
const value: components.InputValue16 = {
  option: "Medium",
};
```

### `components.InputValue17`

```typescript
const value: components.InputValue17 = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
```

### `components.InputValue18`

```typescript
const value: components.InputValue18 = {
  value: new Date("2023-01-01T15:00:00.000000000Z"),
};
```

