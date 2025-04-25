# GetV2WebhooksEventType

Type of event the webhook is subscribed to.

## Example Usage

```typescript
import { GetV2WebhooksEventType } from "attio-js/models/operations/getv2webhooks.js";

let value: GetV2WebhooksEventType = "note.created";
```

## Values

```typescript
"comment.created" | "comment.resolved" | "comment.unresolved" | "comment.deleted" | "list.created" | "list.updated" | "list.deleted" | "list-attribute.created" | "list-attribute.updated" | "list-entry.created" | "list-entry.updated" | "list-entry.deleted" | "object-attribute.created" | "object-attribute.updated" | "note.created" | "note.updated" | "note.deleted" | "record.created" | "record.merged" | "record.updated" | "record.deleted" | "task.created" | "task.updated" | "task.deleted" | "workspace-member.created"
```