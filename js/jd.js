window.addEventListener('load', function () {
    var jdEffect = new JdEffect();
    jdEffect.searchGradient();
    jdEffect.slideGo();
    jdEffect.seckill();

})

var JdEffect = function () {
}

JdEffect.prototype = {
    //搜索框透明的渐变功能函数
    searchGradient:
        function () {
            scrollGradient();
            window.addEventListener('scroll', scrollGradient)
            function scrollGradient () {
                var header = document.querySelector('#header');
                var slide = document.querySelector('#slide');
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                // console.log(scrollTop);
                var slideHeight = slide.offsetHeight;
                var opacity = scrollTop / slideHeight;
                if (opacity > 1) {
                    header.style.backgroundColor = 'rgba(222, 24, 27, 1)';
                } else {
                    header.style.backgroundColor = 'rgba(222, 24, 27, ' + opacity + ')';
                }
            }
        },
    //轮播图功能函数
    slideGo: function () {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                delay: 3000, //轮播图的延迟
                stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
                disableOnInteraction: false //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    //秒杀倒计时功能函数
    seckill: function () {
        var spans = document.querySelectorAll('.down-time span');
        var futureTime = Math.floor(new Date(2018, 8, 25, 22, 00, 00).getTime() / 1000);
        var nowTime = Math.floor(new Date().getTime() / 1000);
        var time = futureTime - nowTime;
        setInterval(seckillGo,1000);
        seckillGo();
        function seckillGo (){
            time--;
            if (time < 0) {
                time = 7200;
            }
            // console.log(time);
            var hour = Math.floor(time / 3600);
            var min = Math.floor(time % 3600 / 60);
            var sec = Math.floor(time % 60);
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(min / 10);
            spans[4].innerHTML = Math.floor(min % 10);
            spans[6].innerHTML = Math.floor(sec / 10);
            spans[7].innerHTML = Math.floor(sec % 10);
        }
    }
}