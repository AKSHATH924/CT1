const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var chain1,chain2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;
//var crashed;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1 = new Boggie(550,300,80,80);
  boggie2 = new Boggie(450,300,80,80);
  boggie3 = new Boggie(300,300,80,80);
  boggie4 = new Boggie(250,300,80,80);
  boggie5 = new Boggie(150,300,80,80);
  boggie6 = new Boggie(50,300,80,80);
  chain1 = new Chain(boggie1.body,boggie2.body)
  chain2 = new Chain(boggie2.body,boggie3.body)
  chain3 = new Chain(boggie3.body,boggie4.body)
  chain4 = new Chain(boggie4.body,boggie5.body)
  chain5 = new Chain(boggie5.body,boggie6.body)
  rock1 = new Rock(1100,330,90,90);


  //crashed;



}

function draw() {
  background(bg);  
  //text("crash: "+ Ccrash, 300,150);
  Engine.update(myEngine);
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  rock1.show();


 
  }


  function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
      Matter.Body.applyForce(boggie1.body,{x:boggie1.body.position.x,y:boggie1.body.position.y}, {x:1,y:0}); 
  
    }

    if(keyCode === LEFT_ARROW){
      Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y}, {x:-0.5,y:0});
    }
}



  
