var seq = require('../');

describe('serial case',function(){
  beforeEach(function(done){
    var first = function(){
      setTimeout(function(){

      },500);
    };
    var second = function(){
      setTimeout(function(){

      },500);
    };
    var third = function(){
      setTimeout(function(){

      },500);
    };

    seq.parallel([first,second,third]).end(function(){

    });
  });
});

