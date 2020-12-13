// login的js
$(document).ready(function () {

    // 檢查某 cookie 是否存在
    function checkCookie(cname) {
        var cookie_value = getCookie(cname);
        if (cookie_value != "") {
            return true;
        } else {
            return false;
        }
    }

    // 取得 cookie 的值
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    //檢測註冊帳號密碼的長度，不可小於六碼↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  新增功能：註冊帳號密碼不可小於6碼、不可為中文。
    var checkArr = $('input.checkString');
    for(let i = 0; i < checkArr.length; i++){
        checkArr[i].addEventListener('blur',function(e){
            let getStringLength = e.target.value.length; //取得input數入的長度
            let inputName = e.target.previousElementSibling.innerText.slice(0, 2);//取得input欄位名稱
            if(getStringLength < 6 && getStringLength != 0){ //當長度小於六、裡面不是空字串時
                e.target.value = "";
                checkArr[i].placeholder = `${inputName}長度小於6`;
                e.target.classList.add('BorderColor');
            }else{
                checkArr[i].placeholder = "";
                e.target.classList.remove('BorderColor');
            };
        });
    };    
    //檢測註冊帳號密碼的長度，不可小於六碼↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    if (checkCookie('user')) {
        // 這裡的userAccount變數，代表是user登入後的帳號，用這個帳號去抓資料
        var userAccount = getCookie('user');
        $.ajax({
            type: 'POST',
            url: "./layout/loginR.php",
            data: {
                userAccount: userAccount,
            },
            dataType: "text",
            success: function (data) {
                document.querySelector('a.ccp').innerText = data;
            }
        });
    }

    var windowWidth = window.outerWidth
    if (windowWidth <= 576) { //手機版時套用此js
        var my_cookies = document.cookie.substring(5);

        // 下拉選單↓↓↓↓↓↓↓
        var shoppingCar = document.getElementsByClassName('shoppingCar')[0];
        var label = shoppingCar.querySelector('label');
        var section = shoppingCar.querySelector('section');
        var input = label.querySelector('input');
        var member = document.getElementsByClassName('member')[0];
        var labelM = member.querySelector('label');
        var ul = member.querySelector('ul');
        var inputM = labelM.querySelector('input');

        label.addEventListener('mouseup', function () {
            if (!input.checked) {
                section.classList.add('on');
                inputM.checked = false;
                ul.classList.remove('on');
            } else {
                section.classList.remove('on');
            }
        });

        labelM.addEventListener('mouseup', function () {
            if (!inputM.checked) {
                ul.classList.add('on');
                input.checked = false;
                section.classList.remove('on');
            } else {
                ul.classList.remove('on');
            }
        });
        // 下拉選單↑↑↑↑↑↑↑↑↑


        if (checkCookie('user') == false) {
            $('.logout').css('display', 'none');
            $('.callLoginBox').css('display', 'block');
            $('a.ccp').css('display', 'none');

            $('a.callLoginBox').click(function () {//點擊登入
                $('ul.on').removeClass('on');
                $('.logout').css('display', 'none');
                $('.callLoginBox').css('display', 'block');

                $('#loginWrap').css('display', 'block');

                // $('#member').click(function(){//點擊會員icon  叫出登入燈箱

                // });

                $('.item1 > button').click(function () {
                    $('.upArea').toggleClass('move');
                    $('.slideBlock').toggleClass('moveToLeft');
                    $('#createForm').toggleClass('createHide');
                    $('#loginForm').toggleClass('loginHide');
                    $('.item1 > p').toggleClass('item1Pmove');
                    $('.item1 > button').toggleClass('item1Pbotton');
                    $('.item2 > p').toggleClass('item2Pmove');
                    $('.item2 > button').toggleClass('item2Pbotton');
                });


                $('.item2 > button').click(function () {
                    $('.upArea').toggleClass('move');
                    $('.slideBlock').toggleClass('moveToLeft');
                    $('#createForm').toggleClass('createHide');
                    $('#loginForm').toggleClass('loginHide');
                    $('.item1 > p').toggleClass('item1Pmove');
                    $('.item1 > button').toggleClass('item1Pbotton');
                    $('.item2 > p').toggleClass('item2Pmove');
                    $('.item2 > button').toggleClass('item2Pbotton');
                });

                $('#closeIcon').click(function () { //點擊close icon 關閉login
                    $('#loginWrap').css('display', 'none');
                });

                $('.greyGlass').click(function () {//點擊蒙版 關閉login
                    $('#loginWrap').css('display', 'none');
                });

                // 禁止輸入空白↓↓↓↓↓↓↓↓↓↓
                $('#name , #account , #password , #confirmPassword , #email , #loginAccount , #loginPassword').keydown(function (e) {
                    if (e.which == 32) {
                        e.preventDefault();
                    }
                })


                // 註冊↓↓↓↓↓↓↓↓↓↓
                $('#createAccount').click(function (e) {

                    e.preventDefault(); // ← 阻止button幫我們送出表單刷新頁面

                    var name = $('#name').val().trim().replace(" ", "");
                    var account = $('#account').val().trim();
                    var password = $('#password').val().trim();
                    var email = $('#email').val().trim();
                    var confirmPassword = $('#confirmPassword').val().trim();

                    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  // ← Email 正規表達

                    if (password == "" || name == "" || account == "" || password == "" || email == "") {
                        swal("錯誤", "所有欄位皆為必填", "error");
                    } else if (confirmPassword != password) {
                        swal("密碼不一致", "密碼以及確認密碼請一致", "error");
                    } else if (!(regex.test(email))) {
                        swal("E-mail 格式錯誤", "請確認E-mail是否輸入正確", "error");
                    } else if (confirmPassword == password & name != "" & account != "" & password != "" & confirmPassword != "" & email != "") {
                        $.ajax({
                            type: 'POST',
                            url: "./layout/loginR.php",
                            data: {
                                name: $('#name').val(),
                                account: $('#account').val(),
                                password: $('#password').val(),
                                email: $('#email').val()
                            },
                            dataType: "text",
                            success: function (data) {
                                if (data == "success") {
                                    swal("註冊成功!", "恭喜你成為會員！！!", "success")
                                        .then((willDelete) => {
                                            if (willDelete) {
                                                window.location.reload();
                                            }
                                        });
                                } else if (data == "EmailRepeat") {
                                    swal("信箱已註冊", "請確認是否重複註冊", "error");
                                } else if (data == "AccountRepeat") {
                                    swal("帳號已註冊", "請確認是否重複註冊", "error");
                                } else if (data == "AllRepeat") {
                                    swal("帳號與信箱已註冊", "請確認是否重複註冊", "error");
                                };
                            }
                        });
                    }
                });

                $('#login').click(function (e) {
                    e.preventDefault(); // ← 阻止button幫我們送出表單刷新頁面

                    var loginAccount = $('#loginAccount').val().trim();
                    var loginPassword = $('#loginPassword').val().trim();

                    if (loginAccount == "" || loginPassword == "") {
                        swal("帳號密碼錯誤", "同學請記得輸入帳號或密碼。", "error");
                    } else {
                        $.ajax({
                            type: 'POST',
                            url: "./layout/loginR.php",
                            data: {
                                loginAccount: loginAccount,
                                loginPassword: loginPassword
                            },
                            dataType: "text",
                            success: function (data) {
                                var dataArr = data.split(',');
                                var cc = dataArr[0];
                                var loginString = dataArr[1];
                                if (loginString == "NoAccount") {
                                    swal("登入失敗", "帳號或密碼錯誤，若非會員請先註冊。", "error");
                                } else if (loginString == "loginSuccess") {
                                    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                                    let gettoday = new Date();
                                    let year = gettoday.getFullYear();
                                    let month = gettoday.getMonth();
                                    let date = gettoday.getDate();


                                    document.cookie = `user =${loginAccount}; expires= ${date} ${months[month]} ${year} 23:59:59 GMT`;
                                    swal("登入成功!", "歡迎回來！！!", "success")
                                        .then((willDelete) => {
                                            if (willDelete) {
                                                window.location.reload();
                                            }
                                        });
                                };
                            }
                        });
                    }
                });










            })



        } else {
            $('.logout').css('display', 'block');
            $('.callLoginBox').css('display', 'none');

            $('a.logout').click(function () { //登出
                document.cookie = "user=; expires=Thu, 18 Dec 2018 03:00:00 UTC";
                window.location.reload();
            })
        }
    }
    else {

        document.addEventListener("click", function (e) {

            if (e.target.classList.contains("logout")) {
                document.cookie = "user=; expires=Thu, 18 Dec 2018 03:00:00 UTC";
                window.location.reload();
            }

        });

        $('.member').mousedown(function () {
            var my_cookies = document.cookie.substring(5);
            if (checkCookie('user') == false) {//如果未登入 
                $('.logout').css('display', 'none');
                $('.callLoginBox').css('display', 'block');

                $('#member').click(function () {//點擊會員icon  叫出登入燈箱
                    $('#loginWrap').css('display', 'block');
                });

                $('.item1 > button').click(function () {
                    $('.upArea').toggleClass('move');
                    $('.slideBlock').toggleClass('moveToLeft');
                    $('#createForm').toggleClass('createHide');
                    $('#loginForm').toggleClass('loginHide');
                    $('.item1 > p').toggleClass('item1Pmove');
                    $('.item1 > button').toggleClass('item1Pbotton');
                    $('.item2 > p').toggleClass('item2Pmove');
                    $('.item2 > button').toggleClass('item2Pbotton');
                });


                $('.item2 > button').click(function () {
                    $('.upArea').toggleClass('move');
                    $('.slideBlock').toggleClass('moveToLeft');
                    $('#createForm').toggleClass('createHide');
                    $('#loginForm').toggleClass('loginHide');
                    $('.item1 > p').toggleClass('item1Pmove');
                    $('.item1 > button').toggleClass('item1Pbotton');
                    $('.item2 > p').toggleClass('item2Pmove');
                    $('.item2 > button').toggleClass('item2Pbotton');
                });

                $('#closeIcon').click(function () { //點擊close icon 關閉login
                    $('#loginWrap').css('display', 'none');
                });

                $('.greyGlass').click(function () {//點擊蒙版 關閉login
                    $('#loginWrap').css('display', 'none');
                });

                // 禁止輸入空白↓↓↓↓↓↓↓↓↓↓
                $('#name , #account , #password , #confirmPassword , #email , #loginAccount , #loginPassword').keydown(function (e) {
                    if (e.which == 32) {
                        e.preventDefault();
                    }
                })


                // 註冊↓↓↓↓↓↓↓↓↓↓
                $('#createAccount').click(function (e) {

                    e.preventDefault(); // ← 阻止button幫我們送出表單刷新頁面

                    var name = $('#name').val().trim().replace(" ", "");
                    var account = $('#account').val().trim();
                    var password = $('#password').val().trim();
                    var email = $('#email').val().trim();
                    var confirmPassword = $('#confirmPassword').val().trim();


                    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  // ← Email 正規表達

                    if (password == "" || name == "" || account == "" || password == "" || email == "") {
                        swal("錯誤", "所有欄位皆為必填", "error");
                    } else if (confirmPassword != password) {
                        swal("密碼不一致", "密碼以及確認密碼請一致", "error");
                    } else if (!(regex.test(email))) {
                        swal("E-mail 格式錯誤", "請確認E-mail是否輸入正確", "error");
                    } else if (confirmPassword == password & name != "" & account != "" & password != "" & confirmPassword != "" & email != "") {
                        $.ajax({
                            type: 'POST',
                            url: "./layout/loginR.php",
                            data: {
                                name: $('#name').val(),
                                account: $('#account').val(),
                                password: $('#password').val(),
                                email: $('#email').val(),
                            },
                            dataType: "text",
                            success: function (data) {
                                if (data == "success") {
                                    swal("註冊成功!", "恭喜你成為會員！！!", "success")
                                        .then((willDelete) => {
                                            if (willDelete) {
                                                window.location.reload();
                                            }
                                        });
                                } else if (data == "EmailRepeat") {
                                    swal("信箱已註冊", "請確認是否重複註冊", "error");
                                } else if (data == "AccountRepeat") {
                                    swal("帳號已註冊", "請確認是否重複註冊", "error");
                                } else if (data == "AllRepeat") {
                                    swal("帳號與信箱已註冊", "請確認是否重複註冊", "error");
                                };
                            }
                        });
                    }
                });

                $('#login').click(function (e) {
                    e.preventDefault(); // ← 阻止button幫我們送出表單刷新頁面

                    var loginAccount = $('#loginAccount').val().trim();
                    var loginPassword = $('#loginPassword').val().trim();
                    var today = new Date().getDate();

                    if (loginAccount == "" || loginPassword == "") {
                        swal("帳號密碼錯誤", "同學請記得輸入帳號或密碼。", "error");
                    } else {
                        $.ajax({
                            type: 'POST',
                            url: "./layout/loginR.php",
                            data: {
                                loginAccount: loginAccount,
                                loginPassword: loginPassword,
                                today: today,
                            },
                            dataType: "text",
                            success: function (data) {
                                var dataArr = data.split(',');
                                var cc = dataArr[0];
                                var loginString = dataArr[1];
                                var name = dataArr[2];
                                var toDayCC = dataArr[3];
                                var SignInDay = dataArr[4];
                                console.log(dataArr);
                                if (data == "NoAccount") {
                                    swal("登入失敗", "帳號或密碼錯誤，若非會員請先註冊。", "error");
                                } else if (loginString == "loginSuccess") {
                                    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                                    let gettoday = new Date();
                                    let year = gettoday.getFullYear();
                                    let month = gettoday.getMonth();
                                    let date = gettoday.getDate();


                                    document.cookie = `user =${loginAccount}; expires= ${date} ${months[month]} ${year} 23:59:59 GMT`;
                                    // var my_cookies = document.cookie.substring(5);
                                    swal("登入成功!", `${name}　歡迎回來！！!　　今日獲得　${toDayCC}　　cc`, "success")
                                        .then((willDelete) => {
                                            if (willDelete) {

                                                window.location.reload();
                                            }
                                        });
                                }else if (loginString == "loginSuccess1") {
                                    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                                    let gettoday = new Date();
                                    let year = gettoday.getFullYear();
                                    let month = gettoday.getMonth();
                                    let date = gettoday.getDate();


                                    document.cookie = `user =${loginAccount}; expires= ${date} ${months[month]} ${year} 23:59:59 GMT`;
                                    // var my_cookies = document.cookie.substring(5);
                                    swal("登入成功!", `${name}　歡迎回來！！!`, "success")
                                        .then((willDelete) => {
                                            if (willDelete) {

                                                window.location.reload();
                                            }
                                        });
                                };
                            }
                        });
                    }
                });

            } else if (my_cookies != "") {//如果有登入
                $('.logout').css('display', 'block');
                $('.callLoginBox').css('display', 'none');
                // 下拉選單↓↓↓↓↓↓↓
                var shoppingCar = document.getElementsByClassName('shoppingCar')[0];
                var label = shoppingCar.querySelector('label');
                var section = shoppingCar.querySelector('section');
                var input = label.querySelector('input');
                var member = document.getElementsByClassName('member')[0];
                var labelM = member.querySelector('label');
                var ul = member.querySelector('ul');
                var inputM = labelM.querySelector('input');

                label.addEventListener('mouseup', function () {
                    if (!input.checked) {
                        section.classList.add('on');
                        inputM.checked = false;
                        ul.classList.remove('on');
                    } else {
                        section.classList.remove('on');
                    }
                });

                labelM.addEventListener('mouseup', function () {
                    if (!inputM.checked) {
                        ul.classList.add('on');
                        input.checked = false;
                        section.classList.remove('on');
                    } else {
                        ul.classList.remove('on');
                    }
                });
                // 下拉選單↑↑↑↑↑↑↑↑↑↑↑↑
            }


        });


    }


});









