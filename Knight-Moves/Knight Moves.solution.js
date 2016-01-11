	
	
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




