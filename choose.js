window.onload = function(){
    var member = ["陳詩雅","潘姿怡","冼迪琦","蔡亞恩","國興瑀","賈宜蓁","柏靈","李孟純","林潔心","李采潔","董子瑄","宮田留佳","吳婉淩","林佳霓","劉語晴","邱品涵","林倢","李佳俐","藤井麻由","蔡伊柔","高云珏","王逸嘉","鄭妤葳","羅瑞婷","張法法","翁彤薰","周家安","曾詩羽","劉曉晴","林于馨","張羽翎","周佳郁","林易沄","林家瑩","小山美玲","鄭佳郁","吳騏卉","袁子筑","林亭莉","AKB48 Team TP 官方帳號"];
    var j=1;
    var times = 0;
    for(i=1;i<41;i++){
        times++;
        if(times == 11){
            j++;
            times = 1;
        }
        document.getElementById(`card-group-${j}`).innerHTML +=`
        <div class="card" id="member${i-1}" onclick="changeColor('member${i-1}',${i-1})">
            <img class="card-img-top" src="./asset/${i}.jpg">
            <div class="card-body">
                <h5 class="card-title">${member[i-1]}</h5>
            </div>
        </div>`;
    }
    //thanks original http://no2don.blogspot.com/2018/02/javascript-jquery-txt.html edit by poko
    $('#downloadConfig').click(function() {
        var str = `rpc:\n  enable: true\n  bind: 127.0.0.1:8080\ndebug: false\ninterval: 10\nout_put_path: ./\nfeature:\n  use_native_flv_parser: false\nlive_rooms:\n${generate()}`;
          var blob = new Blob([str], {
              type: "text/plain"
            }),
            url = window.URL.createObjectURL(blob);
          $(this).attr('href', url).attr('download', "config.yml");
    });
}
var memberClick = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var memberLink = ["https://www.lang.live/3652550","https://www.lang.live/2028726","https://www.lang.live/3687493","https://www.lang.live/3650734","https://www.lang.live/4560592","https://www.lang.live/3650741","https://www.lang.live/3650740","https://www.lang.live/1985963","https://www.lang.live/3650718","https://www.lang.live/3651219","https://www.lang.live/3800370","https://www.lang.live/4663724","https://www.lang.live/4210533","https://www.lang.live/4663716","https://www.lang.live/3686711","https://www.lang.live/3686707","https://www.lang.live/3650580","https://www.lang.live/3619520","https://www.lang.live/3794774","https://www.lang.live/1398860","https://www.lang.live/3650590","https://www.lang.live/3650583","https://www.lang.live/3793753","https://www.lang.live/3650751","https://www.lang.live/3652111","https://www.lang.live/4663722","https://www.lang.live/4663718","https://www.lang.live/3686725","https://www.lang.live/3686708","https://www.lang.live/3686713","https://www.lang.live/3686709","https://www.lang.live/3650735","https://www.lang.live/3650589","https://www.lang.live/3650755","https://www.lang.live/3795137","https://www.lang.live/3650753","https://www.lang.live/4663715","https://www.lang.live/4663738","https://www.lang.live/4663721","https://www.lang.live/3654414"];
function changeColor(obj,num) {
    if(memberClick[num] == 0){
        document.getElementById(obj).classList.add("bg-warning");
        memberClick[num] = 1 ;
    }else{
        document.getElementById(obj).classList.remove("bg-warning");
        memberClick[num] = 0 ;
    }
}
function generate(){
    let choose = "";
    for(i=0;i<41;i++){
        if(memberClick[i] == 1){
            choose += "- "+memberLink[i]+"\n";
        }
    }
    return choose;
}

