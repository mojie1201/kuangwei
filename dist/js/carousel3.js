window.onload = function(){


	$.ajax({
		url:"../json/header_top.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#man_down #top_man'))
			}
		}
	})
	$.ajax({
		url:"../json/header_bottom.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#man_down #bottom_man'))
			}
		}
	})
	$.ajax({
		url:"../json/header_woman_top.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#woman_down #top_woman'))
			}
		}
	})
	$.ajax({
		url:"../json/header_woman_bottom.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#woman_down #bottom_woman'))
			}
		}
	})
	$.ajax({
		url:"../json/header_child_bottom.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#child_down #top_child'))
			}
		}
	})
	$.ajax({
		url:"../json/header_child_bottom.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#child_down #bottom_child'))
			}
		}
	})
	$.ajax({
		url:"../json/hot_specifiy.json",
		type:"GET",
		success: function(arr){
				$(`<a href="">${arr[0].title}</a><a href=""><img src="${arr[0].img}" alt=""></a>`).appendTo($('#hot_sale #list #specific_product #hot_man'))
				$(`<a href="">${arr[1].title}</a><a href=""><img src="${arr[1].img}" alt=""></a>`).appendTo($('#hot_sale #list #specific_product #hot_woman'))
				$(`<a href="">${arr[2].title}</a><a href=""><img src="${arr[2].img}" alt=""></a>`).appendTo($('#hot_sale #list #specific_product #hot_cross'))
				$(`<a href="">${arr[3].title}</a><a href=""><img src="${arr[3].img}" alt=""></a>`).appendTo($('#hot_sale #list #specific_product #hot_wear'))
		}
	})
	//登陆注册的点击
	var Olog_log = document.getElementById("log_log");
	var Olog_register = document.getElementById("log_register");
	var Olog_b = document.getElementById("log_b");
	//倒三角
	var Otriangle = document.getElementById("triangle");
	var Otriangle2 = document.getElementById("triangle2");
	//放大镜
	var Ofind_link = document.getElementById("find_link")

	//放大镜里边的内容
	var OSearch_box = document.getElementById("Search_box");
	//登陆注册里边的内容
	var Odisembark1 = document.getElementById("disembark1");

	//input框
	var Oquery_box = document.getElementById("query_box");
	var Omagnifying = document.getElementById("magnifying");
	var Ofork = document.getElementById("fork");
	var Oquery_box_text = document.getElementById("query_box_text")




	/////////////////////////////////测试
	var Oceshi = document.getElementById("ceshi")



	//登陆注册里边的内容
	var Olog_content = document.getElementById("log_content");
	var Oregister_content = document.getElementById("register_content");


	var frequency = 0;
	var frequency2 = 0;
	//input复选框选选中后
	Oquery_box.onfocus = function(){
		Oquery_box_text.style.display = "none";
	}
	Oquery_box.onblur = function(){
		Oquery_box_text.style.display = "block";
	}
	//登陆点击
	Olog_log.onclick = function(){
		if(frequency % 2 == 0){
			if(frequency2 % 2 != 0){
				change2(0);
			}
				change(400);
				Otriangle.style.display = "block";
				Otriangle2.style.display = "none";
				frequency++;
				startMove2(Olog_content,{
					opacity:100
				},function(){
					Olog_content.style.display = "block"
					Oregister_content.style.display = "none"
				})
		}else{
			change(0);
			startMove2(Olog_content,{
					opacity:0
				},function(){
					Olog_content.style.display = "none"
					Oregister_content.style.display = "none"
				})
			startMove2(Oregister_content,{
					opacity:0
				},function(){
					Olog_content.style.display = "none"
					Oregister_content.style.display = "none"
				})
			Otriangle.style.display = "none"
			Otriangle2.style.display = "none"
			OSearch_box.style.overflow = "hidden"
			frequency++;
		}
	}
	//注册点击
	log_register.onclick = function(){
		if(frequency % 2 == 0){
			if(frequency2 % 2 != 0){
				change2(0);
			}
			change(400);
				Otriangle.style.display = "block"
				Otriangle2.style.display = "none"
				OSearch_box.style.overflow = "hidden"
				startMove2(Oregister_content,{
					opacity:100
				},function(){

					Oregister_content.style.display = "block"
					Olog_content.style.display = "none"
				})
				frequency++;
		
		}else{
			change(0);
			startMove2(Oregister_content,{
					opacity:0
				},function(){
					Oregister_content.style.display = "none"
					Olog_content.style.display = "none"
				})
			startMove2(Olog_content,{
					opacity:0
				},function(){
					Olog_content.style.display = "none"
					Oregister_content.style.display = "none"
				})
			Otriangle.style.display = "none"
			Otriangle2.style.display = "none"
			frequency++;
		}
	}
	//登陆注册图标点击
	Olog_b.onclick = function(){
		if(frequency % 2 == 0){
			if(frequency2 % 2 != 0){
				change2(0);
			}
				change(400);
				Otriangle.style.display = "block"
				Otriangle2.style.display = "none"
				OSearch_box.style.overflow = "hidden"
				startMove2(Olog_content,{
					opacity:100
				},function(){
					Olog_content.style.display = "block"
					Oregister_content.style.display = "none"
				})
				frequency++;
		
		}else{
			change(0);
			startMove2(Olog_content,{
					opacity:0
				},function(){
					Olog_content.style.display = "none"
					Oregister_content.style.display = "none"
				})
			startMove2(Oregister_content,{
					opacity:0
				},function(){
					Olog_content.style.display = "none"
					Oregister_content.style.display = "none"
				})
			Otriangle.style.display = "none"
			Otriangle2.style.display = "none"
			frequency++;
		}
	}
	//放大镜点击
	Ofind_link.onclick = function(){
		if(frequency2 % 2 == 0){
			if(frequency % 2 != 0){
				change(0);
			}
				change2(100);
				Otriangle2.style.display = "block"
				Otriangle.style.display = "none"
				Odisembark1.style.overflow = "hidden"
				Oquery_box.style.display = "block";
				Omagnifying.style.display = "block";
				Ofork.style.display = "block";
				Oquery_box_text.style.display = "block";
				frequency2++;
		}else{
			change2(0);
			Otriangle2.style.display = "none"
			Otriangle.style.display = "none"
			Oquery_box.style.display = "none";
			Omagnifying.style.display = "none";
			Ofork.style.display = "none";
			Oquery_box_text.style.display = "none";
			frequency2++;
		}
		
	}
	//复选框里边X
	Ofork.onclick = function(){
		change2(0);
			Otriangle2.style.display = "none"
			Otriangle.style.display = "none"
			Oquery_box.style.display = "none";
			Omagnifying.style.display = "none";
			Ofork.style.display = "none";
			frequency2++;
	}

	var scrollTop = null;
	window.onscroll = function(){
			scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			var len = scrollTop + (document.documentElement.clientHeight - 100 ) / 2;
			startMove(len);
		}

			
			//移入移出的节点
			var Oman_a = document.getElementById("man_a");
			var Owoman_a = document.getElementById("woman_a");
			var Ochild_a = document.getElementById("child_a");
			//变化的节点
			var Oman_down = document.getElementById("man_down");
			var Owoman_down = document.getElementById("woman_down");
			var Ochild_down = document.getElementById("child_down");

			//男的显示隐藏的节点
			var Otop_man = document.getElementById("top_man");
			var Oparting1 = document.getElementById("parting1");
			var Obottom_man = document.getElementById("bottom_man");

			//女的显示隐藏节点
			var Otop_woman = document.getElementById("top_woman");
			var Oparting2 = document.getElementById("parting2");
			var Obottom_woman = document.getElementById("bottom_woman");

			//儿童显示隐藏
			var Otop_child = document.getElementById("top_child");
			var Oparting3 = document.getElementById("parting3");
			var Obottom_child = document.getElementById("bottom_child");

			//男的
			Oman_a.onmouseover = function(){
				startMove2( Oman_down,{
					opacity:100,
				})
				Oman_down.style.display = "block";
				Otop_man.style.display = "block";
				Oparting1.style.display = "block";
				Obottom_man.style.display = "block";

			}
			Oman_down.onmouseover = function(){
				startMove2( Oman_down,{
					opacity:100,
				})
				Oman_down.style.display = "block";
				Otop_man.style.display = "block";
				Oparting1.style.display = "block";
				Obottom_man.style.display = "block";

			}
			Oman_a.onmouseout = function(){
				startMove2(Oman_down,{
					opacity:0,
				})
				Oman_down.style.display = "none";
				Otop_man.style.display = "none";
				Oparting1.style.display = "none";
				Obottom_man.style.display = "none";
			}
			Oman_down.onmouseout = function(){
				startMove2( Oman_down,{
					opacity:100,
				})
				Oman_down.style.display = "none";
				Otop_man.style.display = "none";
				Oparting1.style.display = "none";
				Obottom_man.style.display = "none";
			}
			//女的
			Owoman_a.onmouseover = function(){
				startMove2( Owoman_down,{
					opacity:100
				})
				Owoman_down.style.display = "block";
				Otop_woman.style.display = "block";
				Oparting2.style.display = "block";
				Obottom_woman.style.display = "block";
			}
			Owoman_a.onmouseout = function(){
				startMove2(Owoman_down,{
					opacity:0
				})
				Owoman_down.style.display = "none";
				Otop_woman.style.display = "none";
				Oparting2.style.display = "none";
				Obottom_woman.style.display = "none";
			}
			Owoman_down.onmouseover = function(){
				startMove2( Owoman_down,{
					opacity:100
				})
				Owoman_down.style.display = "block";
				Otop_woman.style.display = "block";
				Oparting2.style.display = "block";
				Obottom_woman.style.display = "block";
			}
			Owoman_down.onmouseout = function(){
				startMove2(Owoman_down,{
					opacity:0
				})
				Owoman_down.style.display = "none";
				Otop_woman.style.display = "none";
				Oparting2.style.display = "none";
				Obottom_woman.style.display = "none";
			}
			//孩子
			Ochild_a.onmouseover = function(){
				startMove2( Ochild_down,{
					opacity:100
				})
				Ochild_down.style.display = "block";
				Otop_child.style.display = "block";
				Oparting3.style.display = "block";
				Obottom_child.style.display = "block";
			}
			Ochild_a.onmouseout = function(){
				startMove2(Ochild_down,{
					opacity:0
				})
				Ochild_down.style.display = "none";
				Otop_child.style.display = "none";
				Oparting3.style.display = "none";
				Obottom_child.style.display = "none";
			}
			Ochild_down.onmouseover = function(){
				startMove2( Ochild_down,{
					opacity:100
				})
				Ochild_down.style.display = "block";
				Otop_child.style.display = "block";
				Oparting3.style.display = "block";
				Obottom_child.style.display = "block";
			}
			Ochild_down.onmouseout = function(){
				startMove2(Ochild_down,{
					opacity:0
				})
				Ochild_down.style.display = "none";
				Otop_child.style.display = "none";
				Oparting3.style.display = "none";
				Obottom_child.style.display = "none";
			}
			var timer3 = null;
			//聊天框的js
			function startMove(iTarget){
				/*alert(iTarget);*/
				var Ochar_move = document.getElementById("char_move");
				clearInterval(timer3);
				timer3 = setInterval(function(){
					var speed = (iTarget - Ochar_move.offsetTop) / 8;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if(Ochar_move.offsetTop == iTarget){
						clearInterval(timer3);

					}else{
						Ochar_move.style.top = Ochar_move.offsetTop + speed - 20 +"px";
					}
				},30)
			}
	//注册里边的内容
	var Oyes_register = document.getElementById("yes_register");
	var Oyes_register_logo = document.getElementById("yes_register_logo")

	Oyes_register.onmouseover = function(){
		Oyes_register.style.color = "black";
		Oyes_register.style.background = "white";
		Oyes_register_logo.style.backgroundImgae = "../images/头部/arrow1.png";
		Oyes_register_logo.style.backgroundPosition = "-22px -3px";
	}
	Oyes_register.onmouseout = function(){
		Oyes_register.style.color = "white";
		Oyes_register.style.background = "black";
		Oyes_register_logo.style.backgroundImgae = "../images/头部/arrow1.png";
		Oyes_register_logo.style.backgroundPosition = "-3px -3px";

	}

	//登陆小黑框
	var Oenter = document.getElementById("enter");
	var Oenter_logo = document.getElementById("enter_logo")

	Oenter.onmouseover = function(){
		Oenter.style.color = "black";
		Oenter.style.background = "white";
		Oenter_logo.style.backgroundImgae = "../images/头部/sprites_header_footer.png";
		Oenter_logo.style.backgroundPosition = "-44px -164px";
	}
	Oenter.onmouseout = function(){
		Oenter.style.color = "white";
		Oenter.style.background = "black";
		Oenter_logo.style.backgroundImgae = "../images/头部/sprites_header_footer.png";
		Oenter_logo.style.backgroundPosition = "-10px -164px";

	}
	
	var Opassword_count = document.getElementById("password_count");
	var Opassword_count_yes = document.getElementById("password_count_yes");
	var Opassword_count_yes_ok = document.getElementById("password_count_yes_ok")
	var num_yes = 0
	Opassword_count.onclick = function(){
		if(num_yes % 2 == 0){
			Opassword_count_yes.style.height = "18px";
			Opassword_count_yes.style.width = "18px";
			Opassword_count_yes.style.border = "2px solid #000";
			Opassword_count_yes.style.marginTop = "2px";
			Opassword_count_yes_ok.style.display = "block";
			Opassword_count_yes.style.backgroundPosition = "0px -200px";
			num_yes++;
		}else{
			Opassword_count_yes.style.height = "14px";
			Opassword_count_yes.style.width = "14px";
			Opassword_count_yes.style.border = "1px solid #b7b7b7";
			Opassword_count_yes.style.marginTop = "4px";
			Opassword_count_yes.style.marginLeft = "20px";
			Opassword_count_yes_ok.style.display = "none";
			Opassword_count_yes.style.position = "absolute";
			Opassword_count_yes.style.left = "0";
			num_yes++;
		}
		
	}
			//轮播的文字显示js
		$("#slideshow_link").find("a").hover(function(){
					$("#slideshow_link").find("a").attr("id", "");
					$("#slideshow_row").find("img").stop().animate({opacity:0}).eq($(this).index()).stop().animate({opacity:1});
					$(this).attr("id", 'show');
					
		})

		///////////////////////////////////////////////////
		var Ocontent_dl_one_sex_man = document.getElementById("content_dl_one_sex_man");
	var Ocontent_dl_one_sex_woman = document.getElementById("content_dl_one_sex_woman");

	var Oselect_sexman = document.getElementById("select_sexman");
	var Oselect_sexwoman = document.getElementById("select_sexwoman");

	var Oselect_sexman_img = document.getElementById("select_sexman_img");
	var Oselect_sexwoman_img = document.getElementById("select_sexwoman_img")

	Ocontent_dl_one_sex_man.onclick = function(){
			Oselect_sexman.style.border = "2px solid #000";
			Oselect_sexman.style.height = "18px";
			Oselect_sexman.style.position = "absolute";
			Oselect_sexman.style.width = "18px";
			Oselect_sexman.style.marginTop = "13px";
			Oselect_sexman.style.marginLeft = "-20px";
			Oselect_sexman_img.style.display = "block";
			Oselect_sexwoman.style.border = "1px solid #999";
			Oselect_sexwoman.style.height = "14px";
			Oselect_sexwoman.style.position = "absolute";
			Oselect_sexwoman.style.width = "14px";
			Oselect_sexwoman.style.marginTop = "13px";
			Oselect_sexwoman.style.marginLeft = "-20px";
			Oselect_sexwoman_img.style.display = "none";

	}
	Ocontent_dl_one_sex_woman.onclick = function(){
			Oselect_sexwoman.style.border = "2px solid #000";
			Oselect_sexwoman.style.height = "18px";
			Oselect_sexwoman.style.position = "absolute";
			Oselect_sexwoman.style.width = "18px";
			Oselect_sexwoman.style.marginTop = "13px";
			Oselect_sexwoman.style.marginLeft = "-20px";
			Oselect_sexwoman_img.style.display = "block";
			Oselect_sexman.style.border = "1px solid #999";
			Oselect_sexman.style.height = "14px";
			Oselect_sexman.style.position = "absolute";
			Oselect_sexman.style.width = "14px";
			Oselect_sexman.style.marginTop = "13px";
			Oselect_sexman.style.marginLeft = "-20px";
			Oselect_sexman_img.style.display = "none";

	}	


	$("#content_dl_three_Toregister").stop().hover(function(){
		$("#content_dl_three_Toregister").css("background","white").css("color","black");
		$("#logo_count").css("margin","-164px 0 0 -43px")
	},function(){
		$("#content_dl_three_Toregister").css("background","black").css("color","white");
		$("#logo_count").css("margin","-164px 0 0 -10px");
	})


	//注册的事件
	//手机号 失去焦点的时候
	$("#content_dl_one_iphone_count").blur(function(){
		//去掉空格操作
		var  content_dl_one_iphone_count = $("#content_dl_one_iphone_count").val().replace(/ /ig, "")
		$("#content_dl_one_iphone_count").val(content_dl_one_iphone_count);

		if(!content_dl_one_iphone_count){
			$("#content_dl_one_iphone").css("border","1px solid red");
			$("#phone_hint").text("请输入手机号码！").css("color","red");
		}else if(content_dl_one_iphone_count.length != 11){
			$("#content_dl_one_iphone").css("border","1px solid red");
			$("#phone_hint").text("请输11位有效的中国号码！").css("color","red");
		}else{
			var ovlue = true;
			for(var i = 0; i < content_dl_one_iphone_count.length;i++){
				if(!yesNum(content_dl_one_iphone_count[i])){
					index = false;
					break;
				}
			}
			if(ovlue){
				$("#content_dl_one_iphone").css("border","1px solid #999");
				$("#phone_hint").text("手机号码正确！").css("color","green");
			}else{
				$("#content_dl_one_iphone").css("border","1px solid red");
				$("#phone_hint").text("请输入正确的手机号！").css("color","red");
			}	
		}
	});

	//邮箱  失去焦点
	$("#content_dl_one_email_count").blur(function(){
		var content_dl_one_email_count = $("#content_dl_one_email_count ").val().replace(/ /ig, "");
		$("#content_dl_one_email_count").val(content_dl_one_email_count);

		if(!content_dl_one_email_count){
			$("#content_dl_one_email").css("border","1px solid red")
			$("#email_hint").text("请输入电子邮箱！").css("color","red");
		}else if(content_dl_one_email_count.length < 6 || content_dl_one_email_count.length > 18){
			$("#content_dl_one_email").css("border","1px solid red")
			$("#email_hint").text("电子邮箱长度为6~18位！").css("color","red");
		}else if(content_dl_one_email_count[0] >=0  && content_dl_one_email_count[0] <= 9){
			$("#content_dl_one_email").css("border","1px solid red")
			$("#email_hint").text("电子邮箱必须以英文字母开头！").css("color","red");
		}else{
			var  ovlue= true;
				for(var i = 0; i < content_dl_one_email_count.length;i++){
					if(!yesEmail(content_dl_one_email_count[i])){
						 ovlue = false;
						break;
					}
				}
			if(ovlue){
				$("#content_dl_one_email").css("border","1px solid #999")
				$("#email_hint").text("电子邮箱正确！").css("color","green");
				}else{
					$("#content_dl_one_email").css("border","1px solid red")
					$("#email_hint").text("请输入正确的电子邮箱！").css("color","red");
				}
			}	
	})


	//密码失去焦点的验证
	var  content_dl_tow_word_count = null;
	$("#content_dl_tow_word_count").blur(function(){
		content_dl_tow_word_count = $("#content_dl_tow_word_count ").val().replace(/ /ig, "");
		$("#content_dl_tow_word_count").val(content_dl_tow_word_count);

		if(!content_dl_tow_word_count){
			$("#content_dl_tow_word").css("border","1px solid red");
			$("#word_hint").text("密码不能为空！").css("color","red");
		}else if(content_dl_tow_word_count.length < 6 || content_dl_tow_word_count.length >= 16){
			$("#content_dl_tow_word").css("border","1px solid red");
			$("#word_hint").text("密码长度为6~18位！").css("color","red");
		}else{
			$("#content_dl_tow_word").css("border","1px solid #999");
			$("#word_hint").text("密码强度等级为：中").css("color","green");
		}
	})

	//验证密码失去焦点
	var content_dl_tow_aword_count = null;
		$("#content_dl_tow_aword_count").blur(function(){
		 content_dl_tow_aword_count = $("#content_dl_tow_aword_count ").val().replace(/ /ig, "");
		$("#content_dl_tow_aword_count").val(content_dl_tow_aword_count);

		if(!content_dl_tow_aword_count){
			$("#content_dl_tow_aword").css("border","1px solid red");
			$("#aword_hint").text("密码不能为空！").css("color","red");
			$("#content_dl_tow_aword_count").val("");
		}else if(content_dl_tow_aword_count != content_dl_tow_word_count){
			$("#content_dl_tow_aword").css("border","1px solid red");
			$("#aword_hint").text("两次密码输入不一致，重新输入！").css("color","red");
			$("#content_dl_tow_aword_count").val("");
		}else{
			$("#content_dl_tow_aword").css("border","1px solid #999");
			$("#aword_hint").text("密码验证正确！").css("color","green");
		}
	})

	//验证码获取焦点
		

		var Ocontent_dl_three_auth = document.getElementById("content_dl_three_auth");
		var Ocontent_dl_three_auth_count = document.getElementById("content_dl_three_auth_count");
		var Ocontent_dl_three_authin = document.getElementById("content_dl_three_authin");
		var Ocut = document.getElementById("cut");
		var Oauth_hint = document.getElementById("auth_hint")

		Ocontent_dl_three_authin.innerHTML = codd(4);
		var arr1 = Ocontent_dl_three_authin.innerHTML ;
		Ocontent_dl_three_authin.onclick = function(){
			Ocontent_dl_three_authin.innerHTML = codd(4);
			arr1 = Ocontent_dl_three_authin.innerHTML
		}
		Ocut.onclick = function(){
			Ocontent_dl_three_authin.innerHTML = codd(4);
			arr1 = Ocontent_dl_three_authin.innerHTML
		}

		Ocontent_dl_three_auth_count.onblur = function(){
			var arr2 = Ocontent_dl_three_auth_count.value;
			if(arr2 != arr1){
				Oauth_hint.style.color = "red"
				Oauth_hint.innerHTML = "验证码错误，请重新输入"
				Ocontent_dl_three_auth_count.innerHTML = "";
				Ocontent_dl_three_auth.style.border = "1px solid red";
				Ocontent_dl_three_authin.innerHTML = codd(4);
				arr1 = Ocontent_dl_three_authin.innerHTML
			}else{
				Oauth_hint.style.color = "green"
				Oauth_hint.innerHTML = "验证码正确";
				Ocontent_dl_three_auth.style.border = "1px solid #999"
			}	
		}

		$("#content_dl_three_note_count").blur(function(){
			 content_dl_three_note_count = $("#content_dl_three_note_count ").val().replace(/ /ig, "");
			$("#content_dl_three_note_count").val(content_dl_three_note_count);

			if(!content_dl_three_note_count){
				$("#note_hint").text("验证码不能为空").css("color","red");
				$("#content_dl_three_note").css("border","1px solid red");
			}else if(content_dl_three_note_count.length != 6){
				$("#note_hint").text("请输入正确的短信验证码").css("color","red");
				$("#content_dl_three_note").css("border","1px solid red");
			}else{
				var ovlue = true;
				for(var i = 0; i < content_dl_three_note_count.length;i++){
					if(!yesNum(content_dl_three_note_count[i])){
						index = false;
						break;
					}
				}
				if(ovlue){
					$("#note_hint").text("短信验证码正确！").css("color","green");
				$("#content_dl_three_note").css("border","1px solid #999");
				}else{
					$("#note_hint").text("短信验证码不能为空").css("color","red");
				$("#content_dl_three_note").css("border","1px solid red");
				}	
			}
		})

		var notein_num = 0;
		$("#content_dl_three_notein").click(function(){
			notein_num++;
			if(notein_num  == 1){
				$("#note_hint").text("短信验证码已发送！").css("color","green");
				$("#content_dl_three_note").css("border","1px solid #999");
			}else{
				$("#note_hint").text("请勿重复发送！请输入验证码！").css("color","red");
				$("#content_dl_three_note").css("border","1px solid red");
			}
		})

		//登陆的验证
		
		$("#emil_phon_count").blur(function(){
			 emil_phon_count = $("#emil_phon_count ").val().replace(/ /ig, "");
			$("#emil_phon_count").val(emil_phon_count);

			if(!emil_phon_count){
				$("#emil_phon_count").css("border","1px solid red");
				$(".email_phone").html("请输入邮箱手机号！").css("color","red")
			}else if(emil_phon_count.length < 11 || emil_phon_count.length > 18){
				$("#emil_phon_count").css("border","1px solid red");
				$(".email_phone").html("请输入有效的电子邮箱/手机号码！").css("color","red")
			}else if(emil_phon_count.length == 11 ){
				$("#emil_phon_count").css("border","1px solid #999");
				$(".email_phone").html("手机号验证成功！").css("color","green")
			}else{
				var  ovlue= true;
				for(var i = 0; i < content_dl_one_email_count.length;i++){
					if(!yesEmail(content_dl_one_email_count[i])){
						 ovlue = false;
						break;
					}
				}
				if(ovlue){
					$("#emil_phon_count").css("border","1px solid #999")
					$(".email_phone").text("电子邮箱验证成功！").css("color","green");
					}else{
						$("#emil_phon_count").css("border","1px solid red")
						$(".email_phone").text("请输入正确的电子邮箱！").css("color","red");
					}
				}	
			
		})

		$("#phon_password_count").blur(function(){
			 phon_password_count = $("#phon_password_count ").val().replace(/ /ig, "");
			$("#phon_password_count").val(phon_password_count);

			if(!phon_password_count){
				$("#phon_password_count").css("border","1px solid red");
				$(".email_phone_password").html("请输入密码！").css("color","red")
			}else if(phon_password_count.length < 6 || phon_password_count.length > 16){
				$("#phon_password_count").css("border","1px solid red");
				$(".email_phone_password").html("请输入有效长度的密码！").css("color","red")
			}else{
				$("#phon_password_count").css("border","1px solid #999");
				$(".email_phone_password").html("有效密码！").css("color","green")
			}
		})

		//input框
		var Osecurity_count = document.getElementById("security_count");
		//验证码框
		var Osecurity_count2 = document.getElementById("security_count2");
		//显示文字
		var Oemail_phone_security = document.getElementById("email_phone_security");

		var Oanother_count = document.getElementById("another_count")


		Osecurity_count2.innerHTML = codd(4);
		var arr1 = Osecurity_count2.innerHTML ;

		Osecurity_count2.onclick = function(){
			Osecurity_count2.innerHTML = codd(4);
			arr1 = Osecurity_count2.innerHTML
		}
		Oanother_count.onclick = function(){
			Osecurity_count2.innerHTML = codd(4);
			arr1 = Osecurity_count2.innerHTML
		}

		Osecurity_count.onblur = function(){
			var arr2 = Osecurity_count.value;
			if(arr2 != arr1){
				Oemail_phone_security.style.color = "red"
				Oemail_phone_security.innerHTML = "验证码错误，请重新输入"
				Osecurity_count.innerHTML = "";
				Osecurity_count.style.border = "1px solid red";
				Osecurity_count2.innerHTML = codd(4);
				arr1 = Osecurity_count2.innerHTML
			}else{
				Oemail_phone_security.style.color = "green"
				Oemail_phone_security.innerHTML = "验证码正确";
				Osecurity_count.style.border = "1px solid #999"
			}	
		}


		$("#share_top_box").hover(function(){
			$("#share_top_text").css("color","#999").css("textDecoration","underline");
			$("#share_top_logo").css("backgroundPosition","-36px 0px")
		},function(){
			$("#share_top_text").css("color","black").css("textDecoration","none");
			$("#share_top_logo").css("backgroundPosition","0px 0px")
		})

		$("#share_center_box").hover(function(){
			$("#share_center_text").css("color","#999").css("textDecoration","underline");
			$("#share_center_logo").css("backgroundPosition","-36px -43px")
		},function(){
			$("#share_center_text").css("color","black").css("textDecoration","none");
			$("#share_center_logo").css("backgroundPosition","2px -43px")
		})

		$.ajax({
		url:"../json/jutizhenggai.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < 1; i++){
				$(`<div class="matter_name_title">${arr[i].title}</div>
					<div class="matter_name_monay">${arr[i].money}</div>`).appendTo($('.matter_name'))
			}
			for(var i = 0; i < arr.length; i++){
				$(`<img class="imgbb" id="${arr[i].id}" src="${arr[i].imgb}" alt="">`).appendTo($('.matter_img'))
			}
			for(var i = 0 ; i < arr.length; i++){
				$(`<li id="${arr[i].id}"><img src="${arr[i].suolue}" alt=""></li>`).appendTo($('#breviary'))
			}
		}
	})	
	
		$(".matter").on("click","li",function(){
			var id = this.id;
			if(id == 0){
				$("#breviary li").css("border","1px solid white")
				$(this).css("border","1px solid #999");
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(1)").css("display","block")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(2)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(3)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(4)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(5)").css("display","none")
			}else if( id == 1){
				$("#breviary li").css("border","1px solid white")
				$(this).css("border","1px solid #999");
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(2)").css("display","block")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(1)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(3)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(4)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(5)").css("display","none")
			}else if( id == 2){
				$("#breviary li").css("border","1px solid white")
				$(this).css("border","1px solid #999");
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(3)").css("display","block")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(2)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(1)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(4)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(5)").css("display","none")
			}else if( id == 3){
				$("#breviary li").css("border","1px solid white")
				$(this).css("border","1px solid #999");
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(4)").css("display","block")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(2)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(3)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(1)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(5)").css("display","none")
			}else if( id == 4){
				$("#breviary li").css("border","1px solid white")
				$(this).css("border","1px solid #999");
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(5)").css("display","block")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(2)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(3)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(4)").css("display","none")
				$(".matter").find("#matter_box").find(".matter_img").find(".imgbb:nth-child(1)").css("display","none")
			}

		})

		$.ajax({
		url:"../json/jutisuoluetu.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<a id="suo1" onfocus="this.blur(); href="#"><img src="${arr[i].img1}" alt=""></a>
						<a id="suo2" onfocus="this.blur(); href="#"><img src="${arr[i].img2}" alt=""></a>
						<a id="suo3" onfocus="this.blur(); href="#"><img src="${arr[i].img3}" alt=""></a>
						<a id="suo4" onfocus="this.blur(); href="#"><img src="${arr[i].img4}" alt=""></a>`).appendTo($('.desire_conut'))
			}
		}
	})	

	//第一个参数
	$(".desire_conut").on("click","a:nth-child(1)",function(){
		$("#suo1").css("border","1px solid #999")
		$("#suo2").css("border","1px solid white")
		$("#suo3").css("border","1px solid white")
		$("#suo4").css("border","1px solid white");
			$(".waitshopping1").css("display","block")
			$(".waitshopping2").css("display","none")
       		$(".waitshopping3").css("display","none")
       		$(".waitshopping4").css("display","none")
		$(".matter_name").html("");
		$(".matter_img").html("");
		$("#breviary").html("")
		$.ajax({
		url:"../json/jutizhenggai.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < 1; i++){
				$(`<div class="matter_name_title">${arr[i].title}</div>
					<div class="matter_name_monay">${arr[i].money}</div>`).appendTo($('.matter_name'))
			}
			for(var i = 0; i < arr.length; i++){
				$(`<img class="imgbb" id="${arr[i].id}" src="${arr[i].imgb}" alt="">`).appendTo($('.matter_img'))
			}
			for(var i = 0 ; i < arr.length; i++){
				$(`<li id="${arr[i].id}"><img src="${arr[i].suolue}" alt=""></li>`).appendTo($('#breviary'))
			}
		}
	})	
	
	})



	//第二个参数
	$(".desire_conut").on("click","a:nth-child(2)",function(){
		$("#suo2").css("border","1px solid #999")
		$("#suo1").css("border","1px solid white")
		$("#suo3").css("border","1px solid white")
		$("#suo4").css("border","1px solid white");
			$(".waitshopping2").css("display","block")
			$(".waitshopping1").css("display","none")
       		$(".waitshopping3").css("display","none")
       		$(".waitshopping4").css("display","none")
		$(".matter_name").html("");
		$(".matter_img").html("");
		$("#breviary").html("")
		$.ajax({
		url:"../json/jutizhenggai2.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < 1; i++){
				$(`<div class="matter_name_title">${arr[i].title}</div>
					<div class="matter_name_monay">${arr[i].money}</div>`).appendTo($('.matter_name'))
			}
			for(var i = 0; i < arr.length; i++){
				$(`<img class="imgbb" id="${arr[i].id}" src="${arr[i].imgb}" alt="">`).appendTo($('.matter_img'))
			}
			for(var i = 0 ; i < arr.length; i++){
				$(`<li id="${arr[i].id}"><img src="${arr[i].suolue}" alt=""></li>`).appendTo($('#breviary'))
			}
		}
	})	
	})

	//第三个参数
	$(".desire_conut").on("click","a:nth-child(3)",function(){
		$("#suo3").css("border","1px solid #999")
		$("#suo2").css("border","1px solid white")
		$("#suo1").css("border","1px solid white")
		$("#suo4").css("border","1px solid white");
			$(".waitshopping3").css("display","block")
			$(".waitshopping2").css("display","none")
       		$(".waitshopping1").css("display","none")
       		$(".waitshopping4").css("display","none")
		$(".matter_name").html("");
		$(".matter_img").html("");
		$("#breviary").html("")
		$.ajax({
		url:"../json/jutizhenggai3.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < 1; i++){
				$(`<div class="matter_name_title">${arr[i].title}</div>
					<div class="matter_name_monay">${arr[i].money}</div>`).appendTo($('.matter_name'))
			}
			for(var i = 0; i < arr.length; i++){
				$(`<img class="imgbb" id="${arr[i].id}" src="${arr[i].imgb}" alt="">`).appendTo($('.matter_img'))
			}
			for(var i = 0 ; i < arr.length; i++){
				$(`<li id="${arr[i].id}"><img src="${arr[i].suolue}" alt=""></li>`).appendTo($('#breviary'))
			}
		}
	})
	})

	//第四个参数
	$(".desire_conut").on("click","a:nth-child(4)",function(){
		$("#suo4").css("border","1px solid #999")
		$("#suo2").css("border","1px solid white")
		$("#suo3").css("border","1px solid white")
		$("#suo1").css("border","1px solid white");
			$(".waitshopping4").css("display","block")
			$(".waitshopping2").css("display","none")
       		$(".waitshopping3").css("display","none")
       		$(".waitshopping1").css("display","none")
		$(".matter_name").html("");
		$(".matter_img").html("");
		$("#breviary").html("")
		$.ajax({
		url:"../json/jutizhenggai.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < 1; i++){
				$(`<div class="matter_name_title">${arr[i].title}</div>
					<div class="matter_name_monay">${arr[i].money}</div>`).appendTo($('.matter_name'))
			}
			for(var i = 0; i < arr.length; i++){
				$(`<img class="imgbb" id="${arr[i].id}" src="${arr[i].imgb}" alt="">`).appendTo($('.matter_img'))
			}
			for(var i = 0 ; i < arr.length; i++){
				$(`<li id="${arr[i].id}"><img src="${arr[i].suolue}" alt=""></li>`).appendTo($('#breviary'))
			}
		}
	})
	})
		






	$(".case_box").hover(function(){
		$("#size_link").css("color","#999")
	},function(){
		$("#size_link").css("color","black")
	})


	$(".case_box").click(function(){
			$("#faqbg").css({display:"block",height:$(document).height()});
			var yscroll =document.documentElement.scrollTop;
			$("#faqdiv").css("top","100px");
			$("#faqdiv").css("display","block");
			document.documentElement.scrollTop=0;
		});
		$(".close").click(function(){
			$("#faqbg").css("display","none");
			$("#faqdiv").css("display","none");
	});


