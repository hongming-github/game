/*
	角色移动(不OK)
*/

function change(arr) {
	//window.cancelAnimationFrame(mapDraw); 
    hasNoRolesWalk=false;
	var a=0;
	var xg = arr[a][0] * rpx;
	var yg = arr[a][1] * rpx;
	tid = setInterval(function (){
		countInterval++;
		if (countInterval%6==0){
			walk(rolesArray[rolesIndex]);		
		}
		if (rolesArray[rolesIndex].mapX < xg) {
			rolesArray[rolesIndex].dy = 2*rpx;
			rolesArray[rolesIndex].mapX +=4;
		}else
		if (rolesArray[rolesIndex].mapX > xg) {
			rolesArray[rolesIndex].dy = rpx;
			rolesArray[rolesIndex].mapX -=4;
		}else
		if (rolesArray[rolesIndex].mapX == xg) {
			if (rolesArray[rolesIndex].mapY < yg) {
				rolesArray[rolesIndex].dy = 0;
				rolesArray[rolesIndex].mapY +=4;			
			}else
			if (rolesArray[rolesIndex].mapY > yg) {
				rolesArray[rolesIndex].dy = 3*rpx;
				rolesArray[rolesIndex].mapY -=4;				
			}else
			if (rolesArray[rolesIndex].mapY == yg) {
				a++;
				if (a<arr.length){
					
					xg = arr[a][0] * rpx;
					yg = arr[a][1] * rpx;
					
				}else{
					//foot.pause();//走路声音的关闭
					find=[];
					rolesArray[rolesIndex].dx=0;
					rolesArray[rolesIndex].dy=0;
					clearArray(everything2);
					clearInterval(tid);
					countInterval=0;
					if(checkGuanKa(rolesArray[rolesIndex])&&mapLevel==1){
					//	alert("1");
						hasNoRolesWalk=true;
						IntoGuanKa=true;
						//nextGuanKaOpen();
						setTimeout(nextGuanKaOpen,500);
						 //bigMapLoop=setInterval(drawAll,200);
					}
					else{
						//alert("2");
						end=false;
						hasNoRolesWalk=true;
						showMenu(rolesArray[rolesIndex]);}
					//mapDraw=window.requestAnimationFrame(drawAll);
				}
			}
		}
		
		//drawAll();

	},10);
}
//----------------------------------------------------------------------------------------------------
function enemyChange(arr) {
	var a=0;
	var xg = arr[a][0] * rpx;
	var yg = arr[a][1] * rpx;
	tid = setInterval(function (){
		countInterval++;
		if (countInterval%6==0){
			walk(enemysArray[enemyIndex]);
		}
		if (enemysArray[enemyIndex].mapX < xg) {
			enemysArray[enemyIndex].dy = 2*rpx;
			enemysArray[enemyIndex].mapX +=4;
		}else
		if (enemysArray[enemyIndex].mapX > xg) {
			enemysArray[enemyIndex].dy = rpx;
			enemysArray[enemyIndex].mapX -=4;
		}else
		if (enemysArray[enemyIndex].mapX == xg) {
			if (enemysArray[enemyIndex].mapY < yg) {
				enemysArray[enemyIndex].dy = 0;
				enemysArray[enemyIndex].mapY +=4;			
			}else
			if (enemysArray[enemyIndex].mapY > yg) {
				enemysArray[enemyIndex].dy = 3*rpx;
				enemysArray[enemyIndex].mapY -=4;				
			}else
			if (enemysArray[enemyIndex].mapY == yg) {
				a++;				
				if (a<arr.length){			
					xg = arr[a][0] * rpx;
					yg = arr[a][1] * rpx;				
				}else{
					enemysArray[enemyIndex].dx = 0;
					enemysArray[enemyIndex].dy = 240;
					clearInterval(tid);
					countInterval = 0;
					//在敌人的攻击范围内
					if (IsOnEnemyRange(enemysArray[enemyIndex])){
						    //敌人普通攻击我方
							console.log("敌人普通攻击我方");
							normalAttack(enemysArray[enemyIndex], roleObj);
							//对敌人普通攻击我方侦听
							var tm1 = setInterval(function() {
								if (finish) {
									clearInterval(tm1);
									finish = false;
									enemysArray[enemyIndex].dy = 240;
									//如果我方在敌人的普通攻击下还活着
									console.log("我方在敌人的普通攻击下还活着   "+roleObj.name);
									if (roleObj.HP > 0) {
										//我方普通攻击敌人
										console.log("进入大于0");
									     if(IsOnRoleRange(roleObj,enemysArray[enemyIndex])){
										    normalAttack(roleObj, enemysArray[enemyIndex]);
											//对我方普通攻击敌人侦听
											var tm2 = setInterval(function() {
												if (finish) {
													finish = false;
													clearInterval(tm2);
													roleObj.dy = 240;
													//如果敌人在我方的普通攻击下还活着
													if (enemysArray[enemyIndex].HP > 0) {
														//如果是BOSS
														if(enemysArray[enemyIndex].type==1){
															//如果BOSS的怒值是满的，则优先发动
															if(enemysArray[enemyIndex].pow==enemysArray[enemyIndex].fullPow){
															  console.log("因为满怒值，发动怒攻击");
															  BOSS_power_attack();
															  //BOSS魔抓无敌技能执行完了
															  var boss_power_end1=setInterval(function(){
																	if(bossPowerEnd){
																	   console.log("侦听到发动结束");
																	   clearInterval(boss_power_end1);
																	   bossPowerEnd = false;
																	   //如果我方在BOSS的秘技攻击下还活着
																	   if (roleObj.HP > 0) {
																			  console.log("再次发动怒攻击");
																			  setTimeout(BOSS_power_attack, 2000); 
																	   }
																	   //如果我方在BOSS的秘技攻击下死了
																	   else{
																			console.log("我方死了1");
																			powerNumber=2;
																			deadEvent(null,roleObj);
																			var tm3 = setInterval(function() {
																					if (finish) {
																						finish = false;
																						clearInterval(tm3);
																						enemyIndex++;
																						if (enemyIndex < enemysArray.length) {
																							setTimeout(enemysAction, 2000);
																						} else {
																						  enemyIndex = 0;
																						  count++;
																						  setTimeout(dialogShow, 2000);
																						  ai = false;
																						}
																					 }//finish
																			}); //tm3   
																		}//else
																	}//finish
															  });//boss_power_end
															  var boss_power_end2=setInterval(function(){
																	if(bossPowerEnd){	
																		console.log("侦听到第二次怒攻击结束（不知道有没有发动成功）");
																	   clearInterval(boss_power_end2);
																	   bossPowerEnd = false;
																	   //如果我方在BOSS的秘技攻击下还活着
																	   if (roleObj.HP > 0) {
																			  console.log("第二次我方还活着");
																			  powerNumber=2;
																			  enemysArray[enemyIndex].dy = 240;
																			  enemyIndex++;
																			  if (enemyIndex < enemysArray.length) {
																					setTimeout(enemysAction, 2000);
																			  } else {	
																					enemyIndex = 0;
																					count++;
																					setTimeout(dialogShow, 2000);
																					ai = false;
																			  }
																		 
																	   }
																	   //如果我方在BOSS的秘技攻击下死了
																	   else{
																			console.log("我方死了2");
																			deadEvent(null,roleObj);
																			var tm3 = setInterval(function() {
																					if (finish) {
																						finish = false;
																						clearInterval(tm3);
																						enemyIndex++;
																						if (enemyIndex < enemysArray.length) {
																							setTimeout(enemysAction, 2000);
																						} else {
																						  enemyIndex = 0;
																						  count++;
																						  setTimeout(dialogShow, 2000);
																						  ai = false;
																						}
																					 }//finish
																			}); //tm3   
																		}//else
																	}//finish
															  });//boss_power_end
															}else{
															   var n = Math.floor(Math.random() * 100) + 1;
															   console.log("BOSS怒值没满，随机发动   "+n+"  "+powerNumber);
															   //如果随机数小于等于50，则优先发动怒攻击
															   if(n<=50){
																  console.log("进入小于50 ");
																  BOSS_power_attack();
																  //BOSS魔抓无敌技能执行完了
																  var boss_power_end1=setInterval(function(){
																		if(bossPowerEnd){	
																		   clearInterval(boss_power_end1);
																		   bossPowerEnd = false;
																		   //如果我方在BOSS的秘技攻击下还活着
																		   if (roleObj.HP > 0) {
																				 console.log("再次发动怒攻击");
																				  setTimeout(BOSS_power_attack, 2000); 
																		   }
																		   //如果我方在BOSS的秘技攻击下死了
																		   else{
																				powerNumber=2;
																				deadEvent(null,roleObj);
																				var tm3 = setInterval(function() {
																						if (finish) {
																							finish = false;
																							clearInterval(tm3);
																							enemyIndex++;
																							if (enemyIndex < enemysArray.length) {
																								setTimeout(enemysAction, 2000);
																							} else {
																							  enemyIndex = 0;
																							  count++;
																							  setTimeout(dialogShow, 2000);
																							  ai = false;
																							}
																						 }//finish
																				}); //tm3   
																			}//else
																		}//finish
																  });//boss_power_end
																  var boss_power_end2=setInterval(function(){
																		if(bossPowerEnd){	
																		   clearInterval(boss_power_end2);
																		   bossPowerEnd = false;
																		   //如果我方在BOSS的秘技攻击下还活着
																		   if (roleObj.HP > 0) {
																				  enemysArray[enemyIndex].dy = 240;
																				  enemyIndex++;
																				  if (enemyIndex < enemysArray.length) {
																						setTimeout(enemysAction, 2000);
																				  } else {	
																						enemyIndex = 0;
																						count++;
																						setTimeout(dialogShow, 2000);
																						ai = false;
																				  }
																			 
																		   }
																		   //如果我方在BOSS的秘技攻击下死了
																		   else{
																				powerNumber=2;
																				deadEvent(null,roleObj);
																				var tm3 = setInterval(function() {
																						if (finish) {
																							finish = false;
																							clearInterval(tm3);
																							enemyIndex++;
																							if (enemyIndex < enemysArray.length) {
																								setTimeout(enemysAction, 2000);
																							} else {
																							  enemyIndex = 0;
																							  count++;
																							  setTimeout(dialogShow, 2000);
																							  ai = false;
																							}
																						 }//finish
																				}); //tm3   
																			}//else
																		}//finish
																  });//boss_power_end
															   }
															   else{//则发动秘技攻击
																	console.log("进入大于50 ");
															   //执行BOSS的主动秘技函数
																  Boss_skill_attack();
																  var boss_skill_end=setInterval(function(){
																		  if(finish){
																			 clearInterval(boss_skill_end);
																			 finish = false;
																			 //如果我方在BOSS的秘技攻击下还活着
																			 if (roleObj.HP > 0) {
																				 enemyIndex++;
																				 if (enemyIndex < enemysArray.length) {
																					 setTimeout(enemysAction, 2000);
																				 } else {
																					 enemyIndex = 0;
																					 count++;
																					 setTimeout(dialogShow, 2000);
																					 ai = false;
																				 }// if (enemyIndex < enemysArray.length) 
																			 }
																			 //如果我方在BOSS的秘技攻击下死了
																			 else{
																				deadEvent(null,roleObj);
																				var tm3 = setInterval(function() {
																					if (finish) {
																						finish = false;
																						clearInterval(tm3);
																						enemyIndex++;
																						if (enemyIndex < enemysArray.length) {
																							setTimeout(enemysAction, 2000);
																						} else {
																							enemyIndex = 0;
																							count++;
																							setTimeout(dialogShow, 2000);
																							ai = false;
																						}
																					}//finish
																				}); //tm3   
																			 }//else
																		  }//finish
																  });//var boss_skill_end
															   }//else
															
															}//else
														}
														else
														//如果是小兵
														{
															console.log("是小兵");
															enemyIndex++;
															if (enemyIndex < enemysArray.length) {
																setTimeout(enemysAction, 2000);
															} else {
																enemyIndex = 0;
																count++;
																setTimeout(dialogShow, 2000);
																ai = false;
															}
														}
													} else 
													//如果敌人在我方的普通攻击下死了
													{
														deadEvent(roleObj,enemysArray[enemyIndex]);
														att_end = setInterval(function() {
															if (finish) {
																finish = false;
																clearInterval(att_end);
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																} else {
																	enemyIndex = 0;
																	count++;
																	setTimeout(dialogShow, 2000);
																	ai = false;
																}
															}
														});
													}
												}
											});
									     }else{
									            enemyIndex++;
												if (enemyIndex < enemysArray.length) {
														setTimeout(enemysAction, 2000);
												} else {
														enemyIndex = 0;
														count++;
														setTimeout(dialogShow, 2000);
														ai = false;
												} 
									     }
									} else
									//如果我方在敌人的普通攻击下死了
									{
										deadEvent(null,roleObj);
										var tm4 = setInterval(function() {
											if (finish) {
												finish = false;
												clearInterval(tm4);
												if (!judgeOver()) {
													enemyIndex++;
													if (enemyIndex < enemysArray.length) {
														setTimeout(enemysAction, 2000);
													} else {
														enemyIndex = 0;
														count++;
														setTimeout(dialogShow, 2000);
														ai = false;
													}
												} else {
													game_over_page();
												}
											}
										});
									}
								}
							});
					}else
					//不在敌人的攻击范围内
					{
						enemyIndex++;
						if (enemyIndex < enemysArray.length) {
							setTimeout(enemysAction, 500);
						} else {
							enemyIndex = 0;
							count++;
							setTimeout(dialogShow, 2000);
							ai = false;
						}
					}
					
				}
			}
		}
		//drawAll();
	},10);
}
//----------------------------------------------------------------------------------------------------
/*
	人物行走动作
*/
function walk(obj) {
	//foot.play();//走路的声音
    ctx.clearRect(obj.sx, obj.sy, rpx, rpx);
    if (obj.dx < 192) { //48*4=192
        obj.dx += 48;
		if((obj instanceof roleInfo)&&(rolesArray[rolesIndex].walk==0)){
			rolesArray[rolesIndex].walk=1;//表示已经走过了
	        console.log("打开行走开关");
		}
    }
    if (obj.dx == 192) {
        obj.dx = 0;
    }
    obj.draw();
}