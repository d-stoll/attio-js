/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
export const PostV2CommentsDataCommentsFormat = {
  Plaintext: "plaintext",
} as const;
/**
 * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
export type PostV2CommentsDataCommentsFormat = ClosedEnum<
  typeof PostV2CommentsDataCommentsFormat
>;

export const PostV2CommentsDataCommentsType = {
  WorkspaceMember: "workspace-member",
} as const;
export type PostV2CommentsDataCommentsType = ClosedEnum<
  typeof PostV2CommentsDataCommentsType
>;

/**
 * The workspace member who wrote this comment. Note that other types of actors are not currently supported.
 */
export type PostV2CommentsDataAuthor = {
  type: PostV2CommentsDataCommentsType;
  id: string;
};

export type Entry = {
  /**
   * If creating a top-level comment on a list entry, this is the slug or ID of that list.
   */
  list: string;
  /**
   * If creating a top-level comment on a list entry, this is the ID of that entry.
   */
  entryId: string;
};

export type Data3 = {
  /**
   * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
   */
  format: PostV2CommentsDataCommentsFormat;
  /**
   * The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
   */
  content: string;
  /**
   * The workspace member who wrote this comment. Note that other types of actors are not currently supported.
   */
  author: PostV2CommentsDataAuthor;
  /**
   * `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
   */
  createdAt?: string | undefined;
  entry: Entry;
};

/**
 * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
export const PostV2CommentsDataFormat = {
  Plaintext: "plaintext",
} as const;
/**
 * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
export type PostV2CommentsDataFormat = ClosedEnum<
  typeof PostV2CommentsDataFormat
>;

export const PostV2CommentsDataType = {
  WorkspaceMember: "workspace-member",
} as const;
export type PostV2CommentsDataType = ClosedEnum<typeof PostV2CommentsDataType>;

/**
 * The workspace member who wrote this comment. Note that other types of actors are not currently supported.
 */
export type DataAuthor = {
  type: PostV2CommentsDataType;
  id: string;
};

export type RecordT = {
  /**
   * If creating a top-level comment on a record, this is the slug or ID of that object.
   */
  object: string;
  /**
   * If creating a top-level comment on a record, this is the ID of that record.
   */
  recordId: string;
};

export type Data2 = {
  /**
   * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
   */
  format: PostV2CommentsDataFormat;
  /**
   * The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
   */
  content: string;
  /**
   * The workspace member who wrote this comment. Note that other types of actors are not currently supported.
   */
  author: DataAuthor;
  /**
   * `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
   */
  createdAt?: string | undefined;
  record: RecordT;
};

/**
 * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
export const DataFormat = {
  Plaintext: "plaintext",
} as const;
/**
 * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
export type DataFormat = ClosedEnum<typeof DataFormat>;

export const DataType = {
  WorkspaceMember: "workspace-member",
} as const;
export type DataType = ClosedEnum<typeof DataType>;

/**
 * The workspace member who wrote this comment. Note that other types of actors are not currently supported.
 */
export type Author = {
  type: DataType;
  id: string;
};

export type Data1 = {
  /**
   * The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
   */
  format: DataFormat;
  /**
   * The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
   */
  content: string;
  /**
   * The workspace member who wrote this comment. Note that other types of actors are not currently supported.
   */
  author: Author;
  /**
   * `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
   */
  createdAt?: string | undefined;
  /**
   * If responding to an existing thread, this would be the ID of that thread.
   */
  threadId: string;
};

export type PostV2CommentsData = Data1 | Data2 | Data3;

export type PostV2CommentsRequestBody = {
  data: Data1 | Data2 | Data3;
};

/**
 * Success
 */
export type PostV2CommentsResponseBody = {
  data: components.Comment;
};

/** @internal */
export const PostV2CommentsDataCommentsFormat$inboundSchema: z.ZodNativeEnum<
  typeof PostV2CommentsDataCommentsFormat
> = z.nativeEnum(PostV2CommentsDataCommentsFormat);

