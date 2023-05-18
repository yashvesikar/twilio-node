/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export type CallSummaryAnsweredBy =
  | "unknown"
  | "machine_start"
  | "machine_end_beep"
  | "machine_end_silence"
  | "machine_end_other"
  | "human"
  | "fax";

export type CallSummaryCallState =
  | "ringing"
  | "completed"
  | "busy"
  | "fail"
  | "noanswer"
  | "canceled"
  | "answered"
  | "undialed";

export type CallSummaryCallType = "carrier" | "sip" | "trunking" | "client";

export type CallSummaryProcessingState = "complete" | "partial";

/**
 * Options to pass to fetch a CallSummaryInstance
 */
export interface CallSummaryContextFetchOptions {
  /**  */
  processingState?: CallSummaryProcessingState;
}

export interface CallSummaryContext {
  /**
   * Fetch a CallSummaryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CallSummaryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance>;
  /**
   * Fetch a CallSummaryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CallSummaryInstance
   */
  fetch(
    params: CallSummaryContextFetchOptions,
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CallSummaryContextSolution {
  callSid: string;
}

export class CallSummaryContextImpl implements CallSummaryContext {
  protected _solution: CallSummaryContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, callSid: string) {
    if (!isValidPathParam(callSid)) {
      throw new Error("Parameter 'callSid' is not valid.");
    }

    this._solution = { callSid };
    this._uri = `/Voice/${callSid}/Summary`;
  }

  fetch(
    params?:
      | CallSummaryContextFetchOptions
      | ((error: Error | null, item?: CallSummaryInstance) => any),
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["processingState"] !== undefined)
      data["ProcessingState"] = params["processingState"];

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CallSummaryInstance(
          operationVersion,
          payload,
          instance._solution.callSid
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

interface CallSummaryPayload extends CallSummaryResource {}

interface CallSummaryResource {
  account_sid: string;
  call_sid: string;
  call_type: CallSummaryCallType;
  call_state: CallSummaryCallState;
  answered_by: CallSummaryAnsweredBy;
  processing_state: CallSummaryProcessingState;
  created_time: Date;
  start_time: Date;
  end_time: Date;
  duration: number;
  connect_duration: number;
  from: any;
  to: any;
  carrier_edge: any;
  client_edge: any;
  sdk_edge: any;
  sip_edge: any;
  tags: Array<string>;
  url: string;
  attributes: any;
  properties: any;
  trust: any;
  annotation: any;
}

export class CallSummaryInstance {
  protected _solution: CallSummaryContextSolution;
  protected _context?: CallSummaryContext;

  constructor(
    protected _version: V1,
    payload: CallSummaryResource,
    callSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.callType = payload.call_type;
    this.callState = payload.call_state;
    this.answeredBy = payload.answered_by;
    this.processingState = payload.processing_state;
    this.createdTime = deserialize.iso8601DateTime(payload.created_time);
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.duration = deserialize.integer(payload.duration);
    this.connectDuration = deserialize.integer(payload.connect_duration);
    this.from = payload.from;
    this.to = payload.to;
    this.carrierEdge = payload.carrier_edge;
    this.clientEdge = payload.client_edge;
    this.sdkEdge = payload.sdk_edge;
    this.sipEdge = payload.sip_edge;
    this.tags = payload.tags;
    this.url = payload.url;
    this.attributes = payload.attributes;
    this.properties = payload.properties;
    this.trust = payload.trust;
    this.annotation = payload.annotation;

    this._solution = { callSid };
  }

  accountSid: string;
  callSid: string;
  callType: CallSummaryCallType;
  callState: CallSummaryCallState;
  answeredBy: CallSummaryAnsweredBy;
  processingState: CallSummaryProcessingState;
  createdTime: Date;
  startTime: Date;
  endTime: Date;
  duration: number;
  connectDuration: number;
  from: any;
  to: any;
  carrierEdge: any;
  clientEdge: any;
  sdkEdge: any;
  sipEdge: any;
  tags: Array<string>;
  url: string;
  attributes: any;
  properties: any;
  trust: any;
  annotation: any;

  private get _proxy(): CallSummaryContext {
    this._context =
      this._context ||
      new CallSummaryContextImpl(this._version, this._solution.callSid);
    return this._context;
  }

  /**
   * Fetch a CallSummaryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CallSummaryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance>;
  /**
   * Fetch a CallSummaryInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CallSummaryInstance
   */
  fetch(
    params: CallSummaryContextFetchOptions,
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: CallSummaryInstance) => any
  ): Promise<CallSummaryInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      callSid: this.callSid,
      callType: this.callType,
      callState: this.callState,
      answeredBy: this.answeredBy,
      processingState: this.processingState,
      createdTime: this.createdTime,
      startTime: this.startTime,
      endTime: this.endTime,
      duration: this.duration,
      connectDuration: this.connectDuration,
      from: this.from,
      to: this.to,
      carrierEdge: this.carrierEdge,
      clientEdge: this.clientEdge,
      sdkEdge: this.sdkEdge,
      sipEdge: this.sipEdge,
      tags: this.tags,
      url: this.url,
      attributes: this.attributes,
      properties: this.properties,
      trust: this.trust,
      annotation: this.annotation,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CallSummarySolution {
  callSid: string;
}

export interface CallSummaryListInstance {
  _version: V1;
  _solution: CallSummarySolution;
  _uri: string;

  (): CallSummaryContext;
  get(): CallSummaryContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CallSummaryListInstance(
  version: V1,
  callSid: string
): CallSummaryListInstance {
  if (!isValidPathParam(callSid)) {
    throw new Error("Parameter 'callSid' is not valid.");
  }

  const instance = (() => instance.get()) as CallSummaryListInstance;

  instance.get = function get(): CallSummaryContext {
    return new CallSummaryContextImpl(version, callSid);
  };

  instance._version = version;
  instance._solution = { callSid };
  instance._uri = ``;

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