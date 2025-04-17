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
import { attributesGet } from "../funcs/attributesGet.js";
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

export type AttributesGetQueryData =
  operations.GetV2TargetIdentifierAttributesAttributeResponseBody;

/**
 * Get an attribute
 *
 * @remarks
 * Gets information about a single attribute on either an object or a list.
 *
 * Required scopes: `object_configuration:read`.
 */
export function useAttributesGet(
  request: operations.GetV2TargetIdentifierAttributesAttributeRequest,
  options?: QueryHookOptions<AttributesGetQueryData>,
): UseQueryResult<AttributesGetQueryData, Error> {
  const client = useAttioContext();
  return useQuery({
    ...buildAttributesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an attribute
 *
 * @remarks
 * Gets information about a single attribute on either an object or a list.
 *
 * Required scopes: `object_configuration:read`.
 */
export function useAttributesGetSuspense(
  request: operations.GetV2TargetIdentifierAttributesAttributeRequest,
  options?: SuspenseQueryHookOptions<AttributesGetQueryData>,
): UseSuspenseQueryResult<AttributesGetQueryData, Error> {
  const client = useAttioContext();
  return useSuspenseQuery({
    ...buildAttributesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchAttributesGet(
  queryClient: QueryClient,
  client$: AttioCore,
  request: operations.GetV2TargetIdentifierAttributesAttributeRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAttributesGetQuery(
      client$,
      request,
    ),
  });
}

export function setAttributesGetData(
  client: QueryClient,
  queryKeyBase: [
    target: operations.GetV2TargetIdentifierAttributesAttributePathParamTarget,
    identifier: string,
    attribute: string,
  ],
  data: AttributesGetQueryData,
): AttributesGetQueryData | undefined {
  const key = queryKeyAttributesGet(...queryKeyBase);

  return client.setQueryData<AttributesGetQueryData>(key, data);
}

export function invalidateAttributesGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      target:
        operations.GetV2TargetIdentifierAttributesAttributePathParamTarget,
      identifier: string,
      attribute: string,
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Attributes", "get", ...queryKeyBase],
  });
}

export function invalidateAllAttributesGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Attributes", "get"],
  });
}

export function buildAttributesGetQuery(
  client$: AttioCore,
  request: operations.GetV2TargetIdentifierAttributesAttributeRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<AttributesGetQueryData>;
} {
  return {
    queryKey: queryKeyAttributesGet(
      request.target,
      request.identifier,
      request.attribute,
    ),
    queryFn: async function attributesGetQueryFn(
      ctx,
    ): Promise<AttributesGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(attributesGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAttributesGet(
  target: operations.GetV2TargetIdentifierAttributesAttributePathParamTarget,
  identifier: string,
  attribute: string,
): QueryKey {
  return ["attio-js", "Attributes", "get", target, identifier, attribute];
}
