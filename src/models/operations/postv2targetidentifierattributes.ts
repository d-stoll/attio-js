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
 * Whether the attribute is to be created on an object or a list.
 */
export const PathParamTarget = {
  Objects: "objects",
  Lists: "lists",
} as const;
/**
 * Whether the attribute is to be created on an object or a list.
 */
export type PathParamTarget = ClosedEnum<typeof PathParamTarget>;

/**
 * The type of the attribute. This value affects the possible `config` values. Attributes of type "status" are not supported on objects.
 */
export const Type = {
  Text: "text",
  Number: "number",
  Checkbox: "checkbox",
  Currency: "currency",
  Date: "date",
  Timestamp: "timestamp",
  Rating: "rating",
  Status: "status",
  Select: "select",
  RecordReference: "record-reference",
  ActorReference: "actor-reference",
  Location: "location",
  Domain: "domain",
  EmailAddress: "email-address",
  PhoneNumber: "phone-number",
} as const;
/**
 * The type of the attribute. This value affects the possible `config` values. Attributes of type "status" are not supported on objects.
 */
export type Type = ClosedEnum<typeof Type>;

export const PostV2TargetIdentifierAttributesDefaultValueType = {
  Static: "static",
} as const;
export type PostV2TargetIdentifierAttributesDefaultValueType = ClosedEnum<
  typeof PostV2TargetIdentifierAttributesDefaultValueType
>;

export type Two = {
  type: PostV2TargetIdentifierAttributesDefaultValueType;
  template: Array<components.InputValue>;
};

export const DefaultValueType = {
  Dynamic: "dynamic",
} as const;
export type DefaultValueType = ClosedEnum<typeof DefaultValueType>;

/**
 * For actor reference attributes, you may pass a dynamic value of `"current-user"`. When creating new records or entries, this will cause the actor reference value to be populated with either the workspace member or API token that created the record/entry.
 */
export const Template1 = {
  CurrentUser: "current-user",
} as const;
/**
 * For actor reference attributes, you may pass a dynamic value of `"current-user"`. When creating new records or entries, this will cause the actor reference value to be populated with either the workspace member or API token that created the record/entry.
 */
export type Template1 = ClosedEnum<typeof Template1>;

export type One = {
  type: DefaultValueType;
  template?: any | undefined;
};

/**
 * The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects.
 */
export type DefaultValue = One | Two;

/**
 * The ISO4217 code representing the currency that values for this attribute should be stored in.
 */
export const DefaultCurrencyCode = {
  Aud: "AUD",
  Brl: "BRL",
  Bel: "BEL",
  Cad: "CAD",
  Cny: "CNY",
  Cop: "COP",
  Czk: "CZK",
  Dkk: "DKK",
  Eur: "EUR",
  Hkd: "HKD",
  Isk: "ISK",
  Inr: "INR",
  Ils: "ILS",
  Jpy: "JPY",
  Krw: "KRW",
  Myr: "MYR",
  Mxn: "MXN",
  Ntd: "NTD",
  Nzd: "NZD",
  Ngn: "NGN",
  Nok: "NOK",
  Xpf: "XPF",
  Pen: "PEN",
  Php: "PHP",
  Pln: "PLN",
  Gbp: "GBP",
  Sar: "SAR",
  Sgd: "SGD",
  Zar: "ZAR",
  Sek: "SEK",
  Chf: "CHF",
  Aed: "AED",
  Usd: "USD",
} as const;
/**
 * The ISO4217 code representing the currency that values for this attribute should be stored in.
 */
export type DefaultCurrencyCode = ClosedEnum<typeof DefaultCurrencyCode>;

/**
 * How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
 */
export const DisplayType = {
  Code: "code",
  Name: "name",
  NarrowSymbol: "narrowSymbol",
  Symbol: "symbol",
} as const;
/**
 * How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
 */
export type DisplayType = ClosedEnum<typeof DisplayType>;

/**
 * Configuration available for attributes of type "currency".
 */
export type Currency = {
  /**
   * The ISO4217 code representing the currency that values for this attribute should be stored in.
   */
  defaultCurrencyCode: DefaultCurrencyCode;
  /**
   * How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
   */
  displayType: DisplayType;
};

/**
 * Configuration available for attributes of type "record-reference".
 */
export type RecordReference = {
  /**
   * A list of slugs or UUIDs to indicate which objects records are allowed to belong to. Leave empty to to allow records from all object types.
   */
  allowedObjects: Array<string>;
};

