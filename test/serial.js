var serial = require('../').serial;
var assert = require('assert');

describe('serial case',function(){
  var first,second,third,result='no call';
  beforeEach(function(done){
    first = function (){
      var me = this;
      setTimeout(function(){
        result = 'first called';
        me.done();
      },500);
    };
    second = function (){
      var me = this;
      setTimeout(function(){
        result = 'second called';
        me.done();
      },500);
    };
    third = function (){
      var me = this;
      setTimeout(function(){
        result = 'third called';
        me.done();
      },500);
    };
    var queue = new serial();
    queue.run(first).then(second).then(third);
    done();
  });

  it('#no call till 500ms',function(){
    assert.equal('no call',result);
  });

  it('#first called after 500ms',function(done){
    setTimeout(function(){
      assert.equal('first called',result);
      done();
    },500);
  });

  it('#second called after 1000ms',function(done){
    setTimeout(function(){
      assert.equal('second called',result);
      done();
    },1000);
  });


  it('#third called after 1500ms',function(done){
    setTimeout(function(){
      assert.equal('third called',result);
      done();
    },1500);
  });
});

