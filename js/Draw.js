/*
说明：定义各种draw函数，这些draw函数是Class.js中的各个类的成员方法的具体实现(OK)
*/

/*
	在画布上显示文本
*/
function drawText() {
    ctx.font = this.fonts;
    ctx.fillStyle = this.fillstyle;
    ctx.fillText(this.name, this.sx, this.sy);
}
/*
	在画布上画一个方格
*/
function drawRect() {
    ctx.fillStyle = this.fillstyle;
    ctx.fillRect(this.sx, this.sy, this.swidth, this.sheight);
}
/*
	在画布上画一个方框
*/
function drawBox() {
    ctx.strokeStyle = this.strokestyle;
    ctx.lineWidth = 4;
    ctx.strokeRect(this.sx, this.sy, this.swidth, this.sheight);
}
/*
	在画布上画圆角线条
*/
function drawRound() {
    ctx.strokeStyle = this.fillstyle;
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineWidth = this.sheight;
    ctx.moveTo(this.sx, this.sy);
    ctx.lineTo(this.sx + this.swidth, this.sy);
    ctx.stroke();
}
/*
	在画布上显示一张图片
*/
function drawAnImage() {
    ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight);
}
function drawPic() {
    ctx.drawImage(this.img, this.dx, this.dy, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh);
}
/*
	由人物类调用，在画布中绘制人物
*/
function draw() {
    var image = new Image();
    image.src = this.img;
    ctx.drawImage(image, this.dx, this.dy, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh);
}
/*
	在画布上绘制所有数组中的对象
*/
//关卡的动画效果
var GK_I=0;
//var a=[0,148,296,444,592,740,909,1097,1267,1430,1595];
//var b=[0,3,4,2,6,2,5,14,4,-2,3];
var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,
296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,
444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,
592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,
740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,
909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,
1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,
1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,
1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,
1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,];
var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,
4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,
3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
var nihao=0;
var shumei=false;
function drawAll() {

	//清空画布
     ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	 //画背景图片
     bg.draw();

	if(mapLevel==1){
		ctx.drawImage(GuanKa,a[GK_I],b[GK_I],142,142,bg.sx+1105,bg.sy+429,142,142);
  	}	
	if(mapLevel==1){ 
		if(GK_I==a.length){GK_I=0;}
		else{GK_I++;}
		ctx.drawImage(GuanKa,a[GK_I],b[GK_I],142,142,bg.sx+1105,bg.sy+429,142,142);
	}		
	
	
	if(mapRightMov){
//	   if(bg.sx==-288){clearInterval(mapDraw);mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    if(bg.sx==-288){mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    else{bg.sx-=2;mapMovX-=2;}//window.cancelAnimationFrame(mapDraw);mapDraw=null;
	}else
	if(mapLeftMov){
//	  if(bg.sx==0){clearInterval(mapDraw);mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    if(bg.sx==0){mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    else{ bg.sx+=2;mapMovX+=2;}
	}else
	if(mapUpMov){
//		if(bg.sy==0){clearInterval(mapDraw);mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
		if(bg.sy==0){mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
		else{ bg.sy+=2;mapMovY+=2;}
	}else
	if(mapDownMov){
//	   if(bg.sy==-192){clearInterval(mapDraw);mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
		if(bg.sy==-192){mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    else{bg.sy-=2;mapMovY-=2;}
	}
	
    changeSxSy(rolesArray);//changeSxSy用于更新人物的坐标，rolesArray放我方角色
    changeSxSy(enemysArray);//changeSxSy用于更新人物的坐标，rolesArray放敌方角色	
    changeSxSy(everything1);
	drawArr(everything3);//drawArr方法用于画那些UI位置不随地图滚动变化的UI,即相对于canvas是固定不变的,everything3放的是菜单，不包括系统的那菜单
    changeSxSy(rangeShow);
    drawArr(itemArray);
    drawArr(skillArray);
    drawArr(powerArray); 
	drawArr(spiritArray);
    changeSxSy(everything2);
    drawArr(everything);
	drawArr(shadowShow);
    changeSxSy(attackShow);
    changeSxSy(hpShow);
    drawArr(statusArray);
    drawArr(speArray);
	drawArr(dialogArray);
	drawArr(confirmArray);
	drawArr(info);
	drawArr(tishi);
nihao=window.requestAnimationFrame(drawAll);	
if(shumei){window.cancelAnimationFrame(nihao);}

}
/*
	遍历对象数组，调用每个对象的draw方法
*/
function drawArr(arr) {
    for (var i = 0; i < arr.length; i++) arr[i].draw();
}

/*
  更新sx,sy
*/
function changeSxSy(arr){
    for (var i = 0; i < arr.length; i++) {
		arr[i].sx=arr[i].mapX+bg.sx;
		arr[i].sy=arr[i].mapY+bg.sy;
        arr[i].draw();
	}
}
//大地图的画
function drawBigMap(){
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawArr(startShow);
	drawArr(shadowShow);
	drawArr(everything1);//专门用来放定住红色的框
	drawArr(everything2);//放跟着鼠标移动的绿色的框
	drawArr(confirmArray);//放调整道具数量的背景框以及按钮
	drawArr(tishi);
}
//点击返回按钮的时候发动
function clearAll(){
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    clearArray(enemysArray);
    clearArray(everything1);
    clearArray(rangeShow);
    clearArray(everything2);
    clearArray(info);
    clearArray(everything);
	clearArray(shadowShow);
    clearArray(attackShow);
    clearArray(hpShow);
    clearArray(dialogArray);
    clearArray(confirmArray);
    clearArray(statusArray);
}
