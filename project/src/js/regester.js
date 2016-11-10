window.onload = function(){
	var width = document.documentElement.clientWidth;
	var size = width / 7.5;
	document.getElementsByTagName("html")[0].style.fontSize = size + "px";
}
$(function(){
	var Drag = 0;
	$(".userID").eq(0).blur(function(){
		var str = this.value;
		console.log($(".userID").eq(0));
		console.log(this);
		if(str.length > 20 || str.length < 4){
			$("h6").eq(0).html("请确认您输入的用户名在4-20字符");
		}else{
			$("h6").eq(0).html("");
			Drag++;
		}
	});
	$(".password").eq(0).blur(function(){
		var str = this.value;
		//console.log(str);
		if(str.length > 20 || str.length < 6){
			$("h6").eq(1).html("对不起，请检查您的输入。密码设置支持6-20位字母、符号或数字，密码区分大小");
		}else{
			$("h6").eq(1).html("");
			Drag++;
		}
	});
	$(".number").eq(0).blur(function(){
		var str = this.value;
		if((str.length == 11) && (/^[1]\d{10}$/.test(str))){ 	
			$("h6").eq(2).html("");
			Drag++;
		}else{
			$("h6").eq(2).html("请正确填写您的手机号码");
		}
	});
	$(".btn").eq(0).click(function(){
		
		$("h6").eq(3).html("");
		//console.log($(".userID").eq(0).val());
		if($(".userID").eq(0).val() == ""){
			$("h6").eq(0).html("请确认您输入的用户名");
			
		}else if($(".number").eq(0).val() == ""){
			$("h6").eq(2).html("请填写您的手机号码");
			
		}else if($(".password").eq(0).val() == ""){
			$("h6").eq(1).html("请设置您的账号密码");
			
		}else if(Drag == 3){
			$(function(){
				var ID = $(".userID").eq(0).val();
				var password = $(".password").eq(0).val();
					
				$.ajax({
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					type:"POST",
					data:{
						status:"register",
						userID:ID,
						password:password
					},
					success:function(res){
						//console.log(typeof res)
						//console.log(res);
//						switch(res){
//							case "0":$("h6").eq(3).html("用户名已存在");break;
//							case "1":$(".btn").eq(0).val("注册成功");
//									$.cookie('name',$('.userID').val());
//              					window.location.href='../../login/login.html'
//										break;
//							case "2":$("h6").eq(3).html("网络错误");break;
//			
//						}
						if(res == 0){
							$("h6").eq(3).html("用户名已存在");
						}else if(res == 1){
							$(".btn").eq(0).val("注册成功");
							$.cookie('name',$('.userID').val());
                			window.location.href='login.html'
						}else if(res == 2){
							$("h6").eq(3).html("网络错误");
						}
					}
				})
				
			})
		}
	})
})
