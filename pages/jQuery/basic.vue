<template lang='md'>

# jQueryについて

## 概要

jQueryの導入と活用について

## jQueryとは

「ウェブブラウザ用のJavaScriptコードをより容易に記述できるようにするために設計されたJavaScriptライブラリ(Wikipediaより)」です。

(ライブラリ:汎用性の高い複数のプログラムを再利用可能な形でひとまとまりにしたもの)

JavaScript単体では煩雑になってしまうコードを、より短く記述できます。

<!-- 例 -->

## jQueryの導入

2つの方法があります。

### Web上のソースを読み込む

HTMLに

``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/x.x.x/jquery.min.js"></script>
```
と書きます。

この例ではgoogleが配布しているファイルをダウンロードしますが、Microsoftなども同様のサービスを提供しています。

…/x.x.x/…の部分にはバージョンが入ります。必要なものを使いましょう。


### ダウンロードしたソースを読み込む

公式サイト(jquery.com)からファイルをダウンロードし、javascriptを読み込むときと同様に、HTMLに

``` html
<script type="text/javascript" src="(保存場所)/(ファイル名)"></script> 
```

と書きます。

</template>