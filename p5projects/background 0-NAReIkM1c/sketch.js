// https://editor.p5js.org/p5name/sketches/NAReIkM1c
// background  0

function setup() {
  createCanvas(windowWidth, windowHeight);
  createA('./README.txt', 'README.txt');
}

function draw() {
  background(0);
}

function mousePressed() {
  let onCanvas = mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
  if (onCanvas) {
    ui_toggleFullScreen()
  }
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
