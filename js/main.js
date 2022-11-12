


 var elText1 = document.querySelector("[data-text-1]");
 var elText2 = document.querySelector("[data-text-2]");
 var elText3 = document.querySelector("[data-text-3]");
 var elText4 = document.querySelector("[data-text-4]");
 var elText5 = document.querySelector("[data-text-5]");

 var elSection1 = document.querySelector("[data-vis-1]");
 var elSection2 = document.querySelector("[data-vis-2]");
 var elSection3 = document.querySelector("[data-vis-3]");
 var elSection4 = document.querySelector("[data-vis-4]");
 var elSection5 = document.querySelector("[data-vis-5]");

var elPicture = document.querySelector("[data-img]")

 toggle(elSection1, elText1);
 toggle(elSection2, elText2);
 toggle(elSection3, elText3);
 toggle(elSection4, elText4);
 toggle(elSection5, elText5);

 function toggle (section, text, img) {
  text.addEventListener("click", function (evt) {
    section.classList.toggle("visually-hidden") ;
         
    
   
  });
}

