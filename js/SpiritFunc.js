/*
回春
*/
function SRecoverHP(){
	recoverHP.play();
    console.log("回春调用开始");
    var thp = rolesArray[rolesIndex].HP;
    rolesArray[rolesIndex].HP +=spiritVar; //要加血人物的原来的血量+精神力要加的血量
    if (rolesArray[rolesIndex].HP > rolesArray[rolesIndex].fullHP) {
        rolesArray[rolesIndex].HP = rolesArray[rolesIndex].fullHP;
    }
    thp = rolesArray[rolesIndex].HP - thp;//用来几率实际上加了多少的血量
    var s = "HP+" + thp;
//    var t = new text(s, rolesArray[rolesIndex].sx, rolesArray[rolesIndex].sy + 1 / 2 * rpx, "rgb(0,255,0)", "bold 30px FangSong");
    var t = new text(s, rolesArray[rolesIndex].mapX, rolesArray[rolesIndex].mapY + 1 / 2 * rpx, "rgb(0,255,0)", "bold 30px FangSong"); 
    var hx = new Image();
    hx.src = effect;
//   var RecoverShow = new pic(rolesArray[rolesIndex].sx - rpx, rolesArray[rolesIndex].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, hx);
 //   var RecoverShow = new pic(rolesArray[rolesIndex].sx - rpx, rolesArray[rolesIndex].sy - rpx,rolesArray[rolesIndex].sx - rpx, rolesArray[rolesIndex].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, hx);
     var RecoverShow = new pic(rolesArray[rolesIndex].mapX - rpx,rolesArray[rolesIndex].mapY - rpx,rolesArray[rolesIndex].sx - rpx, rolesArray[rolesIndex].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, hx);
    attackShow.push(t);
    attackShow.push(RecoverShow);
    t1 = setInterval(function() {
     //   t.sy--;
        t.mapY--;
        if (RecoverShow.dx < 4900) {
            RecoverShow.dx += 350;
        } else {
            RecoverShow.dx = 0;
        }
        //drawAll();
        console.log("t.mapY:"+t.mapY+"rolesArray[rolesIndex].mapY:"+rolesArray[rolesIndex].mapY);
        if(t.mapY == rolesArray[rolesIndex].mapY){
           clearInterval(t1);
            clearArray(attackShow);
            spiritHuiChun=false;
        }
    /*    if (t.sy == rolesArray[rolesIndex].sy) {
            clearInterval(t1);
            clearArray(attackShow);
            spiritHuiChun=false;
        }*/
    },
    75);

}
/*
我方回合结束时，恢复各种用过的精神力
*/
function recoverSpirit(){
	   //恢复行走开关
	   can_walk();
	   //恢复用了的精神力
	   for (var i = 0; i < rolesArray.length; i++) {
		                if(nextloading && rolesArray[i].not_sure_use_ShenXing==1){//用来处理在神行状态下过关的情况
							rolesArray[i].not_sure_use_ShenXing=0;
							rolesArray[i].movement-=6;
							var js=new spirit();
								 js.id=5;
								 js.num=1;
						         rolesArray[i].spirits.splice(4,0,js );	
						    }
					    //加回绝杀这个精神力
						if(rolesArray[i].spiritJueSha==1){
							rolesArray[i].spiritJueSha=0;
							var js=new spirit();
							js.id=2;
							js.num=1;
							rolesArray[i].spirits.splice(1,0,js );
						}
						//加回神行这个精神力	
						if(rolesArray[i].has_use_ShenXing==1){//如果神行的开关打开了
						    rolesArray[i].not_sure_use_ShenXing=0;
						    rolesArray[i].has_use_ShenXing=0;
							 console.log("插回神行到数组3");
						     rolesArray[i].spiritShenXing=0;
						     var js=new spirit();
								 js.id=5;
								 js.num=1;
						         rolesArray[i].spirits.splice(4,0,js );										
				        }
						//加回神杀这个精神力	
						if(rolesArray[i].spiritSheSha==1){
							rolesArray[i].spiritSheSha=0;
							var js=new spirit();
							js.id=3;
							js.num=1;
							rolesArray[i].spirits.splice(2,0,js );								
				        }
						//加回闪避这个精神力
						if(rolesArray[i].spiritShanBi==1){
							rolesArray[i].spiritShanBi=0;
							var js=new spirit();
							js.id=4;
							js.num=1;
							rolesArray[i].spirits.splice(3,0,js );
						 }				
				}
}
 

//判断本回合是否走过了，走过了，回合结束时回复为0和使用道具开关
function can_walk(){
     for (var i = 0; i < rolesArray.length; i++) {
	     if(rolesArray[i].walk==1){rolesArray[i].walk=0;}
		 if(rolesArray[i].has_walk==1){rolesArray[i].has_walk=0;}
		 if(rolesArray[i].has_use_Item==1){rolesArray[i].has_use_Item=0;}
	 }
}
//恢复行走开关
function recover_walk(){
  	if(rolesArray[rolesIndex].walk==1){rolesArray[rolesIndex].has_walk=1;}
}
//确实使用了神行
function doUseSX(){
	if(rolesArray[rolesIndex].has_use_ShenXing==0){
		if(rolesArray[rolesIndex].not_sure_use_ShenXing==1)
		{ rolesArray[rolesIndex].has_use_ShenXing=1; 
		  rolesArray[rolesIndex].movement-=6;
		  rolesArray[rolesIndex].spiritShenXing=0;
		  console.log(rolesArray[rolesIndex].name+"确实使用了神行，移动力-6");
		}
	}
	/*
	if(rolesArray[rolesIndex].spiritShenXing==1){if(nextloading){rolesArray[i].movement-=6;}
	     rolesArray[rolesIndex].spiritShenXing=0;
		 console.log(rolesArray[rolesIndex].name+"没有发动神行，点击待机");
		 rolesArray[rolesIndex].movement-=6;
		 var js=new spirit();
		 js.id=5;
		 js.num=1;
		 rolesArray[rolesIndex].spirits.splice(4,0,js );										
	}
	*/
}

//骑士之剑
function equipaddATK(obj,equipVar){
  obj.ATK+=equipVar;
}
//骑士之盾
function equipaddDEF(obj,equipVar){
  obj.DEF+=equipVar;
}
//天空圣水
function equipaddHP(obj,equipVar){
  obj.HP+=equipVar;
}