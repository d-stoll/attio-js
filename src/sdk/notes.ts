/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notesCreate } from "../funcs/notesCreate.js";
import { notesDelete } from "../funcs/notesDelete.js";
import { notesGet } from "../funcs/notesGet.js";
import { notesList } from "../funcs/notesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Notes extends ClientSDK {
  /**
   * List notes
   *
   * @remarks
   * List notes for all records or for a specific record.
   *
   * Required scopes: `note:read`, `object_configuration:read`, `record_permission:read`.
   */
  async list(
    request: operations.GetV2NotesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV2NotesResponseBody> {
    return unwrapAsync(notesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a note
   *
   * @remarks
   * Creates a new note for a given record.
   *
   * Required scopes: `note:read-write`, `object_configuration:read`, `record_permission:read`.
   */
  async create(
    request: operations.PostV2NotesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV2NotesResponseBody> {
    return unwrapAsync(notesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a note
   *
   * @remarks
   * Get a single note by ID.
   *
   * Required scopes: `note:read`, `object_configuration:read`, `record_permission:read`.
   */
  async get(
    request: operations.GetV2NotesNoteIdRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV2NotesNoteIdResponseBody> {
    return unwrapAsync(notesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a note
   *
   * @remarks
   * Delete a single note by ID.
   *
   * Required scopes: `note:read-write`.
   */
  async delete(
    request: operations.DeleteV2NotesNoteIdRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteV2NotesNoteIdResponseBody> {
    return unwrapAsync(notesDelete(
      this,
      request,
      options,
    ));
  }
}
