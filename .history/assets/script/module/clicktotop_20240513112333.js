export let handleClickToTop = window.addEventListener('D', function() {
    
    const $btnToTop = document.getElementById("btnUp");

    this.addEventListener("scroll", function() {
        /// Khoang cach cua scrollbar so voi phia tren
        const $scrollTop = window.scrollY;
        /// Tinhs ra chieu cao cua scrollbar
        let $scrollHeight = document.documentElement.clientHeight;
        let $scrollHeightBar = document.documentElement.scrollHeight;
        let $height = $scrollHeightBar - $scrollHeight;
        const spacingToTop = ($scrollTop / $height) * 100;

        if(parseInt(`${spacingToTop}`) > 55) {
            $btnToTop.classList.add("btn-show");
        } else {
            $btnToTop.classList.remove("btn-show");
        }
    })

    $btnToTop.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

})

