# cplx.js Docs KR

## class Complex

### 생성자

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
|re|실수부|Complex|
|im|허수부|Complex|
|abs|절댓값|Complex|
|arg|편각|Complex|

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
|UNIT|허수 단위|Complex|

### 문자열로 나타내기

#### string toString()
String representation
```javascript
z.toString()
```

### 메서드: 같음

#### boolean equals(z)
복소수의 값이 같은지 판별
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

### 메서드: 기본 연산
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
|add|덧셈|Complex|
|sub|뺄셈|Complex|
|mul|곱셈|Complex|
|div|나눗셈|Complex|
|inv|거듭제곱|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

## class Cxmath

### 정적 메서드: 추가 연산
```javascript
let z = new Complex('1+2j');

Cxmath.conj(z); // 1-2j
Cxmath.opp(z); // -1-2j
Cxmath.rec(z); // 0.19999...-0.39999...j
```

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|conj|켤레 복소수|Complex|
|opp|반수 (덧셈 역원)|Complex|
|rec|역수|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### 정적 메서드: 거듭제곱근
```javascript
let z = new Complex('1+2j');

Cxmath.sqrt(z); // 1.27201...+0.78615...j
Cxmath.cbrt(z); // 1.21961...+0.47171...j
```

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|sqrt|주요 제곱근|Complex|
|cbrt|주요 세제곱근|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### 정적 메서드: 지수함수 & 로그함수

#### Complex static exp(z)
지수함수
```javascript
Cxmath.exp(z);
```

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### Complex static log(a[, b=Math.E])
진수가 a, 밑이 b인 로그함수 (주 분지에서 정의됨. 밑이 e이면 생략 )
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

### 정적 메서드: 삼각함수

#### 삼각함수

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
|sin|사인|Complex|
|cos|코사인|Complex|
|tan|탄젠트|Complex|
|csc|코시컨트|Complex|
|sec|시컨트|Complex|
|cot|코탄젠트|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### 역삼각함수

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
|asin|아크사인|Complex|
|acos|아크코사인|Complex|
|atan|아크탄젠트|Complex|
|acsc|아크코시컨트|Complex|
|asec|아크시컨트|Complex|
|acot|아크코탄젠트|Complex|

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

### 정적 메서드: 쌍곡선 함수

#### 쌍곡선 함수

```javascript
Cxmath.sinh(z);
Cxmath.cosh(z);
Cxmath.tanh(z);
```

> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|sinh|쌍곡사인|Complex|
|cosh|쌍곡코사인|Complex|
|tanh|쌍곡탄젠트|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

#### 쌍곡선 함수의 역함수

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

### 정적 메서드: 부호함수

#### Complex static csgn(z)
복소부호함수
```javascript
Cxmath.csgn(z);
```
|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|

### 정적 메서드: 벡터

#### Complex static inprod(a, b)
내적
```javascript
Cxmath.inprod(a, b);
```
|이름|타입|필수|
|:---:|:---:|:---:|
|a|number/string/Complex|O|
|b|number/string/Complex|O|

#### Complex static dist(a, b)
(Re(a), Im(a)) 에서 (Re(b), Im(b)) 까지의 거리
```javascript
Cxmath.dist(a, b);
```
|이름|타입|필수|
|:---:|:---:|:---:|
|a|number/string/Complex|O|
|b|number/string/Complex|O|

### 정적 메서드: 난수

#### Complex static random()
실수부와 허수부가 모두 [0, 1]에 포함되는 난수 생성
```javascript
Cxmath.random();
```

### 정적 메서드: 바닥함수 & 천장함수
```javascript
Cxmath.floor(z);
Cxmath.ceil(z);
Cxmath.round(z);
Cxmath.trunc(z);
```
> 함수

|이름|설명|반환 타입|
|:---:|:---:|:---:|
|floor|바닥함수|Complex|
|ceil|천장함수|Complex|
|round|반올림|Complex|
|trunc|-|Complex|

> 매개변수

|이름|타입|필수|
|:---:|:---:|:---:|
|z|number/string/Complex|O|
