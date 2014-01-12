function parallel(){
  this.completeTasks = [];
  this.listeners = {};
}
parallel.prototype.push   = Array.prototype.push;
parallel.prototype.shift  = Array.prototype.shift;
parallel.prototype.forEach  = Array.prototype.forEach;
parallel.prototype.update = update;
parallel.prototype.exec = exec;
parallel.prototype.on = on;
parallel.prototype.emmit = emmit;

function exec(){
  this.forEach(function(task,index){
    task();
  });
}

function update(){
  var scope = this;
  var caller = arguments.callee.caller;
  scope.completeTasks.push(caller);
  scope.emmit('process',scope.completeTasks);
  if(scope.completeTasks.length === scope.length){
    scope.emmit('end',scope.completeTasks);
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
  if(is('Array',this.listeners[id])){
    this.listeners[id].forEach(function(listener,index){
      listeners.apply({},args);
    });
  }
}

function is(type,target){
  return Object.prototype.toString.call(target) === '[object '+type+']';
}

module.exports = parallel;
