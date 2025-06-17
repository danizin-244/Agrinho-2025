var img01;
let img=[];
var contador=0;
var tempo=0;
let trilha;
 
function preload (){  
trilha= loadSound("Street Fighter II.mp3");
img [0]= loadImage('Dead (1).png');
img [1]= loadImage('Dead (2).png');
img [2]= loadImage('Dead (3).png');
img [3]= loadImage('Dead (4).png');
img [4]= loadImage('Dead (5).png');
img [5]= loadImage('Dead (6).png');
img [6]= loadImage('Dead (7).png');
img [7]= loadImage('Dead (8).png');
}

function setup() {
  createCanvas(800, 600);
  img01 = loadImage('house7_0.gif')
  trilha.loop();
}

function draw() {
  background(img01);
  image (img[contador%8],150,200,150,150);
 
  if(tempo>2){
  contador ++;
  tempo= 0}
}