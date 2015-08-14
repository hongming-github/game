//总说明：利用Ajax技术把map,role,enemy,Dialog,Item,Skill,Power,Save中的数据读出来并实例化后放到对应的数组中

/*
	地图内容，人物角色信息的读取(OK)
说明： xmlHttp1===Map.xml=== xmlDoc1，
       xmlHttp2===Role.xml===xmlDoc2，
       xmlHttp3===Enemy.xml===xmlDoc3
       
*/

/*
	道具信息的读取
说明：xmlHttp4===Item.xml===xmlDoc4， 
	  xmlHttp5===Save.xml===xmlDoc5，
      xmlHttp6===Skill.xml===xmlDoc6，
      xmlHttp7===Power.xml===xmlDoc7
	  xmlHttp8===Spirit.xml===xmlDoc8
	  xmlHttp9===equip.xml====xmlDoc9
*/
function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp1 = new ActiveXObject("Microsoft.XMLHTTP");
        xmlHttp2 = new ActiveXObject("Microsoft.XMLHTTP");
        xmlHttp3 = new ActiveXObject("Microsoft.XMLHTTP");
		xmlHttp4 = new ActiveXObject("Microsoft.XMLHTTP");
        xmlHttp5 = new ActiveXObject("Microsoft.XMLHTTP");
        xmlHttp6 = new ActiveXObject("Microsoft.XMLHTTP");
        xmlHttp7 = new ActiveXObject("Microsoft.XMLHTTP");
		xmlHttp8 = new ActiveXObject("Microsoft.XMLHTTP");
		xmlHttp9 = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttp1 = new XMLHttpRequest();
        xmlHttp2 = new XMLHttpRequest();
        xmlHttp3 = new XMLHttpRequest();
		xmlHttp4 = new XMLHttpRequest();
        xmlHttp5 = new XMLHttpRequest();
        xmlHttp6 = new XMLHttpRequest();
        xmlHttp7 = new XMLHttpRequest();
		xmlHttp8 = new XMLHttpRequest();
		xmlHttp9 = new XMLHttpRequest();
    }
}
/*
 初始化下一关的数据,包括下一关的地图，下一关的敌人。
*/
function nextRequest(){
    if (window.ActiveXObject) {
        xmlHttp1 = new ActiveXObject("Microsoft.XMLHTTP");
		xmlHttp2 = new ActiveXObject("Microsoft.XMLHTTP");
		xmlHttp3 = new ActiveXObject("Microsoft.XMLHTTP");
		xmlHttp5 = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttp1 = new XMLHttpRequest();
		xmlHttp2 = new XMLHttpRequest();
		xmlHttp3 = new XMLHttpRequest();
		xmlHttp5 = new XMLHttpRequest();
    }
	xmlHttp1.onreadystatechange = handleNextStataChange;
	xmlHttp1.open("GET", "xml/Map.xml", true); 
	xmlHttp2.open("GET", "xml/Role.xml", true);
	xmlHttp3.open("GET", "xml/Enemy.xml", true);
	xmlHttp5.open("GET", "xml/Save.xml", true);
	xmlHttp1.send(null);
    xmlHttp2.send(null);
    xmlHttp3.send(null);
    xmlHttp5.send(null);
}
function handleNextStataChange(){
   if (xmlHttp1.readyState == 4 ){
	    if (xmlHttp1.status == 200){
			var xmlDoc1 = xmlHttp1.responseXML;
			var xmlDoc2 = xmlHttp2.responseXML;
			var xmlDoc3 = xmlHttp3.responseXML;
			var xmlDoc5 = xmlHttp5.responseXML;
            //获得地图并初始化数据
			var map = xmlDoc1.getElementById(mapLevel); //Map.xml,mapLevel在全局变量中定义为1,map获取Map.xml中id=1的那个节点。
			bgImage.src = map.getElementsByTagName("path")[0].firstChild.nodeValue; 
	        mapName=map.getElementsByTagName("mapname")[0].firstChild.nodeValue; 
			if(mapLevel==2){bg = new picture(0,0,0, 0, 1248, 768, bgImage);mapMovX=0;mapMovY=0;}
			else if(mapLevel==3){bg = new picture(0,0,0,-192, 1248, 768, bgImage);mapMovX=0;mapMovY=-192;}
			else if(mapLevel==4){bg = new picture(0,0,0, 0, 1248, 768, bgImage);mapMovX=0;mapMovY=0;}
			else if(mapLevel==5){bg = new picture(0,0,0, 0, 1248, 768, bgImage);mapMovX=0;mapMovY=0;}
			else if(mapLevel==6){bg = new picture(0,0,0, 0, 1248, 768, bgImage);mapMovX=0;mapMovY=0;}
			else if(mapLevel==7){bg = new picture(0,0,0, 0, 1248, 768, bgImage);mapMovX=0;mapMovY=0;}
			else if(mapLevel==8){bg = new picture(0,0,0, 0, 1248, 768, bgImage);mapMovX=0;mapMovY=0;}
			else if(mapLevel==9){bg = new picture(0,0,0, 0, 1248, 768, bgImage);mapMovX=0;mapMovY=0;}
			else if(mapLevel==10){bg = new picture(0,0,0, 0, 1248, 768, bgImage);mapMovX=0;mapMovY=0;}
			
			//获得对话的数据
			var dialog = map.getElementsByTagName("dialog"); // dialog获取map中 dialog这个节点，getElementsByTagName返回的是数组的长度
			for (var x = 0; x < dialog.length; x++) {
				dialogRoundArray[x] = new Array();
				dialogRoundArray[x][0] = dialog[x].getElementsByTagName("param")[0].firstChild.nodeValue - 0;
				dialogRoundArray[x][1] = dialog[x].getElementsByTagName("function")[0].firstChild.nodeValue;
				dialogRoundArray[x][2] = dialog[x].getElementsByTagName("dialogId")[0].firstChild.nodeValue;
			}
			//获得胜利和失败的说明
			var vCondition = map.getElementsByTagName("victory"); // vCondition获取map中<victory>这个节点
			victoryCondition = vCondition[0].getElementsByTagName("condition")[0].firstChild.nodeValue;
			var lCondition = map.getElementsByTagName("lost"); // lCondition获取map中<lost>这个节点
			lostCondition = lCondition[0].getElementsByTagName("condition")[0].firstChild.nodeValue;
			//实例化我方角色
			var roles = map.getElementsByTagName("role"); //roles 获取<role>这个节点
			for (var i = 0; i < roles.length; i++) {
					if(!isRoleIdInrolesArray(roles[i].getElementsByTagName("id")[0].firstChild.nodeValue-0)){//判断是否该ID的角色在队伍中了
						var roleOBJ=new roleInfo(); 
					    roleOBJ.id = roles[i].getElementsByTagName("id")[0].firstChild.nodeValue-0;
						roleOBJ.sx = roles[i].getElementsByTagName("x")[0].firstChild.nodeValue * rpx - 0;
						roleOBJ.sy = roles[i].getElementsByTagName("y")[0].firstChild.nodeValue * rpx - 0;
						roleOBJ.mapX= roleOBJ.sx;
						roleOBJ.mapY= roleOBJ.sy;
						var role = xmlDoc2.getElementById(roleOBJ.id);
						roleOBJ.name = role.getElementsByTagName("name")[0].firstChild.nodeValue;
						roleOBJ.img = role.getElementsByTagName("img")[0].firstChild.nodeValue;
						roleOBJ.halfBody = role.getElementsByTagName("halfBody")[0].firstChild.nodeValue;
						roleOBJ.HP = role.getElementsByTagName("HP")[0].firstChild.nodeValue - 0;
						roleOBJ.fullHP = roleOBJ.HP;
						roleOBJ.MP = role.getElementsByTagName("MP")[0].firstChild.nodeValue - 0;
						roleOBJ.fullMP = roleOBJ.MP;
						roleOBJ.pow = role.getElementsByTagName("pow")[0].firstChild.nodeValue - 0;
						roleOBJ.fullPow = roleOBJ.pow;
						roleOBJ.equipSkill = role.getElementsByTagName("equipSkill")[0].firstChild.nodeValue-0;
						roleOBJ.furySkill = role.getElementsByTagName("furySkill")[0].firstChild.nodeValue-0;
						roleOBJ.SP = role.getElementsByTagName("SP")[0].firstChild.nodeValue-0;
						roleOBJ.fullSP = roleOBJ.SP;
						roleOBJ.movement = role.getElementsByTagName("movement")[0].firstChild.nodeValue - 0;
						roleOBJ.speed = role.getElementsByTagName("speed")[0].firstChild.nodeValue-0;
						roleOBJ.ATK = role.getElementsByTagName("ATK")[0].firstChild.nodeValue - 0;
						roleOBJ.range = role.getElementsByTagName("range")[0].firstChild.nodeValue-0;
						roleOBJ.DEF = role.getElementsByTagName("DEF")[0].firstChild.nodeValue-0;
						roleOBJ.EXP = role.getElementsByTagName("EXP")[0].firstChild.nodeValue-0;
						roleOBJ.nextEXP = role.getElementsByTagName("nextEXP")[0].firstChild.nodeValue-0;
						roleOBJ.level = role.getElementsByTagName("level")[0].firstChild.nodeValue - 0;
						roleOBJ.errorRate = role.getElementsByTagName("errorRate")[0].firstChild.nodeValue - 0;
						roleOBJ.doubleCRI = role.getElementsByTagName("doubleCRI")[0].firstChild.nodeValue - 0;
						roleOBJ.tripleCRI = role.getElementsByTagName("tripleCRI")[0].firstChild.nodeValue - 0;
					
						var role = xmlDoc5.getElementById(roleOBJ.id); //role获得相应的在Save.xml中的id
						var roleItem = role.getElementsByTagName("item"); //返回的是save.xml中的道具的数组
						var roleSkill = role.getElementsByTagName("skill"); //返回的是save.xml中的技能的数组
						var rolePower = role.getElementsByTagName("power"); //返回的是save.xml中的怒攻击的数组
						var roleSpirit = role.getElementsByTagName("spirit"); //返回的是save.xml中的怒攻击的数组
		
						for (var k = 0; k < roleItem.length; k++) {
							roleOBJ.items[k] = new item();
							roleOBJ.items[k].id = roleItem[k].getElementsByTagName("itemId")[0].firstChild.nodeValue;
							roleOBJ.items[k].num = roleItem[k].getElementsByTagName("itemNum")[0].firstChild.nodeValue - 0;
                        }
	
                       for (var l = 0; l < roleSkill.length; l++) {
							roleOBJ.skills[l] = roleSkill[l].getElementsByTagName("skillId")[0].firstChild.nodeValue;
                       }
		
					   for (var m = 0; m < rolePower.length; m++) {
							roleOBJ.powers[m] = rolePower[m].getElementsByTagName("powerId")[0].firstChild.nodeValue;
					   }
	
					   for (var n = 0; n < roleSpirit.length; n++) {
							roleOBJ.spirits[n] = new spirit();
							roleOBJ.spirits[n].id = roleSpirit[n].getElementsByTagName("spiritId")[0].firstChild.nodeValue;
							roleOBJ.spirits[n].num = roleSpirit[n].getElementsByTagName("spiritNum")[0].firstChild.nodeValue;
					   }
					   rolesArray.push(roleOBJ);
					}else {
						for(var j=0;j<rolesArray.length;j++){
							rolesArray[j].sx = roles[j].getElementsByTagName("x")[0].firstChild.nodeValue * rpx - 0;
							rolesArray[j].sy = roles[j].getElementsByTagName("y")[0].firstChild.nodeValue * rpx - 0;
							rolesArray[j].dx=0;
							rolesArray[j].dy=0;
							rolesArray[j].dw=48;
							rolesArray[j].dh=48;
							rolesArray[j].sh=48;
							rolesArray[j].mapX= rolesArray[j].sx;
							rolesArray[j].mapY= rolesArray[j].sy;
							rolesArray[j].HP=rolesArray[j].fullHP;
							rolesArray[j].pow=rolesArray[j].fullPow;
							rolesArray[j].MP=rolesArray[j].fullMP;
							rolesArray[j].SP = rolesArray[j].fullSP;
							rolesArray[j].spiritJueSha=0;
							rolesArray[j].spiritSheSha=0;
							rolesArray[j].spiritShanBi=0;
							rolesArray[j].spiritShenXing=0;
							rolesArray[j].not_sure_use_ShenXing=0;
							rolesArray[j].has_use_ShenXing=0;
							rolesArray[j].walk=0;
							rolesArray[j].has_walk=0;
							rolesArray[j].has_use_Item = 0;
						}
					}
			
			}
			 //实例化敌方角色
			var enemys = map.getElementsByTagName("enemy");
			for (var j = 0; j < enemys.length; j++) {
				enemysArray[j] = new enemyInfo(); //在class.js中有定义
				enemysArray[j].id = enemys[j].getElementsByTagName("id")[0].firstChild.nodeValue-0;
				enemysArray[j].sx = enemys[j].getElementsByTagName("x")[0].firstChild.nodeValue * rpx - 0;
				enemysArray[j].sy = enemys[j].getElementsByTagName("y")[0].firstChild.nodeValue * rpx - 0;
				enemysArray[j].mapX= enemysArray[j].sx;
				enemysArray[j].mapY= enemysArray[j].sy;
				var enemy = xmlDoc3.getElementById(enemysArray[j].id);
				enemysArray[j].name = enemy.getElementsByTagName("name")[0].firstChild.nodeValue;
				enemysArray[j].img = enemy.getElementsByTagName("img")[0].firstChild.nodeValue;
				enemysArray[j].halfBody = enemy.getElementsByTagName("halfBody")[0].firstChild.nodeValue;
				enemysArray[j].HP = enemy.getElementsByTagName("HP")[0].firstChild.nodeValue - 0;
				enemysArray[j].fullHP = enemysArray[j].HP;
				enemysArray[j].MP = enemy.getElementsByTagName("MP")[0].firstChild.nodeValue - 0;
				enemysArray[j].fullMP = enemysArray[j].MP;
				enemysArray[j].pow = enemy.getElementsByTagName("pow")[0].firstChild.nodeValue - 0;
				enemysArray[j].fullPow= enemysArray[j].pow;
				enemysArray[j].equipSkill = enemy.getElementsByTagName("equipSkill")[0].firstChild.nodeValue;
				enemysArray[j].furySkill = enemy.getElementsByTagName("furySkill")[0].firstChild.nodeValue;
				enemysArray[j].SP = enemy.getElementsByTagName("SP")[0].firstChild.nodeValue;
				enemysArray[j].movement = enemy.getElementsByTagName("movement")[0].firstChild.nodeValue - 0;
				enemysArray[j].speed = enemy.getElementsByTagName("speed")[0].firstChild.nodeValue;
				enemysArray[j].ATK = enemy.getElementsByTagName("ATK")[0].firstChild.nodeValue - 0;
				enemysArray[j].range = enemy.getElementsByTagName("range")[0].firstChild.nodeValue-0;
				enemysArray[j].DEF = enemy.getElementsByTagName("DEF")[0].firstChild.nodeValue-0;
				enemysArray[j].EXP = enemy.getElementsByTagName("EXP")[0].firstChild.nodeValue;
				enemysArray[j].level = enemy.getElementsByTagName("level")[0].firstChild.nodeValue - 0;
				enemysArray[j].money = enemy.getElementsByTagName("money")[0].firstChild.nodeValue - 0;
				enemysArray[j].errorRate = enemy.getElementsByTagName("errorRate")[0].firstChild.nodeValue - 0;
				enemysArray[j].doubleCRI = enemy.getElementsByTagName("doubleCRI")[0].firstChild.nodeValue - 0;
				enemysArray[j].tripleCRI = enemy.getElementsByTagName("tripleCRI")[0].firstChild.nodeValue - 0;
				enemysArray[j].type = enemy.getElementsByTagName("type")[0].firstChild.nodeValue - 0;
			}
			 //初始化BOSS的技能
			 for(var j = 0; j < enemysArray.length; j++){
				   if(enemysArray[j].type==1){
					   //初始化BOSS的秘技(skills是一个数组，里面放的是编号)xmlDoc3
			    	   //===================
			          // for (var x = 0; x < dialog.length; x++) {
			          //     dialogRoundArray[x] = new Array();
			          //     dialogRoundArray[x][0] = dialog[x].getElementsByTagName("param")[0].firstChild.nodeValue - 0;
			          //     dialogRoundArray[x][1] = dialog[x].getElementsByTagName("function")[0].firstChild.nodeValue;
			          //     dialogRoundArray[x][2] = dialog[x].getElementsByTagName("dialogId")[0].firstChild.nodeValue;
			          // }
			    	   //========================
			    	   var enemyID1=enemysArray[j].id;
			    	   //alert("0."+enemysArray[j].name+"  "+enemyID1);
			    	   var enemysID2 = xmlDoc3.getElementById(enemyID1);
			           //alert("1."+enemysArray[j].name+"  "+enemysID2);
	                   var enemySkill1=enemysID2.getElementsByTagName("skill"); 
	                   if(enemySkill1.length > 0){
	                   //alert("2."+enemysArray[j].name+"  "+enemySkill1);
			           for (var x = 0; x < enemySkill1.length; x++) {
			        	   var enemyrealls = new Array();
			        	   enemyrealls[x] = enemySkill1[0].getElementsByTagName("skillId")[0].firstChild.nodeValue - 0;         
			        	   //alert("3."+enemysArray[j].name+"  "+enemyrealls[x]);
			           }
	                   //var enemyrealls=enemySkill1[0].getElementsByTagName("skillId")[0].firstChild.nodeValue - 0; 
	                   //alert("3."+enemysArray[j].name+"  "+enemyrealls);
					   enemysArray[j].skills = new Array();
					   //enemysArray[j].skills[0] = enemyrealls;
					   //alert("1."+enemysArray[j].name+"  "+enemysArray[j].skills[0]);
					   for (var l = 0; l < enemyrealls.length; l++) { 
	                    enemysArray[j].skills[l] = enemyrealls[l];
	                   //alert("1."+enemysArray[j].name+"  "+enemysArray[j].skills[l]);					
					   	}
	                   }
					  //初始化BOSS的怒技(powers是一个数组，里面放的是编号)
					  //var enemyPower=xmlDoc3.getElementsByTagName("power"); 
					  //enemysArray[j].powers = new Array();
					  //for (var m = 0; m < enemyPower.length; m++){
						//enemysArray[j].powers[m] = enemyPower[m].getElementsByTagName("powerId")[0].firstChild.nodeValue;
					 // }
	                   var enemyPower1=enemysID2.getElementsByTagName("power");//节点 
	                   //alert("2."+enemysArray[j].name+"  "+enemySkill1);
	                if(enemyPower1.length > 0)
	               	{
			           for (var x = 0; x < enemyPower1.length; x++) {
			        	   var enemyrealls = new Array();
			        	   enemyrealls[x] = enemyPower1[0].getElementsByTagName("powerId")[0].firstChild.nodeValue - 0;         
			           //alert("3."+enemysArray[j].name+"  "+enemyrealls[x]);
			           }
					   enemysArray[j].powers = new Array();
					   //enemysArray[j].skills[0] = enemyrealls;
					   //alert("1."+enemysArray[j].name+"  "+enemysArray[j].skills[0]);
					   for (var l = 0; l < enemyrealls.length; l++) { 
	                    enemysArray[j].powers[l] = enemyrealls[l];
	                   //alert("1."+enemysArray[j].name+"  "+enemysArray[j].skills[l]);					
					   	}
	               	}
				   }
			 }
			 end=false;
			 enemyIndex=0;
			 finish=false;
	  }
   }
}
//onload的时候调用
function startRequest() { //由onload调用                                            
    createXMLHttpRequest();
    xmlHttp1.onreadystatechange = handleStataChange;
    xmlHttp2.onreadystatechange = handleStataChange;
    xmlHttp3.onreadystatechange = handleStataChange;
	xmlHttp4.onreadystatechange = handleStataChange;
    xmlHttp5.onreadystatechange = handleStataChange;
    xmlHttp6.onreadystatechange = handleStataChange;
    xmlHttp7.onreadystatechange = handleStataChange;
	xmlHttp8.onreadystatechange = handleStataChange;
	xmlHttp9.onreadystatechange = handleStataChange;

    xmlHttp1.open("GET", "xml/Map.xml", true); //向服务器发送HTTP请求,
    xmlHttp2.open("GET", "xml/Role.xml", true);
    xmlHttp3.open("GET", "xml/Enemy.xml", true);
	xmlHttp4.open("GET", "xml/Item.xml", true);
    xmlHttp5.open("GET", "xml/Save.xml", true);
    xmlHttp6.open("GET", "xml/Skill.xml", true); 
    xmlHttp7.open("GET", "xml/Power.xml", true);
	xmlHttp8.open("GET", "xml/Spirit.xml", true);
	xmlHttp9.open("GET", "xml/Equip.xml", true);
	

    xmlHttp1.send(null);
    xmlHttp2.send(null);
    xmlHttp3.send(null);
	xmlHttp4.send(null);
    xmlHttp5.send(null);
    xmlHttp6.send(null);
    xmlHttp7.send(null);
	xmlHttp8.send(null);
	xmlHttp9.send(null);

}
function handleStataChange() {
  if (xmlHttp1.readyState == 4 && xmlHttp2.readyState == 4 && xmlHttp3.readyState == 4&&xmlHttp4.readyState == 4 && xmlHttp5.readyState == 4 && xmlHttp6.readyState == 4 && xmlHttp7.readyState == 4&& xmlHttp8.readyState == 4&& xmlHttp9.readyState == 4){ //4表示请求完成了
     if (xmlHttp1.status == 200 && xmlHttp2.status == 200 && xmlHttp3.status == 200 && xmlHttp4.status == 200 && xmlHttp5.status == 200 && xmlHttp6.status == 200 && xmlHttp7.status == 200&& xmlHttp8.status == 200&& xmlHttp9.status == 200){
			var xmlDoc1 = xmlHttp1.responseXML; //responseXML属性将响应提供为XML对象
			var xmlDoc2 = xmlHttp2.responseXML;
			var xmlDoc3 = xmlHttp3.responseXML;
			var xmlDoc4 = xmlHttp4.responseXML; //Item.xml
			var xmlDoc5 = xmlHttp5.responseXML; //Save.xml
			var xmlDoc6 = xmlHttp6.responseXML; //Skill.xml
			var xmlDoc7 = xmlHttp7.responseXML; //Power.xml
			var xmlDoc8 = xmlHttp8.responseXML; //spirit.xml
			var xmlDoc9 = xmlHttp9.responseXML; //equip.xml
        //获得地图并初始化数据
        var map = xmlDoc1.getElementById(mapLevel);//Map.xml,mapLevel在全局变量中定义为1,map获取Map.xml中id=1的那个节点。
		bgImage.src = map.getElementsByTagName("path")[0].firstChild.nodeValue; 
		mapName=map.getElementsByTagName("mapname")[0].firstChild.nodeValue; 
		bg = new picture(0,0,0, 0, 1248, 768, bgImage); //实例化一个地图
		mapMovX=0;mapMovY=0;
		//获得对话的数据
        var dialog = map.getElementsByTagName("dialog"); // dialog获取map中 dialog这个节点，getElementsByTagName返回的是数组的长度
        for (var x = 0; x < dialog.length; x++) {
            dialogRoundArray[x] = new Array();
            dialogRoundArray[x][0] = dialog[x].getElementsByTagName("param")[0].firstChild.nodeValue - 0;
            dialogRoundArray[x][1] = dialog[x].getElementsByTagName("function")[0].firstChild.nodeValue;
            dialogRoundArray[x][2] = dialog[x].getElementsByTagName("dialogId")[0].firstChild.nodeValue;
        }
		//获得胜利和失败的说明
        var vCondition = map.getElementsByTagName("victory"); // vCondition获取map中<victory>这个节点
        victoryCondition = vCondition[0].getElementsByTagName("condition")[0].firstChild.nodeValue;
        var lCondition = map.getElementsByTagName("lost"); // lCondition获取map中<lost>这个节点
        lostCondition = lCondition[0].getElementsByTagName("condition")[0].firstChild.nodeValue;
        //实例化我方角色
        var roles = map.getElementsByTagName("role"); //roles 获取<role>这个节点
        for (var i = 0; i < roles.length; i++) { //初始化各个角色的信息，把各个角色这个对象放在rolesArray这个数组中
            rolesArray[i] = new roleInfo(); //在class.js中有定义
            rolesArray[i].id = roles[i].getElementsByTagName("id")[0].firstChild.nodeValue-0;
            rolesArray[i].sx = roles[i].getElementsByTagName("x")[0].firstChild.nodeValue * rpx - 0;
            rolesArray[i].sy = roles[i].getElementsByTagName("y")[0].firstChild.nodeValue * rpx - 0;
			rolesArray[i].mapX= rolesArray[i].sx;
            rolesArray[i].mapY= rolesArray[i].sy;
            var role = xmlDoc2.getElementById(rolesArray[i].id);
            rolesArray[i].name = role.getElementsByTagName("name")[0].firstChild.nodeValue;
            rolesArray[i].img = role.getElementsByTagName("img")[0].firstChild.nodeValue;
            rolesArray[i].halfBody = role.getElementsByTagName("halfBody")[0].firstChild.nodeValue;
            rolesArray[i].HP = role.getElementsByTagName("HP")[0].firstChild.nodeValue - 0;
            rolesArray[i].fullHP = rolesArray[i].HP;
            rolesArray[i].MP = role.getElementsByTagName("MP")[0].firstChild.nodeValue - 0;
            rolesArray[i].fullMP = rolesArray[i].MP;
            rolesArray[i].pow = role.getElementsByTagName("pow")[0].firstChild.nodeValue - 0;
            rolesArray[i].fullPow = rolesArray[i].pow;
            rolesArray[i].equipSkill = role.getElementsByTagName("equipSkill")[0].firstChild.nodeValue;
            rolesArray[i].furySkill = role.getElementsByTagName("furySkill")[0].firstChild.nodeValue;
            rolesArray[i].SP = role.getElementsByTagName("SP")[0].firstChild.nodeValue;
            rolesArray[i].fullSP = rolesArray[i].SP;
            rolesArray[i].movement = role.getElementsByTagName("movement")[0].firstChild.nodeValue - 0;
            rolesArray[i].speed = role.getElementsByTagName("speed")[0].firstChild.nodeValue;
            rolesArray[i].ATK = role.getElementsByTagName("ATK")[0].firstChild.nodeValue - 0;
            rolesArray[i].range = role.getElementsByTagName("range")[0].firstChild.nodeValue-0;
            rolesArray[i].DEF = role.getElementsByTagName("DEF")[0].firstChild.nodeValue-0;
            rolesArray[i].EXP = role.getElementsByTagName("EXP")[0].firstChild.nodeValue-0;
            rolesArray[i].nextEXP = role.getElementsByTagName("nextEXP")[0].firstChild.nodeValue-0;
            rolesArray[i].level = role.getElementsByTagName("level")[0].firstChild.nodeValue - 0;
            rolesArray[i].errorRate = role.getElementsByTagName("errorRate")[0].firstChild.nodeValue - 0;
            rolesArray[i].doubleCRI = role.getElementsByTagName("doubleCRI")[0].firstChild.nodeValue - 0;
            rolesArray[i].tripleCRI = role.getElementsByTagName("tripleCRI")[0].firstChild.nodeValue - 0;
        }
        //实例化敌方角色
        var enemys = map.getElementsByTagName("enemy");
        for (var j = 0; j < enemys.length; j++) {
            enemysArray[j] = new enemyInfo(); //在class.js中有定义
            enemysArray[j].id = enemys[j].getElementsByTagName("id")[0].firstChild.nodeValue;
            enemysArray[j].sx = enemys[j].getElementsByTagName("x")[0].firstChild.nodeValue * rpx - 0;
            enemysArray[j].sy = enemys[j].getElementsByTagName("y")[0].firstChild.nodeValue * rpx - 0;
			enemysArray[j].mapX= enemysArray[j].sx;
            enemysArray[j].mapY= enemysArray[j].sy;
            var enemy = xmlDoc3.getElementById(enemysArray[j].id);
            enemysArray[j].name = enemy.getElementsByTagName("name")[0].firstChild.nodeValue;
            enemysArray[j].img = enemy.getElementsByTagName("img")[0].firstChild.nodeValue;
            enemysArray[j].halfBody = enemy.getElementsByTagName("halfBody")[0].firstChild.nodeValue;
            enemysArray[j].HP = enemy.getElementsByTagName("HP")[0].firstChild.nodeValue - 0;
            enemysArray[j].fullHP = enemysArray[j].HP;
            enemysArray[j].MP = enemy.getElementsByTagName("MP")[0].firstChild.nodeValue - 0;
            enemysArray[j].fullMP = enemysArray[j].MP;
            enemysArray[j].pow = enemy.getElementsByTagName("pow")[0].firstChild.nodeValue - 0;
			enemysArray[j].fullPow= enemysArray[j].pow;
            enemysArray[j].equipSkill = enemy.getElementsByTagName("equipSkill")[0].firstChild.nodeValue;
            enemysArray[j].furySkill = enemy.getElementsByTagName("furySkill")[0].firstChild.nodeValue;
            enemysArray[j].SP = enemy.getElementsByTagName("SP")[0].firstChild.nodeValue;
            enemysArray[j].movement = enemy.getElementsByTagName("movement")[0].firstChild.nodeValue - 0;
            enemysArray[j].speed = enemy.getElementsByTagName("speed")[0].firstChild.nodeValue;
            enemysArray[j].ATK = enemy.getElementsByTagName("ATK")[0].firstChild.nodeValue - 0;
            enemysArray[j].range = enemy.getElementsByTagName("range")[0].firstChild.nodeValue;
            enemysArray[j].DEF = enemy.getElementsByTagName("DEF")[0].firstChild.nodeValue;
            enemysArray[j].EXP = enemy.getElementsByTagName("EXP")[0].firstChild.nodeValue;
            enemysArray[j].level = enemy.getElementsByTagName("level")[0].firstChild.nodeValue - 0;
            enemysArray[j].money = enemy.getElementsByTagName("money")[0].firstChild.nodeValue - 0;
            enemysArray[j].errorRate = enemy.getElementsByTagName("errorRate")[0].firstChild.nodeValue - 0;
            enemysArray[j].doubleCRI = enemy.getElementsByTagName("doubleCRI")[0].firstChild.nodeValue - 0;
            enemysArray[j].tripleCRI = enemy.getElementsByTagName("tripleCRI")[0].firstChild.nodeValue - 0;
			enemysArray[j].type = enemy.getElementsByTagName("type")[0].firstChild.nodeValue - 0;
        }
		//初始化商店
	    store=new myStore();
		//初始化商店中的道具
		var itemStore=map.getElementsByTagName("item");
		for(var i=0;i<itemStore.length;i++){
			var itemCopy=new item();
			itemCopy.id=itemStore[i].getElementsByTagName("itemId")[0].firstChild.nodeValue - 0;
			itemCopy.num=itemStore[i].getElementsByTagName("itemNum")[0].firstChild.nodeValue - 0;
			store.items.push(itemCopy);
		}
		//初始化商店中的装备
		var equipStore=map.getElementsByTagName("equip");
        for(var i=0;i<equipStore.length;i++){
			var equipCopy=new equipZB();
			equipCopy.id=equipStore[i].getElementsByTagName("equipId")[0].firstChild.nodeValue - 0;
			equipCopy.num=equipStore[i].getElementsByTagName("equipNum")[0].firstChild.nodeValue - 0;
			store.equips.push(equipCopy);
		}
		//实例化总的道具数组
		var items = xmlDoc4.getElementsByTagName("item");
        for (var i = 0; i < items.length; i++){
				itemArrays[i] = new item(); //在class.js中有定义
				itemArrays[i].id = items[i].getElementsByTagName("itemId")[0].firstChild.nodeValue;
				itemArrays[i].name = items[i].getElementsByTagName("itemName")[0].firstChild.nodeValue;
				itemArrays[i].img = items[i].getElementsByTagName("itemImg")[0].firstChild.nodeValue;
				itemArrays[i].gold = items[i].getElementsByTagName("itemGold")[0].firstChild.nodeValue - 0;
				itemArrays[i].discripe = items[i].getElementsByTagName("itemDescription")[0].firstChild.nodeValue;
				itemArrays[i].func = items[i].getElementsByTagName("itemFunc")[0].firstChild.nodeValue;
				itemArrays[i].itemVar = items[i].getElementsByTagName("itemVar")[0].firstChild.nodeValue - 0;
				itemArrays[i].other = items[i].getElementsByTagName("itemOther")[0].firstChild.nodeValue;
				itemArrays[i].effect = items[i].getElementsByTagName("effect")[0].firstChild.nodeValue;
        }
         //--技能攻击的XML读取并放到skillArrays数组中，数组中的每一个元素都是一个技能攻击的对象-------------------------------------------------------------------------------------------------------------------
         var skills = xmlDoc6.getElementsByTagName("skill");
         for (var m = 0; m < skills.length; m++) {
                skillArrays[m] = new skill(); //在class.js中有定义
                skillArrays[m].id = skills[m].getElementsByTagName("skillId")[0].firstChild.nodeValue;
                skillArrays[m].name = skills[m].getElementsByTagName("skillName")[0].firstChild.nodeValue;
                skillArrays[m].img = skills[m].getElementsByTagName("skillImg")[0].firstChild.nodeValue;
                skillArrays[m].mp = skills[m].getElementsByTagName("skillMP")[0].firstChild.nodeValue - 0;
                skillArrays[m].discripe = skills[m].getElementsByTagName("skillDescription")[0].firstChild.nodeValue;
                skillArrays[m].success = skills[m].getElementsByTagName("skillSuccess")[0].firstChild.nodeValue - 0;
                skillArrays[m].func = skills[m].getElementsByTagName("skillFunc")[0].firstChild.nodeValue;
                skillArrays[m].skillVar = skills[m].getElementsByTagName("skillVar")[0].firstChild.nodeValue - 0;
                skillArrays[m].other = skills[m].getElementsByTagName("skillOther")[0].firstChild.nodeValue;
                skillArrays[m].effect = skills[m].getElementsByTagName("effect")[0].firstChild.nodeValue;
         }
         //--怒攻击的XML读取并放到powerArrays数组中，数组中的每一个元素都是一个怒攻击的对象------------------------------------------------------------------------
         var powers = xmlDoc7.getElementsByTagName("power");
         for (var n = 0; n < powers.length; n++) {
                powerArrays[n] = new power(); //在class.js中有定义
                powerArrays[n].id = powers[n].getElementsByTagName("powerId")[0].firstChild.nodeValue;
                powerArrays[n].name = powers[n].getElementsByTagName("powerName")[0].firstChild.nodeValue;
                powerArrays[n].img = powers[n].getElementsByTagName("powerImg")[0].firstChild.nodeValue;
                powerArrays[n].p = powers[n].getElementsByTagName("powerP")[0].firstChild.nodeValue - 0;
                powerArrays[n].discripe = powers[n].getElementsByTagName("powerDescription")[0].firstChild.nodeValue;
                powerArrays[n].success = powers[n].getElementsByTagName("powerSuccess")[0].firstChild.nodeValue - 0;
                powerArrays[n].func = powers[n].getElementsByTagName("powerFunc")[0].firstChild.nodeValue;
                powerArrays[n].powerVar = powers[n].getElementsByTagName("powerVar")[0].firstChild.nodeValue - 0;
                powerArrays[n].other = powers[n].getElementsByTagName("powerOther")[0].firstChild.nodeValue;
                powerArrays[n].effect = powers[n].getElementsByTagName("effect")[0].firstChild.nodeValue;
		 }
		 //--精神力的XML读取并放到spiritArrays数组中，数组中的每一个元素都是一个精神力的对象----------------------
		 var spirits = xmlDoc8.getElementsByTagName("spirit");
         for (var i = 0; i < spirits.length; i++) {	
                spiritArrays[i] = new spirit(); //在class.js中有定义
                spiritArrays[i].id = spirits[i].getElementsByTagName("spiritId")[0].firstChild.nodeValue;
                spiritArrays[i].name = spirits[i].getElementsByTagName("spiritName")[0].firstChild.nodeValue;
                spiritArrays[i].img = spirits[i].getElementsByTagName("spiritImg")[0].firstChild.nodeValue;
                spiritArrays[i].gold = spirits[i].getElementsByTagName("spiritGold")[0].firstChild.nodeValue - 0;
                spiritArrays[i].discripe = spirits[i].getElementsByTagName("spiritDescription")[0].firstChild.nodeValue;
                spiritArrays[i].func = spirits[i].getElementsByTagName("spiritFunc")[0].firstChild.nodeValue;
                spiritArrays[i].spiritVar = spirits[i].getElementsByTagName("spiritVar")[0].firstChild.nodeValue - 0;
                spiritArrays[i].other = spirits[i].getElementsByTagName("spiritOther")[0].firstChild.nodeValue;
                spiritArrays[i].effect = spirits[i].getElementsByTagName("effect")[0].firstChild.nodeValue;				
         }
		 //把所有的装备初始化放入equipArrays数组中，数组中每个元素都是一个装备的对象
		 var equips=xmlDoc9.getElementsByTagName("equip");
		 for (var i = 0; i < equips.length; i++) {
		      equipArrays[i]=new equipZB();
              equipArrays[i].id=equips[i].getElementsByTagName("equipId")[0].firstChild.nodeValue-0;
			  equipArrays[i].name=equips[i].getElementsByTagName("equipName")[0].firstChild.nodeValue;
			  equipArrays[i].img=equips[i].getElementsByTagName("equipImg")[0].firstChild.nodeValue;
			  equipArrays[i].gold=equips[i].getElementsByTagName("equipGold")[0].firstChild.nodeValue-0;
			  equipArrays[i].discripe=equips[i].getElementsByTagName("equipDescription")[0].firstChild.nodeValue;
			  equipArrays[i].equipVar=equips[i].getElementsByTagName("equipVar")[0].firstChild.nodeValue-0;
			  equipArrays[i].func=equips[i].getElementsByTagName("equipFunc")[0].firstChild.nodeValue;
			  equipArrays[i].type=equips[i].getElementsByTagName("equipType")[0].firstChild.nodeValue-0;
		 }
		 //--把我方人物的items,skills,powers,spirit属性初始化-----------------------------------------------------------------------------------------------------
         for (var j = 0; j < rolesArray.length; j++) {
                var role = xmlDoc5.getElementById(rolesArray[j].id); //role获得相应的在Save.xml中的id
                var roleItem = role.getElementsByTagName("item"); //返回的是save.xml中的道具的数组
                var roleSkill = role.getElementsByTagName("skill"); //返回的是save.xml中的技能的数组
                var rolePower = role.getElementsByTagName("power"); //返回的是save.xml中的怒攻击的数组
				var roleSpirit = role.getElementsByTagName("spirit"); //返回的是save.xml中的怒攻击的数组
				
                for (var k = 0; k < roleItem.length; k++) {
                    rolesArray[j].items[k] = new item();
                    rolesArray[j].items[k].id = roleItem[k].getElementsByTagName("itemId")[0].firstChild.nodeValue;
                    rolesArray[j].items[k].num = roleItem[k].getElementsByTagName("itemNum")[0].firstChild.nodeValue - 0;
                }
                for (var l = 0; l < roleSkill.length; l++) {
                    rolesArray[j].skills[l] = roleSkill[l].getElementsByTagName("skillId")[0].firstChild.nodeValue;
                }
                for (var m = 0; m < rolePower.length; m++) {
                    rolesArray[j].powers[m] = rolePower[m].getElementsByTagName("powerId")[0].firstChild.nodeValue;
                }
				for (var n = 0; n < roleSpirit.length; n++) {
                    rolesArray[j].spirits[n] = new spirit();
                    rolesArray[j].spirits[n].id = roleSpirit[n].getElementsByTagName("spiritId")[0].firstChild.nodeValue;
					rolesArray[j].spirits[n].num = roleSpirit[n].getElementsByTagName("spiritNum")[0].firstChild.nodeValue-0;
                }
		 }		 
		 //初始化BOSS的技能
         for(var j = 0; j < enemysArray.length; j++){
        	
		       if(enemysArray[j].type==1){	
		    	   
				   //初始化BOSS的秘技(skills是一个数组，里面放的是编号)xmlDoc3
		    	   var enemyID1=enemysArray[j].id;
		    	   //alert("0."+enemysArray[j].name+"  "+enemyID1);
		    	   var enemysID2 = xmlDoc3.getElementById(enemyID1);
		           //alert("1."+enemysArray[j].name+"  "+enemysID2);
                   var enemySkill1=enemysID2.getElementsByTagName("skill"); 
                   //alert("2."+enemysArray[j].name+"  "+enemySkill1);
                   if(enemySkill1.length > 0){
		           for (var x = 0; x < enemySkill1.length; x++) {
		        	   var enemyrealls = new Array();
		        	   enemyrealls[x] = enemySkill1[0].getElementsByTagName("skillId")[0].firstChild.nodeValue - 0;         
		           //alert("3."+enemysArray[j].name+"  "+enemyrealls[x]);
		           }
				   enemysArray[j].skills = new Array();		
				   for (var l = 0; l < enemyrealls.length; l++) { 
                    enemysArray[j].skills[l] = enemyrealls[l];              
				   	}
                   }
				   //初始化BOSS的怒技(powers是一个数组，里面放的是编号)
				  
		   
                   var enemyPower1=enemysID2.getElementsByTagName("power");//节点 
                   //alert("2."+enemysArray[j].name+"  "+enemySkill1);
                   if(enemyPower1.length > 0){
		           for (var x = 0; x < enemyPower1.length; x++) {
		        	   var enemyrealls = new Array();
		        	   enemyrealls[x] = enemyPower1[0].getElementsByTagName("powerId")[0].firstChild.nodeValue - 0;         
		           //alert("3."+enemysArray[j].name+"  "+enemyrealls[x]);
		           }
				   enemysArray[j].powers = new Array();
				   //enemysArray[j].skills[0] = enemyrealls;
				   //alert("1."+enemysArray[j].name+"  "+enemysArray[j].skills[0]);
				   for (var l = 0; l < enemyrealls.length; l++) { 
                    enemysArray[j].powers[l] = enemyrealls[l];
                   //alert("1."+enemysArray[j].name+"  "+enemysArray[j].skills[l]);					
				   	}
                   }
			   }
		 }
		 count = 1;	
		 pass=mapObstancle[0];
    } //200
  }//4
}
/*
读取等级 xmlHttp12==LevelShow.xml
*/
function requestLevel(){
    if (window.ActiveXObject) {
       xmlHttp12 = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttp12 = new XMLHttpRequest();
    }
    xmlHttp12.onreadystatechange = readLevel;
    xmlHttp12.open("GET","xml/LevelShow.xml",true);
    xmlHttp12.send(null);	
}

