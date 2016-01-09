https://jsfiddle.net/alvarojoao/v0zfycwm/

```javascript
var input = "3 \n \
3 \n \
0 1 \n \
1 2 \n \
2 0 \n \
3 \n \
2 \n \
0 1 \n \
1 2 \n \
9 \n \
8 \n \
0 1 \n \
0 2 \n \
0 3 \n \
0 4 \n \
0 5 \n \
0 6 \n \
0 7 \n \
0 8 \n \
0 ";
var lineNum = 0;
var lines = input.split('\n');
while(parseInt(lines[lineNum])>0){
  var nodes = lines[lineNum];
  var graph = {};
  for(var i = 0 ;i<nodes; i++){
  	graph[i] = [];
  }
  lineNum = lineNum+ 1;
  var edges = lines[lineNum];
  for(var i = 0 ;i<edges; i++){
		lineNum = lineNum+ 1;
    var ints = lines[lineNum].trim().split(' ').map(function (num) {
        return parseInt(num, 10);
    });
    var firstInt = ints[0];
    var secondInt = ints[1];
    graph[firstInt].push(secondInt);
    graph[secondInt].push(firstInt);
  }
   biColorOrNot(graph);
   lineNum = lineNum+ 1;
}
function biColorOrNot(graph){

	var initial = 0;
  var queue = [];
  queue.push(initial);
  graph[initial].color = 0;
  var canBeColored = true;
  while(queue.length>0){
     var headIndexFila = queue[0];
     queue.shift();

     if(graph[headIndexFila].marked) 
       continue;
     graph[headIndexFila].marked = true;
     graph[headIndexFila].some(function(edgeIndex){
        queue.push(edgeIndex);
        if(graph[headIndexFila].color === graph[edgeIndex].color){
          canBeColored = false;
          return;
        }
        graph[edgeIndex].color = 1 - graph[headIndexFila].color
     });
     if(!canBeColored){
        queue = [];
     }
  }

  if(canBeColored){
    snippet.log('can be colored');
  }else{
    snippet.log('Can NOT be colored');
  }

}
```
