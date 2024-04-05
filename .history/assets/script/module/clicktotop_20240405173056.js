export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp");
    
    this.addEventListener("scroll", function() {
        console.log("Height html:", document.documentElement)
    })
})

