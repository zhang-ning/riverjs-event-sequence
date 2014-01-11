function serial () {
  this.queue = [];
}

serial.prototype.run = function(thing){
  var me = this;
  var event = {
    done : function(){
      me.queue.shift().call(event);
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
