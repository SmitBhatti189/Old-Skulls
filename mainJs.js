// welcome Animation JS
let welcome = document.querySelector('.welcome')
let logo = document.querySelector('.welcome-logo')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, ((idx + 1) * 400), ((idx + 2) * 500))
        });
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, ((idx + 1) * 40), ((idx + 2) * 50))
            })
        }, 2000);

        setTimeout(() => {
            welcome.style.top = '-100vh';
        }, 2300)
    })
})