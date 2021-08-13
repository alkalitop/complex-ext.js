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
declare with cartesian form
```javascript
let z = new Complex(1, 2); // 1+2i
```
#### constructor(abs: number, arg: number, 'polar')
declare with polar form
```javascript
let w = new Complex(Math.PI, 2, 'polar'); // 2exp(iπ) = -2
```
