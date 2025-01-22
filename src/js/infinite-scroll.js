const infinite = function () {
    const container = document.querySelector('.infinite-scroll');
    const content = document.querySelector('.infinite-scroll');

    content.innerHTML += content.innerHTML;

    container.addEventListener('scroll', () => {
        if (container.scrollTop >= content.scrollHeight / 2) {
            infinite();
        }
    });
};

document.addEventListener('DOMContentLoaded', infinite);
