# cpxn
자바스크립트 복소수 라이브러리

## Copyright
&copy; 2021 Sanha, all rights reserved.

## License
CC BY-NC-ND 4.0

## Docs

### 시작하기
```javascript
const { Complex, Cxmath } = require(PATH);

```
### 복소수 선언하기
#### constructor(re: number, im: number)
직교 형식으로 선언
```javascript
let z = new Complex(1, 2); // 1+2i
```
#### constructor(abs: number, arg: number, 'polar')
극형식으로 선언
```javascript
let z = new Complex(Math.PI, 2, 'polar'); // 2exp(iπ) = -2
```

#### constructor(cx: complex)
복사
```javascript
let z = new Complex(z); // 1+2i
```

### Properties
```javascript
z.re; // 실수부
z.im; // 허수부
z.abs; // 절댓값
z.arg; // 편각
```

### 사칙연산 & 거듭제곱
```javascript
let p = new Complex(1, 2);
let q = new Complex(3, -4);
```
#### add(z: number/complex)
덧셈
```javascript
p.add(q); // 4-2i
p.add(6); // 7+2i
```

#### sub(z: number/complex)
뺄셈
```javascript
p.sub(q); // -2+6i
p.sub(6); // -5+2i
```

#### mul(z: number/complex)
곱셈
```javascript
p.mul(q); // 11+2i
p.mul(6); // 6+12i
```

#### div(z: number/complex)
나눗셈
```javascript
p.div(q); // -0.2+0.4i
p.div(4); // 0.25+0.5i
```

#### inv(z: number/complex)
거듭제곱
```javascript
p.inv(q); // 932.1391946432212+95.9465336603415i
p.inv(6); // 117+44i
```

### 반수 (덧셈 역원)

#### Cxmath.opp(z: number/complex)
반수 (덧셈 역원)
```javascript
Cxmath.opp(z);
```

### 켤레 복소수

#### Cxmath.conj(z: number/complex)
켤레 복소수
```javascript
Cxmath.conj(z);
```

### 거듭제곱근

#### Cxmath.sqrt(z: number/complex)
주요 제곱근
```javascript
Cxmath.sqrt(z);
```

#### Cxmath.cbrt(z: number/complex)
주요 세제곱근
```javascript
Cxmath.cbrt(z);
```

### 지수 & 로그

#### Cxmath.exp(z: number/complex)
exp(z), 자연지수함수
```javascript
Cxmath.exp(z);
```

#### Cxmath.ln(z: number/complex)
<a href="https://namu.wiki/w/복소로그함수#s-3">Log(z)</a>, 주 분지에서 정의된 자연로그
```javascript
Cxmath.ln(z);
```

#### Cxmath.log(b: number/complex, a: number/complex)
밑이 b, 진수가 a인 주 분지에서 정의된 로그
```javascript
Cxmath.log(b, a);
```

### 삼각함수

#### Cxmath.sin(z: number/complex)
사인
```javascript
Cxmath.sin(z);
```

#### Cxmath.cos(z: number/complex)
코사인
```javascript
Cxmath.cos(z);
```

#### Cxmath.tan(z: number/complex)
탄젠트
```javascript
Cxmath.tan(z);
```

### 역삼각함수

#### Cxmath.asin(z: number/complex)
아크사인
```javascript
Cxmath.asin(z);
```

#### Cxmath.acos(z: number/complex)
아크코사인
```javascript
Cxmath.acos(z);
```

#### Cxmath.atan(z: number/complex)
아크탄젠트
```javascript
Cxmath.atan(z);
```

#### Cxmath.atan2(w: number/complex, z: number/complex)
아크탄젠트2
```javascript
Cxmath.atan2(w, z);
```

### 쌍곡선함수

#### Cxmath.sinh(z: number/complex)
쌍곡사인
```javascript
Cxmath.sinh(z);
```

#### Cxmath.cosh(z: number/complex)
쌍곡코사인
```javascript
Cxmath.cosh(z);
```

#### Cxmath.tanh(z: number/complex)
쌍곡탄젠트
```javascript
Cxmath.tanh(z);
```

### 역쌍곡선함수

#### Cxmath.asinh(z: number/complex)
역쌍곡사인
```javascript
Cxmath.asinh(z);
```

#### Cxmath.acosh(z: number/complex)
역쌍곡코사인
```javascript
Cxmath.acosh(z);
```

#### Cxmath.atanh(z: number/complex)
역쌍곡탄젠트
```javascript
Cxmath.atanh(z);
```

### 부호함수

#### Cxmath.csgn(z: number/complex)
<a href="https://namu.wiki/w/부호함수#s-3">csgn(z)</a>, 복소부호함수
```javascript
Cxmath.csgn(z);
```

### 거리

#### Cxmath.dist(w: number/complex, z: number/complex)
distance between w and z in the complex plane
```javascript
Cxmath.dist(w, z);
```

### 평균

#### Cxmath.armean(z_1, z_2, ..., z_n: number/complex)
산술평균
```javascript
Cxmath.armean(z_1, z_2, ..., z_n);
```

#### Cxmath.gemean(z_1, z_2, ..., z_n: number/complex)
기하평균
```javascript
Cxmath.gemean(z_1, z_2, ..., z_n);
```

### 난수

#### Cxmath.random()
랜덤 복소수 (실수부와 허수부가 모두 0 이상 1 미만임)
```javascript
Cxmath.random();
```

## Development Note

### v1

#### 21.8.16
<ul>
<li>dist(거리) 함수 추가</li>
<li>armean(산술평균), geomean(기하평균) 함수 추가</li>
</ul>

#### 21.8.14
<ul>
<li>atan2 함수 추가</li>
</ul>

#### 21.8.13
<ul>
<li>1차 개발 완료</li>
</ul>

