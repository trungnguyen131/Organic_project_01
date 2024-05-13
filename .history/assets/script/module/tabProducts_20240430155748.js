export let tab_products = 
    window.addEventListener("DOMContentLoaded", function() {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);


        $$(".tab-btn").forEach(function($tabBtn, $index) {
            $tabBtn.addEventListener('click', function(e) {
                $$(".tab-btn").forEach($tabBtn => $tabBtn.classList.remove("active"));
                this.classList.add("active");
            })

            
            $$(".tab-pane").forEach(function($tabPane) {
                $tabPane.classList.remove("active");
            })
            console.log($$(".tab-pane")[$index])

            // $$(".tab-pane")[$index].classList.add("active");
        });

    })