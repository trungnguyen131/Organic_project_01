export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp")
    this.addEventListener("scroll", function() {
        console.log(this.scrollTop)
    })
})
///////// Window
/// pageXOffset
/// pageYOffset
/// scrollX
/// scrollY

/// scrollTop: Giống 
/// screenX
/// screenY
/// scrollBy
/// scrollTo
