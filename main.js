x = 0;
y = 0;
screen_width=0;
screen_height=0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number=Number(content);
 if (Number.isInteger(to_number)) {
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 }
}

function setup() {
canvas=createCanvas(screen_height,screen_width)
screen_width=window.innerWidth;
screen_height=window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak();
    
    for (var i =1; i < to_number; i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
    }
    }
  }

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
function preload(){
  loadImage("apple.png")
}