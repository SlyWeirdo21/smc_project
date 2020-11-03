// 블랙잭 게임
// 처음에 prompt로 숫자를 받습니다.
// 그 숫자를 총 숫자에 더하고
// 만약 총 숫자가 21이 정확하게 되면 승리하였습니다. 라고 띄웁니다.
// 만약 총 숫자가 21보다 적으면 다시 1번부터 반복합니다.
// 만약 총 숫자가 21보다 크면 실패하셨습니다!를 출력합니다. (그리고 종료)
const NUMBER = 21;
let totalNumber = 0;

while(true) {
    let number = prompt("숫자 입력") * 1;
    totalNumber += number;

    if(totalNumber === NUMBER) {
        alert("승리하였습니다.");
        break;
    } else if(totalNumber >= NUMBER) {
        alert("실패하셨습니다!");
        break;
    }
}