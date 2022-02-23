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
var Page = require('../../../base/Page');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var UserList;
var UserPage;
var UserInstance;
var UserContext;

/* jshint ignore:start */
/**
 * Initialize the UserList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.FrontlineApi.V1.UserList
 *
 * @param {Twilio.FrontlineApi.V1} version - Version of the resource
 */
/* jshint ignore:end */
UserList = function UserList(version) {
  /* jshint ignore:start */
  /**
   * @function users
   * @memberof Twilio.FrontlineApi.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.FrontlineApi.V1.UserContext}
   */
  /* jshint ignore:end */
  function UserListInstance(sid) {
    return UserListInstance.get(sid);
  }

  UserListInstance._version = version;
  // Path Solution
  UserListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a user
   *
   * @function get
   * @memberof Twilio.FrontlineApi.V1.UserList#
   *
   * @param {string} sid - The SID of the User resource to fetch
   *
   * @returns {Twilio.FrontlineApi.V1.UserContext}
   */
  /* jshint ignore:end */
  UserListInstance.get = function get(sid) {
    return new UserContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.FrontlineApi.V1.UserList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  UserListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  UserListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return UserListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the UserPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.FrontlineApi.V1.UserPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {UserSolution} solution - Path solution
 *
 * @returns UserPage
 */
/* jshint ignore:end */
UserPage = function UserPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(UserPage.prototype, Page.prototype);
UserPage.prototype.constructor = UserPage;

/* jshint ignore:start */
/**
 * Build an instance of UserInstance
 *
 * @function getInstance
 * @memberof Twilio.FrontlineApi.V1.UserPage#
 *
 * @param {UserPayload} payload - Payload response from the API
 *
 * @returns UserInstance
 */
/* jshint ignore:end */
UserPage.prototype.getInstance = function getInstance(payload) {
  return new UserInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.FrontlineApi.V1.UserPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
UserPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

UserPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the UserContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.FrontlineApi.V1.UserInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} identity - The string that identifies the resource's User
 * @property {string} friendlyName -
 *          The string that you assigned to describe the User
 * @property {string} avatar -
 *          The avatar URL which will be shown in Frontline application
 * @property {user.state_type} state - Current state of this user
 * @property {boolean} isAvailable -
 *          Whether the User is available for new conversations
 * @property {string} url - An absolute URL for this user.
 *
 * @param {V1} version - Version of the resource
 * @param {UserPayload} payload - The instance payload
 * @param {string} sid - The SID of the User resource to fetch
 */
/* jshint ignore:end */
UserInstance = function UserInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.avatar = payload.avatar; // jshint ignore:line
  this.state = payload.state; // jshint ignore:line
  this.isAvailable = payload.is_available; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(UserInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new UserContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a UserInstance
 *
 * @function fetch
 * @memberof Twilio.FrontlineApi.V1.UserInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a UserInstance
 *
 * @function update
 * @memberof Twilio.FrontlineApi.V1.UserInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] -
 *          The string that you assigned to describe the User
 * @param {string} [opts.avatar] -
 *          The avatar URL which will be shown in Frontline application
 * @param {user.state_type} [opts.state] - Current state of this user
 * @param {boolean} [opts.isAvailable] -
 *          Whether the User is available for new conversations
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.FrontlineApi.V1.UserInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
UserInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

UserInstance.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the UserContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.FrontlineApi.V1.UserContext
 *
 * @param {V1} version - Version of the resource
 * @param {string} sid - The SID of the User resource to fetch
 */
/* jshint ignore:end */
UserContext = function UserContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/Users/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a UserInstance
 *
 * @function fetch
 * @memberof Twilio.FrontlineApi.V1.UserContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new UserInstance(this._version, payload, this._solution.sid));
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
 * update a UserInstance
 *
 * @function update
 * @memberof Twilio.FrontlineApi.V1.UserContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] -
 *          The string that you assigned to describe the User
 * @param {string} [opts.avatar] -
 *          The avatar URL which will be shown in Frontline application
 * @param {user.state_type} [opts.state] - Current state of this user
 * @param {boolean} [opts.isAvailable] -
 *          Whether the User is available for new conversations
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed UserInstance
 */
/* jshint ignore:end */
UserContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'Avatar': _.get(opts, 'avatar'),
    'State': _.get(opts, 'state'),
    'IsAvailable': serialize.bool(_.get(opts, 'isAvailable'))
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new UserInstance(this._version, payload, this._solution.sid));
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
 * @memberof Twilio.FrontlineApi.V1.UserContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
UserContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

UserContext.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  UserList: UserList,
  UserPage: UserPage,
  UserInstance: UserInstance,
  UserContext: UserContext
};