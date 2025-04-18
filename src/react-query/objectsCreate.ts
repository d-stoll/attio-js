/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { objectsCreate } from "../funcs/objectsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ObjectsCreateMutationVariables = {
  request: operations.PostV2ObjectsRequestBody;
  options?: RequestOptions;
};

export type ObjectsCreateMutationData = operations.PostV2ObjectsResponseBody;

/**
 * Create an object
 *
 * @remarks
 * Creates a new custom object in your workspace.
 *
 * Required scopes: `object_configuration:read-write`.
 */
export function useObjectsCreateMutation(
  options?: MutationHookOptions<
    ObjectsCreateMutationData,
    Error,
    ObjectsCreateMutationVariables
  >,
): UseMutationResult<
  ObjectsCreateMutationData,
  Error,
  ObjectsCreateMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildObjectsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyObjectsCreate(): MutationKey {
  return ["attio-js", "Objects", "create"];
}

export function buildObjectsCreateMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ObjectsCreateMutationVariables,
  ) => Promise<ObjectsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyObjectsCreate(),
    mutationFn: function objectsCreateMutationFn({
      request,
      options,
    }): Promise<ObjectsCreateMutationData> {
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
      return unwrapAsync(objectsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
