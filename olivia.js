let bubble00 = [];

let bubble18 = [];
let rippleX;
let rippleY;
let rippleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(let i = 0; i < 14; i++) {
    bubble00[i] = new Bubble(random(windowWidth), random(windowHeight), random(-3, 3), random(-3, 3));
  }
  
  for(let f = 0; f < 10; f++) {
    bubble18[f] = new Bubble(random(windowWidth), random(windowHeight), random(-3, 3), random(-3, 3));
  }
  
  strokeWeight(3);
  rippleX = windowWidth / 2;
  rippleY = windowHeight / 2;
  circleSize = 0;
}

function draw() {
  
  let speed = abs(winMouseX - pwinMouseX);
  let r = map(mouseX, 0, windowWidth, 0, 255);
  let g = map(mouseY, 0, windowHeight, 0, 255);
  let b = map(speed, 0, 50, 0, 255);
  background(r, g, b);
  
  for(let i = 0; i < bubble00.length; i++) {
    bubble00[i].move();
    bubble00[i].display();
    strokeWeight(1);
    fill(255, 120);
    stroke(255, 200);
    
  }
  
  for(let f = 0; f < bubble18.length; f++) {
    bubble18[f].move();
    bubble18[f].display();
    fill(255, 35);
  }
  
  rippleSize += 12;

  stroke(255, 80);
  circle(rippleX, rippleY, rippleSize);
  circle(rippleX, rippleY, rippleSize * .85);
  circle(rippleX, rippleY, rippleSize * .65);
  circle(rippleX, rippleY, rippleSize * .45);
}

class Bubble {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  
  move() {
    this.x += this.xSpeed;
    if (this.x < 0 || this.x > windowWidth) {
      this.xSpeed *= -1;
    }
    
    this.y += this.ySpeed;
    if (this.y < 0 || this.y > windowHeight) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    circle(this.x, this.y, 200);
  }
}

function mousePressed(){
  rippleX = mouseX;
  rippleY = mouseY;
  rippleSize = 10;
}
