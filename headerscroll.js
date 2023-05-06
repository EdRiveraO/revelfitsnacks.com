let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").classList.remove("hide");
    document.querySelector("header").classList.add("show");
  } else {
    document.querySelector("header").classList.remove("show");
    document.querySelector("header").classList.add("hide");
  }
  prevScrollPos = currentScrollPos;
}
  
  
  
  