export type Config = {
  /**
   * Configuration available for attributes of type "currency".
   */
  currency?: Currency | undefined;
  /**
   * Configuration available for attributes of type "record-reference".
   */
  recordReference?: RecordReference | undefined;
};

export type PostV2TargetIdentifierAttributesData = {
  /**
   * The name of the attribute. The title will be visible across Attio's UI.
   */
  title: string;
  /**
   * A text description for the attribute.
   */
  description: string | null;
  /**
   * A unique, human-readable slug to access the attribute through URLs and API calls. Formatted in snake case.
   */
  apiSlug: string;
  /**
   * The type of the attribute. This value affects the possible `config` values. Attributes of type "status" are not supported on objects.
   */
  type: Type;
  /**
   * When `is_required` is `true`, new records/entries must have a value for this attribute. If `false`, values may be `null`. This value does not affect existing data and you do not need to backfill `null` values if changing `is_required` from `false` to `true`.
   */
  isRequired: boolean;
  /**
   * Whether or not new values for this attribute must be unique. Uniqueness restrictions are only applied to new data and do not apply retroactively to previously created data.
   */
  isUnique: boolean;
  /**
   * Whether or not this attribute can have multiple values. Multiselect is only available on some value types.
   */
  isMultiselect: boolean;
  /**
   * The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects.
   */
  defaultValue?: One | Two | null | undefined;
  config: Config;
};

export type PostV2TargetIdentifierAttributesRequestBody = {
  data: PostV2TargetIdentifierAttributesData;
};

export type PostV2TargetIdentifierAttributesRequest = {
  /**
   * Whether the attribute is to be created on an object or a list.
   */
  target: PathParamTarget;
  identifier: string;
  requestBody: PostV2TargetIdentifierAttributesRequestBody;
};

/**
 * Success
 */
export type PostV2TargetIdentifierAttributesResponseBody = {
  data: components.Attribute;
};

/** @internal */
export const PathParamTarget$inboundSchema: z.ZodNativeEnum<
  typeof PathParamTarget
> = z.nativeEnum(PathParamTarget);

/** @internal */
export const PathParamTarget$outboundSchema: z.ZodNativeEnum<
  typeof PathParamTarget
> = PathParamTarget$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PathParamTarget$ {
  /** @deprecated use `PathParamTarget$inboundSchema` instead. */
  export const inboundSchema = PathParamTarget$inboundSchema;
  /** @deprecated use `PathParamTarget$outboundSchema` instead. */
  export const outboundSchema = PathParamTarget$outboundSchema;
}

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const PostV2TargetIdentifierAttributesDefaultValueType$inboundSchema:
  z.ZodNativeEnum<typeof PostV2TargetIdentifierAttributesDefaultValueType> = z
    .nativeEnum(PostV2TargetIdentifierAttributesDefaultValueType);

/** @internal */
export const PostV2TargetIdentifierAttributesDefaultValueType$outboundSchema:
  z.ZodNativeEnum<typeof PostV2TargetIdentifierAttributesDefaultValueType> =
    PostV2TargetIdentifierAttributesDefaultValueType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2TargetIdentifierAttributesDefaultValueType$ {
  /** @deprecated use `PostV2TargetIdentifierAttributesDefaultValueType$inboundSchema` instead. */
  export const inboundSchema =
    PostV2TargetIdentifierAttributesDefaultValueType$inboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesDefaultValueType$outboundSchema` instead. */
  export const outboundSchema =
    PostV2TargetIdentifierAttributesDefaultValueType$outboundSchema;
}

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z
  .object({
    type: PostV2TargetIdentifierAttributesDefaultValueType$inboundSchema,
    template: z.array(components.InputValue$inboundSchema),
  });

/** @internal */
export type Two$Outbound = {
  type: string;
  template: Array<components.InputValue$Outbound>;
};

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z
  .object({
    type: PostV2TargetIdentifierAttributesDefaultValueType$outboundSchema,
    template: z.array(components.InputValue$outboundSchema),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
  /** @deprecated use `Two$Outbound` instead. */
  export type Outbound = Two$Outbound;
}

export function twoToJSON(two: Two): string {
  return JSON.stringify(Two$outboundSchema.parse(two));
}

export function twoFromJSON(
  jsonString: string,
): SafeParseResult<Two, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Two$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Two' from JSON`,
  );
}

