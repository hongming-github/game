
/*
	判断敌人是否在主角攻击范围内（OK）
*/
function judgeEnemyOnRange(obj) {
    var r = obj.range;
    var sx = obj.mapX;
    var sy = obj.mapY;
    for (var i = 0; i < enemysArray.length; i++) {
        var m = Math.abs(enemysArray[i].mapX - sx) + Math.abs(enemysArray[i].mapY - sy);
        if (m <= r * rpx) {return true;}
    }
}
/*
判断该角色是否已经在我方的队伍中
*/
function isRoleIdInrolesArray(comeid){
    for(var i=0;i<rolesArray.length;i++){
		if(rolesArray[i].id==comeid){return true;}
	}
	return false;
}
/*
判断该角色是否已经本回合内用过道具
*/
function isRoleHasUsedItem(obj){
	if(obj.has_use_Item==1){return true;}
	return false;
}
/*
判断是否在敌人的攻击范围内
*/
function IsOnEnemyRange(obj){
	var r=obj.range;
	var sx=obj.mapX;
	var sy=obj.mapY;
	for (var i = 0; i < rolesArray.length; i++) {
		var m = Math.abs(rolesArray[i].mapX - sx) + Math.abs(rolesArray[i].mapY - sy);
		if (m <= r * rpx){ return true;}
	}
}
/*
判断是否在我方的攻击范围内
*/
function IsOnRoleRange(obj,objEnemy){
	var r=obj.range;
	console.log("obj.range       "+r);
	var sx=obj.mapX;
	var sy=obj.mapY;
	console.log("obj.mapX       "+obj.mapX);
	console.log("obj.mapY       "+obj.mapY);
	var m = Math.abs(objEnemy.mapX - sx) + Math.abs(objEnemy.mapY - sy);
	console.log("objEnemy.mapX      "+objEnemy.mapX);
	console.log("objEnemy.mapY      "+objEnemy.mapY);
	console.log("m       "+m);
	if (m <= r * rpx){ return true;}
	else{return false;}

}
function MouseOnPic(x, y, obj) {
    if (x > obj.sx && x < obj.sx + obj.sw && y > obj.sy && y < obj.sy + obj.sh) {
        return true;
    }
}
/*
	判断鼠标坐标是否在主角攻击范围
*/
function MouseOnRange(x, y) {
    var a = Math.floor((x-mapMovX) / rpx) * rpx;
    var b = Math.floor((y-mapMovY) / rpx) * rpx;
    var r = rolesArray[rolesIndex].range;
    var sx = rolesArray[rolesIndex].mapX;
    var sy = rolesArray[rolesIndex].mapY;
    var dis = Math.abs(a - sx) + Math.abs(b - sy);
    if (dis <= r * rpx) return true;
}
/*
	判断鼠标是否在目标上
*/
function MouseOnObj(x, y, obj) {
    if (x > obj.sx && x < obj.sx + obj.swidth && y > obj.sy && y < obj.sy + obj.sheight) {
        return true;
    }
}
/*
	判断敌人是否死光了
*/
function isEnemyAllDead(){
      for(var i=0;i<enemysArray.length;i++){
	    if(enemysArray[i].mapX!=2496){return false;}
	  }
	  return true;
}
/*
	判断敌人是否死光了
*/
function isBossDead(){
      for(var i=0;i<enemysArray.length;i++){
	    if(enemysArray[i].id==3&&enemysArray[i].mapX==2496){return true;}
	  }
	  return false;
}
/*
	判断坐标是否在移动范围内
*/
function MouseOnMovement(x,y) {
	var mapMoveRpx=Math.floor((x-mapMovX)/rpx)* rpx;
	var mapMoveRpy=Math.floor((y-mapMovY)/rpx)* rpx;
	for(var i=0;i<everything1.length;i++)
	{
		if(everything1[i].mapX==mapMoveRpx && everything1[i].mapY==mapMoveRpy)
		{
			return true;
		}
		
	}
	return false;
  /*  var sx = rolesArray[rolesIndex].mapX;console.log("sx:   "+sx);
    var sy = rolesArray[rolesIndex].mapY;console.log("sy:   "+sy);
    var m = rolesArray[rolesIndex].movement;
	var mapMoveRpx=Math.floor((x-mapMovX)/rpx)* rpx;console.log("mapMoveRpx:   "+mapMoveRpx);
	var mapMoveRpy=Math.floor((y-mapMovY)/rpx)* rpx;console.log("mapMoveRpy:   "+mapMoveRpy);
    var dis = Math.abs(mapMoveRpx - sx) + Math.abs(mapMoveRpy - sy); console.log("dis:   "+dis);//abs为绝对值
    if (dis <= m * rpx) {console.log("aaaatrue");return true;}
	else {console.log("aaaafalse");return false;}*/
}

/*
	判断坐标是否在敌人图片上
*/
function MouseOnEnemys(x, y) {
    for (var i = 0; i < enemysArray.length; i++) {
        if (x >= enemysArray[i].sx && x <= enemysArray[i].sx + rpx && y >= enemysArray[i].sy && y <= enemysArray[i].sy + rpx) {
            enemysIndex = i;
            return true;
        }
    }
}
/*
	找到选中角色的下标
*/
function findRolesIndex(x, y) {
    for (var i = 0; i < rolesArray.length; i++) {
        if (x >= rolesArray[i].sx && x <= rolesArray[i].sx + rpx && y >= rolesArray[i].sy && y <= rolesArray[i].sy + rpx) {
            rolesIndex = i;
			/*
			console.log("人物的坐标"+rolesArray[rolesIndex].sx+"   "+rolesArray[rolesIndex].sy);
            console.log("firstClick是"+firstClick+"   行走"+rolesArray[rolesIndex].walk+"  has_walk"+rolesArray[rolesIndex].has_walk);
			
			console.log("移动力"+rolesArray[rolesIndex].movement);
            console.log("绝杀"+rolesArray[rolesIndex].spiritJueSha+"  神杀"+rolesArray[rolesIndex].spiritSheSha+"    闪避"+rolesArray[rolesIndex].spiritShanBi);
			console.log("神行开关"+rolesArray[rolesIndex].spiritShenXing+"  不确定使用"+rolesArray[rolesIndex].not_sure_use_ShenXing+"   确定使用"+rolesArray[rolesIndex].has_use_ShenXing);
			*/
       }
    }
}
/*
	判断坐标是否在主角图片上
*/
function MouseOnRoles(x, y) {
    for (var i = 0; i < rolesArray.length; i++) {
        if (x >= rolesArray[i].sx && x <= rolesArray[i].sx + rpx && y >= rolesArray[i].sy && y <= rolesArray[i].sy + rpx) {return true;}
    }
}
/*
   鼠标点击在已选中的角色上
*/
function MouseClickOnRolesIndex(x, y) {
    if (x >= rolesArray[rolesIndex].sx && x <= rolesArray[rolesIndex].sx + rpx && y >= rolesArray[rolesIndex].sy && y <= rolesArray[rolesIndex].sy + rpx) return true;
}
/*
   鼠标点击在攻击范围外
*/
function MouseClickOnAttakRange(x,y){
	var mapMoveRpx=Math.floor((x-mapMovX)/rpx)* rpx;
	var mapMoveRpy=Math.floor((y-mapMovY)/rpx)* rpx;
	for(var i=0;i<everything1.length;i++)
	{
		if(rangeShow[i].mapX==mapMoveRpx && rangeShow[i].mapY==mapMoveRpy)
		{
			return false;
		}	
	}
	return true;
		 
}
/*
   判断我方回合是否结束
*/
function judeEnd() {
    for (var i = 0; i < rolesArray.length; i++) {
    
        if (((rolesArray[i].dy != 240)&&(rolesArray[i].sh !=0))||((rolesArray[i].sh ==0)&&(rolesArray[i].dh !=0))) {
			//alert(i);
			return false;
		}
    }
    return true;
}
/*
	在敌人攻击范围内有角色，寻找目标位置
*/
function judgeTargetLocation() {

}

