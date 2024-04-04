////////////////////=====Category
export const Owl_Category =  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ['<ion-icon name="chevron-back-outline"></ion-icon>', 
            '<ion-icon name="chevron-forward-outline"></ion-icon>'],
    autoplay: true,
    slideSpeed: 3000,
    responsive:{
        0: {
            items: 2,
            margin: 10
        },
        420:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    },
})

////////////////====== Product
export const OwlProduct =  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ['<ion-icon name="chevron-back-outline"></ion-icon>', 
            '<ion-icon name="chevron-forward-outline"></ion-icon>'],
    autoplay: true,
    slideSpeed: 3000,
    responsive:{
        0: {
            items: 2,
            margin: 10
        },
        420:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    },
})
