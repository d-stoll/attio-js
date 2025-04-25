# PostV2CommentsDataUnion


## Supported Types

### `operations.PostV2CommentsDataPlaintext1`

```typescript
const value: operations.PostV2CommentsDataPlaintext1 = {
  format: "plaintext",
  content:
    "If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.",
  author: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  createdAt: "2023-01-01T15:00:00.000000000Z",
  threadId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
};
```

### `operations.PostV2CommentsDataPlaintext2`

```typescript
const value: operations.PostV2CommentsDataPlaintext2 = {
  format: "plaintext",
  content:
    "If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.",
  author: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  createdAt: "2023-01-01T15:00:00.000000000Z",
  record: {
    object: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  },
};
```

### `operations.PostV2CommentsDataPlaintext3`

```typescript
const value: operations.PostV2CommentsDataPlaintext3 = {
  format: "plaintext",
  content:
    "If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.",
  author: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  createdAt: "2023-01-01T15:00:00.000000000Z",
  entry: {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  },
};
```

