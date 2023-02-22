/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export type ServiceBindingBindingType = "apn" | "gcm" | "fcm";

/**
 * Options to pass to each
 */
export interface BindingListInstanceEachOptions {
  /** The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info. */
  bindingType?: Array<ServiceBindingBindingType>;
  /** The identity of a [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) this binding belongs to. See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more details. */
  identity?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface BindingListInstanceOptions {
  /** The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info. */
  bindingType?: Array<ServiceBindingBindingType>;
  /** The identity of a [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) this binding belongs to. See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more details. */
  identity?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface BindingListInstancePageOptions {
  /** The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info. */
  bindingType?: Array<ServiceBindingBindingType>;
  /** The identity of a [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) this binding belongs to. See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more details. */
  identity?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface BindingContext {
  /**
   * Remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BindingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BindingContextSolution {
  chatServiceSid: string;
  sid: string;
}

export class BindingContextImpl implements BindingContext {
  protected _solution: BindingContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, chatServiceSid: string, sid: string) {
    if (!isValidPathParam(chatServiceSid)) {
      throw new Error("Parameter 'chatServiceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { chatServiceSid, sid };
    this._uri = `/Services/${chatServiceSid}/Bindings/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BindingInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface BindingPayload extends TwilioResponsePayload {
  bindings: BindingResource[];
}

interface BindingResource {
  sid: string;
  account_sid: string;
  chat_service_sid: string;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  binding_type: ServiceBindingBindingType;
  message_types: Array<string>;
  url: string;
}

export class BindingInstance {
  protected _solution: BindingContextSolution;
  protected _context?: BindingContext;

  constructor(
    protected _version: V1,
    payload: BindingResource,
    chatServiceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.credentialSid = payload.credential_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.endpoint = payload.endpoint;
    this.identity = payload.identity;
    this.bindingType = payload.binding_type;
    this.messageTypes = payload.message_types;
    this.url = payload.url;

    this._solution = { chatServiceSid, sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this binding.
   */
  accountSid: string;
  /**
   * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Binding resource is associated with.
   */
  chatServiceSid: string;
  /**
   * The SID of the [Credential](https://www.twilio.com/docs/conversations/api/credential-resource) for the binding. See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
   */
  credentialSid: string;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated: Date;
  /**
   * The unique endpoint identifier for the Binding. The format of this value depends on the `binding_type`.
   */
  endpoint: string;
  /**
   * The application-defined string that uniquely identifies the [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) within the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource). See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more info.
   */
  identity: string;
  bindingType: ServiceBindingBindingType;
  /**
   * The [Conversation message types](https://www.twilio.com/docs/chat/push-notification-configuration#push-types) the binding is subscribed to.
   */
  messageTypes: Array<string>;
  /**
   * An absolute API resource URL for this binding.
   */
  url: string;

  private get _proxy(): BindingContext {
    this._context =
      this._context ||
      new BindingContextImpl(
        this._version,
        this._solution.chatServiceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BindingInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BindingInstance) => any
  ): Promise<BindingInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      chatServiceSid: this.chatServiceSid,
      credentialSid: this.credentialSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      endpoint: this.endpoint,
      identity: this.identity,
      bindingType: this.bindingType,
      messageTypes: this.messageTypes,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BindingSolution {
  chatServiceSid: string;
}

export interface BindingListInstance {
  _version: V1;
  _solution: BindingSolution;
  _uri: string;

  (sid: string): BindingContext;
  get(sid: string): BindingContext;

  /**
   * Streams BindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: BindingListInstanceEachOptions,
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BindingInstance[]) => any
  ): Promise<BindingInstance[]>;
  list(
    params: BindingListInstanceOptions,
    callback?: (error: Error | null, items: BindingInstance[]) => any
  ): Promise<BindingInstance[]>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;
  page(
    params: BindingListInstancePageOptions,
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BindingListInstance(
  version: V1,
  chatServiceSid: string
): BindingListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as BindingListInstance;

  instance.get = function get(sid): BindingContext {
    return new BindingContextImpl(version, chatServiceSid, sid);
  };

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = `/Services/${chatServiceSid}/Bindings`;

  instance.page = function page(
    params?:
      | BindingListInstancePageOptions
      | ((error: Error | null, items: BindingPage) => any),
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["bindingType"] !== undefined)
      data["BindingType"] = serialize.map(
        params["bindingType"],
        (e: ServiceBindingBindingType) => e
      );
    if (params["identity"] !== undefined)
      data["Identity"] = serialize.map(params["identity"], (e: string) => e);
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BindingPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BindingPage) => any
  ): Promise<BindingPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new BindingPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class BindingPage extends Page<
  V1,
  BindingPayload,
  BindingResource,
  BindingInstance
> {
  /**
   * Initialize the BindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: BindingSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BindingResource): BindingInstance {
    return new BindingInstance(
      this._version,
      payload,
      this._solution.chatServiceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
