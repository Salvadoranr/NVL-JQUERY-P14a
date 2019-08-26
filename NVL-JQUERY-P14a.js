var image= $("img");
var firstX=0;
var height=400;
var referenceY=0
var referenceX=200
var opacity=0.5;
image.on("mouseover",cursor());

$("#opacity").mousemove(function( event ) {
    if(event.pageX>referenceX+10){
        referenceX+=10
        opacity+=0.1
        $("#opacity").css("opacity", opacity)
    } if(event.pageX<referenceX-10){
        referenceX-=10
        opacity-=0.1
        $("#opacity").css("opacity", opacity)
    }
  });
  $("#sizing").mousemove(function(event){
    if(event.pageY < referenceY){
        height++ 
        $("#sizing").css("height", height+"px")
    }else{
        height--
        $("#sizing").css("height", height+"px")
    }
    referenceY=event.pageY
  })

function cursor(){
image.css("cursor","crosshair")
}

