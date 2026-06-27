window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  loader.classList.add(
    "opacity-0",
    "transition-opacity",
    "duration-700"
  );

  setTimeout(() => {
    loader.remove();
  }, 700);
});




var dark = document.querySelector(".dark");
var body = document.querySelector(".body");

dark.addEventListener("click" , function(){
    body.classList.toggle("dark-mode")
})