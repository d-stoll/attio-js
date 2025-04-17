/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { webhooksList } from "../funcs/webhooksList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type WebhooksListQueryData = operations.GetV2WebhooksResponseBody;

/**
 * List webhooks
 *
 * @remarks
 * Get all of the webhooks in your workspace.
 *
 * Required scopes: `webhook:read`.
 */
export function useWebhooksList(
  request: operations.GetV2WebhooksRequest,
  options?: QueryHookOptions<WebhooksListQueryData>,
): UseQueryResult<WebhooksListQueryData, Error> {
  const client = useAttioContext();
  return useQuery({
    ...buildWebhooksListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * List webhooks
 *
 * @remarks
 * Get all of the webhooks in your workspace.
 *
 * Required scopes: `webhook:read`.
 */
export function useWebhooksListSuspense(
  request: operations.GetV2WebhooksRequest,
  options?: SuspenseQueryHookOptions<WebhooksListQueryData>,
): UseSuspenseQueryResult<WebhooksListQueryData, Error> {
  const client = useAttioContext();
  return useSuspenseQuery({
    ...buildWebhooksListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchWebhooksList(
  queryClient: QueryClient,
  client$: AttioCore,
  request: operations.GetV2WebhooksRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildWebhooksListQuery(
      client$,
      request,
    ),
  });
}

export function setWebhooksListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: { limit?: number | undefined; offset?: number | undefined },
  ],
  data: WebhooksListQueryData,
): WebhooksListQueryData | undefined {
  const key = queryKeyWebhooksList(...queryKeyBase);

  return client.setQueryData<WebhooksListQueryData>(key, data);
}

export function invalidateWebhooksList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: { limit?: number | undefined; offset?: number | undefined }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Webhooks", "list", ...queryKeyBase],
  });
}

export function invalidateAllWebhooksList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Webhooks", "list"],
  });
}

export function buildWebhooksListQuery(
  client$: AttioCore,
  request: operations.GetV2WebhooksRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<WebhooksListQueryData>;
} {
  return {
    queryKey: queryKeyWebhooksList({
      limit: request.limit,
      offset: request.offset,
    }),
    queryFn: async function webhooksListQueryFn(
      ctx,
    ): Promise<WebhooksListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(webhooksList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyWebhooksList(
  parameters: { limit?: number | undefined; offset?: number | undefined },
): QueryKey {
  return ["attio-js", "Webhooks", "list", parameters];
}
