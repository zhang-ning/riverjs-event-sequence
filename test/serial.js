var seq = require('../');

describe('serial case',function(){
  beforeEach(function(done){
    function first(promise){
      setTimeout(function(){
        promise.reject();
        promise.resolve();
      },500);
    }
    function second(){
      setTimeout(function(){

      },500);
    }
    function third(){
      setTimeout(function(){

      },500);
    }

    seq.serial(first).success(second).success(third);
    seq.serial(first).fail(second).fail(third);
    seq.serial(first).then(second).then(third);
    seq.serial(first).route['customize'](second).then(third);
  });
});

