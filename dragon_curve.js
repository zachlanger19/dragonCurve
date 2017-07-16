	var directions = ["right", "down"];
var sc;
var counter = 0;

function setup() {
	createCanvas(800, 800);
	frameRate(3);
}

function updateCurve(){
	var i;
	var direction = directions[directions.length - 1];
	println("direcitions: " + directions);
	for (i = directions.length-1; i >= 0; i -= 1){
		directions.push(directions[i])
	}
	for (i = directions.length/2; i < directions.length; i += 1){
		if (directions[i] == "down"){
			directions[i] = "left";
		} else if (directions[i] == "left"){
			directions[i] = "up";
		} else if (directions[i] == "up"){
			directions[i] = "right";
		} else if (directions[i] == "right"){
			directions[i] = "down";
		}
	}
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(1);

	push();
		translate(400,400);
		scale(sc)
		var previous_x = 0;
		var previous_y = 0;
		for (var i = 0; i < directions.length; i += 1){
			if (directions[i] == "right"){
				line(previous_x, previous_y, previous_x+10, previous_y);
				previous_x += 10;
			} else if (directions[i] == "down"){
				line(previous_x, previous_y, previous_x, previous_y+10);
				previous_y += 10;
			} else if (directions[i] == "left"){
				line(previous_x, previous_y, previous_x-10, previous_y);
				previous_x -= 10;
			} else if (directions[i] == "up"){
				line(previous_x, previous_y, previous_x, previous_y-10);
				previous_y -= 10;
			}
		}
	pop();

	// updateCurve();
	// sc -= .05;
	if (counter < 16){
		sc = .07
		updateCurve();
		counter += 1;
	}
}

function mousePressed(){
	noLoop();
}