function readLevel(){  
   if (xmlHttp12.readyState == 4) {
        if (xmlHttp12.status == 200) {
            var xmlDoc = xmlHttp12.responseXML;
			//获得LevelShow.xml中role id的节点
            var role= xmlDoc.getElementById(rolesArray[roleUpIndex].id); 
			//获得该role的level数组
	        var roleLevels = role.getElementsByTagName("level");
			//获得该role升级后的level
			var roleUpLevel=roleLevels[rolesArray[roleUpIndex].level-1];
            //更新role升级到下一级的经验
			//console.log("升级人物的当前等级"+Number(rolesArray[roleUpIndex].level));
			rolesArray[roleUpIndex].nextEXP=roleLevels[Number(rolesArray[roleUpIndex].level)].getElementsByTagName("exp")[0].firstChild.nodeValue;
			//获得要升级后要增加的属性
			//HP
			var roleAddHp=Number(roleUpLevel.getElementsByTagName("hp")[0].firstChild.nodeValue);
			rolesArray[roleUpIndex].addHP.push(roleAddHp);
			console.log("roleAddHp "+roleAddHp);
	        //SP
			var roleAddSp=Number(roleUpLevel.getElementsByTagName("sp")[0].firstChild.nodeValue);
			rolesArray[roleUpIndex].addSP.push(roleAddSp);
			console.log("roleAddSp "+roleAddSp);
			//mp
			var roleAddMp=Number(roleUpLevel.getElementsByTagName("mp")[0].firstChild.nodeValue);
			rolesArray[roleUpIndex].addMP.push(roleAddMp);
			console.log("roleAddMp "+roleAddMp);
			//speed
			var roleAddSpeed=Number(roleUpLevel.getElementsByTagName("speed")[0].firstChild.nodeValue);
			rolesArray[roleUpIndex].addSpeed.push(roleAddSpeed);
			console.log("roleAddSpeed "+roleAddSpeed);
			//ATK
			var roleAddATK=Number(roleUpLevel.getElementsByTagName("atk")[0].firstChild.nodeValue);
			rolesArray[roleUpIndex].addATK.push(roleAddATK);
			console.log("roleAddATK "+roleAddATK);
			//DEF
			var roleAddDEF=Number(roleUpLevel.getElementsByTagName("def")[0].firstChild.nodeValue);
			rolesArray[roleUpIndex].addDEF.push(roleAddDEF);
			console.log("roleAddDEF "+roleAddDEF);
			//MOV
			var roleAddmov=Number(roleUpLevel.getElementsByTagName("movement")[0].firstChild.nodeValue);
			rolesArray[roleUpIndex].addMOV.push(roleAddmov);
			console.log("roleAddmov "+roleAddmov);
            //info
		    levelupinfo=roleUpLevel.getElementsByTagName("info")[0].firstChild.nodeValue;
            console.log("levelupinfo "+levelupinfo);
			//计数升了几级
			++coutLev;
            //更新role的level
			++rolesArray[roleUpIndex].level;
			if(rolesArray[roleUpIndex].EXP>=rolesArray[roleUpIndex].nextEXP){
			   requestLevel();
			}
			else{
				var s = "lvl+" + coutLev;
				var t = new text(s, rolesArray[roleUpIndex].mapX, rolesArray[roleUpIndex].mapY + 1 / 2 * rpx,rolesArray[roleUpIndex].mapX, rolesArray[roleUpIndex].mapY + 1 / 2 * rpx, "rgb(153,50,204)", "bold 20px KaiTi");
				var RecoverShow = new pic(rolesArray[roleUpIndex].mapX - rpx, rolesArray[roleUpIndex].mapY - rpx, rolesArray[roleUpIndex].mapX - rpx, rolesArray[roleUpIndex].mapY - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, lvlup);
				attackShow.push(t);
				attackShow.push(RecoverShow);
				var lt = setInterval(function() {
					t.mapY--;
					if (RecoverShow.dx < 4900) {
						RecoverShow.dx += 350;
					} else {
						RecoverShow.dx = 0;
					}
					//drawAll();
					if (t.mapY == rolesArray[roleUpIndex].mapY) {
						clearInterval(lt);
						clearArray(attackShow);
					}
				},
				75);
			}
			levelUpOk = true;//用来判断XML有没有读取完，读取完了为True
		}
    }
}



