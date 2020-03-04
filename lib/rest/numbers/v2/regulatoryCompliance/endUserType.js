'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var EndUserTypeList;
var EndUserTypePage;
var EndUserTypeInstance;
var EndUserTypeContext;

/* jshint ignore:start */
/**
 * Initialize the EndUserTypeList
 *
 * @constructor Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeList
 *
 * @param {Twilio.Numbers.V2} version - Version of the resource
 */
/* jshint ignore:end */
EndUserTypeList = function EndUserTypeList(version) {
  /* jshint ignore:start */
  /**
   * @function endUserTypes
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeContext}
   */
  /* jshint ignore:end */
  function EndUserTypeListInstance(sid) {
    return EndUserTypeListInstance.get(sid);
  }

  EndUserTypeListInstance._version = version;
  // Path Solution
  EndUserTypeListInstance._solution = {};
  EndUserTypeListInstance._uri = `/RegulatoryCompliance/EndUserTypes`;
  /* jshint ignore:start */
  /**
   * Streams EndUserTypeInstance records from the API.
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
   * @function each
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  EndUserTypeListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists EndUserTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  EndUserTypeListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  EndUserTypeListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new EndUserTypePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of EndUserTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  EndUserTypeListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new EndUserTypePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a end_user_type
   *
   * @function get
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeList#
   *
   * @param {string} sid -
   *          The unique string that identifies the End-User Type resource
   *
   * @returns {Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeContext}
   */
  /* jshint ignore:end */
  EndUserTypeListInstance.get = function get(sid) {
    return new EndUserTypeContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  EndUserTypeListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  EndUserTypeListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return EndUserTypeListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the EndUserTypePage
 *
 * @constructor Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypePage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {EndUserTypeSolution} solution - Path solution
 *
 * @returns EndUserTypePage
 */
/* jshint ignore:end */
EndUserTypePage = function EndUserTypePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(EndUserTypePage.prototype, Page.prototype);
EndUserTypePage.prototype.constructor = EndUserTypePage;

/* jshint ignore:start */
/**
 * Build an instance of EndUserTypeInstance
 *
 * @function getInstance
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypePage#
 *
 * @param {EndUserTypePayload} payload - Payload response from the API
 *
 * @returns EndUserTypeInstance
 */
/* jshint ignore:end */
EndUserTypePage.prototype.getInstance = function getInstance(payload) {
  return new EndUserTypeInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypePage#
 *
 * @returns Object
 */
/* jshint ignore:end */
EndUserTypePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

EndUserTypePage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the EndUserTypeContext
 *
 * @constructor Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeInstance
 *
 * @property {string} sid -
 *          The unique string that identifies the End-User Type resource
 * @property {string} friendlyName -
 *          A human-readable description of the End-User Type resource
 * @property {string} machineName -
 *          A machine-readable description of the End-User Type resource
 * @property {object} fields - The required information for creating an End-User.
 * @property {string} url - The absolute URL of the End-User Type resource
 *
 * @param {V2} version - Version of the resource
 * @param {EndUserTypePayload} payload - The instance payload
 * @param {sid_like} sid -
 *          The unique string that identifies the End-User Type resource
 */
/* jshint ignore:end */
EndUserTypeInstance = function EndUserTypeInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.machineName = payload.machine_name; // jshint ignore:line
  this.fields = payload.fields; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(EndUserTypeInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new EndUserTypeContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a EndUserTypeInstance
 *
 * @function fetch
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EndUserTypeInstance
 */
/* jshint ignore:end */
EndUserTypeInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
EndUserTypeInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

EndUserTypeInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the EndUserTypeContext
 *
 * @constructor Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeContext
 *
 * @param {V2} version - Version of the resource
 * @param {sid_like} sid -
 *          The unique string that identifies the End-User Type resource
 */
/* jshint ignore:end */
EndUserTypeContext = function EndUserTypeContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/RegulatoryCompliance/EndUserTypes/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a EndUserTypeInstance
 *
 * @function fetch
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EndUserTypeInstance
 */
/* jshint ignore:end */
EndUserTypeContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new EndUserTypeInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.EndUserTypeContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
EndUserTypeContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

EndUserTypeContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  EndUserTypeList: EndUserTypeList,
  EndUserTypePage: EndUserTypePage,
  EndUserTypeInstance: EndUserTypeInstance,
  EndUserTypeContext: EndUserTypeContext
};