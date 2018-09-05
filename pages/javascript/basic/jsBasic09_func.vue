<template lang="md">
<small>こもり 2018/8/31</small>

# 関数

## このページについて

このページの目標は、関数を使えるようになることです。

## 関数とは

例えば、「自然数に対してその二乗の値を求める」のような処理を複数回行ったり、
そういった処理を別の時も実行したいときがあります。

そのような処理をひとまとめにして関数としてできます。

関数は、簡単に言うと「入力された値に対して処理を実行し、出力を返す」という処理ができる
「Functionオブジェクト」です。

例えば先ほどの「自然数に対してその二乗の値を求める」処理は、
「自然数を入力として受け付け、その値を二乗したものを出力として返す」という関数として定義できます。

## 関数

関数を定義する方法として、「関数宣言」、「関数式」、「アロー関数」を紹介します。

- 関数宣言

	関数宣言は、「function A\(B1,...,BN\)\{C\}」と書きます。
	Aが関数の名前、B1,...BNが引数(入力)の名前、Cが処理が書かれた文です。
	Cの文の中に「return D」と書くことで、Dを出力できます。

	例えば以下の様に定義します。

	```javascript
	//JavaScript

	function square(num){
		return num*num;
	}
	```

	こう書くことで、名前が「square」の、numを引数とし、「num*num」を出力する関数を定義できます。

- 関数式

	関数式は、変数宣言を用いて、例えば以下の様に定義します。

	```javascript
	//JavaScript

	let min = function hoge(a,b){
		let c = a;
		if(b < a){
			c = b;
		}
		return b;
	}
	```

	こう書くことで、名前が「min」の関数を定義できます。
	「hoge」という関数は(minを定義する関数式の外部では)定義されていないことになってます。

	また、hogeの部分の名前を無名にすることもできます。

	```javascript
	//JavaScript

	let min = function(a,b){
		let c = a;
		if(b < a){
			c = b;
		}
		return b;
	}
	```

- アロー関数

	アロー関数は、関数式と同じように定義しますが、関数式より簡潔に書くことができます。
	(また、アロー関数にはthisの束縛がありません)

	アロー関数は、一般的に「\(A1,...,AN\)\=\>\{B\}」と書きます。
	A1,...,ANは引数の名前、Bは処理が書かれた文です。Bの文の中でreturnによって出力を行えます。

	引数の数が一つだけの場合は、「A\=\>\{B\}」という形で省略できます。

	Bの文が「return D」だけの場合は、「\(A1,...,AN\)\=\>D」という形で省略できます。

	```javascript
	//JavaScript

	let min = (a,b) => {
		let c = a;
		if(b < a){
			c = b;
		}
		return b;
	};

	let isEven = num => {
		let temp = false;
		if(num%2===0){
			temp = true;
		}
		return temp;
	};

	let product = (a,b) => a*b;

	let square = num => num*num;
	```

## 関数の使用

先ほどの様に定義した関数は、「関数の名前\(与えたい引数の値\)」と書くことで使用できます。
「関数の名前」だけを書くと、定義した関数そのものが呼び出され、関数は実行されないので注意してください。

```javascript
//JavaScript

let square = num => num*num;

console.log(square); //squareというfunctionが出力される
console.log(square(4)); //16

function nurupo(){
	return 'ga';
}
let i = nurupo(); //i = 'ga'
```

[戻る](jsBasic08_if)

[次へ](jsBasic10_challenge)

[目次に戻る](../basic/)
</template>
