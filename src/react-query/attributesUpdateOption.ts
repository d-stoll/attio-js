/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { attributesUpdateOption } from "../funcs/attributesUpdateOption.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AttributesUpdateOptionMutationVariables = {
  request:
    operations.PatchV2TargetIdentifierAttributesAttributeOptionsOptionRequest;
  options?: RequestOptions;
};

export type AttributesUpdateOptionMutationData =
  operations.PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody;

/**
 * Update a select option
 *
 * @remarks
 * Updates a select option on an attribute on either an object or a list.
 *
 * Required scopes: `object_configuration:read-write`.
 */
export function useAttributesUpdateOptionMutation(
  options?: MutationHookOptions<
    AttributesUpdateOptionMutationData,
    Error,
    AttributesUpdateOptionMutationVariables
  >,
): UseMutationResult<
  AttributesUpdateOptionMutationData,
  Error,
  AttributesUpdateOptionMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildAttributesUpdateOptionMutation(client, options),
    ...options,
  });
}

export function mutationKeyAttributesUpdateOption(): MutationKey {
  return ["attio-js", "Attributes", "updateOption"];
}

export function buildAttributesUpdateOptionMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AttributesUpdateOptionMutationVariables,
  ) => Promise<AttributesUpdateOptionMutationData>;
} {
  return {
    mutationKey: mutationKeyAttributesUpdateOption(),
    mutationFn: function attributesUpdateOptionMutationFn({
      request,
      options,
    }): Promise<AttributesUpdateOptionMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(attributesUpdateOption(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
