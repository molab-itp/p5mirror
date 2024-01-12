// https://editor.p5js.org/p5name/sketches/zSFx_e8ZD
// 2024-01-11 #genuary11
// https://openprocessing.org/sketch/2142252
// random grid of shapes - rects and triangles
// mouse press to start/stop rotation
// shift + mouse press for new grid

let my = {};

function setup() {
	my.shapes = []
    // https://github.com/processing/p5.js/blob/v1.9.0/src/core/environment.js#L732
    // my.width = window.innerWidth
	// my.width = windowWidth
	// my.height = windowHeight
	my.width = 400
	my.height = 800
	my.step = 50
	my.len = 20
	my.left = (-my.width + my.step) * 0.5
	my.right = my.width * 0.5
	my.top = (-my.height + my.step) * 0.5;
	my.bottom = my.height * 0.5
	my.rotate = 0;
	my.scale = 0;
	createCanvas(my.width, my.height, WEBGL);
	background(0)
	init_shapes()
	// createDiv('press mouse for new grid')
}

function draw() {
	background(50);
	ortho()
	ambientLight(255); // Set the ambient light intensity to 255 (white light)
	noStroke()
	my.shapes.forEach(shape => {
		shape.show()
	})
}

function mousePressed() {
	// my.rotate = !my.rotate
	console.log('mousePressed my.rotate=' + my.rotate)
	if (keyIsDown(SHIFT)) {
		init_shapes()
	} else {
		my.shapes.forEach(shape => {
			shape.rotate = !shape.rotate
		})
	}
}

function init_shapes() {
	my.shapes = [];
	for (let x = my.left; x < my.right; x += my.step) {
		for (let y = my.top; y <= my.bottom; y += my.step) {
			my.shapes.push(new Shape(random(1000), x, y))
		}
	} {
		let shape = random(my.shapes)
		shape.isTriangle = 1
	} {
		let shape = random(my.shapes)
		shape.isHidden = 1
	}

	console.log('init_shapes n shapes ' + my.shapes.length)
}

class Shape {
	constructor(rid, x, y) {
		// console.log('shape rid x y', rid, x, y)
		this.rid = rid
		this.x = x
		this.y = y
		// this.isTriangle = random() > 0.99
		// this.offset = random() > 0.3
		this.offset = 0
		this.offsetX = random([-my.len, -20, 0, 20, 30])
		this.offsetY = random([-30, -20, 0, 20, 30])
		this.scale = my.scale;
		this.scaleX = random([-1.5, -1.2, -1, 0.8, 1, 1.2, 1.5])
		this.scaleY = random([-1.4, -1.2, -1, 0.8, 1, 1.2, 1.4])
		this.ry = random([1, 2])
		this.rz = random([0, PI])
		this.clr = random_color()
		this.rotate = my.rotate;
		this.angleZ = 0;
		// this.angleZ = this.rid;
	}
	show() {
		if (this.isHidden) return;
		push()
		translate(this.x, this.y)
		if (this.offset) translate(this.offsetX, this.offsetY)
		if (this.scale) scale(this.scaleX, this.scaleY)
		if (this.rotate) this.angleZ += 0.01;
		rotateZ(this.angleZ);
		// rotateZ((this.rid + this.frameCount) * 0.01);
		fill(color(this.clr))
		beginShape();
		vertex(-my.len, -my.len, 0);
		vertex(my.len, -my.len, 0);
		vertex(my.len, my.len, 0);
		if (!this.isTriangle) vertex(-my.len, my.len, 0);
		endShape(CLOSE);
		pop()
	}
}

function random_color() {
	// return random("3772ff-df2935-fdca40".split("-").map(a => "#" + a));
	return random("ff0000-00ff00-ffff00".split("-").map(a => "#" + a));
}

// https://openprocessing.org/sketch/2142138

// https://openprocessing.org/sketch/2142065
// https://twitter.com/search?q=%23genuary11&src=typeahead_click

// In the style of Anni Albers (1899-1994)