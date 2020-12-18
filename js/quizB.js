// 搜尋區域元件
Vue.component("searchArea", {
    props: ["fields"],
    template: "#searchArea",
<<<<<<< HEAD

    methods: {
        searchField() {
            let selectField = $('.selectField option:selected').val();
            this.$emit('choosed', selectField);
        },
    },

});

// 表格區域元件
Vue.component("tableArea", {
    props: ["fields", "galaxys"],
    template: "#tableArea",
    data() {
        return {
            pages: {
                start: 0,
                end: 5,
            },
            galaxy: [],
        };
    },
    methods: {
        // 上一頁按鈕
        minusPages() {

            if (this.pages.start == 0 && this.pages.end == 5) {
                // do nothing
            } else {
                this.pages.start -= 5;
                this.pages.end -= 5;
                // this.$forceUpdate();
                $(".checkRow").prop("checked", false);
                $('#checkAll').prop("checked", false);
            }
        },
        // 下一頁按鈕
        plusPages() {
            // let totalPage = parseInt(this.fields.length / 5);
            // totalPage += (this.fields.length % 5 == 0) ? 0 : 1;
            if (this.pages.end > this.fields.length) {
                // do nothing
            } else {
                this.pages.start += 5;
                this.pages.end += 5;
                // this.$forceUpdate();
                $(".checkRow").prop("checked", false);
                $('#checkAll').prop("checked", false);
            }
        },
        // 全選或全不選checkbox
        checkAll() {
            if ($('#checkAll').prop("checked")) {
                $(".checkRow").prop("checked", true);
            } else {
                $(".checkRow").prop("checked", false);
            }
        },
        // 快速下架試題
        mutipleOff() {
            let offId = [];
            let checkRow = document.getElementsByClassName('checkRow');
            for (let i = 0; i < checkRow.length; i++) {
                if (checkRow[i].checked) {
                    offId.push(checkRow[i].closest('tr').querySelector('.gNumber').innerText);
                }
            }
            // console.log(offId);
            // let that = this;
            $.ajax({
                type: 'POST',
                url: 'quizRD.php',
                data: { offId },
                // dataType: 'json',
                success: function (res) {
                    // a = JSON.parse(res);
                    // console.log(a);
                    console.log(res);
                    vm.ajax();
                },
            });
        },
        // 新增試題按鈕
        createQuiz() {
            $('.quizModalBg').css("opacity", 1).css("z-index", 1);
        }

    }
});

// 欄位區域元件
Vue.component("tableRow", {
    props: ["galaxys", "pages"],
    template: '#tableRow',
    methods: {
        // 全選或全不選欄位checkbox
        checkOne() {
            let allItems = document.querySelectorAll(".checkRow");
            let checkAll = document.getElementById('checkAll');
            allItems.forEach(function () {
                let itemChecked = document.querySelectorAll(".checkRow:checked");
                if (itemChecked.length == allItems.length) {
                    checkAll.checked = true;
                } else {
                    checkAll.checked = false;
                }

            });
        }
    },
});

