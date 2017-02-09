function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  frameRate(18); //1 sec = 12 frames (how many times drax() runs every second
  background(40);
}

function draw() {
  translate(width/2,height/2);//per farlo stare al centro della pagina
  rotate(frameCount*2); //1 sec = rotate of 36 degrees (every frame, it rotates of 3 grades)
  noFill();
  // lerpColor blends two colors to find a third color somewhere between them.
  // lerpColor(col1,col2,amount)
  // (frameCount%120)/120)
  // The modular operator (%) returns the division remainder (360/120=3 senza resto>>> 0/120=0 cioè il primo colore)
  stroke(lerpColor(color("#ea0043"),color("#0fefca"),(frameCount%9)*(frameCount%9)));
  ellipse(100,0,250,250);
}