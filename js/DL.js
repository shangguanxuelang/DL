outer=document.getElementById("ec_slider_list");
inner=document.getElementById("ec_slider_item");
btnbox=document.getElementById("btn-box");
nextBtn=document.getElementById("nextBtn");
prevBtn=document.getElementById("prevBtn");
imgs=inner.getElementsByTagName("img")
btns=btnbox.getElementsByTagName("span")
pieceWidth=imgs[0].offsetWidth;
inner.style.width=pieceWidth*imgs.length+'px';
var time=null;//图片切换计时器
var time1=null;//图片滑动计时器
var index=0;
var control=true;//定义一个boolean值用来控制切换的时机（图片滚动过程中禁止切换）
//定义切换下一张的函数
function next(){
	index++;
	if(index >=imgs.length){
		index=1;
		inner.style.left=0;
	}
	tab();
}
//定义切换上一张的函数
function prev(){
	index--;
	if(index<0){
		inner.style.left=-pieceWidth*btns.length+'px';
		index=btns.length-1;
	}
	tab();
}
time=setInterval(next,3000);
for(var i=0;i<btns.length;i++){
	btns[i].index=i;
	btns[i].onclick=function(){
		clearInterval(time);
		index=this.index;
		tab();
		time=setInterval(next,2000);
	}
}
function tab(){
	// if(index>=imgs.length)
	// 	index=0;
	// if(index<0)
	// 	index=imgs.length-1;
	
	var t=0;//初始步数
	var maxT=50;//总步数
	var start=inner.offsetLeft;//获取起始位置
	var end =-pieceWidth*index;//计算结束位置
	var change=end-start;//计算总路程
	clearInterval(time1);
	time1=setInterval(function(){
		t++;
		if(t>=maxT){
			//当走到终点时，停止计时器
			clearInterval(time1);
			//在滚动动画执行完毕时，将control变为true
			control=true;
		}
		//(change/maxT*t)结果为当前运动多远
		inner.style.left=change/maxT*t+start+'px';
		// inner.style.left=Tween.Bounce.easeOut(t,start,change,maxT)+'px';
	},20)

	// inner.style.left=-pieceWidth*index+'px';
	for(var i=0;i<btns.length;i++){
		btns[i].className="";
		// if(index==i)
		// 	btns[i].className="active";
		if(index==btns.length){
			//如果当前图片为最后一张，下标为6等于btns.length，我们对应的按钮应该显示为第一个按钮。
			btns[0].className='active';
		}else{
			btns[index].className="active";
		}
	}
}
outer.onmouseover=function(){
	nextBtn.style.opacity=1;
	prevBtn.style.opacity=1;
}
outer.onmouseout=function(){
	nextBtn.style.opacity=0;
	prevBtn.style.opacity=0;
}
nextBtn.onmouseover=function(){
	nextBtn.style.opacity=1;
	prevBtn.style.opacity=1;
}
nextBtn.onmouseout=function(){
	nextBtn.style.opacity=0;
	prevBtn.style.opacity=0;
}
prevBtn.onmouseover=function(){
	nextBtn.style.opacity=1;
	prevBtn.style.opacity=1;
}
prevBtn.onmouseout=function(){
	nextBtn.style.opacity=0;
	prevBtn.style.opacity=0;
}
nextBtn.onclick=function(){
	if(control){
		//当control为true时才能执行切换
		clearInterval(time);
		next();
		time=setInterval(next,2000);
	}
	//每次点击之后就将control变为false
	control=false;
}
prevBtn.onclick=function(){
	//先停止自动走的计时器
	if(control){
		clearInterval(time);
		prev();
		time=setInterval(next,2000);
	}
	control=false;
}