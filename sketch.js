const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var gameState = 'onSling';
var score = 0;

function setup() {
 var canvas = createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500, 350, 300, 10, {isStatic:true})
  ground2 = new Ground(900, 200, 300, 10, {isStatic:true})

  box1 = new Box(380,330,20,30)
  box2 = new Box(400,330,20,30)
  box3 = new Box(420,330,20,30)
  box4 = new Box(440,330,20,30)
  box5 = new Box(460,330,20,30)
  box6 = new Box(480,330,20,30)
  box7 = new Box(500,330,20,30)
  box8 = new Box(520,330,20,30)
  box9 = new Box(540,330,20,30)
  box10 = new Box(560,330,20,30)
  box11 = new Box(580,330,20,30)
  box12 = new Box(600,330,20,30)
  box13 = new Box(620,330,20,30)
  
  box15 = new Box(410,310,20,30)
  box16 = new Box(430,310,20,30)
  box17 = new Box(450,310,20,30)
  box18 = new Box(470,310,20,30)
  box19 = new Box(490,310,20,30)
  box20 = new Box(510,310,20,30)
  box21 = new Box(530,310,20,30)
  box22 = new Box(550,310,20,30)
  box23 = new Box(570,310,20,30)
  box24 = new Box(590,310,20,30)

  box26 = new Box(440,280,20,30)
  box27 = new Box(460,280,20,30)
  box28 = new Box(480,280,20,30)
  box29 = new Box(500,280,20,30)
  box30 = new Box(520,280,20,30)
  box31 = new Box(540,280,20,30)
  box32 = new Box(560,280,20,30)

  box34 = new Box(470,250,20,30)
  box35 = new Box(490,250,20,30)
  box36 = new Box(510,250,20,30)
  box37 = new Box(530,250,20,30)

  box39 = new Box(500,220,20,30)

  box41 = new Box(780, 180, 20, 30)
  box42 = new Box(800, 180, 20, 30)
  box43 = new Box(820, 180, 20, 30)
  box44 = new Box(880, 180, 20, 30)
  box45 = new Box(860, 180, 20, 30)
  box46 = new Box(880, 180, 20, 30)
  box47 = new Box(900, 180, 20, 30)
  box48 = new Box(920, 180, 20, 30)
  box49 = new Box(940, 180, 20, 30)
  box50 = new Box(960, 180, 20, 30)
  box51 = new Box(980, 180, 20, 30)
  box52 = new Box(1000, 180, 20, 30)
  box53 = new Box(1020, 180, 20, 30)
  
  box55 = new Box(810, 150, 20, 30)
  box56 = new Box(830, 150, 20, 30)
  box57 = new Box(850, 150, 20, 30)
  box58 = new Box(870, 150, 20, 30)
  box59 = new Box(890, 150, 20, 30)
  box60 = new Box(910, 150, 20, 30)
  box61 = new Box(930, 150, 20, 30)
  box62 = new Box(950, 150, 20, 30)
  box63 = new Box(970, 150, 20, 30)
  box64 = new Box(990, 150, 20, 30)
  
  box66 = new Box(840, 120, 20, 30)
  box67 = new Box(860, 120, 20, 30)
  box68 = new Box(880, 120, 20, 30)
  box69 = new Box(900, 120, 20, 30)
  box70 = new Box(920, 120, 20, 30)
  box71 = new Box(940, 120, 20, 30)
  box72 = new Box(960, 120, 20, 30)

  box74 = new Box(870, 90, 20, 30)
  box75 = new Box(890, 90, 20, 30)
  box76 = new Box(910, 90, 20, 30)
  box77 = new Box(930, 90, 20, 30)

  box79 = new Box(900, 60, 20, 30)

  shp = new Shape(150, 120, 60,60)
  sling = new Slingshot(shp.body, {x:150, y:120, w:60, h:60} )
  
}

function draw() {
  background('skyblue'); 
  fill(225)
  textSize(40)
    text('SCORE  /  '+score, 750, 40)
  
  Engine.update(engine);

  ground.display();
  ground2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  
  box26.display();
  box26.score();
  box27.display();
  box27.score();
  box28.display();
  box28.score();
  box29.display();
  box29.score();
  box30.display();
  box30.score();
  box31.display();
  box31.score();
  box32.display();
  box32.score();

  box34.display();
  box34.score();
  box35.display();
  box35.score();
  box36.display();
  box36.score();
  box37.display();
  box37.score();
  box39.display();
  box39.score();

  box41.display();
  box41.score();
  box42.display();
  box42.score();
  box43.display();
  box43.score();
  box44.display();
  box44.score();
  box45.display();
  box45.score();
  box46.display();
  box46.score();
  box47.display();
  box47.score();
  box48.display();
  box48.score();
  box49.display();
  box49.score();
  box50.display();
  box50.score();
  box51.display();
  box51.score();
  box52.display();
  box52.score();
  box53.display();
  box53.score();

  box55.display();
  box55.score();
  box56.display();
  box56.score();
  box57.display();
  box57.score();
  box58.display();
  box58.score();
  box59.display();
  box59.score();
  box60.display();
  box60.score();
  box61.display();
  box61.score();
  box62.display();
  box62.score();
  box63.display();
  box63.score();
  box64.display();
  box64.score();

  box66.display();
  box66.score();
  box67.display();
  box67.score();
  box68.display();
  box68.score();
  box69.display();
  box69.score();
  box70.display();
  box70.score();
  box71.display();
  box71.score();
  box72.display();
  box72.score();

  box74.display();
  box74.score();
  box75.display();
  box75.score();
  box76.display();
  box76.score();
  box77.display();
  box77.score();

  box79.display();
  box79.score();

  shp.display();
  sling.display();
console.log(score);
  

  drawSprites();
}

function mouseDragged(){
  if(gameState != "launched"){
  Body.setPosition(shp.body, {x:mouseX, y:mouseY})
  }
  }
  
  function mouseReleased(){
  sling.fly()
  }
  
  function keyPressed(){
    if(keyCode == 32){
        
        Body.setPosition(shp.body, {x:150, y:120})
        sling.attach(shp.body);
        gameState = "onSling"
    }
}
 