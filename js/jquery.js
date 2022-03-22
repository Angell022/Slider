var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });