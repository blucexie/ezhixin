/**
 * Created by blucexie on 2017/3/28.
 */
$(function () {
	  var timer = setTimeout(function () {
          $('#pay').fadeOut(2000, function () {
              $('#pay').html('正在努力生生成文件').fadeIn(2000);
          })
      },2000);

     
	  //验证是否支付成功
    if(getQueryString("trade_status")=="TRADE_FINISHED"||getQueryString("trade_status")=="TRADE_SUCCESS"){
    	 $('#downsubmit input[name="fy_trade"]').attr("value",getQueryString("out_trade_no"));
    	 $('#downsubmit').submit();
    	 clearTimeout(timer);
    	 $('#pay').html('下载完成，请妥善保存(重新下载须再次付费)');
    }else{
   	 $('#pay').html('支付失败');
    }
	 
	// 获取连接中的参数
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null)
			return unescape(r[2]);
		return null;
	} 
		
});