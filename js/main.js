//=============================================================================
// 文件名:   main.js
// 创建人:   han.zw
// 创建日期:  2016-01-15
// @:  hanangjie@163.com


var hzw = {
//左侧导航
    leftNav: function () {

        var left = '<li class="header">主导航</li>' +
            '<li class="treeview " privileges="XTSZ">' +
            '<a href="javascript:">' +
            ' <span>前端规范</span> <i class="fa fa-angle-left pull-right"></i>' +
            '</a>' +
            '<ul class="treeview-menu">' +
            '<li><a href="doc/role-css.html" type="ajax">css规范</a></li>' +
            '<li><a href="doc/role-html.html" type="ajax">html规范</a></li>' +
            '</ul>' +

            '</li>';
        $("#sidebar-menu").html(left);
        $("#sidebar-menu a[type='ajax']").each(function () {
           $(this).click(function(e){
               e.preventDefault();
               var href=$(this).attr("href");
               $.ajax({
                   url:href
               }).done(function(e){
                   $(".content").html(e);
                   $(window).scrollTop(0);
               });
           });
        });


    }
    , GetQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)return r[2];
        return "";
    },
    GetQueryObject: function () {
        var r = window.location.search.substr(1);
        var arr = r.split("&");
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i].split("=")[0]] = arr[i].split("=")[1];
        }
        return obj;
    },

    loading: function () {
        var html = '<div class="modal modal_loading" tabindex="-1" role="dialog" data-toggle="modal" aria-hidden="true">' +
            '<div class="modal-dialog  modal-sm" >' +
            '<div class="modal-content" style="background:none;box-shadow: none !important;">' +
            '<div class="modal-body" style="overflow:hidden;text-align:center;">' +
            '<div class="overlay">' +
            '<i class="fa fa-refresh fa-spin"></i>' +
            '</div>' +
            '</div>' +
            ' </div>' +
            '</div>' +
            '</div>';
        $("body").after(html);
        $(".modal_loading").modal();
    },
    loadingClose: function () {
        $(".modal_loading").modal("hide").remove();

    }
};

