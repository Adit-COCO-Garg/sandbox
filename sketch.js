/**
 * Adit Garg
 * IGME-102: Project 2, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

var h, w;

function windowResized() {
	h = innerHeight
	w = innerWidth
	canvas = resizeCanvas(innerWidth, innerHeight);
	//background(207, 211, 212); //Light Gray Background
}

/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	//Canvas setup
	h = innerHeight;
	w = innerWidth;
	canvas = createCanvas(w, h); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	noStroke(); //No stroke
}

function setup(){
	canvasCreat(); //canvas creator function called
	Blob_generator()
	
}



function draw(){
	
}



