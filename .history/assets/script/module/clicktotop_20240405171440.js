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

/// scrollTop: Giống scrollY nhưng áp dụng đc cho element còn 
/// screenX
/// screenY
/// scrollBy
/// scrollTo
