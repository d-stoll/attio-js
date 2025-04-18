/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { recordsQuery } from "../funcs/recordsQuery.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type RecordsQueryMutationVariables = {
  request: operations.PostV2ObjectsObjectRecordsQueryRequest;
  options?: RequestOptions;
};

export type RecordsQueryMutationData =
  operations.PostV2ObjectsObjectRecordsQueryResponseBody;

/**
 * List records
 *
 * @remarks
 * Lists people, company or other records, with the option to filter and sort results.
 *
 * Required scopes: `record_permission:read`, `object_configuration:read`.
 */
export function useRecordsQueryMutation(
  options?: MutationHookOptions<
    RecordsQueryMutationData,
    Error,
    RecordsQueryMutationVariables
  >,
): UseMutationResult<
  RecordsQueryMutationData,
  Error,
  RecordsQueryMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildRecordsQueryMutation(client, options),
    ...options,
  });
}

export function mutationKeyRecordsQuery(): MutationKey {
  return ["attio-js", "Records", "query"];
}

export function buildRecordsQueryMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: RecordsQueryMutationVariables,
  ) => Promise<RecordsQueryMutationData>;
} {
  return {
    mutationKey: mutationKeyRecordsQuery(),
    mutationFn: function recordsQueryMutationFn({
      request,
      options,
    }): Promise<RecordsQueryMutationData> {
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
      return unwrapAsync(recordsQuery(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
