    /*1. 인라인 이벤트(num매개변수 넘겨받음)*/
//    function move(num){
//        /*offset() = top, left 절대위치값 리턴*/
//        var off = $('#con'+num).offset();
//        /*콘솔에 해당 박스 위치값 찍어보기*/
//        console.log(off);
//        /*(중요) 반드시 +=로 값 누적하여 계산하기(예-0+798=798 아래로 스크롤) / (798-798=0 위로 스크롤)*/
//        $('html,body').stop().animate({scrollTop:'+='+off.top},1000);
//        /*scrollTop:off.top = 마지막에 클릭한 값에서 새로 클릭한 값으로 변동되어 값이 안맞음 (아래예)0 0+798 1598-798=798*/
//        //$('html,body').stop().animate({scrollTop:off.top},100);
//        
//        //여기까지(기본링크#기능막기)
//        return false;
//    }
    
    /*2. 제이쿼리 이벤트*/
    $('#menu li').click(function(e){
        var th = $(this).index();
        console.log("li클릭시"+th);
        var offset = $("#con"+th).offset();
        console.log(offset);
        $('html, body').stop().animate({scrollTop : '+='+offset.top}, 1000);
        e.preventDefault();
    });






