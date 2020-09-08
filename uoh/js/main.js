 AOS.init({
     duration: 800,
     easing: 'slide',
     once: true
 }); 

 jQuery(document).ready(function ($) {

     "use strict";

     $('#menu-responsive-btn').click(function () {

         if (document.getElementById('overlay').classList.contains('open')) {
             $('.button_container').toggleClass('active');
             $('.menu-responsive-title').toggleClass('active');
             $('#overlay').toggleClass('open');
             document.body.style.overflow = 'visible';
         } else {
             $('.button_container').toggleClass('active');
             $('.menu-responsive-title').toggleClass('active');
             $('#overlay').toggleClass('open');
             document.body.style.overflow = 'hidden';
         }
     });

     var siteCarousel = function () {

         $('.slide-one-item-alt').owlCarousel({
             center: false,
             items: 1,
             loop: true,
             stagePadding: 0,
             margin: 0,
             smartSpeed: 1000,
             autoplay: true,
             pauseOnHover: true,
             onDragged: function (event) {
                 console.log('event : ', event.relatedTarget['_drag']['direction'])
                 if (event.relatedTarget['_drag']['direction'] == 'left') {
                     $('.slide-one-item-alt-text').trigger('next.owl.carousel');
                 } else {
                     $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
                 }
             }
         });
         $('.slide-one-item-alt-text').owlCarousel({
             center: false,
             items: 1,
             loop: true,
             stagePadding: 0,
             margin: 0,
             smartSpeed: 1000,
             autoplay: true,
             pauseOnHover: true,
             onDragged: function (event) {
                 console.log('event : ', event.relatedTarget['_drag']['direction'])
                 if (event.relatedTarget['_drag']['direction'] == 'left') {
                     $('.slide-one-item-alt').trigger('next.owl.carousel');
                 } else {
                     $('.slide-one-item-alt').trigger('prev.owl.carousel');
                 }
             }
         });


         $('.custom-next').click(function (e) {
             e.preventDefault();
             $('.slide-one-item-alt').trigger('next.owl.carousel');
             $('.slide-one-item-alt-text').trigger('next.owl.carousel');
         });
         $('.custom-prev').click(function (e) {
             e.preventDefault();
             $('.slide-one-item-alt').trigger('prev.owl.carousel');
             $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
         });

         if ($('.nonloop-block-13').length > 0) {
             $('.nonloop-block-13').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 margin: 0,
                 autoplay: true,
                 smartSpeed: 800,
                 nav: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         margin: 0,
                         nav: true,
                         items: 2
                     },
                     1000: {
                         margin: 0,
                         stagePadding: 0,
                         nav: true,
                         items: 3
                     },
                     1200: {
                         margin: 0,
                         stagePadding: 0,
                         nav: true,
                         items: 4
                     }
                 }
             });
         }


     };
     siteCarousel();




     /*CODE SELECT FILTER*/
     var x, i, j, selElmnt, a, b, c;
     /*look for any elements with the class "custom-select":*/

     x = document.getElementsByClassName("custom-select");


     for (i = 0; i < x.length; i++) {
         selElmnt = x[i].getElementsByTagName("select")[0];
         /*for each element, create a new DIV that will act as the selected item:*/
         a = document.createElement("DIV");
         a.setAttribute("class", "select-selected");
         a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
         x[i].appendChild(a);
         /*for each element, create a new DIV that will contain the option list:*/
         b = document.createElement("DIV");
         b.setAttribute("class", "select-items select-hide");
         for (j = 1; j < selElmnt.length; j++) {
             /*for each option in the original select element,
             create a new DIV that will act as an option item:*/
             c = document.createElement("DIV");
             c.innerHTML = selElmnt.options[j].innerHTML;
             c.addEventListener("click", function (e) {
                 /*when an item is clicked, update the original select box,
                 and the selected item:*/
                 var y, i, k, s, h;
                 s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                 h = this.parentNode.previousSibling;
                 for (i = 0; i < s.length; i++) {
                     if (s.options[i].innerHTML == this.innerHTML) {
                         s.selectedIndex = i;
                         h.innerHTML = this.innerHTML;
                         y = this.parentNode.getElementsByClassName("same-as-selected");
                         for (k = 0; k < y.length; k++) {
                             y[k].removeAttribute("class");
                         }
                         this.setAttribute("class", "same-as-selected");
                         break;
                     }
                 }
                 h.click();
             });
             b.appendChild(c);
         }
         x[i].appendChild(b);
         a.addEventListener("click", function (e) {
             /*when the select box is clicked, close any other select boxes,
             and open/close the current select box:*/
             e.stopPropagation();
             closeAllSelect(this);
             this.nextSibling.classList.toggle("select-hide");
             this.classList.toggle("select-arrow-active");
         });
     }

     function closeAllSelect(elmnt) {
         /*a function that will close all select boxes in the document,
         except the current select box:*/
         var x, y, i, arrNo = [];
         x = document.getElementsByClassName("select-items");
         y = document.getElementsByClassName("select-selected");
         for (i = 0; i < y.length; i++) {
             if (elmnt == y[i]) {
                 arrNo.push(i)
             } else {
                 y[i].classList.remove("select-arrow-active");
             }
         }
         for (i = 0; i < x.length; i++) {
             if (arrNo.indexOf(i)) {
                 x[i].classList.add("select-hide");
             }
         }
     }
     /*if the user clicks anywhere outside the select box,
     then close all select boxes:*/
     document.addEventListener("click", closeAllSelect);


 });
