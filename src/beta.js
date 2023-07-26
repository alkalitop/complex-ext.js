/*
© 2021-2022 sanha1229 (Sanha), all rights reserved.
*/

function typedis (z) {
    if (!Number.isNaN(Number(z))) {
        return 'n';
    }
    else {
        if (z instanceof Complex) {
            return 'c';
        }
        else if (typeof z == 'string' && Number.isNaN(Number(z))) {
            return 's';
        }
        else if (z == undefined) {
            return 'u';
        }
        else {
            return 'x';
        }
    }
}

function strparse (str) {
    let sig1 = str.trim().match(/^(\+|\-)/)
    sig1 = sig1 ? String(sig1).slice(0, 1) : String()
    let spt = str.replace(/^(\+|\-)/g, '').split(/\+|\-/);
  
    let re, im;
    if (spt.length == 1) {
        re = 0
        im = Number(sig1+spt[0].replace('j', ''));
    }
    else {
        let sig2 = String(str.replace(sig1, '').match(/(\+|\-)/)).slice(0, 1);
        re = Number(sig1+spt[0])
        im = Number(sig2+spt[1].replace('j', ''));     }
    if (Number.isNaN(re) || Number.isNaN(im)) {
        return null;
    }
    else {
        return { re: re, im: im };
    }
}

class Complex {
    constructor () {
        let arg = arguments;
        let t = typedis(arg[0])+typedis(arg[1]);
        switch (arg.length) {
            case 1:
                if (t == 'nu') {
                    this.re = arg[0]-0;
                    this.im = 0;
                }
                else if (t == 'cu') {
                    this.re = arg[0].re;
                    this.im = arg[0].im;
                }
                else if (t == 'su') {
                    let p = strparse(arg[0]); // parsed string
                    if (p) {
                        this.re = p.re;
                        this.im = p.im;
                    }
                    else throw new Error('Cannot parse the string while given (string, ...)');
                }
                else {
                    throw new Error('Invalid parameter; unknown case');
                }
            break;
            case 2:
                if (t == 'nn') {
                    this.re = arg[0]-0;
                    this.im = arg[1]-0;
                }
                else if (t == 'cn') {
                    if (arg[0].im) {
                        throw new Error('Invalid parameter; the imaginary part of the first parameter should be equal to ZERO when given (complex, number) in constructor');
                    }
                    else {
                        this.re = arg[0].re;
                        this.im = arg[1]-0;
                    }
                }
                else if (t == 'nc') {
                    if (arg[1].im) {
                        throw new TypeError('Invalid parameter; the imaginary part of the second parameter should be equal to ZERO when given (number, complex) in constructor');
                    }
                    else {
                        this.re = arg[0]-0;
                        this.im = arg[1].re;
                    }
                }
                else if (t == 'cc') {
                    if (arg[0].im || arg[1].im) {
                        throw new TypeError('Invalid parameter; the imaginary part of both the first and the second parameter should be equal to ZERO when given (complex, complex) in constructor');
                    }
                    else {
                        this.re = arg[0].re;
                        this.im = arg[1].re;
                    }
                }
                else {
                    throw new TypeError('Invalid parameter; unknown case');
                }
            break;
            case 3:
                if (typeof arg[2] != 'object') {
                    throw new TypeError('Invalid parameter; the type of the third parameter should be object or undefined in constructor');
                }
                if (arg[2].polar) {
                    if (t == 'nn') {
                        this.re = arg[0]*Math.cos(arg[1]);
                        this.im = arg[0]*Math.sin(arg[1]);
                    }
                    else if (t == 'cn') {
                        if (arg[0].im) {
                            throw new Error('Invalid parameter; the imaginary part of the first parameter should be equal to ZERO when given (complex, number) in constructor');
                        }
                        else {
                            this.re = arg[0].re*Math.cos(arg[1]);
                            this.im = arg[0].re*Math.sin(arg[1]);
                        }
                    }
                    else if (t == 'nc') {
                        if (arg[1].im) {
                            throw new TypeError('Invalid parameter; the imaginary part of the second parameter should be equal to ZERO when given (number, complex) in constructor');
                        }
                        else {
                            this.re = arg[0]*Math.cos(arg[1].re);
                            this.im = arg[0]*Math.sin(arg[1].re);
                        }
                    }
                    else if (t == 'cc') {
                        if (arg[0].im || arg[1].im) {
                            throw new TypeError('Invalid parameter; the imaginary part of both the first and the second parameter should be equal to ZERO when given (complex, complex) in constructor');
                        }
                        else {
                            this.re = arg[0].re*Math.cos(arg[1].re);
                            this.im = arg[0].re*Math.sin(arg[1].re);
                        }
                    }
                    else {
                        throw new TypeError('Invalid parameter; unknown case');
                    }
                }
                else {
                    throw new TypeError('Invalid parameter; the third parameter doesn\'t have to be used in this case in constructor')
                }
            break;
        }
    }

