# complex-pure Docs KR

## class Complex

### constructor()
#### type-1
```js
constructor(Number re[, Number im])
```
직교 형식 복소수를 생성합니다. `re`는 **실수부**, `im`은 **허수부**를 의미합니다. 허수부가 0일 경우에는 `im`을 생략할 수 있습니다.

#### type-2
```js
constructor(Number abs, Number arg, Object option)
```
극형식의 복소수를 생성합니다. `abs`는 **절댓값**, `arg`는 **편각**을 의미합니다.
<br/> `option`에는 다음과 같은 객체가 들어가야합니다:
```js
{ polar: true }
```

#### type-3
```js
constructor(String str)
```
문자열을 파싱하여 복소수를 생성합니다. `str`은 파싱할 문자열을 의미합니다.
<br/> `str`에는 다음 8가지 유형이 가능합니다:
- `'x+yj'`
- `'x-yj'`
- `'-x+yj'`
- `'-x-yj'`
- `'x'`
- `'-x'`
- `'yj'`
- `'-yj'`

*(단, x와 y는 0보다 작지 않습니다.)*

#### type-4
```js
constructor(Complex z)
```
복소수를 복사합니다. `z`는 복사할 복소수를 의미합니다.

### 프로퍼티 (Properties)
```js
Number re
Number im
Number abs
Number arg
```
`re` 실수부
<br/>`im` 허수부
<br/>`abs` 절댓값
<br/>`arg` 편각

### 상수
```js
Complex Complex.EPSILON;
Complex Complex.PI; // 3.141592...
Complex Complex.E; // 2.718281...
Complex Complex.ONE; // 1
Complex Complex.UNIT; // 1j
```

- `Complex.EPSILON` 2^-52
- `Complex.PI` π
- `Complex.E` e
- `Complex.ONE` 1
- `Complex.UNIT` 허수 단위

### toString()
```js
String toString()
```

### NOTICE
지금부터, Complex 클래스로서 생성된 복소수가 자신을 가리키는 수를 **주어진 수** 라고 서술하겠습니다.<br/>
이 문장 아래에서 소개되는 함수들의 매개변수로서 문자열이 들어간다면, 그 문자열은 복소수를 생성하기위해 파싱할 문자열입니다.

### equals()
```js
Boolean equals(Number|String|Complex z)
```
<br/>주어진 수를 `z`와 비교하여 실수부와 허수부 각각의 차가 모두 2^-52 이하이면 참, 아니면 거짓을 반환합니다.

### add()
[설명 보기](#div)
### sub()
[설명 보기](#div)
### mul()
[설명 보기](#div)
### div()
```js
Complex add(Number|String|Complex z)
Complex sub(Number|String|Complex z)
Complex mul(Number|String|Complex z)
Complex div(Number|String|Complex z)
```
- `add()` 주어진 수에 `z`를 더한 복소수를 반환합니다.
- `sub()` 주어진 수에서 `z`를 뺀 복소수를 반환합니다.
- `mul()` 주어진 수에 `z`를 곱한 복소수를 반환합니다.
- `div()` 주어진 수에 `z`의 역수를 곱한 복소수를 반환합니다.

### inv()
```js
Complex inv(Number|String|Complex z)
```
밑이 주어진 수이고 지수가 `z`인 복소수를 반환합니다.

## class Cxmath

### Cxmath.conj()
[설명 보기](#cxmathrec)
### Cxmath.opp()
[설명 보기](#cxmathrec)
### Cxmath.rec()
```js
Complex Cxmath.conj(Number|String|Complex z)
Complex Cxmath.opp(Number|String|Complex z)
Complex Cxmath.rec(Number|String|Complex z)
```
- `Cxmath.conj()`: `z`의 켤레복소수를 반환합니다.
- `Cxmath.opp()`: `z`에 -1을 곱한 복소수를 반환합니다.
- `Cxmath.rec()`: `z`의 역수인 복소수를 반환합니다.

### Cxmath.sqrt()
[설명 보기](#cxmathcbrt)
### Cxmath.cbrt()
```js
Complex Cxmath.sqrt(Number|String|Complex z)
Complex Cxmath.cbrt(Number|String|Complex z)
```
- `Cxmath.sqrt()`: `z`의 주요 제곱근을 반환합니다.
- `Cxmath.cbrt()`: `z`의 주요 세제곱근을 반환합니다.

### Cxmath.exp()
```js
Complex Cxmath.exp(Number|String|Complex z)
```
밑이 e(자연로그의 밑)이고 지수가 `z`인 복소수를 반환합니다.

### Cxmath.log()
```js
Complex Cxmath.log(Number|String|Complex a[, Number|String|Colplex b])
```
밑(**b**ase)이 `b`이고 진수(**a**ntilogarithm)가 `a`인 log값을 반환합니다. 
밑이 e(자연로그의 밑)일 때는 생략할 수 있습니다.
<br/>**Principal branch에서 정의되었음**에 주의해주세요.

### Cxmath.sin()
[설명 보기](#cxmathtan)

### Cxmath.cos()
[설명 보기](#cxmathtan)

### Cxmath.tan()
```js
Complex Cxmath.sin(Number|String|Complex z)
Complex Cxmath.cos(Number|String|Complex z)
Complex Cxmath.tan(Number|String|Complex z)
```
- `Cxmath.sin()`: sin(`z`) 를 반환합니다.
- `Cxmath.cos()`: cos(`z`) 를 반환합니다.
- `Cxmath.tan()`: tan(`z`) 를 반환합니다.

### Cxmath.asin()
[설명 보기](#cxmathatan)

### Cxmath.acos()
[설명 보기](#cxmathatan)

### Cxmath.atan()
```js
Complex Cxmath.asin(Number|String|Complex z)
Complex Cxmath.acos(Number|String|Complex z)
Complex Cxmath.atan(Number|String|Complex z)
```
- `Cxmath.asin()`: arcsin(`z`) 를 반환합니다.
- `Cxmath.acos()`: arccos(`z`) 를 반환합니다.
- `Cxmath.atan()`: arctan(`z`) 를 반환합니다.

### Complex static atan2(z1, z2)
2-argument-arctangent
```javascript
Cxmath.atan2(z1, z2);
```
|이름|타입|필수|
|:---:|:---:|:---:|
|z1|number/string/Complex|O|
|z2|number/string/Complex|O|

### Cxmath.sinh()
[설명 보기](#cxmathtanh)

### Cxmath.cosh()
[설명 보기](#cxmathtanh)

### Cxmath.tanh()
```js
Complex Cxmath.sinh(Number|String|Complex z)
Complex Cxmath.cosh(Number|String|Complex z)
Complex Cxmath.tanh(Number|String|Complex z)
```
- `Cxmath.sinh()`: sinh(`z`) 를 반환합니다.
- `Cxmath.cosh()`: cosh(`z`) 를 반환합니다.
- `Cxmath.tanh()`: tanh(`z`) 를 반환합니다.

### Cxmath.asinh()
[설명 보기](#cxmathatanh)

### Cxmath.acosh()
[설명 보기](#cxmathatanh)

### Cxmath.atanh()
```js
Complex Cxmath.asinh(Number|String|Complex z)
Complex Cxmath.acosh(Number|String|Complex z)
Complex Cxmath.atanh(Number|String|Complex z)
```
- `Cxmath.asinh()`: arsinh(`z`) 를 반환합니다.
- `Cxmath.acosh()`: arcosh(`z`) 를 반환합니다.
- `Cxmath.atanh()`: artanh(`z`) 를 반환합니다.

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
