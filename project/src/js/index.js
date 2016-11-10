$('.main').on('click','header>span',function(){
	//console.log($(this).parent().parent())
	$(this).parent().parent().addClass('move')
	$('.mark').css('display','block')
	$('.nav').css('display','block')
})
$('.mark').on('touchstart',function(){
	//alert(1)
	$(this).parent().removeClass('move')
	$(this).css('display','none')
	setTimeout(function(){
		$('.nav').css('display','none')
	},600)
	
})
$('.navSearch').on('click','input',function(){
	$('.searchBox').css('display','block');
	$('.searchMark').css('display','block');
})
$('.back').on('click',function(){
	$('.searchBox').css('display','none');
	$('.searchMark').css('display','none');
})

$('.main').find('button').click(function(){
	//alert(1)
	//console.log($(this).prev('input').get(0).value)
	var movie = $(this).prev('input').get(0).value;

	
	localStorage.setItem('title',movie);
	window.location.href = 'detail.html?title='+movie;
})


$(function(){
		$.get("/api/test",{
			//向服务器发送的数据
			url : "http://v.juhe.cn/boxoffice/rank.php",
			area : "CN",
			key : "8a5c269620c9a5c0809bb6026b0cead5"
		},function(result){
			//console.log(result.result);
			var data = result.result;
			//console.log(data[0].name)
			var html = "";
			var html1 = "<li><dl><dt>排名</dt><dd>影片名称</dd><dd>周末票房</dd><dd>累计票房</dd></dl></li>";
			
			for(var i=0,len = data.length;i<len;i++){
				var item = data[i];
				html += "<li><dl><dt>"+item.rid+"</dt><dd>"+item.name+"</dd><dd>"+item.wboxoffice+"</dd><dd>"+item.tboxoffice+"</dd></dl></li>"
			}
			
			html2 = html1 + html;
			//console.log($('.list').find('p').get(0))
			$('.list').find('ul').get(0).innerHTML = html2;
			$('.list').find('p').get(0).innerHTML = data[0].wk;
		},"json");
})
