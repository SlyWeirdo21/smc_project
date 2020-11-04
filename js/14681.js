let x = Number(prompt());
let y = Number(prompt());

if(x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }