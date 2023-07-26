class Complex {

    static #TYPE = {
        N: 0,
        C: 1,
        S: 2,
        U: 3,
        X: 4
    }

    static #paramType (z) {
        if (!Number.isNaN(Number(z))) {
            return Complex.#TYPE.N;
        }
        else {
            if (z instanceof Complex) {
                return Complex.#TYPE.C;
            }
            else if (typeof z == 'string' && Number.isNaN(Number(z))) {
                return Complex.#TYPE.S;
            }
            else if (z == undefined) {
                return Complex.#TYPE.U;
            }
            else {
                return Complex.#TYPE.X;
            }
        }
    }

    static #parseString (str) {
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

    constructor () {
        let arg = arguments;

        let p1 = Complex.#paramType(arg[0]);
        let p2 = Complex.#paramType(arg[1]);

        switch (arg.length) {
            case 1:

                if (p1 == Complex.#TYPE.N) {
                    this.re = arg[0]-0;
                    this.im = 0;
                }
                else if (p1 == Complex.#TYPE.C) {
                    this.re = arg[0].re;
                    this.im = arg[0].im;
                }
                else if (p1 == Complex.#TYPE.S) {
                    let parsed = Complex.#parseString(arg[0]); // parsed string
                    if (parsed) {
                        this.re = parsed.re;
                        this.im = parsed.im;
                    }
                    else throw new Error('Cannot parse the string, given constructor(string)');
                }
                else {
                    throw new TypeError('Invalid parameter type.');
                }

            break;
            case 2:

                if (p1 == Complex.#TYPE.N && p2 == Complex.#TYPE.N) {
                    this.re = arg[0]-0;
                    this.im = arg[1]-0;
                }
                else {
                    throw new TypeError('Invalid parameter type.');
                }

            break;
            case 3:

                if (typeof arg[2] != 'object') {
                    throw new TypeError('Invalid parameter type.');
                }

                if (arg[2].polar) {
                    if (p1 == Complex.#TYPE.N && p2 == Complex.#TYPE.N) {
                        this.re = arg[0]*Math.cos(arg[1]);
                        this.im = arg[0]*Math.sin(arg[1]);
                    }
                    else {
                        throw new TypeError('Invalid parameter type.');
                    }
                }
                else {
                    throw new TypeError('Invalid option.');
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

    // arithmetic

    add (z) {
        let s = new Complex(z);
        return new Complex(this.re + s.re, this.im + s.im);
    };
    
    sub (z) {
        let s = new Complex(z);
        return new Complex(this.re - s.re, this.im - s.im);
    };
    
    mul (z) {
        let s = new Complex(z);
        return new Complex(this.re*s.re - this.im*s.im, this.re*s.im + this.im*s.re);
    };
    
    div (z) {
        let s = new Complex(z);
        let den = Math.pow(z.abs, 2);
        return new Complex((this.re*s.re + this.im*s.im)/den, (-this.re*s.im + this.im*s.re)/den);
    };

    // involution

    static #div_conq_pow (a, n) {
        if (n == 0) return new Complex(1);
        t = Complex.#div_conq_pow(a, n/2|0);
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

    inv (z) {
        if (typeof z == 'number' && !Number.isNaN(z) && Number.isInteger(z)) {
            if (z > 0) {
                return Complex.#div_conq_pow(this, z);
            }
            else if (z < 0) {
                return new Complex(1).div(Complex.#div_conq_pow(this, z));
            }
            else return new Complex(1);
        }
        else {
            let s = new Complex(z);
            let abs = Math.pow(this.abs, s.re) * Math.exp(-s.im*this.arg);
            let arg = s.re*this.arg + s.im*Math.log(this.abs);
            return new Complex(abs, arg, { polar: true });
        }
    };

    // equality

    equals (z, prec = Number.EPSILON) {
        let s = new Complex(z);
        if (Math.abs(this.re - s.re) < prec && Math.abs(this.im - s.im) < prec) {
            return true;
        }
        else return false;
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

class ComplexMath {
    
    static conj (z) {
        let s = new Complex(z);
        return s.sub(new Complex(0, 2*s.im));
    };

    static opp (z) {
        let s = new Complex(z);
        return new Complex(-s.re, -s.im);
    };
    
    static rec (z) {
        return Complex.ONE.div(z);
    }
    
    static sqrt (z) {
        return (new Complex(z)).inv(0.5);
    };

    static cbrt (z) {
        return (new Complex(z)).inv(1/3);
    };

    // exp, log

    static exp (z) {
        return Complex.E.inv(z);
    };

    static log (z, base) {
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

    static sin (z) {
        let s = new Complex(z);
        return ComplexMath.exp(s.mul(Complex.UNIT)).sub(ComplexMath.exp(ComplexMath.opp(s).mul(Complex.UNIT))).div(Complex.UNIT.mul(2));
    };

    static cos (z) {
        let s = new Complex(z);
        return ComplexMath.exp(s.mul(Complex.UNIT)).add(ComplexMath.exp(ComplexMath.opp(s).mul(Complex.UNIT))).div(2);
    };

    static tan (z) {
        return ComplexMath.sin(z).div(ComplexMath.cos(z));
    };

    static asin (z) {
        let s = new Complex(z);
        return ComplexMath.log(Complex.UNIT.mul(s).add(ComplexMath.sqrt(ComplexMath.opp(s.inv(2).sub(1))))).mul(ComplexMath.conj(Complex.UNIT));
    };

    static acos (z) {
        return Complex.PI.div(2).sub(ComplexMath.asin(z));
    };

    static atan (z) {
        let s = new Complex(z);
        return Complex.UNIT.div(2).mul(ComplexMath.log(Complex.UNIT.add(s).div(Complex.UNIT.sub(s))));
    };

    // hyperbolic

    static sinh (z) {
        return ComplexMath.exp(z).sub(ComplexMath.exp(ComplexMath.opp(z))).div(2);
    };

    static cosh (z) {
        return ComplexMath.exp(z).add(ComplexMath.exp(ComplexMath.opp(z))).div(2);
    };

    static tanh (z) {
        return ComplexMath.sinh(z).div(ComplexMath.cosh(z));
    };

    static asinh (z) {
        let s = new Complex(z);
        return ComplexMath.log(s.add(ComplexMath.sqrt(s.inv(2).add(1))));
    };

    static acosh (z) {
        let s = new Complex(z);
        return ComplexMath.log(s.add(ComplexMath.sqrt(s.inv(2).sub(1))));
    };

    static atanh (z) {
        return ComplexMath.log(Complex.ONE.add(z).div(Complex.ONE.sub(z))).div(2);
    };

    // csgn

    static csgn (z) {
        let s = new Complex(z);
        if (s.re) {
            return new Complex(Math.sign(s.re));
        }
        else {
            return new Complex(Math.sign(s.im));
        }
    };

    // norm

    static l1norm (z) {
        let s = new Complex(z);
        return Math.abs(z.re) + Math.abs(z.im);
    }

    static l2norm (z) {
        let s = new Complex(z);
        return Number(z.abs);
    }

}

module.exports = { Complex: Complex, ComplexMath: ComplexMath };
