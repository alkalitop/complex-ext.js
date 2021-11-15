/*
© 2021 Sanha, all rights reserved.
*/

// constructor

function complex () {
  let t = complex._typer(arguments[0])+complex._typer(arguments[1]);
  switch (arguments.length) {
    case 1:   
      if (t == 'nx') {
        this.re = arguments[0], this.im = 0;
      }
      else if (t == 'cx') {
        this.re = arguments[0].re, this.im = arguments[0].im;
      }
      else {
        throw new Error();
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

// type disc

complex._typer = function (z) {
  if ((typeof z == 'number' || typeof z == 'string') && !Number.isNaN(z)) {
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
  let t = complex._typer(z);
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
  let t = complex._typer(z);
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
  let t = complex._typer(z);
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
  let t = complex._typer(z);
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
  let t = complex._typer(z);
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

complex.eqto = function (z) {
  let t = complex._typer(z);
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
  let t = complex._typer(z);
  if (t == 'x') {
    throw new Error();
  }
  let tmp = new complex(z);
  return tmp.sub(new complex(0, 2*tmp.im));
};

cxmath.opp = function (z) {
  let t = complex._typer(z);
  if (t == 'x') {
    throw new Error();
  }
  let tmp = new complex(z);
  return tmp.sub(new complex(2*tmp.re, 2*tmp.im));
};

cxmath.sqrt = function (z) {
  let t = complex._typer(z);
  if (t == 'x') {
    throw new Error();
  }
  return new complex(z).inv(1/2);
};

cxmath.cbrt = function (z) {
  let t = complex._typer(z);
  if (t == 'x') {
    throw new Error();
  }
  return new complex(z).inv(1/3);
};

cxmath.exp = function (z) {
  let t = complex._typer(z);
  if (t == 'x') {
    throw new Error();
  }
  return complex.E.inv(z);
};

cxmath.log = function (z, base) {
  if (base) {
    let t = complex._typer(z)+complex._typer(base);
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
  let t = complex._typer(z);
  if (t == 'x') {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.exp(s.mul(complex.UNIT)).sub(cxmath.exp(cxmath.opp(s).mul(complex.UNIT))).div(complex.UNIT.mul(2));
};

cxmath.sa = function (z) {
  let t = complex._typer(z);
  if (t == 'x') {
    throw new Error();
  }
  return cxmath.sin(z).div(z);
};

cxmath.sinc = function (z) {
  let t = complex._typer(z);
  if (t == 'x') {
    throw new Error();
  }
  let piz = (new Complex(z)).mul(Math.PI);
  return cxmath.sa(piz);
};

cxmath.cos = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.exp(s.mul(complex.UNIT)).add(cxmath.exp(cxmath.opp(s).mul(complex.UNIT))).div(2);
};

cxmath.tan = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.sin(z).div(cxmath.cos(z));
};

cxmath.csc = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return (new Complex(1)).div(cxmath.sin(z));
};

cxmath.sec = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return (new Complex(1)).div(cxmath.cos(z));
};

cxmath.cot = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return (new Complex(1)).div(cxmath.tan(z));
};

cxmath.asin = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  let i = new complex(0, 1);
  return cxmath.log(i.mul(s).add(cxmath.sqrt(cxmath.opp(s.inv(2).sub(1))))).mul(cxmath.con(i));
};

cxmath.acos = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let PI = new complex(Math.PI);
  return PI.sub(cxmath.asin(z)).sub(2);
};

cxmath.atan = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  let i = new complex(0, 1);
  return i.div(2).mul(cxmath.log(i.add(s).div(i.sub(s))));
};

cxmath.atan2 = function (w, z) {
  let t = complex._typer(w)+complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.atan(new complex(w).div(new complex(z)));
};

cxmath.acsc = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.asin((new Complex(1)).div(z));
};

cxmath.asec = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.acos((new Complex(1)).div(z));
};

cxmath.acot = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.atan((new Complex(1)).div(z));
};

cxmath.sinh = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.exp(z).sub(cxmath.exp(cxmath.opp(z))).div(2);
};

cxmath.cosh = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.exp(z).add(cxmath.exp(cxmath.opp(z))).div(2);
};

cxmath.tanh = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  return cxmath.sinh(z).div(cxmath.cosh(z));
};

cxmath.asinh = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.log(s.add(cxmath.sqrt(s.inv(2).add(1))));
};

cxmath.acosh = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let s = new complex(z);
  return cxmath.log(s.add(cxmath.sqrt(s.inv(2).sub(1))));
};

cxmath.atanh = function (z) {
  let t = complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let one = new complex(1, 0);
  return cxmath.log(one.add(z).div(one.sub(z))).div(2);
};

