/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AttioCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Create an entry (add record to list)
 *
 * @remarks
 * Adds a record to a list as a new list entry. This endpoint will throw on conflicts of unique attributes. Multiple list entries are allowed for the same parent record
 *
 * Required scopes: `list_entry:read-write`, `list_configuration:read`.
 */
export function entriesPostV2ListsListEntries(
  client: AttioCore,
  request: operations.PostV2ListsListEntriesRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.PostV2ListsListEntriesResponseBody,
    | errors.PostV2ListsListEntriesResponseBody
    | errors.PostV2ListsListEntriesEntriesResponseBody
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: AttioCore,
  request: operations.PostV2ListsListEntriesRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.PostV2ListsListEntriesResponseBody,
      | errors.PostV2ListsListEntriesResponseBody
      | errors.PostV2ListsListEntriesEntriesResponseBody
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.PostV2ListsListEntriesRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    list: encodeSimple("list", payload.list, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v2/lists/{list}/entries")(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.oauth2);
  const securityInput = secConfig == null ? {} : { oauth2: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "post_/v2/lists/{list}/entries",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.oauth2,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "404", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.PostV2ListsListEntriesResponseBody,
    | errors.PostV2ListsListEntriesResponseBody
    | errors.PostV2ListsListEntriesEntriesResponseBody
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.PostV2ListsListEntriesResponseBody$inboundSchema),
    M.jsonErr(400, errors.PostV2ListsListEntriesResponseBody$inboundSchema),
    M.jsonErr(
      404,
      errors.PostV2ListsListEntriesEntriesResponseBody$inboundSchema,
    ),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
