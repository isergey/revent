const EventEmitter = () => {
  var events = {};
  var self = this;

  this.trigger = (eventName, data) => {

    var callbacks = events[eventName];
    var i;
    if (typeof callbacks !== 'undefined') {
      for (i = 0; i < callbacks.length; i++) {
        callbacks[i](data);
      }
    }

    return self;
  };

  this.on = (eventName, callback) => {

    var callbacks = events[eventName];
    if (typeof callbacks === 'undefined') {
      callbacks = [];
      events[eventName] = callbacks;
    }
    callbacks.push(callback);
    return self;
  };


  this.off = (eventName, callback) => {

    if (typeof eventName === 'undefined') {
      events = {};
      return self;
    }

    if (typeof callback === 'undefined') {
      delete events[eventName];
      return self;
    }

    var callbacks = events[eventName];
    if (callbacks === undefined) {
      return self;
    }

    var callbackIndex = callbacks.indexOf(callback);

    if (callbackIndex < 0) {
      return self;
    }

    callbacks.splice(callbackIndex, 1);
    return self;
  };

  this.getEvents = () => {
    return events;
  };
};

export default EventEmitter;

