//checkbox全選功能
var tbody = document.getElementsByTagName('tbody')[0];
var checkbox = tbody.querySelectorAll('input');
var checkAll = document.getElementsByClassName('checkAll')[0];

checkAll.addEventListener('click', function () {
    if (checkAll.checked) {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true;
        };
    } else {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        };
    }
});

//table顏色交錯
var tr = tbody.querySelectorAll('tr');

for (let i = 0; i < checkbox.length; i++) {
    if (i % 2 === 0) {
        tr[i].style.cssText = 'background-color: #FBF7EB';
    }
}


// 新增試題功能
var addQuiz = document.getElementsByClassName('add')[0];
var quizModalBg = document.getElementsByClassName('quizModalBg')[0];
addQuiz.addEventListener('click', function () {
    quizModalBg.style.cssText = 'opacity: 1; z-index: 1;';
});


//跳出modal視窗，叉叉按鈕
var closeModal = document.getElementsByClassName('closeModal')[0];
closeModal.addEventListener('click', function () {
    quizModalBg.style.cssText = 'opacity: 0; z-index: -1;';
});

//下架試題按鈕功能
var off = document.getElementsByClassName('off')[0];
off.addEventListener('click', function () {
    // var choose = checkbox.some(e => e.checked);
    // console.log(choose);
    // if () {

    // } else {

    // }
    alert('確定要刪除以勾選的題目');
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checkbox[i].closest('tr').remove();
        }
    }


});

//難易度選擇星系時，無法新增題目
var quizLevel = document.getElementsByClassName('quizLevel')[0];
var mainEdit = document.getElementsByClassName('mainEdit')[0];

quizLevel.addEventListener('change', function () {
    if (quizLevel.value == 0) {
        mainEdit.style.cssText = 'display:none;';
    } else {
        mainEdit.style.cssText = 'display:block;';
    }
});


//新增題目按鈕
var createQ = document.getElementsByClassName('createQ')[0];
var topFunction = document.getElementsByClassName('topFunction')[0];
var selectAll = document.getElementsByClassName('selectAll')[0];

createQ.addEventListener('click', function () {
    var str = `
    <div class="downQuestion">
    <label><input type="checkbox" class="checkForQ"><span></span></label>
    <div class="contentQ">
    <textarea placeholder="請輸入題目內容"></textarea>
    <ul>
        <li>
        <span>A:</span>
        <textarea placeholder="請輸入選項內容"></textarea>
        </li>
        <li>
        <span>B:</span>
        <textarea placeholder="請輸入選項內容"></textarea>
        </li>
        <li>
        <span>C:</span>
        <textarea placeholder="請輸入選項內容"></textarea>
        </li>
        <li>
        <span>D:</span>
        <textarea placeholder="請輸入選項內容"></textarea>
        </li>
    </ul>
    </div>
    <div class="ansAndSta">
    <select>
        <option value="">A</option>
        <option value="">B</option>
        <option value="">C</option>
        <option value="">D</option>
    </select>
    <select>
        <option value="">on</option>
        <option value="">off</option>
    </select>
    </div>
    </div>
`;
    //將新增的標籤插入到div.topFunction的結尾標籤之後
    topFunction.insertAdjacentHTML("afterend", str);

    //若有新增題目都會重新清除全選
    var mainEdit = document.getElementsByClassName('mainEdit')[0];
    var checkForQ = mainEdit.querySelectorAll('.checkForQ');
    (function () {
        selectAll.checked = false;
        for (let i = 0; i < checkForQ.length; i++) {
            checkForQ[i].checked = false;
        };
    })();


    // 彈跳視窗內的checkbox全選功能
    selectAll.addEventListener('click', function () {
        if (selectAll.checked) {
            for (let i = 0; i < checkForQ.length; i++) {
                checkForQ[i].checked = true;
            };
        } else {
            for (let i = 0; i < checkForQ.length; i++) {
                checkForQ[i].checked = false;
            };
        }
    });

});

//刪除題目按鈕
var deleteQ = document.getElementsByClassName('deleteQ')[0];
// deleteQ.addEventListener('click', function () {
//     var mainEdit = document.getElementsByClassName('mainEdit')[0];
//     var checkForQ = mainEdit.querySelectorAll('.checkForQ');

//     for (let i = 0; i < checkForQ.length; i++) {
//         if(checkForQ[i].checked){
//             checkForQ[i].
//         }
//     };
// });