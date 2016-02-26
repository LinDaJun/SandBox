function Control(){
	//載體
	this.a = document.createElement( 'div' );
	this.a.style.position = 'absolute';
	this.a.style.top = (window.innerHeight+500) + "px";
	this.a.style.width = "250px";
	this.a.style.height = "260px";
	this.a.style.backgroundColor = "#DDDCDC";
	this.a.style.textAlign = 'center';
	this.a.id = "Control";
	
	//功能按鈕
		//標題
		var worktitle = document.createElement("P");
		worktitle.appendChild(document.createTextNode("------物件控制台------"));
		//載體
		work = document.createElement( 'div' );
		work.style.width = "100%";
		work.style.height = "20px";
		//刪除
		this.b = document.createElement("button");
		this.b.style.width = '40%';
		this.b.appendChild(document.createTextNode("刪除物件"));
		//關閉
		this.c = document.createElement("button");
		this.c.style.width = '40%';
		this.c.appendChild(document.createTextNode("取消選取"));
		//串接
		work.appendChild(this.b);
		work.appendChild(this.c);
	//物件修改
		//標題
		var edittitle = document.createElement("P");
		edittitle.appendChild(document.createTextNode("----物件修改----"));
		//載體
		var edit = document.createElement( 'div' );
		edit.style.width = "100%";
		edit.style.height = "90px";
		//座標修改
			//標籤載體
			var Pos = document.createElement( 'div' );
			Pos.style.width = "100%";
			Pos.style.height = "40px";
			Pos.style.top = "2.5px";
			//X軸標籤
			var XLabel = document.createElement("P");
			XLabel.appendChild(document.createTextNode("X軸:"));
			this.PosX = document.createElement("INPUT");
			this.PosX.setAttribute("type", "number");
			this.PosX.setAttribute("value", "0");
			this.PosX.setAttribute("max", "400");
			this.PosX.setAttribute("min", "-400");
			this.PosX.setAttribute("step", "10");
			this.PosX.style.width = "50px";
			XLabel.appendChild(this.PosX);
			//Y軸標籤
			var YLabel = document.createElement("P");
			YLabel.appendChild(document.createTextNode("Y軸:"));
			this.PosY = document.createElement("INPUT");
			this.PosY.setAttribute("type", "number");
			this.PosY.setAttribute("value", "0");
			this.PosY.setAttribute("max", "400");
			this.PosY.setAttribute("min", "-400");
			this.PosY.setAttribute("step", "10");
			this.PosY.style.width = "50px";
			YLabel.appendChild(this.PosY);
			//Z軸標籤
			var ZLabel = document.createElement("P");
			ZLabel.appendChild(document.createTextNode("Z軸:"));
			this.PosZ = document.createElement("INPUT");
			this.PosZ.setAttribute("type", "number");
			this.PosZ.setAttribute("value", "0");
			this.PosZ.setAttribute("max", "400");
			this.PosZ.setAttribute("min", "-400");
			this.PosZ.setAttribute("step", "10");
			this.PosZ.style.width = "50px";
			ZLabel.appendChild(this.PosZ);
			//開始按鈕
			this.d = document.createElement("button");
			this.d.style.width = '40%';
			this.d.appendChild(document.createTextNode("移動物件"));
			//串接
			Pos.appendChild(XLabel);
			Pos.appendChild(YLabel);
			Pos.appendChild(ZLabel);
			Pos.appendChild(this.d);
		edit.appendChild(Pos);
	//串接
		this.a.appendChild(worktitle);
		this.a.appendChild(work);
		this.a.appendChild(edittitle);
		this.a.appendChild(edit);
}