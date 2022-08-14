let cnvs = document.getElementById("unique");
let rows, cols, ctx;
let globalAlpha = 0.02;

let zoff = 0;

let flowfield = [];
const SCL = 30;
const inc = 0.1;

let particles = [];
let am_particles =275;

const noise = new perlinNoise3d();

function setup() {
  ctx = cnvs.getContext("2d");
  if (document.body.getAttribute('class') == "dark") {
    // dark mode
    globalAlpha = 0.02;
  } else {
    globalAlpha = 0.04;
  }

  cols = parseInt(cnvs.width / SCL);
  rows = parseInt(cnvs.height / SCL);

  flowfield = new Array(cols * rows);

  for (let i = 0; i < am_particles; i++) {
    particles[i] = new Particle();
    particles[i].edges(cnvs);
  }
}

function draw() {
  requestAnimationFrame(draw);

  // clear canvas
  if (document.body.getAttribute('class') == "dark") {
    // dark mode
    ctx.fillStyle = "rgb(0,0,0)";
  } else {
    ctx.fillStyle = "rgb(255,255,255)";
  }
  ctx.globalAlpha = globalAlpha;
  ctx.fillRect(0,0,cnvs.width,cnvs.height);
  ctx.globalAlpha = 1.0;
  //ctx.clearRect(0,0,cnvs.width, cnvs.height); // clear canvas

  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = y * cols + x;
      let v = parseInt(noise.get(xoff, yoff, zoff) * 360*4);
      xoff += inc;
      let obj = vectorFromAngle(v);
      obj.changeNorm(100);
      flowfield[index] = obj;
    }
    yoff += inc;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].edges(cnvs);
    particles[i].follow(flowfield, SCL, cols);
    particles[i].update();
    particles[i].show(ctx);
  }

  zoff += 0.001;

  
}

setup();
draw();