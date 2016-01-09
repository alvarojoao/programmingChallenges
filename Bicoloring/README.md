
Reference : https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=945&mosmsg=Submission+received+with+ID+9182647

In 1976 the “*Four Color Map Theorem*” was proven with the assistance of a computer. This theorem states that every map can be colored using only four colors, in such a way that no region is colored using the same color as a neighbor region.

Here you are asked to solve a simpler similar problem. You have to decide whether a given arbitrary connected graph can be bicolored. That is, if one can assign colors (from a palette of two) to the nodes in such a way that no two adjacent nodes have the same color. To simplify the problem you can assume:

 - no node will have an **edge to itself**.
 - the graph is **nondirected**. That is, if a node a is said to be connected to a node b, then you must assume that b is connected to a.
 - the graph will be **strongly connected**. That is, there will be at least one path from any node to any other node.

**Input**
The input consists of several test cases. Each test case starts with a line containing the number **n (1 < n < 200)** of different nodes. 
*The second line* contains the number of **edges l**. After this, l lines will follow, each containing two numbers that specify an edge between the two nodes that they represent.

A node in the graph will be labeled using a number  **a (0 ≤ a < n)**.
An input with *n = 0* will mark the end of the input and is not to be processed.

**Output**

You have to decide whether the input graph can be **bicolored** or **not**, and print it as shown below.

**Sample Input**

```    
      3
      3
      0 1
      1 2
      2 0
      3
      2
      0 1
      1 2
      9
      8
      0 1
      0 2
      0 3
      0 4
      0 5
      0 6
      0 7
      0 8
      0
```
**Sample Output**

```
NOT BICOLORABLE.
BICOLORABLE.
BICOLORABLE.
```
> Solution  
> https://jsfiddle.net/alvarojoao/v0zfycwm/

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
