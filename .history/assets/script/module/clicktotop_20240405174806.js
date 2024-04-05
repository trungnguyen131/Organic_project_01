export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp");
    
    this.addEventListener("scroll", function() {
        if(document.documentElement.scrollTop > 30 || 
            document.body.scrollTop > 30) {
            $btnToTop.style.display = "block";
        } else {;
    })
})

