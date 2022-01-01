/*
© 2021 Sanha, all rights reserved.
*/

// constructor

function complex () {
  let t = typedis(arguments[0]) + typedis(arguments[1]);
  switch (arguments.length) {
    case 1:
      if (t == 'nx') {
        this.re = arguments[0], this.im = 0;
      }
      else if (t == 'cx') {
        this.re = arguments[0].re, this.im = arguments[0].im;
      }
      else {
        let pc = strparse(arguments[0]);
        if (pc) {
          this.re = pc.re, this.im = pc.im;
        }
        else throw new Error();
      }
    break;
    case 2:
      if (t == 'nn') {
        this.re = arguments[0], this.im = arguments[1];
      }
      else if (t == 'cn') {
        if (arguments[0].im) {
          throw new Error();
        }
        else {
          this.re = arguments[0].re, this.im = arguments[1];
        }
      }
      else if (t == 'nc') {
        if (arguments[1].im) {
          throw new Error();
        }
        else {
          this.re = arguments[0], this.im = arguments[1].re;
        }
      }
      else if (t == 'cc') {
        if (arguments[0].im || arguments[1].im) {
          throw new Error();
        }
        else {
          this.re = arguments[0].re, this.im = arguments[1].re;
        }
      }
      else {
        throw new Error();
      }
    break;
    case 3:      
      if (arguments[2] == 'polar') {
        if (t == 'nn') {
          this.re = arguments[0]*Math.cos(arguments[1]);
          this.im = arguments[0]*Math.sin(arguments[1]);
        }
        else if (t == 'cn') {
          if (arguments[0].im) {
            throw new Error();
          }
          else {
            this.re = arguments[0].re*Math.cos(arguments[1]);
            this.im = arguments[0]*reMath.sin(arguments[1]);
          }
        }
        else if (t == 'nc') {
          if (arguments[1].im) {
            throw new Error();
          }
          else {
            this.re = arguments[0]*Math.cos(arguments[1].re);
            this.im = arguments[0]*Math.sin(arguments[1].re);
          }
        }
        else if (t == 'cc') {
          if (arguments[0].im || arguments[1].im) {
            throw new Error();
          }
          else {
            this.re = arguments[0].re*Math.cos(arguments[1].re);
            this.im = arguments[0].re*Math.sin(arguments[1].re);
          }
        }
        else {
          throw new Error();
        }
      }
      else {
        throw new Error();
      }
    break;
  }
}

// string parser

function strparse (str) {
  let sig1 = str.trim().match(/^(\+|\-)/)
  sig1 = sig1 ? String(sig1).slice(0, 1) : String()
  let spt = str.replace(/^(\+|\-)/g, '').split(/\+|\-/);
  
  let re, im;
  if (spt.length == 1) {
    re = 0, im = Number(sig1+spt[0].replace('j', ''));
  }
  else {
    let sig2 = String(str.replace(sig1, '').match(/(\+|\-)/)).slice(0, 1);
    Log.d('sig1: ' + sig1 + '\nsig2: ' + sig2);
    re = Number(sig1+spt[0]), im = Number(sig2+spt[1].replace('j', ''));    
  }
  if (Number.isNaN(re) || Number.isNaN(im)) {
    return null;
  }
  else {
    return { re: re, im: im };
  }
}
	
// type discriminator

function typedis (z) {
  if (!Number.isNaN(Number(z))) {
    return 'n';
  }
  else {
    if (z instanceof complex) {
      return 'c';
    }
    else {
      return 'x';
    }
  }
}

Object.defineProperty(complex.prototype, 'abs', {
  get() {
    return Math.hypot(this.re, this.im);
  },
  set(value) {
    let prevAbs = Number(this.abs);
    this.re = this.re*value/prevAbs;
    this.im = this.im*value/prevAbs;
  }
});

