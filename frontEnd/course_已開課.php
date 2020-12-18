<?php
?>

<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cruise Coders | 已開課</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/main.css">
    <!-- <link rel="stylesheet" href="../css/course.css"> -->

</head>

<body>
  <!-- include('layout/login.php'); -->
  <div class="wrap galaxy">
    <?php
    include('layout/spacebackground.php');
    include('layout/header.php');
    ?>
    <main id="sell-page">
      <section id="class-info">
        <h1>這樣做設計思考更有用！UX有感提案</h1>
        <div class="row-sell">
          <div class="video">
            <iframe src="https://www.youtube.com/embed/T7GQTD_X02w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <!-- 評分 -->
          <div class="score">
            <div class="nums"></div>
            <!-- data-score 計算好的分數滿分5 data-color 指定的顏色 -->
            <div class="stars" data-score="5" data-color="#fcc93d">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <span>(2)</span>
          </div>
          <div class="infos">
            <!-- 價格 -->
            <div class="price">
              <div class="formal-price">
                <span>售價</span>
                <span>NT$1,980</span>
              </div>
            </div>
            <!-- 按鈕 -->
            <div class="btns">
              <button class="btn submit">立即購買</button>
              <button class="btn fav"><img class="svg" src="../images/course/heart.svg" alt=""></button>
            </div>
          </div>
        </div>
      </section>
      <section id="class-detail">
        <ul class="tab">
          <li class="active"><a href="#class">課程資訊</a></li>
          <li><a href="#score">課程評價</a></li>
          <li><a href="#qa">留言發問</a></li>
        </ul>
        <!-- 課程資訊 -->
        <div class="tab-content active" id="class">
          <h2>&lt; 課程資訊 &#47;&gt;</h2>
          <div class="info">
            <h4>關於課程</h4>
            <div class="row">
              <div class="col">
                <img src="../images/course/1.png" alt="">
                <p>課程時長<br>4小時0分鐘</p>
              </div>
              <div class="col">
                <img src="../images/course/2.png" alt="">
                <p>目標購買數<br>46為同學</p>
              </div>
              <div class="col">
                <img src="../images/course/3.png" alt="">
                <p>沒有期限<br>不限觀看次數</p>
              </div>
            </div>
          </div>
          <div class="info">
            <h4>課程簡介</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui nulla reprehenderit voluptatem perspiciatis mollitia adipisci fugit ab minima itaque eos, non laboriosam, porro dicta corrupti. Non inventore neque hic veniam recusandae, libero culpa quibusdam ullam et iusto cumque itaque animi quasi voluptatibus quod id aperiam corporis deleniti, molestias repudiandae!<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatem quidem, eum dolorum cupiditate, veniam dolorem doloribus hic enim obcaecati laboriosam est, voluptate harum illo? Inventore soluta nostrum repudiandae officia.</p>
          </div>
          <div class="info">
            <h4>關於老師 張老闆</h4>
            <div class="person">
              <div class="pic">
                <img src="../images/course/5.png" alt="">
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloribus nobis aspernatur beatae, modi eveniet suscipit accusantium similique culpa cumque a quia atque ad, omnis perferendis doloremque ex quam unde.</p>
            </div>
          </div>
        </div>
        <!-- 評價 -->
        <div class="tab-content" id="score">
          <h2>&lt; 課程評價 &#47;&gt;</h2>
          <!-- 評分 -->
          <div class="score">
            <div class="nums">5.0</div>
            <div class="col">
              <div class="stars" data-score="5" data-color="red">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <span>2則評價</span>
            </div>
          </div>
          <!-- 評分內容 -->
          <div class="score-posts comments">
            <!-- 評分 1 -->
            <div class="comment post">
              <div class="row">
                <div class="pic"><img src="../images/course/7.png" alt=""></div>
                <div class="content">
                  <div class="post-header">
                    <h5>Kuo0122</h5>
                    <span class="date">2020.10.26</span>
                  </div>
                  <div class="stars" data-score="5" data-color="red">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="text-box">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sit. Deleniti excepturi praesentium delectus quae at minima rerum quidem facilis, consectetur qui ea a blanditiis iusto ab mollitia nihil nobis!</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 評分 2 -->
            <div class="comment post">
              <div class="row">
                <div class="pic"><img src="../images/course/8.png" alt=""></div>
                <div class="content">
                  <div class="post-header">
                    <h5>Andrew</h5>
                    <span class="date">2020.10.26</span>
                  </div>
                  <div class="stars" data-score="5" data-color="red">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="text-box">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sit. Deleniti excepturi praesentium delectus quae at minima rerum quidem facilis, consectetur qui ea a blanditiis iusto ab mollitia nihil nobis!</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 查看更多 -->
            <button class="btn more">查看更多</button>
          </div>
        </div>
        <!-- 留言 -->
        <div class="tab-content" id="qa">
          <h2>&lt; 留言發問 &#47;&gt;</h2>
          <div class="comments">
            <!-- 發問 1 -->
            <div class="comment post">
              <div class="row">
                <div class="pic"><img src="../images/course/4.png" alt=""></div>
                <div class="content">
                  <div class="post-header">
                    <h5>tiffany0622</h5>
                    <span class="date">2020.10.26</span>
                  </div>
                  <div class="text-box">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sit. Deleniti excepturi praesentium delectus quae at minima rerum quidem facilis, consectetur qui ea a blanditiis iusto ab mollitia nihil nobis!</p>
                  </div>
                </div>
              </div>
              <!-- 回覆1 -->
              <div class="row reply">
                <div class="pic"><img src="../images/course/5.png" alt=""></div>
                <div class="content">
                  <div class="post-header">
                    <h5>tiffany0622</h5>
                    <span class="date">2020.10.26</span>
                  </div>
                  <div class="text-box">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sit. Deleniti excepturi praesentium delectus quae at minima rerum quidem facilis, consectetur qui ea a blanditiis iusto ab mollitia nihil nobis!</p>
                  </div>
                </div>
              </div>
              <!-- 回覆2 -->
              <div class="row reply">
                <div class="pic"><img src="../images/course/5.png" alt=""></div>
                <div class="content">
                  <div class="post-header">
                    <h5>tiffany0622</h5>
                    <span class="date">2020.10.26</span>
                  </div>
                  <div class="text-box">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sit. Deleniti excepturi praesentium delectus quae at minima rerum quidem facilis, consectetur qui ea a blanditiis iusto ab mollitia nihil nobis!</p>
                  </div>
                </div>
              </div>
              <!-- 底部按鈕 -->
              <div class="btns">
                <button class="btn reply">
                  <img src="../images/course/reply.svg" alt="">
                  <span>回覆</span>
                </button>
              </div>
            </div>
            <!-- 發問 2 -->
            <div class="comment post">
              <div class="row">
                <div class="pic"><img src="../images/course/4.png" alt=""></div>
                <div class="content">
                  <div class="post-header">
                    <h5>tiffany0622</h5>
                    <span class="date">2020.10.26</span>
                  </div>
                  <div class="text-box">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sit. Deleniti excepturi praesentium delectus quae at minima rerum quidem facilis, consectetur qui ea a blanditiis iusto ab mollitia nihil nobis!</p>
                  </div>
                </div>
              </div>
              <!-- 底部按鈕 -->
              <div class="btns">
                <button class="btn reply">
                  <img src="../images/course/reply.svg" alt="">
                  <span>回覆</span>
                </button>
              </div>
            </div>
            <!-- 查看更多 -->
            <button class="btn more">查看更多</button>
          </div>
        </div>
      </section>
      <a href="#0" class="top"><img src="" alt=""></a>
    </main>
    <?php
    include('layout/footer.php');
    ?>
    <script src="../js/galaxy.js"></script>
    <!-- <script src="../js/app.min.js"></script> -->
    <script>
      var class_ajax = {
        name: "這樣做設計思考更有用！UX有感提案",
        price: 1200,
        image: "../images/article/panel.png",
        status: "已開課",
      }
    </script>
        <script>
      //svg
      function enable_svg(){
        $('img.svg').each(function(){
          var $img = $(this);
          var imgID = $img.attr('id');
          var imgClass = $img.attr('class');
          var imgURL = $img.attr('src');
          $.get(imgURL, function(data) {
              // Get the SVG tag, ignore the rest   
              var $svg = $(data).find('svg');
        
              // Add replaced image's ID to the new SVG   
              if(typeof imgID !== 'undefined') {
                  $svg = $svg.attr('id', imgID);
              }
              // Add replaced image's classes to the new SVG   
              if(typeof imgClass !== 'undefined') {
                  $svg = $svg.attr('class', imgClass+' replaced-svg');
              }
              // Remove any invalid XML tags as per http://validator.w3.org   
              $svg = $svg.removeAttr('xmlns:a');
              // Check if the viewport is set, if the viewport is not set the SVG wont't scale.   
              if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                  $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
              }
              // Replace image with new SVG   
              $img.replaceWith($svg);
          },'xml');
        });
      }
      enable_svg()

      $(function(){
        // 頭部
        // 會員資訊展開
        $('header div.headerRight img#member').click(function(){
          $('header div.headerRight div.memberNav').fadeToggle(300)
          // 其他關閉
          $('header div.headerRight div.shoppingFancybox').fadeOut(300)
          $('header div.headerMiddle').fadeOut(300)
        })
        $('header div.headerRight img#cart').click(function(){
          $('header div.headerRight div.shoppingFancybox').fadeToggle(300)
          // 其他關閉
          $('header div.headerRight div.memberNav').fadeOut(300)
          $('header div.headerMiddle').fadeOut(300)
        })
        $('header .menu-toggle').click(function(){
          $('header div.headerMiddle').fadeToggle(300)
          // 其他關閉
          $('header div.headerRight div.shoppingFancybox').fadeOut(300)
          $('header div.headerRight div.memberNav').fadeOut(300)
        })

        // 數字更新
        function price_style(array){
          let count = 0
          let price = ""
          for(var i=array.length-1; i>=0;i--){
            count++
            if(count%3==0){
              price = ','+array[i]+price
            }else{
              price = array[i]+price
            }
            // console.log(price)
          }
          return price
        }

        // 購物車更新
        function cart_update(price){
          let pricenums = $('.shoppingTotal>p').data('price')
          let classnums = $('.shoppingTotal>p').data('total')
          let html = "總計 {{num}} 堂課"
          let html2 = "NT$ {{price}}"
          let html3 = ""
          pricenums = pricenums+price
          classnums++
          $('.shoppingTotal>p').attr('data-price',pricenums)
          $('.shoppingTotal>p').attr('data-total',classnums)
          
          html = html.replace(/{{num}}/g,classnums)
          html2 = html2.replace(/{{price}}/,price_style(pricenums.toString().split('')))

          html3 = html+"<br><span>"+html2+"</span>"
          $('.shoppingTotal>p').html(html3)
        }

        // 加入購物車
        $('#class-info .btns .submit').click(function(){
          if(!$(this).hasClass('added')){
            let price_array = class_ajax.price.toString().split('')
            let price = ""
            let total = 0
            price = price_style(price_array)
            // 加入
            let html = '<div class="shopping"><div class="itemImage"><img src="{{image}}" alt="無法顯示圖片"></div><div class="itemText"><p class="courseTitle">{{title}}</p><div class="itemTextButtom"><p class="status">{{status}}</p><p class="price">NT$ {{price}}</p></div></div></div>'
            html = html.replace(/{{image}}/g,class_ajax.image)
                      .replace(/{{title}}/g,class_ajax.name)
                      .replace(/{{status}}/g,class_ajax.status)
                      .replace(/{{price}}/g,price)
            $('header div.headerRight div.shoppingFancybox').prepend(html)
            cart_update(class_ajax.price)
            alert('已加入購物車')
            // 開啟購物車
            $('header div.headerRight div.shoppingFancybox').fadeToggle(300)
            // 其他關閉
            $('header div.headerRight div.memberNav').fadeOut(300)
            $('header div.headerMiddle').fadeOut(300)
            $(this).addClass('added')
            $('#cart-box').attr('data-count',$('#cart-box').data('count')+1)
          }else{
            alert('已加入購物車！')
          }
        })

        //測試用
        $('.fav').click(function(){
          $(this).toggleClass('active')
        })
        $('#class-detail .tab li a').click(function(e){
          e.preventDefault()
          $(this).parent().addClass('active')
            .siblings('li').removeClass('active')

          let $content = $($(this).attr('href'))
          $content
            .fadeIn()
            .siblings('.tab-content').fadeOut()
        })

        // 評分星星
        $('.stars[data-score]').each(function(){
          let score = parseInt($(this).data('score'))
          let color = $(this).data('color')
          // console.log(score,color)
          $(this).css({
            backgroundImage: "linear-gradient(to right,"+color+" 0%,"+color+" "+score/5*100+"%,transparent "+score/5*100+"%,#ccc "+score/5*100+"% ,#ccc 100%)"
          })
          // 分數
          if($(this).prev('.nums').is($(this).prev('.nums'))){
            $(this).prev('.nums').text(score.toFixed(1))
            // $(this).prev('.nums').text(Math.floor(score/10).toFixed(1))
          }
          if($(this).parent().prev('.nums').is($(this).parent().prev('.nums'))){
            $(this).parent().prev('.nums').text(score.toFixed(1))
          }

        })
      })
    </script>
  </div>
</body>

</html>