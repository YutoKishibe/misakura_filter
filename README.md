# misakura_filter

##概要
Webページの文章をすべてみさくら誤コンバートする拡張機能です<br/>
Chrome拡張の<a href="https://chrome.google.com/webstore/detail/%E3%82%A4%E3%82%AB%E8%AA%9E%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%BF-for-chrome/pdhhbgpiiphbnnefiknaanfngjhbhidl?hl=ja">イカ語コンバータ―</a>~~のソースを丸ごとパクッて改変して~~参考にして作成したため、$5払っての一般公開はしません。<br/>
現在、機能をonにしたままリロードしたり、on→off→onなどにすると多重みさくらになる~~バグ~~仕様があります。<br/>
また、ツイッターは5秒に一度レスポンスを受け取るため、5秒に一度みさくらonみさくらになります。offにしても動き続けます<br/>
<br/>
##導入方法
1. git cloneするか、zipでDLする
2. Chromeを開き、ブラウザ右上の≡から設定→拡張機能→デベロッパーモードにチェック
3. パッケージ化されていない拡張機能を読み込む...→"mimsakura_filter"のフォルダを選択
4. インストールが完了し、アドレスバーの横にアイコンが追加される

##使用方法
アイコンをクリックしてahe(on),rame(off)を切り替えられる。<br/>
また、ページ上で右クリックし、「みさくら誤変換on⇔off」でも同様に切り替えられる<br/>
アイコンを右クリックし、オプションをクリックすると、通常のみさくら誤変換を使用できるページが開く<br/>
##使用例
走れメロス<br/>
<img src="sample/Melos.png"><br/>
ツイッター(多重みさくら)<br/>
<img src="sample/misakuratter.png"><br/>

