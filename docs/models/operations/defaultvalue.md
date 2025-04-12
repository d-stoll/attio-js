# DefaultValue

The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects.


## Supported Types

### `operations.DefaultValue1`

```typescript
const value: operations.DefaultValue1 = {
  type: "dynamic",
  template: "P1M",
};
```

### `operations.Two`

```typescript
const value: operations.Two = {
  type: "static",
  template: [
    {
      value: 5,
    },
  ],
};
```