/*
	对话事件内容的读取
说明：xmlHttp===Dialog.xml，
*/
function request1() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    xmlHttp.onreadystatechange = change1;
    xmlHttp.open("GET", "xml/Dialog.xml", true);
    xmlHttp.send(null);
}
function change1() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            var xmlDoc = xmlHttp.responseXML;
            var dialog = xmlDoc.getElementById(dialogContentId); // dialog获取xml/Dialog.xml中的id=1这个节点
            var content = dialog.getElementsByTagName("content");
			clearArray(dialogString);
            for (var i = 0; i < content.length; i++) {
                dialogString[i] = new Array();
                dialogString[i][0] = content[i].getElementsByTagName("characterName")[0].firstChild.nodeValue;
                dialogString[i][1] = content[i].getElementsByTagName("sentence")[0].firstChild.nodeValue;
            }
            finish = true;//用来判断XML有没有读取完，读取完了为True
        }
    }
}

/*
游戏存档
*/
var xmlHttp10;
function saveRequest() {
    if (window.ActiveXObject) {
        xmlHttp10 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttp10 = new XMLHttpRequest();
    }
}
//点击保存按钮的时候触发
function saveData(){
	 var saveObject = getSaveObject();//得到实例化的对象
	 //Use the JSON JavaScript library to stringify the Car object
	 var saveObjectAsJSON = JSON.stringify(saveObject);
	 console.log("saveobject as JSON:\n " + saveObjectAsJSON);
	 //发送到服务器端的时候会去找lib/web,xml下的映射，通过映射来调用对应的servlet
	 var url = "hello";
	 saveRequest();
	 xmlHttp10.open("POST", url, true);
	 xmlHttp10.onreadystatechange = handleSaveState;
	 xmlHttp10.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	 xmlHttp10.send(saveObjectAsJSON);
}
function data_object(count,mapLevel,mapSx,mapSy,mapMovX,mapMovY){
	this.count=count;// 回合
	this.mapLevel=mapLevel;
	this.mapSx=mapSx;//地图的X坐标
	this.mapSy=mapSy;//地图的Y坐标
	this.mapMovX=mapMovX;
	this.mapMovY=mapMovY;
}
function kaiGuan_object(bigMapoption){
	this.bigMapoption=bigMapoption;
}
//要保存的类
function saveObject(){
	this.roles=new Array();
	this.enemys=new Array();
	this.data;
	this.kaiGuan;
}