/** @internal */
export const PostV2CommentsDataCommentsFormat$outboundSchema: z.ZodNativeEnum<
  typeof PostV2CommentsDataCommentsFormat
> = PostV2CommentsDataCommentsFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2CommentsDataCommentsFormat$ {
  /** @deprecated use `PostV2CommentsDataCommentsFormat$inboundSchema` instead. */
  export const inboundSchema = PostV2CommentsDataCommentsFormat$inboundSchema;
  /** @deprecated use `PostV2CommentsDataCommentsFormat$outboundSchema` instead. */
  export const outboundSchema = PostV2CommentsDataCommentsFormat$outboundSchema;
}

/** @internal */
export const PostV2CommentsDataCommentsType$inboundSchema: z.ZodNativeEnum<
  typeof PostV2CommentsDataCommentsType
> = z.nativeEnum(PostV2CommentsDataCommentsType);

/** @internal */
export const PostV2CommentsDataCommentsType$outboundSchema: z.ZodNativeEnum<
  typeof PostV2CommentsDataCommentsType
> = PostV2CommentsDataCommentsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2CommentsDataCommentsType$ {
  /** @deprecated use `PostV2CommentsDataCommentsType$inboundSchema` instead. */
  export const inboundSchema = PostV2CommentsDataCommentsType$inboundSchema;
  /** @deprecated use `PostV2CommentsDataCommentsType$outboundSchema` instead. */
  export const outboundSchema = PostV2CommentsDataCommentsType$outboundSchema;
}

/** @internal */
export const PostV2CommentsDataAuthor$inboundSchema: z.ZodType<
  PostV2CommentsDataAuthor,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: PostV2CommentsDataCommentsType$inboundSchema,
  id: z.string(),
});

/** @internal */
export type PostV2CommentsDataAuthor$Outbound = {
  type: string;
  id: string;
};

/** @internal */
export const PostV2CommentsDataAuthor$outboundSchema: z.ZodType<
  PostV2CommentsDataAuthor$Outbound,
  z.ZodTypeDef,
  PostV2CommentsDataAuthor
> = z.object({
  type: PostV2CommentsDataCommentsType$outboundSchema,
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2CommentsDataAuthor$ {
  /** @deprecated use `PostV2CommentsDataAuthor$inboundSchema` instead. */
  export const inboundSchema = PostV2CommentsDataAuthor$inboundSchema;
  /** @deprecated use `PostV2CommentsDataAuthor$outboundSchema` instead. */
  export const outboundSchema = PostV2CommentsDataAuthor$outboundSchema;
  /** @deprecated use `PostV2CommentsDataAuthor$Outbound` instead. */
  export type Outbound = PostV2CommentsDataAuthor$Outbound;
}

export function postV2CommentsDataAuthorToJSON(
  postV2CommentsDataAuthor: PostV2CommentsDataAuthor,
): string {
  return JSON.stringify(
    PostV2CommentsDataAuthor$outboundSchema.parse(postV2CommentsDataAuthor),
  );
}

export function postV2CommentsDataAuthorFromJSON(
  jsonString: string,
): SafeParseResult<PostV2CommentsDataAuthor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2CommentsDataAuthor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2CommentsDataAuthor' from JSON`,
  );
}

/** @internal */
export const Entry$inboundSchema: z.ZodType<Entry, z.ZodTypeDef, unknown> = z
  .object({
    list: z.string(),
    entry_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "entry_id": "entryId",
    });
  });

/** @internal */
export type Entry$Outbound = {
  list: string;
  entry_id: string;
};

/** @internal */
export const Entry$outboundSchema: z.ZodType<
  Entry$Outbound,
  z.ZodTypeDef,
  Entry
