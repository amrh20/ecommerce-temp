$( document ).ready(function() {
    $(".shopping-cart").click(function(){
        $(".shopping-cart_content").toggleClass("showcontent");
        $(".wishlist-view_content").toggleClass("showcontent")
    })
    $(".wishlist-view").click(function(){
        $(".wishlist-view_content").toggleClass("showcontent");
        $(".shopping-cart_content").toggleClass("showcontent");
    })
});


// var allButtons = document.querySelectorAll('.icon_head');
// console.log("Found", allButtons.length, "div which class starts with “button”.");

// for (var i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener('click', function() {
//     $(".shopping-cart_content").toggleClass("showcontent")
//   });
// }