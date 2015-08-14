/*
	说明：先在Class,js中定义，然后在这里实例化对象（OK）
*/

//-------------------------------------------------------------------------------------

var rec;// = new box(0, 0, rpx, rpx, "rgb(0,255,0)"); //实例化鼠标移动时方框
var mrec;// = new box(0, 0, rpx * 4, rpx, "rgb(0,255,0)"); //实例化菜单中选项方框
var menu;// = new picture(0, 4 * rpx, rpx * 4, rpx * 8, menuImage); //实例化人物菜单
var menu2;// = new picture(0, 5 * rpx, rpx * 4, rpx * 4, menuImage); //实例化主菜单
//---------------单一的图片---
var bgImage = new Image(); //地图，地图的SRC在ReadXml.js中有定义
var dialogRoleImage = new Image(); //对话事件人物半身像
var loadPicArr=new Array();//放图片对象
var loadPicArrSrc=new Array();//放图片地址
//-------------------------------------------------------------------------------------------------------------------

var lvlup=new Image();//升级的效果
lvlup.src="image/effect/10.png";
var getAlive=new Image();//复活的效果
getAlive.src="image/effect/6.png";
var GuanKa = new Image();//关卡的动画
GuanKa.src="image/effect/GK.png";
/*
var startImage = new Image();//背景图片
startImage.src="image/background/StartShow.png";
var xdlc = new Image();//新的旅程按钮
xdlc.src="image/button/Xdlc.png";
var jdhy = new Image();//旧的回忆按钮
jdhy.src= "image/button/Jdhy.png";
var tyjh = new Image();//退隐江湖按钮
tyjh.src="image/button/Tyjh.png";


var bigMap = new Image();//大地图图片
bigMap.src = "image/map/bigmap.jpg";
var smallMap= new Image();//大地图上关卡的图片
smallMap.src = "image/map/smallmap.png";
var DJSD=new Image();//道具商店的背景
DJSD.src="image/background/DJSD.png";
var DYBJ=new Image();//队伍信息的背景
DYBJ.src="image/background/DYBJ.png";
var SuoMing=new Image();//说明图片的按钮
SuoMing.src="image/background/SuoMing.png";
var ZBZL=new Image();//装备整理按钮
ZBZL.src="image/background/ZBZL.png";
var MJZL=new Image();//密技整理按钮
MJZL.src="image/background/MJZL.png";
var NJZL=new Image();//怒技整理按钮
NJZL.src="image/background/NJZL.png";
var DJZL=new Image();//道具整理按钮
DJZL.src="image/background/DJZL.png";
var UI_butto=new Image();//大地图的功能按钮
UI_butto.src="image/button/UI_butto.png";

var game_over=new Image();//游戏结束的图片
game_over.src="image/background/gameover.jpg"; 
var jiazai=new Image();//加载按钮的图片
jiazai.src="image/button/jia_zai.jpg"; 
var fanHui=new Image();//返回按钮的图片
fanHui.src="image/button/fan_hui.jpg"; 

var levelBG=new Image();//升级的背景
levelBG.src = "image/background/levelBG.jpg";
var lvtitleBG=new Image();//升级的放人物姓名的图片
lvtitleBG.src = "image/background/LVtitle.png";

var loadpic= new Image();//加载的图片
loadpic.src = "image/background/loadpic.png";
var loadline= new Image();//加载的线
loadline.src = "image/background/loadline.png";
var statusShowBg = new Image();//人物信息的背景显示
statusShowBg.src = "image/background/Rwzt.png";
var spirit_Bg=new Image();//精神力的图片
spirit_Bg.src="image/background/spirit_bg.png"; 
var image1 = new Image(); //胜败条件框
image1.src = "image/background/Kk.png";
var menuImage = new Image(); //人物菜单
menuImage.src = "image/background/Menu.png"; 
var dialogBoxImage = new Image(); //对话事件背景图片
dialogBoxImage.src = "image/background/Dialog.png";
var infoShowBg = new Image(); //人物状态背景图片
infoShowBg.src = "image/background/Info.png"; 
var renWuBeiJing=new Image();//人物背景的图片
renWuBeiJing.src = "image/background/RWBJ.png";

var Dz=  new Image();//地震图片
Dz.src = "image/halfbody/Dz.png";
var Lqs=  new Image();//主角图片
Lqs.src = "image/halfbody/Lqs.png";
var Lj=  new Image();//亮剑图片
Lj.src = "image/halfbody/Lj.png";
var Kj=  new Image();//快剑图片
Kj.src = "image/halfbody/Kj.png";

var Dxc=  new Image();//大效草图片
Dxc.src = "image/item/Dxc.png";
var Dbw=  new Image();//大补丸图片
Dbw.src = "image/item/Dbw.png";
var Fhc=  new Image();//复活草图片
Fhc.src = "image/item/Fhc.png";

var Chdf = new Image();//残魂大法图片
Chdf.src = "image/skill/Chdf.jpg";
var Lhfs = new Image();//烈火焚身图片
Lhfs.src = "image/skill/Lhfs.jpg";

var Cstd = new Image();//残食天地图片
Cstd.src = "image/skill/Cstd.jpg";
var Lhz = new Image();//烈火掌图片
Lhz.src = "image/skill/Lhz.jpg";

var Huichun = new Image();//回春图片
Huichun.src = "image/spirit/Huichun.jpg";
var Juesha  = new Image();//绝杀图片
Juesha.src = "image/spirit/Juesha.jpg";
var Shanbi  = new Image();//闪避图片
Shanbi.src = "image/spirit/Shanbi.jpg";
var Shesha  = new Image();//神杀图片
Shesha.src = "image/spirit/Shesha.jpg";
var Shexing = new Image();//神行图片
Shexing.src = "image/spirit/Shexing.jpg";

var confirm=new Image();//确认按钮
confirm.src="image/background/Confirm.png";
var close = new Image(); //右上角关掉的按钮
close.src = "image/button/Close.png"; 
var zjt = new Image();//左箭头按钮图片
zjt.src = "image/button/Jt1.png"; 
var yjt = new Image();//右箭头按钮图片
yjt.src = "image/button/Jt2.png";
var mj1 = new Image();//秘技按钮图片
mj1.src = "image/button/Mj1.png"; 
var mj2 = new Image();//秘技按钮图片
mj2.src = "image/button/Mj2.png";
var nj1 = new Image();//怒技按钮图片
nj1.src = "image/button/Nj1.png"; 
var nj2 = new Image();//怒技按钮图片
nj2.src = "image/button/Nj2.png"; 
var zb1 = new Image();//装备按钮图片
zb1.src = "image/button/Zb1.png"; 
var zb2 = new Image();//装备按钮图片
zb2.src = "image/button/Zb2.png";
var qd = new Image(); //确定按钮
qd.src = "image/button/Qd.png"; 
var qx = new Image(); //取消按钮
qx.src = "image/button/Qx.png"; 

var c2 = []; //单击空白处（没点在人物上的）跳出的菜单，就是主菜单
for (var j = 0; j < 5; j++) {
    c2[j] = new Image();
}

var c1 = [];//人物菜单各个选项图片，走近时弹出的菜单，c1用来放人物菜单的各个对象
for (var i = 0; i < 8; i++) {
		c1[i] = new Image();
}

var c3 = [];//实例化鼠标移动到系统控制弹出来的菜单
for (var i = 0; i < 3; i++) {
		c3[i] = new Image();
}
c1[0].src = "image/menu/C11.png";
c1[1].src = "image/menu/C12.png";
c1[2].src = "image/menu/C13.png";
c1[3].src = "image/menu/C14.png";
c1[4].src = "image/menu/C15.png";
c1[5].src = "image/menu/C16.png";
c1[6].src = "image/menu/C17.png";
c1[7].src = "image/menu/C18.png";
c2[0].src = "image/menu/C21.png";
c2[1].src = "image/menu/C22.png";	
c2[2].src = "image/menu/C23.png";
c2[3].src = "image/menu/C24.png";
c2[4].src = "image/menu/C25.png";
c3[0].src = "image/menu/C26.png";
c3[1].src = "image/menu/C27.png";
c3[2].src = "image/menu/C28.png";
*/	

