<template lang="md">
# xamppのインストール

先ほど説明したサーバと、PHPを実行するソフト、その他必要なものをインストールします。
これをすることであなたのパソコンがサーバとなり、PHPを実行してWebページを見ることができます。
Xamppといい、AがWebサーバのApache、MがデータベースサーバのMySQL、PがPHPを指します

Windowsでの手順なのでMacだと違うかもしれません
1. https://www.apachefriends.org/jp/index.html から皆さんのパソコンにあったインストーラをダウンロードしてください。
2. ダウンロードしものを実行します。
3. この画面でチェックを外し、この画像のようにします。
![](img/xampp1.png)
4. これ以外は全部OKかNextかFinishで良いです。
5. Languageはアメリカの国旗でOK
6. この画面のチェックを外し、この画像のようにします
![](img/xampp2.png)
7. この画面で、Apacheの列にあるStartをクリックします。
![](img/xampp3.png)
8. ブラウザのURLのところに、http://localhost と入力してエンターを押します。
9. ページが表示されれば成功です。

ここで表示されているページは、Windowsでは`C:\xampp\htdocs`にあります。
試しにここに`test.php`を置き、以下のコードを書いて保存し、http://localhost/test.php にアクセスしてみましょう

```php
<?php
echo "Hello PHP!.\n";
echo "今は".date("Y-m-d H:i:s")."だよ";
?>
```
</template>