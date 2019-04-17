window.addEventListener('load',function(){
    bannerSlide();
    slidePage();
});

function bannerSlide(){
    let mySwiper = new Swiper ('#banner .swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
      }) 

}

function slidePage(){
    let mySwiper = new Swiper ('#main>.swiper-container', {
        direction: 'vertical', // 水平切换选项
        slidesPerView: 'auto',
        freeMode : true,  
    });
}