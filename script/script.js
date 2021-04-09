$(function () {

    document.onkeyup = fnEnterChk; // 함수의 호출 = 함수의 실행

    function fnEnterChk() { // 함수의 정의
        // 함수의 정의만 있을 때는 실행이 되지 X
        var keycode = window.event.keyCode;
        // event는 소문자로, key'C'ode는 대문자로, Code는 명령어기 때문에 이름을 소문자로!
        //   alert("코드 : " + Code); 엔터키의 키 코드는 13번!
        if (keycode == 13) {
            fnSubmit(); // 눌린 키의 코드가 13번(엔터키)이라면 호출된 함수를 실행
        }
    }



    function fnSubmit() { // 함수
        //        alert("서브밋 OK!!");

        var uID = $("#uID").val().trim();
        // 입력된 ID value 가져오기 및 공백제거(메서드 체인 적용)
        var uPW = $("#uPW").val().trim();

        var regExpID = /[^a-z|A-Z|0-9|_]/;
        // ID 정규표현식 유효성 검사 조건
        var regExpPW = /[^a-z|A-Z|0-9|_#]/;
        // PW 정규표현식 유효성 검사 조건

        //    --- or  1개라도 조건을 만족할 경우 true /  두가지 다 false 시 false
        if (uID == "" || regExpID.test(uID)) { // 아이디가 공백일 때
            //  true 일 경우 아이디가 공백 / 정규표현식 조건에 맞지 않음 (영어, 숫자, 밑줄 외에 다른 기호)

            alert("아이디를 올바르게 입력해주세요.");
            $("#uID").focus().val(""); // 포커스 설정, 공백 제거

        } else if (uPW == "" || regExpPW.test(uPW)) {

            alert("비밀번호를 올바르게 입력해주세요.");
            $("#uPW").focus().val("");

        } else {
            alert("OK!!"); // ID, PW 모두 정상적인 값이 입력 됨
        }
    }









    $("button").click(function () {


        var uID = $("#uID").val().trim();
        // 입력된 ID value 가져오기 및 공백제거(메서드 체인 적용)
        var uPW = $("#uPW").val().trim();
        var regExpID = /[^a-z|A-Z|0-9|_]/;
        // ID 정규표현식 유효성검사조건
        var regExpPW = /[^a-z|A-Z|0-9|_#]/;
        // PW 정규표현식 유효성검사조건

        if (uID == "" || regExpID.test(uID)) {
            alert("아이디를 올바르게 입력해주세요.");
            $("#uID").focus().val(""); // 포커스설정 및 공백제거

        } else if (uPW == "" || regExpPW.test(uPW)) {
            alert("비밀번호를 올바르게 입력해주세요.");
            $("#uPW").focus().val("");

        } else {
            alert("OK!"); // ID, PW 모두 정상적인 값이 입력됨

        }


    });



});
