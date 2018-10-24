	$(function(){		
	var Oslideshow = document.getElementById("slideshow");
	var Oslideshow_row = document.getElementById("slideshow_row");
	var aAs = Oslideshow_row.getElementsByTagName("a");

	$.ajax({
		url:"json/header_topA.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#man_down #top_man'))
			}
		}
	})
	$.ajax({
		url:"json/header_bottomA.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#man_down #bottom_man'))
			}
		}
	})
	$.ajax({
		url:"json/header_woman_topA.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#woman_down #top_woman'))
			}
		}
	})
	$.ajax({
		url:"json/header_woman_bottomA.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#woman_down #bottom_woman'))
			}
		}
	})
	$.ajax({
		url:"json/header_child_topA.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#child_down #top_child'))
			}
		}
	})
	$.ajax({
		url:"json/header_child_bottomA.json",
		type:"GET",
		success: function(arr){
			for(var i = 0; i < arr.length; i++){
				$(`<li><a href=""><img src="${arr[i].img}" alt=""><span>${arr[i].title}</span></a></li>`).appendTo($('#child_down #bottom_child'))
			}
		}
	})
	$.ajax({
		url:"json/hot_specifiyA.json",
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
//window.onload
	
	//移入移出的节点
	var Ohot_man = document.getElementById("hot_man");
	var Ohot_woman = document.getElementById("hot_woman");
	var Ohot_cross = document.getElementById("hot_cross");
	var Ohot_wear = document.getElementById("hot_wear");
	
	//显示的内容	
	var Oone_show = document.getElementById("one_show");
	var Otow_show = document.getElementById("tow_show");
	var Othree_show = document.getElementById("three_show");
	var Ofour_show = document.getElementById("four_show");

	//向下的小箭头
	var OMove_arrow = document.getElementById("Move_arrow");
	//第一个
	Ohot_man.onmouseover = function(){
		Oone_show.style.display = "block";
		Otow_show.style.display = "none"
		Othree_show.style.display = "none"
		Ofour_show.style.display = "none"
		startMove2(OMove_arrow,{
			left: 120
		})
	}
	$.ajax({
		url:"json/host_manA.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#hot_sale #list #box #one_show #one_show_top .one_show_top_box #one_show_top_box_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#hot_sale #list #box #one_show #one_show_top .one_show_top_box #one_show_top_box_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#hot_sale #list #box #one_show #one_show_top .one_show_top_box #one_show_top_box_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#hot_sale #list #box #one_show #one_show_top .one_show_top_box #one_show_top_box_4'))
		}
	})
	$.ajax({
		url:"json/host_man2A.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#hot_sale #list #box #one_show #one_show_center .one_show_center_box #one_show_center_box_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#hot_sale #list #box #one_show #one_show_center .one_show_center_box #one_show_center_box_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#hot_sale #list #box #one_show #one_show_center .one_show_center_box #one_show_center_box_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#hot_sale #list #box #one_show #one_show_center .one_show_center_box #one_show_center_box_4'))
		}
	})
	
	//第二个
	Ohot_woman.onmouseover = function(){
		Otow_show.style.display = "block";
		Oone_show.style.display = "none"
		Othree_show.style.display = "none"
		Ofour_show.style.display = "none"
		startMove2(OMove_arrow,{
			left: 360
		})
	}
	$.ajax({
		url:"json/host_womanA.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#hot_sale #list #box #tow_show #tow_show_top .tow_show_top_box #tow_show_top_box_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#hot_sale #list #box #tow_show #tow_show_top .tow_show_top_box #tow_show_top_box_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#hot_sale #list #box #tow_show #tow_show_top .tow_show_top_box #tow_show_top_box_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#hot_sale #list #box #tow_show #tow_show_top .tow_show_top_box #tow_show_top_box_4'))
		}
	})
	$.ajax({
		url:"json/host_woman2A.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#hot_sale #list #box #tow_show #tow_show_center .tow_show_center_box #tow_show_center_box_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#hot_sale #list #box #tow_show #tow_show_center .tow_show_center_box #tow_show_center_box_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#hot_sale #list #box #tow_show #tow_show_center .tow_show_center_box #tow_show_center_box_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#hot_sale #list #box #tow_show #tow_show_center .tow_show_center_box #tow_show_center_box_4'))
		}
	})
	//第三个
	Ohot_cross.onmouseover = function(){
		Othree_show.style.display = "block";
		Oone_show.style.display = "none"
		Otow_show.style.display = "none"
		Ofour_show.style.display = "none"
		startMove2(OMove_arrow,{
			left: 630
		})
	}
	$.ajax({
		url:"json/host_chuanA.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#hot_sale #list #box #three_show #three_show_top .three_show_top_box #three_show_top_box_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#hot_sale #list #box #three_show #three_show_top .three_show_top_box #three_show_top_box_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#hot_sale #list #box #three_show #three_show_top .three_show_top_box #three_show_top_box_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#hot_sale #list #box #three_show #three_show_top .three_show_top_box #three_show_top_box_4'))
		}
	})
	$.ajax({
		url:"json/host_chuan2A.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#hot_sale #list #box #three_show #three_show_center .three_show_center_box #three_show_center_box_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#hot_sale #list #box #three_show #three_show_center .three_show_center_box #three_show_center_box_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#hot_sale #list #box #three_show #three_show_center .three_show_center_box #three_show_center_box_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#hot_sale #list #box #three_show #three_show_center .three_show_center_box #three_show_center_box_4'))
		}
	})
	//第四个
	Ohot_wear.onmouseover = function(){
		Ofour_show.style.display = "block";
		Oone_show.style.display = "none"
		Otow_show.style.display = "none"
		Othree_show.style.display = "none"
		startMove2(OMove_arrow,{
			left: 890
		})
	}
	$.ajax({
		url:"json/host_daiA.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#hot_sale #list #box #four_show #four_show_top .four_show_top_box #four_show_top_box_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#hot_sale #list #box #four_show #four_show_top .four_show_top_box #four_show_top_box_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#hot_sale #list #box #four_show #four_show_top .four_show_top_box #four_show_top_box_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#hot_sale #list #box #four_show #four_show_top .four_show_top_box #four_show_top_box_4'))
		}
	})
	$.ajax({
		url:"json/host_dai2A.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#hot_sale #list #box #four_show #four_show_center .four_show_center_box #four_show_center_box_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#hot_sale #list #box #four_show #four_show_center .four_show_center_box #four_show_center_box_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#hot_sale #list #box #four_show #four_show_center .four_show_center_box #four_show_center_box_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#hot_sale #list #box #four_show #four_show_center .four_show_center_box #four_show_center_box_4'))
		}
	})

	//第一个黑框
	var Olook1 = document.getElementById("look1");
	var Oloik1_link = document.getElementById("loik1_link")
	Olook1.onmouseover = function(){
		Oloik1_link.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Oloik1_link.style.backgroundPosition = "-42px -163px"; 
		Olook1.style.backgroundColor = "white";
		Olook1.style.color = "black"
	}
	Olook1.onmouseout = function(){
		Oloik1_link.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Oloik1_link.style.backgroundPosition = "-9px -163px"; 
		Olook1.style.backgroundColor = "black";
		Olook1.style.color = "white"
	}

	//第二个黑框
	var Olook2 = document.getElementById("look2");
	var Oloik2_link = document.getElementById("loik2_link")
	Olook2.onmouseover = function(){
		Oloik2_link.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Oloik2_link.style.backgroundPosition = "-42px -163px"; 
		Olook2.style.backgroundColor = "white";
		Olook2.style.color = "black"
	}
	Olook2.onmouseout = function(){
		Oloik2_link.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Oloik2_link.style.backgroundPosition = "-9px -163px"; 
		Olook2.style.backgroundColor = "black";
		Olook2.style.color = "white"
	}

	//第二黑框
	var Olook3 = document.getElementById("look3");
	var Oloik3_link = document.getElementById("loik3_link")
	Olook3.onmouseover = function(){
		Oloik3_link.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Oloik3_link.style.backgroundPosition = "-42px -163px"; 
		Olook3.style.backgroundColor = "white";
		Olook3.style.color = "black"
	}
	Olook3.onmouseout = function(){
		Oloik3_link.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Oloik3_link.style.backgroundPosition = "-9px -163px"; 
		Olook3.style.backgroundColor = "black";
		Olook3.style.color = "white"
	}

	//第四个黑框
	var Olook4 = document.getElementById("look4");
	var Oloik4_link = document.getElementById("loik4_link")
	Olook4.onmouseover = function(){
		Oloik4_link.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Oloik4_link.style.backgroundPosition = "-42px -163px"; 
		Olook4.style.backgroundColor = "white";
		Olook4.style.color = "black"
	}
	Olook4.onmouseout = function(){
		Oloik4_link.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Oloik4_link.style.backgroundPosition = "-9px -163px"; 
		Olook4.style.backgroundColor = "black";
		Olook4.style.color = "white"
	}

	//推荐的商品数据
	$.ajax({
		url:"json/endallA.json",
		type:"GET",
		success: function(arr){
				$(`<dd><img src="${arr[0].img}" alt=""></dd>
									<dt><a href="">${arr[0].title}</a></dt>
									<dt>${arr[0].cost}</dt>`).appendTo($('#box2 #price_one #price_one_1'))
				$(`<dd><img src="${arr[1].img}" alt=""></dd>
									<dt><a href="">${arr[1].title}</a></dt>
									<dt>${arr[1].cost}</dt>`).appendTo($('#box2 #price_one #price_one_2'))
				$(`<dd><img src="${arr[2].img}" alt=""></dd>
									<dt><a href="">${arr[2].title}</a></dt>
									<dt>${arr[2].cost}</dt>`).appendTo($('#box2 #price_one #price_one_3'))
				$(`<dd><img src="${arr[3].img}" alt=""></dd>
									<dt><a href="">${arr[3].title}</a></dt>
									<dt>${arr[3].cost}</dt>`).appendTo($('#box2 #price_one #price_one_4'))
				//////////////////////////
				$(`<dd><img src="${arr[4].img}" alt=""></dd>
									<dt><a href="">${arr[4].title}</a></dt>
									<dt>${arr[4].cost}</dt>`).appendTo($('#box2 #price_tow #price_tow_1'))
				$(`<dd><img src="${arr[5].img}" alt=""></dd>
									<dt><a href="">${arr[5].title}</a></dt>
									<dt>${arr[5].cost}</dt>`).appendTo($('#box2 #price_tow #price_tow_2'))
				$(`<dd><img src="${arr[6].img}" alt=""></dd>
									<dt><a href="">${arr[6].title}</a></dt>
									<dt>${arr[6].cost}</dt>`).appendTo($('#box2 #price_tow #price_tow_3'))
				$(`<dd><img src="${arr[7].img}" alt=""></dd>
									<dt><a href="">${arr[7].title}</a></dt>
									<dt>${arr[7].cost}</dt>`).appendTo($('#box2 #price_tow #price_tow_4'))
				/////////////////////////
				$(`<dd><img src="${arr[8].img}" alt=""></dd>
									<dt><a href="">${arr[8].title}</a></dt>
									<dt>${arr[8].cost}</dt>`).appendTo($('#box2 #price_three #price_three_1'))
				$(`<dd><img src="${arr[9].img}" alt=""></dd>
									<dt><a href="">${arr[9].title}</a></dt>
									<dt>${arr[9].cost}</dt>`).appendTo($('#box2 #price_three #price_three_2'))
				$(`<dd><img src="${arr[10].img}" alt=""></dd>
									<dt><a href="">${arr[10].title}</a></dt>
									<dt>${arr[10].cost}</dt>`).appendTo($('#box2 #price_three #price_three_3'))
				$(`<dd><img src="${arr[11].img}" alt=""></dd>
									<dt><a href="">${arr[11].title}</a></dt>
									<dt>${arr[11].cost}</dt>`).appendTo($('#box2 #price_three #price_three_4'))
				////////////////////////
				$(`<dd><img src="${arr[12].img}" alt=""></dd>
									<dt><a href="">${arr[12].title}</a></dt>
									<dt>${arr[12].cost}</dt>`).appendTo($('#box2 #price_four #price_four_1'))
				$(`<dd><img src="${arr[13].img}" alt=""></dd>
									<dt><a href="">${arr[13].title}</a></dt>
									<dt>${arr[9].cost}</dt>`).appendTo($('#box2 #price_four #price_four_2'))
				$(`<dd><img src="${arr[13].img}" alt=""></dd>
									<dt><a href="">${arr[13].title}</a></dt>
									<dt>${arr[13].cost}</dt>`).appendTo($('#box2 #price_four #price_four_3'))
				$(`<dd><img src="${arr[14].img}" alt=""></dd>
									<dt><a href="">${arr[14].title}</a></dt>
									<dt>${arr[14].cost}</dt>`).appendTo($('#box2 #price_four #price_four_4'))
		}
	})

	var  Ostreet_details_left_link = document.getElementById("street_details_left_link");
	var Ogray = document.getElementById("gray");

	street_details_left_link.onmouseover = function(){
		startMove2(Ogray,{
			opacity: 50,
		})
	}
	street_details_left_link.onmouseout = function(){
		startMove2(Ogray,{
			opacity: 0
		})
	}

	var Ostreet_details_left_link2 = document.getElementById("street_details_left_link2");
	var Ostreet_details_left_link2_t = document.getElementById("street_details_left_link2_t");
	var Ostreet_details_left_link2_p = document.getElementById("street_details_left_link2_p")
	Ostreet_details_left_link2.onmouseover = function(){
		startMove2(Ostreet_details_left_link2_t,{
			opacity:50
		},function(){
			startMove2(Ostreet_details_left_link2_p,{
				opacity:50
			})
		})
	}
	Ostreet_details_left_link2.onmouseout = function(){
		startMove2(Ostreet_details_left_link2_t,{
			opacity:100
		},function(){
			startMove2(Ostreet_details_left_link2_p,{
				opacity:100
			})
		})
	}


	var Obutn_text = document.getElementById("butn_text");
	var Obutn_logo = document.getElementById("butn_logo");

	Obutn_text.onmouseover = function(){
		Obutn_logo.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Obutn_logo.style.backgroundPosition = "-42px -163px"; 
		Obutn_text.style.backgroundColor = "white";
		Obutn_text.style.color = "black"
	}
	Obutn_text.onmouseout = function(){
		Obutn_logo.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Obutn_logo.style.backgroundPosition = "-9px -163px"; 
		Obutn_text.style.backgroundColor = "black";
		Obutn_text.style.color = "white"
	}
	/////////////////////////////////////////
	var  Ostreet_details_right_link = document.getElementById("street_details_right_link");
	var Ogray2 = document.getElementById("gray2");

	street_details_right_link.onmouseover = function(){
		startMove2(Ogray2,{
			opacity: 50,
		})
	}
	street_details_right_link.onmouseout = function(){
		startMove2(Ogray2,{
			opacity: 0
		})
	}

	var Ostreet_details_right_link2 = document.getElementById("street_details_right_link2");
	var Ostreet_details_right_link2_t = document.getElementById("street_details_right_link2_t");
	var Ostreet_details_right_link2_p = document.getElementById("street_details_right_link2_p")
	Ostreet_details_right_link2.onmouseover = function(){
		startMove2(Ostreet_details_right_link2_t,{
			opacity:50
		},function(){
			startMove2(Ostreet_details_right_link2_p,{
				opacity:50
			})
		})
	}
	Ostreet_details_right_link2.onmouseout = function(){
		startMove2(Ostreet_details_right_link2_t,{
			opacity:100
		},function(){
			startMove2(Ostreet_details_right_link2_p,{
				opacity:100
			})
		})
	}


	var Obutn_text2 = document.getElementById("butn_text2");
	var Obutn_logo2 = document.getElementById("butn_logo2");

	Obutn_text2.onmouseover = function(){
		Obutn_logo2.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Obutn_logo2.style.backgroundPosition = "-42px -163px"; 
		Obutn_text2.style.backgroundColor = "white";
		Obutn_text2.style.color = "black"
	}
	Obutn_text2.onmouseout = function(){
		Obutn_logo2.style.backgroundImage = "../images/头部/sprites_header_footer.png";
		Obutn_logo2.style.backgroundPosition = "-9px -163px"; 
		Obutn_text2.style.backgroundColor = "black";
		Obutn_text2.style.color = "white"
	}

