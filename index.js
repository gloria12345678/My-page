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

var zh_json = 'https://gloria12345678.github.io/My-page/zh.json'
var jp_json = 'https://gloria12345678.github.io/My-page/jp.json'
var json = 'https://gloria12345678.github.io/My-page/en.json'
fetch(json)
.then(function(response) {
  if (!response.ok) {
   throw new Error(" status = " + response.status);
 }
 return response.json();
})
.then(function(json) {
  console.log(json);
})