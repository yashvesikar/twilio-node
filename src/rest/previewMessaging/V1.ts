/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Bulk Messaging and Broadcast
 * Bulk Sending is a public Twilio REST API for 1:Many Message creation up to 100 recipients. Broadcast is a public Twilio REST API for 1:Many Message creation up to 10,000 recipients via file upload.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import PreviewMessagingBase from "../PreviewMessagingBase";
import Version from "../../base/Version";
import { BroadcastListInstance } from "./v1/broadcast";
import { MessageListInstance } from "./v1/message";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of PreviewMessaging
   *
   * @param domain - The Twilio (Twilio.PreviewMessaging) domain
   */
  constructor(domain: PreviewMessagingBase) {
    super(domain, "v1");
  }

  /** broadcasts - { Twilio.PreviewMessaging.V1.BroadcastListInstance } resource */
  protected _broadcasts?: BroadcastListInstance;
  /** messages - { Twilio.PreviewMessaging.V1.MessageListInstance } resource */
  protected _messages?: MessageListInstance;

  /** Getter for broadcasts resource */
  get broadcasts(): BroadcastListInstance {
    this._broadcasts = this._broadcasts || BroadcastListInstance(this);
    return this._broadcasts;
  }

  /** Getter for messages resource */
  get messages(): MessageListInstance {
    this._messages = this._messages || MessageListInstance(this);
    return this._messages;
  }
}