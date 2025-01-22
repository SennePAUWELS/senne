const init = function () {
  const elementsToAnimate = document.querySelectorAll('.o-aos');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('u-in-view');
            observer.unobserve(entry.target);
          }, 300);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  elementsToAnimate.forEach((element) => observer.observe(element));
};

document.addEventListener('DOMContentLoaded', init);
