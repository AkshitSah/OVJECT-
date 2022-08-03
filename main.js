img = "";
object=[];
status="";

function preload(){}
 function start() {
  objectDetector=ml5.objectDetector("cocossd",modelLoaded);;
  document.getElementById("status").innerHTML="Status:Detecting object"; 
 }


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(380,380);
  video.hide();
 }

function modelLoaded() {
  console.log("Model Loaded!");
status=true;
  

}
function gotResult(error,results){
if (error){

  console.log(error);
}
console.log(results);
object=results;
}


function draw() {
  image(video, 0, 0, 380, 380);
  
if(status !="")
{
  objectDetector.detect(video, gotResult);
for(i=0;i<object.length;i++)
{
  document.getElementById("status").innerHTML="Objects have been detected";
  document.getElementById("Number_of_objects").innerHTML="Number of objects dtected are:"+object.length;
  fill("#86bacf");
  percent=floor(object[i].confidence*100);
  text(object[i].label+" "+percent,object[i].x+15,object[i].y+15); 
  noFill();
  stroke("#ed6179");
  rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}

 }
