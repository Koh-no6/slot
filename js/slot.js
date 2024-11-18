
//3つのスロットの状態などを保存する変数
//slots[0～2]{ spinning:回転中か、v:スロットの値(0～9)、elm:div要素を入れる }
const slots= [
    {spinning:false, v:0, elm:null},
    {spinning:false, v:0, elm:null},
    {spinning:false, v:0, elm:null}
];

window.addEventListener("load",function(){
    // ループ i++とは：i=i+1
    for(let i=0;i<slots.length;i++){
        //idが"s1","s2","s3"の要素を取得してslots[0～2].elmに設定する
        slots[i].elm=document.getElementById( "s"+(i+1) );
    }
    // 0.02秒(20ミリ秒)毎にinterval関数を呼び出す
    setInterval(interval, 20);
});

//0.02秒(20ミリ秒)毎に呼び出される関数
function interval(){
    //ループ  for(i=0～2){この部分が3回動く}
    for(let i=0;i<slots.length;i++){
        //スロット[i]が回転中の場合
        if(slots[i].spinning){
            //【？】1を足して10で割った余りを入れる(9を超えない用)
            slots[i].v = (slots[i].v+1)%10;
            //スロットの値を表示させる
            slots[i].elm.innerHTML=slots[i].v;
        }
    }
}

//スタートボタンが押されたときに実行される関数
function start(){
    // スロット３つ全てが停止中の場合
    if(!slots[0].spinning && !slots[1].spinning && !slots[2].spinning){
        for(let i=0;i<slots.length;i++){
            slots[i].spinning=true;
        }
        document.getElementById("result").innerHTML="";
    }
}

//ストップボタンが押されたときに実行される関数
function stop(s){
    // スロット３つの内、１つでも回転している場合
    if(slots[0].spinning || slots[1].spinning || slots[2]){
        //スロット[s]を停止中にする
        slots[s].spinning=false;
        // スロットが3つとも回転していない場合
        if(!slots[0].spinning && !slots[1].spinning && !slots[2].spinning){
            if(slots[0].v==slots[1].v && slots[1].v==slots[2].v){
                // スロット３つの値が同じ場合
                document.getElementById("result").innerHTML="<p>あたり！バンザイ🥳</p>";
            }else if(slots[0].v==slots[1].v || slots[1].v==slots[2].v || slots[2].v==slots[0]){
                //スロット２つの値が同じ場合
                document.getElementById("result").innerHTML="<p>おしい‥ドンマイ😅</p>";
            }else{
                document.getElementById("result").innerHTML="<p>はずれ‥残念🫤</p>";
            }
        }
    }
}