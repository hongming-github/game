/*
	鼠标移动函数，鼠标移动时触发(OK)
*/
var mapMovX=0;//记录地图水平的位移量
var mapMovY=0;//记录地图竖值方向的位移量
var mapLeftMov=false;//地图向左移动的开关
var mapRightMov=false;//地图向右移动的开关
var mapUpMov=false;//地图向上移动的开关
var mapDownMov=false;//地图向下移动的开关
function mMove(e) {
	
	var mx = e.pageX - canvas.offsetLeft; //相对于画布的x坐标
    var my = e.pageY - canvas.offsetTop; //相对于画布的y坐标
	if (showStart) {//开始页面的鼠标移动的动太效果
			if (MouseOnObj(mx, my, startButton1)) {
				clearArr(startShow);
				var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450+8,startBg.sy + 180-8,startBg.sx + 450+8, startBg.sy + 180-8, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450, startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else 
			if (MouseOnObj(mx, my, startButton2)) {
				clearArr(startShow);
			   var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450+8,startBg.sy + 250-8,startBg.sx + 450+8, startBg.sy + 250-8, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450,startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else 
			if (MouseOnObj(mx, my, startButton3)) {
				clearArr(startShow);
				var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450+8, startBg.sy + 320-8,startBg.sx + 450+8, startBg.sy + 320-8, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else {
				clearArr(startShow);
				Index_page();
			}
	}else/* if(!end){
        if(0<mx&&mx<24){console.log("鼠标在左边");mapLeftMov=true;mapRightMov=false; mapUpMov=false;mapDownMov=false;}
		else if(936<mx&&mx<960){console.log("鼠标在右边");mapRightMov=true;leftMov=false;mapUpMov=false; mapDownMov=false;}
		else if(0<my&&my<24){console.log("鼠标在上边");mapRightMov=false;leftMov=false;mapUpMov=true; mapDownMov=false;}
		else if(544<my&&my<568){console.log("鼠标在下边");mapRightMov=false;leftMov=false;mapUpMov=false; mapDownMov=true;}
		else {infoShow(mx, my);mapRightMov=false;mapLeftMov=false;mapUpMov=false; mapDownMov=false;clearInterval(mapDraw);}
	}*/
	
	if(gameover){//游戏结束
		console.log("游戏结束");
	}else
	if(cangKuShow){//显示仓库
		console.log("显示仓库");
		if(tempp==00){cangKuMove(mx,my,storehouse.additems,tempp);}
		if(tempp==10){cangKuMove(mx,my,storehouse.addskills,tempp);}
		if(tempp==20){cangKuMove(mx,my,storehouse.addequips,tempp);}
		if(tempp==30){cangKuMove(mx,my,storehouse.addpowers,tempp);}	
	}else
	if(nextloading){//加载下一关
		console.log("加载下一关的资源");
	}else
	if(itemStore){//道具商店的开关
		console.log("道具商店的开关");
	   itemStoreMove(mx,my,storehouse.additems,store.items);
	}else
	if(equipStore){//武器商店
		console.log("武器商店");
		equipStoreMove(mx,my,storehouse.addequips,store.equips);
	}else
	if(ZBZhengLi){//装备整理
		console.log("装备");
       equipMove(mx,my,rolesArray[big_role_index].equips,storehouse.addequips);
	}else
	if(DuiYuan){//队员
      console.log("队员");
	}else  
	if(sureToFX){//确定封印？
		console.log("确定封印？");
	}else   
	if(itemNumChange){//跳出改变道具的数量的框
	   if(isdown){//如果鼠标按下了
		   var movex=mx-mdownx;
		   if((huaKuai.sx==274&&movex>0)||(huaKuai.sx==454&&movex<0)||(huaKuai.sx>274&&huaKuai.sx<454) && itemOption!=12){//如果滑块的坐标在基准线的范围内，【274,454】  
			   //更新滑块的坐标
			   huaKuai.sx=huaKuai.mapX+movex;
			   if(huaKuai.sx>454){huaKuai.sx=454;}
			   else if(huaKuai.sx<274){huaKuai.sx=274;}
			   //根据滑块的坐标计算出数量
			   var index;//用来定位是哪个道具的数量
			   if(itemOption==0||itemOption==1){
				   if(dingzhukuangLeft[0]==1){index=0;}
				   else if(dingzhukuangLeft[1]==1){index=1;}
				   else if(dingzhukuangLeft[2]==1){index=2;}
				   else if(dingzhukuangLeft[3]==1){index=3;}
				   else if(dingzhukuangLeft[4]==1){index=4;}
				   dragNum= Math.ceil(((huaKuai.sx-274)/180)*rolesArray[big_role_index].items[index].num);
			   }else if(itemOption==8){//道具商店
			       if(dingzhukuangLeft[0]==1){index=0;}
				   else if(dingzhukuangLeft[1]==1){index=1;}
				   else if(dingzhukuangLeft[2]==1){index=2;}
				   else if(dingzhukuangLeft[3]==1){index=3;}
				   else if(dingzhukuangLeft[4]==1){index=4;}
				   dragNum= Math.ceil(((huaKuai.sx-274)/180)*storehouse.additems[index].num);
			   }else if(itemOption==2||itemOption==3||itemOption==9||itemOption==11){
				   if(dingzhukuangRight[0]==1){index=0;}
				   else if(dingzhukuangRight[1]==1){index=1;}
				   else if(dingzhukuangRight[2]==1){index=2;}
				   else if(dingzhukuangRight[3]==1){index=3;}
				   else if(dingzhukuangRight[4]==1){index=4;}
				   else if(dingzhukuangRight[5]==1){index=5;}
				   if(itemOption==9){//购买道具
					   //用户选择的道具的数量
					   dragNum= Math.ceil(((huaKuai.sx-274)/180)*store.items[index].num);
					   //如果买不起
					   if(dragNum*returnItemPrice(store.items[index].id)>teamMoney){
						  dragNum=Math.floor(teamMoney/returnItemPrice(store.items[index].id));
					   }
				   }else if(itemOption==11){//购买武器
				        //用户选择的道具的数量
					   dragNum= Math.ceil(((huaKuai.sx-274)/180)*store.equips[index].num);
					   //如果买不起
					   if(dragNum*returnEquipPrice(store.equips[index].id)>teamMoney){
						  dragNum=Math.floor(teamMoney/returnEquipPrice(store.equips[index].id));
					   }
				   }
					else{dragNum= Math.ceil(((huaKuai.sx-274)/180)*storehouse.additems[index].num);}
			   }    
			   selsectNum.name="您选择了  "+dragNum+"  份该道具";		
		   }
			if((huaKuai.sx==394&&movex>0)||(huaKuai.sx==574&&movex<0)||(huaKuai.sx>394&&huaKuai.sx<574)&&itemOption==12){//单独仓库中的滑块如果滑块的坐标在基准线的范围内，【394,574】  
			   //更新滑块的坐标
			   huaKuai.sx=huaKuai.mapX+movex;
			   if(huaKuai.sx>574){huaKuai.sx=574;}
			   else if(huaKuai.sx<394){huaKuai.sx=394;}
			   //根据滑块的坐标计算出数量
			   var index;//用来定位是哪个道具的数量
			   if(dingzhukuangRight[0]==1){index=0;}
				   else if(dingzhukuangRight[1]==1){index=1;}
				   else if(dingzhukuangRight[2]==1){index=2;}
				   else if(dingzhukuangRight[3]==1){index=3;}
				   else if(dingzhukuangRight[4]==1){index=4;}
				   else if(dingzhukuangRight[5]==1){index=5;} 
				   if(tempp==00){
					   dragNum= Math.ceil(((huaKuai.sx-394)/180)*storehouse.additems[index].num);
				   }
		           else if(tempp==10||tempp==30){
					   dragNum=1;
				   }
				   else if(tempp==20){				   
					   dragNum= Math.ceil(((huaKuai.sx-394)/180)*storehouse.addequips[index].num);
				   }
			   }			  
			   selsectNum.name="您选择了  "+dragNum+"  份该道具"; 
		       drawBigMap();
	       } 
	   else{ 
		   huaKuai.mapX=huaKuai.sx;
		   }//鼠标松开的时候更新滑块的mapX.
	}else
	if(NJZhengLi){//怒技整理
	  powerMove(mx,my,rolesArray[big_role_index].powers,storehouse.addpowers);
	}else
	if(MJZhengLi){//秘技整理
	  skillMove(mx,my,rolesArray[big_role_index].skills,storehouse.addskills);
	}else
	if(DJZhengLi){//道具整理
	   itemMove(mx,my,rolesArray[big_role_index].items,storehouse.additems);
	}else
	if(bigMapoption){	
	}else
	if (showStart) {//开始页面的鼠标移动的动太效果
			if (MouseOnObj(mx, my, startButton1)) {
				clearArr(startShow);
				var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450+8,startBg.sy + 180-8,startBg.sx + 450+8, startBg.sy + 180-8, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450, startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else 
			if (MouseOnObj(mx, my, startButton2)) {
				clearArr(startShow);
			   var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450+8,startBg.sy + 250-8,startBg.sx + 450+8, startBg.sy + 250-8, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450,startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else 
			if (MouseOnObj(mx, my, startButton3)) {
				clearArr(startShow);
				var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450+8, startBg.sy + 320-8,startBg.sx + 450+8, startBg.sy + 320-8, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else {
				clearArr(startShow);
				Index_page();
			}
	}else 
	if(gameBackGroundShow){
	}else
	if (att || skillAtt || powerAtt) { //如果普通攻击，秘技攻击，怒攻击
		everything2.pop();
		infoShow(mx, my);
/*		if (MouseOnRange(mx, my)) { 	
			if (MouseOnEnemys(mx, my)) {
				 putRec(mx,my);               
			}
		}*/
	} else
	if (itemShow) { //道具显示，在鼠标移动的时候会有绿色的框框跟着走动
		console.log("hhhhhhh");
		confirmArray.pop();
		if (MouseOnObj(mx, my, ItemBg)) {
			var t = rolesArray[rolesIndex].items.length;
				if (my > ItemBg.sy && my < ItemBg.sy + t * rpx && mx > ItemBg.sx && mx < ItemBg.sx + 4 * rpx) {
					mrec.sx = ItemBg.sx;
					mrec.sy = (Math.floor(my / rpx)) * rpx;
					mrec.swidth = 4 * rpx;
					confirmArray.push(mrec);
				}
			}
//			drawAll();
	}else
	if (spiritShow) { //精神力显示	
		 confirmArray.pop();
		 if (MouseOnObj(mx, my, spiritBg)) {
			var t = rolesArray[rolesIndex].spirits.length;
				if (my > spiritBg.sy && my < spiritBg.sy + t * rpx && mx > spiritBg.sx && mx < spiritBg.sx + 4 * rpx) {
					mrec.sx = spiritBg.sx+2;
					mrec.sy = (Math.floor(my / rpx)) * rpx+3;
					mrec.swidth = 4 * rpx;
					confirmArray.push(mrec);
					}
				}
	//	  drawAll();
	}else
	if(IntoGuanKa){
	}else
	if (enemysStatusShow) {//如果敌人状态显示
	} else 
	if (rolesStatusShow){//人物状态的显示	
	}else
	if(powerShow){
		 confirmArray.pop();
		if(MouseOnObj(mx, my, powerBg)) {
		   var t = rolesArray[rolesIndex].powers.length;
		   if (my > powerBg.sy && my < powerBg.sy + t * rpx && mx > powerBg.sx && mx < powerBg.sx + 13 * rpx) {
				mrec.sx = powerBg.sx;
				mrec.sy = (Math.floor(my / rpx)) * rpx;
				mrec.swidth = 13 * rpx;
				confirmArray.push(mrec);
			}
		}
	//	drawAll();
	}else
	if(skillShow){
		 confirmArray.pop();
		if(MouseOnObj(mx, my, skillBg)) {
		   var t = rolesArray[rolesIndex].skills.length;
		   if (my > skillBg.sy && my < skillBg.sy + t * rpx && mx > skillBg.sx && mx < skillBg.sx + 13 * rpx) {
				mrec.sx = skillBg.sx;
				mrec.sy = (Math.floor(my / rpx)) * rpx;
				mrec.swidth = 13 * rpx;
				confirmArray.push(mrec);
			}
		}
	//	drawAll();
	}else
	if(spiritConfirmShow){//确定精神力
	   clearArray(everything2);
	}else
	if(skillConfirmShow){
	   clearArray(everything2);
	}else
	if(powerConfirmShow){
		clearArray(everything2);
	}else
	if(levelUpOk){//升级的开关	
		console.log("升级的开关");
	   if(info.length>0){clearArray(info);}
	   clearArray(everything2);
	}else
	if (itemConfirmShow){//确定使用道具的开关
		
	}else 
	if(afterRecoverShow){
		//--------加入鼠标移动的格子-----
		if (MouseOnObj(mx, my, ItemBg)) {
			var t = deadArray.length;
			if (my > ItemBg.sy+ 1 * rpx && my < ItemBg.sy + t * rpx + 1 * rpx && mx > ItemBg.sx && mx < ItemBg.sx + 4 * rpx)
			{
				mrec.sx = ItemBg.sx;
			mrec.sy = (Math.floor(my / rpx)) * rpx;
			mrec.swidth = 4 * rpx;
			//mrec.sheight=rpx;
			confirmArray.push(mrec);
			}
		}else{clearArray(confirmArray);}
//		drawAll(); 
	}else
	if (menu2Show) {//主菜单显示
		clearArray(confirmArray);
		 clearArray(everything2);
		//鼠标在菜单上
		if (MouseOnObj(mx, my, menu2)) {
			mrec.sx = menu2.sx;
			mrec.sy = (Math.floor(my / rpx)) * rpx;
			mrec.swidth = 4 * rpx;
			confirmArray.push(mrec);
			//如果鼠标移动到系统设置这里
			if (MouseOnObj(mx, my, menu2C[4])) {
				systemSet=true;
				if (mx > canvasWidth / 2) { menu3.sx =canvasWidth-8*rpx ; } 
				else {menu3.sx=  rpx * 4;}
				clearArray(dialogArray);
				dialogArray.push(menu3);
				for (var i = 0; i < 3; i++) {
					menu3C[i].sx= menu3.sx;
					dialogArray.push(menu3C[i]);
				}
			}else{systemSet=false;clearArray(dialogArray);}
		}else{
			//如果鼠标在系统弹出的背景上
			if(MouseOnObj(mx,my, menu3)){//添加绿色的框框
				if(systemSet){
				   mrec.sx= menu3.sx;
				   mrec.sy= (Math.floor(my / rpx)) * rpx;
				   mrec.swidth = 4 * rpx;
				   confirmArray.push(mrec);
				}else{clearArray(dialogArray);}
			}
			else{systemSet=false;clearArray(dialogArray);}
		}
	//	drawAll();
	}else
	if (menuShow) {//人物菜单显示									
		clearArray(confirmArray);
		clearArray(info);
		//鼠标在菜单上
		if (MouseOnObj(mx, my, menu)) {
			mrec.sx = menu.sx;
			mrec.sy = (Math.floor(my / rpx)) * rpx;
			mrec.swidth = 4 * rpx;
			mrec.sheight=rpx;
			confirmArray.push(mrec);
		}
//		drawAll(); 
	}else{	//鼠标移动到周围的时候，打开图片滚动的开关
		if(!levelUpOk){
		clearArray(everything2);
		if(dialogShowFlag||IntoGuanKa){if(info.length!=0){ clearArray(info);}}	
/*		else if(0<mx&&mx<24){clearInterval(mapDraw);mapLeftMov=true;mapRightMov=false; mapUpMov=false;mapDownMov=false;mapDraw=setInterval(drawAll,10);}
		else if(936<mx&&mx<960){clearInterval(mapDraw);mapRightMov=true;leftMov=false;mapUpMov=false; mapDownMov=false;mapDraw=setInterval(drawAll,10);}
		else if(0<my&&my<24){clearInterval(mapDraw);mapRightMov=false;leftMov=false;mapUpMov=true; mapDownMov=false;mapDraw=setInterval(drawAll,10);}
		else if(544<my&&my<568){clearInterval(mapDraw);mapRightMov=false;leftMov=false;mapUpMov=false; mapDownMov=true;mapDraw=setInterval(drawAll,10);}*/
		else if(0<mx&&mx<24){console.log("鼠标在左边");mapLeftMov=true;mapRightMov=false; mapUpMov=false;mapDownMov=false;}
		else if(936<mx&&mx<960){console.log("鼠标在右边");mapRightMov=true;leftMov=false;mapUpMov=false; mapDownMov=false;}
		else if(0<my&&my<24){console.log("鼠标在上边");mapRightMov=false;leftMov=false;mapUpMov=true; mapDownMov=false;}
		else if(544<my&&my<568){console.log("鼠标在下边");mapRightMov=false;leftMov=false;mapUpMov=false; mapDownMov=true;}
		else {infoShow(mx, my);mapRightMov=false;mapLeftMov=false;mapUpMov=false; mapDownMov=false;clearInterval(mapDraw);}
		}
	}
	
}