/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  // input the number of rooks and board size for nxn
  // output n arrays with indicating placement of the rooks on the board
  var solution = new Board({'n': n});
  var rows=solution.rows();
  rows[0][0]=1;

  if(n===1){
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(rows));
    return rows;
  }

  for(var i = 0; i < n; i++){
    rows[i][i] = 1;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(rows));
  return rows;


};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1;
  var count = 1;
  if(n === 0 || n === 1){
    return 1;
  }else{
   while(count <= n){

    solutionCount = solutionCount * count;
    count++;
   }
 }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var col = 0;
  var row = 0;
  var solution = new Board({'n': n});
  var rows = solution.rows();
    if(n === 0){
      console.log('Single solution for ' + n + ' queens:', JSON.stringify([]));
      return [];
    }
    if(n===2){
      console.log('Single solution for ' + n + ' queens:', JSON.stringify([[0,0],[0,0]]));
      return [[0,0],[0,0]];
    }

    if(n === 3){
      console.log('Single solution for ' + n + ' queens:', JSON.stringify([[0,0,0],[0,0,0],[0,0,0]]));
      return [[0,0,0],[0,0,0],[0,0,0]];
    }

    if(n === 1){
      console.log('Single solution for ' + n + ' queens:', JSON.stringify([[1]]));
      return [[1]];
    }

 var checkN = function(){
    rows[row][col] = 1;

    for(var i = 0; i<rows.length; i++){
      for(var j = 0 ;j<rows.length;j++){
        rows[i][j] = 1;
        if(solution.hasAnyQueensConflicts()){
          rows[i][j] = 0;
        }
        else{
          break;
        }
      }
    }

    var numPieces = _.reduce(_.flatten(solution.rows()), function(a,b){ return a + b});
    if(numPieces !== n && col < n){
      col++;
      solution=new Board({'n':n});
      rows=solution.rows();
      if(col === n){
        row++;
        col=0;
      }
      checkN();
    }
    // else if(numPieces !== n && col===n && row<n){
    //   row++;
    //   col=0;
    //   solution=new Board({'n':n});
    //   rows=solution.rows();
    //   checkN();
    // }


    return rows;
};
var result=checkN();
// debugger;
console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result;

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  if(n === 0){ return 1};
  var board = new Board({'n':n});
  // board = 2d array
  var checkSolution = function(row){
    //input:row, board
    //output:
    //base case:
    //if row = n
    if(row===n){
      //increment solutioncount
      solutionCount++;
      //return
      return;
    }

    //recursion
    //go through each column in row
    for(var i=0; i< n; i++){
      //place piece
      board.togglePiece(row,i);
      //recurse to check solutions
      if(!board.hasAnyQueensConflicts()){
        checkSolution(row+1);
      }
      //unplace piece
      board.togglePiece(row,i);

    }

  };

  checkSolution(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
