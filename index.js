function clickBody(banId,btnId,contenId){
$(contenId).slideUp();
var winHig = $(window).height()-13
$(banId).css({"height":winHig+"px"})
$(btnId).click(function(){
  $(banId).slideUp();
  $(contenId).slideDown();
})
}
function TochMove(){
  var tochStat,tochIng,tochEnd;
  $(document).on('touchstart',function(e){
    tochStat = e.originalEvent.changedTouches[0].pageY;
  });
   $(document).on('touchmove',function(e){
            tochEnd = e.originalEvent.changedTouches[0].pageY;
            tochIng = tochEnd- tochStat;
            console.log(tochIng)
            if(tochIng>200){
              $("#flip").slideDown();
              $("#main").slideUp();
            }
        });
}
$(document).ready(function(){;
  clickBody("#flip","#panel","#main")
  TochMove()
}); 
function json(){
  var i18_jp = document.getElementById('jp');
  i18_jp.addEventListener('click', i18_japan, true);
    function i18_japan (){
      var jp_json = 'https://gloria12345678.github.io/My-page/jp.json';
      console.log(jp_json)
        fetch_i18(jp_json)
    }

  var i18_en = document.getElementById('en');
  i18_en.addEventListener('click', i18_english, true);
    function i18_english (){
      var en_json = 'https://gloria12345678.github.io/My-page/en.json';
      console.log(en_json)
      fetch_i18(en_json)
    };

  var i18_ch = document.getElementById('ch');
  i18_ch.addEventListener('click', i18_china, true);
    function i18_china (){
      var ch_json = 'https://gloria12345678.github.io/My-page/ch.json';
      console.log(ch_json)
      fetch_i18(ch_json)
    };

  function fetch_i18 (json){
    fetch(json)
    .then(function(response) {
        if (!response.ok) {
          throw new Error(" status = " + response.status);
        }
        return response.json();
      })
      .then(function(json) {
        console.log(json)
        var name = document.getElementsByClassName('name')
        var pro = document.getElementsByClassName('text1')
        var pro1 = document.getElementsByClassName('text2')
        var body = document.body.clientWidth
        console.log(body)
        if(body<750){
          var ArrayNum =0
        }
        else{
          ArrayNum =1
        }
        console.log(ArrayNum)
        var div ='<div>'+json[0].name+'<div>'
        name[ArrayNum].innerHTML = div
        var txt1 ='<p>'+json[0].name+'</p><p>'+json[0].sex+'</p><p>'+json[0].old+'</p><p>'+json[0].telephone+'</p><p>'+json[0].email+'</p><p>'+json[0].page+'</p>';
        pro[ArrayNum].innerHTML = txt1
        var txt2 ='<p>'+json[0].birthday+'</p><p>'+json[0].access+'</p><p>'+json[0].Education+'</p><p>'+json[0].LastEducation+'</p>';
        pro1[ArrayNum].innerHTML = txt2
        })
  }
}
json();