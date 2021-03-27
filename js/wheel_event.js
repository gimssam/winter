$(document).ready(function(){
    /*콘텐스 부모박스 클래스명 선택자를 변수에 저장*/
    var wheel_content = $('.wheel_content');
    // 각각의 콘텐츠 페이지에 이벤트 적용을 하기 위하여 each()사용
    // 매개변수 index로 각각의 콘텐츠를 구분
    $(wheel_content).each(function(index){
        //IE,크롬,오페라는 mousewheel이라는 이벤트 이름으로 제공
        //파이어폭스는 DOMMouseScroll이라는 이벤트 이름으로 제공
        //on()사용하여 이벤트 두개를 동시에 호출하여야 함
        $(this).on("mousewheel DOMMouseScroll",function(e){
            e.preventDefault();
            /*마우스 휠 스크롤 정보변수*/
            var delta = 0;
            /*1. 브라우저 분석하기*/
            // a. 크롬,IE,오페라 : 휠을 내리면 음수
            // b. 파이어폭스 : 휠을 내리면 양수
            /*1-1. 마우스 휠 스크롤 정보 얻는 메서드*/
            // a. 크롤,IE,오페라 : wheelDelta
            // b. 파이어폭스 : detail
            
            /*각각 다른 브라우저 마다 값을 양수1로 통일하여 변수 delta에 저장*/
            // A. IE 표준브라우저
            if(!event) {
                event = $(window).event;
            }
//            console.log(event);
            // B. IE/크롬/오페라
            /*만약, event에 wheelDelta값이 있으면, delta변수에 저장*/
            if(event.wheelDelta) {
                delta = event.wheelDelta / 120;
                /*오페라의 경우*/
                if(window.opera) {
                    delta = -delta;
                }
            }
            // C. 파이어폭스
            else if(event.detail){
                delta = -event.detail / 3;
            }


/*각 콘텐츠를 화면에서 한장씩 보여주기 위한 값이 필요 = 스크롤탑값*/
            var move_top = $(window).scrollTop();
            var each_element = $(wheel_content).eq(index);
            
            
// 마우스훨을 윗쪽에서 아래쪽으로 내리면
// 만약 마우스 훨값이 음수이면 바로 아래 박스 콘텐츠 상단으로 이동
            if(delta<0){
                if($(each_element).next() != undefined){
                    try{
                        move_top = $(each_element).next().offset().top;
                        
                        // 마우스휠 아래쪽 움직일때 클래스 제거
                        $('.dots li a').removeClass('active');
                    }catch(e){
//                        alert('예외처리:마지막페이지입니다.');
                    }
                }
            }
// 마우스훨을 아래쪽에서 윗쪽으로 올리면
// 만약 마우스 훨값이 양수이면 바로 윗쪽 박스 콘텐츠 상단으로 이동               
            else {
                if($(each_element).prev() != undefined) {
                    try{
                        move_top = $(each_element).prev().offset().top;
                        // 마우스휠 윗쪽 움직일때 클래스 제거
                        $('.dots li a').removeClass('active');
                    }catch(e){
//                        alert('예외처리:첫번째페이지입니다');
                    }
                }
            }
            
// 스크롤시 페이지 애니메이션 실행
            $('html,body').stop().animate({scrollTop:"+="+move_top +'px'},500);
            
        });
    });
});














