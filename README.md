# cpxn
Javascript complex number library

## Copyright
&copy; 2021 Sanha, all rights reserved.

## License
CC BY-NC-ND 4.0

## Docs (English)
<a href="https://github.com/sweetcorn1229/cpxn/blob/main/README-ko.md">한국어</a>

### Get Started
```javascript
const { Complex, Cxmath } = require(PATH);

```
### Declaring Complex
#### constructor(re: number, im: number)
declare with cartesian form (if the imaginary part equals zero, you may leave it out.)
```javascript
let z = new Complex(1, 2); // 1+2i
```
#### constructor(abs: number, arg: number, 'polar')
declare with polar form
```javascript
let z = new Complex(Math.PI, 2, 'polar'); // 2exp(iπ) = -2
```

#### constructor(cx: complex)
copy
```javascript
let z = new Complex(z); // 1+2i
```

### Properties
```javascript
z.re; // real part
z.im; // imaginary part
z.abs; // absolute value
z.arg; // the argument
```

### The four fundamental arithmetic operations & involution
```javascript
let p = new Complex(1, 2);
let q = new Complex(3, -4);
```
#### add(z: number/complex)
addition
```javascript
p.add(q); // 4-2i
p.add(6); // 7+2i
```

#### sub(z: number/complex)
subtraction
```javascript
p.sub(q); // -2+6i
p.sub(6); // -5+2i
```

#### mul(z: number/complex)
multifunction
```javascript
p.mul(q); // 11+2i
p.mul(6); // 6+12i
```

#### div(z: number/complex)
division
```javascript
p.div(q); // -0.2+0.4i
p.div(4); // 0.25+0.5i
```

#### inv(z: number/complex)
involution
```javascript
p.inv(q); // 932.1391946432212+95.9465336603415i
p.inv(6); // 117+44i
```

### Opposite Number (Additive Inverse)

#### Cxmath.opp(z: number/complex)
opposite number (additive inverse)
```javascript
Cxmath.opp(z);
```

### Complex Conjugate

#### Cxmath.conj(z: number/complex)
complex conjugate
```javascript
Cxmath.conj(z);
```

### Radical Roots

#### Cxmath.sqrt(z: number/complex)
principal square root
```javascript
Cxmath.sqrt(z);
```

#### Cxmath.cbrt(z: number/complex)
principal cube root
```javascript
Cxmath.cbrt(z);
```

### Exponential Function & Logarithm

#### Cxmath.exp(z: number/complex)
exp(z), natural exponential function
```javascript
Cxmath.exp(z);
```

#### [deleted] <del>Cxmath.ln(z: number/complex)</del>
<del><a href="https://namu.wiki/w/복소로그함수#s-3">Log(z)</a>, natural logarithm defined in principal branch</del>
```javascript
Cxmath.ln(z);
```

#### Cxmath.log(antilogarithm: number/complex, base: number/complex)
logarithm defined in principal branch (if the base equals e, you may leave it out.)
```javascript
Cxmath.log(antilogarithm); // Natural Logarithm
Cxmath.log(antilogarithm, 2); // Binary Logarithm
Cxmath.log(antilogarithm, 10); // Decimal Logarithm
Cxmath.log(antilogarithm, base);
```

### Trigonometric Functions

#### Cxmath.sin(z: number/complex)
sine
```javascript
Cxmath.sin(z);
```

#### Cxmath.cos(z: number/complex)
cosine
```javascript
Cxmath.cos(z);
```

#### Cxmath.tan(z: number/complex)
tangent
```javascript
Cxmath.tan(z);
```

### Inverse Trigonometric Functions

#### Cxmath.asin(z: number/complex)
arcsine
```javascript
Cxmath.asin(z);
```

#### Cxmath.acos(z: number/complex)
arccosine
```javascript
Cxmath.acos(z);
```

#### Cxmath.atan(z: number/complex)
arctangent
```javascript
Cxmath.atan(z);
```

#### Cxmath.atan2(w: number/complex, z: number/complex)
arctangent2
```javascript
Cxmath.atan2(w, z);
```

### Hyperbolic Functions

#### Cxmath.sinh(z: number/complex)
hyperbolic sine
```javascript
Cxmath.sinh(z);
```

#### Cxmath.cosh(z: number/complex)
hyperbolic cosine
```javascript
Cxmath.cosh(z);
```

#### Cxmath.tanh(z: number/complex)
hyperbolic tangent
```javascript
Cxmath.tanh(z);
```

### Inverse Hyperbolic Functions

#### Cxmath.asinh(z: number/complex)
inverse hyperbolic sine
```javascript
Cxmath.asinh(z);
```

#### Cxmath.acosh(z: number/complex)
inverse hyperbolic cosine
```javascript
Cxmath.acosh(z);
```

#### Cxmath.atanh(z: number/complex)
inverse hyperbolic tangent
```javascript
Cxmath.atanh(z);
```

### Sign Function

#### Cxmath.csgn(z: number/complex)
<a href="https://namu.wiki/w/부호함수#s-3">csgn(z)</a>, complex sign function
```javascript
Cxmath.csgn(z);
```

### Distance

#### Cxmath.dist(w: number/complex, z: number/complex)
distance between w and z in the complex plane
```javascript
Cxmath.dist(w, z);
```

### Mean

#### Cxmath.am(z_1, z_2, ..., z_n: number/complex)
arithmetic mean
```javascript
Cxmath.am(z_1, z_2, ..., z_n);
```

#### Cxmath.gm(z_1, z_2, ..., z_n: number/complex)
geometric mean
```javascript
Cxmath.gm(z_1, z_2, ..., z_n);
```

### Random

#### Cxmath.random()
random complex (both real part and imaginary part are more than or equal to 0 and less than 1)
```javascript
Cxmath.random();
```

## Development Note

### v1.0-beta

#### v1.0-beta-210821
<ul>
<li>function ln has been deleted</li>
<li>the role of function log has been expanded (read the docs for details)</li>
</ul>

#### v1.0-beta-210816
<ul>
<li>function dist(distance) has been added</li>
<li>function am(arithmetic mean) has been added</li>
<li>function gm(geometric mean) has been added</li>
</ul>

#### v1.0-beta-210814
<ul>
<li>function atan2 has been added</li>
</ul>

#### v1.0-beta-210813
<ul>
<li>beta release</li>
</ul>