> = z.object({
  list: z.string(),
  entryId: z.string(),
}).transform((v) => {
  return remap$(v, {
    entryId: "entry_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Entry$ {
  /** @deprecated use `Entry$inboundSchema` instead. */
  export const inboundSchema = Entry$inboundSchema;
  /** @deprecated use `Entry$outboundSchema` instead. */
  export const outboundSchema = Entry$outboundSchema;
  /** @deprecated use `Entry$Outbound` instead. */
  export type Outbound = Entry$Outbound;
}

export function entryToJSON(entry: Entry): string {
  return JSON.stringify(Entry$outboundSchema.parse(entry));
}

export function entryFromJSON(
  jsonString: string,
): SafeParseResult<Entry, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Entry$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Entry' from JSON`,
  );
}

/** @internal */
export const Data3$inboundSchema: z.ZodType<Data3, z.ZodTypeDef, unknown> = z
  .object({
    format: PostV2CommentsDataCommentsFormat$inboundSchema,
    content: z.string(),
    author: z.lazy(() => PostV2CommentsDataAuthor$inboundSchema),
    created_at: z.string().optional(),
    entry: z.lazy(() => Entry$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
    });
  });

/** @internal */
export type Data3$Outbound = {
  format: string;
  content: string;
  author: PostV2CommentsDataAuthor$Outbound;
  created_at?: string | undefined;
  entry: Entry$Outbound;
};

/** @internal */
export const Data3$outboundSchema: z.ZodType<
  Data3$Outbound,
  z.ZodTypeDef,
  Data3
> = z.object({
  format: PostV2CommentsDataCommentsFormat$outboundSchema,
  content: z.string(),
  author: z.lazy(() => PostV2CommentsDataAuthor$outboundSchema),
  createdAt: z.string().optional(),
  entry: z.lazy(() => Entry$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data3$ {
  /** @deprecated use `Data3$inboundSchema` instead. */
  export const inboundSchema = Data3$inboundSchema;
  /** @deprecated use `Data3$outboundSchema` instead. */
  export const outboundSchema = Data3$outboundSchema;
  /** @deprecated use `Data3$Outbound` instead. */
  export type Outbound = Data3$Outbound;
}

export function data3ToJSON(data3: Data3): string {
  return JSON.stringify(Data3$outboundSchema.parse(data3));
}

export function data3FromJSON(
  jsonString: string,
): SafeParseResult<Data3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data3' from JSON`,
  );
}

/** @internal */
export const PostV2CommentsDataFormat$inboundSchema: z.ZodNativeEnum<
  typeof PostV2CommentsDataFormat
> = z.nativeEnum(PostV2CommentsDataFormat);

/** @internal */
export const PostV2CommentsDataFormat$outboundSchema: z.ZodNativeEnum<
  typeof PostV2CommentsDataFormat
> = PostV2CommentsDataFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2CommentsDataFormat$ {
  /** @deprecated use `PostV2CommentsDataFormat$inboundSchema` instead. */
  export const inboundSchema = PostV2CommentsDataFormat$inboundSchema;
  /** @deprecated use `PostV2CommentsDataFormat$outboundSchema` instead. */
  export const outboundSchema = PostV2CommentsDataFormat$outboundSchema;
}

/** @internal */
export const PostV2CommentsDataType$inboundSchema: z.ZodNativeEnum<
  typeof PostV2CommentsDataType
> = z.nativeEnum(PostV2CommentsDataType);

/** @internal */
export const PostV2CommentsDataType$outboundSchema: z.ZodNativeEnum<
  typeof PostV2CommentsDataType
> = PostV2CommentsDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2CommentsDataType$ {
  /** @deprecated use `PostV2CommentsDataType$inboundSchema` instead. */
  export const inboundSchema = PostV2CommentsDataType$inboundSchema;
  /** @deprecated use `PostV2CommentsDataType$outboundSchema` instead. */
  export const outboundSchema = PostV2CommentsDataType$outboundSchema;
}

/** @internal */
export const DataAuthor$inboundSchema: z.ZodType<
  DataAuthor,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: PostV2CommentsDataType$inboundSchema,
  id: z.string(),
});

/** @internal */
export type DataAuthor$Outbound = {
  type: string;
  id: string;
};

/** @internal */
export const DataAuthor$outboundSchema: z.ZodType<
  DataAuthor$Outbound,
  z.ZodTypeDef,
  DataAuthor
