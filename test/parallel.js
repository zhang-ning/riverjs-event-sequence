var parallel = require('../').parallel;
var assert = require('assert');

describe('parallel case',function(){
  var task1,task2,task3,data=[],beginTime=Date.now();
  before(function(done){
    task1 = function (){
      setTimeout(function () {
          data.push({name:'task1',time:Date.now() - beginTime});
          queue.update();
      }, 50);
    };
    task2 = function (msg,code){
      var args = arguments;
      setTimeout(function () {
        data.push({name:'task2',time:Date.now() - beginTime});
        queue.update();
      }, 50);
    };
    task3 = function (msg,code,fn){
      var args = arguments;
      setTimeout(function () {
        data.push({name:'task3',time:Date.now() - beginTime});
        queue.update();
        done();
      }, 100);
    };
    var queue = new parallel();
    queue.push(task1);
    queue.push(task2);
    queue.push(task3);
    queue.exec();
  });

  it('#data.length should equal 3',function(){
    assert(3 === data.length);
  });
  it('#task1 execute time more then 50ms',function(){
    assert(data[0].time >= 50);
  });
  it('#task2 execute time more then 50ms,less then 100ms',function(){
    assert(data[1].time >= 50);
    assert(data[1].time <= 100);
  });
  it('#task3 execute time more then 100ms,less then 200ms',function(){
    assert(data[2].time >= 100);
    assert(data[2].time <= 200);
  });
});

