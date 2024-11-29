document.addEventListener("DOMContentLoaded", () => {
  // Your code here

  const navDilag = document.getElementById("nav-dilag");
  function handleMenu() {
    navDilag.classList.toggle("hidden");
  }

  // selecthandle
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownList = document.getElementById("dropdownList");
  const up = document.getElementById("up");

  dropdownButton.addEventListener("click", () => {
    dropdownList.classList.toggle("hidden");
    dropdownList.classList.toggle("scale-0");

    up.classList.toggle("rotate-180");
  });

  dropdownList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      dropdownButton.querySelector("span").textContent = e.target.textContent;
      dropdownList.classList.add("hidden");
      dropdownList.classList.toggle("scale-0");

      up.classList.toggle("rotate-180");
    }
  });

  // Handle layout
  const btnGrid = document.getElementById("btn-grid");
  const btnList = document.getElementById("btn-list");
  const carCards = Array.from(document.getElementsByClassName("car-card"));
  const carGrid = document.getElementById("card-grid");

  const classesPrimary = [
    "bg-primary",
    "bg-white",
    "text-white",
    "border-primary",
    "border-gray-300",
    "text-black",
  ];
  const classesCarGrid = ["md:grid-cols-2", "lg:grid-cols-3"];

  const toggle = () => {
    classesPrimary.forEach((cls) => btnGrid.classList.toggle(cls));
    classesPrimary.forEach((cls) => btnList.classList.toggle(cls));
    classesCarGrid.forEach((cls) => carGrid.classList.toggle(cls));

    carCards.forEach((card) => {
      card.classList.toggle("flex");
      card.querySelector("img").classList.toggle("h-full");
    });
  };
  let clicked = true;
  btnGrid.addEventListener("click", (e) => {
    if (!clicked) {
      toggle();

      clicked = true;
    }
  });
  btnList.addEventListener("click", (e) => {
    if (clicked) {
      toggle();

      clicked = false;
    }
  });

  // Search with car brand name toggle

  $("#car-search-by-brand-name .toggle-btn").on("click", function () {
    const targetId = $(this).attr("aria-controls");
    $("#" + targetId).slideToggle(300);

    $("#car-search-by-brand-name ul")
      .not("#" + targetId)
      .slideUp(300)
      .addClass("hidden");

    console.log(targetId);
    const isExpanded = $("#" + targetId).is(":visible");
    $(this).attr("aria-expanded", isExpanded);
  });

  // *************************
  //   var swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 3,
  //     spaceBetween: 28,
  //     centeredSlides: true,
  //     loop: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //     breakpoints: {
  //       0: {
  //         slidesPerView: 1,
  //         spaceBetween: 20,
  //         centeredSlides: false,
  //       },
  //       768: {
  //         slidesPerView: 2,
  //         spaceBetween: 28,
  //         centeredSlides: true,
  //       },
  //       1024: {
  //         slidesPerView: 3,
  //         spaceBetween: 32,
  //       },
  //     },
  //   });
});
