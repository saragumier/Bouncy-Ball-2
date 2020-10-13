//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
var ground_options = {
  isStatic : true}

  ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world, ground); 
var ball_options = {
  restitution: 1 
}
ball = Bodies.circle(200,100,30, ball_options)
console.log(ground);
World.add(world, ball);
}

function draw() {
  
  background(0);  
  Engine.update(engine);
  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  strokeWeight(2);
  stroke("white");
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30)
}