> = z.object({
  type: PostV2CommentsDataType$outboundSchema,
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataAuthor$ {
  /** @deprecated use `DataAuthor$inboundSchema` instead. */
  export const inboundSchema = DataAuthor$inboundSchema;
  /** @deprecated use `DataAuthor$outboundSchema` instead. */
  export const outboundSchema = DataAuthor$outboundSchema;
  /** @deprecated use `DataAuthor$Outbound` instead. */
  export type Outbound = DataAuthor$Outbound;
}

export function dataAuthorToJSON(dataAuthor: DataAuthor): string {
  return JSON.stringify(DataAuthor$outboundSchema.parse(dataAuthor));
}

export function dataAuthorFromJSON(
  jsonString: string,
): SafeParseResult<DataAuthor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataAuthor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataAuthor' from JSON`,
  );
}

/** @internal */
export const RecordT$inboundSchema: z.ZodType<RecordT, z.ZodTypeDef, unknown> =
  z.object({
    object: z.string(),
    record_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "record_id": "recordId",
    });
  });

/** @internal */
export type RecordT$Outbound = {
  object: string;
  record_id: string;
};

/** @internal */
export const RecordT$outboundSchema: z.ZodType<
  RecordT$Outbound,
  z.ZodTypeDef,
  RecordT
> = z.object({
  object: z.string(),
  recordId: z.string(),
}).transform((v) => {
  return remap$(v, {
    recordId: "record_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecordT$ {
  /** @deprecated use `RecordT$inboundSchema` instead. */
  export const inboundSchema = RecordT$inboundSchema;
  /** @deprecated use `RecordT$outboundSchema` instead. */
  export const outboundSchema = RecordT$outboundSchema;
  /** @deprecated use `RecordT$Outbound` instead. */
  export type Outbound = RecordT$Outbound;
}

export function recordToJSON(recordT: RecordT): string {
  return JSON.stringify(RecordT$outboundSchema.parse(recordT));
}

export function recordFromJSON(
  jsonString: string,
): SafeParseResult<RecordT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RecordT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RecordT' from JSON`,
  );
}

/** @internal */
export const Data2$inboundSchema: z.ZodType<Data2, z.ZodTypeDef, unknown> = z
  .object({
    format: PostV2CommentsDataFormat$inboundSchema,
    content: z.string(),
    author: z.lazy(() => DataAuthor$inboundSchema),
    created_at: z.string().optional(),
    record: z.lazy(() => RecordT$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
    });
  });

/** @internal */
export type Data2$Outbound = {
  format: string;
  content: string;
  author: DataAuthor$Outbound;
  created_at?: string | undefined;
  record: RecordT$Outbound;
};

/** @internal */
export const Data2$outboundSchema: z.ZodType<
  Data2$Outbound,
  z.ZodTypeDef,
  Data2
