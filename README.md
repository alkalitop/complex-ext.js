# cpxn
Javascript complex library

## Copyright
&copy; 2021 Sanha, all rights reserved.

## License
CC BY-NC-ND 4.0

## Use

## Get Started
```javascript
const { Complex, Cxmath } = require(PATH);

```
### Declare a complex number
#### constructor(re: number, im: number)
declare with cartesian form (if the imaginary part equals zero, you can leave it out.)
```javascript
let z = new Complex(1, 2); // 1+2i
```
#### constructor(abs: number, arg: number, 'polar')
declare with polar form
```javascript
new Complex(Math.PI, 2, 'polar'); // 2exp(iπ) = -2
```

#### constructor(cx: complex)
copy
```javascript
new complex(z); // 1+2i
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

### Radical Root
```javascript
let s = new complex(-1);
```

#### Cxmath.sqrt(z: number/complex)
principal square root
```javascript
Cxmath.sqrt(s); // 0+1i
```

#### Cxmath.cbrt(z: number/complex)
principal cube root
```javascript
Cxmath.cbrt(s); // 0.5+0.8660254037844386i
```
