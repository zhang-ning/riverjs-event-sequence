riverjs-event-sequence
======================

a tool for handling serial and parallel asynchronous event quene.

###Serial sequence , how to use

```
var task1=function(){
  setTimeout(function(){
      //your asyncnoize logic
      queue.next('task2','needed','parameters');
      },500);
},
  task2=function(str3,str2,str3){
    //you asyncnoize logic2 
    queue.next('kkk');
  }
...
taskn

var queue = new serial();
queue.push(task1);
queue.push(task2);
queue.push(task3);
...
queue.push(taskn);
queue.exec();
```


###Parallel sequence, how to use

```
    var task1 = function (){
      setTimeout(function () {
          data.push({name:'task1',time:Date.now() - beginTime});
          queue.update();
      }, 50);
    },
    task2 = function (msg,code){
      var args = arguments;
      setTimeout(function () {
        data.push({name:'task2',time:Date.now() - beginTime});
        queue.update();
      }, 50);
    },
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


