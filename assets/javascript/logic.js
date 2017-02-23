$(document).ready(function(){
var locked = false;
var playerLock = false;
var a = 0;
var b = 0; 
var c = 0;
var d = 0;
var player = { one: {name: "dude", attack: 10, defend: 8, health:180},
				 two: {name:"man", attack:13, defend:4, health: 150},
				 three: {name:"guy", attack:8, defend: 6, health: 230}};
var state = {
		damageValue: function(y, z, g, h){
		if (locked === false){
		$(".arena").html(" ");
		var x = Math.floor((Math.random() * 5) + 1);
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
		}
		else if (x<3){
		var y = y * 2;
		}else if (x>3){
		var g = g * 2;
		}
		a = h - g;	
		b = z - y;
		$(".arena").append("player damage: "+ y + "<hr>");
		$(".arena").append("opponent damage: "+ g + "<hr>");
		$(".arena").append("player health is: " + a+ "<hr>");
		$(".arena").append("opponent health is: " + b+ "<hr>");
		}
	}
}
var calculateDamage = state.damageValue;
$("#creator").on("click", function(){
	locked = false;
	playerLock = false;
});
$("#select").on("click", function (){
if (playerLock === false){
playerLock = true;
a = player.one.health;
b = player.two.health;
c = player.one.attack;
d = player.two.attack;
}
});
$("#select2").on("click", function (){
if (playerLock === false){
playerLock = true;
a = player.two.health;
b = player.one.health;
c = player.two.attack;
d = player.one.attack;
}
});
$("#select3").on("click", function (){
if (playerLock === false){
playerLock = true;
a = player.three.health;
b = player.one.health;
c = player.three.attack;
d = player.one.attack;
}
});
$("#deletor").on("click", function(){
	calculateDamage(c, b, d, a);
	});
});
