(() => {
  // src/javascript/script.js
  var container = document.querySelector(".container");
  var navbar = document.querySelectorAll(".nav-list ul li");
  var loading = document.querySelector(".loading");

  // change container
  for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener("click", () => changePage(i));
  }
  function changePage(i) {
      console.log("change page to " + i);
      container.querySelectorAll(":scope > div").forEach((el) => {
        el.classList.add("opacity-animation");
      });
      setTimeout(() => {
        ALoading();
      }, 250);
      setTimeout(() => {
        container.querySelectorAll(":scope > div").forEach((el) => {
          el.classList.remove("active");
          el.classList.remove("opacity-animation");
        });
        container.querySelectorAll(":scope > div")[i].classList.add("active");
        HLoading();
      }, 500);
    }

  // set about me info
  var aboutMe = [
    "Ngô Văn Phong",
    "0376380174",
    "Phường 16, Gò Vấp , Hồ Chí Minh",
    "ngovanphong2k2@gmail.com",
    "Flutter and Dart Developer",
    "02/05/2002",
  ];

  var aboutMeElements = document.querySelector(".about-me header");
  aboutMeElements.querySelector(".info h1").innerText = aboutMe[0];
  aboutMeElements.querySelector(".info p").innerText = aboutMe[4];
  aboutMeElements.querySelector(".number-phone p").innerText = aboutMe[1];
  aboutMeElements.querySelector(".email p").innerText = aboutMe[3];
  aboutMeElements.querySelector(".location p").innerText = aboutMe[2];
  aboutMeElements.querySelector(".date p").innerText = aboutMe[5];

  // loading
  function ALoading() {
    loading.classList.add("active");
    btnnext.classList.add("hidden");
    btnprew.classList.add("hidden");
  }
  function HLoading() {
    loading.classList.remove("active");
    btnnext.classList.remove("hidden");
    btnprew.classList.remove("hidden");
  }

  var btnprew = document.querySelector(".button-change-page .button-left");
  var btnnext = document.querySelector(".button-change-page .button-right");

  btnprew.addEventListener("click", () => {
    let activeIndex = 0;
    let pages = container.querySelectorAll(":scope > div");
    activeIndex = Array.from(pages).findIndex((el) =>
      el.classList.contains("active")
    );
    console.log(activeIndex);
    if (activeIndex === 0){
      changePage(pages.length - 1);
    }else{
      changePage(activeIndex - 1);
    };
  });
  btnnext.addEventListener("click", () => {
    let activeIndex = 0;
    let pages = container.querySelectorAll(":scope > div");
    activeIndex = Array.from(pages).findIndex((el) =>
      el.classList.contains("active")
    );
    console.log(activeIndex);
    if (activeIndex === pages.length - 1){
      changePage(0);
    }else{
      changePage(activeIndex + 1);
    };
  });
})();
