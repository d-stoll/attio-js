/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metaIdentify } from "../funcs/metaIdentify.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Meta extends ClientSDK {
  /**
   * Identify
   *
   * @remarks
   * Identify the current access token, the workspace it is linked to, and any permissions it has.
   */
  async identify(
    options?: RequestOptions,
  ): Promise<operations.GetV2SelfResponseBody> {
    return unwrapAsync(metaIdentify(
      this,
      options,
    ));
  }
}
