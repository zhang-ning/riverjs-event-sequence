function parallel(){
  this.finished = [];
  this.listener = {};
}
parallel.prototype.push   = Array.prototype.push;
parallel.prototype.shift  = Array.prototype.shift;
parallel.prototype.update = update;
parallel.prototype.on = on;
parallel.prototype.emmit = emmit;

function update(){
  var scope = this;
  var caller = arguments.callee.caller;
  scope.finished.push(caller);
  scope.emmit('process',scope.finished);
  scope.emmit('end',scope.finished);
}

function on(id,define){
  this.listener[id] = define;
}

function emmit(){
  var id = arguments.slice()[0];
  var args = arguments.slice(1);
  this.listener[id].apply({},args);
}

function isFunction (target){
  return Object.prototype.toString.call(target);
}

