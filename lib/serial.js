var promise = {
  resolve : function(){
  },
  reject  : function(){
  }
};

function serial (){
  var matter = arguments.slice()[0];
  //to-do if matter.isFunction then  
  matter.call({},promise);
}


modules.exports = serial;
