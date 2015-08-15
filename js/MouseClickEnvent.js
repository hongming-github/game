/*
鼠标点击事件侦听
*///canvas.removeEventListener('click', cCheck, false);
function cCheck(e) {
    x = e.pageX - canvas.offsetLeft;
    y = e.pageY - canvas.offsetTop;
	console.log("x:   "+x+"Y:    "+y);
    tx = Math.floor(x / rpx) * rpx; //鼠标点击时的方格左上角的x坐标
    ty = Math.floor(y / rpx) * rpx; //鼠标点击时方格右上角的x坐标  

	
	if(nextloading){//加载下一关
		console.log("加载下一关");
		  if(IntoGuanKa){//借来nextloading用一下
			if(MouseOnObj(x, y, ensure)){
				nextloading=false;clearArray(shadowShow);
				if(mapLevel==1){
					dialogShowFlag=true;
					var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
					shadowShow.push(shadow);
			//		drawAll();
					dialogShow();
					
				}else if(mapLevel==2){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==3){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==4){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==5){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==6){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==7){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==8){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==9){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==10){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==11){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}
			}
		  }
	}else
	if(cangKuShow){//仓库
		console.log("仓库");	
		if(x>173&&x<290&&y>62&&y<102){	
			clearArr(everything1);dingzhukuangRight=[0,0,0,0,0];
		    tempp=20;
			showCangKU(storehouse.addequips,tempp);	
		}else if(x>300&&x<417&&y>62&&y<102){	
			clearArr(everything1);dingzhukuangRight=[0,0,0,0,0];
			tempp=00;
			showCangKU(storehouse.additems,tempp);
		}else if(x>430&&x<547&&y>62&&y<102){
			clearArr(everything1);dingzhukuangRight=[0,0,0,0,0];
		    tempp=10;
	    	showCangKU(storehouse.addskills,tempp);			
		}else if(x>557&&x<676&&y>62&&y<102){
			clearArr(everything1);dingzhukuangRight=[0,0,0,0,0];
		    tempp=30;
		    showCangKU(storehouse.addpowers,tempp);			
		}else if(MouseOnObj(x, y, CloseImg)){
			  tempp=20;
			  clearArr(everything1);
			  dingzhukuangLeft=[0,0,0,0,0];
		      dingzhukuangRight=[0,0,0,0,0,0];
			  bigMapoption=true;
			  cangKuShow=false;
			  clearArr(shadowShow);
			  drawArr(startShow);
		}
		if(tempp==00){cangKuClick(x,y,storehouse.additems,tempp);}
		if(tempp==10){cangKuClick(x,y,storehouse.addskills,tempp);}
		if(tempp==20){cangKuClick(x,y,storehouse.addequips,tempp);}
		if(tempp==30){cangKuClick(x,y,storehouse.addpowers,tempp);}
	}else
	if(itemStore){//道具商店
		console.log("道具商店  ");
		itemStoreClick(x,y,storehouse.additems,store.items,9);
	}else
	if(equipStore){//武器商店
		console.log("武器商店  ");
		equipStoreClick(x,y,storehouse.addequips,store.equips,10);
	}else
	if(ZBZhengLi){//装备整理
		console.log("装备整理  ");
		equipClick(x,y,rolesArray[big_role_index].equips,storehouse.addequips,8);
	}else
	if(DuiYuan){//队员
		console.log("队员  ");
	    duiyuanClick(x,y);
	}else
	if(sureToFX){//封印和开启的开关 和进入下一关的控制转移
		console.log("封印和开启的开关  ");
		if(MouseOnObj(x, y, ensure)){//点击确定
			//点击在怒技整理封印按钮
			if(itemOption==4){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].powers,storehouse.addpowers,6,dingzhukuangLeft,false);}
			//点击怒技整理启用按钮
			else if(itemOption==5){backToBag(rolesArray[big_role_index],storehouse.addpowers,rolesArray[big_role_index].powers,6,dingzhukuangRight,false);}
			//点击秘技整理封印按钮
			else if(itemOption==6){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].skills,storehouse.addskills,7,dingzhukuangLeft,false);}
			//点击秘技整理启用按钮
			else if(itemOption==7){backToBag(rolesArray[big_role_index],storehouse.addskills,rolesArray[big_role_index].skills,7,dingzhukuangRight,false);}
			//点击装备整理的确定装备
			else if(itemOption==12){backToBag(rolesArray[big_role_index],storehouse.addequips,rolesArray[big_role_index].equips,8,dingzhukuangRight,false);}
			//点击装备整理的放入仓库
			else if(itemOption==13){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].equips,storehouse.addequips,8,dingzhukuangLeft,false);}
			//点击武器商店的贩卖
			else if(itemOption==14){backToStoreHouse(rolesArray[big_role_index],storehouse.addequips,store.equips,10,dingzhukuangLeft,false);}
			//点击进入下一关的确定
			else if(itemOption==10){
				                    bigMapAudio.pause();			                       
									clearArr(confirmArray);
									if(mapLevel==1){smallLQS.sx=140;smallLQS.sy=205;}
									else if(mapLevel==2){smallLQS.sx=185;smallLQS.sy=135;}
									else if(mapLevel==3){smallLQS.sx=280;smallLQS.sy=110;}
									else if(mapLevel==4){smallLQS.sx=350;smallLQS.sy=65;}
									else if(mapLevel==5){smallLQS.sx=490;smallLQS.sy=30;}
									else if(mapLevel==6){smallLQS.sx=470;smallLQS.sy=125;}
									else if(mapLevel==7){smallLQS.sx=410;smallLQS.sy=190;}
									else if(mapLevel==8){smallLQS.sx=560;smallLQS.sy=170;}
									else if(mapLevel==9){smallLQS.sx=640;smallLQS.sy=130;}
									else if(mapLevel==10){smallLQS.sx=850;smallLQS.sy=85;}//无用
									else if(mapLevel==11){smallLQS.sx=630;smallLQS.sy=55;}//无用
									else if(mapLevel==12){smallLQS.sx=680;smallLQS.sy=68;}//无用
									drawBigMap();setTimeout(nextLevel,1000);
			}
	
		}
		else if(MouseOnObj(x, y, cancel)){//点击取消
			clearArr(confirmArray);
			sureToFX=false;
			if(itemOption==14){equipStore=true;}
			else if(itemOption==4||itemOption==5){NJZhengLi=true;}
			drawBigMap();
		}
	}else
	if(itemNumChange){//改变数量
		console.log("改变数量  ");
		if(MouseOnObj(x, y, ensure)){//点击确定
			//如果是点击了背包的放入仓库
			if(itemOption==0){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].items,storehouse.additems,5,dingzhukuangLeft,false);}
			//如果点击了背包的丢弃
			else if(itemOption==1){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].items,storehouse.additems,5,dingzhukuangLeft,true);}
			//如果点击了仓库的放入背包
			else if(itemOption==2){backToBag(rolesArray[big_role_index],storehouse.additems,rolesArray[big_role_index].items,5,dingzhukuangRight,false);}
			//如果点击了整理过程中仓库的丢弃
			else if(itemOption==3){backToBag(rolesArray[big_role_index],storehouse.additems,rolesArray[big_role_index].items,5,dingzhukuangRight,true);}
			//如果点击了道具商店的贩卖
			else if(itemOption==8){backToStoreHouse(rolesArray[big_role_index],storehouse.additems,store.items,9,dingzhukuangLeft,false);}
			//如果点击了道具商店的购买
			else if(itemOption==9){backToBag(rolesArray[big_role_index],store.items,storehouse.additems,9,dingzhukuangRight,false);}
			//如果点击了武器商店的购买
			else if(itemOption==11){backToBag(rolesArray[big_role_index],store.equips,storehouse.addequips,10,dingzhukuangRight,false);}
			//如果点击了单独仓库的丢弃
			else if(itemOption==12){
				if(tempp==00){backToBag(rolesArray[big_role_index],storehouse.additems,rolesArray[big_role_index].items,5,dingzhukuangRight,true);}
				else if(tempp==10){backToBag(rolesArray[big_role_index],storehouse.addskills,rolesArray[big_role_index].skills,5,dingzhukuangRight,true);}
				else if(tempp==20){backToBag(rolesArray[big_role_index],storehouse.addequips,rolesArray[big_role_index].equips,5,dingzhukuangRight,true);}
				else if(tempp==30){backToBag(rolesArray[big_role_index],storehouse.addpowers,rolesArray[big_role_index].powers,5,dingzhukuangRight,true);}
				}
		}
		else if(MouseOnObj(x, y, cancel)){//点击取消
			clearArr(confirmArray);
			dragNum=0;
			itemNumChange=false;
			if(itemOption==8||itemOption==9){itemStore=true;}
			else if(itemOption==11){equipStore=true;}
			else if(itemOption==12){cangKuShow=true;}
            else{DJZhengLi=true;}
			drawBigMap();
		}else if(MouseOnObj(x, y, minusButton)){//点击减少按钮
			 if(itemOption==0||itemOption==1||itemOption==8){
		       if(dingzhukuangLeft[0]==1){index=0;}
			   else if(dingzhukuangLeft[1]==1){index=1;}
			   else if(dingzhukuangLeft[2]==1){index=2;}
			   else if(dingzhukuangLeft[3]==1){index=3;}
			   else if(dingzhukuangLeft[4]==1){index=4;}
			   if(dragNum>0){
			      dragNum--;
				  huaKuai.sx=dragNum*180/rolesArray[big_role_index].items[index].num+274;
			   }
		   }else if(itemOption==2||itemOption==3||itemOption==9||itemOption==11||itemOption==12){
		       if(dingzhukuangRight[0]==1){index=0;}
			   else if(dingzhukuangRight[1]==1){index=1;}
			   else if(dingzhukuangRight[2]==1){index=2;}
			   else if(dingzhukuangRight[3]==1){index=3;}
			   else if(dingzhukuangRight[4]==1){index=4;}
			   else if(dingzhukuangRight[5]==1){index=5;}
			   if(itemOption==9){
				   if(dragNum>0){
                      dragNum--;
					  huaKuai.sx=dragNum*180/store.items[index].num+274;
				   }
			   }
			   else if(itemOption==11){
				   	  if(dragNum>0){
                      dragNum--;
					  huaKuai.sx=dragNum*180/store.equips[index].num+274;
				   }
			   }
			   else if(itemOption==12&&tempp==00){
				      if(dragNum>0){
					  dragNum--;
					  huaKuai.sx=dragNum*180/storehouse.additems[index].num+394;
					  }
				 }
			   else if(itemOption==12&&tempp==20){
				   	  if(dragNum>0){
                      dragNum--;
					  huaKuai.sx=dragNum*180/storehouse.addequips[index].num+394;
				      }
			     }
			   else if(itemOption==12&&tempp==10){
					  dragNum=1;
					  huaKuai.sx=dragNum*180/storehouse.addskills[index].num+394;
				 }
			   else if(itemOption==12&&tempp==30){
                      dragNum=1;
					  huaKuai.sx=dragNum*180/storehouse.addpowers[index].num+394;
			     }
			   else{if(dragNum>0){dragNum--;huaKuai.sx=dragNum*180/storehouse.additems[index].num+274;}}
		   }
		   selsectNum.name="您选择了  "+dragNum+"  份该道具";
		   drawBigMap();
		}else if(MouseOnObj(x, y, addButton)){//点击增加按钮
		   if(itemOption==0||itemOption==1||itemOption==8){
		       if(dingzhukuangLeft[0]==1){index=0;}
			   else if(dingzhukuangLeft[1]==1){index=1;}
			   else if(dingzhukuangLeft[2]==1){index=2;}
			   else if(dingzhukuangLeft[3]==1){index=3;}
			   else if(dingzhukuangLeft[4]==1){index=4;}
		//	   console.log(index+" "+dragNum+"rolesArray[big_role_index].items[index].num"+rolesArray[big_role_index].items[index].num);
			   if(dragNum<rolesArray[big_role_index].items[index].num){
			      dragNum++;
				  huaKuai.sx=dragNum*180/rolesArray[big_role_index].items[index].num+274;
			   }
		   }else if(itemOption==2||itemOption==3||itemOption==9||itemOption==11||itemOption==12){
		       if(dingzhukuangRight[0]==1){index=0;}
			   else if(dingzhukuangRight[1]==1){index=1;}
			   else if(dingzhukuangRight[2]==1){index=2;}
			   else if(dingzhukuangRight[3]==1){index=3;}
			   else if(dingzhukuangRight[4]==1){index=4;}
			   else if(dingzhukuangRight[5]==1){index=5;}
			   if(itemOption==9){
				   if(dragNum<store.items[index].num){
                      dragNum++;
					   //如果买不起
				      if(dragNum*returnItemPrice(store.items[index].id)>teamMoney){
				         dragNum=Math.floor(teamMoney/returnItemPrice(store.items[index].id));
						 huaKuai.sx=dragNum*180/store.items[index].num+274;
				      }else{
				    	 huaKuai.sx=dragNum*180/store.items[index].num+274;
				      }
				   }
			   }
			   else if(itemOption==11){
				   if(dragNum<store.equips[index].num){
                      dragNum++;
					   //如果买不起
				      if(dragNum*returnEquipPrice(store.equips[index].id)>teamMoney){
				         dragNum=Math.floor(teamMoney/returnEquipPrice(store.equips[index].id));
						 huaKuai.sx=dragNum*180/store.equips[index].num+274;
				      }else{
				    	 huaKuai.sx=dragNum*180/store.equips[index].num+274;
				      }
				   }
			   }
			   	else if(itemOption==12&&tempp==00){
				   if(dragNum<storehouse.additems[index].num)
				   {dragNum++;huaKuai.sx=dragNum*180/storehouse.additems[index].num+394;}
				 }
				else if(itemOption==12&&tempp==20){
				   if(dragNum<storehouse.addequips[index].num)
				   {dragNum++;huaKuai.sx=dragNum*180/storehouse.addequips[index].num+394;}
				 }
				else if(itemOption==12&&tempp==10){				   
				   dragNum=1;huaKuai.sx=dragNum*180/storehouse.addskills[index].num+394;
				 }
			    else if(itemOption==12&&tempp==30){
				   dragNum=1;huaKuai.sx=dragNum*180/storehouse.addpowers[index].num+394;
				 }
			   else{if(dragNum<storehouse.additems[index].num){dragNum++;huaKuai.sx=dragNum*180/storehouse.additems[index].num+274;}}
		   }
		   
		   selsectNum.name="您选择了  "+dragNum+"  份该道具";
		   drawBigMap();
	    }
	}else
	if(MJZhengLi){//秘技整理
		console.log("秘技整理  ");
        skillClick(x,y,rolesArray[big_role_index].skills,storehouse.addskills,7);
	}else
	if(NJZhengLi){//怒技整理
		console.log("怒技整理  ");
		powerClick(x,y,rolesArray[big_role_index].powers,storehouse.addpowers,6);
	}else
	if(DJZhengLi){//道具整理
		console.log("道具整理  ");
	   itemClick(x,y,rolesArray[big_role_index].items,storehouse.additems,5);
	}else
	if(bigMapoption){//表示大地图打开了
		console.log("表示大地图打开了  ");
	    var temp=0;//用来记录点在大地图那个按钮上
		if(MouseOnPic(x, y, zhengLiButton)){//点击整理按钮
			if(big_option==1){//第二次点击整理按钮
			   big_option=0;
			   clearArr(startShow);
			   big_map();
			}else{//第一次点击整理按钮
			   clearArr(startShow);
			   temp=1;
			   big_option=1;
			   big_map(temp);
			   startShow.push(daojuZLButton);
			   startShow.push(zhuangbeiButton);
			   startShow.push(nujiButton);
			   startShow.push(mijiButton);
			}
			drawArr(startShow);
		}else if(MouseOnPic(x, y, duiWuButton)){//点击队伍按钮
			if(big_option==2){//第二次点击队伍按钮
			   big_option=0;
			   clearArr(startShow);
			   big_map();
			}else{//第一次点击队伍按钮
			   clearArr(startShow);
			   temp=2;
			   big_option=2;
		       big_map(temp);
			   startShow.push(changkuButton);
			   startShow.push(duiyuanButton);
			}
			drawArr(startShow);
		}else if(MouseOnPic(x, y, shangDianButton)){//点击商店按钮
			if(big_option==3){//第二次点击商店按钮
			   big_option=0;
			   clearArr(startShow);
			   big_map();
		    }else{//第一次点击商店按钮
			   clearArr(startShow);
			   temp=3;
			   big_option=3;
			   big_map(temp);
			   startShow.push(daojuStore);
			   startShow.push(wuqiStore);
		    }
			drawArr(startShow);
		}else if(MouseOnPic(x, y, systemButton)){//点击系统按钮
			if(big_option==4){//第二次点击系统按钮
			   big_option=0;
			   clearArr(startShow);
			   big_map();
			}else{//第一次点击系统按钮
			   clearArr(startShow);
			   temp=4;
			   big_option=4;
			   big_map(temp);
			   startShow.push(CDButton);
			   startShow.push(JZButton);
			   startShow.push(TCButton);
			}
			drawArr(startShow);
		}else if(big_option==1){//如果已经点击了整理按钮
	    	if(MouseOnPic(x, y, daojuZLButton)){//点击道具整理
		    	temp=5;
				ZhengLi(rolesArray[big_role_index],temp);
			}else
			if(MouseOnPic(x, y, mijiButton)){//点击秘技整理
				temp=7;
				ZhengLi(rolesArray[big_role_index],temp);
			}else
			if(MouseOnPic(x, y, nujiButton)){//点击怒技整理
				temp=6;
				ZhengLi(rolesArray[big_role_index],temp);
			}else
			if(MouseOnPic(x, y, zhuangbeiButton)){//点击装备整理
				temp=8;
				ZhengLi(rolesArray[big_role_index],temp);
			}
	    }else if(big_option==2){
	    	if(MouseOnPic(x, y, duiyuanButton)){//点击队员
			   teamMember(rolesArray[big_role_index],0);
	    	}else if(MouseOnPic(x, y, changkuButton)){//点击仓库
				tempp=20;
	    		showCangKU(storehouse.addequips,tempp);
	    	}
	    }else if(big_option==3){
		    if(MouseOnPic(x, y, daojuStore)){//点击道具商店
			   temp=9;
			   ZhengLi(rolesArray[big_role_index],temp);
	    	}else if(MouseOnPic(x, y, wuqiStore)){//点击武器商店
			   temp=10;
			   ZhengLi(rolesArray[big_role_index],temp);
			}
		}else if(big_option==4){
			 if(MouseOnPic(x, y, TCButton)){
				 bigMapoption=false;bigMapAudio.pause(); showStart=true;  clearAll();  startRequest();  Index_page();
			 }else if(MouseOnPic(x, y, CDButton)){
				 saveData();alert("存档成功");
			 }
		}else if(MouseOnPic(x, y, level_2)&&mapLevel==1){//点击在第2关
		   clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_3)&&mapLevel==2){//点击在第3关
		   clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_4)&&mapLevel==3){//点击在第4关
			 clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_5)&&mapLevel==4){//点击在第5关
			 clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_6)&&mapLevel==5){//点击在第6关
			 clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_7)&&mapLevel==6){//点击在第7关
			clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_8)&&mapLevel==7){//点击在第8关
			clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_9)&&mapLevel==8){//点击在第9关
			clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_10)&&mapLevel==9){//点击在第10关
			clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_11)&&mapLevel==10){//点击在第11关
			clearArray(everything2);itemOption=10;areUSureFX();
		}
	}else
	if(gameover){//游戏结束
	   console.log("游戏结束  ");
	   if(MouseOnObj(x, y, fanHuiButton)){
		  gameover=false;
		  showStart=true;
		  clearAll();
		  startRequest(); 
		  Index_page();
	   }else if(MouseOnObj(x, y, jiaZaiButton)){
		  //gameover=false;
		  //loadData();  
	   }
	}else
	if(gameBackGroundShow){//游戏背景说明
		  console.log("游戏背景说明  ");
		if(x>706&&x<778&&y>500&&y<530){  
			 window.cancelAnimationFrame(handle); 
			 handle = null;
			gameBackGroundShow=false;
			gamebgShow.pause();
			moveMap();
		}
	}else
    if (showStart) {//开始界面
		console.log("开始界面  ");
        if (MouseOnObj(x, y, startButton1)) {
		    begin.pause();   
            setTimeout(function() {
                clearArr(startShow);
                showStart = false;
                //dialogShow();
				
				//showMapName();
				//drawAll();	
				gameBGShow();
            },
            200);
        }
        if (MouseOnObj(x, y, startButton2)) {
        	begin.pause();  
        	loadData();
        }
        if (MouseOnObj(x, y, startButton3)) {
            alert("您真乃隐士高人也！");
        }
    }else
	if(enemysStatusShow) {//敌人状态显示
			console.log("敌人状态显示  ");
        if (MouseOnObj(x, y, CloseImg)) {
            enemysStatusShow = false;
            clearArray(statusArray);
            clearArray(speArray);
        }
        if (MouseOnObj(x, y, leftArrow)) {
            clearArray(statusArray);
            clearArray(speArray);
            enemysIndex--;
            if (enemysIndex < 0) {
                enemysIndex = enemysArray.length - 1;
            }
            while (enemysArray[enemysIndex].HP <= 0) {
                enemysIndex--;
                if (enemysIndex < 0) {
                    enemysIndex = enemysArray.length - 1;
                }
            }
           	showEnemysDetailStatus(enemysArray[enemysIndex]);
        }
        if (MouseOnObj(x, y, rightArrow)) {
            clearArray(statusArray);
            clearArray(speArray);
            enemysIndex++;
            if (enemysIndex > enemysArray.length-1) {
                enemysIndex = 0;
            }
            while (enemysArray[enemysIndex].HP <= 0) {
                enemysIndex++;
                if (enemysIndex > enemysArray.length-1) {
                    enemysIndex = 0;
                }
            }
          	showEnemysDetailStatus(enemysArray[enemysIndex]);
        }
        if (MouseOnObj(x, y, skill)) {
            clearArray(speArray);
            skill.img = mj2;
            power.img = nj1;
            equip.img = zb1;
			skillStatus(enemysArray[enemysIndex]);
			
        }
        if (MouseOnObj(x, y, power)) {
            clearArray(speArray);
            skill.img = mj1;
            power.img = nj2;
            equip.img = zb1;
			powerStatus(enemysArray[enemysIndex]);
        }
        if (MouseOnObj(x, y, equip)) {
            clearArray(speArray);
            skill.img = mj1;
            power.img = nj1;
            equip.img = zb2;
	//		drawAll();
        }
    }else
	if(rolesStatusShow) {//我方状态显示
			console.log("我方状态显示  ");
        if (MouseOnObj(x, y, CloseImg)) {
            rolesStatusShow = false;
            if(!menu2Show){menuShow=true;}
            clearArray(statusArray);
            clearArray(speArray);
        }
        if (MouseOnObj(x, y, leftArrow)) {
            clearArray(statusArray);
            clearArray(speArray);
            tmpIndex--;
            if (tmpIndex < 0) {
                tmpIndex = rolesArray.length - 1;
            }
			while (rolesArray[tmpIndex].HP <= 0) {
                tmpIndex--;
                if (tmpIndex < 0) {
                    tmpIndex = rolesArray.length - 1;
                }
            }
            showRolesDetailStatus(rolesArray[tmpIndex],statusBg.sx,statusBg.sy);
           // skillStatus(rolesArray[tmpIndex]);
        }
        if (MouseOnObj(x, y, rightArrow)) {
            clearArray(statusArray);
            clearArray(speArray);
            tmpIndex++;
            if (tmpIndex > rolesArray.length-1) {
                tmpIndex = 0;
            }
			while (rolesArray[tmpIndex].HP <= 0) {
                tmpIndex++;
                if (tmpIndex > rolesArray.length-1) {
                    tmpIndex = 0;
                }
            }
            showRolesDetailStatus(rolesArray[tmpIndex],statusBg.sx,statusBg.sy);
          
        }
        if (MouseOnObj(x, y, skill)) {
            clearArray(speArray);
            skill.img = mj2;
            power.img = nj1;
            equip.img = zb1;
            skillStatus(rolesArray[tmpIndex]);
        }
        if (MouseOnObj(x, y, power)) {
            clearArray(speArray);
            skill.img = mj1;
            power.img = nj2;
            equip.img = zb1;
            powerStatus(rolesArray[tmpIndex]);
            
        }
        if (MouseOnObj(x, y, equip)) {
            clearArray(speArray);
            skill.img = mj1;
            power.img = nj1;
            equip.img = zb2;
			//drawAll();
        }
    }else
	if(levelUpOk){//升级OK
		console.log("升级OK  ");
		coutLev=0; 
		clearArr(powerArray);//清空放升级框的数组powerArray
		finish = true;//这里的finish有两种，一种是升级后的让finish=true,还有一种是没有升级时打死敌人的finish=true
		levelUpOk = false;//升级开关关掉
		if(isEnemyAllDead()){
				clearInterval(att_end);
				nextGuanKaOpen();
		}
		if(isBossDead()&&mapLevel==3){//&&mapLevel==9&&mapLevel==10
						enemyTurn.pause();
               	        clearInterval(att_end);
				        nextGuanKaOpen();
						}
	/*	if(isBossDead()){
		    	enemyTurn.pause();
               	clearInterval(att_end);
				nextGuanKaOpen();
		}*/
	}else
	if(spiritHuiChun){//回春技能
		console.log("这里调用回春的函数啦1");
		if(MouseOnRoles(x,y)){
		findRolesIndex(x,y);
		eval(fl + '()'); 
		
		}else{alert("请选择我方角色");}
	}else
    if(skillAtt) {//秘技攻击
        if (MouseOnRange(x, y)) { //判断鼠标坐标是否在主角攻击范围
            if (MouseOnEnemys(x, y)) { //判断坐标是否在敌人图片上
                skillAtt = false;
                end = true;
                clearArray(rangeShow);
                rolesArray[rolesIndex].MP -= skilltmp;
                eval(fl + '()');
            } else if (MouseClickOnRolesIndex(x, y)) { //鼠标点击在已选中的角色上			
                clearArray(rangeShow);
                skillAtt = false;
                find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
                change(find); 
            }
        }
    }else
    if(powerAtt) {//怒攻击
        if (MouseOnRange(x, y)) { //判断鼠标坐标是否在主角攻击范围
            if (MouseOnEnemys(x, y)) { //判断坐标是否在敌人图片上
                powerAtt = false;
                end = true;
                clearArray(rangeShow);
                rolesArray[rolesIndex].pow -= powertmp; //修改人物的pow值
                eval(fl + '()');
            } else if (MouseClickOnRolesIndex(x, y)) { //鼠标点击在已选中的角色上			
                clearArray(rangeShow);
                powerAtt = false;
                find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
                change(find); 
            }
        }
    }else
    if(att) {//普通攻击
        if (MouseOnRange(x, y)) {
            if (MouseOnEnemys(x, y)) {
                att = false;
                end = true;
                clearArray(rangeShow);
                var tIndex;
				//找到敌人的下标
                for (var i = 0; i < enemysArray.length; i++) {
                    if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
                       tIndex = i;	  
                    }
                }
				
				//我方普通攻击敌人
				console.log("我方普通攻击敌人");
                normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]);
			
				//对我方普通攻击敌人进行侦听		
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
						//如果敌人在我方的普通攻击下还活着
                        if (enemysArray[tIndex].HP > 0) {
							//敌人普通攻击我方
							console.log("敌人普通攻击我方");
                            normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);
							console.log("如果我方在敌人的普通攻击下还活着");
							//对敌人普通攻击我方进行侦听
                            var tt2 = setInterval(function() {
								console.log("如果我方在敌人的普通攻击下还活着"+finish);
                                if (finish) {
                                    finish = false;
                                    clearInterval(tt2);
									console.log("如果我方在敌人的普通攻击下还活着");
									//如果我方在敌人的普通攻击下还活着
                                    if (rolesArray[rolesIndex].HP > 0) {
										console.log("我方在敌人的普通攻击下还活着   "+enemysArray[tIndex].name);
										//如果是BOSS
										if(enemysArray[tIndex].type==1){
											//如果boss的怒值满了，则优先发动
											if(enemysArray[tIndex].pow==enemysArray[tIndex].fullPow){
												console.log("因为BOSS满怒值，所以发动怒攻击");
											    Boss_power_attacked(tIndex);
												var boss_power_end1=setInterval(function(){
													 if(bossPowerEnd){
														 console.log("侦听到第一次怒攻击发动结束（不管有没有发动成功）");
														  clearInterval(boss_power_end1);
														  bossPowerEnd = false;
														  if(rolesArray[rolesIndex].HP>0){  
															console.log("再次发动怒攻击");
															setTimeout(_Boss_power_attacked(tIndex), 2000);
														  }
														  else{//如果在BOSS的秘技攻击下，我方角色死了
															    console.log("我方死了");
																enemysArray[tIndex].dy = 240;
																powerNumber=2;
																deadEvent(null,rolesArray[rolesIndex]);
																var our_role_dead = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(our_role_dead);
																		if (!judgeOver()) {
																			if (judeEnd()) {
																				recoverSpirit();
																				end = true;
																				ai = true;
																				enemyRoundShow();
																				setTimeout(function() {
																					enemysAction();
																				},
																				2000);
																			}else{end=false;}
																		} else {
																			game_over_page();
																			
																		}
																	}//finish
																});
														  }//else
													 }//finish
												});//var boss_power_end1
												
												var boss_power_end2=setInterval(function(){
													 if(bossPowerEnd){
														  console.log("第二次侦听到怒攻击发动结束，不管有没有发动成功");
														  clearInterval(boss_power_end2);
														  bossPowerEnd = false;
														  enemysArray[tIndex].dy = 240;
														  if(rolesArray[rolesIndex].HP>0){
																	 powerNumber=2;
																	 rolesArray[rolesIndex].dy = 240;
																	 if (judeEnd()) {
																		   recoverSpirit();
																		   end = true;
																		   ai = true;
																		   enemyRoundShow();
																		   setTimeout(function() {
																				enemysAction();
																		   },2000);
																	   }else{end=false;}  	 
														  }
														  else{//如果在BOSS的秘技攻击下，我方角色死了
																powerNumber=2;
																deadEvent(null,rolesArray[rolesIndex]);
																var our_role_dead = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(our_role_dead);
																		if (!judgeOver()) {
																			if (judeEnd()) {
																				recoverSpirit();
																				end = true;
																				ai = true;
																				enemyRoundShow();
																				setTimeout(function() {
																					enemysAction();
																				},
																				2000);
																			}else{end=false;}
																		} else {
																			game_over_page();
																		}
																	}//finish
																});
														  }//else
													 }//finish
												});//var boss_power_end2		
											}//if(enemyArray)
											else{
												var n = Math.floor(Math.random() * 100) + 1;
												console.log("BOSS怒值没满，按照概率");
												if(n<=50){
													console.log("进入秘技攻击");
													//执行BOSS的秘技函数
													Boss_skill_attacked(tIndex);
													//boss秘技执行完了
													var boss_skill_end=setInterval(function(){
														 if(finish){
															 console.log("boss秘技执行完了");
															  clearInterval(boss_skill_end);
															  finish = false;
															  rolesArray[rolesIndex].HP -= skillVar;
															  //如果在BOSS的秘技攻击下，我方角色还活着
															  if(rolesArray[rolesIndex].HP>0){
																	 rolesArray[rolesIndex].dy = 240;
																	 if (judeEnd()) {
																		   recoverSpirit();
																		   end = true;
																		   ai = true;
																		   enemyRoundShow();
																		   setTimeout(function() {
																				enemysAction();
																		   },2000);
																	   }else{end=false;}      
															  }
															  else{//如果在BOSS的秘技攻击下，我方角色死了
																	deadEvent(null,rolesArray[rolesIndex]);
																	var our_role_dead = setInterval(function() {
																		if (finish) {
																			finish = false;
																			clearInterval(our_role_dead);
																			if (!judgeOver()) {
																				if (judeEnd()) {
																					recoverSpirit();
																					end = true;
																					ai = true;
																					enemyRoundShow();
																					setTimeout(function() {
																						enemysAction();
																					},
																					2000);
																				}else{end=false;}
																			} else {
																				
																				game_over_page();
																			}
																		}
																	});
															  }//else
														 }// if(finish)
													});//var boss_skill_end
												}else{
													console.log("进入怒攻击");
													Boss_power_attacked(tIndex);
													var boss_power_end1=setInterval(function(){
														 if(bossPowerEnd){
															 console.log("侦听到第一次怒攻击发动结束（不管有没有发动成功）");
															  clearInterval(boss_power_end1);
															  bossPowerEnd = false;
															  if(rolesArray[rolesIndex].HP>0){  
																console.log("再次发动怒攻击");
																setTimeout(_Boss_power_attacked(tIndex), 2000);
															  }
															  else{//如果在BOSS的秘技攻击下，我方角色死了
																	enemysArray[tIndex].dy = 240;
																	powerNumber=2;
																	deadEvent(null,rolesArray[rolesIndex]);
																	var our_role_dead = setInterval(function() {
																		if (finish) {
																			finish = false;
																			clearInterval(our_role_dead);
																			if (!judgeOver()) {
																				if (judeEnd()) {
																					recoverSpirit();
																					end = true;
																					ai = true;
																					enemyRoundShow();
																					setTimeout(function() {
																						enemysAction();
																					},
																					2000);
																				}else{end=false;}
																			} else {
																			
																				game_over_page();
																			}
																		}//finish
																	});
															  }//else
														 }//finish
													});//var boss_power_end1
													
													var boss_power_end2=setInterval(function(){
														 if(bossPowerEnd){
															  console.log("第二次侦听到怒攻击发动结束，不管有没有发动成功");
															  clearInterval(boss_power_end2);
															  bossPowerEnd = false;
															  enemysArray[tIndex].dy = 240;
															  if(rolesArray[rolesIndex].HP>0){
																		 powerNumber=2;
																		 rolesArray[rolesIndex].dy = 240;
																		 if (judeEnd()) {
																			   recoverSpirit();
																			   end = true;
																			   ai = true;
																			   enemyRoundShow();
																			   setTimeout(function() {
																					enemysAction();
																			   },2000);
																		   }else{end=false;}  	 
															  }
															  else{//如果在BOSS的秘技攻击下，我方角色死了
																	powerNumber=2;
																	deadEvent(null,rolesArray[rolesIndex]);
																	var our_role_dead = setInterval(function() {
																		if (finish) {
																			finish = false;
																			clearInterval(our_role_dead);
																			if (!judgeOver()) {
																				if (judeEnd()) {
																					recoverSpirit();
																					end = true;
																					ai = true;
																					enemyRoundShow();
																					setTimeout(function() {
																						enemysAction();
																					},
																					2000);
																				}else{end=false;}
																			} else {
																				
																				game_over_page();
																			}
																		}//finish
																	});
															  }//else
														 }//finish
													});//var boss_power_end2	
												}//else
											}//else
										}//if(enemysArray[tIndex].type==1)
										else//如果是小兵
										{
											//----------------
											console.log("是小兵");
											rolesArray[rolesIndex].dy = 240;
											if (judeEnd()) {
												recoverSpirit();
												end = true;
												ai = true;
												enemyRoundShow();
												setTimeout(function() {
													enemysAction();
												},
												2000);
											}else{end=false;}
											//------------------------
										}
                                    } 
									else //如果我方在敌人的普通攻击死了
									{		
                                        deadEvent(null,rolesArray[rolesIndex]);
                                        var tt3 = setInterval(function() {
                                            if (finish) {
                                                finish = false;
                                                clearInterval(tt3);
                                                if (!judgeOver()) {
                                                    if (judeEnd()) {
														recoverSpirit();
                                                        end = true;
                                                        ai = true;
                                                        enemyRoundShow();
                                                        setTimeout(function() {
                                                            enemysAction();
                                                        },
                                                        2000);
                                                    }else{end=false;}
                                                } else {
                                                  
													game_over_page();
                                                }
                                            }
                                        });
                                    }
                                    drawAll();
                                }
                            });
                        }  
						else//敌人在我方的普通攻击下死了
						{
                            rolesArray[rolesIndex].dy = 240;
                            deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                            att_end = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(att_end);
                                    if (judeEnd()) {
                                        recoverSpirit();
                                        end = true;
                                        ai = true;
                                        enemyRoundShow();
                                        setTimeout(function() {
                                            enemysAction();
                                        },
                                        2000);
                                    }else{end=false;}
                             //       drawAll();
                                }
                            });
                        }
                    }
                });
            } else 
			if (MouseClickOnRolesIndex(x, y)) {
                clearArray(rangeShow);
                att = false;
                find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
                change(find); 
				can_walk();
            }
        }
	else{
            clearArray(rangeShow);
            att = false;
            find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
            change(find); 
		    can_walk();
        }
    }else
    if(skillConfirmShow) {//选择技能后，跳出确认和取消两个按钮
        if (MouseOnObj(x, y, ensure)) { //判断鼠标是否在目标上
			 doUseSX();//先用了神行，然后发动密技攻击
			 //行走恢复
			recover_walk();
            for (var i = 0; i < skillArrays.length; i++) {
                if (rolesArray[rolesIndex].skills[tp] == skillArrays[i].id) {
                    fl = skillArrays[i].func;
                    skilltmp = skillArrays[i].mp;
                    skillVar = skillArrays[i].skillVar;
                    skillSuccess = skillArrays[i].success;
                    effect = skillArrays[i].effect;
                    skillName = skillArrays[i].name;
                }
            }
            if (rolesArray[rolesIndex].MP < skilltmp) {
                mpAlert();
            } else {
                skillConfirmShow = false;
                skillAtt = true;
                skillShow = false;
                menuShow = false;
                clearArray(confirmArray);
                clearArray(skillArray);
                clearArray(everything3);
               //drawAll();
            }
        } else if (MouseOnObj(x, y, cancel)) {
            skillConfirmShow = false;
            skillShow = true;
            clearArray(confirmArray);
        }
    }else
    if(powerConfirmShow) { //选择技能后，跳出确认和取消两个按钮
        if (MouseOnObj(x, y, ensure)) { //判断鼠标是否在目标上
            doUseSX();//先用了神行，然后发动怒攻击
			//行走恢复
			;
            for (var i = 0; i < powerArrays.length; i++) {
                if (rolesArray[rolesIndex].powers[tp] == powerArrays[i].id) {
                    fl = powerArrays[i].func;
                    powertmp = powerArrays[i].p;
                    powerVar = powerArrays[i].powerVar;
                    powerSuccess = powerArrays[i].success;
                    effect = powerArrays[i].effect;
                    powerName = powerArrays[i].name;
                }
            }
			
            if (rolesArray[rolesIndex].pow < powertmp) {
                powAlert();
            } else {
                powerConfirmShow = false;
                powerAtt = true;
                powerShow = false;
                menuShow = false;
                clearArray(confirmArray);
                clearArray(powerArray);
                clearArray(everything3);
                //drawAll();
            }
        } else 
		if (MouseOnObj(x, y, cancel)) {
            powerConfirmShow = false;
            powerShow = true;
            clearArray(confirmArray);
        }
    }else
	if(spiritConfirmShow){//精神力确定
       if (MouseOnObj(x, y, ensure)) {//如果点击在确定按钮上
		   //行走恢复
		   recover_walk();
		   var whichspirit;
		   console.log("rolesArray[rolesIndex].has_walkjingshenli:  "+rolesArray[rolesIndex].has_walk);
           for (var i = 0; i < spiritArrays.length; i++) 
		   {   
                if (rolesArray[rolesIndex].spirits[tp].id == spiritArrays[i].id)
				{     spiritShow = false;
					  menuShow = false;
					  spiritConfirmShow = false;
					  clearArray(confirmArray);
					  clearArray(rangeShow);
					  clearArray(spiritArray);
					  clearArray(everything3);
					if(rolesArray[rolesIndex].spirits[tp].id==1)//回春
					{   //先使用来了神行，然后再发动回春，说明确实使用了神行
						doUseSX();
						var tmp = spiritArrays[i].gold;
					    if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					    else{
						 /*     spiritShow = false;
					          menuShow = false;
					          spiritConfirmShow = false;
					          clearArray(confirmArray);
					          clearArray(rangeShow);
					          clearArray(spiritArray);
					          clearArray(everything3);*/

							  rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;
							  fl = spiritArrays[i].func;
							  spiritVar = spiritArrays[i].spiritVar;
							  effect = spiritArrays[i].effect;
							  whichspirit=1;
							  spiritAlert(whichspirit);
							  spiritHuiChun=true;
					    }
                    }else
					if(rolesArray[rolesIndex].spirits[tp].id==2)//绝杀
					{ 
                       //先使用来了神行，然后再发动绝杀，说明确实使用了神行
					  doUseSX();
					  var tmp = spiritArrays[i].gold;
					  if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					  else{
						  //扣掉SP，打开绝杀开关
						  rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;  
						  rolesArray[rolesIndex].spiritJueSha=1;
						 
						  //因为每回合只能使用一次，所以使用次数减少1
						  rolesArray[rolesIndex].spirits[tp].num -= 1;
						  //---删除这个精神力
						  if (rolesArray[rolesIndex].spirits[tp].num == 0) {
						     rolesArray[rolesIndex].spirits.splice(tp, 1);//剔除这个精神力
						   }
						   whichspirit=2;
						   spiritAlert(whichspirit);
					       }
						   break;
                    }else
					if(rolesArray[rolesIndex].spirits[tp].id==3)//神杀
					{console.log("rolesArray[rolesIndex].has_walkshensha:  "+rolesArray[rolesIndex].has_walk);
                        //先使用来了神行，然后再发动神杀，说明确实使用了神行
						doUseSX();
						var tmp = spiritArrays[i].gold;
					    if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					    else{
						rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;  
						rolesArray[rolesIndex].spiritSheSha=1;
						rolesArray[rolesIndex].spirits[tp].num -= 1;
						if (rolesArray[rolesIndex].spirits[tp].num == 0) {
						  rolesArray[rolesIndex].spirits.splice(tp, 1);//剔除这个精神力
						   }
						   whichspirit=3;
						   spiritAlert(whichspirit);
						}
						 break;
					}else
					if(rolesArray[rolesIndex].spirits[tp].id==4)//闪避
					{   
						//先使用来了神行，然后再发动闪避，说明确实使用了神行
						doUseSX();
						var tmp = spiritArrays[i].gold;
					    if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					    else{
						rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;  
						rolesArray[rolesIndex].spiritShanBi=1;
						rolesArray[rolesIndex].spirits[tp].num -= 1;
						if (rolesArray[rolesIndex].spirits[tp].num == 0) {
						   rolesArray[rolesIndex].spirits.splice(tp, 1);//剔除这个精神力
						   }
						   whichspirit=4;
						   spiritAlert(whichspirit);
						}
						break;
					}else
					if(rolesArray[rolesIndex].spirits[tp].id==5)//神行
					{
						var tmp = spiritArrays[i].gold;
					    if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					    else{
						rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;  
						rolesArray[rolesIndex].spiritShenXing=1;
						
					    rolesArray[rolesIndex].movement+=6;
					    rolesArray[rolesIndex].spirits[tp].num -= 1;
						if (rolesArray[rolesIndex].spirits[tp].num == 0) {
						    rolesArray[rolesIndex].spirits.splice(tp, 1);//剔除这个精神力
						    console.log( rolesArray[rolesIndex].name+"已经发动神行");
						   }
						   whichspirit=5;
						   spiritAlert(whichspirit);
						}
						 break;
					}
					
                 }	 
	        }          
	   }// if (MouseOnObj(x, y, ensure)) 
	   if (MouseOnObj(x, y, cancel)) {
		   spiritConfirmShow=false;
		   spiritShow = true;
		   clearArray(confirmArray);
	   }
	}else
    if (itemConfirmShow) { //道具是否确定使用函数
		if(!isRoleHasUsedItem(rolesArray[rolesIndex])){
        if (MouseOnObj(x, y, ensure)) { //如果点击确定按钮
			//行走恢复
			recover_walk();
			//----神行恢复----
			doUseSX();
			//----------------
			if(rolesArray[rolesIndex].items[tp].id==3){//当选择了复活草时	
				if(deadArray.length>0){                //如果我方人物死亡
					console.log("选择了复活草");
					rolesArray[rolesIndex].has_use_Item=1;
					finish = false;
					itemShow = false;
					menuShow = false;
					itemConfirmShow = false;
					clearArray(confirmArray);
					clearArray(itemArray);
					clearArray(rangeShow);//放走到敌人旁边的时候的粉红色的格子
					clearArray(everything1);
					clearArray(everything3);
					afterRecoverEvent();            //执行复活函数
				}
				else{noDeadAlert();}
			}//if(rolesArray[rolesIndex].items[tp].id==3)结束
			else{            //选择了其他的道具
              finish = false;
              itemShow = false;
              menuShow = false;
              itemConfirmShow = false;
			  rolesArray[rolesIndex].has_use_Item=1;
              clearArray(confirmArray);
              clearArray(itemArray);
              clearArray(rangeShow);
              clearArray(everything3);
              for (var i = 0; i < itemArrays.length; i++) {
                if (rolesArray[rolesIndex].items[tp].id == itemArrays[i].id) {
                    fl = itemArrays[i].func;
                    itemVar = itemArrays[i].itemVar;
                    effect = itemArrays[i].effect;
                }
              }	  
			  eval(fl + '()');    //执行道具的功能
              rolesArray[rolesIndex].items[tp].num -= 1;//道具数量-1
              if (rolesArray[rolesIndex].items[tp].num == 0) {
                rolesArray[rolesIndex].items.splice(tp, 1);//剔除这个道具
            
               }
			}
		}
			  //对道具的函数进行侦听，看有没有使用完
            /*  var tt = setInterval(function() {
                    if (finish) {
                    finish = false;
                    clearInterval(tt);
                    rolesArray[rolesIndex].dy = 240;
                    if (judeEnd()) {
                        end = true;
                        ai = true;
                        enemyRoundShow();
                        setTimeout(function() {
                            enemysAction();
                        },
                        2000);
                    }else{end=false;}
                }
              });*/
           // drawAll();
			 }else
		if (MouseOnObj(x, y, cancel)) { //如果点击取消按钮
            itemConfirmShow = false;
            itemShow = true;
            clearArray(confirmArray);
        }
	else{
		 finish = false;
         itemShow = false;
         menuShow = false;
         itemConfirmShow = false;
		 clearArray(confirmArray);
         clearArray(itemArray);
         clearArray(rangeShow);
         clearArray(everything3);
		 hasusedItemAlert();
		}
    }else
	if(afterRecoverShow){ //复活
	  if (MouseOnObj(x, y, ItemBg)){//点击在背景内	
	 // 	alert(rolesArray[rolesIndex].name);
		  var t=deadArray.length;
		  console.log("t是"+t);
          tpp = (ty - ItemBg.sy ) / rpx;//说明选择复活的人物是那个
		    console.log("tp3是"+tpp);
          if (y > ItemBg.sy+ 2 / 3 *rpx && y < ItemBg.sy+  2 / 3 *rpx + t * rpx && x > ItemBg.sx && x < ItemBg.sx + 4 * rpx) {
                afterRecoverShow = false;
                console.log("afterRecoverShow是"+afterRecoverShow);
                clearArray(confirmArray);
                clearArray(itemArray);//清空放死亡人物的那个框
                reconverAction(rolesArray[rolesIndex]);//执行复活函数=====rolesArray[rolesIndex]
                console.log("afterRecoverShow后是"+afterRecoverShow);
		}
       }
	}else
    if (skillShow) { //技能显示
        if (MouseOnObj(x, y, CloseImg)) {
            skillShow = false;
            menuShow = true;
            clearArray(skillArray);
        } else if (MouseOnObj(x, y, skillBg)) {
            var t = rolesArray[rolesIndex].skills.length;
            tp = (ty - skillBg.sy) / rpx;
            if (y > skillBg.sy && y < skillBg.sy + t * rpx && x > skillBg.sx && x < skillBg.sx + 13 * rpx) {
                skillShow = false;
                showSkillConfirm();
            }
        }
    }else
    if (powerShow) { //技能显示
        if (MouseOnObj(x, y, CloseImg)) { //如果点击在关闭按钮
            powerShow = false;
            menuShow = true;
            clearArray(powerArray); //清空powerArray
        } else if (MouseOnObj(x, y, powerBg)) { //如果点击在技能的图片上
            var t = rolesArray[rolesIndex].powers.length; //t==powers这个数组的长度
            tp = (ty - powerBg.sy) / rpx; //tp=0
            if (y > powerBg.sy && y < powerBg.sy + t * rpx && x > powerBg.sx && x < powerBg.sx + 13 * rpx) { //如果鼠标在范围内
                powerShow = false;
                showPowerConfirm(); //在infoShow中定义
            }
        }
    }else
    if(itemShow) { //道具显示，鼠标点击具体的道路的时候，调用showItemConfirm
       if(MouseOnObj(x, y, CloseImg)) {
            itemShow = false;
            menuShow = true;
            clearArray(itemArray);
        }else if (MouseOnObj(x, y, ItemBg)) {
            var t = rolesArray[rolesIndex].items.length;
            tp = (ty - ItemBg.sy) / rpx;//判断点在哪个道具上
            if (y > ItemBg.sy && y < ItemBg.sy + t * rpx && x > ItemBg.sx && x < ItemBg.sx + 4 * rpx) {
                itemShow = false;
                showItemConfirm();
            }
        }
     } else // if (itemShow)结束
	 //--------------------------------------------精神力----------------------------------------------------------------------
	 if (spiritShow) {
        if (MouseOnObj(x, y, CloseImg)) {
            spiritShow = false;
            menuShow = true;
            clearArray(spiritArray);
        } else if (MouseOnObj(x, y, spiritBg)) {
            var t = rolesArray[rolesIndex].spirits.length;
            tp = (ty - spiritBg.sy) / rpx;//判断点在哪个精神力上
			console.log("点在"+tp+"个精神力上");
            if (y > spiritBg.sy && y < spiritBg.sy + t * rpx && x > spiritBg.sx && x < spiritBg.sx + 4 * rpx) {
                spiritShow = false;
                showSpiritConfirm();
            }
        }
    }else 
    if (dialogShowFlag) { //对话事件显示
			var tf = false;
			countInterval++;
			if (countInterval == dialogString.length) {
				countInterval = 0;
				dialogShowFlag = false;
				clearArray(dialogArray);
				//drawAll();
			
				if(!openBigMap){
					if(count!=1){
					  roundShow();
				    }
				}// setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1000);
				else{
					canvas.removeEventListener('click', cCheck, false);
					clearArray(shadowShow);
					ourTurn.pause();
					bigMapAudio.currentTime=3;
					bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500); }//canvas.addEventListener('click', cCheck, false);
			} else {
				dialogText.name = dialogString[countInterval][0] + ": " + dialogString[countInterval][1];
				for (var i = 0; i < rolesArray.length; i++) {
					if (rolesArray[i].name == dialogString[countInterval][0]) {
						dialogRoleImage.src = rolesArray[i].halfBody; 
						tf = true;
					}
				}
				for (var j = 0; j < enemysArray.length; j++) {
					if (enemysArray[j].name == dialogString[countInterval][0]) {
						dialogRoleImage.src = enemysArray[j].halfBody;
						tf = true;
					}
				}
				if (tf) {
					dialogArray.push(dialogRole);
					//drawAll();
				}
			   //drawAll();
			}
    }else
    if (VCS) { //胜利条件关闭事件
        if (MouseOnObj(x, y, CloseImg)) {
            clearShow();
            VCS = false;
        }
    }else 
    if(menu2Show) { //主菜单点击事件
        //点击菜单第一项（胜利条件）后
        if (MouseOnObj(x, y, menu2C[0])) {
            VCS = true;
            victoryConditionShow();
            menuShow = false;
        }
		//点击菜单第二项（我方状态）后
		else if (MouseOnObj(x, y, menu2C[1])) {
		 clearArray(confirmArray);
		 rolesStatusShow = true;
		 tmpIndex = 0;
         showRolesDetailStatus(rolesArray[0]);
         skillStatus(rolesArray[0]);
		}
		//点击菜单第三项（敌方状态）后
		else if (MouseOnObj(x, y, menu2C[2])) {
		clearArray(confirmArray);
		 enemysStatusShow=true;
		 showEnemysDetailStatus(enemysArray[0]);
		}
        //点击菜单第四项（回合结束）后
        else if (MouseOnObj(x, y, menu2C[3])) {
            clearArray(everything3);
            clearArray(confirmArray); 
            for (var i = 0; i < rolesArray.length; i++) {rolesArray[i].dy = 240;}
            menu2Show = false;
			if (judeEnd()) {
			recoverSpirit();//恢复各种精神力的开关和行走开关
			ourTurn.pause();
			end = true;
            ai = true;
			enemyTurn.currentTime = 0;
			enemyTurn.play();
            enemyRoundShow();		
            setTimeout(function() {
                enemysAction();
            },
            2000);}
 /*           end = true;
            ai = true;
            enemyRoundShow();
		
            setTimeout(function() {
                enemysAction();
            },
            2000);*/
        }//点击系统设置
		else if(systemSet){
		      if(MouseOnObj(x, y, menu3C[0])){alert("存档成功");saveData();}
			  else if(MouseOnObj(x, y, menu3C[1])){console.log("加载");}
			  else if(MouseOnObj(x, y, menu3C[2])){
				  ourTurn.pause();
				  clearArray(confirmArray);
				  clearArray(everything3);
                  menu2Show = false;
				  showStart=true;
				  systemSet=false;
				  clearArray(dialogArray);
				  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				  Index_page();
			  }
		}
		else {
            clearArray(everything3);
            menu2Show = false;
        }
       // drawAll();
    } else
    if (menuShow) { //人物菜单点击事件，menuShow全局变量，初始化为false
		    clearArray(confirmArray);
			//点击菜单第7项（取消移动）
			if (MouseOnObj(x, y, menuC[6])) {	
				clearArray(everything3);
				clearArray(rangeShow);
				rolesArray[rolesIndex].mapX = xBeforeMove;
				rolesArray[rolesIndex].mapY = yBeforeMove;
				//-------------人物行走后-------------------
				if(rolesArray[rolesIndex].has_walk==1){}else
				if(rolesArray[rolesIndex].walk==1){
					rolesArray[rolesIndex].walk=0;
						console.log("恢复行走开关");
				}
				//-----------人物打开神行开关后，然后使用了神行，然后又取消移动--------
				if(rolesArray[rolesIndex].has_use_ShenXing==0){
				    if(rolesArray[rolesIndex].not_sure_use_ShenXing==1)
						{rolesArray[rolesIndex].not_sure_use_ShenXing=0;}
					}
				menuShow = false;
			} 
			//点击菜单第1项（普通攻击）
			if (MouseOnObj(x, y, menuC[0]) && judgeEnemyOnRange(rolesArray[rolesIndex])) {
				clearArray(everything3);
				att = true;
				menuShow = false;
			    doUseSX();//先神行后普通攻击
			    //行走恢复
			    recover_walk();
			}
			//秘技攻击
			if (MouseOnObj(x, y, menuC[1]) && judgeEnemyOnRange(rolesArray[rolesIndex])) {
				skillShow = true;
				menuShow = false;
				showSkill(rolesArray[rolesIndex]); //infoShow.js		
			}
			//怒攻击
			if (MouseOnObj(x, y, menuC[2]) && judgeEnemyOnRange(rolesArray[rolesIndex])) {
				powerShow = true;
				menuShow = false;
				showPower(rolesArray[rolesIndex]); //infoShow.js	
			}
			//点击道具
			if (MouseOnObj(x, y, menuC[3])) {
				itemShow = true;
				menuShow = false;
				showItem(rolesArray[rolesIndex]);
				//clearArray(everything3);
				//clearArray(rangeShow);
				//clearArray(menuArray);//infoShow.js			
			}
			//点击精神力
			if (MouseOnObj(x, y, menuC[4])) {
				spiritShow = true;
				menuShow = false;
				showSpirit(rolesArray[rolesIndex]); //infoShow.js	
			}
			//点击菜单第6项（人物状态）
			if (MouseOnObj(x, y, menuC[5])) {
				rolesStatusShow = true;
				menuShow = false;
				tmpIndex = rolesIndex;
				showRolesDetailStatus(rolesArray[rolesIndex]);
				//skillStatus(rolesArray[rolesIndex]);	
			}
			
			//点击菜单第8项（待机）
			if (MouseOnObj(x, y, menuC[7])) {
				clearArray(everything3);
				clearArray(rangeShow);
				rolesArray[rolesIndex].dy = 240;
				menuShow = false;
				doUseSX();//先神行后点击待机
				if (judeEnd()) {
					recoverSpirit();//恢复各种精神力的开关和行走开关
					ourTurn.pause();
					end = true;
					ai = true;
					enemyTurn.currentTime = 0;
					enemyTurn.play();
					enemyRoundShow();
					setTimeout(function() {
						enemysAction();
					},
					2000);
				}else{end=false;}
			}
		
       // drawAll();
    } else 
    if (!end) { //回合是否结束，end为全局变量，初始化为false
		//drawAll();
        if (MouseOnRoles(x, y)) { //如果鼠标是飘在我方角色图片上		
              if (firstClick) { //如果第一次点击,firstClick为全局变量，初始化为true
				  console.log("firstClick:"+firstClick);
                  findRolesIndex(x, y); //找出你点击的这个角色的rolesIndex,rolesIndex为全局变量，在这个函数中初始化
					if ((rolesArray[rolesIndex].dy != 240)) {
						xBeforeMove = rolesArray[rolesIndex].mapX; //保存角色移动前的X坐标
						yBeforeMove = rolesArray[rolesIndex].mapY; //保存角色移动前的Y坐标
						if(rolesArray[rolesIndex].has_walk==0) {
							console.log("rolesArray[rolesIndex].has_walk:  "+rolesArray[rolesIndex].has_walk);
							movingrange(); 
						    firstClick = false;
						}else
						if(rolesArray[rolesIndex].has_walk==1){
							console.log("rolesArray[rolesIndex].has_walk:  "+rolesArray[rolesIndex].has_walk);
							showMenu(rolesArray[rolesIndex]);}
					}
              } 
			  else { //如果不是第一次点击
				  console.log(" not  firstClick    "+firstClick);
                    if (MouseClickOnRolesIndex(x, y)) { //鼠标点击在已选中的角色上			
						clearArray(everything1); //把数组everything1清空
						find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
						change(find); 
						firstClick = true;
                   }	
            }
        } 
		else if (MouseOnEnemys(x, y)) {
            enemysStatusShow = true;
            clearArray(info);
            showEnemysDetailStatus(enemysArray[enemysIndex]);
        }
		else {
			//判断鼠标是否第一次点击，坐标是否在可移动范围，坐标是否在敌人图片上//如果鼠标没有飘在主角图片上 
            var s=Math.floor((x-mapMovX) / rpx)+","+Math.floor((y-mapMovY) / rpx);
            if (!firstClick && MouseOnMovement(x,y) && !MouseOnEnemys(x, y)&& !IsPass(s)&&rolesArray[rolesIndex].has_walk==0) { //judge.js
                setPos(x-mapMovX,y-mapMovY);
				//之所以在选择神行按钮的时候，打开spiritShenXing是为了把已经打开神行这个信息告诉编译器
				if (find.length>0&&find.length<=rolesArray[rolesIndex].movement){
					firstClick = true;
					if(rolesArray[rolesIndex].spiritShenXing==1){rolesArray[rolesIndex].not_sure_use_ShenXing=1;console.log("已经使用神行");}
					clearArray(everything1);
					end=true;
					change(find);				
				}

				closelist=[],openlist=[];											
				num=undefined;
            }else
			if(!firstClick && !MouseOnMovement(x,y))// && !(MouseOnObj(x, y, menu2)) && !(MouseOnObj(x, y, menu))
			{				
					    clearArray(everything1); //把数组everything1清空
						firstClick = true;				
			}
			else
            //鼠标点击在空地上
            if (firstClick && !MouseOnEnemys(x, y)&&hasNoRolesWalk ) { //judge.js,如果是第一次点击并且鼠标没有飘在敌人上
                if (!menu2Show) { //主菜单为全局变量，初始化为false
                    if (x > canvasWidth / 2) { //当鼠标点击在画布一半的右边时
                        menu2.sx = 0; //改变主菜单的X坐标
                    } else { //当鼠标点击在画布一半的左边时
                        menu2.sx = canvasWidth - menu.swidth; //1248-4*48
                    }
                    everything3.push(menu2); //把更改后的menu2放到everything1数组中,push将新元素添加到一个数组中，并返回数组的新长度值。   
                    for (var i = 0; i < 5; i++) {
                        menu2C[i].sx = menu2.sx;
                        everything3.push(menu2C[i]);
                    }
                }
                menu2Show = true;
            }
        }
    }
} //cCheck(e)结束
