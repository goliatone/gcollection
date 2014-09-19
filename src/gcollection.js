/*
 * gcollection
 * https://github.com/goliatone/gcollection
 * Created with gbase.
 * Copyright (c) 2014 goliatone
 * Licensed under the MIT license.
 */
/* jshint strict: false, plusplus: true */
/*global define: false, require: false, module: false, exports: false */
(function(root, name, deps, factory) {
    "use strict";
    // Node
    if (typeof deps === 'function') {
        factory = deps;
        deps = [];
    }

    if (typeof exports === 'object') {
        module.exports = factory.apply(root, deps.map(require));
    } else if (typeof define === 'function' && 'amd' in define) {
        //require js, here we assume the file is named as the lower
        //case module name.
        define(name.toLowerCase(), deps, factory);
    } else {
        // Browser
        var d, i = 0,
            global = root,
            old = global[name],
            mod;
        while ((d = deps[i]) !== undefined) deps[i++] = root[d];
        global[name] = mod = factory.apply(global, deps);
        //Export no 'conflict module', aliases the module.
        mod.noConflict = function() {
            global[name] = old;
            return mod;
        };
    }
}(this, 'GCollection', ['extend'], function(extend) {

    /**
     * Extend method.
     * @param  {Object} target Source object
     * @return {Object}        Resulting object from
     *                         meging target to params.
     */
    var _extend = extend;

    /**
     * Shim console, make sure that if no console
     * available calls do not generate errors.
     * @return {Object} Console shim.
     */
    var _shimConsole = function(con) {

        if (con) return con;

        con = {};
        var empty = {},
            noop = function() {},
            properties = 'memory'.split(','),
            methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
                'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' +
                'table,time,timeEnd,timeStamp,trace,warn').split(','),
            prop,
            method;

        while (method = methods.pop()) con[method] = noop;
        while (prop = properties.pop()) con[prop] = empty;

        return con;
    };

    var _isArray = ('isArray' in Array) ? Array.isArray : function(value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    };

    var _isObject = function(obj) {
        if (!obj) return false;
        return obj.constructor.toString().indexOf('function Object') === 0;
        return typeof obj === 'object';
    };

    ///////////////////////////////////////////////////
    // CONSTRUCTOR
    ///////////////////////////////////////////////////

    var options = {
        indexKey: 'id',
        autoinitialize: true,
        updateStrategy: extend,
        defaultOptions: {
            notify: true
        }
    };
    window.extend = _extend;
    /**
     * GCollection constructor
     *
     * @param  {object} config Configuration object.
     */
    var GCollection = function(config) {
        config = _extend({}, this.constructor.DEFAULTS, config);

        if (config.autoinitialize) this.init(config);
    };

    GCollection.name = GCollection.prototype.name = 'GCollection';

    GCollection.VERSION = '0.0.0';

    /**
     * Make default options available so we
     * can override.
     */
    GCollection.DEFAULTS = options;

    ///////////////////////////////////////////////////
    // PRIVATE METHODS
    ///////////////////////////////////////////////////

    /**
     * Initialization method.
     * @param  {Object} config Config object.
     * @return {this}
     */
    GCollection.prototype.init = function(config) {
        if (this.initialized) return this.logger.warn('Already initialized');
        this.initialized = true;

        this.reset();

        console.log('GCollection: Init!');

        _extend(this, config);

        return this;
    };

    GCollection.prototype.reset = function() {
        // this._list = [];
        this._hash = {};
        this._count = 0;
        this._dirty = false;
    };


    GCollection.prototype.add = function(item, options) {
        if (_isArray(item)) {
            item.map(function(i) {
                this.add(i, options);
            }, this);
            return this;
        }

        //We do not take duplicates, so check if we already have it
        if (this.has(item)) {
            //Should we update?!
            this.update(item, options);
            return this;
        }

        options = extend({}, this.defaultOptions, options);

        //TODO: Do we want to support add {at:index}?
        var key = this.getKey(item);

        this._hash[key] = item;
        this._count++;
        this._dirty = true;
        //TODO: Do we want this to be two events? change & add?
        if (options.notify) this.emit('add', item);

        return this;
    };

    //TODO: Should this even be here or be part of the item
    //itself?! if model it should be handled by the model
    //if POJO then it would be extend. But we need to notify
    //with {value:item, old:old}
    GCollection.prototype.update = function(item, options) {
        options = extend({}, this.defaultOptions, options);
        var old = this.get(item);
        this.updateStrategy(old, item);
        if (options.notify) this.emit('update', old);
        return this;
    };

    GCollection.prototype.get = function(key) {
        return this._hash[this.getKey(key)];
    };

    GCollection.prototype.remove = function(item, options) {
        if (!this.has(item)) return item;

        if (_isArray(item)) {
            item.map(function(i) {
                this.remove(i, options);
            }, this);
            return this;
        }

        options = extend({}, this.defaultOptions, options);

        var key = this.getKey(item);

        delete this._hash[key];
        this._count--;
        this._dirty = true;

        if (options.notify) this.emit('remove', item);

        return item;
    };

    GCollection.prototype.has = function(itemOrKey) {
        return !!this.get();
    };

    GCollection.prototype.getKey = function(item) {
        if (_isObject(item)) return item[this.indexKey];
        return item;
    };

    GCollection.prototype.values = function(clone) {
        if (this._dirty) {
            this._vals = [];
            for (var o in this._hash) this._vals.push(this._hash[o]);
            this._dirty = false;
        }
        return clone ? this._vals.concat() : this._vals;
    };

    GCollection.prototype.count = function() {
        return this._count;
    };

    GCollection.prototype.where = function(filters) {
        //filters is an object
        var contains = function(item, filter) {
            for (var o in filter) {
                console.log('prop', o, item[o], filter[o])
                if (item[o] !== filter[o]) return false;
            }
            return true;
        };
        return this.values(true).filter(function(item) {
            return contains(item, filters);
        });
    };

    GCollection.prototype.valueOf = function() {
        return this._hash;
    };

    var EXTENDS = ['sort', 'filter', 'some', 'every', 'find', 'map'];

    EXTENDS.forEach(function(method) {
        GCollection.prototype[method] = function() {
            var args = [].slice.call(arguments, 0);
            return [][method].apply(this.values(), args);
        };
    });

    /**
     * Logger method, meant to be implemented by
     * mixin. As a placeholder, we use console if available
     * or a shim if not present.
     */
    GCollection.prototype.logger = _shimConsole(console);

    /**
     * PubSub emit method stub.
     */
    GCollection.prototype.emit = function() {
        this.logger.warn('GCollection', 'emit method is not implemented', arguments);
    };

    return GCollection;
}));