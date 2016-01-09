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
