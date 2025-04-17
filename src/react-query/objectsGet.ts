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
import { objectsGet } from "../funcs/objectsGet.js";
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

export type ObjectsGetQueryData = operations.GetV2ObjectsObjectResponseBody;

/**
 * Get an object
 *
 * @remarks
 * Gets a single object by its `object_id` or slug.
 *
 * Required scopes: `object_configuration:read`.
 */
export function useObjectsGet(
  request: operations.GetV2ObjectsObjectRequest,
  options?: QueryHookOptions<ObjectsGetQueryData>,
): UseQueryResult<ObjectsGetQueryData, Error> {
  const client = useAttioContext();
  return useQuery({
    ...buildObjectsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an object
 *
 * @remarks
 * Gets a single object by its `object_id` or slug.
 *
 * Required scopes: `object_configuration:read`.
 */
export function useObjectsGetSuspense(
  request: operations.GetV2ObjectsObjectRequest,
  options?: SuspenseQueryHookOptions<ObjectsGetQueryData>,
): UseSuspenseQueryResult<ObjectsGetQueryData, Error> {
  const client = useAttioContext();
  return useSuspenseQuery({
    ...buildObjectsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchObjectsGet(
  queryClient: QueryClient,
  client$: AttioCore,
  request: operations.GetV2ObjectsObjectRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildObjectsGetQuery(
      client$,
      request,
    ),
  });
}

export function setObjectsGetData(
  client: QueryClient,
  queryKeyBase: [object: string],
  data: ObjectsGetQueryData,
): ObjectsGetQueryData | undefined {
  const key = queryKeyObjectsGet(...queryKeyBase);

  return client.setQueryData<ObjectsGetQueryData>(key, data);
}

export function invalidateObjectsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[object: string]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Objects", "get", ...queryKeyBase],
  });
}

export function invalidateAllObjectsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Objects", "get"],
  });
}

export function buildObjectsGetQuery(
  client$: AttioCore,
  request: operations.GetV2ObjectsObjectRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<ObjectsGetQueryData>;
} {
  return {
    queryKey: queryKeyObjectsGet(request.object),
    queryFn: async function objectsGetQueryFn(
      ctx,
    ): Promise<ObjectsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(objectsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyObjectsGet(object: string): QueryKey {
  return ["attio-js", "Objects", "get", object];
}
