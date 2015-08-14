
/*
说明：定义各个类，类的成员数据和成员方法(OK)
*/
/*
 商店
*/
function myStore(){
 this.items=[];
 this.equips=[];
}
/*
  仓库类
*/
function cangKu(){
    this.additems=[];//道具的仓库
	this.addpowers=[];//怒技的仓库
	this.addskills=[];//秘技的仓库
	this.addequips=[];//装备的仓库
	this.tempArr=[];//临时数组，放中转的东西，没有实际用处

}
/*
	方框类
*/
function box(mapX,mapY,sx, sy, swidth, sheight, stylestring) {
	this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx; //x轴坐标
    this.sy = sy; //y轴坐标
    this.swidth = swidth; //宽度
    this.sheight = sheight; //高度
    this.strokestyle = stylestring; //颜色
    this.draw = drawBox; //绘制方法,在Draw.js中定义
}
/*
	方格类
*/
function rectangle(mapX,mapY,sx, sy, swidth, sheight, stylestring) {
	this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx;
    this.sy = sy;
    this.swidth = swidth;
    this.sheight = sheight;
    this.fillstyle = stylestring;
    this.draw = drawRect;
}
/*
	圆角线条
*/
function round(sx, sy, swidth, sheight, stylestring) {
    this.sx = sx;
    this.sy = sy;
    this.swidth = swidth;
    this.sheight = sheight;
    this.fillstyle = stylestring;
    this.draw = drawRound;
}
/*
	文本类
*/
function text(name, mapX,mapY,sx, sy, stylestring, fontstring) {
    this.name = name;
	this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx;
    this.sy = sy;
    this.fillstyle = stylestring;
    this.fonts = fontstring; //字体类型
    this.draw = drawText;
}
/*
	图片类
*/
function picture(mapX,mapY,sx, sy, swidth, sheight, imga) {
	this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx;
    this.sy = sy;
    this.img = imga; //图片源
    this.swidth = swidth;
    this.sheight = sheight;
    this.draw = drawAnImage;
}

function pic(mapX,mapY,sx, sy, sw, sh, dx, dy, dw, dh, img) {
    this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx;//图片要绘制的开始位置坐标
    this.sy = sy;//图片要绘制的开始位置坐标
    this.sw = sw;//图片要绘制的宽度
    this.sh = sh;//图片要绘制的高度
    this.dx = dx;//在原图片中截取的x坐标
    this.dy = dy;//在原图片中截取的y坐标
    this.dw = dw;//在原图片中截取宽度
    this.dh = dh;//在原图片中截取高度
    this.img = img;
    this.draw = drawPic;
}


