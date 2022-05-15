# cplx.js Docs EN

## class Complex

### Constructor

#### constructor(re[, im, option])
Generate complex number in cartesian form
```javascript
let z = new Complex(1, 2); // 1+2j
```

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|re|number|O|
|im|number|X|
|option|object|X|

#### constructor(arg, abs, option)
Generate complex number in polar form
```javascript
let z = new Complex(Math.PI, 2, { polar: true }); // 2exp(jπ) = -2
```

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|arg|number|O|
|abs|number|O|
|option|object|O|

#### constructor(str)
Parse string
```javascript
let z = new Complex('1+3j'); // 1+3j
let w = new Complex('-7j'); // -7j
let u = new Complex('-6-1j'); // -6-1j
```

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|str|string|O|

#### constructor(complex)
Copy a complex that has already been declared
```javascript
let w = new Complex(z);
```

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|complex|Complex|O|

### Properties
```javascript
let z = new Complex('1+2j');
z.re; // 1
z.im; // 2
z.abs; // 2.23606...
z.arg; // 1.10714...
```

|name|description|type|
|:---:|:---:|:---:|
|re|real part|Complex|
|im|imaginary part|Complex|
|abs|modulus|Complex|
|arg|argument|Complex|

### Constants
```javascript
Complex.EPSILON;
Complex.PI; // 3.141592...
Complex.E; // 2.718281...
Complex.ONE; // 1
Complex.UNIT; // 1j
```

> Description

|name|description|type|
|:---:|:---:|:---:|
|EPSILON|2^-52|Complex|
|PI|π|Complex|
|E|e|Complex|
|ONE|1|Complex|
|UNIT|imaginary unit|Complex|

### String Representation

#### string toString()
String representation
```javascript
z.toString()
```

### Method: Equal

#### boolean equals(z)
Equal
```javascript
let z = new Complex('3+2j');
let w = new Complex('5-4j');

z.equals(1); // false
z.equals('3+2j'); // true
z.equals(w); // false
```

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Method: Basic Operations
```javascript
let z = new Complex('3+2j');
let w = new Complex('1-2j');

z.add(3);
z.sub('6-2j');
z.mul(w);
z.div(Complex.UNIT);
z.inv('13+9j');
```

> Functions

|name|description|return type|
|:---:|:---:|:---:|
|add|addition|Complex|
|sub|subtraction|Complex|
|mul|multiplication|Complex|
|div|division|Complex|
|inv|exponentiation|Complex|

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

## class Cxmath

### Static Method: Advanced Operations
```javascript
let z = new Complex('1+2j');

Cxmath.conj(z); // 1-2j
Cxmath.opp(z); // -1-2j
Cxmath.rec(z); // 0.19999...-0.39999...j
```

> Functions

|name|description|return type|
|:---:|:---:|:---:|
|conj|complex conjugate|Complex|
|opp|opposite number (additive inverse)|Complex|
|rec|reciprocal|Complex|

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Static Method: Radical Roots
```javascript
let z = new Complex('1+2j');

Cxmath.sqrt(z); // 1.27201...+0.78615...j
Cxmath.cbrt(z); // 1.21961...+0.47171...j
```

> Functions

|name|description|return type|
|:---:|:---:|:---:|
|sqrt|square root|Complex|
|cbrt|cube root|Complex|

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Static Method: Exponential Function & Logarithm

#### Complex static exp(z)
Exponential function
```javascript
Cxmath.exp(z);
```

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### Complex static log(a[, b=Math.E])
Logarithm (defined in principal branch) with base b and antilogarithm a (if the base equals e, you can leave it out.)
```javascript
Cxmath.log(a); // Natural Logarithm
Cxmath.log(a, 2); // Binary Logarithm
Cxmath.log(a, 10); // Decimal Logarithm
Cxmath.log(a, b);
```

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|a|number/string/Complex|O|
|b|numner/string/Complex|X|

### Static Method: Trigonometric Functions

#### Trigonometric Functions

```javascript
Cxmath.sin(z);
Cxmath.cos(z);
Cxmath.tan(z);

Cxmath.csc(z);
Cxmath.sec(z);
Cxmath.cot(z);
```

> Functions

|name|description|return type|
|:---:|:---:|:---:|
|sin|Sine|Complex|
|cos|Cosine|Complex|
|tan|Tangent|Complex|
|csc|Cosecant|Complex|
|sec|Secant|Complex|
|cot|Cotangent|Complex|

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### Inverse Trigonometric Functions

```javascript
Cxmath.asin(z);
Cxmath.acos(z);
Cxmath.atan(z);

Cxmath.acsc(z);
Cxmath.asec(z);
Cxmath.acot(z);
```

> Functions

|name|description|return type|
|:---:|:---:|:---:|
|asin|Arcsine|Complex|
|acos|Arccosine|Complex|
|atan|Arctangent|Complex|
|acsc|Arccosecant|Complex|
|asec|Arcsecant|Complex|
|acot|Arccotangent|Complex|

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### Complex static atan2(z1, z2)
2-argument-arctangent
```javascript
Cxmath.atan2(z1, z2);
```
|name|type|required|
|:---:|:---:|:---:|
|z1|number/string/Complex|O|
|z2|number/string/Complex|O|

### Static Method: Hyperbolic Functions

#### Hyperbolic Functions

```javascript
Cxmath.sinh(z);
Cxmath.cosh(z);
Cxmath.tanh(z);
```

> Functions

|name|description|return type|
|:---:|:---:|:---:|
|sinh|Hyperbolic-sine|Complex|
|cosh|Hyperbolic-cosine|Complex|
|tanh|Hyperbolic-tangent|Complex|

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### Inverse Hyperbolic Functions

```javascript
Cxmath.asinh(z);
Cxmath.acosh(z);
Cxmath.atanh(z);
```

> Functions

|name|description|return type|
|:---:|:---:|:---:|
|asinh|Inverse-hyperbolic-sine (arsinh)|Complex|
|acosh|Inverse-hyperbolic-cosine (arcosh)|Complex|
|atanh|Inverse-hyperbolic-tangent (artanh)|Complex|

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Static Method: Sign Function

#### Complex static csgn(z)
Complex sign function
```javascript
Cxmath.csgn(z);
```
|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Static Method: Vector

#### Complex static inprod(a, b)
Inner Product
```javascript
Cxmath.inprod(a, b);
```
|name|type|required|
|:---:|:---:|:---:|
|a|number/string/Complex|O|
|b|number/string/Complex|O|

#### Complex static dist(a, b)
Distance from point (Re(a), Im(a)) to point (Re(b), Im(b))
```javascript
Cxmath.dist(a, b);
```
|name|type|required|
|:---:|:---:|:---:|
|a|number/string/Complex|O|
|b|number/string/Complex|O|

### Static Method: Random

#### Complex static random()
Random complex (both real part and imaginary part are more than or equal to 0 and less than 1)
```javascript
Cxmath.random();
```

### Static Method: Floor & Ceil
```javascript
Cxmath.floor(z);
Cxmath.ceil(z);
Cxmath.round(z);
Cxmath.trunc(z);
```
> Functions

|name|description|return type|
|:---:|:---:|:---:|
|floor|-|Complex|
|ceil|-|Complex|
|round|-|Complex|
|trunc|-|Complex|

> Parameters

|name|type|required|
|:---:|:---:|:---:|
|z|number/string/Complex|O|
