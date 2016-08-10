window.onload = function(){
    departmentmove();
}
function departmentmove() {
    var oLi = document.getElementsByClassName("bm-item");
    var oLogo = document.getElementsByClassName("item-main-logo");
    var on="on";
    var i, timer1,timer2;

    for (i = 0; i < oLi.length; i++) {

        oLi[i].index = i;
        oLi[i].onmouseover = function () {
            //将之前宽度为396的li设置定时器慢慢变为196；
            for (i = 0; i < oLi.length; i++) {
                if (oLi[i].offsetWidth == 398) {
                    oLi[i].style.width = 192 + "px";
                    removeClass(oLi[i],on);
                }
            }
            this.style.width = 394 + "px";
            addClass(this,on);
        }
    }


}
function addClass(element, iclass) {
    var eclass = element.getAttribute("class");

    eclass = eclass + " ";
    eclass = eclass.concat(iclass);
    element.setAttribute("class", eclass);

}

function removeClass(element, iclass) {
    var eclass = element.getAttribute("class");

    eclass = eclass.replace(iclass, "");
    element.setAttribute("class", eclass);
}