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
import { tasksList } from "../funcs/tasksList.js";
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

export type TasksListQueryData = operations.GetV2TasksResponseBody;

/**
 * List tasks
 *
 * @remarks
 * List all tasks. Results are sorted by creation date, from oldest to newest.
 *
 * Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.
 */
export function useTasksList(
  request: operations.GetV2TasksRequest,
  options?: QueryHookOptions<TasksListQueryData>,
): UseQueryResult<TasksListQueryData, Error> {
  const client = useAttioContext();
  return useQuery({
    ...buildTasksListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * List tasks
 *
 * @remarks
 * List all tasks. Results are sorted by creation date, from oldest to newest.
 *
 * Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.
 */
export function useTasksListSuspense(
  request: operations.GetV2TasksRequest,
  options?: SuspenseQueryHookOptions<TasksListQueryData>,
): UseSuspenseQueryResult<TasksListQueryData, Error> {
  const client = useAttioContext();
  return useSuspenseQuery({
    ...buildTasksListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchTasksList(
  queryClient: QueryClient,
  client$: AttioCore,
  request: operations.GetV2TasksRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildTasksListQuery(
      client$,
      request,
    ),
  });
}

export function setTasksListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      limit?: number | undefined;
      offset?: number | undefined;
      sort?: operations.Sort | undefined;
      linkedObject?: string | undefined;
      linkedRecordId?: string | undefined;
      assignee?: string | null | undefined;
      isCompleted?: boolean | undefined;
    },
  ],
  data: TasksListQueryData,
): TasksListQueryData | undefined {
  const key = queryKeyTasksList(...queryKeyBase);

  return client.setQueryData<TasksListQueryData>(key, data);
}

export function invalidateTasksList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      limit?: number | undefined;
      offset?: number | undefined;
      sort?: operations.Sort | undefined;
      linkedObject?: string | undefined;
      linkedRecordId?: string | undefined;
      assignee?: string | null | undefined;
      isCompleted?: boolean | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Tasks", "list", ...queryKeyBase],
  });
}

export function invalidateAllTasksList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["attio-js", "Tasks", "list"],
  });
}

export function buildTasksListQuery(
  client$: AttioCore,
  request: operations.GetV2TasksRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<TasksListQueryData>;
} {
  return {
    queryKey: queryKeyTasksList({
      limit: request.limit,
      offset: request.offset,
      sort: request.sort,
      linkedObject: request.linkedObject,
      linkedRecordId: request.linkedRecordId,
      assignee: request.assignee,
      isCompleted: request.isCompleted,
    }),
    queryFn: async function tasksListQueryFn(ctx): Promise<TasksListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(tasksList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyTasksList(
  parameters: {
    limit?: number | undefined;
    offset?: number | undefined;
    sort?: operations.Sort | undefined;
    linkedObject?: string | undefined;
    linkedRecordId?: string | undefined;
    assignee?: string | null | undefined;
    isCompleted?: boolean | undefined;
  },
): QueryKey {
  return ["attio-js", "Tasks", "list", parameters];
}
