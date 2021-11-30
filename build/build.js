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
    var size = 200;
    var num = 50;
    stroke("black");
    for (var i = 0; i < num; i++) {
        rect(random(0, windowWidth), random(0, windowHeight), (size * i) / num, (size * i) / num);
    }
}
//# sourceMappingURL=build.js.map