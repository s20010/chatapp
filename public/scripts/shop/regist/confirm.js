"use strict";

(function () {
    // 「戻る」ボタン押下時に呼び出されます。
    var btnBack_onclick = function (event) {
        var $form = $("#form");
        $form.attr("action", "/shop/regist/input");
        $form.submit();
    };

    // 「登録」ボタン押下時に呼び出されます。
    var btnRegist_onclick = function (event) {
        var $form = $("#form");
        $form.attr("action", "/shop/regist/complete");
        $form.submit();
    };

    // ドキュメント読み込み完了時に呼び出されます。
    var document_onready = function (event) {
        $("#btn-back").on("click", btnBack_onclick);
        $("#btn-regist").on("click", btnRegist_onclick).focus();
    };

    $(document).ready(document_onready);
})();