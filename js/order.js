// 後台_訂單管理 (Tiffany)

window.addEventListener('load', doFirst);
function doFirst() {

    // $('.orderInfo').hide();

    // 燈箱
    $(function () {
        // 點擊按鈕，開啟訂單資訊
        $("button.view").on("click", function () {
            $(".orderInfo").addClass("-on");

        });

        // 點擊按鈕，關閉訂單資訊
        $("img.close").on("click", function () {
         
            setTimeout(() => {
                $(".orderInfo").removeClass("-on ");
            }, 100);
        });
    });

}

