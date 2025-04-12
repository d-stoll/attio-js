/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notesDeleteV2NotesNoteId } from "../funcs/notesDeleteV2NotesNoteId.js";
import { notesGetV2Notes } from "../funcs/notesGetV2Notes.js";
import { notesGetV2NotesNoteId } from "../funcs/notesGetV2NotesNoteId.js";
import { notesPostV2Notes } from "../funcs/notesPostV2Notes.js";
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
  async getV2Notes(
    request: operations.GetV2NotesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV2NotesResponseBody> {
    return unwrapAsync(notesGetV2Notes(
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
  async postV2Notes(
    request: operations.PostV2NotesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV2NotesResponseBody> {
    return unwrapAsync(notesPostV2Notes(
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
  async getV2NotesNoteId(
    request: operations.GetV2NotesNoteIdRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV2NotesNoteIdResponseBody> {
    return unwrapAsync(notesGetV2NotesNoteId(
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
  async deleteV2NotesNoteId(
    request: operations.DeleteV2NotesNoteIdRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteV2NotesNoteIdResponseBody> {
    return unwrapAsync(notesDeleteV2NotesNoteId(
      this,
      request,
      options,
    ));
  }
}
