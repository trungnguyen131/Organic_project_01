export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp");
    
    this.addEventListener("scroll", function() {
        if(document.documentElement.scrollTop > 30px || 
            document.body.scrollTop > 30) {
                $btnToTop.classList.add("btn-show")
        } else {
            $btnToTop.classList.remove("btn-show")
        }
    })
})

