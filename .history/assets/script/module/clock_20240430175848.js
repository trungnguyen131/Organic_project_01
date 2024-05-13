export let clock = 
    window.addEventListener('DOMContentLoaded', function() {
        var counterdow = document.querySelector('.counterdow__row');
        function tick() {
            const now = new Date();
        
            const day = now.getDay();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const second = now.getSeconds();
        
            const html = `
                <li class="counter__section">
                    <span class="counter__number">${day}</span>
                    <span class="counter__title">DAY</span>
                </li>
                <li class="counter__section">
                    <span class="counter__number">${hour}</span>
                    <span class="counter__title">HRS</span>
                </li>
                <li class="counter__section">
                    <span class="counter__number">${minute}</span>
                    <span class="counter__title">MIN</span>
                </li>
                <li class="counter__section">
                    <span class="counter__number">${second}</span>
                    <span class="counter__title">SEC</span>
                </li>
            `
            counterdow.innerHTML = html;
        }
        setInterval(tick, 000);
    })