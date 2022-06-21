# complex-pure Docs KR

## class Complex

### constructor()
#### type-1
```js
constructor(Number re, Number im)
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
### sub()
### mul()
### div()
```js
Complex add(Number|String|Complex z)
Complex sub(Number|String|Complex z)
Complex mul(Number|String|Complex z)
Complex div(Number|String|Complex z)
```
<br/>`add()` 주어진 수에 `z`를 더한 복소수를 반환합니다.
<br/>`sub()` 주어진 수에서 `z`를 뺀 복소수를 반환합니다.
<br/>`mul()` 주어진 수에 `z`를 곱한 복소수를 반환합니다.
<br/>`div()` 주어진 수에 `z`의 역수를 곱한 복소수를 반환합니다.

### inv()
```js
Complex inv(Number|String|Complex z)
```
밑이 주어진 수이고 지수가 `z`인 복소수를 반환합니다.

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
