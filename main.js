var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
birthday_img="";

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
birthday_img=Img;
birthday_img.scaleToWidth(1000);
birthday_img.scaleToHeight(600);
birthday_img.set({top:0, left:0});
})	;
	canvas.add(birthday_img);
}
new_image();
function playsong(){
	x.play();
}
