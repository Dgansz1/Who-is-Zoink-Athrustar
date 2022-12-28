var diam1=0
var diam2=400
function setup() {
	createCanvas(500, 500);
}
function draw() {
  background(173,216,230); 
  
  fill(255,255,127,150);
  stroke(255,255,127); 
  strokeWeight(5) 
  ellipse(240,150,150,200);
  
  fill(188,72,102);
  stroke(125,133,68); 
  strokeWeight(5) 
  ellipse(200,140,40,30);
  
  fill(188,72,102);
  stroke(125,133,68); 
  strokeWeight(5) 
  ellipse(280,140,40,30);
  
  fill(249,244,245);
  stroke(78,125,168); 
  strokeWeight(2) 
  triangle(220,120,260,120,240,80);

 fill(249,244,245);
 stroke(78,125,168); 
 strokeWeight(5) 
 ellipse(mouseX,mouseY,diam1,diam1);

 textSize(50);
 textFont("Arial");
 textStyle(ITALIC);
 textAlign(LEFT);
 text("time",diam1,diam1);
 diam1=diam1+2

 textSize(50);
 textFont("Arial");
 textStyle(BOLD);
 textAlign(RIGHT);
 text("space",diam2,diam2);
 diam2=diam2-2
}
function mousePressed(){
	if(diam1>300){
		diam1=0;
	if(diam2<100)
		diam2=400;
	}else{
	diam1,diam2=diam1+5,diam2-2;
    }
}
