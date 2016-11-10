$(function(){
	$("header span").on("click",function(){
		window.location.href="index.html"
	})
	var isDrag=0;
	$(".bt01").on("click",function(){
		if($(".dl01 input").eq(0).val() == ""){
			$(".bt02").html("账号不能为空")
			$(".bt02").animate({top:"0.2rem"},1000,
				function(){
					setTimeout(function(){
						$(".bt02").animate({top:"-1.5rem"},1000)
					},1000)
				}
			)
		}
		else if($(".dl01 input").eq(1).val() == ""){
			$(".bt02").html("密码不能为空")
			$(".bt02").animate({top:"0.2rem"},1000,
				function(){
					setTimeout(function(){
						$(".bt02").animate({top:"-1.5rem"},1000)
					},1000)
				}
			)
		}else{
			isDrag=1;	
		}
		if(isDrag==1){
			$(function(){
				var ID = $(".dl01 input").eq(0).val();
				var password = $(".dl01 input").eq(1).val();
				console.log(ID+":"+password);
				$.ajax({
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					type:"POST",
					data:{
						status:"login",
						userID:ID,
						password:password
					},
					success:function(res){
		
						switch(res){
							case "0":	$(".bt02").html("用户名不存在")
										$(".bt02").animate({top:"0.2rem"},1000,
										function(){
											setTimeout(function(){
												$(".bt02").animate({top:"-1.5rem"},1000)
											},1000)
										}
									);break;
							case "2":$(".bt02").html("用户名和密码不符")
										$(".bt02").animate({top:"0.2rem"},1000,
										function(){
											setTimeout(function(){
												$(".bt02").animate({top:"-1.5rem"},1000)
											},1000)
										}
									);break;
							default:$.cookie('name',$('#userID').val());
									console.log($.cookie('name',$('#userID').val()));
									window.location.href="index.html";break;
						}
					}
		
				})
					
				
				
			})
		//console.log(userID.value+":"+password.value);
		}
	})
	$(".dl01 span").on("click",function(){
		$(this).toggleClass("sp02")
		if($(this).hasClass("sp02")){
			$(".dl01 input").eq(1).attr("type","text")
		}else{
			$(".dl01 input").eq(1).attr("type","password")
		}
	})
})
