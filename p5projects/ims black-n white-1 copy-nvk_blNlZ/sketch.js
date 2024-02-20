// https://editor.p5js.org/jht9629-nyu/sketches/8Iazn1D_P
// ims black-n white-1

let xpos = 0;
let ypos = 0;
let xlen;
let ylen;
let debug = 1;
let dim = { width: 400, height: 400 };
let fullScreenBtn;

function setup() {
  if (!debug) {
    dim.width = windowWidth;
    dim.height = windowHeight;
  }
  createCanvas(dim.width, dim.height);
  noStroke();

  fullScreenBtn = createButton("Full Screen").mousePressed(full_screen_action);
  fullScreenBtn.style("font-size:42px");

  init_dim();
}

function draw() {
  // background(220);
  fill("black");
  rect(0,0,width,height)
  strokeWeight(1)
  stroke(255)
  // xpos = random(0,width)
  // ypos = random(0,height)
  point(xpos,ypos);
//   rect(0, 0, xpos, ylen);
//   fill("red");
//   rect(xpos % width, 0, xlen, ylen);
//   fill("green");
//   rect((xpos + xlen) % width, 0, xlen, ylen);
//   fill("yellow");
//   rect((xpos + xlen + xlen) % width, 0, xlen, ylen);

//   xpos = (xpos + 1) % width;
}

function init_dim() {
  xlen = width / 3;
  ylen = height;
}

// From
// https://editor.p5js.org/jht1493/sketches/5LgILr8RF

function full_screen_action() {
  ui_remove_all();
  ui_toggleFullScreen();
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}

function ui_present_window() {
  resizeCanvas(windowWidth, windowHeight);
  init_dim();
}

function ui_remove_all() {
  fullScreenBtn.remove();
}

function ui_toggleFullScreen() {
  fullscreen(1);
  // if (!document.documentElement.requestFullscreen) {
  //   console.log("NO document.documentElement.requestFullscreen");
  //   return;
  // }
  // if (!document.fullscreenElement) {
  //   document.documentElement.requestFullscreen();
  // } else {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   }
  // }
}



// https://editor.p5js.org/jht9629-nyu/sketches/3VKJ-q8ar
// ims03-jht scrolling color bars

