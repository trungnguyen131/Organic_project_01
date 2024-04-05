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

    $btnToTop.on


})

