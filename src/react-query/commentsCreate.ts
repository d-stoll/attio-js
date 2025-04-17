/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { commentsCreate } from "../funcs/commentsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type CommentsCreateMutationVariables = {
  request: operations.PostV2CommentsRequestBody;
  options?: RequestOptions;
};

export type CommentsCreateMutationData = operations.PostV2CommentsResponseBody;

/**
 * Create a comment
 *
 * @remarks
 * Creates a new comment related to an existing thread, record or entry.
 *
 * To create comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.
 *
 * To create comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.
 *
 * Required scopes: `comment:read-write`.
 */
export function useCommentsCreateMutation(
  options?: MutationHookOptions<
    CommentsCreateMutationData,
    Error,
    CommentsCreateMutationVariables
  >,
): UseMutationResult<
  CommentsCreateMutationData,
  Error,
  CommentsCreateMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildCommentsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyCommentsCreate(): MutationKey {
  return ["attio-js", "Comments", "create"];
}

export function buildCommentsCreateMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: CommentsCreateMutationVariables,
  ) => Promise<CommentsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyCommentsCreate(),
    mutationFn: function commentsCreateMutationFn({
      request,
      options,
    }): Promise<CommentsCreateMutationData> {
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
      return unwrapAsync(commentsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
