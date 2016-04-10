//=============================================================================
// 文件名:   main.js
// 创建人:   han.zw
// 创建日期:  2016-01-15
// @:  hanangjie@163.com


var hzw = {
//左侧导航
    leftNav: function () {
      /*  $("#sidebar-menu a[type='ajax']").each(function () {
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
        });*/


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

function setScroll(){
    $(".sidebar").slimscroll({
        height: $(window).height() - $(".main-header").height() + "px",
        size: "3px",
        alwaysVisible: true
    })
}
$(function(){
    var Workspace = Backbone.Router.extend({
        routes: {
            "*actions" : "docDefaultRoute"
        },
        docDefaultRoute : function(actions){
            $("#sidebar-menu .treeview").find("li").removeClass("active");
            var href=actions+".html";
            $("[href='#"+actions+"']").closest("li").addClass("active");
            $(".loading").show();
                $.ajax({
                    url:href
                }).done(function(e){
                    $(".loading").hide();
                    $(".content").html(e);
                    $(window).scrollTop(0);
                }).fail(function(){
                    $(".loading").hide();
                });
        }

    });
    var app_router = new Workspace;
    Backbone.history.start();

    //左侧导航滚动
    setScroll();
    $(window).on("resize",setScroll);
    //左侧导航内容填充
    hzw.leftNav();
});

