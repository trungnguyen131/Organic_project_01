export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp");
    let $scrollHeight = document.documentElement.
    this.addEventListener("scroll", function() {
        if(document.documentElement.scrollTop > 30 || 
            document.body.scrollTop > 30) {
                $btnToTop.classList.add("btn-show")
        } else {
            $btnToTop.classList.remove("btn-show")
        }
    })
})

