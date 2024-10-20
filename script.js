function makeBubble(){
    var clutter = "";
for( var i=1;i<=140;i++){
    var rn = Math.floor(Math.random()*10);  
    clutter += `<div id="bube">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
var  timer=2;
function tickingtimer(){
    var timerint = setInterval(function () {
        if(timer>0){
            timer--;
        document.querySelector(".timer").innerHTML=timer;
        }
        else{
            clearInterval(timerint);
            var pbmt=document.querySelector('#pbtm');
            
            pbmt.innerHTML = `
            <h1 style="text-align: center;">Game Over</h1>
            <h3 id="display" style="text-align: center;">Score : ${score}</h3>

        `
        
        display.style.marginTop = "30px";
        ;

        pbmt.style.display = "block";
        }
    }, 1000)
}
function hitc(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent=rn;
}
var score = 0;
function incresescore() {
    score += 10;
    document.querySelector('.score').textContent=score;
}
hitc();
tickingtimer();
makeBubble();
document.querySelector('#pbtm').addEventListener("click",function (dets) {
    var hitnum = parseInt(document.querySelector('.hit').innerHTML);
    let buble = parseInt(dets.target.innerHTML);
    if (buble==hitnum) {
        incresescore();
        hitc();
        makeBubble();
    }
})