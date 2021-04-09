$(function () {
    $("#submit").click(function () {

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
    });

});
