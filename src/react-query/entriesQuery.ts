/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { entriesQuery } from "../funcs/entriesQuery.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EntriesQueryMutationVariables = {
  request: operations.PostV2ListsListEntriesQueryRequest;
  options?: RequestOptions;
};

export type EntriesQueryMutationData =
  operations.PostV2ListsListEntriesQueryResponseBody;

/**
 * List entries
 *
 * @remarks
 * Lists entries in a given list, with the option to filter and sort results.
 *
 * Required scopes: `list_entry:read`, `list_configuration:read`.
 */
export function useEntriesQueryMutation(
  options?: MutationHookOptions<
    EntriesQueryMutationData,
    Error,
    EntriesQueryMutationVariables
  >,
): UseMutationResult<
  EntriesQueryMutationData,
  Error,
  EntriesQueryMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildEntriesQueryMutation(client, options),
    ...options,
  });
}

export function mutationKeyEntriesQuery(): MutationKey {
  return ["attio-js", "Entries", "query"];
}

export function buildEntriesQueryMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EntriesQueryMutationVariables,
  ) => Promise<EntriesQueryMutationData>;
} {
  return {
    mutationKey: mutationKeyEntriesQuery(),
    mutationFn: function entriesQueryMutationFn({
      request,
      options,
    }): Promise<EntriesQueryMutationData> {
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
      return unwrapAsync(entriesQuery(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