cxmath.csgn = function (z) {
  let t = complex._typer(z);
  if (t == 'n') {
    return new complex(Math.sign(z));
  }
  else if (t == 'c') {
    if (z.re) {
      return new complex(Math.sign(z.re));
    }
    else {
      return new complex(Math.sign(z.im));
    }
  }
  else throw new Error();  
};

cxmath.am = function () {
  let args = Array.from(arguments);
  let t = args.map(el => complex._typer(el));
  if (t.includes('x')) {
    throw new Error();
  }
  return args.map(el => new complex(el)).reduce((a, b) => a.add(b)).div(args.length);
};

cxmath.gm = function () {
  let args = Array.from(arguments);
  let t = args.map(el => complex._typer(el));
  if (t.includes('x')) {
    throw new Error();
  }
  return args.map(el => new complex(el)).reduce((a, b) => a.mul(b)).inv(1/args.length);
};

cxmath.dist = function (w, z) {
  let t = complex._typer(w)+complex._typer(z);
  if (t.includes('x')) {
    throw new Error();
  }
  let u = new complex(w), v = new complex(z);  
  return new complex(Math.hypot(u.re-v.re, u.im-v.im));
};

cxmath.random = function () {
  return new complex(Math.random(), Math.random());
};

/* ----- ----- ----- */

function _precedence (operator, line, left, right) {
  let validIndex = [];
  let lineCopy = line;
  
  let sep = [];
  
  let cursor = lineCopy.indexOf(operator);
  while (cursor >= 0) {
    lineCopy = lineCopy.replace(operator, '\0'.repeat(operator.length));
    validIndex.push(cursor);
    cursor = lineCopy.indexOf(operator);
  }
  
  for (let ind of validIndex) {
    let cursorL = ind - 1, depthL = 1;
    let cursorR = ind + operator.length, depthR = 1;
    
    if (left) {
      while (depthL > 0) {
        cursorL--;
        if (line[cursorL] == '(') {
          depthL--;
        }
        else if (line[cursorL] == ')') {
          depthL++;
        }
      }
    }
    
    if (right) {
      while (depthR > 0) {
        cursorR++;
        if (line[cursorR] == '(') {
          depthR++;
        }
        else if (line[cursorR] == ')') {
          depthR--;
        }
      }
    }
    
    sep.push([cursorL, cursorR]);
  }
  
  let lineSplit = line.split('');
  
  sep.forEach(el => {
    if (left) lineSplit[el[0]] = '((';
    if (right) lineSplit[el[1]] = '))';
  });
  
  return lineSplit.join('');
}

const funcNames = [
  'opp', 'con',
  'sqrt', 'cbrt',
  'exp', 'log',
  'asinh', 'acosh', 'atanh',
  'sinh', 'cosh', 'tanh',
  'asin', 'acos', 'atan', 'acsc', 'asec', 'acot',
  'sinc', 'sa',
  'sin', 'cos', 'tan', 'csc', 'sec', 'cot',
  'csgn',
  'inp', 'xp', 'norm', 'dist', 
  'am', 'gm',
  'random'
];
  
function cxcalc (s) {

  s = s.replace(/\s/g, '');
  
  let filter = new RegExp('\\d|Math.PI|Math.E|Infinity|j|\\+|\\-|\\*|\\/|\\^|\\(|\\)' + '|' + funcNames.join('|'), 'g');
  if (s.replace(filter, '').trim()) {
    throw new Error();
  }
  
  // 숫자, 상수, 허수단위, 코드 처리
  s = s.replace(/(\d+)|Math.PI|Math.E|Infinity/g, '(new Complex($1))');  
  s = s.replace(/j/g, '*(new Complex(0, 1))');
  
  // 함수 선행 & 코드 처리
  for (let funcName of funcNames) {
    let rex = new RegExp(funcName, 'g');
    s = _precedence(funcName, s, 0, 1);
    s = s.replace(rex, '(Cxmath.' + funcName);
  }
  
  // 연산자 선행 처리
  s = _precedence('^', s, 1, 1);
  s = _precedence('*', s, 1, 1);
  s = _precedence('/', s, 1, 1);
  s = _precedence('+', s, 1, 1);
  s = _precedence('-', s, 1, 1);
  
  // 연산자 코드 처리
  s = s
  .replace(/\+/g, '.add')
  .replace(/\-/g, '.sub')
  .replace(/\*/g, '.mul')
  .replace(/\//g, '.div')
  .replace(/\^/g, '.inv');
  
  try {
    let result = eval(s);
    return result;
  }
  catch (err) {
    throw new Error();
  }
}

module.exports = {
  Complex: complex,
  Cxmath: cxmath,
  Cxcalc: cxcalc
};
