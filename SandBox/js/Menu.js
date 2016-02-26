function Menu(){
	//載體
	this.a = document.createElement('div');
	this.a.style.left = "0.5%";
	this.a.style.top = "0.5%";
	this.a.style.height = "80%";
	this.a.style.width = "2%";
	this.a.style.position = 'absolute';
	this.a.style.overflow = 'auto';
	this.a.id = "menubody";
	this.a.style.backgroundColor = "#DCDCDC";
	
	//開啟按鈕
	this.b = document.createElement('div');
	this.b.style.left = "0.5%";
	this.b.style.top = "81.5%";
	this.b.style.height = "17%";
	this.b.style.width = "2%";
	this.b.style.position = 'absolute';
	this.b.id = "menubodyButton";
	this.b.innerHTML = "點<br>我<br>展<br>開<br>!";
	this.b.style.cursor = "pointer";
	this.b.style.backgroundColor = "#DDDCDC";
	
	//方法
	this.NewType = function(Name,i){
		var Div = document.createElement('div');
		Div.style.width = "95%";
		Div.style.left = "1%";
		Div.style.top = (6*i+1)+"%";
		Div.style.height = "5%";
		Div.style.position = 'absolute';
		Div.id = "menudiv_"+i;
		Div.innerHTML=Name;
		Div.style.backgroundColor = "#FFFCDC";
		Div.style.cursor = "pointer";
		this.a.appendChild(Div);
		var DivScroll = document.createElement('div');
		DivScroll.style.width = "95%";
		DivScroll.style.left = "1%";
		DivScroll.style.top = (6*i+6)+"%";
		DivScroll.style.height = "0px";
		DivScroll.style.position = 'absolute';
		DivScroll.id = "menudivScroll_"+i;
		DivScroll.style.backgroundColor = "#FFFCDC";
		this.a.appendChild(DivScroll);
		Div.addEventListener("click",function(){
			if(DivScroll.childElementCount==0)SetMenuItem(i);//未展開
			else DelMenuItem(i,DivScroll);//已展開
		});
	};
}