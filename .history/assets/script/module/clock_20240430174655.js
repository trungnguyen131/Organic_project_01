export let clock = 
    window.addEventListener('DOMContentLoaded', function() {
        const counterSection = document.querySelectorAll('.counter__section');
        counterSection.forEach(function($itemCounter) {
            function tick() {
                const now = new Date();
            
                const day = now.getDay();
                const hour = now.getHours();
                const minute = now.getMinutes();
                const second = now.getSeconds();
            
                const html = `
                    <li class="counter__section">
                        <span class="counter__number">278</span>
                        <span class="counter__title">DAY</span>
                    </li>
                    <li class="counter__section">
                        <!-- <span class="counter__number">13</span> -->
                        <span class="counter__title">HRS</span>
                    </li>
                    <li class="counter__section">
                        <span class="counter__number">24</span>
                        <span class="counter__title">MIN</span>
                    </li>
                    <li class="counter__section">
                        <span class="counter__number">37</span>
                        <span class="counter__title">SEC</span>
                    </li>
                `
                $itemCounter.insertAdjacentHTML('afterbegin', html);
            }
            setInterval(tick, 1000);
        })
    })