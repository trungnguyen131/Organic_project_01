{
  "name": "Organic_project_01",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build:scss": "sass sass/style.scss public/css/style.css --watch"
  },
  "devDependencies": {
    "aos": "^3.0.0-beta.6",
    "jquery": "^3.7.1",
    "owl.carousel": "^2.3.4",
    "sass": "^1.72.0",
    "simple-line-icons": "^2.5.5",
    "swiper": "^11.1.0"
  }
}


export let handleClickToTop = window.addEventListener('load', function() {
    
    const $btnToTop = document.getElementById("btnUp");
    this.addEventListener("scroll", function() {
        /// Khoang cach cua scrollbar so voi phia tren
        const $scrollTop = window.pageYOffset;
        /// Tinhs ra chieu cao cua scrollbar
        let $scrollHeight = document.documentElement.clientHeight;
        let $scrollHeightBar = document.documentElement.scrollHeight;
        let $height = $scrollHeightBar - $scrollHeight;
        const spacingToTop = ($scrollTop / $height) * 100;

        if(parseInt(`${spacingToTop}`) > 45) {
            $btnToTop.classList.add("btn-show");
        } else {
            $btnToTop.classList.remove("btn-show");
        }

    })
})

export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp");
    
    this.addEventListener("scroll", function() {
        if(document.documentElement.scrollTop > 300 || 
            document.body.scrollTop > 300) {
                $btnToTop.classList.add("btn-show")
        } else {
            $btnToTop.classList.remove("btn-show")
        }
    })
})