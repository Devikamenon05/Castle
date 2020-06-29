const World = Matter.World ;
const Body = Matter.Bodies ;
const Engine = Matter.Engine ;

var box1 ;
var engine ;
var world ;
var box2 ;
var box3 ;
var tri1 ;
var tri2 ;
var box4 ;
var tri3 ;

function setup() {
  createCanvas(1270,1000);
  engine = Engine.create();
  world = engine.world ;
  box1 = new Box(635,900,300,250);
  box2 = new Box(860,815,150,420);
  box3 = new Box(410,815,150,420);
  box4 = new Box(635,625,124,300);
  }

function draw() {
  background(0); 
  box1.display(); 
  box2.display();
  box3.display();
  tri1 = triangle(410,500,335,605,485,605);
  tri2 = triangle(860,500,785,605,935,605);
  box4.display();
  tr13 = triangle(635,380,573,475,697,475);
  
  
  Engine.update(engine);
  drawSprites();
}