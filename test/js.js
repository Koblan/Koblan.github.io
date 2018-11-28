function rand (min, max) {
    k = Math.floor(Math.random() * (max - min) + min);
       return (Math.round( k / s) * s);
}
function newA () {
    a = [rand(0, innerWidth),rand(0, innerHeight)];
}
function newB () {
    sBody = [{x: 0,y: 0}];
}
var gP = document.ElementById("gP") 
g = gP.getContext("2d"),
sBody = null,
d = 1,
a = null,
a = 30; newB();newA();
gP.width = innerWidth;
gP.height = innerHeight;
setInterval(function(){
    g.clearRect(0,0,gP.width,gP.height); 
    g.fillStyle = "red"; 
    g.fillRect(...a, s, s); 
    g.fillStyle = "#000"; 
}, 60);