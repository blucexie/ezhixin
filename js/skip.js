/**
 * Created by blucexie on 2017/3/28.
 */
$(function () {
	//截取url中的参数
	var urlParams = encodeURI(location.href).substring(location.href.indexOf("?") + 1); 
	
	// 构造ajax请求
	$.ajax({
		url : "/aliPay",
		type : "post",
		data : {
			"fy_file_name":urlParams
		},
		success : function(data) {
				data=JSON.parse(data);
			    $('#alipaysubmit').attr("action",data.fy_msg.alipayGateway);
		        $('#alipaysubmit input[name="service"]').attr("value",data.fy_msg.service);
		        $('#alipaysubmit input[name="sign_type"]').attr("value",data.fy_msg.signType);
		        $('#alipaysubmit input[name="sign"]').attr("value",data.fy_msg.sign);
		        $('#alipaysubmit input[name="partner"]').attr("value",data.fy_msg.partner);
		        $('#alipaysubmit input[name="seller_id"]').attr("value",data.fy_msg.sellerId);
		        $('#alipaysubmit input[name="_input_charset"]').attr("value",data.fy_msg.inputCharset);
		        $('#alipaysubmit input[name="payment_type"]').attr("value",data.fy_msg.paymentType);
		        $('#alipaysubmit input[name="notify_url"]').attr("value",data.fy_msg.notifyUrl);
		        $('#alipaysubmit input[name="subject"]').attr("value",data.fy_msg.subject);
		        $('#alipaysubmit input[name="total_fee"]').attr("value",data.fy_msg.totalFee);
		        $('#alipaysubmit input[name="body"]').attr("value",data.fy_msg.body);
		        $('#alipaysubmit input[name="out_trade_no"]').attr("value",data.fy_msg.tradeNo);
		        $('#alipaysubmit input[name="return_url"]').attr("value",data.fy_msg.returnUrl);
		        $('#alipaysubmit').submit();
		}
	});
		
});