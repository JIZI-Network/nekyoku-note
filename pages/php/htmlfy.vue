<template lang="md">
# HTMLを出力してみよう

例えば下みたいなHTMLがあったとします

```HTML
<div>
    <ul>
        <li>
            alpha
        </li>
        <li>
            beta
        </li>
        <li>
            theta
        </li>
        <li>
            delta
        </li>
        <li>
            epsilon
        </li>
    </ul>
</div>
```

この`<li></li>`の羅列、めんどくさくないですか？？
そこでPHPを使ってみましょう。

```PHP
<?php
    $strs = ["alpha","beta","theta","delta","epsilon"];
?>
<div>
    <ul>
        <?php
            foreach($strs as $str){
                echo "<li>".$str."</li>";
            }
        ?>
    </ul>
</div>
```

とかけます。コードの量が大分減りました。

あるいは、ある時刻以降にだけ違う表示をしたいとします

```PHP
<p>
    <?php 
        //もし現在時刻が2018/08/16 13時より後なら
        if(time() > date("2018/08/16 13:00:00")){
            echo "応募受付は終了しました。";
        }else{
            echo "絶賛応募受付中！";
        }
    ?>
</p>
```

このように書くことで、HTMLのような静的な(=変化の無い)サイトとは違う動的な(=変化のある)サイトを作ることができます。

</template>