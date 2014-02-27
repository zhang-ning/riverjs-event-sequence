function parallel(){
  this.completeTasks = [];
  this.listeners = {};
}
parallel.prototype.push    = function(){
  arguments[0].args = arguments[1];
  this._push(arguments[0]);
}
parallel.prototype._push   = Array.prototype.push;
parallel.prototype.shift   = Array.prototype.shift;
parallel.prototype.forEach = Array.prototype.forEach;
parallel.prototype.update  = update;
parallel.prototype.exec    = exec;
parallel.prototype.on      = on;
parallel.prototype.emmit   = emmit;

function exec(){
  var args = arguments;
  var me   = this;
  this.forEach(function(task,index){
    task.apply(me,task.args || args);
  });
}

function update(){
  var me = this;
  var caller = arguments.callee.caller;
  me.completeTasks.push(caller);
  me.emmit('process',me.completeTasks);
  if(me.completeTasks.length === me.length){
    me.emmit('end',me.completeTasks);
  }
}

function on(id,define){
  if(!this.listeners[id]){
    this.listeners[id] = [];
  }
  this.listeners[id].push(define);
}

function emmit(){
  var id = Array.prototype.slice.call(arguments)[0];
  var args =Array.prototype.slice.call(arguments,1);
  var me = this;
  if(is('Array',this.listeners[id])){
    this.listeners[id].forEach(function(listener,index){
      listeners.apply(me,args);
    });
  }
}

function is(type,target){
  return Object.prototype.toString.call(target) === '[object '+type+']';
}

module.exports = parallel;
