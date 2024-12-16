let fibs = [0,1]
let n = 1

function setup() {
  createCanvas(400, 400)
  noLoop()
  textAlign(CENTER, CENTER)
}

function draw() {
  background(220)
  // text(`${n}th fibonacci number: ${fibs[n]}` ,width/2,height/2)
  text(`${n}th fibonacci number: ${fib(n)}`,width/2,height/2)
  
}

function keyPressed() {
  if( key === " " ) {
    n += 1    
    redraw()
  }
}


// Going to edit here only
function fib(n) {
  if( n < 1 ) { // error/base case
    return 0
  } 
  
  for (let i = fibs.length; i <= n; i++) { // found .length to be # of values in array
    fibs[i] = fibs[i - 1] + fibs[i - 2] // Adding prev. 2 numbers ONLY
  }
    
  return fibs[n] // Store calculated numbers in array
}
