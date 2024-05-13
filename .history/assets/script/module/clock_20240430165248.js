export let clock = 
        window.addEventListener('DOMContentLoaded', function() {
            const counterSection = document.querySelector('counter__section');
            counterSection.addEventListener('load', tick);

            function tick() {
                const now = new Date();
                const hour = now.getHours();
                const minute = now.getMinutes();
                const second = now.getSeconds();

                const html = ``
            }
        })