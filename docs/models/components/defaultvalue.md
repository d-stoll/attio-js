# DefaultValue

The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute.


## Supported Types

### `components.DefaultValueDynamic`

```typescript
const value: components.DefaultValueDynamic = {
  type: "dynamic",
  template: "P1M",
};
```

### `components.DefaultValueStatic`

```typescript
const value: components.DefaultValueStatic = {
  type: "static",
  template: [
    {
      value: "Some default text",
      attributeType: "text",
    },
  ],
};
```

