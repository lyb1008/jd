window.addEventListener('load',function () {
    
    var jdCategoryAffect = new JdCategoryAffect();
    jdCategoryAffect.swiperLeft();
    jdCategoryAffect.swiperRight();
    jdCategoryAffect.leftClick();

})


var JdCategoryAffect = function () {

}

JdCategoryAffect.prototype = {
    swiperLeft: function () {
        var swiper = new Swiper('.left .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            mousewheel: true,
        });
    },

    swiperRight: function () {
        var swiper = new Swiper('.right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            mousewheel: true,
        }); 
    },

    //左侧点击吸顶  原生js
    leftClick: function (){
        var ul = document.querySelector('.left ul');
        var left = document.querySelector('.left');
        var maxHeight = left.offsetHeight-ul.offsetHeight;
        var lis = ul.children;    

        ul.addEventListener('click',function(e){
            var li = e.target.parentNode;
            
            for(var i = 0; i<lis.length;i++){
                lis[i].index = i;
                lis[i].classList.remove('active')
            }
            li.classList.add('active');

            var height = li.offsetHeight;
            console.log(height);
            
            var moveY = -li.index * height;
            ul.parentNode.parentNode.style.transitionDuration = "500ms";
            if(moveY>maxHeight){
                ul.parentNode.parentNode.style.transform ="translate3d(0px, "+moveY+"px, 0px)";
            }else{
                ul.parentNode.parentNode.style.transform ="translate3d(0px, "+maxHeight+"px, 0px)";
            }

            
        })
    }
}