function ToolBar(WindowX,WindowY){
	//載體
	this.a = document.createElement('div');
	this.a.style.left = WindowX+"%";
	this.a.style.top = WindowY+"%";
	this.a.style.height = "80%";
	this.a.style.width = "5%";
	this.a.style.position = 'absolute';
	this.a.style.backgroundColor = "#DCDCDC";
	
	//輸出按鈕
	this.b = document.createElement('div');
	this.b.style.left = "0.5%";
	this.b.style.top = "5%";
	this.b.style.height = "10%";
	this.b.style.width = "95%";
	this.b.style.position = 'absolute';
	this.b.id = "OutButton";
	this.b.innerHTML = "點我<br>輸出!";
	this.b.style.cursor = "pointer";
	this.b.style.backgroundColor = "#FFDDDD";
	
	//輸入按鈕
	this.c = document.createElement('input');
	this.c.setAttribute("type", "file");
	this.c.style.left = "0.5%";
	this.c.style.top = "15%";
	this.c.style.height = "10%";
	this.c.style.width = "95%";
	this.c.style.position = 'absolute';
	this.c.id = "InFile";
	this.c.style.backgroundColor = "#FFDDDD";
	
	this.a.appendChild(this.b);
	this.a.appendChild(this.c);
}