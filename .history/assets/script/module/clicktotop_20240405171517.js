export let handleClickToTop = window.addEventListener('load', function() {
    const $btnToTop = document.getElementById("btnUp")
    this.addEventListener("scroll", function() {
        console.log(this.scroll)
    })
})
///////// Window
/// pageXOffset
/// pageYOffset
/// scrollX
/// scrollY

/// scrollTop: Giống scrollY nhưng áp dụng đc cho element còn scrollY áp dụng cho window
/// screenX
/// screenY
/// scrollBy
/// scrollTo
