export let tab_products = 
    window.addEventListener("DOMContentLoaded", function() {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        $$(".tab-btn").forEach(function($tabBtn) {
            console.log($tabBtn)
        });
    })