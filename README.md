# cpxn
Javascript complex number class

## Copyright
&copy; 2021 Sanha, all rights reserved.

## Basic
 
### It's compatible with..
- Front-end Javascript
- Node.js
- Rhino Javascript Engine

## Use

### Get Started
```javascript
const { Complex, Cxmath } = require(PATH);

```
### Constructor
#### constructor(re: number, im: number)
Declare in cartesian form
<sup>[note](https://en.wikipedia.org/wiki/Complex_number#Cartesian_complex_plane)</sup> (if the imaginary part equals zero, you may leave it out.)
```javascript
let z = new Complex(1, 2); // 1+2i
```
#### constructor(abs: number, arg: number, 'polar')
Declare in polar form
<sup>[note](https://en.wikipedia.org/wiki/Complex_number#Polar_complex_plane)</sup>
```javascript
let z = new Complex(Math.PI, 2, 'polar'); // 2exp(iπ) = -2
```

#### constructor(cx: complex)
Copy complex that has already been declared
```javascript
let z = new Complex(z); // 1+2i
```

### Properties
#### re
Real part
```javascript
z.re;
```

#### im
Imaginary part
```javascript
z.im;
```

#### abs
Absolute value (Modulus)
<sup>[note](https://en.wikipedia.org/wiki/Complex_number#Modulus_and_argument)</sup>
```javascript
z.abs;
```

#### arg
Argument
<sup>[note](https://en.wikipedia.org/wiki/Complex_number#Modulus_and_argument)</sup>
```javascript
z.arg;
```


### The four fundamental arithmetic operations & involution
```javascript
let p = new Complex(1, 2);
let q = new Complex(3, -4);
```
#### add(z: number/complex)
Addition
<sup>[note](https://en.wikipedia.org/wiki/Complex_number#Addition_and_subtraction)</sup>
```javascript
p.add(q); // 4-2i
p.add(6); // 7+2i
```

#### sub(z: number/complex)
Subtraction
<sup>[note](https://en.wikipedia.org/wiki/Complex_number#Addition_and_subtraction)</sup>
```javascript
p.sub(q); // -2+6i
p.sub(6); // -5+2i
```

#### mul(z: number/complex)
Multiplication
<sup>[note1](https://en.wikipedia.org/wiki/Complex_number#Multiplication_and_square)</sup>
<sup>[note2](https://en.wikipedia.org/wiki/Complex_number#Multiplication_and_division_in_polar_form)</sup>
```javascript
p.mul(q); // 11+2i
p.mul(6); // 6+12i
```

#### div(z: number/complex)
Division
<sup>[note1](https://en.wikipedia.org/wiki/Complex_number#Reciprocal_and_division)</sup>
<sup>[note2](https://en.wikipedia.org/wiki/Complex_number#Multiplication_and_division_in_polar_form)</sup>
```javascript
p.div(q); // -0.2+0.4i
p.div(4); // 0.25+0.5i
```

#### inv(z: number/complex)
Exponentiation
<sup>[note](https://en.wikipedia.org/wiki/Complex_number#Exponentiation)</sup>
```javascript
p.inv(q); // 932.1391946432212+95.9465336603415i
p.inv(6); // 117+44i
```

### Additive Inverse & Complex Conjugate

#### Cxmath.opp(z: number/complex)
Opposite number (Additive inverse)<sup>[note](https://en.wikipedia.org/wiki/Additive_inverse)</sup>
```javascript
Cxmath.opp(z);
```

#### Cxmath.conj(z: number/complex)
Complex conjugate
<sup>[note](https://en.wikipedia.org/wiki/Complex_conjugate)</sup>
```javascript
Cxmath.conj(z);
```

### Radical Roots
<sup>[note](https://en.wikipedia.org/wiki/Square_root#Square_roots_of_negative_and_complex_numbers)</sup>
#### Cxmath.sqrt(z: number/complex)
Principal square root
<sup>[note](https://en.wikipedia.org/wiki/Complex_number#Square_root)</sup>
```javascript
Cxmath.sqrt(z);
```

#### Cxmath.cbrt(z: number/complex)
Principal cube root
```javascript
Cxmath.cbrt(z);
```

### Exponential Function & Logarithm

#### Cxmath.exp(z: number/complex)
Exponential function
<sup>[note1](https://en.wikipedia.org/wiki/Exponential_function)</sup>
<sup>[note2](https://en.wikipedia.org/wiki/Complex_number#Exponentiation)</sup>
```javascript
Cxmath.exp(z);
```

#### [deleted] <del>Cxmath.ln(z: number/complex)</del>
<del><a href="https://namu.wiki/w/복소로그함수#s-3">Log(z)</a>, natural logarithm defined in principal branch</del>
```javascript
Cxmath.ln(z);
```

#### Cxmath.log(a: number/complex, b: number/complex)
logarithm
<sup>[note1](https://en.wikipedia.org/wiki/Logarithm)</sup>
<sup>[note2](https://en.wikipedia.org/wiki/Complex_number#Complex_logarithm)</sup>
defined in principal branch
<sup>[note1](https://en.wikipedia.org/wiki/Principal_branch)</sup>
<sup>[note2](https://en.wikipedia.org/wiki/Branch_point#Branch_cuts)</sup>
with base b and antilogarithm a (if the base equals e, you may leave it out.)
```javascript
Cxmath.log(a); // Natural Logarithm
Cxmath.log(a, 2); // Binary Logarithm
Cxmath.log(a, 10); // Decimal Logarithm
Cxmath.log(a, b);
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
