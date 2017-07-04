/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-04 16:55:19
*/

$(document).ready(function(){
    // 卡片旋转
    function Imageflow(thisImage) {
        thisImage.css({
            'z-index': 30
        });
        if (thisImage.hasClass('img-left')) {
            var $middle = $('.imgContainer img').filter('.img-middle'),
                $right = $('.imgContainer img').filter('.img-right');
            $middle.css({
                'z-index': 20
            });
            $right.css({
                'z-index': 10
            });
            $('.imgContainer img').attr('class','');
            thisImage.addClass('img-middle');
            $middle.addClass('img-right');
            $right.addClass('img-left');
            
        }
        if (thisImage.hasClass('img-middle')) {
            return false;
        }
        if (thisImage.hasClass('img-right')) {
            var $middle = $('.imgContainer img').filter('.img-middle'),
                $left = $('.imgContainer img').filter('.img-left');
            $middle.css({
                'z-index': 20
            });
            $left.css({
                'z-index': 10
            });
            $('.imgContainer img').attr('class','');
            thisImage.addClass('img-middle');
            $middle.addClass('img-left');
            $left.addClass('img-right');
        }
    }
    $('[data-pack="200"]').on('click', function () {
        // 更改样式
        $('[data-pack]').removeClass('act');
        $('[data-pack="200"]').addClass('act');
        var $thisImage = $('.imgContainer img[data-pack="200"]');
        // 卡片旋转
        Imageflow($thisImage);
        // 换图片
        $('#introduceImg').attr('src','images/introduce-200.jpg');
        $('#expensesImgTitle').attr('src','images/ex-title-200.jpg');
        $('#expensesImgTable').attr('src','images/table-200.png');
    });
    $('[data-pack="48"]').on('click', function () {
        $('[data-pack]').removeClass('act');
        $('[data-pack="48"]').addClass('act');
        var $thisImage = $('.imgContainer img[data-pack="48"]');
        // 卡片旋转
        Imageflow($thisImage);
        // 换图片
        $('#introduceImg').attr('src','images/introduce-48.jpg');
        $('#expensesImgTitle').attr('src','images/ex-title-48.jpg');
        $('#expensesImgTable').attr('src','images/table-48.png');
    });
    $('[data-pack="18"]').on('click', function () {
        $('[data-pack]').removeClass('act');
        $('[data-pack="18"]').addClass('act');
        var $thisImage = $('.imgContainer img[data-pack="18"]');
        // 卡片旋转
        Imageflow($thisImage);
        // 换图片
        $('#introduceImg').attr('src','images/introduce-18.jpg');
        $('#expensesImgTitle').attr('src','images/ex-title-18.jpg');
        $('#expensesImgTable').attr('src','images/table-18.png');
    });
});