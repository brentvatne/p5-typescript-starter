function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noFill();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  const size = 200;
  const num = 50;

  stroke("black");

  for (let i = 0; i < num; i++) {
    rect(
      random(0, windowWidth),
      random(0, windowHeight),
      (size * i) / num,
      (size * i) / num
    );
  }
}
