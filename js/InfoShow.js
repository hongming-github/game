/*
人物状态显示
*/
function infoShow(x, y) {
    //鼠标移动到主角的图片上，显示主角信息
    if (MouseOnRoles(x, y)) {
        clearArray(info);
        for (var i = 0; i < rolesArray.length; i++) {
            if (x >= rolesArray[i].sx && x <= rolesArray[i].sx + rpx && y >= rolesArray[i].sy && y <= rolesArray[i].sy + rpx) {
                if (rolesArray[i].HP > 0) {
					clearArray(everything2);
					putRec(x,y);
                    roleInfoShow(rolesArray[i]); //调用显示role的信息函数
			
                }
            }
        }
    } else
    //鼠标移动到敌人的图标上，显示敌人的信息
    if (MouseOnEnemys(x, y)) { //judge.js
        clearArray(info);
        for (var i = 0; i < enemysArray.length; i++) {
            if (x >= enemysArray[i].sx && x <= enemysArray[i].sx + rpx && y >= enemysArray[i].sy && y <= enemysArray[i].sy + rpx) {
                if (enemysArray[i].HP > 0) {
					putRec(x,y);
                    enemyInfoShow(enemysArray[i]);
                }
            }
        }
    } else {
        clearArray(info);
		putRec(x,y);
    }
//	drawAll();
}
//绿色的格子随鼠标一起走动
function putRec(x,y){
        clearArray(everything2);
		rec.mapX = (Math.floor((x-mapMovX) / rpx)) * rpx;
        rec.mapY = (Math.floor((y-mapMovY) / rpx)) * rpx;
		everything2.push(rec);
}
/*
复活框的内容
*/
function afterRecoverEvent(){
	afterRecoverShow=true;
   //背景图片
   ItemBg = new picture(9 * rpx, 5 * rpx,9 * rpx, 5 * rpx, 8 * rpx, 5 * rpx, infoShowBg);
   itemArray.push(ItemBg);
   //标题
   var title="请选择复活对象";
   var addtitle = new text(title,ItemBg.sx + 96, ItemBg.sy +  2 / 3 *rpx, ItemBg.sx + 96, ItemBg.sy +  2 / 3 *rpx, "#0000C6", "bold 25px SimSun");
   itemArray.push(addtitle);
   //死亡头像和名字
   for (var j = 0; j < deadArray.length; j++) {
       var deadrole=deadArray[j].name;
	   var addRoleName=new text(deadrole,ItemBg.sx + 96, ItemBg.sy + 2*rpx-10+j*48, ItemBg.sx + 96, ItemBg.sy + 2*rpx-10+j*48, "#FFFFFF", "bold 25px KaiTi");
	   var roleBg=new Image();
	   roleBg.src=deadArray[j].halfBody;
       var addRoleBg=new picture(ItemBg.sx , ItemBg.sy + rpx+j*48,ItemBg.sx , ItemBg.sy + rpx+j*48, 48,48,roleBg);
	   itemArray.push(addRoleName);
	   itemArray.push(addRoleBg);
	}
  // drawAll();
}
/*
	清除回合显示
*/
function clearShow() {
    end = false;
    for (var i = 0; i < rolesArray.length; i++) {
		if(rolesArray[i].sx!=2496)
        {rolesArray[i].dy = 0;}
    }
    for (var j = 0; j < enemysArray.length; j++) {
        enemysArray[j].dy = 0;
    }
    clearArray(everything);
    if(mapLevel==2&&count==1){setTimeout(function(){dialogShowFlag=true;dialogShow();},300);}
  //  drawAll();
   // saveData();
}
/*
	回合显示
*/
function roundShow() {
	
    end = true;
	enemyTurn.pause();
	ourTurn.currentTime=0;
	ourTurn.play();
    var roundString = "第 " + count + " 回 合";
    var roundRectangle = new rectangle(0, 4 * rpx,0, 4 * rpx, canvasWidth, 4 * rpx, "rgba(0,0,0,0.8)");
    var roundText = new text(roundString, (canvasWidth / 2) - 2 * rpx, 7* rpx - rpx / 2,(canvasWidth / 2) - 2 * rpx, 7* rpx - rpx / 2,"rgb(255,255,255)", "50px 叶根友毛笔行书");
    everything.push(roundRectangle);
    everything.push(roundText);
	//drawAll();
    setTimeout(clearShow, 2000);
}
function enemyRoundShow() {
	//drawAll();
	ourTurn.pause();
	enemyTurn.currentTime = 0;
	enemyTurn.play();
    var roundString = "敌 方 行 动";
    var roundRectangle = new rectangle(0, 4 * rpx,0, 4 * rpx, canvasWidth, 4 * rpx, "rgba(0,0,0,0.8)");
    var roundText = new text(roundString, (canvasWidth / 2) - 2 * rpx, 7* rpx - rpx / 2,(canvasWidth / 2) - 2 * rpx,7* rpx - rpx / 2, "rgb(255,255,255)", "50px 叶根友毛笔行书");
    everything.push(roundRectangle);
    everything.push(roundText);
    setTimeout(function() {
        clearArray(everything);
    },
    1000);
}
/*
	胜败条件显示
*/
function victoryConditionShow() {
    end = true;
    var vText = new text("胜利条件:", 0,0,8*rpx,5*rpx+24,"rgb(128,0,128)", "20px FangSong");
    var lText = new text("失败条件:", 0,0,8*rpx,6*rpx+24, "rgb(128,0,128)", "20px FangSong");
    var victoryConditionRectangle = new picture( 0,0,6*rpx,3*rpx, canvasWidth / 2, canvasHeight / 2, image1);
    var victoryConditionText = new text(victoryCondition,  0,0,10*rpx,5*rpx+24, "rgb(255,0,0)", "15px FangSong");
    var lostConditionText = new text(lostCondition, 0,0, 10*rpx,6*rpx+24, "rgb(255,0,0)", "15px FangSong");
    CloseImg = new picture( 0,0,victoryConditionRectangle.sx + victoryConditionRectangle.swidth - 64, victoryConditionRectangle.sy +64, 1 / 2 * rpx, 1 / 2 * rpx, close);

    everything.push(victoryConditionRectangle);
    everything.push(vText);
    everything.push(lText);
    everything.push(lostConditionText);
    everything.push(victoryConditionText);
    everything.push(CloseImg);
    //drawAll();
}
/*
	对话事件的显示
*/
function dialog() {
    var tf = false;
    var tt = dialogString[0][0] + ": " + dialogString[0][1];//林秋水: 又是你们。。。
    for (var i = 0; i < rolesArray.length; i++) {
        if (rolesArray[i].name == dialogString[0][0]) {
            dialogRoleImage.src = rolesArray[i].halfBody;
            tf = true;
        }
    }
    for (var j = 0; j < enemysArray.length; j++) {
        if (enemysArray[j].name == dialogString[0][0]) {
            dialogRoleImage.src = enemysArray[j].halfBody;
            tf = true;
        }
    }
	
    var dialogBox = new picture(0,340,0, 340, 960, 250, dialogBoxImage);
    dialogRole = new picture(96,390,96, 390, 170, 170, dialogRoleImage);
    //drawAll();
    dialogText = new text(tt,270,470, 270,470, "rgb(0,0,0)", "20px FangSong");
    dialogArray.push(dialogBox);
    if (tf) {
        dialogArray.push(dialogRole);
    }
    dialogArray.push(dialogText);
    //drawAll();
}
/*
	判断有没有触发对话事件   
*/
function dialogShow() {
    if (!dialogShowFlag) {
        roundShow();
    }else{
      for (var i = 0; i < dialogRoundArray.length; i++) {
		if(IntoGuanKa){
		    dialogShowFlag = true;
			openBigMap=true;
            dialogContentId = dialogRoundArray[1][2];
            dialogFunction = dialogRoundArray[1][1];		
			
		}else
        if (count == dialogRoundArray[i][0]) {//对话事件在第几回合触发
            dialogShowFlag = true;
            dialogContentId = dialogRoundArray[i][2];//1
            dialogFunction = dialogRoundArray[i][1];
        }
		    request1();
            var tt = setInterval(function() {
                if (finish) {
                    finish = false;
                    clearInterval(tt);
                    eval(dialogFunction + '()');
                }
            });
			break;
		}
   }
}
/*
	人物状态显示
*/
function roleInfoShow(obj) {
    var x;
	var y;
    if (obj.sx < canvasWidth / 2) x = canvasWidth -12 * rpx;
    else x = 0;
	if (obj.sy < canvasHeight / 2) y = canvasHeight -4 * rpx;
	else y = 0;
    var img = new Image();
    img.src = obj.halfBody;
    var n = obj.HP / obj.fullHP;
    var m = obj.MP / obj.fullMP;
	var s = obj.SP / obj.fullSP;
   // console.log("主角的fullSP"+obj.fullSP);
    var j = obj.pow / obj.fullPow;
    var row1 = new text(obj.name + "  LV " + obj.level + "   " + obj.EXP + "/" + obj.nextEXP,0,0, x + 240, y+35, "#FFFFFF", "bold 20px FangSong");
    var hp = new text("   HP    " + obj.HP + "/" + obj.fullHP,0,0, x + 142, y+80, "#FFFFFF", "bold 20px FangSong");
    var mp = new text("   MP    " + obj.MP + "/" + obj.fullMP,0,0, x + 142, y+105, "#FFFFFF", "bold 20px FangSong");
    var pow = new text("   POW   " + obj.pow + "/" + obj.fullPow, 0,0,x + 142, y+156, "#FFFFFF", "bold 20px FangSong");
	var sp = new text("   SP    " + obj.SP + "/" + obj.fullSP,0,0, x + 142, y+130, "#FFFFFF", "bold 20px FangSong");
	//---显示精神力状态----
    var juesha,shensha,shanbi,shengxing;
	var i=240;
	var jsl=false;
	if(obj.spiritJueSha==1){
    juesha = new text("[绝]" , 0,0,x + i, y+58, "#00FFFF", "bold 20px FangSong");
	i+=48;
	if(jsl==false){jsl=true;}
	}
	if(obj.spiritSheSha==1){
    shensha = new text("[神]" ,0,0, x + i, y+58, "#00FFFF", "bold 20px FangSong");
	i+=48;
	if(jsl==false){jsl=true;}
	}
	if(obj.spiritShanBi==1){
    shanbi = new text("[闪]" ,0,0, x + i, y+58, "#00FFFF", "bold 20px FangSong");
	i+=48;
	if(jsl==false){jsl=true;}
	}
	if(obj.spiritShenXing==1){
    shengxing = new text("[行]" ,0,0, x + i, y+58, "#00FFFF", "bold 20px FangSong");
	i+=48;
	if(jsl==false){jsl=true;}
	}
	//---------------------------
    var hpRec = new round(hp.sx + 9 * rpx/2 + 30, hp.sy - 6, 3 * rpx * n, 5, "rgb(0,255,0)");
    var hpBg = new round(hpRec.sx - 1, hpRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var hpBg2 = new round(hpRec.sx, hpRec.sy, 3 * rpx, 5, "rgb(128,128,128)");

    var mpRec = new round(mp.sx + 9 * rpx/2 + 30, mp.sy - 6, 3 * rpx * m, 5, "rgb(0,0,255)");
    var mpBg = new round(mpRec.sx - 1, mpRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var mpBg2 = new round(mpRec.sx, mpRec.sy, 3 * rpx, 5, "rgb(128,128,128)");

    var powRec = new round(pow.sx + 9 * rpx/2 + 30, pow.sy - 6, 3 * rpx * j, 5, "rgb(255,0,0)");
    var powBg = new round(powRec.sx - 1, powRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var powBg2 = new round(powRec.sx, powRec.sy, 3 * rpx, 5, "rgb(128,128,128)");
	
	var spRec = new round(sp.sx + 9 * rpx/2 + 30, sp.sy - 6, 3 * rpx * s, 5, "rgb(255,255,0)");//改颜色
    var spBg = new round(spRec.sx - 1, spRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var spBg2 = new round(spRec.sx, spRec.sy, 3* rpx, 5, "rgb(128,128,128)");

    var infoBg = new picture(0,0,x, y, 12 * rpx, 10 * rpx / 2.5, renWuBeiJing);
    var infoRI = new picture(0,0,x+1*rpx/2, y+1*rpx/2, 140, 150, img);
    var row2 = new text("我方角色", 0,0,x + 135, y+37, "rgb(0,255,0)", "bold 23px KaiTi");
	var row3 = new text("精神力", 0,0,x + 135, y+58, "rgb(0,255,0)", "bold 23px KaiTi");
	
	
    info.push(infoBg);
    info.push(infoRI);
    info.push(row1);
    info.push(row2);
	if(jsl){info.push(row3);}
    info.push(hpBg);
    info.push(hpBg2);
    info.push(hp);
    info.push(mpBg);
    info.push(mpBg2);
    info.push(mp);
    info.push(powBg);
    info.push(powBg2);
    info.push(pow);
	info.push(spBg);
    info.push(spBg2);
    info.push(sp);
	
	if(obj.spiritJueSha==1){info.push(juesha);}
	if(obj.spiritSheSha==1){info.push(shensha);}
	if(obj.spiritShanBi==1){info.push(shanbi);}
	if(obj.spiritShenXing==1){info.push(shengxing);}
	info.push(spRec);
    info.push(hpRec);
    info.push(mpRec);
    info.push(powRec);
	
}
function enemyInfoShow(obj) {
    var x;
	var y;
    if (obj.sx < canvasWidth / 2) x = canvasWidth - 12 * rpx;
    else x = 0;
	if (obj.sy < canvasHeight / 2) y = canvasHeight -4 * rpx;
	else y = 0;
    var img = new Image();
    img.src = obj.halfBody;
    var n = obj.HP / obj.fullHP;
    var infoBg = new picture(0,0,x, y, 12 * rpx, 10 * rpx / 2.5, renWuBeiJing);
    info.push(infoBg);
    var infoRI = new picture(0,0,x+10+1*rpx/2, y+10+1*rpx/2, 140, 140, img);
    info.push(infoRI);
    var row2 = new text(obj.name,0,0, x + 175, y+35, "#FFFFFF", "bold 20px FangSong");
    info.push(row2);
    var hp = new text("   HP   " + obj.HP + "/" + obj.fullHP, 0,0,x + 150, y+80, "#FFFFFF", "bold 20px FangSong");
    info.push(hp);
    var hpRec = new round(hp.sx + 9 * rpx/2 + 20, hp.sy - 6, 3 * rpx * n, 5, "rgb(0,255,0)");
    var hpBg = new round(hpRec.sx - 1, hpRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var hpBg2 = new round(hpRec.sx, hpRec.sy, 3 * rpx, 5, "rgb(128,128,128)");
    info.push(hpBg);
	info.push(hpBg2);
    info.push(hpRec);
	if(obj.type==1){//如果是BOSS
		var mn = obj.pow / obj.fullPow;
		var pow = new text("   POW  " + obj.pow + "/" + obj.fullPow,0,0, x + 150, y+142, "#FFFFFF", "bold 20px FangSong");
        var powRec = new round(pow.sx + 9 * rpx/2 + 20, pow.sy - 6, 3 * rpx * mn, 5, "rgb(255,0,0)");
		var powBg = new round(powRec.sx - 1, powRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
		var powBg2 = new round(powRec.sx, powRec.sy, 3 * rpx, 5, "rgb(128,128,128)");
		info.push(pow);
		info.push(powBg);
		info.push(powBg2);
		info.push(powRec);
        var m = obj.MP / obj.fullMP;
		var mp = new text("   MP   " + obj.MP + "/" + obj.fullMP,0,0, x + 150, y+112, "#FFFFFF", "bold 20px FangSong");
        var mpRec = new round(mp.sx + 9 * rpx/2 + 20, mp.sy - 6, 3 * rpx * m, 5, "rgb(0,0,255)");
		var mpBg = new round(mpRec.sx - 1, mpRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
		var mpBg2 = new round(mpRec.sx, mpRec.sy, 3 * rpx, 5, "rgb(128,128,128)");
		info.push(mp);
		info.push(mpBg);
		info.push(mpBg2);
		info.push(mpRec);
        var row1 = new text("敌方BOSS", 0,0,x + 280, y+36, "rgb(255,0,0)", "bold 23px KaiTi");
        info.push(row1);
    } else {
        var row1 = new text("敌方角色",0,0, x + 280, y+36, "rgb(255,0,0)", "bold 23px KaiTi");
        info.push(row1);
    }
}
/*
	人物菜单显示
*/
function showMenu(obj) {
    var r = obj.range;
    var sx = obj.mapX;
    var sy = obj.mapY;

    if (sx > canvasWidth / 2) menu.sx = 0;
    else menu.sx = canvasWidth - menu.swidth;

    if (judgeEnemyOnRange(obj)) {
        var x = sx - r * rpx;
        for (var j = 0; j < 2 * r + 1; j++) {
            var y = sy - r * rpx;
            for (var k = 0; k < 2 * r + 1; k++) {
                var dis = Math.abs(x - sx) + Math.abs(y - sy);
                if (dis <= r * rpx && dis > 0)rangeShow.push(new rectangle(x,y,x, y, rpx - 1, rpx - 1, "rgba(255,0,0,0.3)"));
                y += rpx;
            }
            x += rpx;
        }
        menu.sy = menuC[0].sy;
        menu.sheight = 8 * rpx;
        everything3.push(menu);
        for (var m = 0; m < 3; m++) {
			menuC[m].sx=menu.sx;
            everything3.push(menuC[m]);
        }
    } else {
        menu.sy = menuC[3].sy;
        menu.sheight = 5 * rpx;
        everything3.push(menu);
    }
    for (var l = 0; l < 5; l++) {
        menuC[l + 3].sx = menu.sx;
        everything3.push(menuC[l + 3]);
    }
    menuShow = true;
}

/*
	显示道具
*/
function showItem(obj) {
    ItemBg = new picture(0,0,6 * rpx, 4 * rpx, 8 * rpx, 5 * rpx, infoShowBg);
    itemArray.push(ItemBg);
    CloseImg = new picture(0,0,ItemBg.sx + ItemBg.swidth - 1 / 2 * rpx - 4, ItemBg.sy + 4, 1 / 2 * rpx, 1 / 2 * rpx, close);
    itemArray.push(CloseImg);
    var t = 0;
    if (obj.items.length < 6) {
        for (var i = 0; i < obj.items.length; i++) {
            for (var j = 0; j < itemArrays.length; j++) {
                if (obj.items[i].id == itemArrays[j].id) {
                    if (obj.items[i].num > 0) {
                        var img = new Image();
                        img.src = itemArrays[j].img;
                        var itemImg = new picture(0,0,6* rpx, 4 * rpx + t * rpx, rpx, rpx, img);
                        var s = "X " + obj.items[i].num;
                        var num = new text(s, 0,0,itemImg.sx + rpx, itemImg.sy + 2 / 3 * rpx, "rgb(255,255,255)", "bold 20px FangSong");
                        var name = new text(itemArrays[j].name,0,0, itemImg.sx + 2 * rpx, itemImg.sy + 2 / 3 * rpx, "rgb(153,50,204)", "bold 20px KaiTi");
                        var disc = new text(itemArrays[j].discripe,0,0, itemImg.sx + 4 * rpx, itemImg.sy + 2 / 3 * rpx, "rgb(255,255,0)", "bold 20px cursive");
                        itemArray.push(itemImg);
                        itemArray.push(num);
                        itemArray.push(name);
                        itemArray.push(disc);
                        //drawAll();
                        t++;
                    }

                }
            }
        }
    } else {
        alert("每个人最多携带五种道具");
    }
}
/*
	显示技能攻击
*/
function showSkill(obj) {
    skillBg = new picture(0,0,5 * rpx, 3* rpx, 14 * rpx, 4 * rpx, infoShowBg);
    skillArray.push(skillBg);
    CloseImg = new picture(0,0,skillBg.sx + skillBg.swidth - 1 / 2 * rpx - 4, skillBg.sy + 4, 1 / 2 * rpx, 1 / 2 * rpx, close);
    skillArray.push(CloseImg);
    if (obj.skills.length < 5) {
        for (var i = 0; i < obj.skills.length; i++) {
            for (var j = 0; j < skillArrays.length; j++) {
                if (obj.skills[i] == skillArrays[j].id) {
                    var img = new Image();
                    img.src = skillArrays[j].img;
                    var skillImg = new picture(0,0,skillBg.sx + 10, skillBg.sy + 6 + i * rpx, rpx - 10, rpx - 10, img);
                    var name = new text(skillArrays[j].name, 0,0,skillImg.sx + rpx, skillImg.sy + 2 / 3 * rpx - 6, "rgb(255,215,0)", "bold 20px KaiTi");
                    var mp = new text("MP:" + skillArrays[j].mp,0,0, skillImg.sx + 3 * rpx, skillImg.sy + 2 / 3 * rpx - 6, "rgb(0,0,255)", "bold 20px cursive");
                    var suc = new text("成功率:" + skillArrays[j].success + "%",0,0, skillImg.sx + 9 / 2 * rpx, skillImg.sy + 2 / 3 * rpx - 6, "rgb(255,0,0)", "bold 20px FangSong");
                    var dis = new text("说明:" + skillArrays[j].discripe, 0,0,skillImg.sx + 7 * rpx, skillImg.sy + 2 / 3 * rpx - 6, "rgb(0,255,0)", "bold 20px FangSong");
                    skillArray.push(skillImg); //将参数添加到原数组末尾，并返回数组的长度 
                    skillArray.push(name);
                    skillArray.push(mp);
                    skillArray.push(suc);
                    skillArray.push(dis);
                    //drawAll();
                }
            }
        }
    } else {
        alert("每个人最多有4种秘技");
    }
}
/*
	显示怒攻击
*/
function showPower(obj) {
    powerBg = new picture(0,0,5 * rpx, 4* rpx, 14 * rpx, 4 * rpx, infoShowBg);
    powerArray.push(powerBg);
    CloseImg = new picture(0,0,powerBg.sx + powerBg.swidth - 1 / 2 * rpx - 4, powerBg.sy + 4, 1 / 2 * rpx, 1 / 2 * rpx, close);
    powerArray.push(CloseImg);
    if (obj.powers.length < 2) {
        for (var i = 0; i < obj.powers.length; i++) {
            for (var j = 0; j < powerArrays.length; j++) {
                if (obj.powers[i] == powerArrays[j].id) {
                    var img = new Image();
                    img.src = powerArrays[j].img;
                    var powerImg = new picture(0,0,powerBg.sx + 10, powerBg.sy + 6 + i * rpx, rpx - 10, rpx - 10, img);
                    var name = new text(powerArrays[j].name,0,0, powerImg.sx + rpx, powerImg.sy + 2 / 3 * rpx - 6, "rgb(255,215,0)", "bold 20px KaiTi");
                    var p = new text("POW:" + powerArrays[j].p,0,0, powerImg.sx + 3 * rpx, powerImg.sy + 2 / 3 * rpx - 6, "rgb(0,0,255)", "bold 20px cursive");
                    var suc = new text("成功率:" + powerArrays[j].success + "%",0,0, powerImg.sx + 9 / 2 * rpx, powerImg.sy + 2 / 3 * rpx - 6, "rgb(255,0,0)", "bold 20px FangSong");
                    var dis = new text("说明:" + powerArrays[j].discripe, 0,0,powerImg.sx + 7 * rpx, powerImg.sy + 2 / 3 * rpx - 6, "rgb(0,255,0)", "bold 20px FangSong");
                    powerArray.push(powerImg);
                    powerArray.push(name);
                    powerArray.push(p);
                    powerArray.push(suc);
                    powerArray.push(dis);
                   // drawAll();
                }
            }
        }
    } else {
        alert("每个人最多有1种怒攻击技");
    }
}

/*
	显示精神力
*/
function showSpirit(obj){
      spiritBg = new picture(0,0,6 * rpx, 3* rpx, 12 * rpx+20, 5 * rpx+10, spirit_Bg);
	  spiritArray.push(spiritBg);
	  CloseImg = new picture(0,0,spiritBg.sx + spiritBg.swidth - 1 / 2 * rpx - 4, spiritBg.sy + 4, 1 / 2 * rpx, 1 / 2 * rpx, close);
	  spiritArray.push(CloseImg);
	  var t = 0;
      for (var i = 0; i < obj.spirits.length; i++) {
            for (var j = 0; j < spiritArrays.length; j++) {
                if (obj.spirits[i].id == spiritArrays[j].id) {  
                        var img = new Image();
                        img.src = spiritArrays[j].img;
                        var spiritImg = new picture(0,0,6 * rpx+5, 3 * rpx+5 + t * rpx, rpx, rpx, img);                   
                        var name = new text(spiritArrays[j].name, 0,0,spiritImg.sx +rpx, spiritImg.sy + 2 / 3 * rpx, "rgb(255,215,0)", "bold 20px KaiTi");
						var sp = new text("SP:" + spiritArrays[j].gold,0,0, spiritBg.sx + 2.5* rpx, spiritBg.sy +5+ t * rpx+2 / 3 * rpx , "#28FF28", "bold 20px cursive");
                        var disc = new text(spiritArrays[j].discripe, 0,0,spiritImg.sx + 4 * rpx, spiritImg.sy + 2 / 3 * rpx, "#FFFFFF", "bold 20px Microsoft Yahei");
                        spiritArray.push(spiritImg);            
                        spiritArray.push(name);
						spiritArray.push(sp);
                        spiritArray.push(disc);
                       // drawAll();
						t++;
						
                }
            }
        }
}

//---------确定使用秘笈攻击函数-------------------------------------
function showSkillConfirm() {
	//console.log("hello");
    skillConfirmShow = true;
    var confirmBg = new picture(0,0,9 * rpx, 4 * rpx, 6 * rpx, 3 * rpx, confirm);
    confirmArray.push(confirmBg);
    confirmArray.push(confirmBg);
    confirmArray.push(confirmBg);
    var s = "确定要使用技能吗？";
    var confirmText = new text(s,0,0, confirmBg.sx + rpx, confirmBg.sy + rpx, "rgb(32,11,225)", "bold 20px FangSong");
    confirmArray.push(confirmText);
    ensure = new picture(0,0,confirmBg.sx + 1 / 2 * rpx, confirmBg.sy + 2 * rpx, 2 * rpx, 8 / 15 * rpx, qd);
    cancel = new picture(0,0,ensure.sx + 3 * rpx, ensure.sy, 2 * rpx, 8 / 15 * rpx, qx);
    confirmArray.push(ensure);
    confirmArray.push(cancel);
}
//-----------------确定使用怒攻击函数--------------------------
function showPowerConfirm() {
    powerConfirmShow = true;
     var confirmBg = new picture(0,0,9 * rpx, 4 * rpx, 6 * rpx, 3 * rpx, confirm);
    confirmArray.push(confirmBg);
    confirmArray.push(confirmBg);
    confirmArray.push(confirmBg); //push3次是为了覆盖掉原来的那个总技能列表中的背景
    var s = "确定要使用技能吗？";
    var confirmText = new text(s, 0,0,confirmBg.sx + rpx, confirmBg.sy + rpx, "rgb(32,11,225)", "bold 20px FangSong");
    confirmArray.push(confirmText);
    ensure = new picture(0,0,confirmBg.sx + 1 / 2 * rpx, confirmBg.sy + 2 * rpx, 2 * rpx, 8 / 15 * rpx, qd);
    cancel = new picture(0,0,ensure.sx + 3 * rpx, ensure.sy, 2 * rpx, 8 / 15 * rpx, qx);
    confirmArray.push(ensure);
    confirmArray.push(cancel);
	//drawAll();
}
//---------------------确定使用道具函数------------
function showItemConfirm() {
	clearArray(confirmArray);
    itemConfirmShow = true;
    var confirmBg = new picture(0,0,7* rpx, 5 * rpx, 6 * rpx, 3 * rpx, confirm);
    confirmArray.push(confirmBg);
    var s = "确定要使用道具吗？";
    var confirmText = new text(s,0,0, confirmBg.sx + rpx, confirmBg.sy + rpx, "rgb(32,11,225)", "bold 20px FangSong");
    confirmArray.push(confirmText);
    ensure = new picture(0,0,confirmBg.sx + 1 / 2 * rpx, confirmBg.sy + 2 * rpx, 2 * rpx, 8 / 15 * rpx, qd);
    cancel = new picture(0,0,ensure.sx + 3 * rpx, ensure.sy, 2 * rpx, 8 / 15 * rpx, qx);
    confirmArray.push(ensure);
    confirmArray.push(cancel);
	//drawAll();
}
function showSpiritConfirm() {
    spiritConfirmShow = true;
    var confirmBg = new picture(0,0,10 * rpx, 4 * rpx, 6 * rpx, 3 * rpx, confirm);
    confirmArray.push(confirmBg);
   var s = "确定要使用该精神力？";
   var confirmText = new text(s, 0,0,confirmBg.sx + rpx, confirmBg.sy + rpx, "rgb(32,11,225)", "bold 20px FangSong");
   confirmArray.push(confirmText);
    ensure = new picture(0,0,confirmBg.sx + 1 / 2 * rpx, confirmBg.sy + 2 * rpx, 2 * rpx, 8 / 15 * rpx, qd);
    cancel = new picture(0,0,ensure.sx + 3 * rpx, ensure.sy, 2 * rpx, 8 / 15 * rpx, qx);
    confirmArray.push(ensure);
    confirmArray.push(cancel);
	//drawAll();
}
function mpAlert() {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="MP不足！";
	var r1 = new text(aa,9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
   // drawAll();
    setTimeout(function() {
        clearArray(tishi);
        //drawAll();
    },
    2500);
}

function powAlert() {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="POW不足！";
	var r1 = new text(aa,9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
   // drawAll();
    setTimeout(function() {
        clearArray(tishi);
        //drawAll();
    },
    2500);   
}
function spAlert() {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="SP不足！";
	var r1 = new text(aa,9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
    //drawAll();
    setTimeout(function() {
        clearArray(tishi);
        //drawAll();
    },
    2500);
}

function hasusedItemAlert(){
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="每位主角每回合只能使用一次道具！";
	var r1 = new text(aa,5*rpx,4*rpx ,5*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
    setTimeout(function() {
        clearArray(tishi);
    },
    2500); 
}
function noDeadAlert() {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="无人死亡！";
	var r1 = new text(aa,9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
    //drawAll();
    setTimeout(function() {
        clearArray(tishi);
        //drawAll();
    },
    2500); 
}

function sellItemAlert(a) {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="此道具卖了";
	var r1 = new text(aa+a+"块",9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
	drawBigMap();
    setTimeout(function() {
        clearArray(tishi);
		drawBigMap();
    },
    2500); 
}

function sellEquipAlert(a) {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="此装备卖了";
	var r1 = new text(aa+a+"块",9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
	drawBigMap();
    setTimeout(function() {
        clearArray(tishi);
		drawBigMap();
    },
    2500); 
}

function spiritAlert(a) {
    var s;
	if(a==1){s="点击我方发动回春吧";}
	else if(a==2){s="点击普通攻击绝杀吧";}
	else if(a==3){s="点击普通攻击神杀吧";}
	else if(a==4){s="本回合躲过下次攻击";}
	else if(a==5){s="点击我方人物神行吧";}
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var nextGuanKaBG = new picture(0,0,6 * rpx, 4 * rpx, 8 * rpx, 5 * rpx, infoShowBg);
    var confirmText = new text(s, 0,0, nextGuanKaBG.sx+48 ,nextGuanKaBG.sy+3*rpx,"#FAF4FF", "bold 30px FangSong");
	var title = new text("提示", 0,0,nextGuanKaBG.sx +150, nextGuanKaBG.sy + 2 / 3 * rpx, "#000000", "bold 30px Microsoft Yahei");
	
	confirmArray.push(shadow);
	confirmArray.push(nextGuanKaBG);
	confirmArray.push(title);
    confirmArray.push(confirmText);
	
//    drawAll();
    setTimeout(function() {
        clearArray(confirmArray);
   //     drawAll();
    },
    1000);
}
function showRolesDetailStatus(obj,a,b) {
	clearArray(statusArray);
	var aa=a||5* rpx-24;
	var bb=b||24;
    statusBg = new picture(0,0,aa,bb , 700, 550, statusShowBg);
    statusArray.push(statusBg);
    statusArray.push(statusBg);
    statusArray.push(statusBg);
	
    CloseImg = new picture(0,0,statusBg.sx + statusBg.swidth - rpx - 4, statusBg.sy, 2 / 3 * rpx, 2 / 3 * rpx, close);
    statusArray.push(CloseImg);
    leftArrow = new picture(0,0,statusBg.sx + 1 / 2 * rpx+2, statusBg.sy + 3 * rpx - 10, 44, 37, zjt);
    rightArrow = new picture(0,0,statusBg.sx + 11 / 2 * rpx + 22, statusBg.sy + 3 * rpx - 10, 44, 37, yjt);
    statusArray.push(leftArrow);
    statusArray.push(rightArrow);
    skill = new picture(0,0,statusBg.sx + 1 / 2 * rpx - 3, statusBg.sy + 8 * rpx + 9, 110, 30, mj2);
    power = new picture(0,0,skill.sx + skill.swidth - 2, statusBg.sy + 8 * rpx + 9, 110, 30, nj1);
    equip = new picture(0,0,power.sx + power.swidth - 2, statusBg.sy + 8 * rpx + 9, 110, 30, zb1);
    statusArray.push(skill);
    statusArray.push(power);
    statusArray.push(equip);
    var hf = new Image();
    hf.src = obj.halfBody;
    var halfBody = new picture(0,0,statusBg.sx + 5 / 4 * rpx+20, statusBg.sy + rpx, 200, 200, hf);
    statusArray.push(halfBody);
    //drawAll();
    var name = new text(obj.name, 0,0,statusBg.sx + 8 * rpx + 1 / 4 * rpx+4, statusBg.sy + 5 / 3 * rpx + 4, "rgb(255,255,255)", "bold 25px KaiTi");
    statusArray.push(name);
    var lv = new text("LV " + obj.level + "  " + obj.EXP + "/" + obj.nextEXP,0,0, statusBg.sx + 8 * rpx + 1 / 4 * rpx+4, statusBg.sy + 8 / 3 * rpx + 2, "rgb(255,255,255)", "bold 25px KaiTi");
    statusArray.push(lv);
    var hp = new text(obj.HP + "/" + obj.fullHP,0,0, statusBg.sx + 7 * rpx + 2 / 3 * rpx+15, statusBg.sy + 11 / 3 * rpx, "rgb(255,255,255)", "bold 20px KaiTi");
	statusArray.push(hp);
    var mp = new text(obj.MP + "/" + obj.fullMP, 0,0,statusBg.sx + 11 * rpx+15, statusBg.sy + 11 / 3 * rpx, "rgb(255,255,255)", "bold 20px KaiTi");
	statusArray.push(mp);
    var sp = new text(obj.SP + "/" + obj.fullSP,0,0, statusBg.sx + 7 * rpx + 2 / 3 * rpx+15, statusBg.sy + 14 / 3 * rpx - 4, "rgb(255,255,255)", "bold 20px KaiTi"); 
	statusArray.push(sp);
    var pow = new text(obj.pow + "/" + obj.fullPow,0,0, statusBg.sx + 11 * rpx+15, statusBg.sy + 14 / 3 * rpx - 4, "rgb(255,255,255)", "bold 20px KaiTi"); 
	statusArray.push(pow);
    var movement = new text(obj.movement, 0,0,statusBg.sx + 3 * rpx, statusBg.sy + 6 * rpx, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(movement);
    var atk = new text(obj.ATK, 0,0,statusBg.sx + 9 * rpx + 1 / 2 * rpx, statusBg.sy + 6 * rpx, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(atk);
    var speed = new text(obj.speed, 0,0,statusBg.sx + 3 * rpx, statusBg.sy + 7 * rpx - 4, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(speed);
    var range = new text(obj.range,0,0, statusBg.sx + 9 * rpx + 1 / 2 * rpx, statusBg.sy + 7 * rpx - 4, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(range);
    var def = new text(obj.DEF, 0,0,statusBg.sx + 3 * rpx, statusBg.sy + 8 * rpx - 10, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(def);
	
	
	var i=10;//用来使按顺序排列下来
		
		if(obj.spiritJueSha==1)
		{
		  var SJueSha=new text("[绝]",0,0, statusBg.sx + i* rpx+3 ,  statusBg.sy + 5 / 3 * rpx + 4, "#00FFFF", "bold 25px KaiTi"); 
		  statusArray.push(SJueSha);
		  i++;
		}
		if(obj.spiritSheSha==1)
		{
		  var SSheSha=new text("[神]",0,0, statusBg.sx + i * rpx+3 , statusBg.sy + 5 / 3 * rpx + 4, "#00FFFF", "bold 25px KaiTi"); 
		  statusArray.push(SSheSha);
		 i++;
		}
		if(obj.spiritShanBi==1)
		{
		  var SShanBi=new text("[闪]",0,0, statusBg.sx + i * rpx+3 ,  statusBg.sy + 5 / 3 * rpx + 4, "#00FFFF", "bold 25px KaiTi"); 
		  statusArray.push(SShanBi);
		  i++;
		}
		if(obj.spiritShenXing==1)
		{
		  var SShenXing=new text("[行]", 0,0,statusBg.sx + i * rpx+3,  statusBg.sy + 5 / 3 * rpx + 4, "#00FFFF", "bold 25px KaiTi"); 
		  statusArray.push(SShenXing);
		  i++;
		}
	skillStatus(rolesArray[tmpIndex]);//调用显示技能
 //   drawAll();
}
function showEnemysDetailStatus(obj,a,b) {
	console.log(obj.halfBody);
	clearArray(statusArray);
	var aa=a||5* rpx-24;
	var bb=b||24;
    statusBg = new picture(0,0,aa, bb, 670, 550, statusShowBg);
    statusArray.push(statusBg);
    statusArray.push(statusBg);
    statusArray.push(statusBg);
    CloseImg = new picture(0,0,statusBg.sx + statusBg.swidth - rpx - 4, statusBg.sy, 2 / 3 * rpx, 2 / 3 * rpx, close);
    statusArray.push(CloseImg);
    leftArrow = new picture(0,0,statusBg.sx + 1 / 2 * rpx, statusBg.sy + 3 * rpx - 10, 44, 37, zjt);
    rightArrow = new picture(0,0,statusBg.sx + 11 / 2 * rpx + 10, statusBg.sy + 3 * rpx - 10, 44, 37, yjt);
    statusArray.push(leftArrow);
    statusArray.push(rightArrow);
    skill = new picture(0,0,statusBg.sx + 1 / 2 * rpx - 3, statusBg.sy + 8 * rpx + 9, 110, 30, mj2);
    power = new picture(0,0,skill.sx + skill.swidth - 2, statusBg.sy + 8 * rpx + 9, 110, 30, nj1);
    equip = new picture(0,0,power.sx + power.swidth - 2, statusBg.sy + 8 * rpx + 9, 110, 30, zb1);
    statusArray.push(skill);
    statusArray.push(power);
    statusArray.push(equip);
    var hf = new Image();
    hf.src = obj.halfBody;
    var halfBody = new picture(0,0,statusBg.sx + 5 / 4 * rpx, statusBg.sy + rpx, 200, 200, hf);
    statusArray.push(halfBody);
   // drawAll();
    var name = new text(obj.name + "   {" + (enemysIndex + 1) + "}",0,0, statusBg.sx + 8 * rpx + 1 / 4 * rpx, statusBg.sy + 5 / 3 * rpx + 4, "rgb(255,255,255)", "bold 25px KaiTi");
    statusArray.push(name);
    var hp = new text(obj.HP + "/" + obj.fullHP,0,0, statusBg.sx + 7 * rpx + 2 / 3 * rpx, statusBg.sy + 11 / 3 * rpx, "rgb(255,255,255)", "bold 20px KaiTi"); 
	statusArray.push(hp);
    if (obj.MP != 0) {
        var mp = new text(obj.MP + "/" + obj.fullMP,0,0, statusBg.sx + 11 * rpx, statusBg.sy + 11 / 3 * rpx, "rgb(255,255,255)", "bold 20px KaiTi"); 
		statusArray.push(mp);
        var tp = new Image();
        tp.src = "image/button/BS.png";
        var bs = new picture(0,0,statusBg.sx + 4 * rpx, statusBg.sy + rpx, 72, 22, tp);
        statusArray.push(bs);
    }
    var movement = new text(obj.movement,0,0, statusBg.sx + 3 * rpx, statusBg.sy + 6 * rpx, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(movement);
    var atk = new text(obj.ATK, 0,0,statusBg.sx + 9 * rpx + 1 / 2 * rpx, statusBg.sy + 6 * rpx, "rgb(255,255,255)", "bold 25px KaiTi");
	statusArray.push(atk);
    var speed = new text(obj.speed, 0,0,statusBg.sx + 3 * rpx, statusBg.sy + 7 * rpx - 4, "rgb(255,255,255)", "bold 25px KaiTi");
	statusArray.push(speed);
    var range = new text(obj.range,0,0, statusBg.sx + 9 * rpx + 1 / 2 * rpx, statusBg.sy + 7 * rpx - 4, "rgb(255,255,255)", "bold 25px KaiTi");
	statusArray.push(range);
    var def = new text(obj.DEF,0,0, statusBg.sx + 3 * rpx, statusBg.sy + 8 * rpx - 10, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(def);
	//if(obj.type==1){
	skillStatus(enemysArray[enemysIndex]);
	//	}
   // drawAll();
}
function skillStatus(obj) {
	clearArray(speArray);
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < skillArrays.length; j++) {
            if (obj.skills[i] == skillArrays[j].id) {
                var img = new Image();
                img.src = skillArrays[j].img;
                var skillImg = new picture(0,0,skill.sx, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(skillArrays[j].name,0,0, skillImg.sx + 2 / 3 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var mp = new text("MP:" + skillArrays[j].mp, 0,0,skillImg.sx + 3 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(0,0,255)", "bold 20px cursive");
                var suc = new text("成功率:" + skillArrays[j].success + "%",0,0, skillImg.sx + 9 / 2 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(255,0,0)", "bold 20px FangSong");
                var dis = new text("说明:" + skillArrays[j].discripe, 0,0,skillImg.sx + 7 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
                speArray.push(skillImg);
                speArray.push(name);
                speArray.push(mp);
                speArray.push(suc);
                speArray.push(dis);
                //drawAll();
            }
        }
    }
}
function powerStatus(obj) {
	console.log(obj.powers.length);
	if(obj.powers.length > 0){
    for (var i = 0; i < obj.powers.length; i++) {
        for (var j = 0; j < powerArrays.length; j++) {
            if (obj.powers[i] == powerArrays[j].id) {
                var img = new Image();
                img.src = powerArrays[j].img;
                var powerImg = new picture(0,0,skill.sx, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(powerArrays[j].name,0,0, powerImg.sx + 2 / 3 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var p = new text("POW:" + powerArrays[j].p,0,0, powerImg.sx + 3 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(0,0,255)", "bold 20px cursive");
                var suc = new text("成功率:" + powerArrays[j].success + "%",0,0, powerImg.sx + 9 / 2 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(255,0,0)", "bold 20px FangSong");
                var dis = new text("说明:" + powerArrays[j].discripe,0,0, powerImg.sx + 7 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
                speArray.push(powerImg);
                speArray.push(name);
                speArray.push(p);
                speArray.push(suc);
                speArray.push(dis);
                //drawAll();
            }
        }
    }
  }
	//drawAll();
}
function failAlert(a, obj) {
    var r1 = new text(a,obj.sx, obj.sy,  obj.sx, obj.sy, "rgb(255,0,0)", "bold 20px FangSong");
    confirmArray.push(r1);
    //drawAll();
    setTimeout(function() {
        clearArray(confirmArray);
        //drawAll();
    },
    1000);
}
function getSomething(a, obj) {
    var r1 = new text(a,obj.sx, obj.sy-10,  obj.sx, obj.sy-10, "rgb(0,0,255)", "bold 20px FangSong");
    confirmArray.push(r1);
	var at1 = setInterval(function() {
        r1.sy--;
        if (r1.sy == (obj.sy-60)) {
            clearInterval(at1);       
            clearArray(confirmArray);
        }
    },
    50);
}
function getSomething2(a, obj) {
    var r1 = new text(a,obj.sx, obj.sy-30,  obj.sx, obj.sy-30, "rgb(0,0,255)", "bold 20px FangSong");
    confirmArray.push(r1);
    var at1 = setInterval(function() {
        r1.sy--; 
        if (r1.sy == obj.sy-80) {
            clearInterval(at1);       
            clearArray(confirmArray);
            }
        },
    50);
}

//循环遍历存放升级数据的数组
function getRoleUpData(arr){
   var temp=0;
   for(var i=0;i<arr.length;i++){
      temp+=arr[i];
   }
   clearArray(arr);
   return temp;
 
}
function aftLevelEvent(objAttack){	 
	 //升级的背景图片
	 var aftLBg =new picture(9 * rpx,5 * rpx,9 * rpx, 5 * rpx, 8* rpx, 4 * rpx, levelBG);
	 powerArray.push(aftLBg);
	 if(levelupinfo!='0'){
		 //放说明的文字
		 var LUSM=new picture(9 * rpx,  9* rpx,9 * rpx,  9* rpx,  8*rpx,  rpx, levelUpShuoMing); 
		 powerArray.push(LUSM);
		  //说明的文字
	      var LUSMinfo= new text(levelupinfo,LUSM.sx+50 , LUSM.sy+35 , LUSM.sx+50 , LUSM.sy+35 , "#FAF4FF", "bold 25px 楷体");
          powerArray.push(LUSMinfo);
	 }
	
	 //title背景图片
	 var title=new picture(10* rpx-24, 3* rpx+24,10* rpx-24, 3* rpx+24, 7*rpx, 1*rpx, lvtitleBG);
	 powerArray.push(title);
	 //升级的主角姓名
	 var sname=objAttack.name;
     var name = new text(sname,title.sx+50 , title.sy+35 , title.sx+50 , title.sy+35 , "F9F900", "bold 25px 楷体");
	 powerArray.push(name);
	 var jia="+";
	 //主角等级
	 var s3="LV";
	 var slv=objAttack.level;
     var lv=new text(s3,title.sx+4*rpx , title.sy+37 , title.sx+4*rpx , title.sy+37 , "#F9F900", "bold 30px FangSong");
	 var lvnum=new text(slv,title.sx+6*rpx-30 , title.sy+37 , title.sx+6*rpx-30 , title.sy+37 , "#00DB00", "bold 25px 楷体");
	 powerArray.push(lv);
	 powerArray.push(lvnum);
	 //血量
	 var s1="HP";
	 var roleHp=objAttack.fullHP;
	 var addHp=getRoleUpData(objAttack.addHP);
	 var hp1 = new text(s1, aftLBg.sx+16 , aftLBg.sy+ 38 ,aftLBg.sx+16 , aftLBg.sy+ 38 , "#F9F900", "bold 20px FangSong");
	 var hp2 = new text(roleHp,aftLBg.sx+70 , aftLBg.sy+ 38 , aftLBg.sx+70 , aftLBg.sy+ 38 , "#00FFFF", "bold 20px FangSong");
	 if(addHp!=0){
	   var hp3 = new text(jia, aftLBg.sx+120 , aftLBg.sy+ 38 ,aftLBg.sx+120 , aftLBg.sy+ 38 , "#F9F900", "bold 20px FangSong");
	   var hp = new text(addHp, aftLBg.sx+140 , aftLBg.sy+ 38 , aftLBg.sx+140 , aftLBg.sy+ 38 , "#00DB00", "bold 20px FangSong");
	   powerArray.push( hp3);
	   powerArray.push( hp); 
	 }
	 powerArray.push( hp1);
	 powerArray.push( hp2);
	 //SP量
	 var s2="SP";
	 var roleSP=objAttack.fullSP;
	 var addSp=getRoleUpData(objAttack.addSP);
	 var sp2 = new text(s2,  aftLBg.sx+16 , aftLBg.sy+88,aftLBg.sx+16 , aftLBg.sy+88, "#F9F900", "bold 20px FangSong");
	 var sp1 = new text(roleSP, aftLBg.sx+70 , aftLBg.sy+88 ,aftLBg.sx+70 , aftLBg.sy+88 , "#00FFFF", "bold 20px FangSong");
	 if(addSp!=0){
	   var sp3 = new text(jia,aftLBg.sx+120 , aftLBg.sy+88 , aftLBg.sx+120 , aftLBg.sy+88 , "#F9F900", "bold 20px FangSong");
	   var sp = new text(addSp,aftLBg.sx+140 ,aftLBg.sy+88  , aftLBg.sx+140 ,aftLBg.sy+88  , "#00DB00", "bold 20px FangSong");
	   powerArray.push(sp3);
	   powerArray.push(sp);
	 }
	 powerArray.push(sp1);
	 powerArray.push(sp2);
	 //mp
	 var s4="MP";
	 var roleMp=objAttack.fullMP;
	 var addmp=getRoleUpData(objAttack.addMP);
	 var mp1= new text(s4, aftLBg.sx+16 , aftLBg.sy+140 , aftLBg.sx+16 , aftLBg.sy+140 , "#F9F900", "bold 20px FangSong");
	 var mp2= new text(roleMp,aftLBg.sx+70 , aftLBg.sy+140 , aftLBg.sx+70 , aftLBg.sy+140 , "#00FFFF", "bold 20px FangSong");
	 if(addmp!=0){
	   var mp3 = new text(jia, aftLBg.sx+120 , aftLBg.sy+140 , aftLBg.sx+120 , aftLBg.sy+140 , "#F9F900", "bold 20px FangSong");
	   var mp4 = new text(addmp,  aftLBg.sx+140 ,aftLBg.sy+140 ,aftLBg.sx+140 ,aftLBg.sy+140 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(mp3);
	   powerArray.push(mp4);
	 }
	 powerArray.push(mp1);
	 powerArray.push(mp2);
	
	 //MOV
	 var s3="MOV";	
	 var rolemov=objAttack.movement;
	 var addMOV=getRoleUpData(objAttack.addMOV);
	 var mov2 = new text(rolemov, aftLBg.sx+70 , aftLBg.sy+185 ,aftLBg.sx+70 , aftLBg.sy+185 , "#00FFFF", "bold 20px FangSong");
	 var mov3 = new text(s3,  aftLBg.sx+16 , aftLBg.sy+185 ,aftLBg.sx+16 , aftLBg.sy+185 , "#F9F900", "bold 20px FangSong");
     if(addMOV!=0){
	   var mov1 = new text(jia,aftLBg.sx+120 , aftLBg.sy+185 , aftLBg.sx+120 , aftLBg.sy+185 , "#F9F900", "bold 20px FangSong");
	   var mov = new text(addMOV,aftLBg.sx+140 ,aftLBg.sy+185 , aftLBg.sx+140 ,aftLBg.sy+185 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(mov1);
	   powerArray.push(mov);
	 }
	 powerArray.push(mov2);
	 powerArray.push(mov3);
	 //ATK
	 var s5="攻";
	 var roleAtk=objAttack.ATK;
	 var addATK=getRoleUpData(objAttack.addATK);
	 var atk1=new text(roleAtk,aftLBg.sx+274 , aftLBg.sy+38 , aftLBg.sx+274 , aftLBg.sy+38 , "#00FFFF", "bold 20px FangSong");
	 var atk2 = new text(s5,aftLBg.sx+220 , aftLBg.sy+38 , aftLBg.sx+220 , aftLBg.sy+38 , "#F9F900", "bold 20px FangSong");
	 powerArray.push(atk1);
	 powerArray.push(atk2);
	 if(addATK!=0){
	   var atk3 = new text(jia,aftLBg.sx+324 , aftLBg.sy+38 , aftLBg.sx+324 , aftLBg.sy+38 , "#F9F900", "bold 20px FangSong");
	   var atk4 = new text(addATK, aftLBg.sx+344 ,aftLBg.sy+38 ,aftLBg.sx+344 ,aftLBg.sy+38 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(atk3);
	   powerArray.push(atk4);
	 }
	 //防
	 var s6="防";
	 var roleDef=objAttack.DEF;
	 var addDEF=getRoleUpData(objAttack.addDEF);
	 var def1=new text(roleDef, aftLBg.sx+274 , aftLBg.sy+88 ,aftLBg.sx+274 , aftLBg.sy+88 , "#00FFFF", "bold 20px FangSong");
	 var def2 = new text(s6, aftLBg.sx+220 , aftLBg.sy+88 ,aftLBg.sx+220 , aftLBg.sy+88 , "#F9F900", "bold 20px FangSong");
	 powerArray.push(def1);
	 powerArray.push(def2);
	 if(addDEF!=0){
	   var def3 = new text(jia,aftLBg.sx+324 , aftLBg.sy+88 , aftLBg.sx+324 , aftLBg.sy+88 , "#F9F900", "bold 20px FangSong");
	   var def4 = new text(addDEF,aftLBg.sx+344 ,aftLBg.sy+88 , aftLBg.sx+344 ,aftLBg.sy+88 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(def3);
	   powerArray.push(def4);
	 }
	 //速
	 var s7="速";
	 var rolespe=objAttack.speed;
	 var addspe=getRoleUpData(objAttack.addSpeed);
	 var spe1=new text(rolespe,aftLBg.sx+274 , aftLBg.sy+140 , aftLBg.sx+274 , aftLBg.sy+140 , "#00FFFF", "bold 20px FangSong");
	 var spe2=new text(s7,aftLBg.sx+220 , aftLBg.sy+140 , aftLBg.sx+220 , aftLBg.sy+140 , "#F9F900", "bold 20px FangSong");
	 powerArray.push(spe1);
	 powerArray.push(spe2);
	 if(addspe!=0){
	   var spe3 = new text(jia,aftLBg.sx+324 , aftLBg.sy+140 , aftLBg.sx+324 , aftLBg.sy+140 , "#F9F900", "bold 20px FangSong");
	   var spe4 = new text(addspe,aftLBg.sx+344 ,aftLBg.sy+140 , aftLBg.sx+344 ,aftLBg.sy+140 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(spe3);
	   powerArray.push(spe4);
	   //drawAll();  
	 }
	 //更新role的HP,fullHP
     objAttack.fullHP=Number(addHp)+Number(objAttack.fullHP);
	 objAttack.HP=objAttack.fullHP;
     //更新role的SP,fullSP
	 objAttack.fullSP=Number(addSp)+Number(objAttack.fullSP);
	 objAttack.SP= objAttack.fullSP;
     //更新role的speed
	 objAttack.speed=Number(addspe)+Number(objAttack.speed);
	 //更新role的Mp
	 objAttack.fullMP=Number(addmp)+Number(objAttack.fullMP);
	 objAttack.MP=objAttack.fullMP;
     //更新role的ATK
	 objAttack.ATK= Number(addATK)+Number(objAttack.ATK);
	 //更新role的DEF
	 objAttack.DEF=Number(addDEF)+Number(objAttack.DEF);
	 //更新role的mov
	 objAttack.movement=Number(objAttack.movement)+Number(addMOV);
		
     //半身像
	  var h = new Image();
      h.src = objAttack.halfBody;
      var s3 = new picture(48*5, 48*4,48*5, 48*4, 4 * rpx, 4 * rpx, h);
	  powerArray.push(s3);  
	  //drawAll();  
}
/*
主角周围没有空位可以复活
*/
function noEmptyPlace(){	
	 var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	 var aa="主角周围没有空位可以复活";
	 var r1 = new text(aa,6*rpx,6*rpx ,6*rpx ,6*rpx , "#F9F900", "bold 40px KaiTi");
    confirmArray.push(shadow);
    confirmArray.push(r1);
   // drawAll();
    setTimeout(function() {
        clearArray(confirmArray);
        //drawAll();
    },
    2000);
 

}
//覆盖层
function FuGaiCeng(enemy,role){
	 var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	 shadowShow.push(shadow);
	/*
   //-------添加覆盖层，这里以后肯定要修改的--------
   //在敌人的上面(OK)
	if(enemy.mapX==role.mapX&&enemy.mapY>role.mapY){
		var shadow1=new rectangle(0,0,0,0,role.mapX,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow2=new rectangle(role.mapX+48,0,role.mapX+48,0,canvasWidth-role.mapX-48,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow3=new rectangle(role.mapX,0,role.mapX,0,48,role.mapY,"rgba(0,0,0,0.7)");
		var shadow4=new rectangle(enemy.mapX,enemy.mapY+48,enemy.mapX,enemy.mapY+48,48,canvasHeight-enemy.mapY-48,"rgba(0,0,0,0.7)");							
	}
	//在敌人的左边(OK)
	else if(role.mapX<enemy.mapX&&enemy.mapY==role.mapY){
		var shadow1=new rectangle(0,0,0,0,role.mapX,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow2=new rectangle(role.mapX+96,0,role.mapX+96,0,canvasWidth-role.mapX-96,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow3=new rectangle(role.mapX,0,role.mapX,0,96,role.mapY,"rgba(0,0,0,0.7)");
		var shadow4=new rectangle(role.mapX,role.mapY+48,role.mapX,role.mapY+48,96,canvasHeight-role.mapY-48,"rgba(0,0,0,0.7)");
	}
	//在敌人的右边(OK)
	else if(enemy.mapX<role.mapX&&enemy.mapY==role.mapY){
		var shadow1=new rectangle(0,0,0,0,enemy.mapX,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow2=new rectangle(role.mapX+48,0,role.mapX+48,0,canvasWidth-role.mapX-48,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow3=new rectangle(enemy.mapX,0,enemy.mapX,0,96,enemy.mapY,"rgba(0,0,0,0.7)");
		var shadow4=new rectangle(enemy.mapX,enemy.mapY+48,enemy.mapX,enemy.mapY+48,96,canvasHeight-enemy.mapY-48,"rgba(0,0,0,0.7)");
	}
	//在敌人的下面(OK)
	else if(enemy.mapX==role.mapX&&enemy.mapY<role.mapY){
		var shadow1=new rectangle(0,0,0,0,enemy.mapX,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow2=new rectangle(enemy.mapX+48,0,enemy.mapX+48,0,canvasWidth-enemy.mapX-48,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow3=new rectangle(enemy.mapX,0,enemy.mapX,0,48,enemy.mapY,"rgba(0,0,0,0.7)");
		var shadow4=new rectangle(enemy.mapX,enemy.mapY+96,enemy.mapX,enemy.mapY+96,48,canvasHeight-enemy.mapY-96,"rgba(0,0,0,0.7)");
	}
	shadowShow.push(shadow1);
	shadowShow.push(shadow2);
	shadowShow.push(shadow3);
	shadowShow.push(shadow4);
	*/
    //drawAll();

}
//移动地图
function moveMap(){
  levelUpOk=true;//用来使游戏一开始自己移动的时候，阻止用户鼠标在画布四周触发地图滚动事件
  mapRightMov=true;
  ourTurn.play();
  canvas.removeEventListener('click', cCheck, false);
  drawAll();
//  drawAll();
  clearArray(everything2);
//  mapDraw=setInterval(drawAll,8);
  mapDraw=window.requestAnimationFrame(drawAll);
  // drawAll();
   
	
  //drawAll();
   var t1 = setInterval(function(){
	  if(!mapRightMov){
		  clearInterval(t1);
		  mapLeftMov=true; 
		 // drawAll();
		//  mapDraw=setInterval(drawAll,8);
		  var t2=setInterval(function(){
			  if(!mapLeftMov)
			  	{
			  	clearInterval(t2);
			  	levelUpOk=false;			
			  	showMapName();
			  	}
		  },1000);
	  }
  },1000);
// alert("aa");
 // mapLeftMov=true;
//   drawAll();
//  mapDraw=window.requestAnimationFrame(drawAll);
  
  //if(!mapLeftMov){levelUpOk=false;showMapName();}
  
/*  var t1 = setInterval(function(){
	  if(!mapRightMov){
		  clearInterval(t1);
		  mapLeftMov=true; 
		//  mapDraw=setInterval(drawAll,8);
		  mapDraw=window.requestAnimationFrame(drawAll);
		  var t2=setInterval(function(){
			  if(!mapLeftMov){clearInterval(t2);levelUpOk=false;showMapName();}
		  },1000);
	  }
  },1000);*/
}
//游戏背景展示   


function gameBGShow()
{
  
   gameBackGroundShow=true;
   gamebgShow.currentTime=0;
   gamebgShow.play(); 
   ctx.clearRect(0, 0, canvasWidth, canvasHeight);   
   //var dElem = document.getElementById("canvas");
   //var dCtx = dElem.getContext('2d');    
   ctx.font ="20px 叶根友毛笔行书";  
   ctx.fillStyle = "white";
   var jump = new text("点击跳过",0,0,700,520, "#FFFFFF", "bold 20px FangSong");
   ctx.drawImage(imagehand,800,500,83,37); 
   jump.draw();
   tick();
}

var handle=0;
var sub=0;
var wx=46;
var wy=96;


function ingamewords()
{ 
   var dElem = document.getElementById("canvas");
   var dCtx = dElem.getContext('2d');
   var text1 = "在古代的武林中,有一个正义的教派叫残魂教,林春水是残魂教的教主,他是一个心地善良的人，残魂教在他的带领下，力量渐渐壮大，最终成为中原第一大教.然而在某天深夜里，整个残魂教遭到了一群神秘人的袭击，那群神秘人自称是来自一个叫做“魂”的组织，他们是一股隐藏在武林中的灰色力量，已近存在了数百年，他们隐藏在幕后，维系着武林中的平衡，每当武林中出现了一个强大的组织，并且有可能威胁到他们的存在，他们便会出动所有人，去抹杀掉这些力量，来保持武林中的平衡，换句话说就是来确保“魂”在武林中的地位。这些神秘人的力量比残魂教强大的太多了，虽然残魂教的教员都拼死抵抗，却都惨遭杀戮，教主林春水为了保护儿子林秋水牺牲了自己，最后只有林秋水一个人逃脱了这次杀戮。 ";
   var arr = text1.split('');    
   dCtx.font ="20px 叶根友毛笔行书";  
   dCtx.fillStyle = "white";
    
   if(gameBackGroundShow)
	   {
	   dCtx.fillText(arr[sub],wx,wy);
	   wx += ctx.measureText(arr[sub]).width; 
	   if(sub==46){wx=0;wy=wy+48;}
				else if(sub==70){wx=48;wy=wy+48;}
				else if(sub==115){wx=0;wy=wy+48;}
				else if(sub==163){wx=0;wy=wy+48;}
				else if(sub==211){wx=0;wy=wy+48;}
                else if(sub==240){wx=48;wy=wy+48;}
				else if(sub==285){wx=0;wy=wy+48;}	   				
	   }
	   if(sub<318)
		   {
		   //handle = window.requestAnimationFrame(ingamewords);
		   
		   sub++;
		   }   

	   else if(sub==318)
			{		   
		   window.cancelAnimationFrame(handle); 
		   handle = null;
           gameBackGroundShow=false;
		 
		   //setTimeout(,5000);
		   gamebgShow.pause();
		   setTimeout(moveMap,2000);
		   } 
}

var fps = 15;
var now;
var pauseyyy=false;
var then = Date.now();
var interval = 1000/fps;
var delta;
function tick() {
    handle=window.requestAnimationFrame(tick);
    now = Date.now();  
    delta = now - then;
    if (delta > interval) {
    // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
    then = now - (delta % interval);
    ingamewords(); //Code for Drawing the Frame
	}
}

//整理的函数
var DJZLBg;
function ZhengLi(obj,index){
	//全屏的覆盖层
	  clearArr(shadowShow);
	  var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	  shadowShow.push(shadow);
	if(index==5){
		//道具整理的背景
		 DJZLBg =new picture(0,0,24, 48, 670,550, DJZL);
		 shadowShow.push(DJZLBg);
	}else if(index==6){
		//怒技整理的背景
		 DJZLBg =new picture(0,0,24, 48, 670,550, NJZL);
		 shadowShow.push(DJZLBg);
	}else if(index==7){
		//密技整理的背景
		 DJZLBg =new picture(0,0,24, 48, 670,550, MJZL);
		 shadowShow.push(DJZLBg);
	}else if(index==8){
		 DJZLBg =new picture(0,0,24, 48, 670,550, ZBZL);
		 shadowShow.push(DJZLBg);
	}else if(index==9){
		 DJZLBg =new picture(0,0,24, 48, 670,550, DJSD);
		 shadowShow.push(DJZLBg);
	}else if(index==10){
		 DJZLBg =new picture(0,0,24, 48, 670,550, WQSD);
		 shadowShow.push(DJZLBg);
	}
	//关闭的按钮
	CloseImg = new picture(0,0,DJZLBg.sx + DJZLBg.swidth - rpx - 4, DJZLBg.sy+2 / 3 * rpx, 2 / 3 * rpx, 2 / 3 * rpx, close);
	shadowShow.push(CloseImg);
	//头像
	var hf = new Image();
	hf.src = obj.halfBody;
	var halfBody = new picture(0,0,DJZLBg.sx+60, DJZLBg.sy+80,60, 60, hf);
	shadowShow.push(halfBody);
	//左右箭头
	leftArrow=new picture(0,0,DJZLBg.sx+25, DJZLBg.sy+95,25, 25, zjt);
	rightArrow=new picture(0,0,DJZLBg.sx+277, DJZLBg.sy+95,25, 25, yjt);
	shadowShow.push(leftArrow);
	shadowShow.push(rightArrow);
	if(index!=9&&index!=10){
		//姓名
		var name = new text(obj.name, 0,0,DJZLBg.sx+140 , DJZLBg.sy+100 , "rgb(255,255,255)", "bold 25px KaiTi");
		shadowShow.push(name);
		//等级
		var lv = new text("LV " + obj.level + "  " + obj.EXP + "/" + obj.nextEXP,0,0, DJZLBg.sx +140,DJZLBg.sy+140, "rgb(255,255,255)", "bold 25px KaiTi");
		shadowShow.push(lv);
	}else{
	    //全队金钱
		var name = new text("全队金钱", 0,0,DJZLBg.sx+140 , DJZLBg.sy+100 , "rgb(255,255,255)", "bold 25px KaiTi");
		shadowShow.push(name);
		//金钱
		var lv = new text(teamMoney,0,0, DJZLBg.sx +140,DJZLBg.sy+140, "rgb(255,255,255)", "bold 25px KaiTi");
		shadowShow.push(lv);
	}
if(index==5){
	//仓库中的道具
	var tt=0;
	if(storehouse.additems.length!=0){
	    for (var i = 0; i < storehouse.additems.length; i++) {
		   for (var j = 0; j < itemArrays.length; j++) {
			   if (storehouse.additems[i].id == itemArrays[j].id) {
				     var img1 = new Image();
                     img1.src = itemArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+326,DJZLBg.sy+90+tt*60, rpx, rpx, img1);
					 var s1 = "" +storehouse.additems[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+365, DJZLBg.sy+142+tt*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(itemArrays[j].name,0,0,432,170+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//道具列表
	var t = 0;
    for (var i = 0; i < obj.items.length; i++) {
        for (var j = 0; j < itemArrays.length; j++) {
            if (obj.items[i].id == itemArrays[j].id) {
                if (obj.items[i].num > 0) {
                	 var img = new Image();
                     img.src = itemArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+40,DJZLBg.sy+170+t*60, rpx, rpx, img);
                     var s = "" + obj.items[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+80,DJZLBg.sy+220+t*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(itemArrays[j].name,0,0,DJZLBg.sx+120,DJZLBg.sy+200+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
    }
}else
if(index==6){
	//仓库中的怒技
	var tt=0;
	if(storehouse.addpowers.length!=0){
	    for (var i = 0; i < storehouse.addpowers.length; i++) {
		   for (var j = 0; j < powerArrays.length; j++) {
			   if (storehouse.addpowers[i]== powerArrays[j].id) {
				     var img1 = new Image();
                     img1.src = powerArrays[j].img;
                     var powerImg1 = new picture(0,0,DJZLBg.sx+330,DJZLBg.sy+90+tt*60,50,50, img1);
                     var name1 = new text(powerArrays[j].name,0,0,DJZLBg.sx+424,DJZLBg.sy+125+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(powerImg1);			
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//怒技列表
	var t = 0;
	if(obj.powers.length!=0){
		for (var i = 0; i < obj.powers.length; i++) {
			for (var j = 0; j < powerArrays.length; j++) {
				if (obj.powers[i] == powerArrays[j].id) { 
						 var img = new Image();
						 img.src = powerArrays[j].img;
						 var powerImg = new picture(0,0,DJZLBg.sx+45,DJZLBg.sy+177,50,50, img);
						 var name = new text(powerArrays[j].name,0,0,DJZLBg.sx+124,DJZLBg.sy+210, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
						 var name1 = new text(powerArrays[j].name+":",0,0,DJZLBg.sx+50,DJZLBg.sy+340, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
						 var powerDis=new text(powerArrays[j].discripe,0,0,DJZLBg.sx+50,DJZLBg.sy+380, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
						 shadowShow.push(powerImg);
						 shadowShow.push(name);
						 shadowShow.push(name1);
						 shadowShow.push(powerDis);
						 t++;
				}
			}
		}
	}
}else 
if(index==7){
	//仓库中的密技
	var tt=0;
	if(storehouse.addskills.length!=0){
	    for (var i = 0; i < storehouse.addskills.length; i++) {
		   for (var j = 0; j < skillArrays.length; j++) {
			   if (storehouse.addskills[i]== skillArrays[j].id) {
				     var img1 = new Image();
                     img1.src = skillArrays[j].img;
                     var skillImg1 = new picture(0,0,DJZLBg.sx+331,DJZLBg.sy+90+tt*60, 50,50, img1);
                     var name1 = new text(skillArrays[j].name,0,0,DJZLBg.sx+419,DJZLBg.sy+122+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(skillImg1);			
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//密技列表
	var t = 0;
	for (var i = 0; i < obj.skills.length; i++) {
	    for (var j = 0; j < skillArrays.length; j++) {
	        if (obj.skills[i] == skillArrays[j].id) { 
	            var img = new Image();
	            img.src = skillArrays[j].img;
	            var skillImg = new picture(0,0,DJZLBg.sx+45,DJZLBg.sy+195+t*60, 50, 50, img);
	            var name = new text(skillArrays[j].name,0,0,DJZLBg.sx+126,DJZLBg.sy+225+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
	            shadowShow.push(skillImg);
	            shadowShow.push(name);
	            t++;
	        }
	    }
	}
}else
if(index==8){
	//仓库中的装备
	var tt=0;
	if(storehouse.addequips.length!=0){
	    for (var i = 0; i < storehouse.addequips.length; i++) {
		   for (var j = 0; j < equipArrays.length; j++) {
			   if (storehouse.addequips[i].id == equipArrays[j].id) {
				     var img1 = new Image();
                     img1.src = equipArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+326,DJZLBg.sy+90+tt*60, rpx, rpx, img1);
					 var s1 = "" +storehouse.addequips[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+365, DJZLBg.sy+142+tt*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(equipArrays[j].name,0,0,432,170+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//装备列表
	var t = 0;
    for (var i = 0; i < obj.equips.length; i++) {
        for (var j = 0; j < equipArrays.length; j++) {
            if (obj.equips[i].id == equipArrays[j].id) {
                if (obj.equips[i].num > 0) {
                	 var img = new Image();
                     img.src = equipArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+40,DJZLBg.sy+170+t*60, rpx, rpx, img);
                     var s = "" + obj.equips[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+80,DJZLBg.sy+220+t*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(equipArrays[j].name,0,0,DJZLBg.sx+120,DJZLBg.sy+200+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
    }
}else
if(index==9){
	//商中的道具
	var tt=0;
	if(store.items.length!=0){
	    for (var i = 0; i < store.items.length; i++) {
		   for (var j = 0; j < itemArrays.length; j++) {
			   if (store.items[i].id == itemArrays[j].id) {
				     var img1 = new Image();
                     img1.src = itemArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+326,DJZLBg.sy+90+tt*60, rpx, rpx, img1);
					 var s1 = "" +store.items[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+365, DJZLBg.sy+142+tt*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(itemArrays[j].name,0,0,432,170+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//仓库道具列表
                    
	var t = 0;
    for (var i = 0; i < storehouse.additems.length; i++) {
        for (var j = 0; j < itemArrays.length; j++) {
            if (storehouse.additems[i].id == itemArrays[j].id) {
                if (storehouse.additems[i].num > 0) {
                	 var img = new Image();
                     img.src = itemArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+45,DJZLBg.sy+180+t*60, rpx, rpx, img);
                     var s = "" + storehouse.additems[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+85,DJZLBg.sy+225+t*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(itemArrays[j].name,0,0,DJZLBg.sx+120,DJZLBg.sy+210+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
    }
}else
if(index==10){
    //商店中的武器
	var tt=0;
	if(store.equips.length!=0){
	    for (var i = 0; i < store.equips.length; i++) {
		   for (var j = 0; j < equipArrays.length; j++) {
			   if (store.equips[i].id == equipArrays[j].id) {
				     var img1 = new Image();
                     img1.src = equipArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+326,DJZLBg.sy+90+tt*60, rpx, rpx, img1);
					 var s1 = "" +store.equips[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+365, DJZLBg.sy+142+tt*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(equipArrays[j].name,0,0,432,170+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//仓库中的装备列表                  
	var t = 0;
    for (var i = 0; i < storehouse.addequips.length; i++) {
		console.log("equipArrays.length                   "+equipArrays.length);
        for (var j = 0; j < equipArrays.length; j++) {
		
            if (storehouse.addequips[i].id == equipArrays[j].id) {
                if (storehouse.addequips[i].num > 0) {
                	 var img = new Image();
                     img.src = equipArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+45,DJZLBg.sy+180+t*60, rpx, rpx, img);
                     var s = "" + storehouse.addequips[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+85,DJZLBg.sy+225+t*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(equipArrays[j].name,0,0,DJZLBg.sx+120,DJZLBg.sy+200+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
	}
}
	drawArr(shadowShow);
	bigMapoption=false;
	if(index==5){DJZhengLi=true;}
	else if(index==6){NJZhengLi=true;}
	else if(index==7){MJZhengLi=true;}
	else if(index==8){ZBZhengLi=true;}
	else if(index==9){itemStore=true;}
	else if(index==10){equipStore=true;}
}
//说明框,在数组arr中找到index的道具,which==0说明是道具整理的道具，==1说明是秘技,==2说明是武器商店==3说明是怒技整理的仓库
function getShuoMingText(arr,index,which){ 
	
	if(which==0){//道具
		everything2.push(informaitionSow);//放入说明的背景框
        for (var j = 0; j < itemArrays.length; j++) {
            if (arr[index].id == itemArrays[j].id) {
                if (arr[index].num > 0) {
					 var itemname = new text(itemArrays[j].name+":",0,0,informaitionSow.sx+70,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
		             var itempicture=new Image();
                     itempicture.src=itemArrays[j].img;
					 var itemP=new picture(0,0,informaitionSow.sx+10,informaitionSow.sy+120,rpx,rpx,itempicture);
                     var dis = new text(itemArrays[j].discripe,0,0,informaitionSow.sx+20,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     everything2.push(itemP);
					 everything2.push(itemname);
					 everything2.push(dis);
                }
            }
        }
	}else if(which==1){//秘技
		everything2.push(informaitionSow);//放入说明的背景框
	    for (var j = 0; j < skillArrays.length; j++) {
			if(arr[index]==skillArrays[j].id){
			   var skillname = new text(skillArrays[j].name+":",0,0,informaitionSow.sx+10,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
               var allText=skillArrays[j].discripe;
               if(allText.length>10){
				   var subAllText=allText.substring(10,allText.length);
				   allText=allText.substring(0,10);
			   }
			   var dis = new text(allText,0,0,informaitionSow.sx+10,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
			   var dis1 = new text(subAllText,0,0,informaitionSow.sx+10,informaitionSow.sy+248, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
               everything2.push(skillname);
			   everything2.push(dis);
			   everything2.push(dis1);
			}
		}
	}else if(which==2){//武器
		everything2.push(informaitionSow);//放入说明的背景框
		 for (var j = 0; j < equipArrays.length; j++) {
            if (arr[index].id == equipArrays[j].id) {
                if (arr[index].num > 0) {
					 var itemname = new text(equipArrays[j].name+":",0,0,informaitionSow.sx+70,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
		             var itempicture=new Image();
                     itempicture.src=equipArrays[j].img;
					 var itemP=new picture(0,0,informaitionSow.sx+10,informaitionSow.sy+120,rpx,rpx,itempicture);
                     var dis = new text(equipArrays[j].discripe,0,0,informaitionSow.sx+20,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     everything2.push(itemP);
					 everything2.push(itemname);
					 everything2.push(dis);
                }
            }
        }
	}else if(which==3){//怒技能的说明
	     for (var j = 0; j < powerArrays.length; j++) {
            if (arr[index] == powerArrays[j].id) {
                 var name1 = new text(powerArrays[j].name+":",0,0,DJZLBg.sx+50,DJZLBg.sy+340, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
				 var powerDis=new text(powerArrays[j].discripe,0,0,DJZLBg.sx+50,DJZLBg.sy+380, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
				 everything2.push(name1);
				 everything2.push(powerDis);
            }
        }
	}
}
/*
仓库中的说明
*/
function getShuoMingText1(arr,index,which){ 
		if(which==00){//道具
		everything2.push(informaitionSow1);//放入说明的背景框
        for (var j = 0; j < itemArrays.length; j++) {
            if (arr[index].id == itemArrays[j].id) {
                if (arr[index].num > 0) {
					 var itemname = new text(itemArrays[j].name+":",0,0,informaitionSow.sx+90,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
		             var itempicture=new Image();
                     itempicture.src=itemArrays[j].img;
					 var itemP=new picture(0,0,informaitionSow.sx+30,informaitionSow.sy+120,rpx,rpx,itempicture);
                     var dis = new text(itemArrays[j].discripe,0,0,informaitionSow.sx+40,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     everything2.push(itemP);
					 everything2.push(itemname);
					 everything2.push(dis);
                }
            }
        }
	}else if(which==10){//秘技
		everything2.push(informaitionSow1);//放入说明的背景框
	    for (var j = 0; j < skillArrays.length; j++) {
			if(arr[index]==skillArrays[j].id){
			   var skillname = new text(skillArrays[j].name+":",0,0,informaitionSow.sx+30,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
               var allText=skillArrays[j].discripe;
               if(allText.length>10){
				   var subAllText=allText.substring(10,allText.length);
				   allText=allText.substring(0,10);
			   }
			   var dis = new text(allText,0,0,informaitionSow.sx+25,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
			   var dis1 = new text(subAllText,0,0,informaitionSow.sx+25,informaitionSow.sy+248, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
               everything2.push(skillname);
			   everything2.push(dis);
			   everything2.push(dis1);
			}
		}
	}else if(which==20){//武器
		everything2.push(informaitionSow1);//放入说明的背景框
		 for (var j = 0; j < equipArrays.length; j++) {
            if (arr[index].id == equipArrays[j].id) {
                if (arr[index].num > 0) {
					 var itemname = new text(equipArrays[j].name+":",0,0,informaitionSow.sx+90,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
		             var itempicture=new Image();
                     itempicture.src=equipArrays[j].img;
					 var itemP=new picture(0,0,informaitionSow.sx+30,informaitionSow.sy+120,rpx,rpx,itempicture);
                     var dis = new text(equipArrays[j].discripe,0,0,informaitionSow.sx+40,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     everything2.push(itemP);
					 everything2.push(itemname);
					 everything2.push(dis);
                }
            }
        }
	}else if(which==30){//怒技能的说明
		everything2.push(informaitionSow1);//放入说明的背景框
	     for (var j = 0; j < powerArrays.length; j++) {
            if (arr[index] == powerArrays[j].id) {
                 var name1 = new text(powerArrays[j].name+":",0,0,DJZLBg.sx+565,DJZLBg.sy+230, "rgb(255,255,255)", "bold 18px Microsoft Yahei");
				 var powerDis=new text(powerArrays[j].discripe,0,0,DJZLBg.sx+565,DJZLBg.sy+270, "rgb(255,255,255)", "bold 18px Microsoft Yahei");
				 everything2.push(name1);
				 everything2.push(powerDis);
            }
        }
	}
}
/*
把红色框定住
*/
function DZKuang(copyMrec){
 var dingZhuKuan= new box(0,0,copyMrec.sx,copyMrec.sy,copyMrec.swidth,copyMrec.sheight, "rgb(255,0,0)");everything1.push(dingZhuKuan);
}
/*
把道具的金额定住,which=0,表示在背包这边定住，1表示在仓库这边定住,2表示在武器商店这边定住
*/
function DZGold(index,which){
   if(which==0){
	  var itemMoney=returnItemPrice(storehouse.additems[index].id);
	  var Money=new text(itemMoney,0,0,DJZLBg.sx+87 ,DJZLBg.sy+500, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything1.push(Money);
   }else if(which==1){
      var itemMoney1=returnItemPrice(store.items[index].id);
	  var Money1=new text(itemMoney1,0,0,DJZLBg.sx+400 ,DJZLBg.sy+498, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything1.push(Money1);
   }else if(which==2){//武器商店的右边
      var itemMoney2=returnEquipPrice(store.equips[index].id);
	  var Money2=new text(itemMoney2,0,0,DJZLBg.sx+400 ,DJZLBg.sy+498, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything1.push(Money2);
   }else if(which==3){
      var itemMoney3=returnEquipPrice(storehouse.addequips[index].id);
	  var Money3=new text(itemMoney3,0,0,DJZLBg.sx+87 ,DJZLBg.sy+500, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything1.push(Money3);
   }
}
/*
  确认的滑块
*/

var huaKuai;//滑块
var selsectNum;//表示已经选中多少的字符串
function changeItemNumber(option){
 if(tempp==10||tempp==30){dragNum=1;}
 itemNumChange=true;
 DJZhengLi=false;
 itemStore=false;
 equipStore=false;
 cangKuShow=false;
 var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
 minusButton = new picture(0,0,confirmBg.sx+250,confirmBg.sy+55,16,17, minus);
 addButton = new picture(0,0,confirmBg.sx+250,confirmBg.sy+75,16,17, add);
 var numAll = new round(DJZLBg.sx +250, DJZLBg.sy +240, 4*rpx, 7, "#0080FF");//基准的线条
 selsectNum=new text("您选择了  "+dragNum+"  份该道具",0,0,DJZLBg.sx+250,DJZLBg.sy +210, "#000000", "bold 20px Microsoft Yahei");
 huaKuai=new rectangle(DJZLBg.sx+250,0,DJZLBg.sx+250,DJZLBg.sy +230, 10, 20, "red");
 confirmArray.push(confirmBg);
 confirmArray.push(minusButton);
 confirmArray.push(addButton);
 confirmArray.push(numAll);
 confirmArray.push(selsectNum);
 confirmArray.push(huaKuai);
 ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
 cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
 confirmArray.push(ensure);
 confirmArray.push(cancel);
 drawBigMap();
}
//确定封印
function areUSureFX(){
   sureToFX=true;
   NJZhengLi=false;
   ZBZhengLi=false;
   equipStore=false;
   if(itemOption==4||itemOption==6){ 
       var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
       ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
       cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
       confirmArray.push(confirmBg);
       var dis= new text("确定封印？",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==5||itemOption==7){
	   var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("确定开启？",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==10){
	  var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	  confirmArray.push(shadow);
	  var confirmBg = new picture(0,0,350,210, 6 * rpx, 3 * rpx, confirm);
      ensure = new picture(0,0,confirmBg.sx+30,confirmBg.sy+100 , 2 * rpx, 8 / 15 * rpx, qd);
      cancel = new picture(0,0,ensure.sx + 130,confirmBg.sy+100, 2 * rpx, 8 / 15 * rpx, qx);
      confirmArray.push(confirmBg);
      var dis= new text("确定进入下一关？",0,0,confirmBg.sx+70,confirmBg.sy +60, "#000000", "bold 20px Microsoft Yahei");
      confirmArray.push(dis);
   }else if(itemOption==11){
       var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("确定购买一份？",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==12){
	   var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("确定装备？",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==13){
       var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("确定卸载？",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==14){
       var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("确定贩卖？",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }
   confirmArray.push(ensure);
   confirmArray.push(cancel);
   drawBigMap();

}
//放回仓库的函数
function backToStoreHouse(obj,fromArr,destArr,caSeNum,select,drop){
    for(var i=0;i<select.length;i++){
	  //==1表示第I个格子被选中了
	  if(select[i]==1){
		  //caSeNum==5,表示对道具进行操作
	      if(caSeNum==5){
			  //如果是丢弃
		      if(drop){
                  fromArr[i].num-=dragNum;
				  if(fromArr[i].num!=0){
					  var copyItem1=new item();
					  copyItem1.id=fromArr[i].id;
					  copyItem1.num=fromArr[i].num;
					  //判断中转战是否有这个ID的道具在了
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
				  }
			  }
			  //如果是放回仓库
			  else{
				  //复制该道具的ID和数量
				  var copyItem=new item();
				  copyItem.id=fromArr[i].id;
				  copyItem.num=dragNum;
				  //更新背包里面的数量
				  fromArr[i].num-=dragNum;
				  //判断中转战是否有这个ID的道具在了
				  if(fromArr[i].num!=0){
					  var copyItem1=new item();
				      copyItem1.id=fromArr[i].id;
				      copyItem1.num=fromArr[i].num;
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
				  }
				  //判断是否已经有该ID在仓库内
				  if(isIdOfItemThere(destArr,copyItem.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyItem.id){destArr[j].num+=copyItem.num;}
					 }
				  }else{destArr.push(copyItem);}//把复制的道具放到人物的additems中，这个是道具的仓库
			  }
		  }else if(caSeNum==6){
			   if(drop){
			   }else{
				 //把copypowerID放入仓库
				 var copypowerID=fromArr[i];
			     destArr.push(copypowerID);
			   }
		  }else if(caSeNum==7){
               if(drop){
			   }else{
				 //把copypowerID放入仓库
				 var copyskillID=fromArr[i];
			     destArr.push(copyskillID);
			   }
		  }else if(caSeNum==8){
			     //产生要复制的装备
		         var copyequip=new equipZB();
			     copyequip.id=fromArr[i].id;
                 copyequip.num=fromArr[i].num;
                 fullFillEquip(obj,copyequip.id);
				 //判断在仓库中是否已经有该装备存在了
				 if(isIdOfItemThere(destArr,copyequip.id)){
                     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyequip.id){destArr[j].num+=copyequip.num;}
					 }
			     }else{destArr.push(copyequip);}
		  }else if(caSeNum==9){
			     //把卖了的道具的钱加到全队的钱中
		         var itemMoney=dragNum*returnItemPrice(fromArr[i].id);
				 sellItemAlert(itemMoney);
			     teamMoney+=itemMoney;
                 //复制该道具的ID和数量
				  var copyItem=new item();
				  copyItem.id=fromArr[i].id;
				  copyItem.num=dragNum;
				  //更新仓库里面的数量
				  fromArr[i].num-=dragNum;
				  if(fromArr[i].num!=0){
					  var copyItem1=new item();
					  copyItem1.id=fromArr[i].id;
					  copyItem1.num=fromArr[i].num;
					  //判断中转战是否有这个ID的道具在了
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
				  }
				  //判断是否已经有该ID在商店内
				  if(isIdOfItemThere(destArr,copyItem.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyItem.id){destArr[j].num+=copyItem.num;}
					 }
				  }else{destArr.push(copyItem);}//把复制的道具放到人物的additems中，这个是道具的仓库
		  }else if(caSeNum==10){
			  //把装备的钱加上去
              var equipMoney=returnEquipPrice(fromArr[i].id);
              sellEquipAlert(equipMoney);
			  teamMoney+=equipMoney;
			  //把要卖的装备放入商店
			  var copyequip=new equipZB();
			  copyequip.id=fromArr[i].id;
			  copyequip.num=1;
			  //判断在dextArr中是否有该ID的武器存在
			  if(isIdOfItemThere(destArr,copyequip.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyequip.id){destArr[j].num+=copyequip.num;}
					 }
			  }else{destArr.push(copyequip);}
		  }
	  }else{//说明这个道具没有被选中
	      if(caSeNum==5){
		      //复制这个道具
			  var copyItem;
			  copyItem=new item();
              copyItem.id=fromArr[i].id;
              copyItem.num=fromArr[i].num;
			  //把复制的道具放到人物的additems中，这个是道具的仓库
              if(isIdOfItemThere(storehouse.tempArr,copyItem.id)){
				     for(var j=0;j<storehouse.tempArr.length;j++){
					     if(storehouse.tempArr[j].id==copyItem.id){storehouse.tempArr[j].num+=copyItem.num;}
					 }
			  }else{storehouse.tempArr.push(copyItem);}
		  }else if(caSeNum==7){//没有选中的秘技放入中转站
                var copyskillID=obj.skills[i];
			    storehouse.tempArr.push(copyskillID);
		  }else if(caSeNum==8){
			    //复制未被选中的装备放入中转站
                var copyEquip1=new equipZB();
				copyEquip1.id=fromArr[i].id;
				copyEquip1.num=fromArr[i].num;
			    storehouse.tempArr.push(copyEquip1);
		  }else if(caSeNum==9){
		        //复制这个道具
				var copyItem=new item();
				copyItem.id=fromArr[i].id;
				copyItem.num=fromArr[i].num;
			    //把复制的道具放到人物的additems中，这个是道具的仓库
                if(isIdOfItemThere(storehouse.tempArr,copyItem.id)){
				     for(var j=0;j<storehouse.tempArr.length;j++){
					     if(storehouse.tempArr[j].id==copyItem.id){storehouse.tempArr[j].num+=copyItem.num;}
					 }
			    }else{storehouse.tempArr.push(copyItem);}
		  }else if(caSeNum==10){
		          var copyequip=new equipZB();
				  copyequip.id=fromArr[i].id;
				  copyequip.num=fromArr[i].num;
				  //把仓库中没选中的装备放入中转站
				  if(isIdOfItemThere(storehouse.tempArr,copyequip.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip.id){storehouse.tempArr[j].num+=copyequip.num;}
						 }
				  }else{storehouse.tempArr.push(copyequip);}
		  }
	  }
	  if(caSeNum==5){if(i==obj.items.length-1){break;}}
	  else if(caSeNum==6){if(i==obj.powers.length-1){break;}}
	  else if(caSeNum==7){if(i==obj.skills.length-1){break;}}
	  else if(caSeNum==8){if(i==obj.equips.length-1){break;}}
	  else if(caSeNum==9){if(i==storehouse.additems.length-1){break;}}
	  else if(caSeNum==10){if(i==storehouse.addequips.length-1){break;}}
	}
	//把中转战的道具放回人物的背包
	if(caSeNum==5){
		clearArr(obj.items);
		obj.items=[].concat(storehouse.tempArr);
	}else if(caSeNum==6){
	    clearArr(obj.powers);
	}else if(caSeNum==7){
		clearArr(obj.skills);
		obj.skills=[].concat(storehouse.tempArr);
	}else if(caSeNum==8){
        clearArr(obj.equips);
		obj.equips=[].concat(storehouse.tempArr);
	}else if(caSeNum==9){
	    clearArr(storehouse.additems);
		storehouse.additems=[].concat(storehouse.tempArr);
	}else if(caSeNum==10){
	    clearArr(storehouse.addequips);
		storehouse.addequips=[].concat(storehouse.tempArr);
	}
	dingzhukuangLeft=[0,0,0,0,0];
	dragNum=0;
	clearArr(everything1);
	itemNumChange=false;
	sureToFX=false;
	clearArr(confirmArray);
	clearArr(storehouse.tempArr);
    ZhengLi(obj,caSeNum);
}

//实现装备的功能,num=0说明是装备，num=1说明是卸载
function fullFillEquip(obj,id,num){
    for (var j = 0; j < equipArrays.length; j++) {
	     if(id==equipArrays[j].id){
			 //借skillVar,fl来用下
		    if(num){skillVar=equipArrays[j].equipVar;}
			else{skillVar=-equipArrays[j].equipVar;}
			fl=equipArrays[j].func;
			eval(fl + '(obj,skillVar)');
		 }
	}
}
//这里放回仓库的函数和放回背包的函数是可以合并的，但我没这样做，因为怕以后自己看不来
//放回背包的函数
function backToBag(obj,fromArr,destArr,caSeNum,select,drop){
    for(var i=0;i<select.length;i++){
	  //==1表示第I个格子被选中了
	  if(select[i]==1){
	      if(caSeNum==5){
			  //如果是丢弃
		      if(drop){
				  console.log(fromArr[i].num+"   1 ");
                  fromArr[i].num-=dragNum;console.log(dragNum+"aa"+fromArr[i].num+"   2 ");
				  if(fromArr[i].num!=0){
					  var copyItem1=new item();
					  copyItem1.id=fromArr[i].id;
					  copyItem1.num=fromArr[i].num;
					  //判断中转战是否有这个ID的道具在了
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
					  }
			  }
			  //如果是放回背包
			  else{
				  //复制该道具的ID和数量
				  var copyItem=new item();
				  copyItem.id=fromArr[i].id;
				  copyItem.num=dragNum;
				  //更新背包里面的数量
				  fromArr[i].num-=dragNum;
				  var copyItem1=new item();
				  copyItem1.id=fromArr[i].id;
				  copyItem1.num=fromArr[i].num;
				  if(fromArr[i].num!=0){
					  //判断中转战是否有这个ID的道具在了
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
				  }
				  //判断是否已经有该ID在背包内
				  if(isIdOfItemThere(destArr,copyItem.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyItem.id){obj.items[j].num+=copyItem.num;}
					 }
				  }else{destArr.push(copyItem);}//把复制的道具放到人物的additems中，这个是道具的仓库
			  }
		  }else if(caSeNum==6){
			  if(drop){
			   }else{
				 //把copypowerID放入仓库
				 var copypowerID=fromArr[i];
			     destArr.push(copypowerID);
			   }
		  }else if(caSeNum==7){
			     var copyskillID=fromArr[i];
			     destArr.push(copyskillID);
		  }else if(caSeNum==8){
			     //产生要复制的装备
		         var copyequip=new equipZB();
			     copyequip.id=fromArr[i].id;
                 copyequip.num=1;
				 //得到该装备的类型
			     for (var j = 0; j < equipArrays.length; j++) {  
                    if(copyequip.id==equipArrays[j].id){
					   copyequip.type=equipArrays[j].type;
					}
				 }
				 //手持的数量
				 var equipHandNum=0;
				 //饰品的数量
				 var equipAdornNum=0;
				 //得到手持的装备和饰品装备的数量
                 for (var m = 0; m < obj.equips.length; m++) {
                      for (var j = 0; j < equipArrays.length; j++) {
                         if (obj.equips[m].id == equipArrays[j].id) {
							 //说明是手持的
                             if(equipArrays[j].type==0){equipHandNum++;}
							 else {equipAdornNum++;}
						 }
					  }
				 }
				 //如果该装备是手持的,并且已经装备的数量是小于2的
				 if(copyequip.type==0&&equipHandNum<2){
				     //判断背包内是否已经装备了该准备
				     if(isIdOfItemThere(destArr,copyequip.id)){
				        alert("已经装备该装备");
			         }else{destArr.push(copyequip); fromArr[i].num-=1;fullFillEquip(obj,copyequip.id,true);}
				 }else if(copyequip.type==1&&equipAdornNum==0){//如果是该装备是饰品并且还没有装备过饰品
				     if(isIdOfItemThere(destArr,copyequip.id)){
				        alert("已经装备该装备");
			         }else{destArr.push(copyequip); fromArr[i].num-=1;fullFillEquip(obj,copyequip.id,true);}
				 }
				 //把商店中剩下的放入中转站
			    
				 if(fromArr[i].num!=0){
				    var copyequip1=new equipZB();
				    copyequip1.id=fromArr[i].id;
				    copyequip1.num=fromArr[i].num;
					//如果在商店的中转站中已经有该装备了
				    if(isIdOfItemThere(storehouse.tempArr,copyequip1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip1.id){storehouse.tempArr[j].num+=copyequip1.num;}
						 }
				    }else{storehouse.tempArr.push(copyequip1);}
			    }
		  }else if(caSeNum==9){
			  //扣除购买的道具
              var itemMoney=dragNum*returnItemPrice(fromArr[i].id);
			  teamMoney-=itemMoney;
			  //把要买的道具放入背包
			  var copyItem=new item();
			  copyItem.id=fromArr[i].id;
			  copyItem.num=dragNum;
			  if(isIdOfItemThere(destArr,copyItem.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyItem.id){destArr[j].num+=copyItem.num;}
					 }
			  }else{destArr.push(copyItem);}
			  //把商店中剩下的放入中转站
			  fromArr[i].num-=dragNum;
			  if(fromArr[i].num!=0){
				  var copyItem1=new item();
				  copyItem1.id=fromArr[i].id;
				  copyItem1.num=fromArr[i].num;
				  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
				  }else{storehouse.tempArr.push(copyItem1);}
			  }
		  }else if(caSeNum==10){
		      //扣除购买的武器
              var equipMoney=dragNum*returnEquipPrice(fromArr[i].id);
			  teamMoney-=equipMoney;
			  //把要买的装备放入仓库
			  var copyequip=new equipZB();
			  copyequip.id=fromArr[i].id;
			  copyequip.num=dragNum;
			  //判断在dextArr中是否有该ID的武器存在
			  if(isIdOfItemThere(destArr,copyequip.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyequip.id){destArr[j].num+=copyequip.num;}
					 }
			  }else{destArr.push(copyequip);}
			  //把商店中剩下的放入中转站
			  fromArr[i].num-=dragNum;
			  if(fromArr[i].num!=0){
				  var copyequip1=new equipZB();
				  copyequip1.id=fromArr[i].id;
				  copyequip1.num=fromArr[i].num;
				  if(isIdOfItemThere(storehouse.tempArr,copyequip1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip1.id){storehouse.tempArr[j].num+=copyequip1.num;}
						 }
				  }else{storehouse.tempArr.push(copyequip1);}
			  }
		  }
	  }else{//说明这个道具没有被选中
	      if(caSeNum==5){
		      //复制这个道具
			  var copyItem=new item();
              copyItem.id=fromArr[i].id;
              copyItem.num=fromArr[i].num;
			  //把复制的道具放到人物的additems中，这个是道具的仓库
              if(isIdOfItemThere(storehouse.tempArr,copyItem.id)){
				     for(var j=0;j<storehouse.tempArr.length;j++){
					     if(storehouse.tempArr[j].id==copyItem.id){storehouse.tempArr[j].num+=copyItem.num;}
					 }
			  }else{storehouse.tempArr.push(copyItem);}
		  }else if(caSeNum==6){
		        var copypowerID=fromArr[i];
			    storehouse.tempArr.push(copypowerID);
		  }else if(caSeNum==7){
			    var copyskillID=obj.skills[i];
			    storehouse.tempArr.push(copyskillID);
		  }else if(caSeNum==8){
			     var copyequip=new equipZB();
				  copyequip.id=fromArr[i].id;
				  copyequip.num=fromArr[i].num;
				  //把复制的道具放到人物的additems中，这个是道具的仓库
				  if(isIdOfItemThere(storehouse.tempArr,copyequip.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip.id){storehouse.tempArr[j].num+=copyequip.num;}
						 }
				  }else{storehouse.tempArr.push(copyequip);}
		  }else if(caSeNum==9){
			      var copyItem=new item();
				  copyItem.id=fromArr[i].id;
				  copyItem.num=fromArr[i].num;
				  //把复制的道具放到人物的additems中，这个是道具的仓库
				  if(isIdOfItemThere(storehouse.tempArr,copyItem.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem.id){storehouse.tempArr[j].num+=copyItem.num;}
						 }
				  }else{storehouse.tempArr.push(copyItem);}
		  }else if(caSeNum==10){
			      var copyequip=new equipZB();
				  copyequip.id=fromArr[i].id;
				  copyequip.num=fromArr[i].num;
				  //把复制的武器放到人物的addequips中，这个是准备的仓库
				  if(isIdOfItemThere(storehouse.tempArr,copyequip.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip.id){storehouse.tempArr[j].num+=copyequip.num;}
						 }
				  }else{storehouse.tempArr.push(copyequip);}
		  }
	  }
	  if(caSeNum==5){
		  if((i==storehouse.additems.length-1)&&tempp==00){break;}
		  else if((i==storehouse.addpowers.length-1)&&tempp==30){break;}
		  else if((i==storehouse.addequips.length-1)&&tempp==20){break;}
		  else if((i==storehouse.addskills.length-1)&&tempp==10){break;}
		  else if(i==storehouse.additems.length-1){break;}
		  }
	  else if(caSeNum==6){if(i==storehouse.addpowers.length-1){break;}}
	  else if(caSeNum==7){if(i==storehouse.addskills.length-1){break;}}
      else if(caSeNum==8){if(i==storehouse.addequips.length-1){break;}}
	  else if(caSeNum==9){if(i==store.items.length-1){break;}}
	  else if(caSeNum==10){if(i==store.equips.length-1){break;}}
	}
    //把中转战的道具放回人物的
	if(caSeNum==5){
		if(tempp==00){clearArr(storehouse.additems);
		storehouse.additems=[].concat(storehouse.tempArr);}
		else if(tempp==20){clearArr(storehouse.addequips);
		storehouse.addequips=[].concat(storehouse.tempArr);}
		else if(tempp==10){clearArr(storehouse.addskills);
		storehouse.addskills=[].concat(storehouse.tempArr);}
		else if(tempp==30){clearArr(storehouse.addpowers);
		storehouse.addpowers=[].concat(storehouse.tempArr);}
		else{clearArr(storehouse.additems);
		storehouse.additems=[].concat(storehouse.tempArr);}
	}else if(caSeNum==6){
	    clearArr(storehouse.addpowers);
		storehouse.addpowers=[].concat(storehouse.tempArr);
	}else if(caSeNum==7){
		clearArr(storehouse.addskills);
		storehouse.addskills=[].concat(storehouse.tempArr);
	}else if(caSeNum==8){
		clearArr(storehouse.addequips);
		storehouse.addequips=[].concat(storehouse.tempArr);
	}else if(caSeNum==9){
	    clearArr(store.items);
		store.items=[].concat(storehouse.tempArr);
	}else if(caSeNum==10){
	    clearArr(store.equips);
		store.equips=[].concat(storehouse.tempArr);
	}
	dingzhukuangRight=[0,0,0,0,0,0];
	dragNum=0;
	clearArr(everything1);
	itemNumChange=false;
	sureToFX=false;
	clearArr(confirmArray);
	clearArr(storehouse.tempArr);
	if(caSeNum==5&&(tempp==00||tempp==10||tempp==20||tempp==30)){showCangKU(fromArr,tempp);}
	else {ZhengLi(obj,caSeNum);}
	
}
//仓库的函数
var CKselect;//仓库的
function showCangKU(obj,tempp){

	   clearArr(shadowShow);
	   //全屏的覆盖层
	   var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	   shadowShow.push(shadow);
	   //背景图片
	   DJZLBg =new picture(0,0,144, 48,561,495, CKZL);
	   shadowShow.push(DJZLBg);
	   //选中的图片
	   CKselect=new picture(0,0,173,64 ,116,45, CKSelect);
	   shadowShow.push(CKselect);
	   //4个标题
	   var title=new picture(0,0,DJZLBg.sx+40,DJZLBg.sy+20 ,469,24, titleOfCK);
	   shadowShow.push(title);
	   CloseImg = new picture(0,0,DJZLBg.sx + DJZLBg.swidth-28, DJZLBg.sy+2 / 3 * rpx-30, 25, 25, close);
	   shadowShow.push(CloseImg); 


if(tempp==20){
//	cangKuClick(x,y,storehouse.addequips,tempp);
	   	var tt=0;
	if(storehouse.addequips.length!=0){
	    for (var i = 0; i < storehouse.addequips.length; i++) {
		   for (var j = 0; j < equipArrays.length; j++) {
			   if (storehouse.addequips[i].id == equipArrays[j].id) {
				     var img1 = new Image();
                     img1.src = equipArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+34,DJZLBg.sy+78+tt*57, rpx, rpx, img1);
					 var s1 = "" +storehouse.addequips[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+78, DJZLBg.sy+119+tt*57, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(equipArrays[j].name,0,0,DJZLBg.sx+113,DJZLBg.sy+108+tt*57, "rgb(255,255,255)", "bold 20px Microsoft Yahei");           
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	CKselect.sx=173;drawBigMap();
}
if(tempp==00){
//	cangKuClick(x,y,storehouse.additems ,tempp);
		var t = 0;
    for (var i = 0; i < storehouse.additems.length; i++) {
        for (var j = 0; j < itemArrays.length; j++) {
            if (storehouse.additems[i].id == itemArrays[j].id) {
                if (storehouse.additems[i].num > 0) {
                	 var img = new Image();
                     img.src = itemArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+34,DJZLBg.sy+78+t*57, rpx, rpx, img);
                     var s = "" + storehouse.additems[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+78,DJZLBg.sy+119+t*57, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(itemArrays[j].name,0,0,DJZLBg.sx+113,DJZLBg.sy+108+t*57, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
    }
	CKselect.sx=302;drawBigMap();
}

if(tempp==10){
//	cangKuClick(x,y,obj,tempp);
              var tt=0;
	if(storehouse.addskills.length!=0){
	    for (var i = 0; i < storehouse.addskills.length; i++) {
		   for (var j = 0; j < skillArrays.length; j++) {
			   if (storehouse.addskills[i]== skillArrays[j].id) {
				     var img1 = new Image();
                     img1.src = skillArrays[j].img;
                     var skillImg1 = new picture(0,0,DJZLBg.sx+34,DJZLBg.sy+78+tt*57, 50,50, img1);
                     var name1 = new text(skillArrays[j].name,0,0,DJZLBg.sx+113,DJZLBg.sy+108+tt*57, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(skillImg1);			
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	CKselect.sx=430;drawBigMap();
}

if(tempp==30){
//	cangKuClick(x,y,obj,tempp);
	var tt=0;
	if(storehouse.addpowers.length!=0){
	    for (var i = 0; i < storehouse.addpowers.length; i++) {
		   for (var j = 0; j < powerArrays.length; j++) {
			   if (storehouse.addpowers[i]== powerArrays[j].id) {
				     var img1 = new Image();
                     img1.src = powerArrays[j].img;
                     var powerImg1 = new picture(0,0,DJZLBg.sx+34,DJZLBg.sy+78+tt*57,50,50, img1);
                     var name1 = new text(powerArrays[j].name,0,0,DJZLBg.sx+113,DJZLBg.sy+108+tt*57, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(powerImg1);			
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	CKselect.sx=559;drawBigMap();
}
	   drawArr(shadowShow);
	   cangKuShow=true;
	   bigMapoption=false;
}
//点击队员弹出来的信息,temp用来记录是点击了秘技0，怒技1，装备2
function teamMember(obj,temp){
   clearArr(shadowShow);
   //全屏的覆盖层
   var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
   shadowShow.push(shadow);
   //背景图片
   DJZLBg =new picture(0,0,48, 48, 670,550, DYBJ);
   shadowShow.push(DJZLBg);
   shadowShow.push(DJZLBg);
   //右上角的XX
   CloseImg = new picture(0,0,DJZLBg.sx + DJZLBg.swidth-30, DJZLBg.sy+2 / 3 * rpx-20, 2 / 3 * rpx, 2 / 3 * rpx, close);
   shadowShow.push(CloseImg);
   //人物的头像
   var hf = new Image();
   hf.src = obj.halfBody;
   var halfBody = new picture(0,0,DJZLBg.sx+80, DJZLBg.sy+50,200, 200, hf);
   shadowShow.push(halfBody);
   //左右的箭头
   leftArrow = new picture(0,0,DJZLBg.sx + 1 / 2 * rpx, DJZLBg.sy + 3 * rpx - 10, 38, 30, zjt);
   rightArrow = new picture(0,0,DJZLBg.sx + 11 / 2 * rpx + 18, DJZLBg.sy + 3 * rpx - 10, 38, 30, yjt);
   shadowShow.push(leftArrow);
   shadowShow.push(rightArrow);
   //姓名
   var name = new text(obj.name, 0,0,DJZLBg.sx+428 , DJZLBg.sy+80 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(name);
   //等级
   var lv = new text(obj.level + "  " + obj.EXP + "/" + obj.nextEXP,0,0, DJZLBg.sx +428,DJZLBg.sy+130, "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(lv);
   //移动力
   var MOV=new text(obj.movement,0,0, DJZLBg.sx+155 , DJZLBg.sy+290 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(MOV);
   //速度
   var speed=new text(obj.speed,0,0,DJZLBg.sx+155 , DJZLBg.sy+330 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(speed);
   //防御力
   var DEF=new text(obj.DEF,0,0, DJZLBg.sx+155 , DJZLBg.sy+370 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(DEF);
   //HP
   var HP=new text(obj.HP,0,0, DJZLBg.sx+383, DJZLBg.sy+178 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(HP);
   //MP
   var MP=new text(obj.MP,0,0, DJZLBg.sx+545, DJZLBg.sy+178 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(MP);
   //SP
   var SP=new text(obj.SP,0,0, DJZLBg.sx+383, DJZLBg.sy+223 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(SP);
   //POW
   var POW=new text(obj.pow,0,0, DJZLBg.sx+545, DJZLBg.sy+223 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(POW);
   //ATK
   var ATK=new text(obj.ATK,0,0, DJZLBg.sx+500 , DJZLBg.sy+290 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(ATK);
   //攻击范围
   var range=new text(obj.range,0,0, DJZLBg.sx+500, DJZLBg.sy+330 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(range);
   //怒技，秘技，装备的图片
   if(temp==0){
	   skill = new picture(0,0,DJZLBg.sx + 1 / 2 * rpx - 3, DJZLBg.sy + 394, 110, 30, mj2);
	   power = new picture(0,0,skill.sx + skill.swidth - 2, DJZLBg.sy +394, 110, 30, nj1);
	   equip = new picture(0,0,power.sx + power.swidth - 2, DJZLBg.sy + 394, 110, 30, zb1);
   }
   else if(temp==1){
	   skill = new picture(0,0,DJZLBg.sx + 1 / 2 * rpx - 3, DJZLBg.sy + 394, 110, 30, mj1);
	   power = new picture(0,0,skill.sx + skill.swidth - 2, DJZLBg.sy +394, 110, 30, nj2);
	   equip = new picture(0,0,power.sx + power.swidth - 2, DJZLBg.sy + 394, 110, 30, zb1);
   }else if(temp==2){
	   skill = new picture(0,0,DJZLBg.sx + 1 / 2 * rpx - 3, DJZLBg.sy + 394, 110, 30, mj1);
	   power = new picture(0,0,skill.sx + skill.swidth - 2, DJZLBg.sy +394, 110, 30, nj1);
	   equip = new picture(0,0,power.sx + power.swidth - 2, DJZLBg.sy + 394, 110, 30, zb2);
   }
   shadowShow.push(skill);
   shadowShow.push(power);
   shadowShow.push(equip);
 if(temp==0){
   for (var i = 0; i < 4; i++) {
       for (var j = 0; j < skillArrays.length; j++) {
           if (obj.skills[i] == skillArrays[j].id) {
                var img = new Image();
                img.src = skillArrays[j].img;
                var skillImg = new picture(0,0,skill.sx, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(skillArrays[j].name, 0,0,skillImg.sx + 2 / 3 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var mp = new text("MP:" + skillArrays[j].mp, 0,0,skillImg.sx + 3 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(0,0,255)", "bold 20px cursive");
                var suc = new text("成功率:" + skillArrays[j].success + "%",0,0, skillImg.sx + 9 / 2 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(255,0,0)", "bold 20px FangSong");
                var dis = new text("说明:" + skillArrays[j].discripe,0,0, skillImg.sx + 7 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
                shadowShow.push(skillImg);
                shadowShow.push(name);
                shadowShow.push(mp);
                shadowShow.push(suc);
                shadowShow.push(dis);
            }
        }
   }
 }else if(temp==1){
     for (var i = 0; i < obj.powers.length; i++) {
        for (var j = 0; j < powerArrays.length; j++) {
            if (obj.powers[i] == powerArrays[j].id) {
                var img = new Image();
                img.src = powerArrays[j].img;
                var powerImg = new picture(0,0,skill.sx, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(powerArrays[j].name,0,0, powerImg.sx + 2 / 3 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var p = new text("POW:" + powerArrays[j].p,0,0, powerImg.sx + 3 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(0,0,255)", "bold 20px cursive");
                var suc = new text("成功率:" + powerArrays[j].success + "%",0,0, powerImg.sx + 9 / 2 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(255,0,0)", "bold 20px FangSong");
                var dis = new text("说明:" + powerArrays[j].discripe,0,0, powerImg.sx + 7 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
                shadowShow.push(powerImg);
                shadowShow.push(name);
                shadowShow.push(p);
                shadowShow.push(suc);
                shadowShow.push(dis);
            }
        }
     }
 }else if(temp==2){
	 var tempp=false;
	for (var i = 0; i < obj.equips.length; i++) {
        for (var j = 0; j < equipArrays.length; j++) {
            if (obj.equips[i].id == equipArrays[j].id) {
                var img = new Image();
                img.src = equipArrays[j].img;
                var equipImg = new picture(0,0,skill.sx+100, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(equipArrays[j].name,0,0, equipImg.sx + 2 / 3 * rpx, equipImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var dis = new text("说明:" + equipArrays[j].discripe,0,0, name.sx +100, equipImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
				if(equipArrays[j].type==1){ var shipin = new text("饰品装备:",0,0, skill.sx, equipImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi"); shadowShow.push(shipin);}
                else if(equipArrays[j].type==0){
					if(!tempp){tempp=true;var lefthand = new text("左手装备:",0,0, skill.sx, equipImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi"); shadowShow.push(lefthand);}
					else{var righthand = new text("右手装备:",0,0, skill.sx, equipImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi"); shadowShow.push(righthand);}
				}
				shadowShow.push(equipImg);
                shadowShow.push(name);
                shadowShow.push(dis);
            }
        }
     }
	  
 }
   drawArr(shadowShow);
   bigMapoption=false;
   DuiYuan=true;
}
//鼠标移动到相应的道具的时候，显示该道具的金额which==0表示是背包内的道具操作,which==1表示是商店内的道具操作，which==2表示是商店内的准备操作
function showItemGold(index,which){
	if(which==0){
	  var itemMoney=returnItemPrice(storehouse.additems[index].id);
	  var Money=new text(itemMoney,0,0,DJZLBg.sx+87 ,DJZLBg.sy+500, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything2.push(Money);
	}else if(which==1){
	  var itemMoney1=returnItemPrice(store.items[index].id);
	  var Money1=new text(itemMoney1,0,0,DJZLBg.sx+400 ,DJZLBg.sy+498, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything2.push(Money1);
	}else if(which==2){
	  var itemMoney2=returnEquipPrice(store.equips[index].id);
	  var Money2=new text(itemMoney2,0,0,DJZLBg.sx+400 ,DJZLBg.sy+498, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything2.push(Money2);
	}else if(which==3){
	  var itemMoney4=returnEquipPrice(storehouse.addequips[index].id);
	  var Money4=new text(itemMoney4,0,0,DJZLBg.sx+87 ,DJZLBg.sy+500, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything2.push(Money4);
	}
}
//返回该道具的金钱
function returnItemPrice(id){
  for(var i=0;i<itemArrays.length;i++){
     if(id==itemArrays[i].id){return itemArrays[i].gold;}
  }
  return false;
}
//返回该装备的金钱
function returnEquipPrice(id){
  for(var i=0;i<equipArrays.length;i++){
     if(id==equipArrays[i].id){return equipArrays[i].gold;}
  }
  return false;
}
//进入下一关
function nextLevel(){
  clearAll();
//  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  shumei=false;
  sureToFX=false;
  nextloading=true;
//  recoverSpirit();
  mapLevel++;
  count=1;
  handleNextStataChange();
  drawAll();
  drawAll();
  nextProgress();
  
}
//在进入下一关之前的提示，告诉玩家过关了，获得的奖品有哪些
function nextGuanKaOpen(){
     clearArray(everything2);
     clearArray(everything1);
     clearArray(everything);
     clearArray(info);
	 nextloading=true;
	 IntoGuanKa=true;
	 //覆盖层
	 var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	 shadowShow.push(shadow);
	 //背景
	 var nextGuanKaBG = new picture(0,0,6 * rpx, 4 * rpx, 8 * rpx, 5 * rpx, infoShowBg);
	 shadowShow.push(nextGuanKaBG);
	 //标题
	 var title = new text("过关奖励", 0,0,nextGuanKaBG.sx +110, nextGuanKaBG.sy + 2 / 3 * rpx, "#000000", "bold 30px Microsoft Yahei");
	 shadowShow.push(title);
	 //确定按钮
	 ensure = new picture(0,0,nextGuanKaBG.sx +130 , nextGuanKaBG.sy +200, 2 * rpx, 8 / 15 * rpx, qd);
	 shadowShow.push(ensure);
	 recoverSpirit();
}
//显示第几关和地图名称
function showMapName(){
	canvas.removeEventListener('click', cCheck, false);
    var roundString = "第 " + mapLevel + " 关   "+mapName;
	//drawAll();
	//drawAll();
//	drawAll();
    var roundRectangle = new rectangle(0, 4 * rpx,0, 4 * rpx, canvasWidth, 4 * rpx, "rgba(0,0,0,0.8)");
    var roundText = new text(roundString, (canvasWidth / 2) - 3 * rpx, 7* rpx - rpx / 2,(canvasWidth / 2) - 3 * rpx, 7* rpx - rpx / 2,"rgb(255,255,255)", "50px 叶根友毛笔行书");
    everything.push(roundRectangle);
    everything.push(roundText);
//	drawAll();
	setTimeout(function(){
		                  clearArray(everything);	  
						  if(mapLevel==1){
							  setTimeout(function(){
								  dialogShowFlag=true;
								  setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1000);
								  dialogShow();}
							  ,300);
							  }
						  else{
						  roundShow();
						  setTimeout(function(){canvas.addEventListener('click', cCheck, false);},3500);
						  }
						   //drawAll();}
						  clearArray(everything2);}
			    ,2000);
	
}