/////////////////////////////////////////////////////////////////////////////
			var objDemo = document.getElementById("demo");
            var objSmallBox = document.getElementById("small-box");
            var objMark = document.getElementById("mark");

            var objFloatBox = document.getElementById("float-box");
            var objBigBox = document.getElementById("big-box");
            var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

            objMark.onmouseover = function () {
                objFloatBox.style.display = "block"
                objBigBox.style.display = "block"
            }

            objMark.onmouseout = function () {
                objFloatBox.style.display = "none"
                objBigBox.style.display = "none"
            }

            objMark.onmousemove = function (ev) {

                var _event = ev || window.event;  //兼容多个浏览器的event参数模式

                var left = _event.pageX   - objFloatBox.offsetWidth -380;
                var top = _event.pageY  - objFloatBox.offsetHeight -180;

                //设置边界处理，防止移出小图片
                if (left < 0) {
                    left = 0;
                } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                    left = objMark.offsetWidth - objFloatBox.offsetWidth;
                }

                if (top < 0) {
                    top = 0;
                } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                    top = objMark.offsetHeight - objFloatBox.offsetHeight;

                }

                objFloatBox.style.left = left  + "px";   //oSmall.offsetLeft的值是相对什么而言
                objFloatBox.style.top = top  + "px";
                
                //求其比值
                var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
                var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);
                
                //方向相反，小图片鼠标移动方向与大图片相反，故而是负值
                objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
                objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
            }




		$(".waitshopping1").click(function(){
       		$(".waitshopping1").css("color","white").css("textDecoration","none")
       	})
       	$(".nowshopping").click(function(){
       		$(".nowshopping").css("color","white").css("textDecoration","none")
       	})
       	


		$("#mark").hover(function(){
			$(this).css({cursor:"url(../images/头部/zoom-add.png),auto"})
		},function(){
			$(this).css({cursor:"url(),auto"})
		})


