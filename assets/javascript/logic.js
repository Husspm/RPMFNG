$(document).ready(function(){
var locked = false;
var playerLock = false;
var opponentLock = false;
var a = 0;
var b = 0; 
var c = 0;
var d = 0;
var pCritical = 0;
var oCritical = 0;
var pCritMultiply = 0;
var oCritMultiply = 0;
var player = { "one": {name: "Memory", attack: 10, defend: 8, health:180, multiply: 3},
				 "two": {name:"Resistor", attack:13, defend:4, health: 130, multiply: 3},
				 "three": {name:"Capacitor", attack:8, defend: 6, health: 230, multiply: 1.5},
				 "four": {name:"Battery", attack:6, defend:12, health: 260, multiply: 1.5}};
var state = {
		damageValue: function(y, z, g, h, j, k, m, n){
		if (locked === false){
		$("#play").html(" ");
		$("#opponent").html(" ");
		var x = Math.floor((Math.random() * 10) + 1);
		if (b <= 0){
		$("#victor").html("You win!");
		y=0;
		g=0;
		locked = true;
		}
		else if (a <= 0){
		$("#victor").html("You lose!");
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
		$("#play").append("damage: "+ y + "<hr>");
		$("#opponent").append("damage: "+ g + "<hr>");
		$("#play").append("health: " + a + "<hr>");
		$("#opponent").append("health: " + b + "<hr>");
		}
	}
}
var calculateDamage = state.damageValue;
$("#creator").on("click", function(){
	$("#play").html(" ");
	$("#opponent").html(" ");
	$("span").html(" ");
	locked = false;
	playerLock = false;
	opponentLock = false;
});
$("#select").on("click", function (){
if (playerLock === false){
playerLock = true;
$(".name").html(player.one.name + "<hr>");
a = player.one.health;
c = player.one.attack;
pCritical = 9;
pCritMultiply = player.one.multiply;
}else if (opponentLock === false){
opponentLock = true;
$(".name2").html(player.one.name + "<hr>");
b = player.one.health;
d = player.one.attack;
oCritical = 2;
oCritMultiply = player.one.multiply;
}
});
$("#select2").on("click", function (){
if (playerLock === false){
playerLock = true;
$(".name").html(player.two.name + "<hr>");
a = player.two.health;
c = player.two.attack;
pCritical = 6;
pCritMultiply = player.two.multiply;
}else if (opponentLock === false){
opponentLock = true;
$(".name2").html(player.two.name + "<hr>");
b = player.two.health;
d = player.two.attack;
oCritical = 5;
oCritMultiply = player.two.multiply;
}
});
$("#select3").on("click", function (){
if (playerLock === false){
playerLock = true;
selected = true;
$(".name").html(player.three.name + "<hr>");
a = player.three.health;
c = player.three.attack;
pCritical = 7;
pCritMultiply = player.three.multiply;
}else if (opponentLock === false){
opponentLock = true;
$(".name2").html(player.three.name + "<hr>");
b = player.three.health;
d = player.three.attack;
oCritical = 4;
oCritMultiply = player.three.multiply;
}
});
$("#select4").on("click", function (){
if (playerLock === false){
playerLock = true;
$(".name").html(player.four.name + "<hr>");
a = player.four.health;
c = player.four.attack;
pCritical = 5;
pCritMultiply = player.four.multiply;
}else if (opponentLock === false){
opponentLock = true;
$(".name2").html(player.four.name + "<hr>");
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