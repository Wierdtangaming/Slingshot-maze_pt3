const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;

var display_vr;
var r,g,b;
var rgbcount;
function preload() {

}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    r = Math.round(random(0,255));
    g = Math.round(random(0,255));
    b = Math.round(random(0,255));

    rgb_add_1 = Math.round(random(20,100));
    rgb_add_2 = Math.round(random(10,120));


    ground = new Ground(600,height,1200,20);



    box1 = new Ball(175,210,50);

    
    obstacle1 = new Ground(550,250,200,10);
    obstacle2 = new Ground(645,350,10,200);

    tg_m = new ND_Box(635,115,30,120,0,r+25,b+19,b-20);
    tg1 = new Box(850,375,45,100,0,r*rgb_add_1,g+100,b*2-5);
    tg2 = new Box(850,210,45,100,0,r*rgb_add_2,g-rgb_add_1,b*5-100);
    tg3 = new Box(850,110,45,100,0,r-rgb_add_1,g/rgb_add_2,b+5);

    display_vr = 1; 

    slingshot = new Slingshot(box1.body,{x:175,y:200});
}

function draw(){
    background(255,100,255);
    Engine.update(engine);
    strokeWeight(4);
    push();
    fill("black");
    text("Your goal is to push the three boxes on the left side of the screen at a high velocity",200,300);

    pop();
    tg1.display();
    tg_m.display();
    tg3.display();



   tg2.display();

   obstacle2.display();  
   obstacle1.display(); 
  
   box1.display();
   slingshot.display(); 
   ground.display();
}

function mouseDragged() {
    Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY})
    display_vr = 1;
}

function mouseReleased() {
    slingshot.fly();

}