/*
	判断坐标是否重叠
*/
function judgeOverlap(obj) {
    for (var i = 0; i < enemysArray.length; i++) {
        if (enemysArray[i].sx == obj.sx && enemysArray[i].sy == obj.sy) return true;
    }
    for (var j = 0; j < rolesArray.length; j++) {
        if (rolesArray[j].sx == obj.sx && rolesArray[j].sy == obj.sy) {
            return true;
        }
    }
}
function MouseOnOtherRoles(x, y) {
    for (var i = 0; i < rolesArray.length; i++) {
        if (x >= rolesArray[i].sx && x <= rolesArray[i].sx + rpx && y >= rolesArray[i].sy && y <= rolesArray[i].sy + rpx) {
            if (rolesArray[i].sx != rolesArray[rolesIndex].sx && rolesArray[i].sy != rolesArray[rolesIndex].sy) {
                return true;
            }
        }
    }
}
function judgeDistance(a, b) {
    //alert(Math.abs(a.sx-b.sx)+Math.abs(a.sy-b.sy));
    if (Math.abs(a.sx - b.sx) + Math.abs(a.sy - b.sy) == rpx) return true;
}
function judgeOver() {
    for (var i = 0; i < rolesArray.length; i++) {
        if (rolesArray[i].mapX != 2496){ return false;}
    }
	return true;
}

//判断有没有障碍物
function IsObstacle(pos){ 
    if((";"+pass+";").indexOf(";"+pos+";")!=-1)
        return true;
    return false;
}
//判断有没有敌人在
function IsEnemyHere(arr){
	var bool=false;
 for(var i=0;i<enemysArray.length;i++){
//	var ssx=enemysArray[i].sx/48;
//	var ssy=enemysArray[i].sy/48;
 	var ssx=enemysArray[i].mapX/48;
	var ssy=enemysArray[i].mapY/48;
    if(arr[0]==ssx&&arr[1]==ssy){bool= true;break;}
     else{bool=false;}
 }
 return bool;
}
//判断有没有队友在
function IsBuddyHere(arr){
	var bool=false;
  // for(var i=1;i<rolesArray.length;i++){
  	for(var i=0;i<rolesArray.length;i++){
//	var rsx=rolesArray[i].sx/48;
//	var rsy=rolesArray[i].sy/48;
  	var rsx=rolesArray[i].mapX/48;
	var rsy=rolesArray[i].mapY/48;
    if(arr[0]==rsx&&arr[1]==rsy){bool=true;break;}
     else{bool=false;}
 }
 return bool;
}
//判断鼠标是否在人物这一行
function MouseOnRenWu(x, y, obj) {
    if (x > obj.sx && x < obj.sx + obj.swidth && y > obj.sy && y < obj.sy + 35) {		
        return true;
    }
}
//判断是否有这个idNum号的道具在仓库中或者在背包中
function isIdOfItemThere(arr,idNum){
   for(var i=0;i<arr.length;i++){
	   if(arr[i].id==idNum){return true;}
   }
   return false;
}
//确定离开
function checkLeave(){
    event.returnValue="确定离开当前页面吗？";
}
//是否到达关卡
function checkGuanKa(obj){
  if(obj.sx==(bg.sx+1152)&&((obj.sy<=(bg.sy+480))&&(obj.sy>=(bg.sy+475)))){
	//  console.log("是否到达关卡true    "+obj.sx+"   "+bg.sx+"    "+obj.sy+"     "+bg.sy);
	  return true;}
  else{
	//  console.log("是否到达关卡false   "+obj.sx+"   "+bg.sx+"    "+obj.sy+"     "+bg.sy);
	  return false;}

}
//判断dingzhukuangLeft是否有一个1
function isOneThere(arr){
   for(var i=0;i<arr.length;i++){
	   if(arr[i]==1){return true;}
   }
   return false;
}

