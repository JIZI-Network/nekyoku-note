<template lang="md">
<small>こもり 2018/8/31</small>

# 条件分岐

## このページについて

このページの目標は、条件分岐を使えるようになることです。

## 条件分岐を扱う理由

例えば「数値aが偶数の時だけ処理をする」「値aが文字列の時だけ処理をする」など、
ランダムに入力される値に対して、条件に応じて異なる処理を要求される可能性があります。

このような処理を行うためにJavaScriptで実装されているものとして、「if...else文」等があります。

## 条件分岐

ここでは「if...else文」を紹介します。

- if文

	if文は、与えられた条件が成り立っているときにだけ処理をするときによく使われる文です。

	「if\(A\)\{B\}」と書きます。A,Bはそれぞれ処理が書かれた文を表します。

	if文は以下の順番で実行されます。

	1. Aがtrueであるかfalseであるかを評価します。
		1. Aがtrueならば、Bが実行されます。
		1. Aがfalseならば、if文の処理は終了になります。

	```javascript
	//JavaScript

	let i = 10;

	if(i%2 === 0){
		console.log('this is even');
	}
	//iが偶数(iを2で割ったあまりで0)なので、「this is even」と出力される。

	let j = 9;

	if(j%2 === 0){
		console.log('this is even');
	}
	//jが奇数なので、何も出力されない。
	```

- if...else文

	if...else文は、与えられた条件が成り立っているときかどうかで処理を変えたいときによく使われる文です。

	「if\(A\)\{B\}else\{C\}」と書きます。A,B,Cはそれぞれ処理が書かれた文を表します。

	if...else文は以下の順番で実行されます。

	1. Aがtrueであるかfalseであるかを評価します。
		1. Aがtrueならば、Bが実行されます。
		1. Aがfalseならば、Cが実行されます。

	```javascript
	//JavaScript
	
	let i = 100;

	if(i%2 === 0){
		console.log('this is even');
	}else{
		console.log('this is odd');
	}
	//iが偶数なので、「this is even」と出力される。

	let j = 101;

	if(j%2 === 0){
		console.log('this is even');
	}else{
		console.log('this is odd');
	}
	//jが奇数なので、「this is odd」と出力される。
	```

- else if

	if...else文のelseの部分にif...else文をさらに追加することができます。

	「if\(A1\)\{B1\}else if\(A2\)\{B2\}...else if\(An\)\{Bn\}else\{C\}」と書きます。
	A1,...An,B1,...,Bn,Cはそれぞれ処理が書かれた文を表します。

	上の文は以下の順番で実行されます。

	1. A1がtrueであるかfalseであるかを評価します。
		1. A1がtrueならば、B1が実行されます。
		1. A1がfalseならば、A2がtrueであるかfalseであるか評価します。
			1. A2がtrueならば、B2が実行されます。
			1. A2がfalseならば、A3がtrueであるかfalseであるか評価します。
				1. これを繰り返します。
				1. Anがfalseならば、Cが実行されます。

	```javascript
	//JavaScript
	
	let i = 10;

	if(i>0){
		console.log('this is positive');
	}else if(i<0){
		console.log('this is negative');
	}else{
		console.log('this is zero');
	}
	//iは正の数(>0)なので「this is positive」と出力される。

	```

[戻る](jsBasic07_for)

[次へ](jsBasic09_func)

[目次に戻る](../basic/)
</template>
