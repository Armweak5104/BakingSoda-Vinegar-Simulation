let startSimul
function setup() {
  createCanvas(window.innerWidth,window.innerHeight)
  concentration = createSlider(1,12,6,1)
  concentration.position(50,190)
  massOfVinegar = createSlider(1,152,148,3)
  massOfVinegar.position(50,240)
  massOfBS = createSlider(1,348,350,2)
  massOfBS.position(50,290)
  startSimul = createButton("start")
  startSimul.position(30,400)
  startSimul.mousePressed(go)
}

//velocity
//x=[0,2,4,6,8,10,12,14,16,18,20,22,22.5]
//y=[0,22.041,10.01,7.99,6.99,5.97,4.96,3.95,2.93,1.92,0.91,226.4,0]
//acceleration
//x=[0,2,4,6,8,10,12,14,16,18,20,22,22.5]
//yA=[0,11.021,5.26,3.22,2.25,1.68,1.30,1.038,0.84,0.69,0.57,0.47,0]
let x=-400
let begin = false
let y=180
let speedY=5
let main="true"
let acc=0
let vel=0
let dVel=-226
let r=10
let g =0
let b = 255
let down = false
function draw() {
  frameRate(5)
  background(r,g,b)
  translate(width/2,height/2)
  //Strive.drawTickAxes()
  Strive.scale(0.5,0.5)
  rocket(x,y)
  if (begin == true){
    conc4TO8()
  }

  push()
    textSize(40)
  text("acceleration(m/s^2) = "+acc,300,-200)
   text("velocity(m/s) = "+vel,300,-50)
  pop()
//if (concentration.value()>4 && concentration.value()<8){
  //conc4TO8()
//}
 values()
  push()
  textSize(40)
     text("Concentration of acid in vinegar:"+" "+concentration.value()+"%",-1075,-200)
  text("Mass of vinegar used:"+massOfVinegar.value()+"g",-1075,-100)
  text("Mass of Baking Soda used:"+massOfBS.value()+"g",-1075,0)
  pop()
}
function conc4TO8(){
   y-=vel
  let factor = ((concentration.value()/6)+(massOfVinegar.value()/148)+(massOfBS.value()/337))/3
  if(y<=-389*factor){
    y=240
    vel=0
    acc=0
    b=255
    }
  if(y>150){
    speedY=0
  }
  if(y<=180 && y>-76*factor){
    vel=(11.02*factor).toFixed(2)
    acc=(11.02*factor).toFixed(2)
    b-=7
  }
  if(y<=-76*factor && y>-145*factor){
    vel=(10.01*factor).toFixed(2)
    acc=(5.26*factor).toFixed(2)
    b-=1
  }
  if(y<=-145*factor && y>-200*factor){
    vel=(7.99*factor).toFixed(2)
    acc=(3.22*factor).toFixed(2)
    b-=1
  }
  if(y<=-200*factor && y>-248*factor){
    vel=(6.99*factor).toFixed(2)
    acc=(2.25*factor).toFixed(2)
    b-=1
  }
  if(y<=-248*factor && y>-289*factor){
    vel=(5.97*factor).toFixed(2)
    acc=(1.68*factor).toFixed(2)
    b-=1
 }
 if(y<=-289*factor && y>-323*factor){
   vel=(4.96*factor).toFixed(2)
   acc=(1.30*factor).toFixed(2)
   b-=1
 }
 if(y<=-323*factor && y>-350*factor){
   vel=(3.95*factor).toFixed(2)
   acc=(1.038*factor).toFixed(2)
 }
 if(y<=-350*factor && y>-370*factor){
   vel=(2.93*factor).toFixed(2)
   acc=(0.84*factor).toFixed(2)
 }
 if(y<=-370*factor && y>-383*factor){
   vel=(1.92*factor).toFixed(2)
   acc=(0.69*factor).toFixed(2)
 }
 if(y<=-383*factor && y>-389*factor){
   vel=(0.91*factor).toFixed(2)
   acc=(0.57*factor).toFixed(2)
 }
 if(y<=-389*factor && y>-390*factor){
   vel=0
   acc=0
 }
}
function values(){
  let factor = ((concentration.value()/6)+(massOfVinegar.value()/148)+(massOfBS.value()/337))/3
  let max_ht = 113.2 * factor
  let IT = 131.1 * factor
  let AR = 68.1* factor
   if(vel==0 && acc==0 && y==240){
    push()
    textSize(40)
    text("Max height reached ="+(max_ht).toFixed(2)+ "m",300,50)
   text("Initial thrust produced ="+(IT).toFixed(2)+ "Newtons",300,100)
   text("Air resistence faced ="+AR.toFixed(2)+ "Newtons",300,150)
   text("Weight of rocket= 5.24 Newtons",300,200)
   pop()
   }
}
function rocket(x,y){
  rect(x,y,100,200)
  triangle(x+50,y-50,x,y,x+100,y)
  triangle(x,y+150,x,y+200,x-50,y+200)
  triangle(x+100,y+150,x+100,y+200,x+150,y+200)
  circle(x+50,y+100,50)

  fill("white")
}
function go () {
  if (begin == true) {
    begin = false
  } else {
    begin = true
  }
}