var menu3C=[];//鼠标移到系统设置跳出的三张图片
var menu2C = [];//放点击空白的时候跳出的主菜单
var menuC = [];//放人物走近的时候跳出的人物菜单


//--------------music----------------------
var begin =new Audio();//开始的音乐
	begin.src ='music/begin.mp3';
var gamebgShow =new Audio();//游戏背景介绍的背景音乐
    gamebgShow.src ='music/gamebgShow.mp3';
var recoverHP=new Audio();//补血的音效
    recoverHP.src ='music/HealTarget.mp3';
var putongattack=new Audio();//攻击的音效
    putongattack.src ='music/putongattack.mp3';	
var enemyTurn=new Audio();//敌方行动
    enemyTurn.src='music/enemy.mp3';	
var ourTurn=new Audio();//我方行动
    ourTurn.src='music/our_turn.mp3';
var bigMapAudio=new Audio();//大地图的音效
    bigMapAudio.src='music/bigmap.mp3';

//--------------------------------------------
function picOnload(){
/*
 首页的图片
*/
	startImage = new Image();//背景图片
	startImage.src="image/background/StartShow.png";
	xdlc = new Image();//新的旅程按钮
	xdlc.src="image/button/Xdlc.png";
	jdhy = new Image();//旧的回忆按钮
	jdhy.src= "image/button/Jdhy.png";
	tyjh = new Image();//退隐江湖按钮
	tyjh.src="image/button/Tyjh.png";
/*
 大地图的图片
*/
	bigMap = new Image();//大地图图片
	bigMap.src = "image/map/bigmap.jpg";
	smallMap= new Image();//大地图上关卡的图片
	smallMap.src = "image/map/smallmap.png";
	DJSD=new Image();//道具商店的背景
	DJSD.src="image/background/DJSD.png";
	WQSD=new Image();//武器商店的背景
    WQSD.src="image/background/WQSD.png";
	DYBJ=new Image();//队伍信息的背景
	DYBJ.src="image/background/DYBJ.png";
	SuoMing=new Image();//说明图片的按钮
	SuoMing.src="image/background/SuoMing.png";
	ZBZL=new Image();//装备整理按钮
	ZBZL.src="image/background/ZBZL.png";
	MJZL=new Image();//密技整理按钮
	MJZL.src="image/background/MJZL.png";
	NJZL=new Image();//怒技整理按钮
	NJZL.src="image/background/NJZL.png";
	DJZL=new Image();//道具整理按钮
	DJZL.src="image/background/DJZL.png";
	UI_butto=new Image();//大地图的功能按钮
	UI_butto.src="image/button/UI_butto.png";
	CKZL=new Image();//仓库整理的图片
	CKZL.src="image/background/CKZL.png";
	titleOfCK=new Image();//仓库上按钮的图标
	titleOfCK.src="image/background/titleOfCangKu.png";
	CKSelect=new Image();//仓库上按钮的图标
	CKSelect.src="image/background/cangKuSelect.png";
	
/*
 死亡的画面
*/
	game_over=new Image();//游戏结束的图片
	game_over.src="image/background/gameover.jpg";
	jiazai=new Image();//加载按钮的图片
	jiazai.src="image/button/jia_zai.jpg"; 
	fanHui=new Image();//返回按钮的图片
	fanHui.src="image/button/fan_hui.jpg";
/*
 升级
*/
	levelBG=new Image();//升级的背景
	levelBG.src = "image/background/levelBG.jpg";
    lvtitleBG=new Image();//升级的放人物姓名的图片
	lvtitleBG.src = "image/background/LVtitle.png";
	levelUpShuoMing=new Image();//说明的背景
	levelUpShuoMing.src = "image/background/LVSM.png";
/*
 各种其他的背景
*/
	loadpic= new Image();//加载的图片
	loadpic.src = "image/background/loadpic.png";
	loadline= new Image();//加载的线
	loadline.src = "image/background/loadline.png";
	statusShowBg = new Image();//人物信息的背景显示
	statusShowBg.src = "image/background/Rwzt.png";
	spirit_Bg=new Image();//精神力的图片
	spirit_Bg.src="image/background/spirit_bg.png"; 
	image1 = new Image(); //胜败条件框
	image1.src = "image/background/Kk.png";
	menuImage = new Image(); //人物菜单
	menuImage.src = "image/background/Menu.png"; 
	dialogBoxImage = new Image(); //对话事件背景图片
	dialogBoxImage.src = "image/background/Dialog.png";
	infoShowBg = new Image(); //人物状态背景图片
	infoShowBg.src = "image/background/Info.png"; 
	renWuBeiJing=new Image();//人物背景的图片
	renWuBeiJing.src = "image/background/RWBJ.png";
/*
 半身像
*/
	Dz=  new Image();//地震图片
	Dz.src = "image/halfbody/Dz.png";
	Lqs=  new Image();//主角图片
	Lqs.src = "image/halfbody/Lqs.png";
	Xlh=new Image();//小烈火图片
	Xlh.src="image/halfbody/Xlh.png";
	Lj=  new Image();//亮剑图片
	Lj.src = "image/halfbody/Lj.png";
	Kj=  new Image();//快剑图片
	Kj.src = "image/halfbody/Kj.png";
	smallLqs=new Image();//林秋水的小头像
	smallLqs.src="image/halfbody/smallLqs.png";
/*
 道具
*/
	Dxc=  new Image();//大效草图片
	Dxc.src = "image/item/Dxc.png";
	Dbw=  new Image();//大补丸图片
	Dbw.src = "image/item/Dbw.png";
	Fhc=  new Image();//复活草图片
	Fhc.src = "image/item/Fhc.png";
/*
 装备
*/
    Qszj= new Image();//骑士之剑图片
    Qszj.src = "image/equip/QSZJ.jpg";
/*
 怒攻击
*/
	Chdf = new Image();//残魂大法图片
	Chdf.src = "image/skill/Chdf.jpg";
	Lhfs = new Image();//烈火焚身图片
	Lhfs.src = "image/skill/Lhfs.jpg";
/*
 秘技攻击
*/
	Cstd = new Image();//残食天地图片
	Cstd.src = "image/skill/Cstd.jpg";
	Lhz = new Image();//烈火掌图片
	Lhz.src = "image/skill/Lhz.jpg";
/*
 精神力
*/
	Huichun = new Image();//回春图片
	Huichun.src = "image/spirit/Huichun.jpg";
	Juesha  = new Image();//绝杀图片
	Juesha.src = "image/spirit/Juesha.jpg";
	Shanbi  = new Image();//闪避图片
	Shanbi.src = "image/spirit/Shanbi.jpg";
	Shesha  = new Image();//神杀图片
	Shesha.src = "image/spirit/Shesha.jpg";
	Shexing = new Image();//神行图片
	Shexing.src = "image/spirit/Shexing.jpg";
/*
 各种按钮
*/
	confirm=new Image();//确认按钮
	confirm.src="image/background/Confirm.png";
	close = new Image(); //右上角关掉的按钮
	close.src = "image/button/Close.png"; 
	zjt = new Image();//左箭头按钮图片
	zjt.src = "image/button/Jt1.png"; 
	yjt = new Image();//右箭头按钮图片
	yjt.src = "image/button/Jt2.png";
	mj1 = new Image();//秘技按钮图片
	mj1.src = "image/button/Mj1.png"; 
	mj2 = new Image();//秘技按钮图片
	mj2.src = "image/button/Mj2.png";
	nj1 = new Image();//怒技按钮图片
	nj1.src = "image/button/Nj1.png"; 
	nj2 = new Image();//怒技按钮图片
	nj2.src = "image/button/Nj2.png"; 
	zb1 = new Image();//装备按钮图片
	zb1.src = "image/button/Zb1.png"; 
	zb2 = new Image();//装备按钮图片
	zb2.src = "image/button/Zb2.png";
	qd = new Image(); //确定按钮
	qd.src = "image/button/Qd.png"; 
	qx = new Image(); //取消按钮
	qx.src = "image/button/Qx.png";
	minus=new Image();//减的按钮
    minus.src="image/button/minus.png";
	add=new Image();//加的按钮
	add.src="image/button/add.png";
	imagehand=new Image();
	imagehand.src="image/button/hand.png";
/*
 菜单栏的按钮
*/
	c2 = []; //单击空白处（没点在人物上的）跳出的菜单，就是主菜单
	c1 = [];//人物菜单各个选项图片，走近时弹出的菜单，c1用来放人物菜单的各个对象
	c3 = [];//实例化鼠标移动到系统控制弹出来的菜单

 //首页
  loadPicArr.push(startImage);
  loadPicArr.push(xdlc);
  loadPicArr.push(jdhy);
  loadPicArr.push(tyjh);
 //大地图
  loadPicArr.push(bigMap);
  loadPicArr.push(smallMap);
  loadPicArr.push(DJSD);
  loadPicArr.push(WQSD);
  loadPicArr.push(DYBJ);
  loadPicArr.push(SuoMing);
  loadPicArr.push(ZBZL);
  loadPicArr.push(MJZL);
  loadPicArr.push(NJZL);
  loadPicArr.push(DJZL);
  loadPicArr.push(UI_butto);
 //死亡
  loadPicArr.push(game_over);
  loadPicArr.push(jiazai);
  loadPicArr.push(fanHui);
 //升级
  loadPicArr.push(levelBG);
  loadPicArr.push(lvtitleBG);
//其他各种背景
  loadPicArr.push(loadpic);
  loadPicArr.push(loadline);
  loadPicArr.push(statusShowBg);
  loadPicArr.push(spirit_Bg);
  loadPicArr.push(image1);
  loadPicArr.push(menuImage);
  loadPicArr.push(dialogBoxImage);
  loadPicArr.push(infoShowBg);
  loadPicArr.push(renWuBeiJing);
//半身像
  loadPicArr.push(Dz);
  loadPicArr.push(Lqs);
  loadPicArr.push(Xlh);
  loadPicArr.push(Lj);
  loadPicArr.push(Kj);
  loadPicArr.push(smallLqs);
//道具
  loadPicArr.push(Dxc);
  loadPicArr.push(Dbw);
  loadPicArr.push(Fhc);
//装备
  loadPicArr.push(Qszj);
//怒技
  loadPicArr.push(Chdf);
  loadPicArr.push(Lhfs);
//秘技
  loadPicArr.push(Cstd);
  loadPicArr.push(Lhz);
//精神力
  loadPicArr.push(Huichun);
  loadPicArr.push(Juesha);
  loadPicArr.push(Shanbi);
  loadPicArr.push(Shesha);
  loadPicArr.push(Shexing);
//各种按钮
  loadPicArr.push(confirm);
  loadPicArr.push(close);
  loadPicArr.push(zjt);
  loadPicArr.push(yjt);
  loadPicArr.push(mj1);
  loadPicArr.push(mj2);
  loadPicArr.push(nj1);
  loadPicArr.push(nj2);
  loadPicArr.push(zb1);
  loadPicArr.push(zb2);
  loadPicArr.push(qd);
  loadPicArr.push(qx);
  loadPicArr.push(minus);
  loadPicArr.push(add);
  loadPicArr.push(imagehand);
//菜单栏按钮
	for (var i = 0; i < 8; i++) {
		c1[i] = new Image();
	    loadPicArr.push(c1[i]);
	}
    for (var j = 0; j < 5; j++) {
        c2[j] = new Image();
	    loadPicArr.push(c2[j]);
    }
	for (var i = 0; i < 3; i++) {
		c3[i] = new Image();
		loadPicArr.push(c3[i]);
    }
	c1[0].src = "image/menu/C11.png";
	c1[1].src = "image/menu/C12.png";
	c1[2].src = "image/menu/C13.png";
	c1[3].src = "image/menu/C14.png";
	c1[4].src = "image/menu/C15.png";
	c1[5].src = "image/menu/C16.png";
	c1[6].src = "image/menu/C17.png";
	c1[7].src = "image/menu/C18.png";
	c2[0].src = "image/menu/C21.png";
	c2[1].src = "image/menu/C22.png";	
	c2[2].src = "image/menu/C23.png";
	c2[3].src = "image/menu/C24.png";
	c2[4].src = "image/menu/C25.png";
	c3[0].src = "image/menu/C26.png";
	c3[1].src = "image/menu/C27.png";
	c3[2].src = "image/menu/C28.png";
//整理一栏
	zhengLiButton=new pic(0,0,885,10,75,75,0,124,120,120,UI_butto);
	zhengLiButton1=new pic(0,0,885,10,70,70,124,124,120,120,UI_butto);
	daojuZLButton=new pic(0,0,810,6,75,75,0,0,120,120,UI_butto);
	zhuangbeiButton=new pic(0,0,735,6,75,75,0,372,120,120,UI_butto);
	nujiButton=new pic(0,0,585,6,75,75,0,1612,120,120,UI_butto);
	mijiButton=new pic(0,0,660,6,75,75,0,744,120,120,UI_butto);
	informaitionSow=new picture(0,0,685,76, 207,501, SuoMing);
	informaitionSow1=new picture(0,0,702,47, 207,501, SuoMing);
//队伍一栏
	duiWuButton=new pic(0,0,885,85,75,75,0,868,120,120,UI_butto);
	duiWuButton1=new pic(0,0,885,85,70,70,124,868,120,120,UI_butto);
	changkuButton=new pic(0,0,810,80,75,75,0,620,120,120,UI_butto);
	duiyuanButton=new pic(0,0,735,80,75,75,0,1240,120,120,UI_butto);
//商店一栏
	shangDianButton=new pic(0,0,885,160,75,75,0,1364,120,120,UI_butto);
	shangDianButton1=new pic(0,0,885,160,70,70,124,1364,120,120,UI_butto);
	daojuStore=new pic(0,0,810,160,75,75,0,1488,120,120,UI_butto);
	wuqiStore=new pic(0,0,735,160,75,75,0,1116,120,120,UI_butto);
//系统一栏
	systemButton=new pic(0,0,885,235,75,75,0,1860,120,120,UI_butto);
	systemButton1=new pic(0,0,885,235,70,70,124,1860,120,120,UI_butto);
	CDButton=new pic(0,0,810,235,75,75,0,248,120,120,UI_butto);
	JZButton=new pic(0,0,735,235,75,75,0,496,120,120,UI_butto);
	TCButton=new pic(0,0,660,235,75,75,0,1736,120,120,UI_butto);
//大地图
	smallLQS=new picture(0,0,40,170,50,50,smallLqs);//40,170;140,205
	bigBg = new picture(0,0,0, 0, 960, 576, bigMap);
	level_1=new pic(0,0,0,144,100,100,0,0,100,100,smallMap);
	level_2=new pic(0,0,100,180,100,100,100,0,100,100,smallMap);
	level_3=new pic(0,0,144,104,100,100,200,0,100,100,smallMap);
	level_4=new pic(0,0,240,80,100,100,300,0,100,100,smallMap);
	level_5=new pic(0,0,310,30,100,100,400,0,100,100,smallMap);
	level_6=new pic(0,0,450,0,100,100,0,100,100,100,smallMap);
	level_7=new pic(0,0,430,96,100,100,100,100,100,100,smallMap);
	level_8=new pic(0,0,370,160,100,100,200,100,100,100,smallMap);
	level_9=new pic(0,0,520,140,100,100,300,100,100,100,smallMap);
	level_10=new pic(0,0,600,100,100,100,400,100,100,100,smallMap);

//产生一个仓库	
	storehouse=new cangKu();
	
	rec = new box(0,0,0, 0, rpx, rpx, "rgb(0,255,0)"); //实例化鼠标移动时方框
	mrec = new box(0,0,0, 0, rpx * 4, rpx, "rgb(0,255,0)"); //实例化菜单中选项方框
	menu = new picture(0,2 * rpx,0, 2* rpx, rpx * 4, rpx * 8, menuImage); //实例化人物菜单
	menu2 = new picture(0, 4 * rpx,0, 4 * rpx, rpx * 4, rpx * 5, menuImage); //实例化主菜单
	menu3= new picture(rpx * 4,8* rpx,rpx * 4, 8* rpx, rpx * 4, rpx * 3, menuImage); //实例化主菜单
	for (var k = 0; k < 8; k++) { //实例化人物走近的时候跳出的人物菜单
	menuC[k] = new picture(0, menu.sy + k * rpx,0, menu.sy + k * rpx, menu.swidth, rpx, c1[k]);
	}
	for (var l = 0; l < 5; l++) { //实例化点击空白的时候跳出的主菜单
	menu2C[l] = new picture(0,menu2.sy + l * rpx,0, menu2.sy + l * rpx, menu2.swidth, rpx, c2[l]);
	}
	for(var m=0;m<3;m++){         //实例化鼠标移动到系统控制弹出来的菜单
		menu3C[m] = new picture(menu3.sx+m*rpx,menu3.sy + m* rpx,menu3.sx+m*rpx, menu3.sy + m* rpx, menu3.swidth, rpx, c3[m]);
	}
	
}//最外面的括号


