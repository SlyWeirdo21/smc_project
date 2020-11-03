    // 이 코드는 알림창을 띄우는 코드입니다.
    // alert( "Hello World!");
    const PG_FEE = 0.03;
    
    // const scanner = new scanner();

    let a = 1;
    let b = 2;
    let c = "asdf";

    let sell_price = 20_000;
    let pg_fee = sell_price * PG_FEE;

    alert( `${typeof a}, ${typeof b}, ${typeof c}, ${typeof (a + b)}` );
    
    result = prompt("타이틀", "기본값");
    alert(result);

    let isBoss = confirm("당신이 주인인가요?");
    alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.