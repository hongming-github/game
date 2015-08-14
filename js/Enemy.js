/*
	敌人行动
*/
function enemysAction() {
	console.log("ai        "+ai);
	console.log("end        "+end);
	console.log("enemyIndex        "+enemyIndex+"   "+enemysArray.length);
	if (ai && end && enemyIndex <enemysArray.length) {//敌人是否开始行动，回合是否结束，敌人的下标是否小于敌人数组的长度
		//console.log(enemysArray[enemyIndex].MP)
		
		if (enemysArray[enemyIndex].HP <= 0) {			
			enemyIndex++;
			if (enemyIndex < enemysArray.length) {
				enemysAction();
			} else {		
				enemyIndex = 0;
				ai = false;
				count++;
				setTimeout(dialogShow, 2000);
			}
		}
	    else if (enemysArray[enemyIndex].type==1&& count <= 10&&mapLevel==1) {
			     enemysArray[enemyIndex].dy = 240;
			     enemyIndex++;
			 if (enemyIndex < enemysArray.length) {
				 enemysAction();
			 } else {
				enemyIndex = 0;
				ai = false;
				count++;
				setTimeout(dialogShow, 2000);
			}
		} 
		else {
			var tempMin=new Array(30);
			var index = null; 
			for (var i = 0; i < rolesArray.length; i++) {
				setObj(rolesArray[i].mapX,rolesArray[i].mapY);
				if (find.length>0&&find.length<tempMin.length){
					tempMin=[];
					tempMin=find;
					index=i;
				}
				closelist=[],openlist=[];											
				num=undefined;
				find=[];
			}
			
			if (tempMin.length==0||tempMin.length>=20){
				enemysArray[enemyIndex].dy = 240;
				enemyIndex++;
				if (enemyIndex < enemysArray.length) {
					enemysAction();
				} else {
					enemyIndex = 0;
					count++;
					setTimeout(dialogShow, 1000);
					ai = false;
				}
			}else
			if (tempMin.length>0&&tempMin.length<20){
				if (tempMin[0][0]==enemysArray[enemyIndex].mapX/rpx&&tempMin[0][1]==enemysArray[enemyIndex].mapY/rpx){
					tempMin.shift();
				}
				
				roleObj=rolesArray[index];
				tempMin.pop();
				
				while (tempMin.length>enemysArray[enemyIndex].movement){
					tempMin.pop();
				}
				
				if (tempMin.length>=1){
					//console.log("1111:"+tempMin.length);
					while(1){
						var bool=false;
						
						for (var i=0 ;i<enemysArray.length ;i++ ){
							
							if (tempMin[tempMin.length-1][0]==(enemysArray[i].mapX/rpx) && tempMin[tempMin.length-1][1]==(enemysArray[i].mapY/rpx)){
								tempMin.pop();
								bool=true;
								break;
							}
						}
						if (bool&&tempMin.length>0){
							
							continue;
						}else{break;}
					}
				}
				if (tempMin.length==0){
					tempMin[0]=new Array();
					tempMin[0][0]=enemysArray[enemyIndex].mapX/rpx;
					tempMin[0][1]=enemysArray[enemyIndex].mapY/rpx;
				}
				enemyChange(tempMin);
				
			}
		}
	}
}