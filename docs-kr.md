# cplx.js reference KR

아직 작업이 완료되지 않음.

## class Complex

### Constructor

#### constructor(re[, im, option])
직교 형식의 복소수를 생성합니다.
```javascript
let z = new Complex(1, 2); // 1+2j
```

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|re|number|O|
|im|number|X|
|option|object|X|

#### constructor(arg, abs, option)
극형식의 복소수를 생성합니다.
```javascript
let z = new Complex(Math.PI, 2, { polar: true }); // 2exp(jπ) = -2
```

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|arg|number|O|
|abs|number|O|
|option|object|O|

#### constructor(str)
문자열로부터 복소수를 생성합니다.
```javascript
let z = new Complex('1+3j'); // 1+3j
let w = new Complex('-7j'); // -7j
let u = new Complex('-6-1j'); // -6-1j
```

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|str|string|O|

#### constructor(complex)
이미 있는 복소수를 복사합니다.
```javascript
let w = new Complex(z);
```

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|complex|Complex|O|

### 프로퍼티
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

### 상수
```javascript
Complex.EPSILON;
Complex.PI; // 3.141592...
Complex.E; // 2.718281...
Complex.ONE; // 1
Complex.UNIT; // 1j
```

> 설명

|name|description|type|
|:---:|:---:|:---:|
|EPSILON|2^-52|Complex|
|PI|π|Complex|
|E|e|Complex|
|ONE|1|Complex|
|UNIT|imaginary unit|Complex|

### 문자열로 나타내기

#### string toString()
String representation
```javascript
z.toString()
```

### 메서드: 같음

#### boolean equals(z)
복소수의 값이 같은지 판별합니다.
```javascript
let z = new Complex('3+2j');
let w = new Complex('5-4j');

z.equals(1); // false
z.equals('3+2j'); // true
z.equals(w); // false
```

> 매개변수

|이름|타입|필수|
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

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|add|addition|Complex|
|sub|subtraction|Complex|
|mul|multiplication|Complex|
|div|division|Complex|
|inv|exponentiation|Complex|

> 매개변수

|이름|타입|필수|
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

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|conj|complex conjugate|Complex|
|opp|opposite number (additive inverse)|Complex|
|rec|reciprocal|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Static Method: Radical Roots
```javascript
let z = new Complex('1+2j');

Cxmath.sqrt(z); // 1.27201...+0.78615...j
Cxmath.cbrt(z); // 1.21961...+0.47171...j
```

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|sqrt|square root|Complex|
|cbrt|cube root|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Static Method: Exponential Function & Logarithm

#### Complex static exp(z)
Exponential function
```javascript
Cxmath.exp(z);
```

> 매개변수

|이름|타입|필수|
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

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|a|number/string/Complex|O|
|b|numner/string/Complex|X|

### Static Method: Trigonometric 함수

#### Trigonometric 함수

```javascript
Cxmath.sin(z);
Cxmath.cos(z);
Cxmath.tan(z);

Cxmath.csc(z);
Cxmath.sec(z);
Cxmath.cot(z);
```

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|sin|Sine|Complex|
|cos|Cosine|Complex|
|tan|Tangent|Complex|
|csc|Cosecant|Complex|
|sec|Secant|Complex|
|cot|Cotangent|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### Inverse Trigonometric 함수

```javascript
Cxmath.asin(z);
Cxmath.acos(z);
Cxmath.atan(z);

Cxmath.acsc(z);
Cxmath.asec(z);
Cxmath.acot(z);
```

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|asin|Arcsine|Complex|
|acos|Arccosine|Complex|
|atan|Arctangent|Complex|
|acsc|Arccosecant|Complex|
|asec|Arcsecant|Complex|
|acot|Arccotangent|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### Complex static atan2(z1, z2)
2-argument-arctangent
```javascript
Cxmath.atan2(z1, z2);
```
|이름|타입|필수|
|:---:|:---:|:---:|
|z1|number/string/Complex|O|
|z2|number/string/Complex|O|

### Static Method: Hyperbolic 함수

#### Hyperbolic 함수

```javascript
Cxmath.sinh(z);
Cxmath.cosh(z);
Cxmath.tanh(z);
```

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|sinh|Hyperbolic-sine|Complex|
|cosh|Hyperbolic-cosine|Complex|
|tanh|Hyperbolic-tangent|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### Inverse Hyperbolic 함수

```javascript
Cxmath.asinh(z);
Cxmath.acosh(z);
Cxmath.atanh(z);
```

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|asinh|Inverse-hyperbolic-sine (arsinh)|Complex|
|acosh|Inverse-hyperbolic-cosine (arcosh)|Complex|
|atanh|Inverse-hyperbolic-tangent (artanh)|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Static Method: Sign Function

#### Complex static csgn(z)
Complex sign function
```javascript
Cxmath.csgn(z);
```
|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### Static Method: Vector

#### Complex static inprod(a, b)
Inner Product
```javascript
Cxmath.inprod(a, b);
```
|이름|타입|필수|
|:---:|:---:|:---:|
|a|number/string/Complex|O|
|b|number/string/Complex|O|

#### Complex static dist(a, b)
Distance from point (Re(a), Im(a)) to point (Re(b), Im(b))
```javascript
Cxmath.dist(a, b);
```
|이름|타입|필수|
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
> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|floor|-|Complex|
|ceil|-|Complex|
|round|-|Complex|
|trunc|-|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|
