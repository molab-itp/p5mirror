// https://editor.p5js.org/jhtitp/sketches/3K6pk1kI6
// image  array sin copy

let img;
let imgs = [];
let n = 10;

let sw = {};

function preload() {
  img = loadImage("jht-w128.png");
}

function setup() {
  createCanvas(400, 400);

  let w = img.width;
  let h = img.height;
  console.log("w", w, "h", h);

  let s = int(h / n);

  for (let i = 0; i < n; i++) {
    imgs[i] = createImage(w, s);
    imgs[i].copy(img, 0, s * i, w, s, 0, 0, w, s);
  }

  init_sw();
}

function draw() {
  background(220);

  let mw = width / 2 - img.width / 2;
  image(img, mw, 0);

  let w = img.width;
  let h = img.height;

  // let s = int(h / n) * 2;
  let s = int(h / n);

  sw.theta += 0.02;
  sw.a = sw.theta;

  for (let i = 0; i < n; i++) {
    let val = sin(sw.a) * sw.amplitude;

    image(imgs[i], mw + val, s * i);

    sw.a += sw.da;
  }
}

function init_sw() {
  sw.xspacing = 16; // Distance between each horizontal location
  sw.theta = 0.0; // Start angle at 0
  sw.amplitude = width / 16; // Height of wave
  sw.period = 500.0; // How many pixels before the wave repeats

  let w = height + 16;
  sw.da = (TWO_PI / sw.period) * sw.xspacing;
  sw.numa = floor(w / sw.xspacing);
}

function draw_sine_wave() {
  sw.theta += 0.02;
  sw.a = sw.theta;
  for (let i = 0; i < sw.numa; i++) {
    //
    let val = sin(sw.a) * sw.amplitude;

    let y = i * sw.xspacing;
    let x = width / 2 + val;

    ellipse(x, y, 16, 16);

    sw.a += sw.da;
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/0OHUgo_c6
// image array sin

// https://editor.p5js.org/jht9629-nyu/sketches/P-AHc4NF9