    get abs () {
        return Math.hypot(this.re, this.im);
    }

    set abs (value) {
        let prevAbs = Number(this.abs);
        this.re = this.re*value/prevAbs
        this.im = this.im*value/prevAbs
    }

    get arg () {
        return Math.atan2(this.im, this.re);
    }

    set arg (value) {
        let prevAbs = Number(this.abs);
        this.re = Math.cos(value)*prevAbs;
        this.im = Math.sin(value)*prevAbs;
    }

    get [Symbol.toStringTag] () {
        return 'Complex';
    }

    toString () {
        return this.re+((Math.sign(this.im)+1)?'+':'')+this.im+'j';
    }
}

// constants

Complex.ONE = new Complex(1);
Complex.UNIT = new Complex(0, 1);
Complex.PI = new Complex(Math.PI);
Complex.E = new Complex(Math.E);
Complex.EPSILON = new Complex(Number.EPSILON);

// arithmetic

Complex.prototype.add = function (z) {
    let t = typedis(z);
    if (t == 'n') {
        return new Complex(this.re + z, this.im);
    }
    else if (t == 'c') {
        return new Complex(this.re + z.re, this.im + z.im);
    }
    else if (t == 's') {
        let p = strparse(z);
        if (p) {
            return new Complex(this.re + p.re, this.im + p.im);
        }
        else {
            throw new Error('Cannot parse the string while given (string, ...)');
        }
    }
    else {
        throw new TypeError('Invalid parameter; unknown case');
    }
};

Complex.prototype.sub = function (z) {
    let t = typedis(z);
    if (t == 'n') {
        return new Complex(this.re - z, this.im);
    }
    else if (t == 'c') {
        return new Complex(this.re - z.re, this.im - z.im);
    }
    else if (t == 's') {
        let p = strparse(z);
        if (p) {
            return new Complex(this.re - p.re, this.im - p.im);
        }
        else {
            throw new Error('Cannot parse the string while given (string, ...)');
        }
    }
    else {
        throw new TypeError('Invalid parameter; unknown case');
    }
};

Complex.prototype.mul = function (z) {
    let t = typedis(z);
    if (t == 'n') {
        return new Complex(this.re * z, this.im * z);
    }
    else if (t == 'c') {
        return new Complex(this.re*z.re - this.im*z.im, this.re*z.im + this.im*z.re);
    }
    else if (t == 's') {
        let p = strparse(z);
        if (p) {
            return new Complex(this.re*p.re - this.im*p.im, this.re*p.im + this.im*p.re);
        }
        else {
            throw new Error('Cannot parse the string while given (string, ...)');
        }
    }
    else {
        throw new TypeError('Invalid parameter; unknown case');
    }
};

Complex.prototype.div = function (z) {
    let t = typedis(z);
    if (t == 'n') {
        return new Complex(this.re / z, this.im / z);
    }
    else if (t == 'c') {
        let deno = Math.pow(z.abs, 2);
        return new Complex((this.re*z.re + this.im*z.im)/deno, (-this.re*z.im + this.im*z.re)/deno);
    }
    else if (t == 's') {
        let p = strparse(z);
        if (p) {
            let deno = Math.pow(p.abs, 2);
            return new Complex((this.re*p.re + this.im*p.im)/deno, (-this.re*p.im + this.im*p.re)/deno);
        }
        else {
            throw new Error('Cannot parse the string while given (string, ...)');
        }
    }
    else {
        throw new TypeError('Invalid parameter; unknown case');
    }
};

function dcpow (a, n) {
    if (n == 0) return new Complex(1);
    t = dcpow(a, n/2|0);
    if (n % 2) {
        if (n > 0) {
            return t.mul(t).mul(a);
        }
        else {
            return t.div(t).div(a);
        }
    }
    else {
        if (n > 0) {
            return t.mul(t);
        }
        else {
            return t.div(t);
        }
    }
}

Complex.prototype.inv = function (z) {
    let t = typedis(z);
    if (t == 'n') {
        if (Number.isInteger(z)) {
            return dcpow(this, z);
        }
        else {
            return new Complex(Math.pow(this.abs, z), this.arg * z, { polar: true });
        }
    }
    else if (t == 'c') {
        let abs = Math.pow(this.abs, z.re) * Math.exp(-z.im*this.arg);
        let arg = z.re*this.arg + z.im*Math.log(this.abs);
        return new Complex(abs, arg, { polar: true });
    }
    else if (t == 's') {
        let p = strparse(z);
        if (p) {
            let abs = Math.pow(this.abs, p.re) * Math.exp(-p.im*this.arg);
            let arg = p.re*this.arg + p.im*Math.log(this.abs);
            return new Complex(abs, arg, { polar: true });
        }
        else {
            throw new Error('Cannot parse the string while given (string, ...)');
        }
    }
    else {
        throw new TypeError('Invalid parameter; unknown case');
    }
};