///////////////////////////////////////////////轮播//////////////////////////////////////

				var ORotation_box = document.getElementById('Rotation_box');
				var oUl = ORotation_box.getElementsByTagName('ul')[0];
				var aLis = oUl.getElementsByTagName("li");

				oUl.innerHTML += oUl.innerHTML;
				//oUl的宽变成原来两倍
				oUl.style.width = aLis.length * aLis[0].offsetWidth + 'px';

				var timer = null;
				clearInterval(timer);
				timer = setInterval(function(){
					if(oUl.offsetLeft <= -oUl.offsetWidth / 2){
						oUl.style.left = 0;
					}
					oUl.style.left = oUl.offsetLeft - 2 + 'px';
				}, 30);

				ORotation_box.onmouseover = function(){
					clearInterval(timer);
				}
				ORotation_box.onmouseout = function(){
					clearInterval(timer);
					timer = setInterval(function(){
					if(oUl.offsetLeft <= -oUl.offsetWidth / 2){
						oUl.style.left = 0;
					}
					oUl.style.left = oUl.offsetLeft - 2 + 'px';
				}, 30);
				}


////////////////////////////////////////////////////////////////////
}

	function drag(node){
			var offsetX = 0;
			var offsetY = 0;

			node.onmousedown = function(ev){
				var e = ev || window.event;
				offsetX = e.clientX - this.offsetLeft;
				offsetY = e.clientY - this.offsetTop;

				document.onmousemove = function(ev){
					var e = ev || window.event;
					var l = e.clientX - offsetX - 40;
					var t = e.clientY - offsetY - 40;
						if(l < 0){
							l = 0;
						}
						if(l > 200){
							l = 250;
						}
						if(t < 0){
							t = 0;
						}
						if(t >= 250){
							t = 250;
						}
					node.style.left = l + "px";
					node.style.top = t + "px";
				}

			}
		}
			


	var codd = function num(n){
		var arr = [];
		for(var i = 0; i < n;i++){
			var num = parseInt(Math.random() * 100);
			if(num>=0 && num <=9){
				arr.push(num);
			}else if(num>=65 && num <= 90){
				var str = String.fromCharCode(num);
				arr.push(str);
			}else if(num>=17 && num <= 42){
				var str = String.fromCharCode(num + 80);//将数字转换成字符串。
				arr.push(str);//将字符串放在数组内
			}else{
				i--;//如果没有这个数字。返回在重新循环一边
			}
		} 
		return arr.join("");//有调用就要返回
	}
