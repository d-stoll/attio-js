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
import { tasksGet } from "../funcs/tasksGet.js";
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

export type TasksGetQueryData = operations.GetV2TasksTaskIdResponseBody;

/**
 * Get a task
 *
 * @remarks
 * Get a single task by ID.
 *
 * Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.
 */
export function useTasksGet(
  request: operations.GetV2TasksTaskIdRequest,
  options?: QueryHookOptions<TasksGetQueryData>,
): UseQueryResult<TasksGetQueryData, Error> {
  const client = useAttioContext();
  return useQuery({
    ...buildTasksGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a task
 *
 * @remarks
 * Get a single task by ID.
 *
 * Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.
 */
export function useTasksGetSuspense(
  request: operations.GetV2TasksTaskIdRequest,
  options?: SuspenseQueryHookOptions<TasksGetQueryData>,
): UseSuspenseQueryResult<TasksGetQueryData, Error> {
  const client = useAttioContext();
  return useSuspenseQuery({
    ...buildTasksGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchTasksGet(
  queryClient: QueryClient,
  client$: AttioCore,
  request: operations.GetV2TasksTaskIdRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildTasksGetQuery(
      client$,
      request,
    ),
  });
}

export function setTasksGetData(
  client: QueryClient,
  queryKeyBase: [taskId: string],
  data: TasksGetQueryData,
): TasksGetQueryData | undefined {
  const key = queryKeyTasksGet(...queryKeyBase);

  return client.setQueryData<TasksGetQueryData>(key, data);
}

export function invalidateTasksGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[taskId: string]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Tasks", "get", ...queryKeyBase],
  });
}

export function invalidateAllTasksGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Tasks", "get"],
  });
}

export function buildTasksGetQuery(
  client$: AttioCore,
  request: operations.GetV2TasksTaskIdRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<TasksGetQueryData>;
} {
  return {
    queryKey: queryKeyTasksGet(request.taskId),
    queryFn: async function tasksGetQueryFn(ctx): Promise<TasksGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(tasksGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyTasksGet(taskId: string): QueryKey {
  return ["attio-js", "Tasks", "get", taskId];
}
