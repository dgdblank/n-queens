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
  var count = n;
  if(n===1){
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution;
  }
  var boole = false;
  while(count > 0){
  for(var i = 0; i < rows.length; i++){
    for(var j = 0; j < rows.length; j++){
      rows[i][j] = 1;
      if(solution.hasAnyRooksConflicts()){
        rows[i][j] = 0;
      } else {
        count--;
        boole = true;
        break;
      }
    }
    if(boole){
      boole = false;
      break;
    }
  }
  debugger;
}

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;


};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
