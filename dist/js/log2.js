$(function(){
	$("#enter").click(function(){
				var str = `username=${$("#emil_phon_count").val()}&password=${$("#phon_password_count").val()}`;

					$.ajax({
						method: "post",
						url: "../test.php?type=login",
						data: str, 
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
					}
			})
	})
					



				//注册

$("#content_dl_three_Toregister").click(function(){
	var str = `username=${$("#content_dl_one_iphone_count").val()}&password=${$("#content_dl_tow_word_count").val()}&repassword=${$("#content_dl_tow_aword_count").val()}&email=${$("#content_dl_one_email_count").val()}`;
					$.ajax({
						method: "post",
						url: "../test.php?type=register",
						data: str,
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
						}
					})
})
})