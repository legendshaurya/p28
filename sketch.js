
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var line1,line2,line3,ball,ground
function preload(){
dustbin = loadImage ("dustbin.png")
paper=loadImage("paper.png")



}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.rectangle(width/2, 660 ,10, 10,options)
	World.add(world,ball);


	
	Launcher= new LauncherClass(ball,{x:70,y :500})
	
	ground = Bodies.rectangle(width/2 , 665, 810,10, {isStatic:true});
	World.add(world,ground);

	
	line1 = Bodies.rectangle(650 , height-50, 200,20, {isStatic:true});
	World.add(world,line1);

	line2 = Bodies.rectangle(560 , 610, 20,100, {isStatic:true});
	World.add(world,line2);

	line3 = Bodies.rectangle(760 , 610, 20,100, {isStatic:true});
	World.add(world,line3);




 var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:5


 }





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
rect(ball.position.x,ball.position.y,10,10)
rect(ground.position.x,ground.position.y,810,10)
fill("red")

rect(line1.position.x,line1.position.y,200,20)
rect(line2.position.x,line2.position.y,20,100)
rect(line3.position.x,line3.position.y,20,100)


image(dustbin,540,530,240,150)

imageMode(CENTER)
image(paper,ball.position.x,ball.position.y,40,40)

Launcher.display()

  drawSprites();
 
}



function mouseDragged()
{
Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
Launcher.fly()

}