Complex.prototype.equals = function (z) {
    let t = typedis(z);
    if (t == 'n') {
        return (Math.abs(this.re - z) < Complex.EPSILON.re) && (Math.abs(this.im) < Complex.EPSILON.re);
    }
    else if (t == 'c') {
        return (Math.abs(this.re - z.re) < Complex.EPSILON.re) && (Math.abs(this.im - z.im) < Complex.EPSILON.re);
    }
    else if (t == 's') {
        let p = strparse(z);
        if (p) {
            return (Math.abs(this.re - p.re) < Complex.EPSILON.re) && (Math.abs(this.im - p.im) < Complex.EPSILON.re);
        }
        else {
            throw new Error('Cannot parse the string while given (string, ...)');
        }
    }
    else {
        throw new TypeError('Invalid parameter; unknown case');
    }
}
    
class Cxmath { }

Cxmath.conj = function (z) {
    let s = new Complex(z);
    return s.sub(new Complex(0, 2*s.im));
};

Cxmath.opp = function (z) {
    let s = new Complex(z);
    return new Complex(-s.re, -s.im);
};

Cxmath.rec = function (z) {
    return Complex.ONE.div(z);
}

Cxmath.sqrt = function (z) {
    return (new Complex(z)).inv(0.5);
};

Cxmath.cbrt = function (z) {
    return (new Complex(z)).inv(1/3);
};

Cxmath.exp = function (z) {
    return Complex.E.inv(z);
};

Cxmath.log = function (z, base) {
    let s = new Complex(z);
    if (base) {
        let b = new Complex(base);
        return new Complex(Math.log(s.abs), s.arg).div(new Complex(Math.log(b.abs), b.arg));
    }
    else {
        return new Complex(Math.log(s.abs), s.arg);
    }
};

// trigonometric

Cxmath.sin = function (z) {
    let s = new Complex(z);
    return Cxmath.exp(s.mul(Complex.UNIT)).sub(Cxmath.exp(Cxmath.opp(s).mul(Complex.UNIT))).div(Complex.UNIT.mul(2));
};

Cxmath.cos = function (z) {
    let s = new Complex(z);
    return Cxmath.exp(s.mul(Complex.UNIT)).add(Cxmath.exp(Cxmath.opp(s).mul(Complex.UNIT))).div(2);
};

Cxmath.tan = function (z) {
    return Cxmath.sin(z).div(Cxmath.cos(z));
};

Cxmath.asin = function (z) {
    let s = new Complex(z);
    return Cxmath.log(Complex.UNIT.mul(s).add(Cxmath.sqrt(Cxmath.opp(s.inv(2).sub(1))))).mul(Cxmath.conj(Complex.UNIT));
};

Cxmath.acos = function (z) {
    return Complex.PI.div(2).sub(Cxmath.asin(z));
};

Cxmath.atan = function (z) {
    let s = new Complex(z);
    return Complex.UNIT.div(2).mul(Cxmath.log(Complex.UNIT.add(s).div(Complex.UNIT.sub(s))));
};

Cxmath.atan2 = function (w, z) {
    return Cxmath.atan(new Complex(w).div(new Complex(z)));
};

// hyperbolic

Cxmath.sinh = function (z) {
    return Cxmath.exp(z).sub(Cxmath.exp(Cxmath.opp(z))).div(2);
};

Cxmath.cosh = function (z) {
    return Cxmath.exp(z).add(Cxmath.exp(Cxmath.opp(z))).div(2);
};

Cxmath.tanh = function (z) {
    return Cxmath.sinh(z).div(Cxmath.cosh(z));
};

Cxmath.asinh = function (z) {
    let s = new Complex(z);
    return Cxmath.log(s.add(Cxmath.sqrt(s.inv(2).add(1))));
};

Cxmath.acosh = function (z) {
    let s = new Complex(z);
    return Cxmath.log(s.add(Cxmath.sqrt(s.inv(2).sub(1))));
};

Cxmath.atanh = function (z) {
    return Cxmath.log(Complex.ONE.add(z).div(Complex.ONE.sub(z))).div(2);
};

Cxmath.csgn = function (z) {
    let s = new Complex(z);
    if (s.re) {
        return new Complex(Math.sign(s.re));
    }
    else {
        return new Complex(Math.sign(s.im));
    }
};

Cxmath.dist = function (a, b) {
    let u = new Complex(a)
    let v = new Complex(b);  
    return new Complex(Math.hypot(u.re-v.re, u.im-v.im));
};

Cxmath.random = function () {
    return new Complex(Math.random(), Math.random());
};

module.exports = { Complex: Complex, Cxmath: Cxmath };
