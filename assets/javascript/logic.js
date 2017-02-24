$(document).ready(function(){
var locked = false;
var playerLock = false;
var opponentLock = false;
var test;
var a = 0;
var b = 0; 
var c = 0;
var d = 0;
var pCritical = 0;
var oCritical = 0;
var pCritMultiply = 0;
var oCritMultiply = 0;
var player = { "one": {name: "dude", attack: 10, defend: 8, health:180, multiply: 3},
				 "two": {name:"man", attack:13, defend:4, health: 130, multiply: 3},
				 "three": {name:"guy", attack:8, defend: 6, health: 230, multiply: 1.5},
				 "four": {name:"person", attack:6, defend:12, health: 260, multiply: 1.5}};
var state = {
		damageValue: function(y, z, g, h, j, k, m, n){
		if (locked === false){
		$("#play").html(" ");
		$("#opponent").html(" ");
		var x = Math.floor((Math.random() * 10) + 1);
		if (b <= 0){
		alert("You win!");
		y=0;
		g=0;
		locked = true;
		}
		else if (a <= 0){
		alert("You Lose");
		locked = true;
		y=0;
		g=0;	
		}
		else if (a && b <=0){
		alert("Draw");
		y=0;
		g=0;
		locked = true;
		}
		else if (x>=j){
		var y = y * m;
		}else if (x<=k){
		var g = g * n;
		}
		a = h - g;	
		b = z - y;
		$("#play").append("player damage: "+ y );
		$("#opponent").append("opponent damage: "+ g );
		$("#play").append("player health is: " + a );
		$("#opponent").append("opponent health is: " + b );
		}
	}
}
var calculateDamage = state.damageValue;
$("#creator").on("click", function(){
	$("#play").html(" ");
	$("#opponent").html(" ");
	locked = false;
	playerLock = false;
	opponentLock = false;
});
$("#select").on("click", function (){
if (playerLock === false){
playerLock = true;
a = player.one.health;
c = player.one.attack;
pCritical = 9;
pCritMultiply = player.one.multiply;
}else if (opponentLock === false){
opponentLock = true;
b = player.one.health;
d = player.one.attack;
oCritical = 2;
oCritMultiply = player.one.multiply;
}
});
$("#select2").on("click", function (){
if (playerLock === false){
playerLock = true;
a = player.two.health;
c = player.two.attack;
pCritical = 6;
pCritMultiply = player.two.multiply;
}else if (opponentLock === false){
opponentLock = true;
b = player.two.health;
d = player.two.attack;
oCritical = 5;
oCritMultiply = player.two.multiply;
}
});
$("#select3").on("click", function (){
if (playerLock === false){
playerLock = true;
a = player.three.health;
c = player.three.attack;
pCritical = 7;
pCritMultiply = player.three.multiply;
}else if (opponentLock === false){
opponentLock = true;
b = player.three.health;
d = player.three.attack;
oCritical = 4;
oCritMultiply = player.three.multiply;
}
});
$("#select4").on("click", function (){
if (playerLock === false){
playerLock = true;
a = player.four.health;
c = player.four.attack;
pCritical = 5;
pCritMultiply = player.four.multiply;
}else if (opponentLock === false){
opponentLock = true;
b = player.four.health;
d = player.four.attack;
oCritical = 6;
oCritMultiply = player.four.multiply;
}
});
$("#deletor").on("click", function(){
	calculateDamage(c, b, d, a, pCritical, oCritical, pCritMultiply, oCritMultiply);	
	});
});