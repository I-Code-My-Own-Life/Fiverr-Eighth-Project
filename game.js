// So, the task is to make a combination of 2d Primitives :
let arrayOfObjects = [];
function setup(){
    createCanvas(innerWidth, innerHeight)
    angleMode(RADIANS);
}
function draw(){
    background(0);
    obj.make();
    for(let obj of arrayOfObjects){
        obj.make();
    }
}
function drawRectWidthRoundedCorners(x,y,width,height,radius){
    rect(x,y,width,height,radius);
}
let a = 0;
class Object1{
    constructor(x,x2,x3,x4,y,width,width2,height,ex1,ex2,ex3,a1x,a2x,speed){
        // Corners : 
        this.x = x;
        this.x2 = x2;
        this.x3 = x3;
        this.x4 = x4;
        // Height : 
        this.y = y;
        // Second corner y: 
        this.width = width;
        // Frist corner  y: 
        this.width2 = width2
        this.height = height;
        this.ex1 = ex1;
        this.ex2 = ex2;
        this.ex3 = ex3;
        this.a1x = a1x;
        this.a2x = a2x;
        this.speed = speed;
    }
    make(){
        this.x += this.speed;
        this.x2 += this.speed;
        this.x3 += this.speed;
        this.x4 += this.speed;
        this.ex1 += this.speed;
        this.ex2 += this.speed; 
        this.ex3 += this.speed;
        this.a1x += this.speed;
        this.a2x += this.speed;
        fill('red');
        // Moving done : 
        drawRectWidthRoundedCorners(this.ex3,276,35,125,10)
        fill(168, 94, 50)
        // Moving done : 
        quad(this.x,this.y,this.x2,this.y,this.x3,this.width,this.x4,this.width2);
        fill("blue")
        // Eyes : 
        // Moving done : 
        drawRectWidthRoundedCorners(this.ex1,415,35,35,10)
        drawRectWidthRoundedCorners(this.ex2,414,35,35,10)
        fill("black")
        // Moving NOT done : 
        arc(this.a1x,435, 80, 80, 0, PI , CHORD);
        fill("blue")
        noFill()
        push()
        stroke("black")
        arc(this.a2x,430, 100, 100, 0, PI , CHORD);
        pop();
    }
}
let obj = new Object1(230,330,480,100,500,400,400,20,180,360,265,285,285);
setInterval(()=>{
    arrayOfObjects.push(new Object1(230,330,480,100,500,400,400,20,180,360,265,285,285,randomIntFromInterval(4,6)));
},2000)
function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}