/*
	初始化函数，页面加载时调用(OK)
说明：由Index.html的onload调用init()，主要功能是获得画布上下文环境对象，对画布canvas添加鼠标点击事件，添加鼠标移动事件的侦听，
*/
function init() {  
    showStart = true;//body onload的时候从false变为true
    ctx = document.getElementById('canvas').getContext('2d'); //获得画布上下文环境对象
    var canvas = document.getElementById('canvas'); //获得画布对象
    canvas.addEventListener('click', cCheck, false); //画布中添加鼠标点击事件
    canvas.addEventListener('mousemove', mMove, false); //画布中添加鼠标移动事件
	canvas.addEventListener('mousedown', mDown, false); //画布中添加鼠标点击事件
	canvas.addEventListener('mouseup', mUp, false); //画布中添加鼠标放开事件
	Index_page();
}

//首页的画面
function Index_page(){
    var startBg = new picture(0,0,0, 0, 960, 576, startImage);
    startShow.push(startBg);
    startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
    startShow.push(startButton1);
    startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
    startShow.push(startButton2);
    startButton3 = new picture(startBg.sx + 450,startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
    startShow.push(startButton3);
    drawArr(startShow);  
}
//游戏结束画面
function game_over_page(){
  gameover=true;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  var endBg = new picture(0, 0, 0, 0, 960, 576, game_over);
  endShow.push(endBg);
  fanHuiButton = new picture(0,0,endBg.sx+320,endBg.sy+350, 130, 48, fanHui);
  endShow.push(fanHuiButton);
  jiaZaiButton = new picture(0,0,endBg.sx+508,endBg.sy+350, 130, 48, jiazai);
  endShow.push(jiaZaiButton);
  drawArr(endShow);  
}


function big_map(a){	

	var temp=a;
	//if(typeof bigMapLoop == 'undefined'){}
	//else{clearInterval(bigMapLoop);}
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	bigMapoption=true;
	IntoGuanKa=false;
	startShow.push(bigBg);
	if(temp==0){big_option=0;}//说明是从小地图过来的
    if(temp==1){startShow.push(zhengLiButton1);}
	else{startShow.push(zhengLiButton);}
	if(temp==2){startShow.push(duiWuButton1);}
	else{startShow.push(duiWuButton);}
	if(temp==3){startShow.push(shangDianButton1);}
	else{startShow.push(shangDianButton);}
	if(temp==4){startShow.push(systemButton1);}
	else{startShow.push(systemButton);}
   
	startShow.push(level_1);
	if(mapLevel==1){startShow.push(level_2);}
	else if(mapLevel==2){startShow.push(level_2);startShow.push(level_3);}
	else if(mapLevel==3){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);}
	else if(mapLevel==4){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);}
	else if(mapLevel==5){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);}
	else if(mapLevel==6){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);}
	else if(mapLevel==7){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);}
	else if(mapLevel==8){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);}
	else if(mapLevel==9){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);startShow.push(level_10);}
	else if(mapLevel==10){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);startShow.push(level_10);}//startShow.push(level_11);
//	else if(mapLevel==11){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);startShow.push(level_10);startShow.push(level_11);startShow.push(level_12);}
	
//startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);startShow.push(level_10);


	//startShow.push(level_9);
	//startShow.push(level_10);
	startShow.push(smallLQS);
	
	drawArr(startShow);
}
