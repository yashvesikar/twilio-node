/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { ExecutionListInstance } from "./flow/execution";
import { FlowRevisionListInstance } from "./flow/flowRevision";
import { FlowTestUserListInstance } from "./flow/flowTestUser";

export type FlowStatus = "draft" | "published";

/**
 * Options to pass to update a FlowInstance
 */
export interface FlowContextUpdateOptions {
  /**  */
  status: FlowStatus;
  /** The string that you assigned to describe the Flow. */
  friendlyName?: string;
  /** JSON representation of flow definition. */
  definition?: any;
  /** Description of change made in the revision. */
  commitMessage?: string;
}

/**
 * Options to pass to create a FlowInstance
 */
export interface FlowListInstanceCreateOptions {
  /** The string that you assigned to describe the Flow. */
  friendlyName: string;
  /**  */
  status: FlowStatus;
  /** JSON representation of flow definition. */
  definition: any;
  /** Description of change made in the revision. */
  commitMessage?: string;
}
/**
 * Options to pass to each
 */
export interface FlowListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: FlowInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface FlowListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FlowListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FlowContext {
  executions: ExecutionListInstance;
  revisions: FlowRevisionListInstance;
  testUsers: FlowTestUserListInstance;

  /**
   * Remove a FlowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FlowInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance>;

  /**
   * Update a FlowInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FlowInstance
   */
  update(
    params: FlowContextUpdateOptions,
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowContextSolution {
  sid: string;
}

export class FlowContextImpl implements FlowContext {
  protected _solution: FlowContextSolution;
  protected _uri: string;

  protected _executions?: ExecutionListInstance;
  protected _revisions?: FlowRevisionListInstance;
  protected _testUsers?: FlowTestUserListInstance;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Flows/${sid}`;
  }

  get executions(): ExecutionListInstance {
    this._executions =
      this._executions ||
      ExecutionListInstance(this._version, this._solution.sid);
    return this._executions;
  }

  get revisions(): FlowRevisionListInstance {
    this._revisions =
      this._revisions ||
      FlowRevisionListInstance(this._version, this._solution.sid);
    return this._revisions;
  }

  get testUsers(): FlowTestUserListInstance {
    this._testUsers =
      this._testUsers ||
      FlowTestUserListInstance(this._version, this._solution.sid);
    return this._testUsers;
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
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FlowInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: FlowContextUpdateOptions,
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["definition"] !== undefined)
      data["Definition"] = serialize.object(params["definition"]);
    if (params["commitMessage"] !== undefined)
      data["CommitMessage"] = params["commitMessage"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FlowInstance(operationVersion, payload, instance._solution.sid)
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

interface FlowPayload extends TwilioResponsePayload {
  flows: FlowResource[];
}

interface FlowResource {
  sid: string;
  account_sid: string;
  friendly_name: string;
  definition: any;
  status: FlowStatus;
  revision: number;
  commit_message: string;
  valid: boolean;
  errors: Array<any>;
  warnings: Array<any>;
  date_created: Date;
  date_updated: Date;
  webhook_url: string;
  url: string;
  links: Record<string, string>;
}

export class FlowInstance {
  protected _solution: FlowContextSolution;
  protected _context?: FlowContext;

  constructor(protected _version: V2, payload: FlowResource, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.definition = payload.definition;
    this.status = payload.status;
    this.revision = deserialize.integer(payload.revision);
    this.commitMessage = payload.commit_message;
    this.valid = payload.valid;
    this.errors = payload.errors;
    this.warnings = payload.warnings;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.webhookUrl = payload.webhook_url;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Flow resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
   */
  accountSid: string;
  /**
   * The string that you assigned to describe the Flow.
   */
  friendlyName: string;
  /**
   * JSON representation of flow definition.
   */
  definition: any;
  status: FlowStatus;
  /**
   * The latest revision number of the Flow\'s definition.
   */
  revision: number;
  /**
   * Description of change made in the revision.
   */
  commitMessage: string;
  /**
   * Boolean if the flow definition is valid.
   */
  valid: boolean;
  /**
   * List of error in the flow definition.
   */
  errors: Array<any>;
  /**
   * List of warnings in the flow definition.
   */
  warnings: Array<any>;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  webhookUrl: string;
  /**
   * The absolute URL of the resource.
   */
  url: string;
  /**
   * The URLs of the Flow\'s nested resources.
   */
  links: Record<string, string>;

  private get _proxy(): FlowContext {
    this._context =
      this._context || new FlowContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a FlowInstance
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
   * Fetch a FlowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FlowInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FlowInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FlowInstance
   */
  update(
    params: FlowContextUpdateOptions,
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the executions.
   */
  executions(): ExecutionListInstance {
    return this._proxy.executions;
  }

  /**
   * Access the revisions.
   */
  revisions(): FlowRevisionListInstance {
    return this._proxy.revisions;
  }

  /**
   * Access the testUsers.
   */
  testUsers(): FlowTestUserListInstance {
    return this._proxy.testUsers;
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
      friendlyName: this.friendlyName,
      definition: this.definition,
      status: this.status,
      revision: this.revision,
      commitMessage: this.commitMessage,
      valid: this.valid,
      errors: this.errors,
      warnings: this.warnings,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      webhookUrl: this.webhookUrl,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FlowSolution {}

export interface FlowListInstance {
  _version: V2;
  _solution: FlowSolution;
  _uri: string;

  (sid: string): FlowContext;
  get(sid: string): FlowContext;

  /**
   * Create a FlowInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FlowInstance
   */
  create(
    params: FlowListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FlowInstance) => any
  ): Promise<FlowInstance>;

  /**
   * Streams FlowInstance records from the API.
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
   * @param { FlowListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: FlowInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: FlowListInstanceEachOptions,
    callback?: (item: FlowInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage>;
  /**
   * Lists FlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlowListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FlowInstance[]) => any
  ): Promise<FlowInstance[]>;
  list(
    params: FlowListInstanceOptions,
    callback?: (error: Error | null, items: FlowInstance[]) => any
  ): Promise<FlowInstance[]>;
  /**
   * Retrieve a single page of FlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlowListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage>;
  page(
    params: FlowListInstancePageOptions,
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FlowListInstance(version: V2): FlowListInstance {
  const instance = ((sid) => instance.get(sid)) as FlowListInstance;

  instance.get = function get(sid): FlowContext {
    return new FlowContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Flows`;

  instance.create = function create(
    params: FlowListInstanceCreateOptions,
    callback?: (error: Error | null, items: FlowInstance) => any
  ): Promise<FlowInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    if (params["definition"] === null || params["definition"] === undefined) {
      throw new Error("Required parameter \"params['definition']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Status"] = params["status"];

    data["Definition"] = serialize.object(params["definition"]);
    if (params["commitMessage"] !== undefined)
      data["CommitMessage"] = params["commitMessage"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new FlowInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | FlowListInstancePageOptions
      | ((error: Error | null, items: FlowPage) => any),
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
      (payload) => new FlowPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: FlowPage) => any
  ): Promise<FlowPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new FlowPage(instance._version, payload, instance._solution)
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

export class FlowPage extends Page<
  V2,
  FlowPayload,
  FlowResource,
  FlowInstance
> {
  /**
   * Initialize the FlowPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: FlowSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowResource): FlowInstance {
    return new FlowInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
