<?php

  include("linkFion.php");

   //建立SQL
   $sql = "SELECT * FROM member WHERE mNumber = ?";
   $mNumber = "M0001";
   $statement = $pdo->prepare($sql);
   $statement->bindValue(1 , "$mNumber");
   $statement->execute();
   $infoMember = $statement->fetchAll();
?>

<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cruise Coders | 個人檔案</title>
  <link rel="stylesheet" href="../css/main.css">
  <link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
<!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>


</head>
<body>
  <div class="wrap info">

      
      <?php
        include('layout/spacebackground.php');
        include('layout/header.php');
        ?>

      <main class="info_main">
          <div class="info_title"><p>個人檔案</p></div>

          <div class="info_area">
              <div class="op_circle right_cc">

                <div class="account_pic">
                  <?php
                      foreach($infoMember as $index => $row){
                  ?>
                    <img  src=<?=$row["mPhoto"]?> alt="no pic" name="mPhoto">
                  <?php } ?>
                </div>  

                <label for="upload_img" method="post" action="">
                
                  <img src="../images/info/plusCamera.png" alt="">
                  <input id="upload_img" type="file"   style="display: none;">
                  
                </label>
                  
              </div>
                
              
                <div class="left_cc">
                    <div class="notice_bar">

                   
                        <div><p>目前擁有 <span><?=$row["mCC"] ?></span> CC Point = NT$ 198&ensp;</p></div>
                    
                        <div><img src="../images/info/cc_coin.png" alt=""> </div>
                    </div>    

                    
                    <div class="info_card">
                        <form method="post" action="">
                            <div class="editFile">編輯檔案&ensp;<i class="fas fa-edit"></i></div>



                            <label>姓名&ensp;:&ensp;
                              
                                <input type="text"  class="input" value="<?=$row["mName"] ?>" name="mName" disabled/>
                              
                            </label>
                            <label>帳號&ensp;:&ensp;
                                <input type="text" class="input" value="<?=$row["mAccount"] ?>" name="mAccount" disabled/>
                            </label>
                            <label>密碼&ensp;:&ensp;

                                <input type="password" class="input" value="<?=$row["mPassword"] ?>" name="mPassword" disabled/>
                            </label>
                            <!-- 電子信箱設定成無法編輯 -->
                            <label>電子信箱&ensp;:&ensp;

                                <input type="email" class="input" value="<?=$row["mEmail"] ?>" name="mEmail" disabled/>
                            </label> 

                            <label>手機號碼&ensp;:&ensp;

                                <input name="phone" class="input" value="<?=$row["mPhone"] ?>" name="mPhone"  pattern=’\d{4}[-]\d{6}’ disabled/>
                            </label>
                            
                            <div class="sendBtn" type="submit">確認修改</div>

                        </form>

                        
                                           
                    </div>

                </div>

                
              
            </div>
        <!-- 第二部分 --- 收藏課程 / 文章 --- 開始 -->
        <div class="info_second">
            <div class="course_area">
              <p class="course_title">< 我的課程 /></p>
              <div class="course">
                  <div class="wrapGeneral ">
                  <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
                  <div class="favorites">
                    <i class="fas fa-heart"></i>
                  </div>
                  <a class="img" href="course_start_class.php">
                    <img src="../images/allCourse/course01.png" alt="">
                  </a>
                <!-- <a href="" class="Main"> -->
                <div class="c_Main">
                  <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
                  <div class="time">課程總長：120分鐘</div>
                  <div class="comment">
                    <div class="star">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <a class="text" href="">24則評價</a>
                  </div>
                  <div class="price">NT.1,200</div>
                </div>
                <!-- </a> -->
              </div>

              <div class="wrapGeneral ">
                  <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
                  <div class="favorites">
                    <i class="fas fa-heart"></i>
                  </div>
                  <a class="img" href="course_start_class.php">
                    <img src="../images/allCourse/course01.png" alt="">
                  </a>
                <!-- <a href="" class="Main"> -->
                <div class="c_Main">
                  <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
                  <div class="time">課程總長：120分鐘</div>
                  <div class="comment">
                    <div class="star">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <a class="text" href="">24則評價</a>
                  </div>
                  <div class="price">NT.1,200</div>
                </div>
                <!-- </a> -->
              </div>

              <div class="wrapGeneral ">
                  <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
                  <div class="favorites">
                    <i class="fas fa-heart"></i>
                  </div>
                  <a class="img" href="course_start_class.php">
                    <img src="../images/allCourse/course01.png" alt="">
                  </a>
                <!-- <a href="" class="Main"> -->
                <div class="c_Main">
                  <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
                  <div class="time">課程總長：120分鐘</div>
                  <div class="comment">
                    <div class="star">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <a class="text" href="">24則評價</a>
                  </div>
                  <div class="price">NT.1,200</div>
                </div>
                <!-- </a> -->
              </div>
               
      </div>
                
            
    </div>
        <div class="loveCourse_area">
            <p class="loveCourse_title">< 收藏課程 /></p>
            <div class="course">
          <!-- 一般課程 -->
          <div class="wrapGeneral ">
            <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
            <div class="favorites">
              <i class="fas fa-heart"></i>
            </div>
            <a class="img" href="course_start_class.php">
              <img src="../images/allCourse/course01.png" alt="">
            </a>
            <!-- <a href="" class="Main"> -->
            <div class="c_Main">
              <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
              <div class="time">課程總長：120分鐘</div>
              <div class="comment">
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <a class="text" href="">24則評價</a>
              </div>
              <div class="price">NT.1,200</div>
            </div>
            <!-- </a> -->
          </div>
          <div class="wrapGeneral ">
            <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
            <div class="favorites">
              <i class="fas fa-heart"></i>
            </div>
            <a class="img" href="course_start_class.php">
              <img src="../images/allCourse/course01.png" alt="">
            </a>
            <div class="c_Main">
              <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
              <div class="time">課程總長：120分鐘</div>
              <div class="comment">
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <a class="text" href="">24則評價</a>
              </div>
              <div class="price">NT.1,200</div>
            </div>
          </div>
          <div class="wrapGeneral ">
            <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
            <div class="favorites">
              <i class="fas fa-heart"></i>
            </div>
            <a class="img" href="course_start_class.php">
              <img src="../images/allCourse/course01.png" alt="">
            </a>
            <div class="c_Main">
              <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
              <div class="time">課程總長：120分鐘</div>
              <div class="comment">
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <a class="text" href="">24則評價</a>
              </div>
              <div class="price">NT.1,200</div>
            </div>
          </div>
          <!-- 募資課程 -->
          <div class="wrapFundraising">
            <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
            <div class="favorites">
              <i class="fas fa-heart"></i>
            </div>
            <a class="img" href="course_Fundraising.php">
              <img src="../images/allCourse/course01.png" alt="">
            </a>
            <div class="c_Main">
              <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
              <div class="time">課程總長：120分鐘</div>
              <div class="price">
                <p class="fundraising">募資中</p>
                <div class="text">
                  <p class="preOrder">預購價</p>
                  <p class="price">NT.900</p>
                </div>
              </div>
              <div class="progressbar">
                <span class="progress" style="width: 35%;"></span>
              </div>
              <div class="funNum">已募資 1/50 人</div>
            </div>
          </div>
          <div class="wrapFundraising">
            <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
            <div class="favorites">
              <i class="fas fa-heart"></i>
            </div>
            <a class="img" href="course_Fundraising.php">
              <img src="../images/allCourse/course01.png" alt="">
            </a>
            <div class="c_Main">
              <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
              <div class="time">課程總長：120分鐘</div>
              <div class="price">
                <p class="fundraising">募資中</p>
                <div class="text">
                  <p class="preOrder">預購價</p>
                  <p class="price">NT.900</p>
                </div>
              </div>
              <div class="progressbar">
                <span class="progress" style="width: 35%;"></span>
              </div>
              <div class="funNum">已募資 1/50 人</div>
            </div>
          </div>
          <div class="wrapFundraising">
            <img class="tImg" src="../images/allCourse/tImg01.jpg" alt="">
            <div class="favorites">
              <i class="fas fa-heart"></i>
            </div>
            <a class="img" href="course_Fundraising.php">
              <img src="../images/allCourse/course01.png" alt="">
            </a>
            <div class="c_Main">
              <p class="title" href="">HTML快速入門-張老闆帶你飛</p>
              <div class="time">課程總長：120分鐘</div>
              <div class="price">
                <p class="fundraising">募資中</p>
                <div class="text">
                  <p class="preOrder">預購價</p>
                  <p class="price">NT.900</p>
                </div>
              </div>
              <div class="progressbar">
                <span class="progress" style="width: 35%;"></span>
              </div>
              <div class="funNum">已募資 1/50 人</div>
            </div>
          </div>

        </div>






        </div>
            
            
            <!-- ------ 收藏文章 ------ -->
            
            <p class="love_title">< 收藏文章 /></p>
            

          <div class="info_article">
            <div class="aic_1">
                <div class="love_arc"><img src="../images/info/Group 1008@2x.png" alt=""></div>
                <img src="../images/info/w_c.jpeg" alt="">  
                <div><p>2020最佳的十個套件推薦</p></div> 
            </div>

            <div class="aic_2">
                <div class="love_arc"><img src="../images/info/Group 1008@2x.png" alt=""></div>
                <img src="../images/info/w_c.jpeg" alt=""> 
                <div><p>2020最佳的十個套件推薦</p></div> 

             
            </div>

            <div class="aic_3">
                <div class="love_arc"><img src="../images/info/Group 1008@2x.png" alt=""></div>
                <img src="../images/info/w_c.jpeg" alt="">  
                <div><p>2020最佳的十個套件推薦</p></div> 

            </div>


          </div>
          <!-- ------ 徽章成就 ------ -->
          <p class="achievement_title">< 徽章成就 /></p>
          <div class="info_achievement">
              <div class="big_a">
                  <div><img src="../images/big_badge/html5徽章.png" alt=""></div>
                  <div><img src="../images/big_badge/jQ勳章.png" alt=""></div>
                  <div><img src="../images/big_badge/sass.png" alt=""></div>
                  <div><img src="../images/big_badge/css3徽章.png" alt=""></div>
                  <div><img src="../images/big_badge/php徽章.png" alt=""></div>
                  <div><img src="../images/big_badge/js徽章.png" alt=""></div>
                  <div><img src="../images/big_badge/mysql徽章.png" alt=""></div>   
              </div>

              <div class="little_a">
                
                 <div><img src="../images/trial/badge/html1.png" alt=""></div>
                 <div><img src="../images/trial/badge/html2.png" alt=""></div>
                 <div><img src="../images/trial/badge/html3.png" alt=""></div>
                 <div><img src="../images/trial/badge/css1.png" alt=""></div>
                 <div><img src="../images/trial/badge/css2.png" alt=""></div>
                 <div><img src="../images/trial/badge/css3.png" alt=""></div>
                 <div><img src="../images/trial/badge/sass1.png" alt=""></div>
                 <div><img src="../images/trial/badge/sass2.png" alt=""></div>
                 <div><img src="../images/trial/badge/sass3.png" alt=""></div>
                 <div><img src="../images/trial/badge/php1.png" alt=""></div>
                 <div><img src="../images/trial/badge/php2.png" alt=""></div>
                 <div><img src="../images/trial/badge/php3.png" alt=""></div>
                 <div><img src="../images/trial/badge/js1.png" alt=""></div>
                 <div><img src="../images/trial/badge/js2.png" alt=""></div>
                 <div><img src="../images/trial/badge/js3.png" alt=""></div>
                 <div><img src="../images/trial/badge/jq1.png" alt=""></div>
                 <div><img src="../images/trial/badge/jq2.png" alt=""></div>
                 <div><img src="../images/trial/badge/jq3.png" alt=""></div>
                 <div><img src="../images/trial/badge/mysql1.png" alt=""></div>
                 <div><img src="../images/trial/badge/mysql2.png" alt=""></div>
                 <div><img src="../images/trial/badge/mysql3.png" alt=""></div>
              </div>
          </div>
        </div>

      </main>
   

    <?php
    include('layout/footer.php');
    ?>

  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <script src="../js/header.js"> </script>
  <script>
    $(document).ready(function(){
      $('.editFile').click(function(){
        // alert('hi');
        $('label.input').attr('disabled', false);
        // $('label.input').attr({
        //   disabled: false,
        // });
        
      });
      // $('.sendBtn').click(function(){
      //   $('label.input').attr('disabled', true);
      // })

    });
  </script>
</body>
</html>