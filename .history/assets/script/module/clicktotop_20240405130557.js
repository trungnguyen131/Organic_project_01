export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp")
    this.addEventListener("scroll", function() {
        console.log(this.scrollTop)
    })
})

/// pageXOffset
/// pageYOffset
/// scrollY
/// scrollY

