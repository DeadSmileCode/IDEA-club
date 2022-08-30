var menu_stat = false;
function _menu() {
	var menu = document.getElementById('menu');
	menu.classList.toggle("inviz");
	menu.classList.toggle("menu_st");
	var page = document.getElementById('page');
	page.classList.toggle("inviz");
}
function menu_con() {
	var butt = document.getElementById('menu_cont');
	if(!menu_stat){
		butt.setAttribute("style", "transform: rotate(270deg);");
		setTimeout(() => { _menu(); }, 300);
		menu_stat = !menu_stat;
	}else {
		butt.setAttribute("style", "transform: rotate(0deg);");
		setTimeout(() => { _menu(); }, 300);
		menu_stat = !menu_stat;
	}
}

butt = document.getElementById("menu_cont");
butt.addEventListener("click", menu_con);