// $( document ).ready(function() {
//     $(".icon_head").click(function(){
//         $(".icon_Allcontent").toggleClass("showcontent")
//     })
// });


var allButtons = document.querySelectorAll('.icon_head');
console.log("Found", allButtons.length, "div which class starts with “button”.");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function() {
    $(".icon_Allcontent").toggleClass("showcontent")
  });
}