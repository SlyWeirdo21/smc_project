const ID = "qwe123"
const PASSWORD = "asd123";

let id = prompt("아이디", "입력");
let password = prompt("비밀번호", "입력");

if( ID === id && PASSWORD === password) {
    alert( "로그인 되었습니다!" );
} else if( ID === id ) {
    alert( "로그인에 실패하였습니다. 아이디를 확인해주세요." );
} else {
    alert( "로그인에 실패하였습니다." )
}
