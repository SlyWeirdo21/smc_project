let H = Number(prompt());
let M = Number(prompt());

if(M - 45 < 0) {
    M = 60 + (M - 45);
    H -= 1;

    if(H === -1) {
      H = 23;
    }
  } else {
    M -= 45;
  }
console.log(H + ' ' + M);