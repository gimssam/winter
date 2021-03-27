// 1-1.호버시 도트 토글 (둘중에 하나 사용)
/*$('.dots li a').hover(function(){
    if($(this).hasClass('active')){
        $(this).removeClass();
    }else{
        $(this).removeClass();
        $(this).addClass('active');
    }
});*/

// 1-2.클릭시 도트 표시 (둘중에 하나 사용)
var tab = $('.dots').find('li');
function dotTab(num){
    for(var i=0;i<tab.length;i++){
        if(num==i){
            $('.dots li a').eq(i).addClass('active');
        }else{
            $('.dots li a').eq(i).removeClass('active');
        }
    }
}
// 도트 클릭시 해당 영역으로 이동
$('.dots li').click(function(e){
    e.preventDefault();
    var dotsTs = $(this).index();
    console.log("도트 li 클릭시"+dotsTs);
    
    var offset = $("#con"+dotsTs).offset();
    console.log("해당박스위치"+offset);
    
    $('html, body').stop().animate({scrollTop : '+='+offset.top}, 1000);
    
});









