var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 350;
canvas.height = 400;
var context = canvas.getContext("2d");


var myX=10, myY=10,mishkaX=0,mishkaY=0,izc="",umD=1;
var butX=[],butY=[],b=0,zb=0;
var vuvX=15,vuvY=52;
var dul=0,dosim=0;

butX[0]=10;
butY[0]=340;
butX[1]=10;
butY[1]=280;
butX[2]=70;
butY[2]=280;
butX[3]=130;
butY[3]=280;
butX[4]=10;
butY[4]=220;
butX[5]=70;
butY[5]=220;
butX[6]=130;
butY[6]=220;
butX[7]=10;
butY[7]=160;
butX[8]=70;
butY[8]=160;
butX[9]=130;
butY[9]=160;
butX[10]=130;
butY[10]=340;
butX[11]=10;
butY[11]=90;

butX[12]=230;
butY[12]=340;
butX[13]=230;
butY[13]=280;
butX[14]=230;
butY[14]=220;
butX[15]=230;
butY[15]=160;
butX[16]=70;
butY[16]=340;

butX[17]=290;
butY[17]=160;
butX[18]=290;
butY[18]=220;

window.addEventListener("keyup", function (args) {      
}, false);

window.addEventListener("mouseup", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;
    //console.log(izc);
    
   
}, false);


function update() {    
                dul=izc.length;
    dosim=izc.length-1;
    if(mishkaX<=butX[0]+50 && mishkaX>=butX[0] && mishkaY<=butY[0]+50 && mishkaY>=butY[0]){
        izc+="0";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[1]+50 && mishkaX>=butX[1] && mishkaY<=butY[1]+50 && mishkaY>=butY[1]){
        izc+="1";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[2]+50 && mishkaX>=butX[2] && mishkaY<=butY[2]+50 && mishkaY>=butY[2]){
        izc+="2";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[3]+50 && mishkaX>=butX[3] && mishkaY<=butY[3]+50 && mishkaY>=butY[3]){
        izc+="3";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[4]+50 && mishkaX>=butX[4] && mishkaY<=butY[4]+50 && mishkaY>=butY[4]){
        izc+="4";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[5]+50 && mishkaX>=butX[5] && mishkaY<=butY[5]+50 && mishkaY>=butY[5]){
        izc+="5";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[6]+50 && mishkaX>=butX[6] && mishkaY<=butY[6]+50 && mishkaY>=butY[6]){
        izc+="6";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[7]+50 && mishkaX>=butX[7] && mishkaY<=butY[7]+50 && mishkaY>=butY[7]){
        izc+="7";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[8]+50 && mishkaX>=butX[8] && mishkaY<=butY[8]+50 && mishkaY>=butY[8]){
        izc+="8";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[9]+50 && mishkaX>=butX[9] && mishkaY<=butY[9]+50 && mishkaY>=butY[9]){
        izc+="9";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[11]+110 && mishkaX>=butX[11] && mishkaY<=butY[11]+50 && mishkaY>=butY[11]){
        izc="";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[12]+50 && mishkaX>=butX[12] && mishkaY<=butY[12]+50 && mishkaY>=butY[12]){
        izc+="+";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[13]+50 && mishkaX>=butX[13] && mishkaY<=butY[13]+50 && mishkaY>=butY[13]){
        izc+="-";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[14]+50 && mishkaX>=butX[14] && mishkaY<=butY[14]+50 && mishkaY>=butY[14]){
        izc+="*";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[15]+50 && mishkaX>=butX[15] && mishkaY<=butY[15]+50 && mishkaY>=butY[15]){
        izc+="/";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[10]+50 && mishkaX>=butX[10] && mishkaY<=butY[10]+50 && mishkaY>=butY[10]){
        izc=eval(izc);
        mishkaX=1000000;
    }
    if(mishkaX<=butX[16]+50 && mishkaX>=butX[16] && mishkaY<=butY[16]+50 && mishkaY>=butY[16]){
        izc+=".";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[17]+50 && mishkaX>=butX[17] && mishkaY<=butY[17]+50 && mishkaY>=butY[17]){
        izc+="(";
        mishkaX=1000000;
    }
    if(mishkaX<=butX[18]+50 && mishkaX>=butX[18] && mishkaY<=butY[18]+50 && mishkaY>=butY[18]){
        izc+=")";
        mishkaX=1000000;
    }
    if(izc.length>17){
        izc="";
    }

    setTimeout(update, 10); 

}

function draw() {       
    context.clearRect(0, 0, canvas.width, canvas.height);       
    context.globalAlpha = 1;   
    
    context.fillStyle="#6096d4";
    context.fillRect(0,0,400,400);
    context.fillStyle="#fff";
    context.fillRect(myX,myY,canvas.width-20,60);
    context.strokeRect(myX,myY,canvas.width-20,60);
    for(b=0;b<10;b++){
        context.fillStyle="#cccccc";
        context.fillRect(butX[b],butY[b],50,50);
        context.strokeRect(butX[b],butY[b],50,50);
    }
    context.fillStyle="#cccccc";
        context.fillRect(butX[10],butY[10],50,50);
        context.strokeRect(butX[10],butY[10],50,50);
//    context.fillStyle="#cccccc";
//        context.fillRect(butX[16],butY[16],50,50);
//        context.strokeRect(butX[16],butY[16],50,50);
    
    context.fillStyle="#ad0000";
        context.fillRect(butX[11],butY[11],110,50);
        context.strokeRect(butX[11],butY[11],110,50);
    
    
    for(zb=12;zb<19;zb++){
        context.fillStyle="#3eb910";
        context.fillRect(butX[zb],butY[zb],50,50);
        context.strokeRect(butX[zb],butY[zb],50,50);
    }
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText(izc,vuvX,vuvY);
    
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("0",butX[0]+15,butY[0]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("1",butX[1]+15,butY[1]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("2",butX[2]+15,butY[2]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("3",butX[3]+15,butY[3]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("4",butX[4]+15,butY[4]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("5",butX[5]+15,butY[5]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("6",butX[6]+15,butY[6]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("7",butX[7]+15,butY[7]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("8",butX[8]+15,butY[8]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("9",butX[9]+15,butY[9]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("=",butX[10]+15,butY[10]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("C",butX[11]+45,butY[11]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("+",butX[12]+16,butY[12]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("-",butX[13]+20,butY[13]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("x",butX[14]+15,butY[14]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("/",butX[15]+20,butY[15]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText(".",butX[16]+20,butY[16]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText("(",butX[17]+20,butY[17]+35);
    context.fillStyle="#000";
    context.font="30px Verdana";
    context.fillText(")",butX[18]+20,butY[18]+35);
    
    
    
    requestAnimationFrame(draw);      
}
update();       
draw();
