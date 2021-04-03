
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1200,100,30);
	mango2=new mango(1189,227,30);

	mango3=new mango(979,252,30);
	mango4=new mango(996,88,30);

	mango5=new mango(1092,253,30);

	mango6=new mango(1074,197,30);
	
	mango7=new mango(954,193,30);
	mango8=new mango(1059,109,30);

	mango9=new mango(1090,54,30);
	mango10=new mango(1151,173,30);
	treeObj=new tree(1096,578);
	stone1=new Stone(245,419,30)


	rope1=new Launcher (stone1.body,{x:245,y:419})
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background("white");
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone1.display();
  rope1.display();
  groundObject.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);
  text("X"+mouseX+"Y"+mouseY,mouseX,mouseY);
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY});}
  function mouseReleased(){
    
    rope1.fly();
   
   }
   function detectCollision(lstone,lmango) {
    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;
  
    var distance=dist(  stoneBodyPosition.x,  stoneBodyPosition.y,  mangoBodyPosition.x,  mangoBodyPosition.y);
    if(distance<=  lstone.r+ lmango.r){
  console.log("hello");
  Matter.Body.setStatic(lmango.body,false);
    }}
    function keyPressed(){
      
      if (keyCode===32){
        Matter.Body.setPosition(stone1.body,{x:245,y:419});
       // Matter.Body.setStatic(lmango.body,true);
   
    rope1.attach(stone1.body);
   
      } 
    }