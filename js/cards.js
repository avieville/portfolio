import projects from "./projects-data.js";

const cardsContainer = document.getElementById("cards");

if (cardsContainer) {
  projects.forEach((card, index) => {
    //CREATE CARD
    const article = document.createElement("article");
    article.className = "card";

    const image_and_arrows_container = document.createElement("div");
    image_and_arrows_container.classList.add("image_and_arrows_container");

    const site_img = document.createElement("img");
    site_img.classList.add("site");
    image_and_arrows_container.appendChild(site_img);

    const arrowLeft = document.createElement("img");
    arrowLeft.src = "images/arrow-left.svg";
    arrowLeft.alt = "arrow left";
    arrowLeft.classList.add("arrow-left");
    arrowLeft.id = "arrow-left";

    const arrowRight = document.createElement("img");
    arrowRight.src = "images/arrow-right.svg";
    arrowRight.alt = "arrow right";
    arrowRight.classList.add("arrow-right");
    arrowRight.id = "arrow-right";

    image_and_arrows_container.appendChild(arrowLeft);
    image_and_arrows_container.appendChild(arrowRight);

    const h3 = document.createElement("h3");
    h3.innerText = card.title;

    const p = document.createElement("p");
    p.innerText = card.description;

    article.appendChild(image_and_arrows_container);
    article.appendChild(h3);
    article.appendChild(p);

    const btns_container = document.createElement("div");
    btns_container.classList.add("btns-container");

    const infoButton = document.createElement("button");
    const modal_name = `modal-${index + 1}`;
    infoButton.innerText = "PLUS D'INFOS";
    infoButton.dataset.modal = modal_name;

    const codeLink = document.createElement("a");
    codeLink.innerText = "VOIR LE CODE";
    codeLink.href = card.github_link;
    codeLink.target = "_blank";

    btns_container.appendChild(infoButton);
    btns_container.appendChild(codeLink);

    article.appendChild(btns_container);

    //DYNAMIC BORDER
    const createBorder = (direction) => {
      const border = document.createElement("div");
      border.className = `border-${direction}`;
      return border;
    };

    ["top", "right", "bottom", "left"].forEach((direction) => {
      article.appendChild(createBorder(direction));
    });

    cardsContainer.appendChild(article);

    //MODAL
    const modal = document.createElement("div");
    modal.id = modal_name;
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal__content";

    const closingCross = document.createElement("img");
    closingCross.src = "/portfolio/images/cross.svg";
    closingCross.alt = "closing cross";
    closingCross.className = "close-modal";
    modalContent.appendChild(closingCross);

    const modalTitle = document.createElement("h3");
    modalTitle.textContent = card.title;
    modalContent.appendChild(modalTitle);

    const modalInformation = document.createElement("p");
    modalInformation.textContent = card.details;
    modalInformation.classList.add("modal-details");
    modalContent.appendChild(modalInformation);

    const modalcompetences = document.createElement("p");
    modalcompetences.textContent = "Compétences développées :";
    modalContent.appendChild(modalcompetences);

    const competencesList = document.createElement("ul");

    card.competences.forEach((competence) => {
      const competenceItem = document.createElement("li");
      competenceItem.textContent = competence;
      competencesList.appendChild(competenceItem);
    });

    modalContent.appendChild(competencesList);
    modal.appendChild(modalContent);

    document.querySelector(".main-container").appendChild(modal);

    // MODALS EVENTS
    document.querySelectorAll(`button[data-modal]`).forEach((button) => {
      button.addEventListener("click", (e) => {
        const modalId = e.target.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.style.display = "flex";
        setTimeout(function () {
          modal.classList.add("show");
        }, 50);
      });
    });

    document.querySelectorAll(".close-modal, .modal").forEach((cross) => {
      cross.addEventListener("click", (e) => {
        const target = e.target;
        const modal = target.closest(".modal");
        modal.classList.remove("show");
        setTimeout(function () {
          modal.style.display = "none";
        }, 300);
      });
    });

    document.querySelectorAll(".modal__content").forEach((item) => {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });

    //IMAGES CARD
    const imagesList = card.images;
    let currentIndex = 0;
    site_img.src = card.images[currentIndex];
    site_img.alt = "site internet";

    if (imagesList.length > 1) {
      arrowLeft.addEventListener("click", (e) => {
        const direction = "previous";
        changeImage(e, direction);
      });

      arrowRight.addEventListener("click", (e) => {
        const direction = "next";
        changeImage(e, direction);
      });

      function changeImage(e, direction) {
        if (imagesList.length > 1) {
          const imageElement = e.target.parentNode.querySelector(".site");
          imageElement.style.opacity = 0;
          if (direction === "previous") {
            currentIndex =
              currentIndex !== 0 ? currentIndex - 1 : imagesList.length - 1;
          } else {
            currentIndex =
              currentIndex !== imagesList.length - 1 ? currentIndex + 1 : 0;
          }
          setTimeout(function () {
            imageElement.src = card.images[currentIndex];
            imageElement.style.opacity = 1;
          }, 300);
        }
      }
    } else {
      arrowLeft.style.display = "none";
      arrowRight.style.display = "none";
    }
  });
}

//LEGAL MODAL
const legal_modal = document.getElementById("modal-legal");
const legal_modal_trigger = document.getElementById("modal-legal-trigger");
legal_modal_trigger.addEventListener("click", (e) => {
  e.preventDefault();
  legal_modal.style.display = "flex";
  setTimeout(function () {
    legal_modal.classList.add("show");
  }, 50);
});
