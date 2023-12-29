// https://editor.p5js.org/jhtitp/sketches/NAReIkM1c
// background 0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
}

function mousePressed() {
  ui_toggleFullScreen()
}

function ui_toggleFullScreen() {
  if (!document.documentElement.requestFullscreen) {
    console.log('NO document.documentElement.requestFullscreen');
    return;
  }
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// https://p5js.org/reference/#/p5/fullscreen
