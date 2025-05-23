/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { recordsAssert } from "../funcs/recordsAssert.js";
import { recordsCreate } from "../funcs/recordsCreate.js";
import { recordsDelete } from "../funcs/recordsDelete.js";
import { recordsGet } from "../funcs/recordsGet.js";
import { recordsListAttributeValues } from "../funcs/recordsListAttributeValues.js";
import { recordsListEntries } from "../funcs/recordsListEntries.js";
import { recordsPartialUpdate } from "../funcs/recordsPartialUpdate.js";
import { recordsQuery } from "../funcs/recordsQuery.js";
import { recordsUpdate } from "../funcs/recordsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  DeleteV2ObjectsObjectRecordsRecordIdRequest,
  DeleteV2ObjectsObjectRecordsRecordIdResponse,
} from "../models/operations/deletev2objectsobjectrecordsrecordid.js";
import {
  GetV2ObjectsObjectRecordsRecordIdRequest,
  GetV2ObjectsObjectRecordsRecordIdResponse,
} from "../models/operations/getv2objectsobjectrecordsrecordid.js";
import {
  GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequest,
  GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponse,
} from "../models/operations/getv2objectsobjectrecordsrecordidattributesattributevalues.js";
import {
  GetV2ObjectsObjectRecordsRecordIdEntriesRequest,
  GetV2ObjectsObjectRecordsRecordIdEntriesResponse,
} from "../models/operations/getv2objectsobjectrecordsrecordidentries.js";
import {
  PatchV2ObjectsObjectRecordsRecordIdRequest,
  PatchV2ObjectsObjectRecordsRecordIdResponse,
} from "../models/operations/patchv2objectsobjectrecordsrecordid.js";
import {
  PostV2ObjectsObjectRecordsRequest,
  PostV2ObjectsObjectRecordsResponse,
} from "../models/operations/postv2objectsobjectrecords.js";
import {
  PostV2ObjectsObjectRecordsQueryRequest,
  PostV2ObjectsObjectRecordsQueryResponse,
} from "../models/operations/postv2objectsobjectrecordsquery.js";
import {
  PutV2ObjectsObjectRecordsRequest,
  PutV2ObjectsObjectRecordsResponse,
} from "../models/operations/putv2objectsobjectrecords.js";
import {
  PutV2ObjectsObjectRecordsRecordIdRequest,
  PutV2ObjectsObjectRecordsRecordIdResponse,
} from "../models/operations/putv2objectsobjectrecordsrecordid.js";
import { unwrapAsync } from "../types/fp.js";

export class Records extends ClientSDK {
  /**
   * List records
   *
   * @remarks
   * Lists people, company or other records, with the option to filter and sort results.
   *
   * Required scopes: `record_permission:read`, `object_configuration:read`.
   */
  async query(
    request: PostV2ObjectsObjectRecordsQueryRequest,
    options?: RequestOptions,
  ): Promise<PostV2ObjectsObjectRecordsQueryResponse> {
    return unwrapAsync(recordsQuery(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a record
   *
   * @remarks
   * Creates a new person, company or other record. This endpoint will throw on conflicts of unique attributes. If you would prefer to update records on conflicts, please use the [Assert record endpoint](/reference/put_v2-objects-object-records) instead.
   *
   * Required scopes: `record_permission:read-write`, `object_configuration:read`.
   */
  async create(
    request: PostV2ObjectsObjectRecordsRequest,
    options?: RequestOptions,
  ): Promise<PostV2ObjectsObjectRecordsResponse> {
    return unwrapAsync(recordsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Assert a record
   *
   * @remarks
   * Use this endpoint to create or update people, companies and other records. A matching attribute is used to search for existing records. If a record is found with the same value for the matching attribute, that record will be updated. If no record with the same value for the matching attribute is found, a new record will be created instead. If you would like to avoid matching, please use the [Create record endpoint](/reference/post_v2-objects-object-records).
   *
   * If the matching attribute is a multiselect attribute, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values.
   *
   * Required scopes: `record_permission:read-write`, `object_configuration:read`.
   */
  async assert(
    request: PutV2ObjectsObjectRecordsRequest,
    options?: RequestOptions,
  ): Promise<PutV2ObjectsObjectRecordsResponse> {
    return unwrapAsync(recordsAssert(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a record
   *
   * @remarks
   * Gets a single person, company or other record by its `record_id`.
   *
   * Required scopes: `record_permission:read`, `object_configuration:read`.
   */
  async get(
    request: GetV2ObjectsObjectRecordsRecordIdRequest,
    options?: RequestOptions,
  ): Promise<GetV2ObjectsObjectRecordsRecordIdResponse> {
    return unwrapAsync(recordsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a record (append multiselect values)
   *
   * @remarks
   * Use this endpoint to update people, companies, and other records by `record_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.
   *
   * Required scopes: `record_permission:read-write`, `object_configuration:read`.
   */
  async partialUpdate(
    request: PatchV2ObjectsObjectRecordsRecordIdRequest,
    options?: RequestOptions,
  ): Promise<PatchV2ObjectsObjectRecordsRecordIdResponse> {
    return unwrapAsync(recordsPartialUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a record (overwrite multiselect values)
   *
   * @remarks
   * Use this endpoint to update people, companies, and other records by `record_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to append multiselect values without removing those that already exist.
   *
   * Required scopes: `record_permission:read-write`, `object_configuration:read`.
   */
  async update(
    request: PutV2ObjectsObjectRecordsRecordIdRequest,
    options?: RequestOptions,
  ): Promise<PutV2ObjectsObjectRecordsRecordIdResponse> {
    return unwrapAsync(recordsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a record
   *
   * @remarks
   * Deletes a single record (e.g. a company or person) by ID.
   *
   * Required scopes: `object_configuration:read`, `record_permission:read-write`.
   */
  async delete(
    request: DeleteV2ObjectsObjectRecordsRecordIdRequest,
    options?: RequestOptions,
  ): Promise<DeleteV2ObjectsObjectRecordsRecordIdResponse> {
    return unwrapAsync(recordsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List record attribute values
   *
   * @remarks
   * Gets all values for a given attribute on a record. If the attribute is historic, this endpoint has the ability to return all historic values using the `show_historic` query param.
   *
   * Required scopes: `record_permission:read`, `object_configuration:read`.
   */
  async listAttributeValues(
    request: GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequest,
    options?: RequestOptions,
  ): Promise<
    GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponse
  > {
    return unwrapAsync(recordsListAttributeValues(
      this,
      request,
      options,
    ));
  }

  /**
   * List record entries
   *
   * @remarks
   * List all entries, across all lists, for which this record is the parent.
   *
   * Required scopes: `record_permission:read`, `object_configuration:read`, `list_entry:read`.
   */
  async listEntries(
    request: GetV2ObjectsObjectRecordsRecordIdEntriesRequest,
    options?: RequestOptions,
  ): Promise<GetV2ObjectsObjectRecordsRecordIdEntriesResponse> {
    return unwrapAsync(recordsListEntries(
      this,
      request,
      options,
    ));
  }
}
