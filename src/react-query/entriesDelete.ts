/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { entriesDelete } from "../funcs/entriesDelete.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EntriesDeleteMutationVariables = {
  request: operations.DeleteV2ListsListEntriesEntryIdRequest;
  options?: RequestOptions;
};

export type EntriesDeleteMutationData =
  operations.DeleteV2ListsListEntriesEntryIdResponseBody;

/**
 * Delete a list entry
 *
 * @remarks
 * Deletes a single list entry by its `entry_id`.
 *
 * Required scopes: `list_entry:read-write`, `list_configuration:read`.
 */
export function useEntriesDeleteMutation(
  options?: MutationHookOptions<
    EntriesDeleteMutationData,
    Error,
    EntriesDeleteMutationVariables
  >,
): UseMutationResult<
  EntriesDeleteMutationData,
  Error,
  EntriesDeleteMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildEntriesDeleteMutation(client, options),
    ...options,
  });
}

export function mutationKeyEntriesDelete(): MutationKey {
  return ["attio-js", "Entries", "delete"];
}

export function buildEntriesDeleteMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EntriesDeleteMutationVariables,
  ) => Promise<EntriesDeleteMutationData>;
} {
  return {
    mutationKey: mutationKeyEntriesDelete(),
    mutationFn: function entriesDeleteMutationFn({
      request,
      options,
    }): Promise<EntriesDeleteMutationData> {
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
      return unwrapAsync(entriesDelete(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
