export let handleClickToTop = window.addEventListener('load', function() {
    
    this.addEventListener("scroll", function() {
        const $btnToTop = document.getElementById("btnUp");
        /// Khoang cach cua scrollbar so voi phia tren
        const $scrollTop = window.pageYOffset;
        /// Tinhs ra chieu cao cua scrollbar
        let $scrollHeight = document.documentElement.clientHeight;
        let $scrollHeightBar = document.documentElement.scrollHeight;
        let $height = $scrollHeightBar - $scrollHeight;
    
        const spacingToTop = ($scrollTop / $height) * 100;
        // if(document.documentElement.scrollTop > `${30}%` || 
        //     document.body.scrollTop > 30) {
        //         $btnToTop.classList.add("btn-show")
        // } else {
        //     $btnToTop.classList.remove("btn-show")
        // }
        console.log(`${spacingToTop}%`)
    })
})

