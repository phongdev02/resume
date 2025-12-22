(() => {
  // src/javascript/script.js
  var container = document.querySelector(".container");
  var navbar = document.querySelectorAll(".nav-list ul li p");
  // change container
  for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener("click", function () {
      console.log("clicked ");
      container.querySelectorAll(":scope > div").forEach((el) => {
        el.classList.remove("active");
      });
      container.querySelectorAll(":scope > div")[i].classList.add("active");
    });
  }
    // set about me info
    var aboutMe = [
      "Ngô Văn Phong",
      "0376380174",
      "Phường 16, Gò Vấp , Hồ Chí Minh",
      "ngovanphong2k2@gmail.com",
      "Flutter and Dart Developer",
      "02/05/2002"
    ];

    var aboutMeElements = document.querySelector(".about-me header");
    aboutMeElements.querySelector(".info h1").innerText = aboutMe[0];
    aboutMeElements.querySelector(".info p").innerText = aboutMe[4];
    aboutMeElements.querySelector(".number-phone p").innerText = aboutMe[1];
    aboutMeElements.querySelector(".email p").innerText = aboutMe[3];
    aboutMeElements.querySelector(".location p").innerText = aboutMe[2]; 
    aboutMeElements.querySelector(".date p").innerText = aboutMe[5];
})();
