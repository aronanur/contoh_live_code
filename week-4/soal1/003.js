/* 
===================
Distance Coordinate
===================

[INSTRUCTION]
buatlah program yang dapat menentukan jarak antara dari character o dan x 
pada array multidimensi, preview : 
[
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]

[EXAMPLE]
console.log(distanceCoordinate([
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]))

step by step solving :
[
    ['', '', 'o',''],
    ['', '', '1',''],
    ['', '', '2',''],
    ['x5','4','3','']
]
jika kita perhatikan urutan angka - angka diatas, maka jarak antara 
o dan x adalah 5. dimana posisi x dihitung sebagai 1 langkah 

maka output : 5
*/

function distanceCoordinate(board) {
  
  var identifiedOIndex = ''
  var identifiedXIndex = ''

  for(i = 0; i < board.length; i++){
    for(j = 0; j < board[i].length;j++){
      if(board[i][j] === 'o'){
        identifiedOIndex = [i, j]
      }else if(board[i][j] === 'x'){
        identifiedXIndex = [i, j]
      }
    }
  }

  firstCoordinate = identifiedXIndex[0] < identifiedOIndex[0] ? identifiedXIndex : identifiedOIndex
  lastCoordinate = identifiedXIndex[0] > identifiedOIndex[0] ? identifiedXIndex : identifiedOIndex


  count = 0
  for(i = firstCoordinate[0]; i < board.length; i++){
      for(j = 0; j < board[i].length; j++){
        if(i !== firstCoordinate[0] && i !== lastCoordinate[0]){
          if(j === firstCoordinate[1]){
            board[i][j] = 'x'
            count++
          }
        }else if(i === lastCoordinate[0]){
          if(firstCoordinate[1] === lastCoordinate[1]){
            count++
            break
          }else if(firstCoordinate[1] !== lastCoordinate[1]){
            if(j <= firstCoordinate[1]){
              board[i][j] = 'x'
              count++
            }
          }
        }
    }
  }



  console.log(board)

  return count

}

console.log( distanceCoordinate([
   ['','','o',''],
   ['','','',''],
   ['','','',''],
   ['x','','','']
])) // 5

console.log( distanceCoordinate([
   ['','','',''],
   ['','x','',''],
   ['','','',''],
   ['o','','','']
])) // 3

console.log( distanceCoordinate([
  ['','','','o'],
  ['','','',''],
  ['','','',''],
  ['x','','','']
])) // 6

console.log( distanceCoordinate([
  ['','','','x'],
  ['','','',''],
  ['','','',''],
  ['','','','o']
])) // 3
