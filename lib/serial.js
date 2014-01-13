function serial () {
}
serial.prototype.push  = Array.prototype.push;
serial.prototype.shift = Array.prototype.shift;
serial.prototype.next  = next;
serial.prototype.exec = next;
serial.prototype.clear = clear;

function next (){
  var task = this.shift();
  //to-do type varify
  if(task){
    task.apply(this,arguments);
  }
}

function clear (){
  for (var i = 0, l = this.length; i < l; i ++) {
    this.shift();
  }
}

module.exports = serial;