// 編輯和新增的彈跳視窗元件
Vue.component("createAndEdit", {
    props: ["fields"],
    template: "#createAndEdit",
    data() {
        return {
            levels: [
                {
                    diff: "初級",
                    qLevel: 1,
                },
                {
                    diff: "中級",
                    qLevel: 2,
                },
                {
                    diff: "高級",
                    qLevel: 3,
                },
                {
                    diff: "星系",
                }

=======

    methods: {
        searchField() {
            let selectField = $('.selectField option:selected').val();
            this.$emit('choosed', selectField);
        },
    },

});

// 表格區域元件
Vue.component("tableArea", {
    props: ["fields", "galaxys"],
    template: "#tableArea",
    data() {
        return {
            pages: {
                start: 0,
                end: 5,
            },
            galaxy: [],
        };
    },
    methods: {
        // 上一頁按鈕
        minusPages() {

            if (this.pages.start == 0 && this.pages.end == 5) {
                // do nothing
            } else {
                this.pages.start -= 5;
                this.pages.end -= 5;
                // this.$forceUpdate();
                $(".checkRow").prop("checked", false);
                $('#checkAll').prop("checked", false);
            }
        },

        // 下一頁按鈕
        plusPages() {
            // let totalPage = parseInt(this.fields.length / 5);
            // totalPage += (this.fields.length % 5 == 0) ? 0 : 1;
            if (this.pages.end > this.fields.length) {
                // do nothing
            } else {
                this.pages.start += 5;
                this.pages.end += 5;
                // this.$forceUpdate();
                $(".checkRow").prop("checked", false);
                $('#checkAll').prop("checked", false);
            }
        },

        // 全選或全不選checkbox
        checkAll() {
            if ($('#checkAll').prop("checked")) {
                $(".checkRow").prop("checked", true);
            } else {
                $(".checkRow").prop("checked", false);
            }
        },

        // 快速上架試題
        mutipleOn() {
            let onId = [];
            let checkRow = document.getElementsByClassName('checkRow');
            for (let i = 0; i < checkRow.length; i++) {
                if (checkRow[i].checked) {
                    onId.push(checkRow[i].closest('tr').querySelector('.gNumber').innerText);
                }
            }
            $.ajax({
                type: 'POST',
                url: 'quizRO.php',
                data: { onId },
                success: function (res) {
                    vm.ajax();
                    $(".checkRow").prop("checked", false);
                    $('#checkAll').prop("checked", false);
                },
            });
        },

        // 快速下架試題
        mutipleOff() {
            let offId = [];
            let checkRow = document.getElementsByClassName('checkRow');
            for (let i = 0; i < checkRow.length; i++) {
                if (checkRow[i].checked) {
                    offId.push(checkRow[i].closest('tr').querySelector('.gNumber').innerText);
                }
            }

            $.ajax({
                type: 'POST',
                url: 'quizRO.php',
                data: { offId },
                success: function (res) {
                    vm.ajax();
                    $(".checkRow").prop("checked", false);
                    $('#checkAll').prop("checked", false);
                },
            });
        },

        // 新增試題按鈕
        createQuiz() {
            $('.openQuiz').text('新增試題');
            $('.openBadge').text('新增徽章');
            $('.quizModalBg').css("opacity", 1).css("z-index", 1);
        },

    }
});

// 欄位區域元件
Vue.component("tableRow", {
    props: ["galaxys", "pages"],
    template: '#tableRow',
    methods: {
        // 全選或全不選欄位checkbox
        checkOne() {
            let allItems = document.querySelectorAll(".checkRow");
            let checkAll = document.getElementById('checkAll');
            allItems.forEach(function () {
                let itemChecked = document.querySelectorAll(".checkRow:checked");
                if (itemChecked.length == allItems.length) {
                    checkAll.checked = true;
                } else {
                    checkAll.checked = false;
                }

            });
        },

        addFromDB(where) {
            let str = `
                <div class="downQuestion">
                    <label class="checkLabel"><input type="checkbox" class="checkForQ"><span></span></label>
                    <div class="contentQ">
                        <textarea name="qContent" placeholder="請輸入題目內容"></textarea>
                        <ul>
                            <li>
                                <span>A</span>
                                <textarea name="sContent" placeholder="請輸入選項內容"></textarea>
                            </li>
                            <li>
                                <span>B</span>
                                <textarea name="sContent" placeholder="請輸入選項內容"></textarea>
                            </li>
                            <li>
                                <span>C</span>
                                <textarea name="sContent" placeholder="請輸入選項內容"></textarea>
                            </li>
                            <li>
                                <span>D</span>
                                <textarea name="sContent" placeholder="請輸入選項內容"></textarea>
                            </li>
                        </ul>
                    </div>
                    <div class="ansAndSta">
                        <select name="qAnswer">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                        <select name="qState">
                            <option value="1">on</option>
                            <option value="0">off</option>
                        </select>
                    </div>
                </div>
            `;

            $(where).find('.topFunction').after(str);
        },

        // 編輯試題按鈕
        editQuiz(e) {
            let gNumber = $(e.target).closest('tr').find('.gNumber').text();
            // console.log(gNumber);
            $('.openQuiz').text('編輯試題');
            $('.openBadge').text('編輯徽章');
            let that = this;
            $.ajax({
                type: 'POST',
                url: 'quizRE.php',
                data: { gNumber },
                dataType: 'json',
                success: function (res) {
                    console.log(res);
                    // field
                    let fieldName = res[0][0]["gName"];
                    $('.fieldName').attr("value", fieldName.slice(0, fieldName.length - 2));
                    // status
                    if (res[0][0]["gStatus"] == "0") {
                        $('.onOrOff option[value="0"]').attr("selected", true);
                        $('.onOrOff option[value="1"]').attr("selected", false);
                    } else {
                        $('.onOrOff option[value="1"]').attr("selected", true);
                        $('.onOrOff option[value="0"]').attr("selected", false);
                    }
                    // questions and options
                    // $('.downQuestion').remove();
                    // for (let i = 0; i < res[2].length; i++) {
                    //     switch (res[1][i]["qLevel"]) {
                    //         case "1":
                    //             that.addFromDB('div[data-level="1"]');
                    //             break;
                    //         case "2":
                    //             that.addFromDB('div[data-level="2"]');
                    //             break;
                    //         case "3":
                    //             that.addFromDB('div[data-level="3"]');
                    //             break;
                    //     }
                    // }
                    // for (let i = 0; i < res[2].length; i++) {
                    //     $('textarea[name = "qContent"]').eq(i).text(res[1][i]["qContent"]);
                    //     $(`select[name = "qAnswer"] option[value = ${res[1][i]["qAnswer"]}]`).eq(i).attr("selected", true);
                    //     $(`select[name = "qState"] option[value = ${res[1][i]["qState"]}]`).eq(i).attr("selected", true);

                    // }

                    // images
                    for (let i = 0; i < res[1].length; i++) {
                        switch (res[1][i]["bLevel"]) {
                            // 初級
                            case "1":
                                $('section[data-type="1"] input[name="iconImg"]').attr("value", res[1][i]["bIcon"]);
                                $('section[data-type="1"] input[name="badgeImg"]').attr("value", res[1][i]["bBadge"]);
                                $('section[data-type="1"] input[name="bgImg"]').attr("value", res[1][i]["bBadge"]);
                                break;
                            // 中級
                            case "2":
                                $('section[data-type="2"] input[name="iconImg"]').attr("value", res[1][i]["bIcon"]);
                                $('section[data-type="2"] input[name="badgeImg"]').attr("value", res[1][i]["bBadge"]);
                                break;
                            // 高級
                            case "3":
                                $('section[data-type="3"] input[name="iconImg"]').attr("value", res[1][i]["bIcon"]);
                                $('section[data-type="3"] input[name="badgeImg"]').attr("value", res[1][i]["bBadge"]);
                                break;
                            // 星系
                            case "0":
                                $('section[data-type="0"]')
                                break;
                        }
                    }

                    // show modal
                    $('.quizModalBg').css("opacity", 1).css("z-index", 1);
                },
            });

        }
    },
});

// 編輯和新增的彈跳視窗元件
Vue.component("createAndEdit", {
    props: ["fields"],
    template: "#createAndEdit",
    data() {
        return {
            levels: [
                {
                    diff: "初級",
                    qLevel: "1",
                },
                {
                    diff: "中級",
                    qLevel: "2",
                },
                {
                    diff: "高級",
                    qLevel: "3",
                },
                {
                    diff: "星系",
                    qLevel: "0",
                }

>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
            ],
            newFeildName: '',
        }
    },
    methods: {
        // 新增試題頁籤
        openQuiz() {
            $('.openQuiz').css('background-color', 'white');
            $('.openBadge').css('background-color', ' rgb(251, 247, 235)');
            $("#forQuiz").css('display', 'block');
            $("#forBadge").css('display', 'none');
        },
<<<<<<< HEAD
=======

>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
        // 新增徽章頁籤
        openBadge() {
            $('.openBadge').css('background-color', 'white');
            $('.openQuiz').css('background-color', ' rgb(251, 247, 235)');
            $("#forBadge").css('display', 'block').css('background-color', 'white');
            $("#forQuiz").css('display', 'none');
        },
<<<<<<< HEAD
=======

>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
        // 跳出彈跳視窗按鈕
        closeModal() {
            $('.quizModalBg').css("opacity", 0).css("z-index", -1);
            $('.selectAll').prop("checked", false);
<<<<<<< HEAD
            // let a = $('.downQuestion').has('textarea:empty');
            // console.log(a);
            // textareaNoContent.remove();
            // if(textareaNoContent. == 5){
            // }
        },
=======
        },

>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
        // 新增試題按鈕
        createQ(e) {
            let str = `
                <div class="downQuestion">
<<<<<<< HEAD
                <label class="checkLabel"><input type="checkbox" class="checkForQ"><span></span></label>
                <div class="contentQ">
                <textarea name="qContent[]" placeholder="請輸入題目內容"></textarea>
                <ul>
                    <li>
                    <span>A:</span>
                    <textarea name="sContent[]" placeholder="請輸入選項內容"></textarea>
                    </li>
                    <li>
                    <span>B:</span>
                    <textarea name="sContent[]" placeholder="請輸入選項內容"></textarea>
                    </li>
                    <li>
                    <span>C:</span>
                    <textarea name="sContent[]" placeholder="請輸入選項內容"></textarea>
                    </li>
                    <li>
                    <span>D:</span>
                    <textarea name="sContent[]" placeholder="請輸入選項內容"></textarea>
                    </li>
                </ul>
                </div>
                <div class="ansAndSta">
                <select name="qAnswer[]">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <select name"qState[]">
                    <option value="1">on</option>
                    <option value="0">off</option>
                </select>
                </div>
=======
                    <label class="checkLabel"><input type="checkbox" class="checkForQ"><span></span></label>
                    <div class="contentQ">
                        <textarea name="qContent" placeholder="請輸入題目內容"></textarea>
                        <ul>
                            <li>
                                <span>A</span>
                                <textarea name="sContent" placeholder="請輸入選項內容"></textarea>
                            </li>
                            <li>
                                <span>B</span>
                                <textarea name="sContent" placeholder="請輸入選項內容"></textarea>
                            </li>
                            <li>
                                <span>C</span>
                                <textarea name="sContent" placeholder="請輸入選項內容"></textarea>
                            </li>
                            <li>
                                <span>D</span>
                                <textarea name="sContent" placeholder="請輸入選項內容"></textarea>
                            </li>
                        </ul>
                    </div>
                    <div class="ansAndSta">
                        <select name="qAnswer">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                        <select name="qState">
                            <option value="1">on</option>
                            <option value="0">off</option>
                        </select>
                    </div>
>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
                </div>
            `;

            $(e.target).closest('.topFunction').after(str);
        },
<<<<<<< HEAD
=======

>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
        // 刪除試題按鈕
        deleteQ(e) {
            if ($(e.target).closest('.mainEdit').find('.checkForQ').prop("checked")) {
                swal({
                    title: "確定要刪除以勾選的題目",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                }).then((value) => {
                    if (value) {
                        let checkedQuestion = $(e.target).closest('.mainEdit').find('.downQuestion').has('.checkForQ:checked');
                        checkedQuestion.remove();
<<<<<<< HEAD
=======
                        $(e.target).closest('.topFunction').find('.selectAll').prop("checked", false);
>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
                    }
                });
            }
        },
<<<<<<< HEAD
=======

>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
        // 全選按鈕
        selectAll(e) {
            if ($(e.target).prop("checked")) {
                $(e.target).closest('.mainEdit').find('.checkForQ').prop("checked", true);
            } else {
                $(e.target).closest('.mainEdit').find('.checkForQ').prop("checked", false);
            }
        },
<<<<<<< HEAD
        // 確認新增按鈕
        update() {
            let quizModalBg = document.getElementsByClassName('quizModalBg')[0];
            let fieldName = document.getElementsByClassName('fieldName')[0];
            let
=======

        // 確認新增按鈕
        update() {
            let fieldName = $('.fieldName').val() + "星系";

            // for galaxy table
            let newGalaxy = [];
            let gName = $('input[name="iconImgGal"]').val().split("\\");
            let gImage = gName[(gName.length - 1)];
            let onOrOff = $('.onOrOff').val();
            newGalaxy.push(fieldName, gImage, onOrOff);


            // for quiz table
            let quiz = [];
            let question = [];
            let level = [];
            let ans = [];
            let status = [];
            let bgImg = [];

            // quiz
            $('textarea[name="qContent"]').each(function () {
                question.push($(this).val());
            });
            // level
            $('textarea[name="qContent"]').each(function () {
                level.push($(this).closest(".mainEdit").data("level"));
            });
            // answer
            $('select[name="qAnswer"]').each(function () {
                ans.push($(this).val());
            });
            // status
            $('select[name="qState"]').each(function () {
                status.push($(this).val());
            });
            // background
            $('input[name="bgImg"]').each(function () {
                let filePath = $(this).val().split("\\");
                let fileName = filePath[(filePath.length - 1)];
                bgImg.push(fileName);
            });

            quiz.push(fieldName, level, question, ans, status, bgImg);


            // for selection table
            let options = [];
            let sContent = [];
            let selections = [];

            // option
            $('textarea[name="sContent"]').each(function () {
                options.push($(this).prev('span').text());
            });
            // content
            $('textarea[name="sContent"]').each(function () {
                sContent.push($(this).val());
            });

            selections.push(options, sContent);

            // for badge table
            let badge = [];
            let bGalaxyName = [];
            let bPlanetName = [];
            let pImg = [];
            let bImg = [];
            let describe = [];

            // galaxy name
            bGalaxyName.push($('.fieldName').val());
            // planet name
            $('section.planetPic').each(function () {
                bPlanetName.push($(this).find('p').text());
            });
            // planet image
            $('input[name="iconImg"]').each(function () {
                let filePath = $(this).val().split("\\");
                let fileName = filePath[(filePath.length - 1)];
                pImg.push(fileName);
            });
            pImg.push('');
            // badge image
            $('input[name="badgeImg"]').each(function () {
                let filePath = $(this).val().split("\\");
                let fileName = filePath[(filePath.length - 1)];
                bImg.push(fileName);
            });
            // introduction
            $('textarea[name="describe"]').each(function () {
                describe.push($(this).val());
            });

            badge.push(bGalaxyName, bPlanetName, describe, pImg, bImg);

            // confirming all input and textarea have been filled
            let mustFill = [];
            mustFill.push($('.quizModal textarea, .quizModal input[type != "checkbox"]'));
            let mustFillArray = mustFill[0];
            let empty = [];
            for (let i = 0; i < mustFillArray.length; i++) {
                if (mustFillArray[i].value == '') {
                    empty.push(mustFillArray[i]);
                }
            }
            if (empty.length == 0) {
                $.ajax({
                    type: 'POST',
                    url: 'quizRC.php',
                    data: { newGalaxy, quiz, selections, badge },
                    success: function (res) {
                        // console.log(res);
                        if (res == "success") {
                            swal("已成功新增試題", "", "success").then((value) => {
                                if (value) {
                                    window.location.reload();
                                }
                            });
                        }

                    },
                });
            } else {
                swal("請填入所有的試題資訊", "", "warning");
            }
>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
        }
    },
});

// Vue Instance
let vm = new Vue({
    el: '#main',
    data: {
        fields: [],
        status: {
            on: 1,
            off: 0,
        },
        level: [],
        selectField: '%星系%',
        galaxys: [],
<<<<<<< HEAD
=======
        quizNum: 0,
>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
    },
    methods: {
        chooseField(selectField) {
            this.selectField = selectField;
            this.ajax();
        },
        ajax() {
            let selectField = this.selectField;
            let that = this;
            $.ajax({
                type: 'POST',
                url: 'quizRS.php',
                data: { selectField },
                dataType: 'json',
                success: function (res) {
                    // vm.galaxys = JSON.parse(res);
<<<<<<< HEAD
                    console.log(res);
=======
                    // console.log(res);
>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
                    vm.fields = res[0];
                    for (let i = 0; i < res[1].length; i++) {
                        if (res[1][i].gStatus == 1) {
                            res[1][i].gStatus = "上架";
                        } else {
                            res[1][i].gStatus = "下架";
                        }
                    }
                    vm.galaxys = res[1];
<<<<<<< HEAD
                    // console.log(vm.galaxys);

=======
                    vm.quizNum = parseInt(res[2].num);
>>>>>>> 1b31b660688f3f49ef769b0297f7bd13ceb75f05
                },
            });
        },
    },
    created() {
        this.ajax();
    },
});