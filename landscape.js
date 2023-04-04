/** BACKGROUND **/
//base variables
const ctx = document.getElementsByClassName("canvas")[0].getContext("2d", { alpha: false });

//colour variables
let dbl = "rgb(30, 26, 77)";
let pnk = "rgb(255, 176, 200)";
let dpnk = "rgb(184, 84, 119)";

//sky
const g1 = ctx.createLinearGradient (0, 0, 0, 400);
g1.addColorStop (0, dbl);
g1.addColorStop (1, pnk);

ctx.fillStyle = g1;
ctx.fillRect(0, 0, 600, 600);

//stars
for (let i = 0; i < 40; i++) {               
	ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
	ctx.beginPath();
	ctx.arc (~~(600 * Math.random()), ~~(200 * Math.random()), 1.2 * Math.random() + 0.05, 0, 2*Math.PI);            
	ctx.fill();            
	ctx.closePath();
}

//behind sun
const g3 = ctx.createRadialGradient (300, 300, 90, 300, 300, 250);
g3.addColorStop (0, "rgba(250, 150, 170)");
g3.addColorStop (0.7, "rgba(158, 92, 150, 0)");

ctx.fillStyle = g3;
ctx.fillRect(0, 0, 600, 600);

//sun
const g4 = ctx.createRadialGradient (300, 300, 58, 300, 300, 60);
g4.addColorStop (0, "rgba(255, 255, 255)");
g4.addColorStop (0.7, "rgba(255, 255, 255, 0)");

