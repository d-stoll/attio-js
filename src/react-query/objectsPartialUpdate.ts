/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { objectsPartialUpdate } from "../funcs/objectsPartialUpdate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ObjectsPartialUpdateMutationVariables = {
  request: operations.PatchV2ObjectsObjectRequest;
  options?: RequestOptions;
};

export type ObjectsPartialUpdateMutationData =
  operations.PatchV2ObjectsObjectResponseBody;

/**
 * Update an object
 *
 * @remarks
 * Updates a single object. The object to be updated is identified by its `object_id`.
 *
 * Required scopes: `object_configuration:read-write`.
 */
export function useObjectsPartialUpdateMutation(
  options?: MutationHookOptions<
    ObjectsPartialUpdateMutationData,
    Error,
    ObjectsPartialUpdateMutationVariables
  >,
): UseMutationResult<
  ObjectsPartialUpdateMutationData,
  Error,
  ObjectsPartialUpdateMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildObjectsPartialUpdateMutation(client, options),
    ...options,
  });
}

export function mutationKeyObjectsPartialUpdate(): MutationKey {
  return ["attio-js", "Objects", "partialUpdate"];
}

export function buildObjectsPartialUpdateMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ObjectsPartialUpdateMutationVariables,
  ) => Promise<ObjectsPartialUpdateMutationData>;
} {
  return {
    mutationKey: mutationKeyObjectsPartialUpdate(),
    mutationFn: function objectsPartialUpdateMutationFn({
      request,
      options,
    }): Promise<ObjectsPartialUpdateMutationData> {
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
      return unwrapAsync(objectsPartialUpdate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
