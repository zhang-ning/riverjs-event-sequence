var serial = require('../').serial;
var assert = require('assert');

describe('serial case',function(){
  var task1,task2,task3,data=[];
  before(function(done){
    task1 = function (){
      setTimeout(function () {
          data.push({num:'task1'});
          queue.next('task1 successed',200);
      }, 50);
    };
    task2 = function (msg,code){
      var args = arguments;
      setTimeout(function () {
        data.push({num:'task2',args:args});
        queue.next('task2 failed',500,function(){});
      }, 50);
    };
    task3 = function (msg,code,fn){
      var args = arguments;
      setTimeout(function () {
        data.push({num:'task3',args:args});
        done();
      }, 100);
    };

    var queue = new serial();
    queue.push(task1);
    queue.push(task2);
    queue.push(task3);
    queue.exec();
  });

  it('#data.length should equal 3',function(){
    assert(3 === data.length);
  });
  it('#task3 argumets[2] should equal 500',function(){
    assert.equal(500,data[2].args[1]);
  });
});

