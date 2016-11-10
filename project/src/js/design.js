define(['jquery'],function($){
	//监听 resize 变化
	$(window).on("resize",setFontSize);
	//立即执行 计算 font size
	setFontSize();
	function setFontSize(){
				// 设计稿 750px
				var width = document.documentElement.clientWidth;
				//使用设计稿与设备宽度的比例计算 font size
				var fontSize = (width / 750) * 100;
				document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
			}
})