/** @internal */
export const DefaultValueType$inboundSchema: z.ZodNativeEnum<
  typeof DefaultValueType
> = z.nativeEnum(DefaultValueType);

/** @internal */
export const DefaultValueType$outboundSchema: z.ZodNativeEnum<
  typeof DefaultValueType
> = DefaultValueType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultValueType$ {
  /** @deprecated use `DefaultValueType$inboundSchema` instead. */
  export const inboundSchema = DefaultValueType$inboundSchema;
  /** @deprecated use `DefaultValueType$outboundSchema` instead. */
  export const outboundSchema = DefaultValueType$outboundSchema;
}

/** @internal */
export const Template1$inboundSchema: z.ZodNativeEnum<typeof Template1> = z
  .nativeEnum(Template1);

/** @internal */
export const Template1$outboundSchema: z.ZodNativeEnum<typeof Template1> =
  Template1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Template1$ {
  /** @deprecated use `Template1$inboundSchema` instead. */
  export const inboundSchema = Template1$inboundSchema;
  /** @deprecated use `Template1$outboundSchema` instead. */
  export const outboundSchema = Template1$outboundSchema;
}

/** @internal */
export const One$inboundSchema: z.ZodType<One, z.ZodTypeDef, unknown> = z
  .object({
    type: DefaultValueType$inboundSchema,
    template: z.any().optional(),
  });

/** @internal */
export type One$Outbound = {
  type: string;
  template?: any | undefined;
};

/** @internal */
export const One$outboundSchema: z.ZodType<One$Outbound, z.ZodTypeDef, One> = z
  .object({
    type: DefaultValueType$outboundSchema,
    template: z.any().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One$ {
  /** @deprecated use `One$inboundSchema` instead. */
  export const inboundSchema = One$inboundSchema;
  /** @deprecated use `One$outboundSchema` instead. */
  export const outboundSchema = One$outboundSchema;
  /** @deprecated use `One$Outbound` instead. */
  export type Outbound = One$Outbound;
}

export function oneToJSON(one: One): string {
  return JSON.stringify(One$outboundSchema.parse(one));
}

export function oneFromJSON(
  jsonString: string,
): SafeParseResult<One, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => One$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'One' from JSON`,
  );
}

/** @internal */
export const DefaultValue$inboundSchema: z.ZodType<
  DefaultValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.lazy(() => One$inboundSchema), z.lazy(() => Two$inboundSchema)]);

/** @internal */
export type DefaultValue$Outbound = One$Outbound | Two$Outbound;

/** @internal */
export const DefaultValue$outboundSchema: z.ZodType<
  DefaultValue$Outbound,
  z.ZodTypeDef,
  DefaultValue
> = z.union([
  z.lazy(() => One$outboundSchema),
  z.lazy(() => Two$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultValue$ {
  /** @deprecated use `DefaultValue$inboundSchema` instead. */
  export const inboundSchema = DefaultValue$inboundSchema;
  /** @deprecated use `DefaultValue$outboundSchema` instead. */
  export const outboundSchema = DefaultValue$outboundSchema;
  /** @deprecated use `DefaultValue$Outbound` instead. */
  export type Outbound = DefaultValue$Outbound;
}

export function defaultValueToJSON(defaultValue: DefaultValue): string {
  return JSON.stringify(DefaultValue$outboundSchema.parse(defaultValue));
}

export function defaultValueFromJSON(
  jsonString: string,
): SafeParseResult<DefaultValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DefaultValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DefaultValue' from JSON`,
  );
}

/** @internal */
export const DefaultCurrencyCode$inboundSchema: z.ZodNativeEnum<
  typeof DefaultCurrencyCode
> = z.nativeEnum(DefaultCurrencyCode);

/** @internal */
export const DefaultCurrencyCode$outboundSchema: z.ZodNativeEnum<
  typeof DefaultCurrencyCode
> = DefaultCurrencyCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultCurrencyCode$ {
  /** @deprecated use `DefaultCurrencyCode$inboundSchema` instead. */
  export const inboundSchema = DefaultCurrencyCode$inboundSchema;
  /** @deprecated use `DefaultCurrencyCode$outboundSchema` instead. */
  export const outboundSchema = DefaultCurrencyCode$outboundSchema;
}

