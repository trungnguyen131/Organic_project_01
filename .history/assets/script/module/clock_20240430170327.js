export let clock = 
    window.addEventListener('DOMContentLoaded', function() {
        const counterSection = document.querySelectorAll('.counter__section');
        console.log(counterSection)
        counterSection.forEach(function($itemCounter) {
            $itemCounter.addEventListener('load', tick);
        })

        // function tick() {
        //     const now = new Date();

        //     const hour = now.getHours();
        //     const minute = now.getMinutes();
        //     const second = now.getSeconds();

        //     const html = `
        //         <span class="counter__number">${hour}</span>
        //         <span class="counter__number">${minute}</span>
        //         <span class="counter__number">${second}</span>
        //     `

        //     counterSection.innerHTML = html;
        // }

        // setInterval(tick, 1000);
    })