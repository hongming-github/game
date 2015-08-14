
//道具触发函数
function IRecoverHP() {
	recoverHP.play();
    var thp = rolesArray[rolesIndex].HP;
    rolesArray[rolesIndex].HP +=itemVar;
    if (rolesArray[rolesIndex].HP > rolesArray[rolesIndex].fullHP) {
        rolesArray[rolesIndex].HP = rolesArray[rolesIndex].fullHP;
    }
    thp = rolesArray[rolesIndex].HP - thp;
    var s = "HP+" + thp;
    var t = new text(s,rolesArray[rolesIndex].mapX, rolesArray[rolesIndex].mapY + 1 / 2 * rpx, rolesArray[rolesIndex].sx, rolesArray[rolesIndex].sy + 1 / 2 * rpx, "rgb(0,255,0)", "bold 30px FangSong");
    var hx = new Image();
    hx.src = effect;
    
    var RecoverShow = new pic(rolesArray[rolesIndex].mapX - rpx,rolesArray[rolesIndex].mapY - rpx,rolesArray[rolesIndex].sx - rpx, rolesArray[rolesIndex].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, hx);
    attackShow.push(t);
    attackShow.push(RecoverShow);
    t1 = setInterval(function() {
        t.mapY--;
        if (RecoverShow.dx < 4900) {
            RecoverShow.dx += 350;
        } else {
            RecoverShow.dx = 0;
        }
       // drawAll();
        console.log("t.mapY:"+t.mapY+"rolesArray[rolesIndex].mapY:"+rolesArray[rolesIndex].mapY);
        if (t.mapY == rolesArray[rolesIndex].mapY) {
            clearInterval(t1);
            clearArray(attackShow);
        }
    },
    75);
}
function IRecoverMP() {
    var tmp = rolesArray[rolesIndex].MP;
    rolesArray[rolesIndex].MP += itemVar;
    if (rolesArray[rolesIndex].MP > rolesArray[rolesIndex].fullMP) {
        rolesArray[rolesIndex].MP = rolesArray[rolesIndex].fullMP;
    }
    tmp = rolesArray[rolesIndex].MP - tmp;
    var s = "MP+" + tmp;
    var t = new text(s, rolesArray[rolesIndex].mapX, rolesArray[rolesIndex].mapY + 1 / 2 * rpx,rolesArray[rolesIndex].sx, rolesArray[rolesIndex].sy + 1 / 2 * rpx, "rgb(0,255,0)", "bold 30px FangSong");
    var hx = new Image();
    hx.src = effect;
    var RecoverShow = new pic(rolesArray[rolesIndex].mapX- rpx, rolesArray[rolesIndex].mapY - rpx,rolesArray[rolesIndex].sx- rpx, rolesArray[rolesIndex].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, hx);
    attackShow.push(t);
    attackShow.push(RecoverShow);
    t1 = setInterval(function() {
        t.mapY--;
        if (RecoverShow.dx < 4900) {
            RecoverShow.dx += 350;
        } else {
            RecoverShow.dx = 0;
        }
       // drawAll();
        if (t.mapY == rolesArray[rolesIndex].mapY) {
            clearInterval(t1);
            clearArray(attackShow);
            finish = true;
        }
    },
    75);
}
function IRecoverPower(){

}

function reconverAction(obj) {
	var aaaa=100;
	//判断只要是活着的队友即可；----------------
	
	//var a=rolesArray[0].sx/48;
	//var b=rolesArray[0].sy/48;
//	var a=obj.sx/48;
//	var b=obj.sy/48;
	var a=obj.mapX/48;
	var b=obj.mapY/48;
	var needDongHua=true;
	//console.log("执行复活人是"+obj.name);
	//----------------------------------
	var pos=[a,b];//主角的左上角/48的坐标
	var aa=GetRound(pos);//得到主角上下左右的四个点的数组,右下左上的顺序
	//判断1.是否和障碍物重合，2.是否有敌人在这个位置，3.是否有队友在这个位置上，4.是否在画布范围内 然后复活
	
	for(var i=0;i<aa.length;i++){
		var t=aa[i].split(",");//split() 方法用于把一个字符串分割成字符串数组。
		console.log("t0"+t[0]+" ");
		console.log("t1"+t[1]+" ");
		t[0]=parseInt(t[0]);
		t[1]=parseInt(t[1]);
	  if(IsObstacle(aa[i])||IsOutScreen([t[0],t[1]])||IsEnemyHere([t[0],t[1]])||IsBuddyHere([t[0],t[1]])){
	 console.log("i是");
         if(i!=3){ continue;}
		 else {needDongHua=false;noEmptyPlace();}	 
      
	  }
      else{		
	      // console.log("tpp"+tpp);
          // console.log("tppf"+deadArray[tpp-1].name);
	       for(var ii=0;ii<rolesArray.length;ii++){
		      if( rolesArray[ii].name==deadArray[tpp-1].name){
				   rolesArray[ii].mapX=t[0]*rpx;
				   rolesArray[ii].mapY=t[1]*rpx;
				   rolesArray[ii].sx=rolesArray[ii].mapX;
				   rolesArray[ii].sy=rolesArray[ii].mapY;
				   rolesArray[ii].dy = 0;
				   rolesArray[ii].sh=rpx;
				   rolesArray[ii].dh=rpx;
				   rolesArray[ii].HP = 10;
				   aaaa=ii;
		       }
	       }
		   //处理后事
		   rolesArray[rolesIndex].items[tp].num -= 1;//道具数量-1
		   if (rolesArray[rolesIndex].items[tp].num == 0) {
				//console.log("删除道具的人物下标b"+rolesIndex);
			  rolesArray[rolesIndex].items.splice(tp, 1);//剔除这个道具
		   }
		   deadArray.splice(tpp-1, 1);//死亡数组删除那个复活的对象
		 //  console.log("deadArray长度"+deadArray.length);
		   //drawAll();
		   break;
	  }//else
	  
	}//for

//	console.log("aaaa是"+aaaa);
//	console.log("aaaa是"+rolesArray[aaaa].name);
	
	//var RecoverShow = new pic(rolesArray[aaaa].sx - rpx, rolesArray[aaaa].sy - rpx,rolesArray[aaaa].sx - rpx, rolesArray[aaaa].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, getAlive);
	if(needDongHua){
	var RecoverShow = new pic(rolesArray[aaaa].mapX - rpx, rolesArray[aaaa].mapY - rpx,rolesArray[aaaa].sx - rpx, rolesArray[aaaa].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, getAlive);
	attackShow.push(RecoverShow);	
	var lt = setInterval(function() {
		                
						if (RecoverShow.dx < 4900) {RecoverShow.dx += 350;} 
						else {RecoverShow.dx = 0;}
						//drawAll();
					   },75);
	setTimeout(function (){
	               clearInterval(lt);
	               clearArray(attackShow);
                    }, 1000);
					
	}
				
}//reconverAction
