/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { attributesCreate } from "../funcs/attributesCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type AttributesCreateMutationVariables = {
  request: operations.PostV2TargetIdentifierAttributesRequest;
  options?: RequestOptions;
};

export type AttributesCreateMutationData =
  operations.PostV2TargetIdentifierAttributesResponseBody;

/**
 * Create an attribute
 *
 * @remarks
 * Creates a new attribute on either an object or a list.
 *
 * To create an attribute on an object, you must also have the `object_configuration:read-write` scope.
 *
 * To create an attribute on a list, you must also have the `list_configuration:read-write` scope.
 */
export function useAttributesCreateMutation(
  options?: MutationHookOptions<
    AttributesCreateMutationData,
    Error,
    AttributesCreateMutationVariables
  >,
): UseMutationResult<
  AttributesCreateMutationData,
  Error,
  AttributesCreateMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildAttributesCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyAttributesCreate(): MutationKey {
  return ["attio-js", "Attributes", "create"];
}

export function buildAttributesCreateMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: AttributesCreateMutationVariables,
  ) => Promise<AttributesCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyAttributesCreate(),
    mutationFn: function attributesCreateMutationFn({
      request,
      options,
    }): Promise<AttributesCreateMutationData> {
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
      return unwrapAsync(attributesCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
