<?php
include('./articleR.php')
?>

<!DOCTYPE html>
<html lang="zh-Hant">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cruise Coder | 太空補給站</title>
  <link rel="stylesheet" href="./../css/main.css">
  <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
</head>

<body>
  <div class="wrap article">
    <?php
    include('layout/spacebackground.php');
    include('layout/header.php');
    ?>
    <main>
      <img src="./../images/article/spaceshipinterior.png" class="bottomLayer" alt="圖片無法顯示">
      <img src="./../images/article/astronaut1.png" class="astronaut1" alt="圖片無法顯示">
      <img src="./../images/article/astronaut2.png" class="astronaut2" alt="圖片無法顯示">
      <img src="./../images/article/astronaut3.png" class="astronaut3" alt="圖片無法顯示">
      <img src="./../images/article/planet1.png" class="planet1" alt="圖片無法顯示">
      <img src="./../images/article/planet2.png" class="planet2" alt="圖片無法顯示">
      <img src="./../images/article/planet3.png" class="planet3" alt="圖片無法顯示">
      <img src="./../images/article/planet4.png" class="planet4" alt="圖片無法顯示">
      <div class="allContent">
        <div class="blur">
          <img src="./../images/article/spaceshipinterior.png" alt="圖片無法顯示">
        </div>
        <div class="backColor"></div>
        <div class="panel">
          <img src="./../images/article/panel.png" alt="圖片無法顯示">
        </div>
        <div class="panelTop">
          <h2>&lt;太空補給站&#47;&gt;</h2>
          <input type="text" placeholder="專欄關鍵字" class="search">
          <img src="./../images/article/battery.png" class="battery" alt="圖片無法顯示">
          <p class="prePage">返回</p>
          <div class="content">
            <div class="articleTitle">
              <?php
              foreach ($data as $index => $row) {
              ?>
                <div class="articleInside">
                  <div class="articleImageScale">
                    <img src="./../images/article/<?= $row["aImage"] ?>" alt="圖片無法顯示" class="articleImage">
                  </div>
                  <h4><?= $row["aTitle"] ?></h4>
                </div>
              <?php
              }
              ?>
              <!-- <div class="articleInside">
                <div class="articleImageScale">
                  <img src="./../images/article/topBook.jpg" alt="圖片無法顯示" class="articleImage">
                </div>
                <h4>十大好書推薦</h4>
              </div>
              <div class="articleInside">
                <div class="articleImageScale">
                  <img src="./../images/article/editor.jpg" alt="圖片無法顯示">
                </div>
                  <h4>編輯器推薦</h4>
              </div>
              <div class="articleInside">
                <div class="articleImageScale">
                  <img src="./../images/article/study.jpg" alt="圖片無法顯示">
                </div>
                <h4>自學力網站資源</h4>
              </div>
              <div class="articleInside">
                <div class="articleImageScale">
                  <img src="./../images/article/software.jpg" alt="圖片無法顯示">
                </div>
                <h4>軟體推薦</h4>
              </div>
              <div class="articleInside">
                <div class="articleImageScale">
                  <img src="./../images/article/tools.jpg" alt="圖片無法顯示">
                </div>
                <h4>好用套件推薦</h4>
              </div> -->
            </div>
            <div class="articleContent none">

              <div id="feedBack"></div>

            </div>
          </div>
        </div>
      </div>
      <div class="ecgBack colse">
        <img src="./../images/article/panel2.png" alt="圖片無法顯示">
        <svg>
          <polyline points="360,100 310,100 305,95 300,105 295,90 290,120 280,80 270,100 250,160 230,60 210,130 200,90 195,110 190,100 186,90 175,120 168,70 165,100 150,140 130,100 125,80 115,110 110,100 100,115 95,85 90,110 85,90 80,100 30,100" class="ecg" />
        </svg>
      </div>
      <div class="radarBack close">
        <img src="./../images/article/radarBack.png" class="radarBackImage" alt="圖片無法顯示">
        <div class="radar colse">
          <div class="radarLine"></div>
          <div class="radarShadow"></div>
        </div>
      </div>
      <div class="bluelight"></div>
    </main>
    <?php
    include('layout/footer.php');
    ?>
  </div>
  <script src="../js/header.js"></script>
  <script src="./../js/article.js"></script>
</body>

</html>