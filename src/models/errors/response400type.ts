/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const Response400Type = {
  InvalidRequestError: "invalid_request_error",
} as const;
export type Response400Type = ClosedEnum<typeof Response400Type>;

/** @internal */
export const Response400Type$inboundSchema: z.ZodNativeEnum<
  typeof Response400Type
> = z.nativeEnum(Response400Type);

/** @internal */
export const Response400Type$outboundSchema: z.ZodNativeEnum<
  typeof Response400Type
> = Response400Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Response400Type$ {
  /** @deprecated use `Response400Type$inboundSchema` instead. */
  export const inboundSchema = Response400Type$inboundSchema;
  /** @deprecated use `Response400Type$outboundSchema` instead. */
  export const outboundSchema = Response400Type$outboundSchema;
}