Object.defineProperty(complex.prototype, 'arg', {
  get() {
    return Math.atan2(this.im, this.re);
  },
  set(value) {
    let prevAbs = Number(this.abs);
    this.re = Math.cos(value)*prevAbs;
    this.im = Math.sin(value)*prevAbs;
  }
});

complex.prototype.toString = function () {
  return this.re+((Math.sign(this.im)+1)?'+':'')+this.im+'j';
};

// constants

complex.ONE = new complex(1);
complex.UNIT = new complex(0, 1);
complex.PI = new complex(Math.PI);
complex.E = new complex(Math.E);
complex.EPSILON = new complex(2.220446049250313e-16);

// arithmetic

complex.prototype.add = function (z) {
  let t = typedis(z);
  if (t == 'n') {
    return new complex(this.re + z, this.im);
  }
  else if (t == 'c') {
    return new complex(this.re + z.re, this.im + z.im);
  }
  else {
    throw new Error();
  }
};

complex.prototype.sub = function (z) {
  let t = typedis(z);
  if (t == 'n') {
    return new complex(this.re - z, this.im);
  }
  else if (t == 'c') {
    return new complex(this.re - z.re, this.im - z.im);
  }
  else {
    throw new Error();
  }
};

complex.prototype.mul = function (z) {
  let t = typedis(z);
  if (t == 'n') {
    return new complex(this.re * z, this.im * z);
  }
  else if (t == 'c') {
    return new complex(this.re*z.re - this.im*z.im, this.re*z.im + this.im*z.re);
  }
  else {
    throw new Error();
  }
};

complex.prototype.div = function (z) {
  let t = typedis(z);
  if (t == 'n') {
    return new complex(this.re / z, this.im / z);
  }
  else if (t == 'c') {
    let deno = Math.pow(z.abs, 2);
    return new complex((this.re*z.re + this.im*z.im)/deno, (-this.re*z.im + this.im*z.re)/deno);
  }
  else {
    throw new Error();
  }
};

complex.prototype.inv = function (z) {
  let t = typedis(z);
  if (t == 'n') {
    if (Number.isInteger(z)) {
      let tmp = new complex(1);
      let copy = new complex(this.re, this.im);
      if (z >= 0) {
        for (let i = 0; i < z; i++) {
          tmp = tmp.mul(copy);
        }
      }
      else {
        for (let i = 0; i > z; i--) {
          tmp = tmp.div(copy);
        }
      }
      return tmp;
    }
    else {
      return new complex(Math.pow(this.abs, z), this.arg * z, 'polar');
    }
  }
  else if (t == 'c') {
    let abs = Math.pow(this.abs, z.re) * Math.exp(-z.im*this.arg);
    let arg = z.re*this.arg + z.im*Math.log(this.abs);
    return new complex(abs, arg, 'polar');
  }
  else {
    throw new Error();
  }
};

complex.prototype.eqto = function (z) {
  let t = typedis(z);
  if (t == 'n') {
    return (Math.abs(this.re - z) < complex.EPSILON.re) && (Math.abs(this.im) < complex.EPSILON.re);
  }
  else if (t == 'c') {
    return (Math.abs(this.re - z.re) < complex.EPSILON.re) && (Math.abs(this.im - z.im) < complex.EPSILON.re);
  }
}
    
function cxmath () {
  
}

cxmath.con = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  let tmp = new complex(z);
  return tmp.sub(new complex(0, 2*tmp.im));
};

cxmath.opp = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  let s = new complex(z);
  return new complex(-s.re, -s.im);
};

cxmath.rec = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  return complex.ONE.div(z);
}

cxmath.sqrt = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  return new complex(z).inv(1/2);
};

cxmath.cbrt = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  return new complex(z).inv(1/3);
};

cxmath.exp = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  return complex.E.inv(z);
};

