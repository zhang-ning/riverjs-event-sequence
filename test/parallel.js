var parallel = require('../').parallel;
var assert = require('assert');

describe('parallel case',function(){
  var task1,task2,task3,data=[],beginTime=Date.now(),q;
  before(function(done){
    task1 = function (name){
      var queue = this;
      setTimeout(function () {
          data.push({name:name,time:Date.now() - beginTime});
          queue.update();
      }, 50);
    };
    task2 = function (msg,code){
      var args = arguments;
      var queue = this;
      setTimeout(function () {
        data.push({name:'task2',time:Date.now() - beginTime});
        queue.update();
      }, 50);
    };
    task3 = function (msg,code,fn){
      var args = arguments;
      var queue = this;
      setTimeout(function () {
        data.push({name:'task3',time:Date.now() - beginTime});
        queue.update();
        done();
      }, 100);
    };
    q = new parallel();
    q.push(task1,'jon');
    q.push(task2);
    q.push(task3);
    q.exec();
  });

  it('#data.length should equal 3',function(){
    assert(3 === data.length);
  });
  it('#on end event',function(){
    q.on('end',function(){
      assert(3 === data.length);
    });
  });

  it('#args test case',function(){
    assert(data[0].name == 'jon');
  });
  it('#task1 execute time more then 50ms',function(){
    assert(data[0].time >= 50);
  });
  it('#task2 execute time more then 50ms,less then 100ms',function(){
    assert(data[1].time >= 50);
    assert(data[1].time <= 100);
  });
  it('#task3 execute time more then 100ms,less then 200ms',function(){
    assert(data[2].time >= 1);
    assert(data[2].time <= 200);
  });
});

