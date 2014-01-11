function serial () {
  this.queue = [];
}

serial.prototype.run = function(thing){
  var queue = this.queue;
  var event = {
    done : function(){
      queue.shift().call(event);
    }
  };
  thing.call(event);
  return this;
};

serial.prototype.then = function(thing){
  this.queue.push(thing);
  return this;
};


module.exports = serial;
