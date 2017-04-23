/**
 * Created by barry-yang on 2017/4/23.
 */
$(function(){
    /*动态设置main的高度*/
    $('.main').height($(window).height()-80);
    $(window).resize(function(){
        $('.main').height($(window).height()-80);
    });
});