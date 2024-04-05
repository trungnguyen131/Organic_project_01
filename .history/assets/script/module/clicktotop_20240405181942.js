export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp");
    /// Khoang cach cua scrollbar
    let $scrollHeight = document.documentElement.clientHeight;
    let $scrollHeightBar = document.documentElement.scrollHeight;
    /// Tinhs ra chieu cao cua scrollbar
    let $height = $scrollHeightBar - $scrollHeight;
    this.addEventListener("scroll", function() {
        if(document.documentElement.scrollTop > 30 || 
            document.body.scrollTop > 30) {
                $btnToTop.classList.add("btn-show")
        } else {
            $btnToTop.classList.remove("btn-show")
        }
    })
})

