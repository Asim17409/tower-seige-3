const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var score =  0;

var engine, world;

function preload(){
  getTime()
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(450,200,250,5)
    box1=new Box(380,180,40,40)
    box2=new Box(420,180,40,40)
    box3=new Box(460,180,40,40)
    box4=new Box(500,180,40,40)
    box5=new Box(540,180,40,40)



    box6=new Box(420,140,40,40)
    box7=new Box(460,140,40,40)
    box8=new Box(500,140,40,40)


    box9=new Box(460,100,40,40)

    ball=new Ball(230,200,50,50)

    slingShot=new SlingShot(ball.body,{x:230,y:200})
}

function draw() {
  if(backgroundImg)
  background(backgroundImg); 
  textSize(20)
  fill("white")
  text("score"+score,100,50) 
  Engine.update(engine);
  ground.display();
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
  fill("blue")
  box6.display();
  box7.display();
  box8.display();
  fill("green")
  box9.display();

  ball.display();

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly()
}
async function  getTime(){
  var response =   await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
  var responseJSON = await response.json()
  var dt = responseJSON.datetime
  var hour = dt.slice(11,13)
  console.log(hour)
  if(hour > 06 && hour < 17){
      backgroundImg = loadImage('day.jpg')
  }

  else{
      backgroundImg = loadImage('night.jpg')
  }
}