<?php

?>

<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>宇宙漫遊</title>
    <link rel="stylesheet" href="./../css/main.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
</head>

<body>
    <div class="wrap checkOut">
        <?php
        include 'layout/spacebackground.php';
        include 'layout/header.php';
        ?>
        <main>
            <h2>
                < 結帳頁面 />
            </h2>
            <section class="block"></section>
            <section class="line"></section>
            <h3>購買列表</h3>
            <div class="shoppingList">
                <div class="course">
                    <div class="top">
                        <div class="title">
                            <p class="courseTitle">課程名稱</p>
                            <p class="courseName">一變應萬變：RWD 響應式網頁設計</p>
                        </div>
                        <a href=""><i class="far fa-times-circle"></i></a>
                    </div>
                    <p class="type">已開課</p>
                    <p class="price">NT,1200</p>
                </div>
                <div class="course">
                    <div class="top">
                        <div class="title">
                            <p class="courseTitle">課程名稱</p>
                            <p class="courseName">一變應萬變：RWD 響應式網頁設計</p>
                        </div>
                        <a href=""><i class="far fa-times-circle"></i></a>
                    </div>
                    <p class="type">已開課</p>
                    <p class="price">NT,1200</p>
                </div>
            </div>
            <div class="price">
                <div class="discount">
                    <div class="ccPoint">
                        <p>現有 19,850 CC Point，您可以折抵NT$198，欲折</p>
                        <input type="text" value="198">
                        <p>元</p>
                    </div>
                </div>
                <div class="sum">
                    <div class="ccPoint">
                        <p class="text">CC Point 折抵</p>
                        <p class="price">- NT$ 198</p>
                    </div>
                    <div class="total">
                        <p class="text">總計</p>
                        <div class="price">NT$ 3,180</div>
                    </div>
                    <div class="pay">
                        <p class="text">結帳總金額：</p>
                        <div class="price">NT$ 2,982</div>
                    </div>
                </div>
            </div>
            <div class="payment">
                <div class="title">填寫付款資料</div>
                <form class="infon">
                    <div class="text">
                        <p>付款方式-信用卡</p>
                        <div class="img">
                            <img src="../images/allCourse/creditcard.png" alt="">
                        </div>
                    </div>
                    <p class="note">（ * 為必填欄位）</p>
                    <div class="name">
                        <label class="text">
                            * 持卡人姓名
                        </label>
                        <input type="text">
                    </div>
                    <div class="phoneNum">
                        <label class="text">
                            * 手機號碼
                        </label>
                        <input type="text">
                    </div>
                    <div class="creditCardNum">
                        <label class="text">
                            * 信用卡卡號
                        </label>
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                    </div>
                    <div class="date">
                        <label class="text">
                            * 有效日期
                        </label>

                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                        </select>
                        <label for="" class="months">月</label>

                        <select>
                            <option value="">2020</option>
                            <option value="">2021</option>
                            <option value="">2022</option>
                            <option value="">2023</option>
                            <option value="">2024</option>
                        </select>
                        <label for="" class="years">年</label>
                    </div>
                    <div class="creditCardCsc">
                        <label class="text">
                            * 背面末三碼
                        </label>
                        <input type="text">
                    </div>
                </form>
                <button>確認並送出</button>
            </div>

        </main>
        <?php
        include 'layout/footer.php';
        ?>
    </div>
</body>

</html>