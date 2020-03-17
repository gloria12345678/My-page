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

var json = 'zh.json'
fetch(json)
.then(function(response) {
  if (!response.ok) {
   throw new Error(" status = " + response.status);
 }
 return response.json();
 console.log(response);
})
.then(function(json) {
  console.log(json);
})