//得到要发送的数据对象
function getSaveObject(){
	var saveobject=new saveObject();
	for(var i=0;i<rolesArray.length;i++){
		saveobject.roles.push(rolesArray[i]);
	}
	for(var i=0;i<enemysArray.length;i++){
		saveobject.enemys.push(enemysArray[i]);
	}
	saveobject.data=new data_object(count,mapLevel,bg.sx,bg.sy,mapMovX,mapMovY);
	saveobject.kaiGuan=new kaiGuan_object(bigMapoption);
	return saveobject;
}

//发送请求的处理函数
function handleSaveState() {
  if(xmlHttp10.readyState == 4) {
      if(xmlHttp10.status == 200) {
         
      }
  }
}
/*
 加载游戏数据
*/
var xmlHttp11;
function loadDataRequest() {
    if (window.ActiveXObject) {
    	xmlHttp11 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
    	xmlHttp11 = new XMLHttpRequest();
    }
}
function loadData(){
	loadDataRequest(); 
    xmlHttp11.onreadystatechange = getLoadData; 
    xmlHttp11.open("GET", "xml/saveData.xml", true);
    xmlHttp11.send(null);	
}
function getLoadData(){
	  if(xmlHttp11.readyState == 4) {
	      if(xmlHttp11.status == 200) {	    	
	    	  var xmlDoc = xmlHttp11.responseXML;
	    	  var roles= xmlDoc.getElementsByTagName("role");
	    	  while (rolesArray.length > 0) {rolesArray.pop();}    	
	    	  var enemys= xmlDoc.getElementsByTagName("enemy");	
	    	  while (enemysArray.length > 0) {enemysArray.pop();}	    	  
	    	  for (var i = 0; i < roles.length; i++){
	    		  rolesArray[i]=new roleInfo();
	    		  rolesArray[i].id = roles[i].getElementsByTagName("id")[0].firstChild.nodeValue - 0;
	              rolesArray[i].sx = roles[i].getElementsByTagName("sx")[0].firstChild.nodeValue - 0; 
	              rolesArray[i].sy = roles[i].getElementsByTagName("sy")[0].firstChild.nodeValue - 0; 
	              rolesArray[i].mapX = roles[i].getElementsByTagName("mapX")[0].firstChild.nodeValue - 0; 
	              rolesArray[i].mapY = roles[i].getElementsByTagName("mapY")[0].firstChild.nodeValue - 0; 
	              rolesArray[i].dx = roles[i].getElementsByTagName("dx")[0].firstChild.nodeValue - 0;
	              rolesArray[i].dy = roles[i].getElementsByTagName("dy")[0].firstChild.nodeValue - 0;
	              rolesArray[i].sw = roles[i].getElementsByTagName("sw")[0].firstChild.nodeValue - 0;
	              rolesArray[i].sh = roles[i].getElementsByTagName("sh")[0].firstChild.nodeValue - 0;
	              rolesArray[i].dw = roles[i].getElementsByTagName("dw")[0].firstChild.nodeValue - 0;
	              rolesArray[i].dh = roles[i].getElementsByTagName("dh")[0].firstChild.nodeValue - 0;
	              rolesArray[i].name = roles[i].getElementsByTagName("name")[0].firstChild.nodeValue;
	              rolesArray[i].img = roles[i].getElementsByTagName("img")[0].firstChild.nodeValue;	              
	              rolesArray[i].halfBody = roles[i].getElementsByTagName("halfBody")[0].firstChild.nodeValue;	              
	              rolesArray[i].HP = roles[i].getElementsByTagName("HP")[0].firstChild.nodeValue - 0;              
	              rolesArray[i].fullHP = roles[i].getElementsByTagName("fullHP")[0].firstChild.nodeValue - 0;              
	              rolesArray[i].MP = roles[i].getElementsByTagName("MP")[0].firstChild.nodeValue - 0;              
	              rolesArray[i].fullMP = roles[i].getElementsByTagName("fullMP")[0].firstChild.nodeValue - 0;              
	              rolesArray[i].pow = roles[i].getElementsByTagName("pow")[0].firstChild.nodeValue - 0;              
	              rolesArray[i].fullPow =roles[i].getElementsByTagName("fullPow")[0].firstChild.nodeValue - 0;
	              rolesArray[i].equipSkill = roles[i].getElementsByTagName("equipSkill")[0].firstChild.nodeValue- 0;
	              rolesArray[i].furySkill = roles[i].getElementsByTagName("furySkill")[0].firstChild.nodeValue- 0;
	              rolesArray[i].SP = roles[i].getElementsByTagName("SP")[0].firstChild.nodeValue- 0;
	              rolesArray[i].fullSP =roles[i].getElementsByTagName("fullSP")[0].firstChild.nodeValue- 0;
	              rolesArray[i].movement = roles[i].getElementsByTagName("movement")[0].firstChild.nodeValue - 0;
	              rolesArray[i].speed = roles[i].getElementsByTagName("speed")[0].firstChild.nodeValue- 0;
	              rolesArray[i].ATK = roles[i].getElementsByTagName("ATK")[0].firstChild.nodeValue - 0;
	              rolesArray[i].range = roles[i].getElementsByTagName("range")[0].firstChild.nodeValue- 0;
	              rolesArray[i].DEF = roles[i].getElementsByTagName("DEF")[0].firstChild.nodeValue- 0;
	              rolesArray[i].EXP = roles[i].getElementsByTagName("EXP")[0].firstChild.nodeValue- 0;
	              rolesArray[i].nextEXP = roles[i].getElementsByTagName("nextEXP")[0].firstChild.nodeValue- 0;
	              rolesArray[i].level = roles[i].getElementsByTagName("level")[0].firstChild.nodeValue - 0;
	              rolesArray[i].errorRate = roles[i].getElementsByTagName("errorRate")[0].firstChild.nodeValue - 0;
	              rolesArray[i].doubleCRI = roles[i].getElementsByTagName("doubleCRI")[0].firstChild.nodeValue - 0;
	              rolesArray[i].tripleCRI = roles[i].getElementsByTagName("tripleCRI")[0].firstChild.nodeValue - 0;
	              rolesArray[i].spiritJueSha = roles[i].getElementsByTagName("spiritJueSha")[0].firstChild.nodeValue - 0;
	              rolesArray[i].spiritSheSha = roles[i].getElementsByTagName("spiritSheSha")[0].firstChild.nodeValue - 0;
	              rolesArray[i].spiritShanBi = roles[i].getElementsByTagName("spiritShanBi")[0].firstChild.nodeValue - 0;
	              rolesArray[i].spiritShenXing = roles[i].getElementsByTagName("spiritShenXing")[0].firstChild.nodeValue - 0;
	              rolesArray[i].not_sure_use_ShenXing = roles[i].getElementsByTagName("not_sure_use_ShenXing")[0].firstChild.nodeValue - 0;
	              rolesArray[i].has_use_ShenXing = roles[i].getElementsByTagName("has_use_ShenXing")[0].firstChild.nodeValue - 0;
	              rolesArray[i].walk = roles[i].getElementsByTagName("walk")[0].firstChild.nodeValue - 0;
	              rolesArray[i].has_walk = roles[i].getElementsByTagName("has_walk")[0].firstChild.nodeValue - 0;
	              rolesArray[i].skills = new Array();
	              rolesArray[i].powers = new Array();
	              rolesArray[i].items = new Array();
	              rolesArray[i].spirits = new Array();
	              
	              //从XML中读取新的skillID存入	            
	              var roleskills=roles[i].getElementsByTagName("skill");
	              for(var n=0;n<roleskills.length;n++){
	            	  var skillID=roleskills[n].getElementsByTagName("skillId")[0].firstChild.nodeValue- 0;
	            	  rolesArray[i].skills.push(skillID);
	              }
	             
	              //从XML中读取新的powerID存入	           
	              var rolepowers=roles[i].getElementsByTagName("power");
	              for(var n=0;n<rolepowers.length;n++){
	            	  var powerID=rolepowers[n].getElementsByTagName("powerId")[0].firstChild.nodeValue- 0;
	            	  rolesArray[i].powers.push(powerID);
	              }    
	              
	              //从XML中读取新的id,num存入
	              var roleitems=roles[i].getElementsByTagName("item");	           
	              for (var n = 0; n < roleitems.length; n++) {
	                  rolesArray[i].items[n] = new item();	                  	           
	                  rolesArray[i].items[n].id = roleitems[n].getElementsByTagName("itemId")[0].firstChild.nodeValue- 0;	                  
	                  rolesArray[i].items[n].num =roleitems[n].getElementsByTagName("itemNum")[0].firstChild.nodeValue- 0;	            
	              }	              
	              //从XML中读取新的id,num存入
	              var rolespirits=roles[i].getElementsByTagName("spirit");
	              for (var n = 0; n < rolespirits.length; n++) {
	            	  rolesArray[i].spirits[n] = new spirit();
	                  rolesArray[i].spirits[n].id = rolespirits[n].getElementsByTagName("spiritId")[0].firstChild.nodeValue- 0;
					  rolesArray[i].spirits[n].num = rolespirits[n].getElementsByTagName("spiritNum")[0].firstChild.nodeValue- 0;
	              }	        
	    	  }	  
	    	  
	    	  for (var i = 0; i < enemys.length; i++){
	    		  enemysArray[i] = new enemyInfo();
	    		  enemysArray[i].id = enemys[i].getElementsByTagName("id")[0].firstChild.nodeValue- 0;
	              enemysArray[i].sx = enemys[i].getElementsByTagName("sx")[0].firstChild.nodeValue- 0;
	              enemysArray[i].sy = enemys[i].getElementsByTagName("sy")[0].firstChild.nodeValue- 0;
	              enemysArray[i].mapX = enemys[i].getElementsByTagName("mapX")[0].firstChild.nodeValue- 0;
	              enemysArray[i].mapY = enemys[i].getElementsByTagName("mapY")[0].firstChild.nodeValue- 0;	
	              enemysArray[i].dx = enemys[i].getElementsByTagName("dx")[0].firstChild.nodeValue- 0;
	              enemysArray[i].dy = enemys[i].getElementsByTagName("dy")[0].firstChild.nodeValue- 0;
	              enemysArray[i].sw = enemys[i].getElementsByTagName("sw")[0].firstChild.nodeValue- 0;
	              enemysArray[i].sh = enemys[i].getElementsByTagName("sh")[0].firstChild.nodeValue- 0;
	              enemysArray[i].dw = enemys[i].getElementsByTagName("dw")[0].firstChild.nodeValue- 0;
	              enemysArray[i].dh = enemys[i].getElementsByTagName("dh")[0].firstChild.nodeValue- 0;
	              enemysArray[i].name = enemys[i].getElementsByTagName("name")[0].firstChild.nodeValue;
	              enemysArray[i].img = enemys[i].getElementsByTagName("img")[0].firstChild.nodeValue;
	              enemysArray[i].halfBody = enemys[i].getElementsByTagName("halfBody")[0].firstChild.nodeValue;
	              enemysArray[i].HP = enemys[i].getElementsByTagName("HP")[0].firstChild.nodeValue - 0;
	              enemysArray[i].fullHP = enemys[i].getElementsByTagName("fullHP")[0].firstChild.nodeValue - 0;
	              enemysArray[i].MP = enemys[i].getElementsByTagName("MP")[0].firstChild.nodeValue - 0;
	              enemysArray[i].fullMP = enemys[i].getElementsByTagName("fullMP")[0].firstChild.nodeValue - 0;
	              enemysArray[i].pow = enemys[i].getElementsByTagName("pow")[0].firstChild.nodeValue - 0;
	  			  enemysArray[i].fullPow= enemys[i].getElementsByTagName("fullPow")[0].firstChild.nodeValue - 0;
	              enemysArray[i].equipSkill = enemys[i].getElementsByTagName("equipSkill")[0].firstChild.nodeValue- 0;
	              enemysArray[i].furySkill = enemys[i].getElementsByTagName("furySkill")[0].firstChild.nodeValue- 0;
	              enemysArray[i].SP = enemys[i].getElementsByTagName("SP")[0].firstChild.nodeValue- 0;
	              enemysArray[i].movement = enemys[i].getElementsByTagName("movement")[0].firstChild.nodeValue - 0;
	              enemysArray[i].speed = enemys[i].getElementsByTagName("speed")[0].firstChild.nodeValue- 0;
	              enemysArray[i].ATK = enemys[i].getElementsByTagName("ATK")[0].firstChild.nodeValue - 0;
	              enemysArray[i].range = enemys[i].getElementsByTagName("range")[0].firstChild.nodeValue- 0;
	              enemysArray[i].DEF = enemys[i].getElementsByTagName("DEF")[0].firstChild.nodeValue- 0;
	              enemysArray[i].EXP = enemys[i].getElementsByTagName("EXP")[0].firstChild.nodeValue- 0;
	              enemysArray[i].level = enemys[i].getElementsByTagName("level")[0].firstChild.nodeValue - 0;
	              enemysArray[i].money = enemys[i].getElementsByTagName("money")[0].firstChild.nodeValue - 0;
	              enemysArray[i].errorRate = enemys[i].getElementsByTagName("errorRate")[0].firstChild.nodeValue - 0;
	              enemysArray[i].doubleCRI = enemys[i].getElementsByTagName("doubleCRI")[0].firstChild.nodeValue - 0;
	              enemysArray[i].tripleCRI = enemys[i].getElementsByTagName("tripleCRI")[0].firstChild.nodeValue - 0;
	  			  enemysArray[i].type = enemys[i].getElementsByTagName("type")[0].firstChild.nodeValue - 0;
	  			  enemysArray[i].skills = new Array();
	  			  enemysArray[i].powers = new Array();
	  			  if(enemysArray[i].type==1){					
	  				 //从XML中读取新的skillID存入  						           
		              var enemyskills=enemys[i].getElementsByTagName("skill");
		              for(var n=0;n<enemyskills.length;n++){
		            	  var skillID=enemyskills[n].getElementsByTagName("skillId")[0].firstChild.nodeValue- 0;
		            	  enemysArray[i].skills.push(skillID);
		              }
		              //从XML中读取新的skillID存入		             
		              var enemypowers=enemys[i].getElementsByTagName("power");
		              for(var n=0;n<enemypowers.length;n++){
		            	  var powerID=enemypowers[n].getElementsByTagName("powerId")[0].firstChild.nodeValue- 0;
		            	  enemysArray[i].powers.push(powerID);
		              }
	  			  }
	    	  }
	    	  //加载数据
	    	  var data= xmlDoc.getElementsByTagName("data");
	    	  count=data[0].getElementsByTagName("count")[0].firstChild.nodeValue - 0;
	    	  mapLevel=data[0].getElementsByTagName("mapLevel")[0].firstChild.nodeValue - 0;
	    	  bg.sx=data[0].getElementsByTagName("mapSx")[0].firstChild.nodeValue - 0;
	    	  bg.sy=data[0].getElementsByTagName("mapSy")[0].firstChild.nodeValue - 0;
	    	  mapMovX=data[0].getElementsByTagName("mapMovX")[0].firstChild.nodeValue - 0;
	    	  mapMovY=data[0].getElementsByTagName("mapMovY")[0].firstChild.nodeValue - 0;
	    	  //加载开关
	    	  var kaiGuan= xmlDoc.getElementsByTagName("kaiGuan");
	    	  bigMapoption=kaiGuan[0].getElementsByTagName("bigMapoption")[0].firstChild.nodeValue;
	    	  if(bigMapoption=="true"){bigMapoption=true;}
	    	  else{bigMapoption=false;}
	    	  //打开游戏界面
	    	 
	    	  setTimeout(function() {
	    		  if(bigMapoption){	
	    			  showStart = false;
	    			  bigMapAudio.currentTime=3;bigMapAudio.play();
	    			  big_map(0);
	    		  }else{
	    			  showStart = false;
	    			  ourTurn.play();
	    			  if(mapLevel==2){ bgImage.src="image/map/map2.jpg";pass=pass2;}
				
		        //      drawAll();	
	    		  } 				
	            },
	            200);
	    	  
	      }
	  }
}