ctx.fillStyle = g4;
ctx.beginPath();
ctx.arc (300, 300, 60, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

//mountains
//mountain gradients
const wg1 = ctx.createLinearGradient (0, 600, 0, 0);
wg1.addColorStop (0, pnk);
wg1.addColorStop (0.7, "rgba(36, 33, 74, 0)");

const wg2 = ctx.createLinearGradient (0, 600, 0, 0);
wg2.addColorStop (0, pnk);
wg2.addColorStop (0.6, "rgba(12, 18, 41, 0)");

const wg3 = ctx.createLinearGradient (50, 600, 0, 0);
wg3.addColorStop (0, pnk);
wg3.addColorStop (0.45, "rgba(0, 0, 0, 0)");

const g2 = ctx.createLinearGradient (100, 0, 600, 100);
g2.addColorStop (0, dbl);
g2.addColorStop (0.5, dpnk);
g2.addColorStop (1, dbl);

//back mountains
ctx.fillStyle = g2;
ctx.beginPath();
ctx.moveTo (0, 310);
ctx.lineTo (50, 300);            
ctx.bezierCurveTo (60, 305, 80, 330, 120, 320);      
ctx.bezierCurveTo (140, 330, 180, 330, 220, 300);    
ctx.bezierCurveTo (260, 325, 290, 320, 340, 290);    
ctx.bezierCurveTo (370, 300, 400, 340, 500, 290);   
ctx.lineTo (600, 320);
ctx.lineTo (600, 600)
ctx.lineTo (0, 600);
ctx.fill();
ctx.closePath(); 

//this genuinely feels dumb
//but I am too dumb to come up with a better way to do this
ctx.fillStyle = wg1;
ctx.beginPath();
ctx.moveTo (0, 310);
ctx.lineTo (50, 300);            
ctx.bezierCurveTo (60, 305, 80, 330, 120, 320);      
ctx.bezierCurveTo (140, 330, 180, 330, 220, 300);    
ctx.bezierCurveTo (260, 325, 290, 320, 340, 290);    
ctx.bezierCurveTo (370, 300, 400, 340, 500, 290);  
ctx.lineTo (600, 320);
ctx.lineTo (600, 600)
ctx.lineTo (0, 600);
ctx.fill ();
ctx.closePath();

//middle mountains
ctx.fillStyle = g2;
ctx.beginPath();
ctx.moveTo (0, 350);
ctx.lineTo (80, 300);            
ctx.bezierCurveTo (100, 315, 200, 380, 300, 340);  
ctx.bezierCurveTo (350, 380, 400, 360, 560, 300);
ctx.lineTo (600, 310);
ctx.lineTo (600, 600);
ctx.lineTo (0, 600);
ctx.fill();
ctx.closePath(); 

ctx.fillStyle = wg2;
ctx.beginPath();
ctx.moveTo (0, 350);
ctx.lineTo (80, 300);            
ctx.bezierCurveTo (100, 315, 200, 380, 300, 340);  
ctx.bezierCurveTo (350, 380, 400, 360, 560, 300);
ctx.lineTo (600, 310);
ctx.lineTo (600, 600);
ctx.lineTo (0, 600);
ctx.fill ();
ctx.closePath(); 

//front mountains
ctx.fillStyle = g2;
ctx.beginPath();
ctx.moveTo (0, 380);
ctx.lineTo (120, 350);            
ctx.bezierCurveTo (180, 385, 200, 490, 600, 350); 
ctx.lineTo (600, 600);
ctx.lineTo (0, 600);
ctx.fill();
ctx.closePath(); 

ctx.fillStyle = wg3;
ctx.beginPath();
ctx.moveTo (0, 380);
ctx.lineTo (120, 350);            
ctx.bezierCurveTo (180, 385, 200, 490, 600, 350); 
ctx.lineTo (600, 600);
ctx.lineTo (0, 600);
ctx.fill();
ctx.closePath(); 

//filter
//ctx.filter = "url(#posterize)"

/** FOREGROUND **/
//base
const ctx2 = document.getElementsByClassName("canvas")[1].getContext("2d");

let dbl2 = "rgb(25, 14, 43)";
let pnk2 = "rgba(255, 176, 200, 0.2)";

//gradients
const fg1 = ctx2.createRadialGradient (800, 300, 1000, 800, 300, 100);
fg1.addColorStop (0, dbl);
fg1.addColorStop (1, "rgb(89, 48, 64)");

const fg2 = ctx2.createRadialGradient (800, 300, 1000, 800, 300, 100);
fg2.addColorStop (0, "rgb(8, 6, 23)");
fg2.addColorStop (1, "rgb(74, 27, 46)");

const fg3 = ctx2.createRadialGradient (800, 300, 1000, 800, 300, 100);
fg3.addColorStop (0, "rgb(17, 13, 43)");
fg3.addColorStop (1, "rgb(84, 32, 54)");

const wfg1 = ctx2.createLinearGradient (0, 600, 0, 0);
wfg1.addColorStop (0, pnk2);
wfg1.addColorStop (0.3, "rgba(36, 33, 74, 0)");

//plant function
//leafy plant
const plant1 = (s, x, y, c) => {
	ctx2.scale (s, s);
	ctx2.translate (x, y);
	ctx2.fillStyle = c;
	ctx2.beginPath();
	ctx2.moveTo (960, 480);
	ctx2.bezierCurveTo (890, 480, 850, 480, 850, 420);
	ctx2.bezierCurveTo (860, 430, 880, 440, 900, 440);
	ctx2.bezierCurveTo (870, 430, 860, 410, 860, 380);
	ctx2.bezierCurveTo (880, 400, 890, 400, 910, 400);
	ctx2.bezierCurveTo (890, 400, 880, 380, 880, 350);
	ctx2.bezierCurveTo (900, 370, 910, 365, 920, 360);
	ctx2.bezierCurveTo (900, 330, 910, 350, 940, 300);
	ctx2.bezierCurveTo (950, 340, 970, 330, 950, 360);
	ctx2.bezierCurveTo (960, 370, 970, 370, 990, 360);
	ctx2.bezierCurveTo (980, 390, 970, 400, 960, 400);
	ctx2.bezierCurveTo (960, 400, 970, 410, 1000, 390);
	ctx2.bezierCurveTo (1000, 400, 980, 440, 960, 440);
	ctx2.bezierCurveTo (970, 440, 990, 450, 1010, 430);
	ctx2.bezierCurveTo (1010, 460, 990, 480, 960, 480);
	ctx2.closePath ();                          
	ctx2.fill ();
	ctx2.setTransform (1, 0, 0, 1, 0, 0);
};

//spiky plant
const plant2 = (x, y, t, w, h, r, c) => {
	for (let i = 0; i < 15; i++) {
		ctx2.translate (x, y);
		ctx2.rotate (i * t);
		ctx2.fillStyle = c;
		ctx2.beginPath();
		ctx2.roundRect (0, 0, w, h, r);
		ctx2.arc (0, 0, w, 0, 2 * Math.PI);
		ctx2.fill();
		ctx2.setTransform (1, 0, 0, 1, 0, 0);     
	} 
};

//blocky cactus
const plant3 = (x, y, w, h, h2, r, c) => {
	ctx2.fillStyle = c;
	ctx2.beginPath();
	ctx2.roundRect (x, y, w, h, r);
	ctx2.roundRect (x, y - h2, w, h2, r);
	ctx2.fill();
};

//call some plants
plant2 (470, 450, 0.8, 3, 20, 2, fg3)
plant1(0.55, 700, 390, fg2);
plant3 (550, 225, 12, 60, 30, 10, fg2);
plant3 (532, 225, 13, 60, 20, 15, fg2);
plant3 (950, 350, 25, 130, 40, 15, fg2);
plant3 (980, 360, 18, 120, 80, 15, fg2);
plant3 (1200, 320, 40, 160, 70, 15, fg2);
plant2 (1300, 480, 7, 5, 30, 3, fg2);
plant3 (1250, 330, 30, 160, 50, 10, fg2);

//some actually decent cactii
ctx2.strokeStyle = fg2;
ctx2.lineWidth = 12;
ctx2.lineCap = "round";
ctx2.lineJoin = "round";
ctx2.beginPath();
ctx2.moveTo (200, 370);
ctx2.lineTo (200, 600);
ctx2.lineTo (200, 440);
ctx2.lineTo (180, 420);
ctx2.lineTo (180, 390);
ctx2.lineTo (180, 420);
ctx2.lineTo (200, 440);
ctx2.lineTo (200, 460);
ctx2.lineTo (220, 450);
ctx2.lineTo (220, 400);
ctx2.stroke();

ctx2.lineWidth = 18;
ctx2.beginPath();
ctx2.moveTo (800, 300);
ctx2.lineTo (800, 600);
ctx2.lineTo (800, 440);
ctx2.lineTo (770, 420);
ctx2.lineTo (770, 370);
ctx2.lineTo (770, 420);
ctx2.lineTo (800, 440);
ctx2.lineTo (800, 410);
ctx2.lineTo (830, 400);
ctx2.lineTo (830, 330);
ctx2.stroke();

//rounded rock formation
ctx2.scale (1.6, 1.5);
ctx2.translate (-80, -160);
ctx2.fillStyle = fg2;
ctx2.beginPath();
ctx2.moveTo (220, 490);
ctx2.lineTo (250, 450);
ctx2.lineTo (250, 420);
ctx2.lineTo (280, 400);
ctx2.lineTo (280, 350);
ctx2.lineTo (290, 340);
ctx2.lineTo (290, 320);
ctx2.lineTo (330, 290);
ctx2.lineTo (360, 290);
ctx2.lineTo (390, 310);
ctx2.lineTo (410, 310);
ctx2.lineTo (410, 330);
ctx2.lineTo (450, 350);
ctx2.lineTo (450, 380);
ctx2.lineTo (470, 410);
ctx2.lineTo (470, 490);
ctx2.lineTo (370, 490);
ctx2.lineTo (390, 450);
ctx2.lineTo (390, 420);
ctx2.lineTo (400, 400);
ctx2.lineTo (400, 380);
ctx2.lineTo (360, 350);
ctx2.lineTo (340, 350);
ctx2.lineTo (320, 380);
ctx2.lineTo (320, 410);
ctx2.lineTo (330, 420);
ctx2.lineTo (330, 450);
ctx2.lineTo (340, 460);
ctx2.lineTo (340, 490);
ctx2.fill();
ctx2.closePath();

ctx2.fillStyle = fg3;
ctx2.beginPath();
ctx2.moveTo (220, 490);
ctx2.lineTo (250, 450);
ctx2.lineTo (250, 420);
ctx2.lineTo (280, 400);
ctx2.lineTo (280, 350);
ctx2.lineTo (290, 340);
ctx2.lineTo (290, 320);
ctx2.lineTo (330, 290);
ctx2.lineTo (360, 290);
ctx2.lineTo (390, 310);
ctx2.lineTo (410, 310);
ctx2.lineTo (410, 330);
ctx2.lineTo (450, 350);
ctx2.lineTo (450, 380);
ctx2.lineTo (470, 410);
ctx2.lineTo (470, 490);
ctx2.lineTo (450, 490);
ctx2.lineTo (470, 430);
ctx2.lineTo (470, 420);
ctx2.lineTo (450, 420);
ctx2.lineTo (440, 400);
ctx2.lineTo (450, 380);
ctx2.lineTo (450, 350);
ctx2.lineTo (440, 360);
ctx2.lineTo (420, 360);
ctx2.lineTo (430, 340);
ctx2.lineTo (410, 330);
ctx2.lineTo (410, 310);
ctx2.lineTo (400, 320);
ctx2.lineTo (380, 320);
ctx2.lineTo (390, 310);
ctx2.lineTo (360, 290);
ctx2.lineTo (350, 300);
ctx2.lineTo (315, 302);
ctx2.lineTo (330, 290);
ctx2.lineTo (290, 320);
ctx2.lineTo (300, 330);
ctx2.lineTo (300, 350);
ctx2.lineTo (290, 360);
ctx2.lineTo (290, 390);
ctx2.lineTo (280, 400);
ctx2.lineTo (290, 410);
ctx2.lineTo (260, 420);
ctx2.lineTo (250, 420);
ctx2.lineTo (250, 450);
ctx2.lineTo (260, 460);
ctx2.lineTo (250, 480);
ctx2.lineTo (340, 500);
ctx2.lineTo (340, 460);
ctx2.lineTo (330, 450);
ctx2.lineTo (330, 420);
ctx2.lineTo (320, 410);
ctx2.lineTo (310, 420);
ctx2.lineTo (310, 430);
ctx2.lineTo (330, 420);
ctx2.lineTo (330, 450);
ctx2.lineTo (300, 460);
ctx2.lineTo (310, 470);
ctx2.lineTo (340, 470);
ctx2.lineTo (340, 490);
ctx2.lineTo (370, 490);
ctx2.lineTo (390, 450);
ctx2.lineTo (390, 420);
ctx2.lineTo (400, 400);
ctx2.lineTo (410, 400);
ctx2.lineTo (400, 420);
ctx2.lineTo (390, 420);
ctx2.lineTo (390, 450);
ctx2.lineTo (400, 470);
ctx2.closePath();
ctx2.fill();
ctx2.setTransform (1, 0, 0, 1, 0, 0);

//ground
ctx2.fillStyle = fg1;
ctx2.beginPath();
ctx2.moveTo (0, 450);
ctx2.bezierCurveTo (100, 490, 400, 500, 550, 420);
ctx2.bezierCurveTo (600, 430, 800, 520, 1200, 440);
ctx2.bezierCurveTo (1300, 500, 1500, 490, 1600, 450);
ctx2.lineTo (1600, 600);
ctx2.lineTo (0, 600);
ctx2.fill();
ctx2.closePath();

ctx2.fillStyle = wfg1;
ctx2.beginPath();
ctx2.moveTo (0, 450);
ctx2.bezierCurveTo (100, 490, 400, 500, 550, 420);
ctx2.bezierCurveTo (600, 430, 800, 520, 1200, 440);
ctx2.bezierCurveTo (1300, 500, 1500, 490, 1600, 450);
ctx2.lineTo (1600, 600);
ctx2.lineTo (0, 600);
ctx2.fill();
ctx2.closePath();

//call some more plants
plant2 (1400, 600, 0.7, 12, 60, 3, dbl2);
plant1 (0.6, -700, 550, dbl2);
plant3 (210, 550, 20, 80, 30, 10, dbl2);

/** ANIMATION **/
//set canvas
const ctx3 = document.getElementsByClassName("canvas")[2].getContext("2d", { alpha: false });

//gradient
const ag1 = ctx3.createRadialGradient (800, 300, 1000, 800, 300, 100);
ag1.addColorStop (0, "rgb(23, 18, 56)");
ag1.addColorStop (1, "rgb(128, 55, 86)");

//hot air balloon
const balloon = (s, x, y) => {
	ctx3.scale (s, s);
	ctx3.translate (x, y);
	ctx3.fillStyle = ag1;
	ctx3.beginPath ();
	ctx3.arc (100, 100, 40, 0.6, Math.PI * 0.5 + 0.9, -1);
	ctx3.lineTo (95, 150);
	ctx3.lineTo (110, 150);
	ctx3.closePath();
	ctx3.fill ();

	ctx3.beginPath();
	ctx3.roundRect (95, 152, 15, 10, 5);
	ctx3.fill ();
	ctx3.setTransform (1, 0, 0, 1, 0, 0);
};

//my logo
//if you are curious as to why these numbers are not rounded or 5 like the rest of the code, I just copied the coordinates of my SVG logo [also handmade, ofc] from my subpage, then translated/scaled it
const logo = (s, x, y, st, lw) => {
	ctx3.scale (s, s);
	ctx3.translate (x, y);
	ctx3.strokeStyle = st;
	ctx3.lineWidth = lw;
	ctx3.beginPath();
	ctx3.moveTo (80, 33);
	ctx3.lineTo (45, 33);
	ctx3.lineTo (35, 58);
	ctx3.lineTo (52, 69);
	ctx3.lineTo (58, 65);
	ctx3.quadraticCurveTo (39, 44, 71, 41);
	ctx3.lineTo (76, 48);
	ctx3.quadraticCurveTo (48, 48, 70, 64);
	ctx3.quadraticCurveTo (77, 82, 52, 82);
	ctx3.stroke();
	ctx3.setTransform (1, 0, 0, 1, 0, 0);
};

//animate
let x = 0;

const draw = () => {
	ctx3.drawImage (document.getElementsByClassName("canvas")[0], 0, -20 + Math.sin (x * 0.01) * 20, 600, 600);

	balloon (0.6, 100, 100 + Math.sin (x * 0.008) * 40);
	balloon (0.4, 80, 400 + Math.sin (x * 0.01) * 20);
	balloon (0.5, 800, 300 + Math.sin (x * 0.02) * 30);

	ctx3.drawImage (document.getElementsByClassName("canvas")[1], -500 + Math.sin(x * 0.004) * 500, 20 + Math.sin(x * 0.01) * 20, 1600, 600);

	logo (0.8, 640, 640, "rgba(255, 176, 200, 0.6)", 3);

	x--; 

	//setTimeout at 0 to ensure it runs at your     browser's fastest speed ;p
	setTimeout(() => {
		requestAnimationFrame (draw);
	}, 1000 / 0);

};

draw();
