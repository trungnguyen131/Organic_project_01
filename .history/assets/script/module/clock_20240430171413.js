export let clock = 
    window.addEventListener('DOMContentLoaded', function() {
        const counterSection = document.querySelectorAll('.counter__section');
        counterSection.forEach(function($itemCounter) {
            $itemCounter.addEventListener('load', function(){
                const now = new Date();
    
                const hour = now.getHours();
                const minute = now.getMinutes();
                const second = now.getSeconds();
    
                const html = `
                    <span class="counter__number">${hour}</span>
                    <span class="counter__number">${minute}</span>
                    <span class="counter__number">${second}</span>
                `
    
                $itemCounter.insertAdjacentHTML('afterbegin', html);
                setInterval(tick, 1000);
            });
        })
    })