cxmath.log = function (z, base) {
  if (base) {
    let t = typedis(z)+typedis(base);
    if (t.includes('x')) {
      throw new Error();
    }
    let s = new complex(z);
    let zb = new complex(base);
    return new complex(Math.log(s.abs), s.arg).div(new complex(Math.log(zb.abs), zb.arg));
  }
  else {
    let s = new complex(z);
    return new complex(Math.log(s.abs), s.arg);
  }
};

cxmath.ln = function (z) {
  return cxmath.log(z);
};

cxmath.sin = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.exp(s.mul(complex.UNIT)).sub(cxmath.exp(cxmath.opp(s).mul(complex.UNIT))).div(complex.UNIT.mul(2));
};

cxmath.sa = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  return cxmath.sin(z).div(z);
};

cxmath.sinc = function (z) {
  let t = typedis(z);
  if (t == 'x') {
    throw new Error();
  }
  let piz = (new Complex(z)).mul(Math.PI);
  return cxmath.sa(piz);
};

cxmath.cos = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.exp(s.mul(complex.UNIT)).add(cxmath.exp(cxmath.opp(s).mul(complex.UNIT))).div(2);
};

cxmath.tan = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.sin(z).div(cxmath.cos(z));
};

cxmath.csc = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return complex.ONE.div(cxmath.sin(z));
};

cxmath.sec = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return complex.ONE.div(cxmath.cos(z));
};

cxmath.cot = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return complex.ONE.div(cxmath.tan(z));
};

cxmath.asin = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.log(complex.UNIT.mul(s).add(cxmath.sqrt(cxmath.opp(s.inv(2).sub(1))))).mul(cxmath.con(complex.UNIT));
};

cxmath.acos = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return complex.PI.sub(cxmath.asin(z)).sub(2);
};

cxmath.atan = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  return complex.UNIT.div(2).mul(cxmath.log(complex.UNIT.add(s).div(complex.UNIT.sub(s))));
};

cxmath.atan2 = function (w, z) {
  let t = typedis(w)+typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.atan(new complex(w).div(new complex(z)));
};

cxmath.acsc = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.asin(complex.ONE.div(z));
};

cxmath.asec = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.acos(complex.ONE.div(z));
};

cxmath.acot = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.atan(complex.ONE.div(z));
};

cxmath.sinh = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.exp(z).sub(cxmath.exp(cxmath.opp(z))).div(2);
};

cxmath.cosh = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.exp(z).add(cxmath.exp(cxmath.opp(z))).div(2);
};

cxmath.tanh = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.sinh(z).div(cxmath.cosh(z));
};

cxmath.asinh = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.log(s.add(cxmath.sqrt(s.inv(2).add(1))));
};

cxmath.acosh = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.log(s.add(cxmath.sqrt(s.inv(2).sub(1))));
};

cxmath.atanh = function (z) {
  let t = typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.log(complex.ONE.add(z).div(complex.ONE.sub(z))).div(2);
};

cxmath.csgn = function (z) {
  let t = typedis(z);
  if (t == 'n') {
    return Math.sign(z);
  }
  else if (t == 'c') {
    if (z.re) {
      return Math.sign(z.re);
    }
    else {
      return Math.sign(z.im);
    }
  }
  else throw new Error();  
};

// vector

cxmath.norm = function (z) {
  let t = typedis(w)+typedis(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return new complex(z).abs();
}

cxmath.inp = function (a, b) {
  let t = typedis(a) + typedis(b);
  if (t.includes('x')) {
    throw new Error();
  }
  let u = new complex(a), v = new complex(b);  
  return u.abs()*v.abs()*Math.cos(u.arg()-v.arg());
}

cxmath.dist = function (a, b) {
  let t = typedis(a) + typedis(b);
  if (t.includes('x')) {
    throw new Error();
  }
  let u = new complex(a), v = new complex(b);  
  return Math.hypot(u.re-v.re, u.im-v.im);
};

cxmath.random = function () {
  return new complex(Math.random(), Math.random());
};

module.exports = {
  Complex: complex,
  Cxmath: cxmath
};
