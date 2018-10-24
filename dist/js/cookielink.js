$(function(){
	  	$(".car_linka").click(function(){
       		sc_msg();
       		$(".sc").stop().animate({height:250})
	       	$(".sc_center").stop().animate({height:250},400,function(){
	       		$(".sc_count").stop().animate({opacity:100},400,function(){
	       			$(".sc_count").css("display","block")
	       		})
	       	})
	       	clearTimeout(timer1);
	        timer1 = setTimeout(function(){
	       			$(".sc_count").stop().animate({opacity:0},400,function(){
	       				$(".sc_count").css("display","none")
	       			});
		      	 	$(".sc_center").stop().animate({height:0});
		      	 	$(".sc").stop().animate({height:0});
	       	},3000)

		     $(".sc").mouseover(function(){
		     	clearTimeout(timer1);
			     	$(".sc").mouseout(function(){
			     	clearTimeout(timer1);
			     	 timer1 = setTimeout(function(){
		       			$(".sc_count").stop().animate({opacity:0},400,function(){
		       				$(".sc_count").css("display","none")
		       			});
			      	 	$(".sc_center").stop().animate({height:0});
			      	 	$(".sc").stop().animate({height:0});
		     	  	},1000)
			     })
		     })
		     
       	})
 


       	sc_car();
$("#default_data").on("click", ".coo", function(){
			//获取到当前加入购物车按钮所在的商品id
			var id = this.id;
			//存储cookie的时候，对于当前商品只存储两个值，id num
			//json格式的字符串去存 goods  [{id:1, num:3},{id:7, num2}];
			//
			//1、判断是否第一次添加cookie
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7});
			}else{
				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7});
						same = true;
						break;
					}
				}

				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr, {expires: 7});
				}
			}
			sc_car();
		})
})

function sc_car(){
			var str = $.cookie("goods");
			if(str){
				var arr = eval(str);
				var sum = 0;
				for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
				}
				$(".car_num").html(sum);
			}
		}

	function sc_msg(){
			$.ajax({
				url: '../json/defint_data.json',
				success: function(arr){
					$(".sc_count").html("");
					//在所有商品信息里面找出，加入购物车的商品信息
					var cookie_arr = eval($.cookie('goods'));
					for(var i = 0; i < cookie_arr.length; i++){
						$(`<div class="one_shopping"><div class="data">
						<div class="sc_img"><img src="${arr[cookie_arr[i].id].img}" alt=""></div>
								<div class="over_car">已加入购物车
									<a href="">查看购物车</a>
								</div>
								<div class="sc_title">${arr[cookie_arr[i].id].title}</div>
								<div class="sc_money">${arr[cookie_arr[i].id].price}</div>
								<div class="sc_detail">
									<span class="scmodel">型号：101010001</span>
									<span class="sccolor">颜色：黑色</span>
									<span class="scsize">尺寸：39.5</span>
									<span class="scnum">数量：${cookie_arr[i].num}</span>
								</div>
							</div><div class="taximeter">
								<div class="close_taximeter"><span>X</span></div>
								<div class="calculate">
									<div class="sum">
									合计:<span id="sum_count">￥${arr[cookie_arr[i].id].price * cookie_arr[i].num}.00</span>
									</div>
									<div class="sb">不包含礼品卡消费金额</div>
									<div class="currency">
										<div class="settlement">￥结算</div>
									</div>
								</div>
							</div></div>    `).appendTo($(".sc_count"));
					}
				}
			})
		}