/** @internal */
export const DisplayType$inboundSchema: z.ZodNativeEnum<typeof DisplayType> = z
  .nativeEnum(DisplayType);

/** @internal */
export const DisplayType$outboundSchema: z.ZodNativeEnum<typeof DisplayType> =
  DisplayType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DisplayType$ {
  /** @deprecated use `DisplayType$inboundSchema` instead. */
  export const inboundSchema = DisplayType$inboundSchema;
  /** @deprecated use `DisplayType$outboundSchema` instead. */
  export const outboundSchema = DisplayType$outboundSchema;
}

/** @internal */
export const Currency$inboundSchema: z.ZodType<
  Currency,
  z.ZodTypeDef,
  unknown
> = z.object({
  default_currency_code: DefaultCurrencyCode$inboundSchema,
  display_type: DisplayType$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "default_currency_code": "defaultCurrencyCode",
    "display_type": "displayType",
  });
});

/** @internal */
export type Currency$Outbound = {
  default_currency_code: string;
  display_type: string;
};

/** @internal */
export const Currency$outboundSchema: z.ZodType<
  Currency$Outbound,
  z.ZodTypeDef,
  Currency
> = z.object({
  defaultCurrencyCode: DefaultCurrencyCode$outboundSchema,
  displayType: DisplayType$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    defaultCurrencyCode: "default_currency_code",
    displayType: "display_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Currency$ {
  /** @deprecated use `Currency$inboundSchema` instead. */
  export const inboundSchema = Currency$inboundSchema;
  /** @deprecated use `Currency$outboundSchema` instead. */
  export const outboundSchema = Currency$outboundSchema;
  /** @deprecated use `Currency$Outbound` instead. */
  export type Outbound = Currency$Outbound;
}

export function currencyToJSON(currency: Currency): string {
  return JSON.stringify(Currency$outboundSchema.parse(currency));
}

export function currencyFromJSON(
  jsonString: string,
): SafeParseResult<Currency, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Currency$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Currency' from JSON`,
  );
}

/** @internal */
export const RecordReference$inboundSchema: z.ZodType<
  RecordReference,
  z.ZodTypeDef,
  unknown
> = z.object({
  allowed_objects: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "allowed_objects": "allowedObjects",
  });
});

/** @internal */
export type RecordReference$Outbound = {
  allowed_objects: Array<string>;
};

/** @internal */
export const RecordReference$outboundSchema: z.ZodType<
  RecordReference$Outbound,
  z.ZodTypeDef,
  RecordReference
> = z.object({
  allowedObjects: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    allowedObjects: "allowed_objects",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecordReference$ {
  /** @deprecated use `RecordReference$inboundSchema` instead. */
  export const inboundSchema = RecordReference$inboundSchema;
  /** @deprecated use `RecordReference$outboundSchema` instead. */
  export const outboundSchema = RecordReference$outboundSchema;
  /** @deprecated use `RecordReference$Outbound` instead. */
  export type Outbound = RecordReference$Outbound;
}

export function recordReferenceToJSON(
  recordReference: RecordReference,
): string {
  return JSON.stringify(RecordReference$outboundSchema.parse(recordReference));
}

export function recordReferenceFromJSON(
  jsonString: string,
): SafeParseResult<RecordReference, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RecordReference$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RecordReference' from JSON`,
  );
}

/** @internal */
export const Config$inboundSchema: z.ZodType<Config, z.ZodTypeDef, unknown> = z
  .object({
    currency: z.lazy(() => Currency$inboundSchema).optional(),
    record_reference: z.lazy(() => RecordReference$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "record_reference": "recordReference",
    });
  });

/** @internal */
export type Config$Outbound = {
  currency?: Currency$Outbound | undefined;
  record_reference?: RecordReference$Outbound | undefined;
};

/** @internal */
export const Config$outboundSchema: z.ZodType<
  Config$Outbound,
  z.ZodTypeDef,
  Config
