/*
	由envent.js中cCheck()函数调用，选择正确的敌人进行攻击后(att=true)触发函数，扣除敌人一定血量
*/
//用来使BOSS的怒攻击发动两次
var powerNumber=2;
//BOSS被攻击，发动秘技
function Boss_skill_attacked(tIndex){
    var n = Math.floor(Math.random() * 100) + 1;
	//把BOSS的秘技和秘技数组进行关联起来
	for (var i = 0; i < skillArrays.length; i++) {
         if (enemysArray[tIndex].skills[0] == skillArrays[i].id) {
            fl = skillArrays[i].func;
			skilltmp = skillArrays[i].mp;
			skillVar = skillArrays[i].skillVar;
			skillSuccess = skillArrays[i].success;
			effect = skillArrays[i].effect;
			skillName = skillArrays[i].name;
         }
    }
	
	//如果发动成功
	if((n<skillSuccess)&&(skilltmp<=enemysArray[tIndex].MP)){
	   console.log("BOSS被攻击发动秘技");
	   enemysArray[tIndex].MP -= skilltmp;
	   roleObj=rolesArray[rolesIndex];
       eval(fl + '(tIndex)');
	}
	else
	{//如果发动失败
		console.log("发动失败");
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
	
}
//BOSS主动攻击，发动秘技
function Boss_skill_attack(){
	var n = Math.floor(Math.random() * 100) + 1;
	console.log("秘技攻击的随机数是   "+n);
	//把BOSS的秘技和秘技数组进行关联起来
	for (var i = 0; i < skillArrays.length; i++) {
         if (enemysArray[enemyIndex].skills[0] == skillArrays[i].id) {
            fl = skillArrays[i].func;
			skilltmp = skillArrays[i].mp;
			skillVar = skillArrays[i].skillVar;
			skillSuccess = skillArrays[i].success;
			effect = skillArrays[i].effect;
			skillName = skillArrays[i].name;
         }
    }//for (var i = 0; i < skillArrays.length; i++) 
	console.log("skillSuccess   "+skillSuccess);
	if((n<skillSuccess)&&(skilltmp<=enemysArray[enemyIndex].MP)){
	   enemysArray[enemyIndex].MP -= skilltmp;
	   roleObj.HP -= skillVar;
       eval(fl + '(enemyIndex)');
	}else{
	 finish=true;
	}
}
//BOSS被攻击，发动怒技
function Boss_power_attacked(tIndex){
	    powerNumber--;
	    console.log("powerNumber是   "+powerNumber);
	    var n = Math.floor(Math.random() * 100) + 1;
		console.log("怒攻击随机数n是   "+n);
		//把BOSS的秘技和怒技数组进行关联起来
		for (var i = 0; i < powerArrays.length; i++) {
			 console.log("tIndex  "+enemysArray[tIndex].name);
			 if (enemysArray[tIndex].powers[0] == powerArrays[i].id) {
				fl = powerArrays[i].func;
				powertmp = powerArrays[i].p;
				powerVar = powerArrays[i].powerVar;
				powerSuccess = powerArrays[i].success;
				effect = powerArrays[i].effect;
				powerName = powerArrays[i].name;
			 }
		}
	    roleObj=rolesArray[rolesIndex];
		if((n<powerSuccess)&&(powertmp<=enemysArray[tIndex].pow)){
		   console.log("满足发动条件，发动成功 ");
		   enemysArray[tIndex].pow -= powertmp;
		   rolesArray[rolesIndex].HP -= powerVar;
		   console.log("powerSuccess是   "+powerSuccess);
		   eval(fl + '(tIndex)');
		}
		else
		{
		   if(powerNumber==0){
		      powerNumber=2;
			  console.log("怒攻击2次发动结束");
			  bossPowerEnd=true;
		   }else{  console.log("怒攻击发动失败");bossPowerEnd=true;}
		}
	
	
}
//解决setTimeout不传参数的问题
function _Boss_power_attacked(tIndex){
	return function(){Boss_power_attacked(tIndex);};
}
//BOSS主动攻击，发动怒技
function BOSS_power_attack(){
	    //powerNumber用来表示BOSS怒攻击的发动次数，不管有没有发动成功
	    powerNumber--;
		console.log("powerNumber是   "+powerNumber);
		//产生1--100的随机数
		var n = Math.floor(Math.random() * 100) + 1;
		console.log("怒攻击随机数n是   "+n);
		//把BOSS的秘技和怒技数组进行关联起来
		for (var i = 0; i < powerArrays.length; i++) {
		     console.log("enemyIndex  "+enemyIndex);
			 if (enemysArray[enemyIndex].powers[0] == powerArrays[i].id) {
				fl = powerArrays[i].func;
				powertmp = powerArrays[i].p;
				powerVar = powerArrays[i].powerVar;
				powerSuccess = powerArrays[i].success;
				effect = powerArrays[i].effect;
				powerName = powerArrays[i].name;
			 }
		}

		if((n<powerSuccess)&&(powertmp<=enemysArray[enemyIndex].pow)){
		   console.log("满足发动条件，发动成功 ");
		   enemysArray[enemyIndex].pow -= powertmp;
		   roleObj.HP -= powerVar;  
		   eval(fl + '(enemyIndex)');  
		}
		else
		{//如果发动过两次怒攻击了，不管有没有成功
		  if(powerNumber==0){
		      powerNumber=2;
			  console.log("怒攻击2次发动结束");
			  bossPowerEnd=true;
		  }else{
			console.log("发动失败");
		    bossPowerEnd=true;
		  }
		 
		}
	
}

//魔抓无敌技能
function PMoZhuaWuDi(bossId){
	 console.log("在魔抓无敌里面");
	 var tVar1 = Math.floor(rpx * roleObj.HP / roleObj.fullHP) + 1;
     var hp = new rectangle(roleObj.sx, roleObj.sy - 9,roleObj.sx, roleObj.sy - 9, tVar1, 5, "rgb(0,255,0)");
     var hpBox = new rectangle(roleObj.sx, roleObj.sy - 10,roleObj.sx, roleObj.sy - 10, rpx, 7, "rgb(0,0,0)");
     var e = new Image();
     e.src = effect;
     var powerShow = new pic(roleObj.mapX - rpx - 6, roleObj.mapY - rpx - 15,roleObj.mapX - rpx - 6, roleObj.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
     var attackText = new text("-" + powerVar,roleObj.mapX + rpx / 4, roleObj.mapY + rpx / 2, roleObj.mapX + rpx / 4, roleObj.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
     var h = new Image();
     h.src = enemysArray[bossId].halfBody;
     var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
	 attackShow.push(hs);
//	 drawAll();
	 //覆盖层
	 FuGaiCeng(enemysArray[bossId],roleObj);
	 //魔抓无敌4个字
     var t2 = setInterval(function() {
         var sn = new text(powerName.charAt(countInterval), hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx,hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(255,255,255)", "bold 40px KaiTi");
         attackShow.push(sn);
   //      drawAll();
         countInterval++;
         if (countInterval == powerName.length + 1) {
               countInterval = 0;
               clearInterval(t2);
               clearArray(attackShow);
               finish = true;
          }
		}, 
	 500);//t2结束 
		 console.log("在魔抓无敌里面1");
	 var t3=setInterval(function(){
      if (finish) {	
		  clearInterval(t3);
          finish = false;
          attackAction(enemysArray[bossId]);
          flicker(roleObj);
          attackShow.push(attackText);
          attackShow.push(powerShow);
		  var t4 = setInterval(function() {
				attackText.mapY--;
				 if (powerShow.dx < 4900) {powerShow.dx += 350; } 
				 else {powerShow.dx = 0;}
				// drawAll();
				 if (attackText.mapY == roleObj.mapY) {
					   clearInterval(t4);
					   //enemysArray[bossId].dy = 240;
					   clearArray(attackShow);
				  }
			},
		  50);//t4结束
		  console.log("在魔抓无敌里面2   "+hp.swidth);
		  if (hp.swidth > 0) {
			  hpShow.push(hpBox);
			  hpShow.push(hp);
              var tVar2 = Math.floor(rpx * powerVar / roleObj.fullHP) + 1;
			  console.log("在魔抓无敌里面3");
              var t5 = setInterval(function() {
                 hp.swidth--;
                 countInterval++;
        //         drawAll();
				  console.log("在魔抓无敌里面4");
                 if (countInterval == tVar2 || hp.swidth <= 0) {
					  console.log("在魔抓无敌里面5");
                    countInterval = 0;
                    clearInterval(t5);
                    clearArray(hpShow);
					clearArray(shadowShow);
					bossPowerEnd=true;
					console.log("怒攻击发动结束");
			     }
			   },
			  50);//t5结束
          }else{//我方死了
			  	clearArray(shadowShow);
				bossPowerEnd=true;
		  }
	  }//finish
     });//t3
	
}
//喷火龙技能
function SPengHuoLong(bossId){
  //显示半身像
  var tVar1 = Math.floor(rpx * roleObj.HP / roleObj.fullHP) + 1;
  var hp = new rectangle(roleObj.sx, roleObj.sy - 9,roleObj.sx, roleObj.sy - 9, tVar1, 5, "rgb(0,255,0)");
  var hpBox = new rectangle(roleObj.sx, roleObj.sy - 10,roleObj.sx, roleObj.sy - 10, rpx, 7, "rgb(0,0,0)");
  var e = new Image();
  e.src = effect;
  var skillShow = new pic(roleObj.mapX - rpx - 6, roleObj.mapY - rpx - 15,roleObj.mapX - rpx - 6, roleObj.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
  var attackText = new text("-" + skillVar,roleObj.mapX + rpx / 4, roleObj.mapY + rpx / 2, roleObj.mapX + rpx / 4, roleObj.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
  var h = new Image();
  h.src = enemysArray[bossId].halfBody;
  var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
  attackShow.push(hs);
//  drawAll();
  //喷火龙字样
  var t2 = setInterval(function() {
      var sn = new text(skillName.charAt(countInterval),  hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx,hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
      attackShow.push(sn);
  //    drawAll();
      countInterval++;
      if (countInterval == skillName.length + 1) {
           countInterval = 0;
           clearInterval(t2);
           clearArray(attackShow);
           finish = true;
       }
     },
  500);//t2
  var t3=setInterval(function(){
      if (finish) {
	        clearInterval(t3);
            finish = false;
            attackAction(enemysArray[bossId]);
            flicker(roleObj);
            attackShow.push(attackText);
            attackShow.push(skillShow);
			var t4 = setInterval(function() {
                     attackText.mapY--;
                     if (skillShow.dx < 4900) {
                          skillShow.dx += 350;
                     } else {
                          skillShow.dx = 0;
                     }
         //            drawAll();
                    if (attackText.mapY ==roleObj.mapY) {
                         clearInterval(t4);
                         enemysArray[bossId].dy = 240;
                         clearArray(attackShow);
					     //finish=true;
                      }
                      },
            50);//t4
	        if (hp.swidth > 0) {
                hpShow.push(hpBox);
                hpShow.push(hp);
                var tVar2 = Math.floor(rpx * skillVar / roleObj.fullHP) + 1;
                var t5 = setInterval(function() {
                          hp.swidth--;
                          countInterval++;
           //               drawAll();
                          if (countInterval == tVar2 || hp.swidth <= 0) {
                              countInterval = 0;
                              clearInterval(t5);
                              clearArray(hpShow);
							  finish=true;
                          }
                       },
                50);//t5
            }// if (hp.swidth > 0) 
	  }//finish
  });//t3
  
 
}

function PSoulAttack() {
	//保存敌人的下标
    var tIndex;
    for (var i = 0; i < enemysArray.length; i++) {
       if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
               tIndex = i;	  
       }
    }
	//我方先普通攻击敌方
    normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]); //1号位，我方先普通攻击敌方
    
	//对我方先普通攻击敌方侦听
    att_end = setInterval(function() {console.log("我方角色普通攻击敌人后的finish："+finish+"   ");
        if (finish) {//1号位结束后，finish=true，4号位
            finish = false;
            clearInterval(att_end);
			//如果敌人还活着
            if (enemysArray[tIndex].HP > 0) {
                normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);//2号位,如果敌人还活着，敌人普通攻击我方
                var t1 = setInterval(function() {
                    if (finish) {//2号位结束后，finish=true，3号位
                        finish = false;
                        clearInterval(t1);
						//如果我方还活着
                        if (rolesArray[rolesIndex].HP > 0) {
                            var tVar1 = Math.floor(rpx * enemysArray[tIndex].HP / enemysArray[tIndex].fullHP) + 1;
                            var n = Math.floor(Math.random() * 100) + 1; //产生1---100随机数
							//var n=100;
                            if (n <= powerSuccess) { //随机数<怒技成功率
								console.log("进入怒攻击成功");
                    //            var hp = new rectangle(enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                    //            var hpBox = new rectangle(enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
                                var hp = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                                var hpBox = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
								var e = new Image();
                                e.src = effect;
                                var powerShow = new pic(enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15,enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
                                var attackText = new text("-" + powerVar, enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2,enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
                                var h = new Image();
                                h.src = rolesArray[rolesIndex].halfBody;
                                var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
								attackShow.push(hs);
								//覆盖层
								FuGaiCeng(enemysArray[tIndex],rolesArray[rolesIndex]);
                                var t2 = setInterval(function() {
                                    var sn = new text(powerName.charAt(countInterval), hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx,hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(255,255,255)", "bold 40px KaiTi");
                                    attackShow.push(sn);
                                    //drawAll();
                                    countInterval++;
                                    if (countInterval == powerName.length + 1) {
                                        countInterval = 0;
                                        clearInterval(t2);
                                        clearArray(attackShow);
                                        finish = true;
                                    }
								}, 
								500);//t2结束
								var t3 = setInterval(function() {
                                    if (finish) {
                                        clearInterval(t3);
                                        finish = false;
                                        attackAction(rolesArray[rolesIndex]);
                                        flicker(enemysArray[tIndex]);
                                        attackShow.push(attackText);
                                        attackShow.push(powerShow);
                                        var t4 = setInterval(function() {
											attackText.mapY--;
                                            if (powerShow.dx < 4900) {powerShow.dx += 350; } 
											else {powerShow.dx = 0;}
                                           // drawAll();
                                            if (attackText.mapY== enemysArray[tIndex].mapY) {
                                                clearInterval(t4);
                                                rolesArray[rolesIndex].dy = 240;
                                                clearArray(attackShow);
												finish=true;
                                            }
                                        },
                                        50);//t4结束
                                        if (hp.swidth > 0) {
                                            hpShow.push(hpBox);
                                            hpShow.push(hp);
                                            var tVar2 = Math.floor(rpx * powerVar / enemysArray[tIndex].fullHP) + 1;
                                            var t5 = setInterval(function() {
                                                hp.swidth--;
                                                countInterval++;
                                              //  drawAll();
                                                if (countInterval == tVar2 || hp.swidth == 0) {
                                                    countInterval = 0;
                                                    clearInterval(t5);
                                                    clearArray(hpShow);
													clearArray(shadowShow);
													
                                                }
                                            },
                                            50);//t5结束
                                        }//  if (hp.swidth > 0) 结束
										var tb=setInterval(function(){
											if (finish){
												finish=false;
												clearInterval(tb);
												enemysArray[tIndex].HP -= powerVar;
												if (enemysArray[tIndex].HP <= 0) {
													deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
													att_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(att_end);			
															if (judeEnd()) 
															{   //---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}
															else{end=false;}
														}
													});
												}
												else{
														 if (judeEnd()){
																   recoverSpirit();
																   enemyRoundShow();
																   end = true;
																   ai = true;
																   setTimeout(enemysAction, 500);
																 }
														 else{end=false;}	
												}
											}
										});//tb结束
                                       // drawAll();
                                    }
                                });//t3结束
                            } 
							//如果产生的随机数>powerSuccess,发动失败
							else{
								console.log("怒技使用失败");
                                failAlert("怒技使用失败！", rolesArray[rolesIndex]);
									rolesArray[rolesIndex].dy = 240;
									if (judeEnd()) {
										//---恢复精神力---
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						//如果我方HP<0,死了
						else {
                            deadEvent(null,rolesArray[rolesIndex]);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//---恢复精神力---
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//结束
                        }
                    }//3号位结束
                });//t1结束
            }
			//敌人死了
			else {
                rolesArray[rolesIndex].dy = 240;
                deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//---恢复精神力---
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        //drawAll();
                    }
                });//t8结束
            }
        }//4号位结束
    });//t结束
}
//--------------------------------------------------------------------------------------------------------------
function SSoulKill() {
	//找到敌人的下标
    var tIndex;
    for (var i = 0; i < enemysArray.length; i++) {
       if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
               tIndex = i;	  
       }
    }
	//我方普通攻击敌人
    normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]);
	//对我方普通攻击敌人进行侦听
    att_end = setInterval(function() {
	   console.log("对我方普通攻击敌人进行侦听");
        if (finish) {
            finish = false;
            clearInterval(att_end);
			//如果敌人还活着
            if (enemysArray[tIndex].HP > 0) {
				//敌人普通攻击我方
                normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);
				//对敌人普通攻击我方进行侦听
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
						//如果我方还活着
                        if (rolesArray[rolesIndex].HP > 0) {
							//获得1---100的随机数
                            var n = Math.floor(Math.random() * 100) + 1;
							//发动秘技
                            if (n <= skillSuccess) {	
                                var tVar1 = Math.floor(rpx * enemysArray[tIndex].HP / enemysArray[tIndex].fullHP) + 1;
                                var hp = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                                var hpBox = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
                       //         var hp = new rectangle(enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                       //         var hpBox = new rectangle(enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
                                var e = new Image();
                                e.src = effect;
                                var skillShow = new pic(enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15,enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
                                var attackText = new text("-" + skillVar, enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2,enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
                                var h = new Image();
                                h.src = rolesArray[rolesIndex].halfBody;
                                var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
								attackShow.push(hs);
                                //drawAll();
                                var t2 = setInterval(function() {
                                    var sn = new text(skillName.charAt(countInterval),hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
                                    attackShow.push(sn);
                                   // drawAll();
                                    countInterval++;
                                    if (countInterval == skillName.length + 1) {
                                        countInterval = 0;
                                        clearInterval(t2);
                                        clearArray(attackShow);
                                        finish = true;
                                    }
                                },
                                500);
								var t3 = setInterval(function() {
                                    if (finish) {
                                        clearInterval(t3);
                                        finish = false;
                                        attackAction(rolesArray[rolesIndex]);
                                        flicker(enemysArray[tIndex]);
                                        attackShow.push(attackText);
                                        attackShow.push(skillShow);
                                        var t4 = setInterval(function() {
                                            attackText.mapY--;
                                            if (skillShow.dx < 4900) {
                                                skillShow.dx += 350;
                                            } else {
                                                skillShow.dx = 0;
                                            }
                                           // drawAll();
                                            if (attackText.mapY == enemysArray[tIndex].mapY) {
                                                clearInterval(t4);
                                                rolesArray[rolesIndex].dy = 240;
                                                clearArray(attackShow);
												finish=true;
                                            }
                                        },
                                        50);
                                        if (hp.swidth > 0) {
                                            hpShow.push(hpBox);
                                            hpShow.push(hp);
                                            var tVar2 = Math.floor(rpx * skillVar / enemysArray[tIndex].fullHP) + 1;
                                            var t5 = setInterval(function() {
                                                hp.swidth--;
                                                countInterval++;
                                               // drawAll();
                                                if (countInterval == tVar2 || hp.swidth <= 0) {
                                                    countInterval = 0;
                                                    clearInterval(t5);
                                                    clearArray(hpShow);
                                                }
                                            },
                                            50);
                                        }
										att_end=setInterval(function (){
											if (finish){
												finish=false;
												clearInterval(att_end);
												enemysArray[tIndex].HP -= skillVar;
												if (enemysArray[tIndex].HP <= 0) {
													deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
													att_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(att_end);
															if (judeEnd()) {
																//---恢复精神力---
															    recoverSpirit();
																//-----------
															  enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}
														}
													});
												}else{if (judeEnd()) {
													          	//---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}}
											}
										});
                                       
                                        //drawAll();
                                    }
                                });
                            } else
							//秘技发动失败
							{
                                failAlert("秘技使用失败！", rolesArray[rolesIndex]);
                                rolesArray[rolesIndex].dy = 240;
                                if (judeEnd()) {
								//---恢复精神力---
								 recoverSpirit();
								//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
                                }else{end=false;}
                            }
                        } else 
						//如果我方死了
						{
                            deadEvent(null,rolesArray[rolesIndex]);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
												//---恢复精神力---
												 recoverSpirit();
												//-----------
												enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } else {
                               
									 game_over_page();
                                    }
                                }
                            });
                        }
                        //end=false;
                        //drawAll();
                    }
                });
            } else
			//如果敌人死了
			{
                rolesArray[rolesIndex].dy = 240;
                deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
                        if (judeEnd()) {
								//---恢复精神力---
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            enemysAction();
                        }else{end=false;}
                        //drawAll();
                    }
                });
            }
        }
    });
}
//------------------------------------------------------------------------------------------------------------------------------------
function normalAttack(a, b) {//a攻击b
	//普通攻击的音量
    putongattack.volume=0.1;
	//播放普通攻击
	putongattack.play();
	//获取随机数
    var n = Math.floor(Math.random() * 100) + 1; 
	//命中失误率 
    var x = a.errorRate; 
	//双倍暴击几率
    var y = a.doubleCRI; 
	//三倍暴击几率
    var z = a.tripleCRI;
	//定义一下产生的伤害值
    var hurt; 
	//血条长度
    var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
    var attackText = new text("miss!", b.mapX + rpx / 4,b.mapY + rpx / 2,b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
    var hp = new rectangle(b.mapX, b.mapY- 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
    var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
	//动态的攻击效果
    attackAction(a); 
	//使被攻击者闪一下
    flicker(b);
	//-------------------------------------以下是怒攻击----------------------
    var m1 = Math.floor(Math.random() * 5) + 1; //获取1---6的随机数,给我方用的
	var m2 = Math.floor(Math.random() * 5) + 1; //获取1---6的随机数,给敌方BOSS用的
	//--------------------------------------以上是怒攻击----------------------
    if ((n <= x)||(a instanceof enemyInfo )&&((b instanceof roleInfo)&&(b.spiritShanBi==1)) ){//-闪避功能的模块-如果我方打开闪避功能了，当敌人攻击我方时，启动闪避--
		hurt = 0; //如果产生的随机数小于命中失误率，攻击MISS，
		if((a instanceof roleInfo)&&(a.spiritJueSha==1)){
			a.spiritJueSha=0;
		}else
		if((a instanceof enemyInfo )&&(b instanceof roleInfo)&&(b.spiritShanBi==1)){
		   b.spiritShanBi=0;
		   var js=new spirit();
				js.id=4;
				js.num=1;
				b.spirits.splice(3,0,js );//加回闪避这个精神力
				console.log("插回闪避这个精神力到数组");
		}
	}
    else {
        //----------------------怒值的随机添加--------------------------------------
		//我方打敌方的小兵
		if((a instanceof roleInfo )&&(b instanceof enemyInfo)&&(b.type==0)){
			if(a.pow<a.fullPow){
				a.pow+=m1;
				if(a.pow>=a.fullPow){a.pow=a.fullPow;}
				}
		}else
		//我方打敌方BOSS
		if((a instanceof roleInfo )&&(b instanceof enemyInfo)&&(b.type==1)){
		   if(a.pow<a.fullPow){ 
			   a.pow+=m1;
			   if(a.pow>=a.fullPow){a.pow=a.fullPow;}
			}
		   if(b.pow<b.fullPow){
		       b.pow+=m2;
			   if(b.pow>=b.fullPow){b.pow=b.fullPow;}

		   }
		}else
		//敌方小兵打我方
		if((a instanceof enemyInfo)&&(a.type==0)&&(b instanceof roleInfo)){
		  if(b.pow<b.fullPow){
		   b.pow+=m1;
		   if(b.pow>=b.fullPow){b.pow=b.fullPow;}
		  }
		 
		  //console.log("敌方小兵打我方,我方加怒值"+m1);
		}else
		//敌方BOSS打我方
		if((a instanceof enemyInfo)&&(a.type==1)&&(b instanceof roleInfo)){
		    if(b.pow<b.fullPow){
				b.pow+=m1;
				if(b.pow>=b.fullPow){b.pow=b.fullPow;}
			}
			if(a.pow<a.fullPow){
		       a.pow+=m2;
			   if(a.pow>=a.fullPow){a.pow=a.fullPow;}
			}
		}
        //----------------------怒值的随机添加结束--------------------------------------
		//如果产生的随机数在【命中失误率 ，命中失误率 +双倍暴击几率】
		if (n > x && n <= x + y) {
			//如果绝杀和神杀都发动了，则神杀覆盖绝杀
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
			 	if(a.spiritJueSha==1){
					a.spiritJueSha=0;
					//把删掉的绝杀加回a.spirits数组
					var js=new spirit();
					js.id=2;
					js.num=1;
					//加回绝杀这个精神力
					a.spirits.splice(1,0,js );
				}
			    a.spiritSheSha=0;
			  	var js=new spirit();
				js.id=3;
				js.num=1;
				//加回神杀这个精神力
				a.spirits.splice(2,0,js );
                hurt = (a.ATK - b.DEF) * 6; 
				attackText.name = "Crit:-" + hurt;
			}else
			//因为使用绝杀造成的
			if(a.spiritJueSha==1){
				a.spiritJueSha=0;
				//把删掉的绝杀加回a.spirits数组
				var js=new spirit();
				js.id=2;
				js.num=1;
				//加回绝杀这个精神力
				a.spirits.splice(1,0,js );
			    hurt = (a.ATK - b.DEF) * 4; //4倍攻击
				attackText.name = "Crit:-" + hurt;
			}else
			//普通的2倍攻击
			{
				hurt = (a.ATK - b.DEF) * 2; //2倍攻击
				attackText.name = "Crit:-" + hurt;
		    }	
        } else 
		//如果产生的随机数在【命中失误率 ，命中失误率 +双倍暴击几率+三倍暴击几率】
		if (n > x + y && n <= x + y + z) {
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
			 		if(a.spiritJueSha==1){
						a.spiritJueSha=0;
						//把删掉的绝杀加回a.spirits数组
						var js=new spirit();
						js.id=2;
						js.num=1;
						//加回绝杀这个精神力
						a.spirits.splice(1,0,js );
					}
			    a.spiritSheSha=0;
			    var js=new spirit();
				js.id=3;
				js.num=1;
				//加回神杀这个精神力
				a.spirits.splice(2,0,js );
				//因为同时使用了绝杀和神杀活着使用了神杀
                hurt = (a.ATK - b.DEF) * 9;
				attackText.name = "Crit:-" + hurt;
			}else
			if(a.spiritJueSha==1){//因为使用绝杀造成的
				a.spiritJueSha=0;
				//把删掉的绝杀加回a.spirits数组
				var js=new spirit();
				js.id=2;
				js.num=1;
				a.spirits.splice(1,0,js );//加回绝杀这个精神力
				
			    hurt = (a.ATK - b.DEF) * 6; //6倍攻击
				attackText.name = "Crit:-" + hurt;
			}else{
				hurt = (a.ATK - b.DEF) * 3; //3倍攻击
				attackText.name = "Crit:-" + hurt;
		    }
        } else
		if (n > x + y + z && n <= 100) {
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
				if(a.spiritJueSha==1){
					a.spiritJueSha=0;
					//把删掉的绝杀加回a.spirits数组
					var js=new spirit();
					js.id=2;
					js.num=1;
					//加回绝杀这个精神力
					a.spirits.splice(1,0,js );
				}
			    a.spiritSheSha=0;
				var js=new spirit();
				js.id=3;
				js.num=1;
				//加回神杀这个精神力
				a.spirits.splice(2,0,js );
                hurt = (a.ATK - b.DEF) * 3; //2倍攻击
				attackText.name = "Crit:-" + hurt;
			}else
			//因为使用绝杀造成的
			if(a.spiritJueSha==1){
				a.spiritJueSha=0;
				//把删掉的绝杀加回a.spirits数组
				var js=new spirit();
				js.id=2;
				js.num=1;
				//加回绝杀这个精神力
				a.spirits.splice(1,0,js );
				recoverSpirit();
			    hurt = (a.ATK - b.DEF) * 2; //2倍攻击
				attackText.name = "Crit:-" + hurt;
			}
			else{
				 //普通攻击
				hurt = a.ATK - b.DEF;
				attackText.name = "-" + hurt;
			}
        }
	}

    var tVar2 = Math.floor(rpx * hurt / b.HP) + 1;
    b.HP -= hurt;
    attackShow.push(attackText);

    var at1 = setInterval(function() {
        attackText.mapY--;
   //     drawAll();
        if (attackText.mapY == b.mapY) {
            clearInterval(at1);
            finish = true;
            clearArray(attackShow);
        }
    },
    50);
    if (hurt != 0 && hp.swidth > 0) {
        hpShow.push(hpBox);
        hpShow.push(hp);
        var at2 = setInterval(function() {
            hp.swidth--;
            countInterval++;
//            drawAll();
            if (countInterval == tVar2 || hp.swidth <= 0) {
                countInterval = 0;
                clearInterval(at2);
                clearArray(hpShow);
            }
        },
        50);
    }
}
//---------------------------------------------------------------------
function clearArray(arr) {
    while (arr.length > 0) arr.pop();
   // drawAll();
}
function clearArr(arr) {
    while (arr.length > 0) arr.pop();
}
//----------------闪2下------------------------------------------------------
function flicker(obj) {
    var tw = obj.sw;
    var th = obj.sh;
    function a() {
        obj.sw = tw;
        obj.sh = th;
       // drawAll();
    }
    function b() {
        obj.sw = 0;
        obj.sh = 0;
       // drawAll();
    }
    b();
    setTimeout(a, 100);
    setTimeout(b, 200);
    setTimeout(a, 300);

}
//------------------------------动态的攻击--------------------------------
function attackAction(obj) {
    obj.dy = 192;
    function a() {
        obj.dx = 0;
       // drawAll();
    }
    function b() {
        obj.dx = 48;
        //drawAll();
    }
    function c() {
        obj.dx = 0;
        obj.dy = 0;
       // drawAll();
    }
    b();
    setTimeout(a, 100);
    setTimeout(b, 200);
    setTimeout(a, 300);
    setTimeout(c, 400);
}
//------------------------------------------------------------------------------
function deadEvent(objAttack,objDead) {
	clearArray(everything2);
	//如果死亡的是敌人类型的
	if(objDead instanceof enemyInfo){
		//更新全队的钱
		teamMoney=teamMoney+objDead.money;
		roleUpIndex=objAttack.id-1;
		getSomething("金钱+"+objDead.money,objAttack);
		getSomething2("经验+"+objDead.EXP,objAttack);
        //增加秘技怒技
		if(objDead.skills.length>0 || objDead.powers.length>0)
			{
			for(var i=0;i<objDead.skills.length;i++)
				objAttack.skills.push(objDead.skills[i]);			
			//for(var j=0;j<objDead.powers.length;j++)
			   // objAttack.powers.push(objDead.powers[j]);
			}
		//主角经验+敌人的经验
		rolesArray[roleUpIndex].EXP=parseInt(objDead.EXP)+parseInt(rolesArray[roleUpIndex].EXP);
		//如果主角当前经验比下一等级的经验值>=,requestLevel()
	    if(rolesArray[roleUpIndex].EXP>=rolesArray[roleUpIndex].nextEXP){requestLevel();}
	 }
	else{
		deadArray.push(objDead);
	}
    var dt = setInterval(function() {
        objDead.sh--;
        objDead.dh--;
        //alert(finish);
        if (objDead.sh == 0) {
            clearInterval(dt);
          
            objDead.mapX = 2496;
            objDead.mapY = 0;
			objDead.dy=240;
			if(levelUpOk){
				aftLevelEvent(objAttack);             
			}
			else{
					if(isEnemyAllDead()&&(mapLevel==1||mapLevel==2||mapLevel==4||mapLevel==5||mapLevel==6||mapLevel==7||mapLevel==8||mapLevel==12||mapLevel==9||mapLevel==10)){
		                enemyTurn.pause();
						clearInterval(att_end);
						nextGuanKaOpen();
					}else if(isBossDead()&&mapLevel==3){//&&mapLevel==9&&mapLevel==10
						enemyTurn.pause();
               	        clearInterval(att_end);
				        nextGuanKaOpen();
						}
					else {finish=true;}
				}		
        }
      //  drawAll();
    },
    80);
}