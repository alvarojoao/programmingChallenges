#Knight Moves [reference](https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=6&page=show_problem&problem=380)

A friend of you is doing research on the **Traveling Knight Problem (TKP)** where you are to find the shortest closed tour of knight moves that visits each square of a given set of n squares on a chessboard exactly once.<br/> He thinks that the most difficult part of the problem is determining the smallest number of knight moves between two given squares and that, once you have accomplished this, finding the tour would be easy.
Of course you know that it is vice versa. So you offer him to write a program that solves the "difficult" part.<br/>
Your job is to write a program that takes **two squares a and b** as *input* and then determines the number of knight moves on a shortest route **from a to b**.

>Input Specification

**The input file will contain one or more test cases. Each test case consists of one line containing two squares separated by one space. A square is a string consisting of a letter (a-h) representing the column and a digit (1-8) representing the row on the chessboard.**

>Output Specification

**For each test case, print one line saying "To get from xx to yy takes n knight moves.".**

>Sample Input

```
e2 e4
a1 b2
b2 c3
a1 h8
a1 h7
h8 a1
b1 c3
f6 f6
```

>Sample Output

```
To get from e2 to e4 takes 2 knight moves.
To get from a1 to b2 takes 4 knight moves.
To get from b2 to c3 takes 2 knight moves.
To get from a1 to h8 takes 6 knight moves.
To get from a1 to h7 takes 5 knight moves.
To get from h8 to a1 takes 6 knight moves.
To get from b1 to c3 takes 1 knight moves.
To get from f6 to f6 takes 0 knight moves.
```


##Solution: https://jsfiddle.net/alvarojoao/7g7nvq2x/

```javascript
	
	
function knight(x, y,dist){
  this.x = x;
  this.y = y;
  this.distance = dist;
  this.possibleMoves=[[-1,2],[1,2],[-2,1],[2,1],[-1,-2],[1,-2],[-2,-1],[2,-1]];

}

knight.prototype.toString = function() {
	return 'Position: '+String.fromCharCode(("a".charCodeAt(0)+this.x))+(this.y+1) + ' distance: ' +this.distance;
};
knight.prototype.move = function(i) {
    return new this.constructor(this.x+this.possibleMoves[i][0],this.y+this.possibleMoves[i][1],this.distance+1);
};
knight.prototype.isAvailable = function() {
    	return this.x>=0&&this.x<8&&this.y>=0&&this.y<8;
};

function convertBackToChess(char,_y){
  var x = char.charCodeAt(0) - "a".charCodeAt(0);
  var y = _y-1;
	return {x:x,y:y};
}

function convertToChess(_x,_y){
  var x = String.fromCharCode("a".charCodeAt(0)+_x);
  var y = _y+1;
	return {x:x,y:y};
}

function getMoves(input){
	var initialDest = input.trim().split(' ')[0]	
	var finalDest = input.trim().split(' ')[1]
	var final = convertBackToChess(finalDest[0],finalDest[1]);
	var initial = convertBackToChess(initialDest[0],initialDest[1]);
	var initialPosition = new knight(initial.x,initial.y,0);
	var queue = [];
  queue.push(initialPosition);
  var visited = [];
  visited[0] = (new Array(8));  
  visited[1] = (new Array(8));
  visited[2] = (new Array(8));
  visited[3] = (new Array(8));
  visited[4] = (new Array(8));
  visited[5] = (new Array(8));
  visited[6] = (new Array(8));
  visited[7] = (new Array(8)); 
  
	while(queue.length>0){

    var headQueue = queue[0]; queue.shift();

    if(visited[headQueue.x][headQueue.y]){
    	continue;
    }
  	visited[headQueue.x][headQueue.y]	= true
    if(headQueue.x==final.x&&headQueue.y==final.y){

    	snippet.log("To get from "+initialDest +" to "+finalDest+" takes "+ headQueue.distance+" knight moves.");
      return;
    }
    for(var i =0 ; i<headQueue.possibleMoves.length;i++){
    	var newMove = headQueue.move(i);
      
      if(newMove.isAvailable()){
      	queue.push(newMove);
      }
    }
  }
};

var inputs="e2 e4\n \
a1 b2\n \
b2 c3\n \
a1 h8\n \
a1 h7\n \
h8 a1\n \
b1 c3\n \
f6 f6";
inputs.split('\n').forEach(function(input){
	getMoves(input);

});

```