//开始加载
var loadX=0;//380
var next=0;
var handle=0;
function progress(){
	picOnload();
	//开始音乐的播放
	begin.play();
	//xml数据请求
	startRequest();
    //var dElem = document.getElementById("canvas");
    //var dCtx = dElem.getContext('2d');
    //dCtx.drawImage(loadpic,0,0,960,576);
    //得到那个加载的点
    //dCtx.drawImage(loadline,410,15,40,30,loadX+265,380,40,30);
    //加载的进度条
    //dCtx.drawImage(loadline,0,20,loadX,20,286,380,loadX,20);
	drawProgress();
}
/*
function upload()
	{ 
	
	  if (handle) 
	  {
      window.cancelAnimationFrame(handle);
      handle = null;
      } 
      else {
		  
    	  drawProgress();
      }
}
*/	
	/*var addTime=0;        
        for(var i=0; i<loadPicArr.length; i++){	
		loadPicArr[i].onload = function()
		{
							setTimeout(function(){drawProgress();},  addTime);
							//增加等待时间，也就是说每加载一张就用等250ms
							addTime+=100;						
	    };
	    }	
}
*/
function drawProgress(){
	        next++;
			var dElem = document.getElementById("canvas");
            var dCtx = dElem.getContext('2d');
			loadX+=Math.floor(400/loadPicArr.length);
			 dCtx.drawImage(loadpic,0,0,960,576);
			//得到那个加载的点
			dCtx.drawImage(loadline,410,15,40,30,loadX+266,380,40,30);
			//加载的进度条
			dCtx.drawImage(loadline,0,20,loadX,20,286,385,loadX,20);
			
			if(next<loadPicArr.length)
			   handle = window.requestAnimationFrame(drawProgress);
			
			if(next==loadPicArr.length){
				next=0;
				loadX=0;
				     dCtx.clearRect(0, 0, canvasWidth, canvasHeight);
					  window.cancelAnimationFrame(handle);
			         console.log("图片一共加载"+next);
				  
				init();}
}