//道具整理的移动函数
function itemMove(x,y,bagArr,ckArr){
  	if(MouseOnObj(x, y, DJZLBg)){//如果鼠标在道具整理的背景的图片内
	  clearArr(everything2);//先把放绿色移动框的数组清空掉
	  var a=[0,0,0,0,0];//用来控制背包，当没有道具在的时候，，鼠标移动和点击无效
	  var aa=[0,0,0,0,0,0];//用来控制仓库，当没有道具在的时候，，鼠标移动和点击无效
	  var b=bagArr.length;
	  var c=ckArr.length;
	  for(var i=0;i<b;i++){
	     a[i]=1;
	  }
	  for(var i=0;i<c;i++){
	     aa[i]=1;
	  }
	  mrec.swidth=248; mrec.sheight=55;//设置绿色框的高度与宽度
      if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//背包的第一个格子
		  //如果左边的定住框有一个被选择了，那么久不显示绿色的框和说明
		  if(dingzhukuangLeft[0]==0){ mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+167;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].items,0,0);}
		  //如果第一个框被选中了，那么显示说明
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(rolesArray[big_role_index].items,0,0);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//背包的第二个格子
		   if(dingzhukuangLeft[1]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+227;everything2.push(mrec); getShuoMingText(rolesArray[big_role_index].items,1,0);}
		   else if(dingzhukuangLeft[1]==1){ getShuoMingText(rolesArray[big_role_index].items,1,0);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//背包的第三个格子
		   if(dingzhukuangLeft[2]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+287;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].items,2,0);}
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(rolesArray[big_role_index].items,2,0);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){ //背包的第四个格子
		   if(dingzhukuangLeft[3]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+347;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].items,3,0);}
		   else if(dingzhukuangLeft[3]==1){ getShuoMingText(rolesArray[big_role_index].items,3,0);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){ //背包的第五个格子
		  if(dingzhukuangLeft[4]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+407;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].items,4,0);}
		  else if(dingzhukuangLeft[4]==1){ getShuoMingText(rolesArray[big_role_index].items,4,0);}
	  }
	  else if(x>DJZLBg.sx+41&&x<DJZLBg.sx+156&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangRight))){ mrec.sx=DJZLBg.sx+41;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//背包的放入仓库
	  else if(x>DJZLBg.sx+170&&x<DJZLBg.sx+286&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangRight))){mrec.sx=DJZLBg.sx+170;mrec.sy = DJZLBg.sy+472;mrec.swidth=117;mrec.sheight=32;everything2.push(mrec);}//背包的丢弃
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第1个格子
		   if(dingzhukuangRight[0]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+90;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,0,0);}
		   else if(dingzhukuangRight[0]==1){getShuoMingText(storehouse.additems,0,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第2个格子
		    if(dingzhukuangRight[1]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,1,0);}
           else if(dingzhukuangRight[1]==1){getShuoMingText(storehouse.additems,1,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第3个格子
		    if(dingzhukuangRight[2]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+208;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,2,0);}
		   else if(dingzhukuangRight[2]==1){getShuoMingText(storehouse.additems,2,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第4个格子
		    if(dingzhukuangRight[3]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+267;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,3,0);}
		   else if(dingzhukuangRight[3]==1){getShuoMingText(storehouse.additems,3,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第5个格子
		   if(dingzhukuangRight[4]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+326;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,4,0);}
		  else if(dingzhukuangRight[4]==1){getShuoMingText(storehouse.additems,4,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第6个格子
		   if(dingzhukuangRight[5]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+386;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,5,0);}
		  else if(dingzhukuangRight[5]==1){getShuoMingText(storehouse.additems,5,0);}
	  }
	  else if(x>DJZLBg.sx+340&&x<DJZLBg.sx+455&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+340;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//仓库的放入背包按钮
      else if(x>DJZLBg.sx+490&&x<DJZLBg.sx+605&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+490;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//仓库的丢弃按钮
	}
	drawBigMap();
}
//道具整理的点击函数
function itemClick(x,y,bagArr,ckArr,caseNum){
	var b=bagArr.length;
	var c=ckArr.length;
	var a=[0,0,0,0,0];
	var aa=[0,0,0,0,0,0,0];
	for(var i=0;i<b;i++){//1表示有道具在
	     a[i]=1;
	}
	for(var i=0;i<c;i++){//1表示有道具在
	     aa[i]=1;
	}
	if(MouseOnObj(x, y, rightArrow)){
		   console.log(big_role_index+"        "+rolesArray.length);
		   if(big_role_index<=rolesArray.length-1){
			   big_role_index++;
			   if(big_role_index>rolesArray.length-1)
			   {big_role_index=0;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
	if(MouseOnObj(x, y, leftArrow)){
		   if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index<0)
			   {big_role_index=rolesArray.length-1;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
    if(MouseOnObj(x, y, CloseImg)){//点击在取消按钮上
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  DJZhengLi=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
	}
	else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第1个道具上
		 if(dingzhukuangLeft[0]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第2个道具上
		 if(dingzhukuangLeft[1]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第3个道具上
		 if(dingzhukuangLeft[2]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第4个道具上
		 if(dingzhukuangLeft[3]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第5个道具上
		 if(dingzhukuangLeft[4]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[4]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[4]==1){dingzhukuangLeft[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+41&&x<DJZLBg.sx+156&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangLeft))){//点击背包的放入仓库
      changeItemNumber();itemOption=0;
	}else if(x>DJZLBg.sx+170&&x<DJZLBg.sx+286&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangLeft))){//点击背包的丢弃按钮
	  changeItemNumber();itemOption=1;
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第1个格子
         if(dingzhukuangRight[0]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第2个格子
         if(dingzhukuangRight[1]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第3个格子
		 if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第4个格子
		 if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第5个格子
         if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[4]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第6个格子
         if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[5]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+340&&x<DJZLBg.sx+455&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangRight))){//仓库的放入背包按钮
      changeItemNumber();itemOption=2;
	}else if(x>DJZLBg.sx+490&&x<DJZLBg.sx+605&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangRight))){//仓库的丢弃按钮
      changeItemNumber();itemOption=3;
	}
	 drawBigMap();

}

//装备整理的移动函数
function equipMove(x,y,bagArr,ckArr){
  	if(MouseOnObj(x, y, DJZLBg)){//如果鼠标在道具整理的背景的图片内
	  clearArr(everything2);//先把放绿色移动框的数组清空掉
	  var a=[0,0,0,0,0];//用来控制背包，当没有道具在的时候，，鼠标移动和点击无效
	  var aa=[0,0,0,0,0,0];//用来控制仓库，当没有道具在的时候，，鼠标移动和点击无效
	  var b=bagArr.length;
	  var c=ckArr.length;
	  for(var i=0;i<b;i++){
	     a[i]=1;
	  }
	  for(var i=0;i<c;i++){
	     aa[i]=1;
	  }
	  mrec.swidth=248; mrec.sheight=55;//设置绿色框的高度与宽度
      if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//背包的第一个格子
		  //如果左边的定住框有一个被选择了，那么久不显示绿色的框和说明
		  if(dingzhukuangLeft[0]==0){ mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+167;everything2.push(mrec);getShuoMingText(bagArr,0,2);}
		  //如果第一个框被选中了，那么显示说明
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(bagArr,0,2);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//背包的第二个格子
		   if(dingzhukuangLeft[1]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+227;everything2.push(mrec); getShuoMingText(bagArr,1,2);}
		   else if(dingzhukuangLeft[1]==1){ getShuoMingText(bagArr,1,2);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//背包的第三个格子
		   if(dingzhukuangLeft[2]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+287;everything2.push(mrec);getShuoMingText(bagArr,2,2);}
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(bagArr,2,2);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){ //背包的第四个格子
		   if(dingzhukuangLeft[3]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+347;everything2.push(mrec);getShuoMingText(bagArr,3,2);}
		   else if(dingzhukuangLeft[3]==1){ getShuoMingText(bagArr,3,2);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){ //背包的第五个格子
		  if(dingzhukuangLeft[4]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+407;everything2.push(mrec);getShuoMingText(bagArr,4,2);}
		  else if(dingzhukuangLeft[4]==1){ getShuoMingText(bagArr,4,2);}
	  }
	  else if(x>DJZLBg.sx+41&&x<DJZLBg.sx+156&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangRight))){ mrec.sx=DJZLBg.sx+41;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//背包的放入仓库
	  else if(x>DJZLBg.sx+170&&x<DJZLBg.sx+286&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangRight))){mrec.sx=DJZLBg.sx+170;mrec.sy = DJZLBg.sy+472;mrec.swidth=117;mrec.sheight=32;everything2.push(mrec);}//背包的丢弃
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第1个格子
		    if(dingzhukuangRight[0]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+90;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,0,2);}
		   else if(dingzhukuangRight[0]==1){getShuoMingText(ckArr,0,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第2个格子
		   if(dingzhukuangRight[1]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,1,2);}
           else if(dingzhukuangRight[1]==1){getShuoMingText(ckArr,1,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第3个格子
		   if(dingzhukuangRight[2]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+208;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,2,2);}
		   else if(dingzhukuangRight[2]==1){getShuoMingText(ckArr,2,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第4个格子
		    if(dingzhukuangRight[3]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+267;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,3,2);}
		   else if(dingzhukuangRight[3]==1){getShuoMingText(ckArr,3,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第5个格子
		   if(dingzhukuangRight[4]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+326;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,4,2);}
		  else if(dingzhukuangRight[4]==1){getShuoMingText(ckArr,4,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第6个格子
		   if(dingzhukuangRight[5]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+386;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,5,2);}
		  else if(dingzhukuangRight[5]==1){getShuoMingText(ckArr,5,2);}
	  }
	  else if(x>DJZLBg.sx+340&&x<DJZLBg.sx+455&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+340;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//仓库的放入背包按钮
      else if(x>DJZLBg.sx+490&&x<DJZLBg.sx+605&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+490;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//仓库的丢弃按钮
	}
	drawBigMap();


}
//装备整理的点击函数
function equipClick(x,y,arr1,arr2,caseNum){
  
	var a=[0,0,0,0,0];
	var aa=[0,0,0,0,0,0,0];
	for(var i=0;i<arr1.length;i++){//1表示有道具在
	     a[i]=1;
	}
	for(var i=0;i<arr2.length;i++){//1表示有道具在
	     aa[i]=1;
	}
	if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<=rolesArray.length-1){ 
			   big_role_index++;
			   if(big_role_index>rolesArray.length-1)
               {big_role_index=0;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
	if(MouseOnObj(x, y, leftArrow)){
		   if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index<0)
			   {big_role_index=rolesArray.length-1;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
    if(MouseOnObj(x, y, CloseImg)){//点击在取消按钮上
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  ZBZhengLi=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
	}
	else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第1个道具上
		 if(dingzhukuangLeft[0]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第2个道具上
		 if(dingzhukuangLeft[1]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第3个道具上
		 if(dingzhukuangLeft[2]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第4个道具上
		 if(dingzhukuangLeft[3]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第5个道具上
		 if(dingzhukuangLeft[4]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[4]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[4]==1){dingzhukuangLeft[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+41&&x<DJZLBg.sx+156&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangLeft))){//点击背包的放入仓库
          itemOption=13;areUSureFX();
	}else if(x>DJZLBg.sx+170&&x<DJZLBg.sx+286&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangLeft))){//点击背包的丢弃按钮
	
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第1个格子
         if(dingzhukuangRight[0]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第2个格子
         if(dingzhukuangRight[1]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第3个格子
		 if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第4个格子
		 if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第5个格子
         if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[4]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第6个格子
         if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[5]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+340&&x<DJZLBg.sx+455&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangRight))){//仓库的放入背包按钮
         itemOption=12;areUSureFX();
	}else if(x>DJZLBg.sx+490&&x<DJZLBg.sx+605&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangRight))){//仓库的丢弃按钮
  
	}
	 drawBigMap();
}
//怒技整理的移动函数
function powerMove(x,y,arr1,arr2){
  if(MouseOnObj(x, y, DJZLBg)){//如果鼠标在道具整理的背景的图片内
	 clearArr(everything2);
	 var a=arr1.length;
	 var b=[0,0,0,0,0,0];
	 for(var j=0;j<arr2.length;j++){
	   b[j]=1;
	 }
	 if(x>DJZLBg.sx+106&&x<DJZLBg.sx+222&&y>DJZLBg.sy+249&&y<DJZLBg.sy+278&&(a!=0)){//封印按钮
	    mrec.swidth=115; mrec.sheight=30;mrec.sx=DJZLBg.sx+106;mrec.sy = DJZLBg.sy+249;everything2.push(mrec);
	 }else if(x>DJZLBg.sx+419&&x<DJZLBg.sx+534&&y>DJZLBg.sy+473&&y<DJZLBg.sy+503){//启用按钮
        mrec.swidth=115; mrec.sheight=30;mrec.sx=DJZLBg.sx+419;mrec.sy = DJZLBg.sy+473;everything2.push(mrec);
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+89&&y<DJZLBg.sy+144&&(b[0]==1)){//仓库的第1个按钮
        if(dingzhukuangRight[0]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+89;everything2.push(mrec);getShuoMingText(arr2,0,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+148&&y<DJZLBg.sy+203&&(b[1]==1)){//仓库的第2个按钮
        if(dingzhukuangRight[1]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;everything2.push(mrec);getShuoMingText(arr2,1,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+207&&y<DJZLBg.sy+262&&(b[2]==1)){//仓库的第3个按钮
        if(dingzhukuangRight[2]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+207;everything2.push(mrec);getShuoMingText(arr2,2,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+266&&y<DJZLBg.sy+321&&(b[3]==1)){//仓库的第4个按钮
		if(dingzhukuangRight[3]==0){  mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+266;everything2.push(mrec);getShuoMingText(arr2,3,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+325&&y<DJZLBg.sy+380&&(b[4]==1)){//仓库的第5个按钮
	    if(dingzhukuangRight[4]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+325;everything2.push(mrec);getShuoMingText(arr2,4,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+384&&y<DJZLBg.sy+439&&(b[5]==1)){//仓库的第6个按钮
		 if(dingzhukuangRight[5]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+384;everything2.push(mrec);getShuoMingText(arr2,5,3);}
	 }
  }
  drawBigMap();
}
//怒技整理的点击函数
function powerClick(x,y,arr1,arr2,caseNum){
   var a=arr1.length;
   var b=[0,0,0,0,0,0];
   for(var j=0;j<arr2.length;j++){
	   b[j]=1;
   }
   if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<=rolesArray.length-1){ 
			   big_role_index++;
			   if(big_role_index>rolesArray.length-1)
			   {big_role_index=0;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else if(MouseOnObj(x, y, leftArrow)){
		   if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index<0)
			   {big_role_index=rolesArray.length-1;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else if(MouseOnObj(x, y, CloseImg)){//点击在取消按钮上
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  NJZhengLi=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
   }else if(x>DJZLBg.sx+106&&x<DJZLBg.sx+222&&y>DJZLBg.sy+249&&y<DJZLBg.sy+278&&(a!=0)){//点击在封印按钮
	   dingzhukuangLeft[0]=1;itemOption=4;areUSureFX();
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+89&&y<DJZLBg.sy+144&&(b[0]==1)){//仓库的第1个按钮
	   if(dingzhukuangRight[0]==0){console.log("1");dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+148&&y<DJZLBg.sy+203&&(b[1]==1)){//仓库的第2个按钮
	   if(dingzhukuangRight[1]==0){console.log("2");dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+207&&y<DJZLBg.sy+262&&(b[2]==1)){//仓库的第3个按钮
	   if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+266&&y<DJZLBg.sy+321&&(b[3]==1)){//仓库的第4个按钮
	   if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[3]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+325&&y<DJZLBg.sy+380&&(b[4]==1)){//仓库的第5个按钮
       if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[4]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+384&&y<DJZLBg.sy+439&&(b[5]==1)){//仓库的第6个按钮
       if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[5]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+419&&x<DJZLBg.sx+534&&y>DJZLBg.sy+473&&y<DJZLBg.sy+503&&(isOneThere(dingzhukuangRight))){//启用按钮
      itemOption=5;areUSureFX();
   }
    drawBigMap();

}
//秘技整理的移动函数
function skillMove(x,y,arr1,arr2){
  if(MouseOnObj(x, y, DJZLBg)){//如果鼠标在道具整理的背景的图片内
     clearArr(everything2);
	 var a=[0,0,0,0];
	 var b=[0,0,0,0,0,0];
	 for(var j=0;j<arr1.length;j++){
		 a[j]=1;
	 }
	 for(var j=0;j<arr2.length;j++){
	   b[j]=1;
	 }
	 if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+192&&y<DJZLBg.sy+246&&(a[0]==1)){//背包的第1个格子
          if(dingzhukuangLeft[0]==0){mrec.swidth=248; mrec.sheight=55;mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+192;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].skills,0,1);} 
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(rolesArray[big_role_index].skills,0,1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+255&&y<DJZLBg.sy+309&&(a[1]==1)){//背包的第2个格子
		  if(dingzhukuangLeft[1]==0){mrec.swidth=248; mrec.sheight=55;mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+255;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].skills,1,1);} 
		  else if(dingzhukuangLeft[1]==1){ getShuoMingText(rolesArray[big_role_index].skills,1,1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+318&&y<DJZLBg.sy+372&&(a[2]==1)){//背包的第3个格子
		   if(dingzhukuangLeft[2]==0){mrec.swidth=248; mrec.sheight=55;mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+318;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].skills,2,1);} 
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(rolesArray[big_role_index].skills,2,1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+381&&y<DJZLBg.sy+435&&(a[3]==1)){//背包的第4个格子
		  if(dingzhukuangLeft[3]==0){mrec.swidth=248; mrec.sheight=55;mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+381;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].skills,3,1);} 
		  else if(dingzhukuangLeft[3]==1){ getShuoMingText(rolesArray[big_role_index].skills,3,1);}
	 }else if(x>DJZLBg.sx+110&&x<DJZLBg.sx+227&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503){//封印
		  mrec.swidth=115; mrec.sheight=30;mrec.sx=DJZLBg.sx+110;mrec.sy = DJZLBg.sy+474;everything2.push(mrec);
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+621&&y>DJZLBg.sy+89&&y<DJZLBg.sy+144&&(b[0]==1)){//仓库的第1个格子
		  if(dingzhukuangRight[0]==0){mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+89;everything2.push(mrec);getShuoMingText(storehouse.addskills,0,1);}
		  else if(dingzhukuangRight[0]==1){getShuoMingText(storehouse.addskills,0,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+148&&y<DJZLBg.sy+203&&(b[1]==1)){//仓库的第2个按钮
         if(dingzhukuangRight[1]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;everything2.push(mrec);getShuoMingText(storehouse.addskills,1,1);}
		 else if(dingzhukuangRight[1]==1){getShuoMingText(storehouse.addskills,1,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+207&&y<DJZLBg.sy+262&&(b[2]==1)){//仓库的第3个按钮
		 if(dingzhukuangRight[2]==0){mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+207;everything2.push(mrec);getShuoMingText(storehouse.addskills,2,1);}
		 else if(dingzhukuangRight[2]==1){getShuoMingText(storehouse.addskills,2,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+266&&y<DJZLBg.sy+321&&(b[3]==1)){//仓库的第4个按钮
		 if(dingzhukuangRight[3]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+266;everything2.push(mrec);getShuoMingText(storehouse.addskills,3,1);}
		 else if(dingzhukuangRight[3]==1){getShuoMingText(storehouse.addskills,3,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+325&&y<DJZLBg.sy+380&&(b[4]==1)){//仓库的第5个按钮
        if(dingzhukuangRight[4]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+325;everything2.push(mrec);getShuoMingText(storehouse.addskills,4,1);}
		else if(dingzhukuangRight[4]==1){getShuoMingText(storehouse.addskills,4,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+384&&y<DJZLBg.sy+439&&(b[5]==1)){//仓库的第6个按钮
       if(dingzhukuangRight[5]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+384;everything2.push(mrec);getShuoMingText(storehouse.addskills,5,1);}
	   else if(dingzhukuangRight[5]==1){getShuoMingText(storehouse.addskills,5,1);}
	 }else if(x>DJZLBg.sx+419&&x<DJZLBg.sx+535&&y>DJZLBg.sy+473&&y<DJZLBg.sy+503){//启用按钮
        mrec.swidth=115; mrec.sheight=30;mrec.sx=DJZLBg.sx+419;mrec.sy = DJZLBg.sy+473;everything2.push(mrec);
	 }
	 drawBigMap();
  }
}
//秘技整理的点击函数
function skillClick(x,y,arr1,arr2,caseNum){
     var a=[0,0,0,0];
	 var b=[0,0,0,0,0,0];
	 for(var j=0;j<arr1.length;j++){
		 a[j]=1;
	 }
	 for(var j=0;j<arr2.length;j++){
	   b[j]=1;
	 }
	  if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<=rolesArray.length-1){ 
			   big_role_index++;
			   if(big_role_index>rolesArray.length-1)
			   {big_role_index=0;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	 }else
	 if(MouseOnObj(x, y, leftArrow)){
		   if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index<0)
			   {big_role_index=rolesArray.length-1;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	 }else
	 if(MouseOnObj(x, y, CloseImg)){//点击在取消按钮上
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  MJZhengLi=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
     }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+192&&y<DJZLBg.sy+246&&(a[0]==1)){//背包的第1个格子
         if(dingzhukuangLeft[0]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+255&&y<DJZLBg.sy+309&&(a[1]==1)){//背包的第2个格子
		 if(dingzhukuangLeft[1]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+318&&y<DJZLBg.sy+372&&(a[2]==1)){//背包的第3个格子
		 if(dingzhukuangLeft[2]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+381&&y<DJZLBg.sy+435&&(a[3]==1)){//背包的第4个格子
		 if(dingzhukuangLeft[3]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+110&&x<DJZLBg.sx+227&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(isOneThere(dingzhukuangLeft))){//封印
      itemOption=6;areUSureFX();
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+621&&y>DJZLBg.sy+89&&y<DJZLBg.sy+144&&(b[0]==1)){//仓库的第1个格子
        if(dingzhukuangRight[0]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+148&&y<DJZLBg.sy+203&&(b[1]==1)){//仓库的第2个按钮
	    if(dingzhukuangRight[1]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+207&&y<DJZLBg.sy+262&&(b[2]==1)){//仓库的第3个按钮
		if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+266&&y<DJZLBg.sy+321&&(b[3]==1)){//仓库的第4个按钮
		if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[3]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+325&&y<DJZLBg.sy+380&&(b[4]==1)){//仓库的第5个按钮
		if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[4]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+384&&y<DJZLBg.sy+439&&(b[5]==1)){//仓库的第6个按钮
		if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[5]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+419&&x<DJZLBg.sx+535&&y>DJZLBg.sy+473&&y<DJZLBg.sy+503&&(isOneThere(dingzhukuangRight))){//启用按钮
      itemOption=7;areUSureFX();
	 }
	drawBigMap();
}
//队员的点击的函数
function duiyuanClick(x,y){
       if(MouseOnObj(x, y, CloseImg)){
			   DuiYuan=false;
		       bigMapoption=true;
			   clearArr(shadowShow);
			   drawArr(startShow);
	   }else if(MouseOnObj(x, y, leftArrow)){
		  if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index < 0){big_role_index=rolesArray.length-1;}
			   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	           drawArr(startShow);
			   teamMember(rolesArray[big_role_index],0);
		   } 
	   }else if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<=(rolesArray.length-1)){			  
			    big_role_index++;
				if(big_role_index > rolesArray.length-1){big_role_index=0;}
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	            drawArr(startShow);
			    teamMember(rolesArray[big_role_index],0);
		   }  
	   }else if (MouseOnObj(x, y, skill)) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	      drawArr(startShow);
		  teamMember(rolesArray[big_role_index],0);
       }else  if (MouseOnObj(x, y, power)) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	      drawArr(startShow);
		  teamMember(rolesArray[big_role_index],1);
       }else  if (MouseOnObj(x, y, equip)) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	      drawArr(startShow);
		  teamMember(rolesArray[big_role_index],2);
       }
}
//仓库的移动函数
function cangKuMove(x,y,arr2,tempp){
	 if(MouseOnObj(x, y, DJZLBg)){//如果鼠标在道具整理的背景的图片内
	 clearArr(everything2);
	 var b=[0,0,0,0,0,0];
	 for(var j=0;j<arr2.length;j++){
	   b[j]=1;
	 }
	 
	 if(x>DJZLBg.sx+366&&x<DJZLBg.sx+469&&y>DJZLBg.sy+384&&y<DJZLBg.sy+412){//丢弃按钮
	    mrec.swidth=103; mrec.sheight=28;mrec.sx=DJZLBg.sx+366;mrec.sy = DJZLBg.sy+384;everything2.push(mrec);
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+76&&y<DJZLBg.sy+130&&(b[0]==1)){//仓库的第1个按钮
        if(dingzhukuangRight[0]==0){ mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+76;everything2.push(mrec);getShuoMingText1(arr2,0,tempp);}
		else if(dingzhukuangRight[0]==1){ getShuoMingText1(arr2,0,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+133&&y<DJZLBg.sy+184&&(b[1]==1)){//仓库的第2个按钮
        if(dingzhukuangRight[1]==0){ mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+133;everything2.push(mrec);getShuoMingText1(arr2,1,tempp);}
		else if(dingzhukuangRight[1]==1){ getShuoMingText1(arr2,1,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+190&&y<DJZLBg.sy+238&&(b[2]==1)){//仓库的第3个按钮
        if(dingzhukuangRight[2]==0){ mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+190;everything2.push(mrec);getShuoMingText1(arr2,2,tempp);}
		else if(dingzhukuangRight[2]==1){ getShuoMingText1(arr2,2,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+247&&y<DJZLBg.sy+392&&(b[3]==1)){//仓库的第4个按钮
		if(dingzhukuangRight[3]==0){  mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+247;everything2.push(mrec);getShuoMingText1(arr2,3,tempp);}
		else if(dingzhukuangRight[3]==1){ getShuoMingText1(arr2,3,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+314&&y<DJZLBg.sy+446&&(b[4]==1)){//仓库的第5个按钮
	    if(dingzhukuangRight[4]==0){ mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+304;everything2.push(mrec);getShuoMingText1(arr2,4,tempp);}
		else if(dingzhukuangRight[4]==1){ getShuoMingText1(arr2,4,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+371&&y<DJZLBg.sy+500&&(b[5]==1)){//仓库的第6个按钮
		if(dingzhukuangRight[5]==0){ mrec.swidth=222;mrec.sheight=49;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+361;everything2.push(mrec);getShuoMingText1(arr2,5,tempp);}
		else if(dingzhukuangRight[5]==1){ getShuoMingText1(arr2,5,tempp);}
	 }
  }
  drawBigMap();
}
//仓库的点击函数
function cangKuClick(x,y,arr2,caseNum){
   var b=[0,0,0,0,0,0];
   for(var j=0;j<arr2.length;j++){
	   b[j]=1;
   }

/*   if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<rolesArray.length-1){ 
			   big_role_index++;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else if(MouseOnObj(x, y, leftArrow)){
		   if(0<big_role_index){
			   big_role_index--;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[0]=1;DZKuang(mrec);
	}else*/ if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+76&&y<DJZLBg.sy+130&&(b[0]==1)){//仓库的第1个按钮
	   if(dingzhukuangRight[0]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+133&&y<DJZLBg.sy+184&&(b[1]==1)){//仓库的第2个按钮
	   if(dingzhukuangRight[1]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+190&&y<DJZLBg.sy+238&&(b[2]==1)){//仓库的第3个按钮
	   if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+247&&y<DJZLBg.sy+392&&(b[3]==1)){//仓库的第4个按钮
	   if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+314&&y<DJZLBg.sy+446&&(b[4]==1)){//仓库的第5个按钮
       if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+371&&y<DJZLBg.sy+599&&(b[5]==1)){//仓库的第6个按钮
       if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+366&&x<DJZLBg.sx+469&&y>DJZLBg.sy+384&&y<DJZLBg.sy+412){//丢弃按钮
     changeItemNumber();
	 itemOption=12;
   }
    drawBigMap();

}
//道具商店的移动函数
function itemStoreMove(x,y,arr1,arr2){
  if(MouseOnObj(x, y, DJZLBg)){//如果鼠标在道具整理的背景的图片内
	  clearArr(everything2);//先把放绿色移动框的数组清空掉
	  var a=[0,0,0,0,0];//用来控制背包，当没有道具在的时候，，鼠标移动和点击无效
	  var aa=[0,0,0,0,0,0];//用来控制仓库，当没有道具在的时候，，鼠标移动和点击无效
	  for(var i=0;i<arr1.length;i++){
	     a[i]=1;
	  }
	  for(var i=0;i<arr2.length;i++){
	     aa[i]=1;
	  }
	  mrec.swidth=248; mrec.sheight=55;//设置绿色框的高度与宽度

      if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+175&&y<DJZLBg.sy+255&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//仓库的第一个格子
		  //如果左边的定住框有一个被选择了，那么久不显示绿色的框和说明
		  if(!isOneThere(dingzhukuangLeft)){ mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+175;everything2.push(mrec);getShuoMingText(arr1,0,0);showItemGold(0,0);}
		  //如果第一个框被选中了，那么显示说明
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(arr1,0,0);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+234&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//仓库的第二个格子
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+234;everything2.push(mrec); getShuoMingText(arr1,1,0);showItemGold(1,0);}
		   else if(dingzhukuangLeft[1]==1){ getShuoMingText(arr1,1,0);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+293&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//仓库的第三个格子
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+293;everything2.push(mrec);getShuoMingText(arr1,2,0);showItemGold(2,0);}
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(arr1,2,0);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+352&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){ //仓库的第四个格子
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+352;everything2.push(mrec);getShuoMingText(arr1,3,0);showItemGold(3,0);}
		   else if(dingzhukuangLeft[3]==1){ getShuoMingText(arr1,3,0);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+411&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){ //仓库的第五个格子
		  if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+411;everything2.push(mrec);getShuoMingText(arr1,4,0);showItemGold(4,0);}
		  else if(dingzhukuangLeft[4]==1){ getShuoMingText(arr1,4,0);}
	  }
	  else if(x>DJZLBg.sx+152&&x<DJZLBg.sx+272&&y>DJZLBg.sy+472&&y<DJZLBg.sy+504&&(!isOneThere(dingzhukuangRight))){ mrec.sx=DJZLBg.sx+154;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//贩卖
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //商店的第1个格子
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+90;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,0,0);showItemGold(0,1);}
		   else if(dingzhukuangRight[0]==1){getShuoMingText(arr2,0,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //商店的第2个格子
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,1,0);showItemGold(1,1);}
           else if(dingzhukuangRight[1]==1){getShuoMingText(arr2,1,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//商店的第3个格子
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+208;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,2,0);showItemGold(2,1);}
		   else if(dingzhukuangRight[2]==1){getShuoMingText(arr2,2,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //商店的第4个格子
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+267;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,3,0);showItemGold(3,1);}
		   else if(dingzhukuangRight[3]==1){getShuoMingText(arr2,3,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//商店的第5个格子
		  if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+326;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,4,0);showItemGold(4,1);}
		  else if(dingzhukuangRight[4]==1){getShuoMingText(arr2,4,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//商店的第6个格子
		  if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+386;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,5,0);showItemGold(5,1);}
		  else if(dingzhukuangRight[5]==1){getShuoMingText(arr2,5,0);}
	  }
	  else if(x>DJZLBg.sx+483&&x<DJZLBg.sx+601&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+483;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//购买按钮
	}
	drawBigMap();
}
//道具商店的点击函数
function itemStoreClick(x,y,arr1,arr2,caseNum){
    var a=[0,0,0,0,0];
	var aa=[0,0,0,0,0,0,0];
	for(var i=0;i<arr1.length;i++){//1表示有道具在
	     a[i]=1;
	}
	for(var i=0;i<arr2.length;i++){//1表示有道具在
	     aa[i]=1;
	}
	 if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<rolesArray.length){ 
			   big_role_index++;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
	if(MouseOnObj(x, y, leftArrow)){
		   if(0<big_role_index){
			   big_role_index--;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
    if(MouseOnObj(x, y, CloseImg)){//点击在取消按钮上
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  itemStore=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+175&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第1个道具上
        if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[0]==0){dingzhukuangLeft[0]=1;DZKuang(mrec);DZGold(0,0);}}
		else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+234&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第2个道具上
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[1]==0){dingzhukuangLeft[1]=1;DZKuang(mrec);DZGold(1,0);}}
		else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+293&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第3个道具上
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[2]==0){dingzhukuangLeft[2]=1;DZKuang(mrec);DZGold(2,0);}}
		else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+352&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第4个道具上
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[3]==0){dingzhukuangLeft[3]=1;DZKuang(mrec);DZGold(3,0);}}
		else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+411&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第5个道具上
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[4]==0){dingzhukuangLeft[4]=1;DZKuang(mrec);DZGold(4,0);}}
		else if(dingzhukuangLeft[4]==1){dingzhukuangLeft[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+152&&x<DJZLBg.sx+272&&y>DJZLBg.sy+472&&y<DJZLBg.sy+504&&(isOneThere(dingzhukuangLeft))){//贩卖
		changeItemNumber();itemOption=8; 
	}
     else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //商店的第1个格子
		 if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[0]==0){dingzhukuangRight[0]=1;DZKuang(mrec);DZGold(0,1);}}
		 else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //商店的第2个格子
	     if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[1]==0){dingzhukuangRight[1]=1;DZKuang(mrec);DZGold(1,1);}}
		 else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//商店的第3个格子
	     if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[2]==0){dingzhukuangRight[2]=1;DZKuang(mrec);DZGold(2,1);}}
		 else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //商店的第4个格子
		 if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[3]==0){dingzhukuangRight[3]=1;DZKuang(mrec);DZGold(3,1);}}
		 else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//商店的第5个格子
         if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[4]==0){dingzhukuangRight[4]=1;DZKuang(mrec);DZGold(4,1);}}
		 else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//商店的第6个格子
         if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[5]==0){dingzhukuangRight[5]=1;DZKuang(mrec);DZGold(5,1);}}
		 else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+483&&x<DJZLBg.sx+601&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(!isOneThere(dingzhukuangLeft))){//购买按钮
		changeItemNumber();itemOption=9; 
	}
    drawBigMap();
}
//武器商店的移动函数
function equipStoreMove(x,y,arr1,arr2){
    if(MouseOnObj(x, y, DJZLBg)){//如果鼠标在道具整理的背景的图片内
	  clearArr(everything2);//先把放绿色移动框的数组清空掉
	  var a=[0,0,0,0,0];//用来控制背包，当没有道具在的时候，，鼠标移动和点击无效
	  var aa=[0,0,0,0,0,0];//用来控制仓库，当没有道具在的时候，，鼠标移动和点击无效
	  for(var i=0;i<arr1.length;i++){
	     a[i]=1;
	  }
	  for(var i=0;i<arr2.length;i++){
	     aa[i]=1;
	  }
	  mrec.swidth=248; mrec.sheight=55;//设置绿色框的高度与宽度
      if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+175&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//背包的第一个格子
		  //如果左边的定住框有一个被选择了，那么久不显示绿色的框和说明
		  if(!isOneThere(dingzhukuangLeft)){ mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+175;everything2.push(mrec);getShuoMingText(arr1,0,2);showItemGold(0,3);}
		  //如果第一个框被选中了，那么显示说明
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(arr1,0,2);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+234&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//背包的第二个格子
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+234;everything2.push(mrec); getShuoMingText(arr1,1,2);showItemGold(1,3);}
		   else if(dingzhukuangLeft[1]==1){ getShuoMingText(arr1,1,2);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+293&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//背包的第三个格子
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+293;everything2.push(mrec);getShuoMingText(arr1,2,2);showItemGold(2,3);}
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(arr1,2,2);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+352&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){ //背包的第四个格子
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+352;everything2.push(mrec);getShuoMingText(arr1,3,2);showItemGold(3,3);}
		   else if(dingzhukuangLeft[3]==1){ getShuoMingText(arr1,3,2);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+411&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){ //背包的第五个格子
		  if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+411;everything2.push(mrec);getShuoMingText(arr1,4,2);showItemGold(4,3);}
		  else if(dingzhukuangLeft[4]==1){ getShuoMingText(arr1,4,2);}
	  }
	  else if(x>DJZLBg.sx+152&&x<DJZLBg.sx+272&&y>DJZLBg.sy+472&&y<DJZLBg.sy+504&&(!isOneThere(dingzhukuangRight))){ mrec.sx=DJZLBg.sx+154;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//贩卖
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第1个格子
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+90;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,0,2);showItemGold(0,2);}
		   else if(dingzhukuangRight[0]==1){getShuoMingText(arr2,0,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第2个格子
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,1,2);showItemGold(1,2);}
           else if(dingzhukuangRight[1]==1){getShuoMingText(arr2,1,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第3个格子
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+208;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,2,2);showItemGold(2,2);}
		   else if(dingzhukuangRight[2]==1){getShuoMingText(arr2,2,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第4个格子
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+267;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,3,2);showItemGold(3,2);}
		   else if(dingzhukuangRight[3]==1){getShuoMingText(arr2,3,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第5个格子
		  if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+326;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,4,2);showItemGold(4,2);}
		  else if(dingzhukuangRight[4]==1){getShuoMingText(arr2,4,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第6个格子
		  if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+386;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,5,2);showItemGold(5,2);}
		  else if(dingzhukuangRight[5]==1){getShuoMingText(arr2,5,2);}
	  }
	  else if(x>DJZLBg.sx+483&&x<DJZLBg.sx+601&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+483;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//购买按钮
	}
	drawBigMap();

}
//武器商店的点击函数
function equipStoreClick(x,y,arr1,arr2,caseNum){
	var a=[0,0,0,0,0];
	var aa=[0,0,0,0,0,0,0];
	for(var i=0;i<arr1.length;i++){//1表示有装备在
	     a[i]=1;
	}
	for(var i=0;i<arr2.length;i++){//1表示有装备在
	     aa[i]=1;
	}
	 if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<rolesArray.length-1){ 
			   big_role_index++;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
	if(MouseOnObj(x, y, leftArrow)){
		   if(0<big_role_index){
			   big_role_index--;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
    if(MouseOnObj(x, y, CloseImg)){//点击在取消按钮上
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  equipStore=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第1个道具上
        if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[0]==0){dingzhukuangLeft[0]=1;DZKuang(mrec);DZGold(0,3);}}
		else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第2个道具上
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[1]==0){dingzhukuangLeft[1]=1;DZKuang(mrec);DZGold(1,3);}}
		else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第3个道具上
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[2]==0){dingzhukuangLeft[2]=1;DZKuang(mrec);DZGold(2,3);}}
		else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第4个道具上
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[3]==0){dingzhukuangLeft[3]=1;DZKuang(mrec);DZGold(3,3);}}
		else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){//点在背包的第5个道具上
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[4]==0){dingzhukuangLeft[4]=1;DZKuang(mrec);DZGold(4,3);}}
		else if(dingzhukuangLeft[4]==1){dingzhukuangLeft[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+152&&x<DJZLBg.sx+272&&y>DJZLBg.sy+472&&y<DJZLBg.sy+504&&(isOneThere(dingzhukuangLeft))){//贩卖
		itemOption=14;areUSureFX();
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第1个格子
		 if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[0]==0){dingzhukuangRight[0]=1;DZKuang(mrec);DZGold(0,2);}}
		 else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第2个格子
	     if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[1]==0){dingzhukuangRight[1]=1;DZKuang(mrec);DZGold(1,2);}}
		 else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第3个格子
	     if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[2]==0){dingzhukuangRight[2]=1;DZKuang(mrec);DZGold(2,2);}}
		 else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //仓库的第4个格子
		 if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[3]==0){dingzhukuangRight[3]=1;DZKuang(mrec);DZGold(3,2);}}
		 else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第5个格子
         if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[4]==0){dingzhukuangRight[4]=1;DZKuang(mrec);DZGold(4,2);}}
		 else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//仓库的第6个格子
         if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[5]==0){dingzhukuangRight[5]=1;DZKuang(mrec);DZGold(5,2);}}
		 else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+483&&x<DJZLBg.sx+601&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(!isOneThere(dingzhukuangLeft))){//购买按钮
		itemOption=11; changeItemNumber();
	}
    drawBigMap();
}