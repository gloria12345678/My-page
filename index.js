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
// var zh_json = 'https://gloria12345678.github.io/My-page/zh.json'
// 
// var en_son = 'https://gloria12345678.github.io/My-page/en.json'
function json(){
  var i18_jp = document.getElementById('jp');
  var i18_en = document.getElementById('en');
  var i18_ch = document.getElementById('ch');
  var jp_json = 'https://gloria12345678.github.io/My-page/jp.json';
  var en_json = 'https://gloria12345678.github.io/My-page/jp.json';
  var ch_json = 'https://gloria12345678.github.io/My-page/jp.json';
  i18_jp.addEventListener('click', i18, true);
    function i18 (){
      feten()
      };
  i18_en.addEventListener('click', i18, true);
      function i18 (){
        feten()
        };
  i18_ch.addEventListener('click', i18, true);
        function i18 (){
          feten()
          };
  function feten (){
      fetch(jp_json)
      .then(function(response) {
        if (!response.ok) {
          throw new Error(" status = " + response.status);
        }
        return response.json();
      })
      .then(function(jp_json) {
        var name = document.getElementById('name')
        var div ='<div>'+jp_json[0].name+'<div>'
        name.innerHTML = div
         console.log(jp_json);
        })
  }
}
json();
