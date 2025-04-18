/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { webhooksCreate } from "../funcs/webhooksCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type WebhooksCreateMutationVariables = {
  request: operations.PostV2WebhooksRequestBody;
  options?: RequestOptions;
};

export type WebhooksCreateMutationData = operations.PostV2WebhooksResponseBody;

/**
 * Create a webhook
 *
 * @remarks
 * Create a webhook and associated subscriptions.
 *
 * Required scopes: `webhook:read-write`.
 */
export function useWebhooksCreateMutation(
  options?: MutationHookOptions<
    WebhooksCreateMutationData,
    Error,
    WebhooksCreateMutationVariables
  >,
): UseMutationResult<
  WebhooksCreateMutationData,
  Error,
  WebhooksCreateMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildWebhooksCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyWebhooksCreate(): MutationKey {
  return ["attio-js", "Webhooks", "create"];
}

export function buildWebhooksCreateMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: WebhooksCreateMutationVariables,
  ) => Promise<WebhooksCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyWebhooksCreate(),
    mutationFn: function webhooksCreateMutationFn({
      request,
      options,
    }): Promise<WebhooksCreateMutationData> {
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
      return unwrapAsync(webhooksCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
