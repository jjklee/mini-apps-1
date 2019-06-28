// const checkForConflicts = function(row, col, player) {
//   let result = false;
//   console.log('col===', col);

//   const hasYRowConflict = (r) => {
//     let total = 0;
//     for(let i = 0; i < r.length; i++) {
//       if(r[i] === 2 || r[i] === 0) {
//         total = 0;
//       } else {
//         total += r[i];
//       }

//       if(total === 4) {
//         result = true;
//         return;
//       }
//     }
//   }

//   const hasRRowConflict = (r) => {
//     let total = 0;
//     for(let i = 0; i < r.length; i++) {
//       if(r[i] === 1 || r[i] === 0) {
//         total = 0;
//       } else {
//         total += r[i];
//       }

//       if(total === 8) {
//         result = true;
//         return;
//       }
//     }
//   }

//   if(player === 'Player 1') {
//     hasYRowConflict(row)
//     if (!result) {
//       hasYRowConflict(col)
//     }
//   } else {
//     hasRRowConflict(row)
//     if (!result) {
//       hasRRowConflict(col)
//     }
//   }

//   return result;
// }


const result = [];
const bool = false;

const checkForConflicts = (row, col, player) => {
    if(player === 'Player 1') {
    hasYRowConflict(row)
    hasYRowConflict(col)
  } else {
    hasRRowConflict(row)
    hasRRowConflict(col)
  }

  bool = result.some(true);
  return bool;
}

const hasYRowConflict = (r) => {
  let total = 0;
  for(let i = 0; i < r.length; i++) {
    if(r[i] === 2 || r[i] === 0) {
      total = 0;
    } else {
      total += r[i];
    }

    if(total === 4) {
      result.push(true);
      return;
    }
  }
}

const hasRRowConflict = (r) => {
  let total = 0;
  for(let i = 0; i < r.length; i++) {
    if(r[i] === 1 || r[i] === 0) {
      total = 0;
    } else {
      total += r[i];
    }

    if(total === 8) {
      result.push(true);
      return;
    }
  }
}




export default bool;