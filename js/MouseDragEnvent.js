
function mDown(e){
	
    mdownx = e.pageX - canvas.offsetLeft;
    mdowny = e.pageY - canvas.offsetTop;
    if(itemNumChange){
		if(MouseOnObj(mdownx,mdowny,huaKuai)){isdown=true;}
	}
}


function mUp(e){
   isdown=false;

}