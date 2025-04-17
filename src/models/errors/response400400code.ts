/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const Response400400Code = {
  ValueNotFound: "value_not_found",
} as const;
export type Response400400Code = ClosedEnum<typeof Response400400Code>;

/** @internal */
export const Response400400Code$inboundSchema: z.ZodNativeEnum<
  typeof Response400400Code
> = z.nativeEnum(Response400400Code);

/** @internal */
export const Response400400Code$outboundSchema: z.ZodNativeEnum<
  typeof Response400400Code
> = Response400400Code$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Response400400Code$ {
  /** @deprecated use `Response400400Code$inboundSchema` instead. */
  export const inboundSchema = Response400400Code$inboundSchema;
  /** @deprecated use `Response400400Code$outboundSchema` instead. */
  export const outboundSchema = Response400400Code$outboundSchema;
}
