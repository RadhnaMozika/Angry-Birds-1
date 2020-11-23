const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var myengine,myworld;
var ground, box1, box2, pig1, log1, box3, box4, pig2, log2;
var box5, log3, log4;
var bird;
function setup() {
  createCanvas(1200, 400);
  myengine=Engine.create();
  myworld=myengine.world;

  
  

  box1=new Box(700,320,70,70);
  box2=new Box(920, 320, 70, 70);
  pig1= new Pig(810, 350);

  ground=new Ground(600, 380, 1200, 20);

  log1 = new Log(810, 260, 300, PI/2);

  box3=new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  pig2= new Pig(810, 220);
  log2 = new Log(810, 180, 300, PI/2);

  box5= new Box(810, 160, 70, 70);

  log3=new Log(760, 120, 150, PI/7);
  log4=new Log(870, 120, 150, -PI/7);

  bird=new Bird(100, 100);

}

function draw() {
  background(20); 
  Engine.update(myengine); 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();

  log3.display();
  log4.display();
  box5.display();

  bird.display();

}