function yesEmail(charStr){
	if(charStr >= "A" && charStr <= "Z" || charStr >= "a" && charStr <= "z" || charStr >= "0" && charStr <= "9" || charStr == "_" || charStr == "@" || charStr == "."){
		return true;
	}else{
		return false;
	}
}


	//封装手机号判断是不是全部是数字
	function yesNum(num){
		var arr = num;
		for(var i = 0; i < arr.length;i++){
			if(arr[i] >= 0 && arr[i] <=9 ){
				return true;
			}else{
				return false;
			}
		}
	}		
	//完美运动框架   谁去运动，运动的参数 ，回调函数	
		function startMove2(node, json, complete){ //complete = show
				clearInterval(node.timer);
				node.timer = setInterval(function(){

					var isEnd = true; //假设都到达目的值了。

					for(var attr in json){
						//1、获取当前的值
						var iCur = null;
						if(attr == "opacity"){
							iCur = parseInt(parseFloat(getStyle(node, attr)) * 100);
						}else{
							iCur = parseInt(getStyle(node, attr))
						}
						//2、计算速度 
						var speed = (json[attr] - iCur) / 8;
						speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

						//3、运动和停止分开
						
						if(attr == "opacity"){
							iCur += speed;
							node.style.opacity = iCur / 100;
							node.style.filter = "alpha(opacity=" + iCur + ")";
						}else{
							node.style[attr] = iCur + speed + "px";
						}

						//如果这个if语句成立，说明至少有一个样式没到达目的值
						if(json[attr] != iCur){
							isEnd = false;
						}
						
					}
					if(isEnd){
						clearInterval(node.timer);
						if(complete){
							complete();
						}
					}
				}, 30);
			}

			function getStyle(obj, attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj)[attr];
				}
			}

		//登陆的界面
		var speed = null;
		var timer1 = null;
		function change(iTarget){
			var Odisembark = document.getElementById("disembark1");
			
			clearInterval(timer1);
			timer1 = setInterval(function(){
				if(Odisembark.offsetHeight < iTarget){
					speed = 10;
				}else{
					speed = -10;
				}
				if(Odisembark.offsetHeight == iTarget){
					clearInterval(timer1);
				}else{
					Odisembark.style.height = Odisembark.offsetHeight + speed + "px";
				}
			},20)
		}
		//find_link 界面
		var speed2 = null;
		var timer2 = null;
		function change2(iTarget){
			var OSearch_box = document.getElementById("Search_box");
			
			clearInterval(timer2);
			timer2 = setInterval(function(){
				if(OSearch_box.offsetHeight < iTarget){
					speed2 = 10;
				}else{
					speed2 = -10;
				}
				if(OSearch_box.offsetHeight == iTarget){
					clearInterval(timer2);
				}else{
					OSearch_box.style.height = OSearch_box.offsetHeight + speed2 + "px";
				}
			},20)
		}

