class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getNorm() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    changeNorm(norm) {
        let posx, posy;
        if (this.x >= 0) posx = 1; else posx = -1;
        if (this.y >= 0) posy = 1; else posy = -1;
        let angle = Math.atan(this.y / this.x);
        this.x = Math.cos(angle)*norm * posx;
        this.y = Math.sin(angle)*norm * posy;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    mult(a) {
        this.x *= a;
        this.y *= a;
    }
}

function vectorFromAngle(ang) {
    let x = Math.cos(ang * Math.PI / 180);
    let y = Math.sin(ang * Math.PI / 180);
    let a = new Vector(x, y);
    return a;
}