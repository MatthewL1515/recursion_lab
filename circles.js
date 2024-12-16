function setup() {
  createCanvas(400, 400)
  noFill()
  noLoop()
}

function draw() {
  background(220)
  rSquare(width / 2, height / 2, width / 2)
}

function rSquare(x, y, s) {
  if (s > 4) { // Base case
    rectMode(CENTER)
    square(x, y, s)

    const newS = s / 2 // Square size divided by 2
    rSquare(x - newS / 2, y - newS / 2, newS) // Top-left
    rSquare(x + newS / 2, y - newS / 2, newS) // Top-right
    rSquare(x - newS / 2, y + newS / 2, newS) // Bottom-left
    rSquare(x + newS / 2, y + newS / 2, newS) // Bottom-right
  }
}