function nextProgress(){
	next++;
	var dElem = document.getElementById("canvas");
    var dCtx = dElem.getContext('2d');
    loadX+=Math.floor(400/loadPicArr.length);
    //得到那个加载的点
	
	        
		    //得到那个加载的点
		    //dCtx.clearRect(0, 0, canvasWidth, canvasHeight);
		    dCtx.drawImage(loadpic,0,0,960,576);
			dCtx.drawImage(loadline,410,15,40,30,loadX+260,380,40,30);
			//加载的进度条
			dCtx.drawImage(loadline,0,20,loadX,20,286,385,loadX,20);
			if(next<loadPicArr.length)
			   handle = window.requestAnimationFrame(nextProgress);
			
			if(next==loadPicArr.length){
				next=0;
				loadX=0;
				     dCtx.clearRect(0, 0, canvasWidth, canvasHeight);
					  window.cancelAnimationFrame(handle);
					  bigMapoption=false;nextloading=false;openBigMap=false;
					  pass=mapObstancle[mapLevel-1];
			          showMapName();
					  
			}
				  
			//alert(openBigMap);
			/*var tt=setInterval(function()
			{if(loadX==390){
				clearInterval(tt);bigMapoption=false;nextloading=false;openBigMap=false;
				pass=mapObstancle[mapLevel-1];
				drawAll();
				showMapName();
			}
	},200);*/
	

}

