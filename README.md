riverjs-event-sequence
======================
[![Build Status](https://travis-ci.org/zhang-ning/riverjs-event-sequence.png?branch=master)](https://travis-ci.org/zhang-ning/riverjs-event-sequence)

a tool for handling serial and parallel asynchronous event quene.


###Install

```
npm install riverjs-event-sequence --save-dev
```

###Test

```
npm test
```



###Serial sequence , how to use

```
var serial = require('riverjs-event-sequence').serial;

var queue = new serial();


queue.push(task1);
queue.push(task2);
queue.push(task3);
...
queue.push(taskn);

queue.exec(1,2,3,4);


//each task should call next() ,when finished and can pass any parametes to it
//For example
function task1(){
  var me = this;
  setTimeout(function(){
    me.next(1,2);
  });
}
function task2(n1,n2){
}

//and you can pass parameters to exec as the first tasks args
queue.exec(1,2,3,4);

```


###Parallel sequence, how to use

```

var queue = new parallel();
queue.push(task1,params);
queue.push(task2,1,2);
queue.push(task3,{a:1});


queue.on('end',function(){
  //all parallel tasks end. 
})


//each task should call this.end() , when finished.
//For example:

function task1(name,sex){
  var  me = this;
  setTimeout(function(){
    me.end();
  },500);
}

```


one line to give the program's name and a brief description
Copyright (C) 2014 copyright holder

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


