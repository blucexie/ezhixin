/**
 * Created by blucexie on 2017/3/28.
 */
$(function () {
    $('.uls ul li').click(function () {
        window.open("skip.html?"+$(this).attr('id'));
        $('.downloadLayer').show();
        $('.zhez').show();

        $('.downBtn_y').click(function () {
            $('.downloadLayer').hide();
            $('.zhez').hide();
        });
        $('.downBtn_n').click(function () {
            $('.downloadLayer').hide();
            $('.orderLayer').show();
        });

    });
    $('.close').click(function () {
        $('.downloadLayer').hide();
        $('.orderLayer').hide();
        $('.zhez').hide();
    });
    $('.noDown').click(function () {
        $('.orderLayer').show();
        $('.zhez').show();
    });
    $('.orderC').click(function () {
        $('.orderLayer').hide();
        $('.zhez').hide();
    });
    $('.orderD').click(function () {
        var orderN = $('#orderNum').val();
        if(orderN==''){
            alert('请输入订单号')
        }else{
            window.open("pay.html?out_trade_no="+orderN+"&trade_status=TRADE_SUCCESS");

        }
    });
});