/*
	角色类
*/
function roleInfo(id, sx, sy, name, halfBody, img, HP, MP, pow, equipSkill, furySkill, SP, movement, speed, ATK, range, DEF, EXP, level, errorRate, doubleCRI, tripleCRI) {
    this.id = id;
    this.sx = sx;
    this.sy = sy;
	this.mapX;
	this.mapY;
    this.dx = 0; //截取图片的坐标x
    this.dy = 0; //截取图片的坐标y
    this.sw = rpx;
    this.sh = rpx;
    this.dw = 48; //截取图片的宽度
    this.dh = 48; //截取图片的高度
    this.draw = draw;
    this.name = name;
    this.halfBody = halfBody;
    this.img = img;
    this.HP = HP;
    this.fullHP;
    this.fullMP;
    this.fullSP;
    this.fullPow;
    this.MP = MP;
    this.pow = pow;
    //-------------------
    this.items=[];
    this.skills=[];
    this.powers=[]; 
	this.spirits=[];
	this.equips=[];
    //-------------------
    this.equipSkill = equipSkill;
    this.furySkill = furySkill;
    this.SP = SP;
    this.movement = movement;
    this.speed = speed;
    this.ATK = ATK;
    this.range = range;
    this.DEF = DEF;
    this.EXP = EXP;
    this.nextEXP;
    this.level = level;
    this.errorRate = errorRate;
    this.doubleCRI = doubleCRI;
    this.tripleCRI = tripleCRI;
	this.spiritJueSha=0;//绝杀的开关
	this.spiritSheSha=0;//神杀的开关
	this.spiritShanBi=0;//闪避的开关
	this.spiritShenXing=0;//神行的开关,1表示打开了，0表示没打开，至于最后有没有用看has_used_ShenXing这个变量，人物状态栏里的显示是看这个变量的
	this.not_sure_use_ShenXing=0;//不确定是否用了神行,0表示本回合还没使用神行，1表示本回合已经使用过神行，但还有取消移动的可能
	this.has_use_ShenXing=0;//本回合确实使用了神行，0表示没有，1表示有
	this.walk=0;//0表示本回合还没走过，1表示已经走过
	this.has_walk=0;//表示本回合确实走过了，0表示本回合确实还没走过，1表示本回合确实走过了
	this.has_use_Item = 0;//判断角色本回合是否用过道具，0表示本回合还没有用过，1表示本回合确实用过了
	this.addHP=[];
	this.addSP=[];
	this.addMP=[];
	this.addSpeed=[];
	this.addATK=[];
	this.addDEF=[];
	this.addMOV=[];
	
}
/*
	敌人类
*/
function enemyInfo(id, sx, sy, name, halfBody, img, HP, MP, pow, equipSkill,level, furySkill, SP, movement, speed, ATK, range, DEF, EXP, money, errorRate, doubleCRI, tripleCRI,type) {
    this.id = id;
    this.sx = sx;
    this.sy = sy;
	this.mapX;
	this.mapY;
    this.dx = 0;
    this.dy = 0;
    this.sw = rpx;
    this.sh = rpx;
    this.dw = 48;
    this.dh = 48;
    this.draw = draw;
    this.name = name;
    this.halfBody = halfBody;
    this.img = img;
    this.HP = HP;
    this.fullHP;
    this.fullMP;
    this.fullSP;
    this.fullPow;
    this.MP = MP;
    this.pow = pow;
	this.level=level;
	this.skills=[];
    this.powers=[];
    this.equipSkill = equipSkill;
    this.furySkill = furySkill;
    this.SP = SP;
    this.movement = movement;
    this.speed = speed;
    this.ATK = ATK;
    this.range = range;
    this.DEF = DEF;
    this.EXP = EXP;
    this.money = money;
    this.errorRate = errorRate;
    this.doubleCRI = doubleCRI;
    this.tripleCRI = tripleCRI;
	this.type=type;//0表示小兵，1表示BOSS
}
function item(id, name, img, gold, discripe, func, itemVar, other, effect) {
    this.id = id;
    this.num;
    this.name = name;
    this.img = img;
    this.gold = gold;
    this.discripe = discripe;
    this.func = func;
    this.itemVar = itemVar;
    this.other = other;
    this.effect = effect;
}

function skill(id, name, img, mp, discripe, success, func, skillVar, other, effect) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.mp = mp;
    this.discripe = discripe;
    this.success = success;
    this.func = func;
    this.skillVar;
    this.other = other;
    this.effect = effect;
	this.num = 1;
}

function power(id, name, img, p, discripe, success, func, powerVar, other, effect) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.p = p;
    this.discripe = discripe;
    this.success = success;
    this.func = func;
    this.powerVar;
    this.other = other;
    this.effect = effect;
	this.num = 1;
}
function spirit(id, name, img, gold, discripe, func, spiritVar, other, effect) {
    this.id = id;//精神力的编号
	this.num;//为了每回合只能使用一次绝杀，神杀
    this.name = name;//精神力的名称
    this.img = img;//精神力的图片
    this.gold = gold;//需要消耗多少SP
    this.discripe = discripe;//该精神力的描述
    this.func = func;  //发动该精神力需要调用这个函数
    this.spiritVar = spiritVar;//造成的后果参数，比如恢复HP多少
    this.other = other;
    this.effect = effect;//有些精神力发动会产生效果
}
//装备类
function equipZB(id,name,img,gold,discripe,equipVar,func,type){
    this.id = id;//装备的id
	this.num;//装备的数量
	this.name = name;//装备的名称
	this.img=img;//装备的图片
	this.gold=gold;//需要花多少钱
	this.discripe=discripe;//装备的描述
	this.equipVar=equipVar;//造成多少的后果
	this.func=func;//在把这个装备插入到人物的放装备的数组中的时候触发这个函数
    this.type=type;//装备的类型，0表示是手持的，1表示是饰品，一个人可以装3件装备，2件手持的，1件饰品的
}