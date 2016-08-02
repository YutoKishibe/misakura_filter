function misakura(str){
//ver 1.72
str = str + "\n";
//↑暫定処置
/*
基本構造は
なんこつ言語エンコーダ：13%
みさくらコンバータ：27%
追加要素：60%
くらいの割合
あとみさくら的マリみてとか少し…
*/
str = str.replace(/(気持|きも)ちいい/g,'ぎも゛ぢい゛い゛ぃ');
str = str.replace(/(大好|だいす)き/g,'らいしゅきいぃっ');
str = str.replace(/(ミルク|みるく|牛乳)/g,'ちんぽミルク');
str = str.replace(/お(願|ねが)い/g,'お願いぃぃぃっっっﾞ');
str = str.replace(/ぁ/g,'ぁぁ゛ぁ゛');
str = str.replace(/あ/g,'ぁあああ あぉ');
str = str.replace(/お/g,'おﾞぉおォおん');
str = str.replace(/ごきげんよう/,'ごきげんよぉおお！んおっ！んおおーーっ！ ');
str = str.replace(/ごきげんよう/g,'ごきげんみゃぁあ゛あ゛ぁ゛ぁぁあ！！');
str = str.replace(/こん(にち|ばん)[はわ]/g,'こん$1みゃぁあ゛あ゛ぁ゛ぁぁあ！！');
str = str.replace(/えて/g,'えてへぇええぇﾞ');
str = str.replace(/する/g,'するの');
str = str.replace(/します/g,'するの');
str = str.replace(/精液/g,'せーしっせーし でりゅぅ でちゃいましゅ みるく ちんぽみるく ふたなりみるく');
str = str.replace(/射精/g,'でちゃうっ れちゃうよぉおおﾞ');
str = str.replace(/(馬鹿|バカ|ばか)/g,'バカ！バカ！まんこ!!');
str = str.replace(/いい/g,'いぃぃっよぉおおﾞ');
str = str.replace(/[好す]き/g,'ちゅき');
str = str.replace(/して/g,'してぇぇぇぇ゛');
str = str.replace(/行く/g,'んはっ イっぐぅぅぅふうぅ');
str = str.replace(/いく/g,'イっくぅぅふぅん');
str = str.replace(/イク/g,'イッちゃううぅん');
str = str.replace(/駄目/g,'らめにゃのぉぉぉ゛');
str = str.replace(/ダメ/g,'んぉほぉぉォォ　らめぇ');
str = str.replace(/だめ/g,'らめぇぇ');
str = str.replace(/ちゃん/g,'ちゃぁん');
str = str.replace(/(おい|美味)しい/g,'$1ひぃ…れしゅぅ');
str = str.replace(/(た|る|ない)([。、　 ・…!?！？」\n\r\x00])/g,'$1の$2');
str = str.replace(/さい([。、　 ・…!?！？」\n\r\x00])/g,'さいなの$1');
str = str.replace(/よ([。、　 ・…!?！？」\n\r\x00])/g,'よお゛お゛お゛ぉ$1');
str = str.replace(/もう/g,'んもぉ゛お゛お゛ぉぉ');
str = str.replace(/(い|入)れて/g,'いれてえぇぇぇえ');
str = str.replace(/(気持|きも)ちいい/g,'きも゛ぢい゛～っ');
str = str.replace(/(がんば|頑張)る/g,'尻穴ちんぽしごき$1るぅ!!!');
str = str.replace(/出る/g,'でちゃうっ れちゃうよぉおおﾞ');
str = str.replace(/でる/g,'でっ…でるぅでるうぅうぅ');
str = str.replace(/です/g,'れしゅぅぅぅ');
str = str.replace(/ます/g,'ましゅぅぅぅ');
str = str.replace(/はい/g,'はひぃ');
str = str.replace(/スゴイ/g,'スゴぉッ!!');
str = str.replace(/(すご|凄)い/g,'しゅごいのょぉぉぅ');
str = str.replace(/だ/g,'ら');
str = str.replace(/さ/g,'しゃ');
str = str.replace(/な/g,'にゃ');
str = str.replace(/つ/g,'ちゅ');
str = str.replace(/ちゃ/g,'ひゃ');
str = str.replace(/じゃ/g,'に゛ゃ');
str = str.replace(/ほ/g,'ほお゛お゛っ');
str = str.replace(/で/g,'れ');
str = str.replace(/す/g,'しゅ');
str = str.replace(/ざ/g,'じゃ');
str = str.replace(/い/g,'いぃ');
str = str.replace(/の/g,'のぉおお');
return(str);
}