> = z.object({
  currency: z.lazy(() => Currency$outboundSchema).optional(),
  recordReference: z.lazy(() => RecordReference$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    recordReference: "record_reference",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Config$ {
  /** @deprecated use `Config$inboundSchema` instead. */
  export const inboundSchema = Config$inboundSchema;
  /** @deprecated use `Config$outboundSchema` instead. */
  export const outboundSchema = Config$outboundSchema;
  /** @deprecated use `Config$Outbound` instead. */
  export type Outbound = Config$Outbound;
}

export function configToJSON(config: Config): string {
  return JSON.stringify(Config$outboundSchema.parse(config));
}

export function configFromJSON(
  jsonString: string,
): SafeParseResult<Config, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Config$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Config' from JSON`,
  );
}

/** @internal */
export const PostV2TargetIdentifierAttributesData$inboundSchema: z.ZodType<
  PostV2TargetIdentifierAttributesData,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string(),
  description: z.nullable(z.string()),
  api_slug: z.string(),
  type: Type$inboundSchema,
  is_required: z.boolean(),
  is_unique: z.boolean(),
  is_multiselect: z.boolean(),
  default_value: z.nullable(
    z.union([z.lazy(() => One$inboundSchema), z.lazy(() => Two$inboundSchema)]),
  ).optional(),
  config: z.lazy(() => Config$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "api_slug": "apiSlug",
    "is_required": "isRequired",
    "is_unique": "isUnique",
    "is_multiselect": "isMultiselect",
    "default_value": "defaultValue",
  });
});

/** @internal */
export type PostV2TargetIdentifierAttributesData$Outbound = {
  title: string;
  description: string | null;
  api_slug: string;
  type: string;
  is_required: boolean;
  is_unique: boolean;
  is_multiselect: boolean;
  default_value?: One$Outbound | Two$Outbound | null | undefined;
  config: Config$Outbound;
};

/** @internal */
export const PostV2TargetIdentifierAttributesData$outboundSchema: z.ZodType<
  PostV2TargetIdentifierAttributesData$Outbound,
  z.ZodTypeDef,
  PostV2TargetIdentifierAttributesData
> = z.object({
  title: z.string(),
  description: z.nullable(z.string()),
  apiSlug: z.string(),
  type: Type$outboundSchema,
  isRequired: z.boolean(),
  isUnique: z.boolean(),
  isMultiselect: z.boolean(),
  defaultValue: z.nullable(
    z.union([
      z.lazy(() => One$outboundSchema),
      z.lazy(() => Two$outboundSchema),
    ]),
  ).optional(),
  config: z.lazy(() => Config$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    apiSlug: "api_slug",
    isRequired: "is_required",
    isUnique: "is_unique",
    isMultiselect: "is_multiselect",
    defaultValue: "default_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2TargetIdentifierAttributesData$ {
  /** @deprecated use `PostV2TargetIdentifierAttributesData$inboundSchema` instead. */
  export const inboundSchema =
    PostV2TargetIdentifierAttributesData$inboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesData$outboundSchema` instead. */
  export const outboundSchema =
    PostV2TargetIdentifierAttributesData$outboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesData$Outbound` instead. */
  export type Outbound = PostV2TargetIdentifierAttributesData$Outbound;
}

export function postV2TargetIdentifierAttributesDataToJSON(
  postV2TargetIdentifierAttributesData: PostV2TargetIdentifierAttributesData,
): string {
  return JSON.stringify(
    PostV2TargetIdentifierAttributesData$outboundSchema.parse(
      postV2TargetIdentifierAttributesData,
    ),
  );
}

export function postV2TargetIdentifierAttributesDataFromJSON(
  jsonString: string,
): SafeParseResult<PostV2TargetIdentifierAttributesData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV2TargetIdentifierAttributesData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV2TargetIdentifierAttributesData' from JSON`,
  );
}

/** @internal */
export const PostV2TargetIdentifierAttributesRequestBody$inboundSchema:
  z.ZodType<
    PostV2TargetIdentifierAttributesRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: z.lazy(() => PostV2TargetIdentifierAttributesData$inboundSchema),
  });

/** @internal */
export type PostV2TargetIdentifierAttributesRequestBody$Outbound = {
  data: PostV2TargetIdentifierAttributesData$Outbound;
};

