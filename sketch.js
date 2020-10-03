const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions = [];
var patricle = [];
var pliko = [];
var divisionHeight = 300;

function preload() {
}

function setup(){
createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,800,480,20);
    
  
}    
function draw(){
    background(0);

    ground.display();   
  r();
  p();
q();
}



function r(){
 for( var i =0; i<= divisions.length; i = i+80 ) {
        divisions.push(new Groud(i, 800-divisionHeight/2, 10, divisionHeight));    
          divisions[i].display();
     
          }
                
}

function p(){
for(var j = 40; j<= width; j = j+50){
pliko.push(new plinko(j, 75));
//pliko[j].display();
}

}

function q(){

  if(frameCount%60===0){    
    
  for(var j = 0; j< patricle.length; j = j++){
    patricle.push(new par(random(width/2-10, width/2+10),10, 10));

    patricle[j].display();
    }

}
 }