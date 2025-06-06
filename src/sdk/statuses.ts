/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { attributesStatusesCreate } from "../funcs/attributesStatusesCreate.js";
import { attributesStatusesUpdate } from "../funcs/attributesStatusesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  PatchV2TargetIdentifierAttributesAttributeStatusesStatusRequest,
  PatchV2TargetIdentifierAttributesAttributeStatusesStatusResponse,
} from "../models/operations/patchv2targetidentifierattributesattributestatusesstatus.js";
import {
  PostV2TargetIdentifierAttributesAttributeStatusesRequest,
  PostV2TargetIdentifierAttributesAttributeStatusesResponse,
} from "../models/operations/postv2targetidentifierattributesattributestatuses.js";
import { unwrapAsync } from "../types/fp.js";

export class Statuses extends ClientSDK {
  /**
   * Create a status
   *
   * @remarks
   * Add a new status to a status attribute on either an object or a list.
   *
   * Required scopes: `object_configuration:read-write`.
   */
  async create(
    request: PostV2TargetIdentifierAttributesAttributeStatusesRequest,
    options?: RequestOptions,
  ): Promise<PostV2TargetIdentifierAttributesAttributeStatusesResponse> {
    return unwrapAsync(attributesStatusesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a status
   *
   * @remarks
   * Update a status on an status attribute on either an object or a list.
   *
   * Required scopes: `object_configuration:read-write`.
   */
  async update(
    request: PatchV2TargetIdentifierAttributesAttributeStatusesStatusRequest,
    options?: RequestOptions,
  ): Promise<PatchV2TargetIdentifierAttributesAttributeStatusesStatusResponse> {
    return unwrapAsync(attributesStatusesUpdate(
      this,
      request,
      options,
    ));
  }
}