////////////////////////////////////////////////
	var Orecommend_one_img = document.getElementById("recommend_one_img");
	var OGray_animation = document.getElementById("Gray_animation");
	Orecommend_one_img.onmouseover = function(){
		startMove2(OGray_animation,{
			opacity:30
		})
	}
	Orecommend_one_img.onmouseout = function(){
		startMove2(OGray_animation,{
			opacity:0
		})
	}


	var Orecommend_one_text = document.getElementById("recommend_one_text");
	var Orecommend_one_text_h = document.getElementById("recommend_one_text_h");
	var Orecommend_one_text_p = document.getElementById("recommend_one_text_p");
	Orecommend_one_text.onmouseover = function(){
		startMove2(Orecommend_one_text_h,{
			opacity:50
		},function(){
			startMove2(Orecommend_one_text_p,{
				opacity:50
			})
		})
	}
	Orecommend_one_text.onmouseout = function(){
		startMove2(Orecommend_one_text_h,{
			opacity:100
		},function(){
			startMove2(Orecommend_one_text_p,{
				opacity:100
			})
		})
	}

	var Orecommend_one_link = document.getElementById("recommend_one_link");
	var Orecommend_one_link_text = document.getElementById("recommend_one_link_text")
	var Orecommend_one_link_logo = document.getElementById("recommend_one_link_logo");

	Orecommend_one_link.onmouseover = function(){
		Orecommend_one_link_text.style.color = "gray"
		Orecommend_one_link_logo.style.backgroundImage = "../images/头部/arrow1.png";
		Orecommend_one_link_logo.style.backgroundPosition = "0px -1px"; 
	}
	Orecommend_one_link.onmouseout = function(){
		Orecommend_one_link_text.style.color = "black"
		Orecommend_one_link_logo.style.backgroundImage = "../images/头部/arrow1.png";
		Orecommend_one_link_logo.style.backgroundPosition = "-20px -1px"; 

	}

