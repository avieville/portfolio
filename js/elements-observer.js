let observer = new IntersectionObserver((observables) => {
  observables.forEach((observable) => {
    if (observable.isIntersecting) {
      observable.target.classList.remove("hidden");
      if (observable.target.classList.contains("card")) {
        observable.target.classList.add("enclose");
      }
    } else {
      observable.target.classList.add("hidden");
      if (observable.target.classList.contains("card")) {
        observable.target.classList.remove("enclose");
      }
    }
  });
});

const observedElements = document.querySelectorAll(
  "header, section, .technos-icons img, footer, .card"
);

observedElements.forEach((element) => {
  element.classList.add("hidden");
  observer.observe(element);
});
