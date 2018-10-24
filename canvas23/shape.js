function Shape(x,y,text){       
    this.x = x;
    this.y = y;
    this.size = 200;
    this.text = text;
   
    this.placement = [];
}
//图片获取
Shape.prototype.getImg = function (img){
    var imgData = new Image();
    imgData.src = img;
    // console.log(imgData);
    // document.body.appendChild(imgData);
    // context.drawImage(imgData,10,10);
    // var imgData = document.getElementById('source');
    var _this = this;
    imgData.onload = function (){
        console.log(imgData)
        context.drawImage(imgData, canvas.width/4, canvas.height/4,canvas.width/2,canvas.height/2);
        _this.getPar();
    }
    
}
//文字获取
Shape.prototype.getValue = function (){
    context.textAlign = "center";
    context.font = this.size +"px arial";
    context.fillText(this.text,this.x,this.y);
    this.getPar();
}
//获取粒子
Shape.prototype.getPar = function (){
    var idata = context.getImageData(0,0,canvas.width,canvas.height);
    var buffer32 = new Uint32Array(idata.data.buffer);
    for(var j = 0;j<canvas.height;j+= gridY){
        for(var i = 0;i<canvas.width;i+=gridX){
           if(buffer32[j*canvas.width+i]){
               var particles = new Particle(i,j,type);
               this.placement.push(particles);
           }
        }
    }
    context.clearRect(0,0,canvas.width,canvas.height);
}