////////////////////////////////////////////////
	var Orecommend_tow_img = document.getElementById("recommend_tow_img");
	var OGray2_animation = document.getElementById("Gray2_animation");
	Orecommend_tow_img.onmouseover = function(){
		startMove2(OGray2_animation,{
			opacity:30
		})
	}
	Orecommend_tow_img.onmouseout = function(){
		startMove2(OGray2_animation,{
			opacity:0
		})
	}

	var Orecommend_tow_text = document.getElementById("recommend_tow_text");
	var Orecommend_tow_text_h = document.getElementById("recommend_tow_text_h");
	var Orecommend_tow_text_p = document.getElementById("recommend_tow_text_p");
	Orecommend_tow_text.onmouseover = function(){
		startMove2(Orecommend_tow_text_h,{
			opacity:50
		},function(){
			startMove2(Orecommend_tow_text_p,{
				opacity:50
			})
		})
	}
	Orecommend_tow_text.onmouseout = function(){
		startMove2(Orecommend_tow_text_h,{
			opacity:100
		},function(){
			startMove2(Orecommend_tow_text_p,{
				opacity:100
			})
		})
	}
	var Orecommend_tow_link = document.getElementById("recommend_tow_link");
	var Orecommend_tow_link_text = document.getElementById("recommend_tow_link_text")
	var Orecommend_tow_link_logo = document.getElementById("recommend_tow_link_logo");

	Orecommend_tow_link.onmouseover = function(){
		Orecommend_tow_link_text.style.color = "gray"
		Orecommend_tow_link_logo.style.backgroundImage = "../images/头部/arrow1.png";
		Orecommend_tow_link_logo.style.backgroundPosition = "0px -1px"; 
	}
	Orecommend_tow_link.onmouseout = function(){
		Orecommend_tow_link_text.style.color = "black"
		Orecommend_tow_link_logo.style.backgroundImage = "../images/头部/arrow1.png";
		Orecommend_tow_link_logo.style.backgroundPosition = "-20px -1px"; 

	}
	/////////////////////////////////////////////////////////
	var Orecommend_three_img = document.getElementById("recommend_three_img");
	var OGray3_animation = document.getElementById("Gray3_animation");
	Orecommend_three_img.onmouseover = function(){
		startMove2(OGray3_animation,{
			opacity:30
		})
	}
	Orecommend_three_img.onmouseout = function(){
		startMove2(OGray3_animation,{
			opacity:0
		})
	}

	var Orecommend_three_text = document.getElementById("recommend_three_text");
	var Orecommend_three_text_h = document.getElementById("recommend_three_text_h");
	var Orecommend_three_text_p = document.getElementById("recommend_three_text_p");
	Orecommend_three_text.onmouseover = function(){
		startMove2(Orecommend_three_text_h,{
			opacity:50
		},function(){
			startMove2(Orecommend_three_text_p,{
				opacity:50
			})
		})
	}
	Orecommend_three_text.onmouseout = function(){
		startMove2(Orecommend_three_text_h,{
			opacity:100
		},function(){
			startMove2(Orecommend_three_text_p,{
				opacity:100
			})
		})
	}
	var Orecommend_three_link = document.getElementById("recommend_three_link");
	var Orecommend_three_link_text = document.getElementById("recommend_three_link_text")
	var Orecommend_three_link_logo = document.getElementById("recommend_three_link_logo");

	Orecommend_three_link.onmouseover = function(){
		Orecommend_three_link_text.style.color = "gray"
		Orecommend_three_link_logo.style.backgroundImage = "../images/头部/arrow1.png";
		Orecommend_three_link_logo.style.backgroundPosition = "0px -1px"; 
	}
	Orecommend_three_link.onmouseout = function(){
		Orecommend_three_link_text.style.color = "black"
		Orecommend_three_link_logo.style.backgroundImage = "../images/头部/arrow1.png";
		Orecommend_three_link_logo.style.backgroundPosition = "-20px -1px"; 

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

		Ocontent_dl_three_authin.innerHTML = numa(4);
		var arr1 = Ocontent_dl_three_authin.innerHTML ;
		Ocontent_dl_three_authin.onclick = function(){
			Ocontent_dl_three_authin.innerHTML = numa(4);
			arr1 = Ocontent_dl_three_authin.innerHTML
		}
		Ocut.onclick = function(){
			Ocontent_dl_three_authin.innerHTML = numa(4);
			arr1 = Ocontent_dl_three_authin.innerHTML
		}

		Ocontent_dl_three_auth_count.onblur = function(){
			var arr2 = Ocontent_dl_three_auth_count.value;
			if(arr2 != arr1){
				Oauth_hint.style.color = "red"
				Oauth_hint.innerHTML = "验证码错误，请重新输入"
				Ocontent_dl_three_auth_count.innerHTML = "";
				Ocontent_dl_three_auth.style.border = "1px solid red";
				Ocontent_dl_three_authin.innerHTML = numa(4);
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

		var Oanother_count = document.getElementById("another_count");


		Osecurity_count2.innerHTML = numa(4);
		var arr1 = Osecurity_count2.innerHTML ;

		Osecurity_count2.onclick = function(){
			Osecurity_count2.innerHTML = numa(4);
			arr1 = Osecurity_count2.innerHTML
		}
		Oanother_count.onclick = function(){
			Osecurity_count2.innerHTML = numa(4);
			arr1 = Osecurity_count2.innerHTML
		}

		Osecurity_count.onblur = function(){
			var arr2 = Osecurity_count.value;
			if(arr2 != arr1){
				Oemail_phone_security.style.color = "red"
				Oemail_phone_security.innerHTML = "验证码错误，请重新输入"
				Osecurity_count.innerHTML = "";
				Osecurity_count.style.border = "1px solid red";
				Osecurity_count2.innerHTML = numa(4);
				arr1 = Osecurity_count2.innerHTML
			}else{
				Oemail_phone_security.style.color = "green"
				Oemail_phone_security.innerHTML = "验证码正确";
				Osecurity_count.style.border = "1px solid #999"
			}	
		}
//////////////////////////////////////////////////注册信息
	//登陆
	$("#enter").click(function(){
		var str = `username=${$("name=username")[0].value}&password=${$("name=password")[0].value}`;
					ajax({
						method: "post",
						url: "test.php?type=login",
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
		var str = `username=${$("name=username")[1].value}&password=${$("name=password")[1].value}&repassword=${$("name=repassword")[0].value}`;
					alert(str);
					ajax({
						method: "post",
						url: "test.php?type=register",
						data: str,
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
						}
		})
	})
////////////////////////////////////////////////轮播图////////////////////////////////////////////////
/////轮播的文字显示js
		$("#slideshow_link").find("a").hover(function(){
					$("#slideshow_link").find("a").attr("id", "");
					$("#slideshow_row").find("img").stop().animate({opacity:0}).eq($(this).index()).stop().animate({opacity:1});
					$(this).attr("id", 'show');			
		})
////////////////////////////////////////////////////////////////////////////

})
/////////////////////////////////////////////////////////////////////
	function numa(n){
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