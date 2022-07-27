let openSlide = document.getElementById("nav-menu");

let closeSlide = document.querySelector(".close-button");

let navSlide = document.querySelector(".nav-slide") as HTMLElement;

openSlide?.addEventListener( "click", function() : void{
  navSlide.style.width = "100%";
} );

closeSlide?.addEventListener( "click", function() : void{
  navSlide.style.width = "0";
} );