> = z.object({
  format: PostV2CommentsDataFormat$outboundSchema,
  content: z.string(),
  author: z.lazy(() => DataAuthor$outboundSchema),
  createdAt: z.string().optional(),
  record: z.lazy(() => RecordT$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data2$ {
  /** @deprecated use `Data2$inboundSchema` instead. */
  export const inboundSchema = Data2$inboundSchema;
  /** @deprecated use `Data2$outboundSchema` instead. */
  export const outboundSchema = Data2$outboundSchema;
  /** @deprecated use `Data2$Outbound` instead. */
  export type Outbound = Data2$Outbound;
}

export function data2ToJSON(data2: Data2): string {
  return JSON.stringify(Data2$outboundSchema.parse(data2));
}

export function data2FromJSON(
  jsonString: string,
): SafeParseResult<Data2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data2' from JSON`,
  );
}

/** @internal */
export const DataFormat$inboundSchema: z.ZodNativeEnum<typeof DataFormat> = z
  .nativeEnum(DataFormat);

/** @internal */
export const DataFormat$outboundSchema: z.ZodNativeEnum<typeof DataFormat> =
  DataFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataFormat$ {
  /** @deprecated use `DataFormat$inboundSchema` instead. */
  export const inboundSchema = DataFormat$inboundSchema;
  /** @deprecated use `DataFormat$outboundSchema` instead. */
  export const outboundSchema = DataFormat$outboundSchema;
}

/** @internal */
export const DataType$inboundSchema: z.ZodNativeEnum<typeof DataType> = z
  .nativeEnum(DataType);

/** @internal */
export const DataType$outboundSchema: z.ZodNativeEnum<typeof DataType> =
  DataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataType$ {
  /** @deprecated use `DataType$inboundSchema` instead. */
  export const inboundSchema = DataType$inboundSchema;
  /** @deprecated use `DataType$outboundSchema` instead. */
  export const outboundSchema = DataType$outboundSchema;
}

/** @internal */
export const Author$inboundSchema: z.ZodType<Author, z.ZodTypeDef, unknown> = z
  .object({
    type: DataType$inboundSchema,
    id: z.string(),
  });

/** @internal */
export type Author$Outbound = {
  type: string;
  id: string;
};

/** @internal */
export const Author$outboundSchema: z.ZodType<
  Author$Outbound,
  z.ZodTypeDef,
  Author
> = z.object({
  type: DataType$outboundSchema,
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Author$ {
  /** @deprecated use `Author$inboundSchema` instead. */
  export const inboundSchema = Author$inboundSchema;
  /** @deprecated use `Author$outboundSchema` instead. */
  export const outboundSchema = Author$outboundSchema;
  /** @deprecated use `Author$Outbound` instead. */
  export type Outbound = Author$Outbound;
}

export function authorToJSON(author: Author): string {
  return JSON.stringify(Author$outboundSchema.parse(author));
}

export function authorFromJSON(
  jsonString: string,
): SafeParseResult<Author, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Author$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Author' from JSON`,
  );
}

/** @internal */
export const Data1$inboundSchema: z.ZodType<Data1, z.ZodTypeDef, unknown> = z
  .object({
    format: DataFormat$inboundSchema,
    content: z.string(),
    author: z.lazy(() => Author$inboundSchema),
    created_at: z.string().optional(),
    thread_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
      "thread_id": "threadId",
    });
  });

/** @internal */
export type Data1$Outbound = {
  format: string;
  content: string;
  author: Author$Outbound;
  created_at?: string | undefined;
  thread_id: string;
};

/** @internal */
export const Data1$outboundSchema: z.ZodType<
  Data1$Outbound,
  z.ZodTypeDef,
  Data1
> = z.object({
  format: DataFormat$outboundSchema,
  content: z.string(),
  author: z.lazy(() => Author$outboundSchema),
  createdAt: z.string().optional(),
  threadId: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    threadId: "thread_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data1$ {
  /** @deprecated use `Data1$inboundSchema` instead. */
  export const inboundSchema = Data1$inboundSchema;
  /** @deprecated use `Data1$outboundSchema` instead. */
  export const outboundSchema = Data1$outboundSchema;
  /** @deprecated use `Data1$Outbound` instead. */
  export type Outbound = Data1$Outbound;
}

export function data1ToJSON(data1: Data1): string {
  return JSON.stringify(Data1$outboundSchema.parse(data1));
}

export function data1FromJSON(
  jsonString: string,
): SafeParseResult<Data1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data1' from JSON`,
  );
}

/** @internal */
export const PostV2CommentsData$inboundSchema: z.ZodType<
  PostV2CommentsData,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Data1$inboundSchema),
  z.lazy(() => Data2$inboundSchema),
  z.lazy(() => Data3$inboundSchema),
]);

/** @internal */
export type PostV2CommentsData$Outbound =
  | Data1$Outbound
  | Data2$Outbound
  | Data3$Outbound;

/** @internal */
export const PostV2CommentsData$outboundSchema: z.ZodType<
  PostV2CommentsData$Outbound,
  z.ZodTypeDef,
  PostV2CommentsData