/** @internal */
export const PostV2TargetIdentifierAttributesRequestBody$outboundSchema:
  z.ZodType<
    PostV2TargetIdentifierAttributesRequestBody$Outbound,
    z.ZodTypeDef,
    PostV2TargetIdentifierAttributesRequestBody
  > = z.object({
    data: z.lazy(() => PostV2TargetIdentifierAttributesData$outboundSchema),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2TargetIdentifierAttributesRequestBody$ {
  /** @deprecated use `PostV2TargetIdentifierAttributesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV2TargetIdentifierAttributesRequestBody$inboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV2TargetIdentifierAttributesRequestBody$outboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesRequestBody$Outbound` instead. */
  export type Outbound = PostV2TargetIdentifierAttributesRequestBody$Outbound;
}

export function postV2TargetIdentifierAttributesRequestBodyToJSON(
  postV2TargetIdentifierAttributesRequestBody:
    PostV2TargetIdentifierAttributesRequestBody,
): string {
  return JSON.stringify(
    PostV2TargetIdentifierAttributesRequestBody$outboundSchema.parse(
      postV2TargetIdentifierAttributesRequestBody,
    ),
  );
}

export function postV2TargetIdentifierAttributesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV2TargetIdentifierAttributesRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV2TargetIdentifierAttributesRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV2TargetIdentifierAttributesRequestBody' from JSON`,
  );
}

/** @internal */
export const PostV2TargetIdentifierAttributesRequest$inboundSchema: z.ZodType<
  PostV2TargetIdentifierAttributesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  target: PathParamTarget$inboundSchema,
  identifier: z.string(),
  RequestBody: z.lazy(() =>
    PostV2TargetIdentifierAttributesRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostV2TargetIdentifierAttributesRequest$Outbound = {
  target: string;
  identifier: string;
  RequestBody: PostV2TargetIdentifierAttributesRequestBody$Outbound;
};

/** @internal */
export const PostV2TargetIdentifierAttributesRequest$outboundSchema: z.ZodType<
  PostV2TargetIdentifierAttributesRequest$Outbound,
  z.ZodTypeDef,
  PostV2TargetIdentifierAttributesRequest
> = z.object({
  target: PathParamTarget$outboundSchema,
  identifier: z.string(),
  requestBody: z.lazy(() =>
    PostV2TargetIdentifierAttributesRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2TargetIdentifierAttributesRequest$ {
  /** @deprecated use `PostV2TargetIdentifierAttributesRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostV2TargetIdentifierAttributesRequest$inboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV2TargetIdentifierAttributesRequest$outboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesRequest$Outbound` instead. */
  export type Outbound = PostV2TargetIdentifierAttributesRequest$Outbound;
}

export function postV2TargetIdentifierAttributesRequestToJSON(
  postV2TargetIdentifierAttributesRequest:
    PostV2TargetIdentifierAttributesRequest,
): string {
  return JSON.stringify(
    PostV2TargetIdentifierAttributesRequest$outboundSchema.parse(
      postV2TargetIdentifierAttributesRequest,
    ),
  );
}

export function postV2TargetIdentifierAttributesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV2TargetIdentifierAttributesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV2TargetIdentifierAttributesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV2TargetIdentifierAttributesRequest' from JSON`,
  );
}

/** @internal */
export const PostV2TargetIdentifierAttributesResponseBody$inboundSchema:
  z.ZodType<
    PostV2TargetIdentifierAttributesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: components.Attribute$inboundSchema,
  });

/** @internal */
export type PostV2TargetIdentifierAttributesResponseBody$Outbound = {
  data: components.Attribute$Outbound;
};

/** @internal */
export const PostV2TargetIdentifierAttributesResponseBody$outboundSchema:
  z.ZodType<
    PostV2TargetIdentifierAttributesResponseBody$Outbound,
    z.ZodTypeDef,
    PostV2TargetIdentifierAttributesResponseBody
  > = z.object({
    data: components.Attribute$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2TargetIdentifierAttributesResponseBody$ {
  /** @deprecated use `PostV2TargetIdentifierAttributesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV2TargetIdentifierAttributesResponseBody$inboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV2TargetIdentifierAttributesResponseBody$outboundSchema;
  /** @deprecated use `PostV2TargetIdentifierAttributesResponseBody$Outbound` instead. */
  export type Outbound = PostV2TargetIdentifierAttributesResponseBody$Outbound;
}

export function postV2TargetIdentifierAttributesResponseBodyToJSON(
  postV2TargetIdentifierAttributesResponseBody:
    PostV2TargetIdentifierAttributesResponseBody,
): string {
  return JSON.stringify(
    PostV2TargetIdentifierAttributesResponseBody$outboundSchema.parse(
      postV2TargetIdentifierAttributesResponseBody,
    ),
  );
}

export function postV2TargetIdentifierAttributesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV2TargetIdentifierAttributesResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV2TargetIdentifierAttributesResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV2TargetIdentifierAttributesResponseBody' from JSON`,
  );
}
