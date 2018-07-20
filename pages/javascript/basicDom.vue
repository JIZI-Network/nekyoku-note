<template lang="md">
# JavaScriptでDOMツリーをいじる(基礎)

## このページの目標

このページの内容を読むことで、例えば以下のことができるようになったらいいなと思います。
DOMツリーについてはここでは説明しませんが、知りたかったらググるなどしてください。

- HTMLの要素(タグ)のCSSプロパティを変化させる

- HTMLの要素のClassを付け加えたりする

- 上の二つを適当なHTMLの要素をクリックしたりすることでできるようにする

## 本旨

JavaScriptでHTMLの要素をいろいろいじるための準備、いじり方を紹介していきます。

### JavaScriptをHTMLで呼び出す

一番使ってほしいなと思う方法1つだけ紹介します。

- 外部スクリプト

    HTMLのscript要素のsrc属性にJavaScriptのファイルのパスを書くことで、そのファイルを実行させることができます。

``` HTML
<!-- HTML -->
<script src="hoge.js"></script>
<!-- こう書くことで、これが書かれたHTMLのファイルから見て相対パスがhoge.jsとなるJavaScriptのファイルを実行できる -->
<!-- 本当はtype="text/javascript"がなければならないが、これはtype属性の初期値として設定されている。また、これを書くとW3Cでwarningが出るので注意 -->
```

### HTMLの要素をJavaScriptで指定する

指定する方法はいろいろあります。

``` javascript
//JavaScript

//Elementの取得
const element1 = document.getElementById('hoge'); //idがhogeの要素を取得する
const element2 = document.querySelector('.menu li'); //classがmenuの要素が親にあるli要素のうち、最初のものを取得する

//HTMLcollectionの取得
const elements1 = document.getElementsByClassName('hoge'); //classがhogeの要素をすべて取得し、arrayもどきのものに順番に入れる
const elements2 = document.getElementsByTagName('div'); //div要素をすべて取得
const elements3 = document.querySelectorAll('.menu li') //classがmenuの要素が親にあるli要素をすべて取得

const element01 = element1.querySelector('input'); //documentではなくelement1にすると、取得する要素の検索範囲が全体からelement1の子要素のみになる
const elements01 = elements1[0].getElementsByClassName('hoge'); //HTMLcollectionは配列のようなものなので[0]などで指定する必要がある
//elements1[0] === elements1.item(0) ...true
//elements1['neko'] === elements1.namedItem('neko') ...true
```

### HTMLの要素のstyleを書き換えたりclassを変えたりする

```javascript
//Javascript

const el = document.getElementById('hoge');

el.style.backgroundColor = 'red'; //要素elのCSSプロパティを変える プロパティはJavaScriptにおいてキャメルケースであることに注意
/*
キャメルケースについて
CSSでの書き方における"abc-def"をabcDefに変えるだけ(ハイフンの後の一文字を大文字にしてハイフンを消す)
CSSの書き方(ケバブケース) < --- > JavaScriptの書き方(キャメルケース)
color < --- > color
background-color < --- > backgroundColor
font-size < --- > fontSize
*/
el.style.color = null; //CSSプロパティをリセット

el.classList.add('po'); //elのclassに"po"を追加
el.classList.remove('po'); //classから"po"を削除
el.classList.toggle('po'); //classに"po"があったら消し、なかったらつける
el.classList.contains('po'); //classに"po"があればtrue、なければfalse
```

### HTMLの要素の属性を書き換えたりする

```Javascript
//JavaScript

const el = document.getElementById('nyan');

el.hasAttribute('href'); //elにhref属性が設定されていたらtrue
el.getAttribute('href'); //href属性の値を取得
el.setAttribute('href','/'); //href属性の値を"/"にする
el.removeAttribute('href'); //href属性を削除
```

### HTMLの要素を新たに生み出す

```javascript
//JavaScript

const divNode = document.createElement('div'); //div要素を生み出す
const divCloneNode = div.cloneNode(true); //divNodeを複製する
```

### HTMLの要素の中身をいじる

```javascript
//JavaScript

const el = document.createElement('div');
const spanNode = document.createElement('span');

el.innerHTML = '<p>ここはHTMLの書き方をする</p>'; //elの子要素を右辺の内容に書き換える(代入する)
//el.innerHTMLで中身を読み取ることもできる

el.appendChild(spanNode); //elの最後の子要素としてspan要素を追加
```

### HTMLの要素にイベントを付ける

"element.addEventListener"というメソッドを使用して、HTMLの要素にイベントを付けることができます。
"element.addEventListener"の引数は(主に)3つあり、"(event,func,useCap)"と設定されます。

- event

	イベントを発火したい(引き起こしたい)タイミングを設定します。いろいろある

- func

	eventが起こった時に実行したいfunctionを設定します。

- useCap

	これはちょっとめんどいので説明は省略します。大体falseとしておけばいいけどtrueのときもある。

以下では、「idがbuttonの要素をクリックするとidがmenuの要素のclassにopenを追加したり取り除いたりする」イベントを作っています。

```javascript
//Javascript

const buttonNode = document.getElementById('button');
const menuNode = document.getElementById('menu');

//引き起こしたい関数の定義
function toggleClass(){
	menuNode.classList.toggle('open');
}

buttonNode.addEventListener('click',toggleClass,false);
```

</template>
