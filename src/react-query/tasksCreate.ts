/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AttioCore } from "../core.js";
import { tasksCreate } from "../funcs/tasksCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useAttioContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type TasksCreateMutationVariables = {
  request: operations.PostV2TasksRequestBody;
  options?: RequestOptions;
};

export type TasksCreateMutationData = operations.PostV2TasksResponseBody;

/**
 * Create a task
 *
 * @remarks
 * Creates a new task.
 *
 * At present, tasks can only be created from plaintext without record reference formatting.
 *
 * Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.
 */
export function useTasksCreateMutation(
  options?: MutationHookOptions<
    TasksCreateMutationData,
    Error,
    TasksCreateMutationVariables
  >,
): UseMutationResult<
  TasksCreateMutationData,
  Error,
  TasksCreateMutationVariables
> {
  const client = useAttioContext();
  return useMutation({
    ...buildTasksCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyTasksCreate(): MutationKey {
  return ["attio-js", "Tasks", "create"];
}

export function buildTasksCreateMutation(
  client$: AttioCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: TasksCreateMutationVariables,
  ) => Promise<TasksCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyTasksCreate(),
    mutationFn: function tasksCreateMutationFn({
      request,
      options,
    }): Promise<TasksCreateMutationData> {
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
      return unwrapAsync(tasksCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