> = z.union([
  z.lazy(() => Data1$outboundSchema),
  z.lazy(() => Data2$outboundSchema),
  z.lazy(() => Data3$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2CommentsData$ {
  /** @deprecated use `PostV2CommentsData$inboundSchema` instead. */
  export const inboundSchema = PostV2CommentsData$inboundSchema;
  /** @deprecated use `PostV2CommentsData$outboundSchema` instead. */
  export const outboundSchema = PostV2CommentsData$outboundSchema;
  /** @deprecated use `PostV2CommentsData$Outbound` instead. */
  export type Outbound = PostV2CommentsData$Outbound;
}

export function postV2CommentsDataToJSON(
  postV2CommentsData: PostV2CommentsData,
): string {
  return JSON.stringify(
    PostV2CommentsData$outboundSchema.parse(postV2CommentsData),
  );
}

export function postV2CommentsDataFromJSON(
  jsonString: string,
): SafeParseResult<PostV2CommentsData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2CommentsData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2CommentsData' from JSON`,
  );
}

/** @internal */
export const PostV2CommentsRequestBody$inboundSchema: z.ZodType<
  PostV2CommentsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.union([
    z.lazy(() => Data1$inboundSchema),
    z.lazy(() => Data2$inboundSchema),
    z.lazy(() => Data3$inboundSchema),
  ]),
});

/** @internal */
export type PostV2CommentsRequestBody$Outbound = {
  data: Data1$Outbound | Data2$Outbound | Data3$Outbound;
};

/** @internal */
export const PostV2CommentsRequestBody$outboundSchema: z.ZodType<
  PostV2CommentsRequestBody$Outbound,
  z.ZodTypeDef,
  PostV2CommentsRequestBody
> = z.object({
  data: z.union([
    z.lazy(() => Data1$outboundSchema),
    z.lazy(() => Data2$outboundSchema),
    z.lazy(() => Data3$outboundSchema),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2CommentsRequestBody$ {
  /** @deprecated use `PostV2CommentsRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV2CommentsRequestBody$inboundSchema;
  /** @deprecated use `PostV2CommentsRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostV2CommentsRequestBody$outboundSchema;
  /** @deprecated use `PostV2CommentsRequestBody$Outbound` instead. */
  export type Outbound = PostV2CommentsRequestBody$Outbound;
}

export function postV2CommentsRequestBodyToJSON(
  postV2CommentsRequestBody: PostV2CommentsRequestBody,
): string {
  return JSON.stringify(
    PostV2CommentsRequestBody$outboundSchema.parse(postV2CommentsRequestBody),
  );
}

export function postV2CommentsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV2CommentsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2CommentsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2CommentsRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV2CommentsResponseBody$inboundSchema: z.ZodType<
  PostV2CommentsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Comment$inboundSchema,
});

/** @internal */
export type PostV2CommentsResponseBody$Outbound = {
  data: components.Comment$Outbound;
};

/** @internal */
export const PostV2CommentsResponseBody$outboundSchema: z.ZodType<
  PostV2CommentsResponseBody$Outbound,
  z.ZodTypeDef,
  PostV2CommentsResponseBody
> = z.object({
  data: components.Comment$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2CommentsResponseBody$ {
  /** @deprecated use `PostV2CommentsResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostV2CommentsResponseBody$inboundSchema;
  /** @deprecated use `PostV2CommentsResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostV2CommentsResponseBody$outboundSchema;
  /** @deprecated use `PostV2CommentsResponseBody$Outbound` instead. */
  export type Outbound = PostV2CommentsResponseBody$Outbound;
}

export function postV2CommentsResponseBodyToJSON(
  postV2CommentsResponseBody: PostV2CommentsResponseBody,
): string {
  return JSON.stringify(
    PostV2CommentsResponseBody$outboundSchema.parse(postV2CommentsResponseBody),
  );
}

export function postV2CommentsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PostV2CommentsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV2CommentsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2CommentsResponseBody' from JSON`,
  );
}
