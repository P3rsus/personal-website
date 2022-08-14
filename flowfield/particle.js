function Particle() {
  this.pos = new Vector(Math.floor(Math.random()*1919), Math.floor(Math.random()*2099));
  this.vel = new Vector(0, 0);
  this.acc = new Vector(0, 0);
  this.color = Math.floor(Math.random()*6.9)+1;
  this.maxSpeed = 0.8;

  this.update = function () {
    this.vel.add(this.acc);
    if (this.vel.getNorm() > this.maxSpeed) this.vel.changeNorm(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.follow = function (vec, scl, cols) {
    let x = Math.floor(this.pos.x / scl);
    let y = Math.floor(this.pos.y / scl);
    let index = y*cols + x;
    this.applyForce(vec[index]);
  }

  this.show = function (ctx) {
    switch (this.color) {
      case 1:
        ctx.fillStyle = "rgb(254,216,154)";
        break;
      case 2:
        ctx.fillStyle = "rgb(254,216,154)";
        break;
      case 3:
        ctx.fillStyle = "rgb(254,216,154)";
        break;
      case 4:
        ctx.fillStyle = "rgb(249,159,159)";
        break;
      case 5:
        ctx.fillStyle = "rgb(249,159,159)";
        break;
      case 6:
        ctx.fillStyle = "rgb(249,159,159)";
        break;
      case 7:
        ctx.fillStyle = "rgb(40,128,215)";
        break;
    }
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 30, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.fillRect(this.pos.x, this.pos.y, 6, 6);
  };

  this.edges = function (cnvs) {
    if (this.pos.x > cnvs.width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = cnvs.width-1;
    if (this.pos.y > cnvs.height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = cnvs.height-1;
  }
}
