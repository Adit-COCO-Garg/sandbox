'use strict';

class Blob extends Blobs{
	// #blobType = "standard";
	// #speed = 3;
	constructor(){
		super();	
	}
	draw_blobs(){
		ellipse(this.x, this.y, this.radius, this.radius);
	}

	move(){
		this.y+=this.speed;
	}
}