$(document).ready(function () {
    // show cart content at header
    $(".cart-icon_head").click(function () {
        $(".shopping-cart_content").toggleClass("showcontent");
        if ($(".wishlist-view_content").hasClass("showcontent")) {
            $(".wishlist-view_content").removeClass("showcontent")
        }
        if ($(".compare-view_content").hasClass("showcontent")) {
            $(".compare-view_content").removeClass("showcontent")
        }
    })
    // show wishlist content at header
    $(".wishlist-icon_head").click(function () {
        $(".wishlist-view_content").toggleClass("showcontent")
        if ($(".shopping-cart_content").hasClass("showcontent")) {
            $(".shopping-cart_content").removeClass("showcontent")
        }
        if ($(".wishlist-view_content").hasClass("showcontent")) {
            $(".compare-view_content").removeClass("showcontent")
        }
    })
    // show compare content at header
    $(".compare-icon_head").click(function () {
        $(".compare-view_content").toggleClass("showcontent");
        if ($(".wishlist-view_content").hasClass("showcontent")) {
            $(".wishlist-view_content").removeClass("showcontent")
        }
        if ($(".shopping-cart_content").hasClass("showcontent")) {
            $(".shopping-cart_content").removeClass("showcontent")
        }
    })
    // show account view at header
    $(".account-icon_head").click(function () {
        $(".accounts_view ").css("right", "0");
        if ($(".wishlist-view_content").hasClass("showcontent")) {
            $(".wishlist-view_content").removeClass("showcontent")
        }
        if ($(".compare-view_content").hasClass("showcontent")) {
            $(".compare-view_content").removeClass("showcontent")
        }
        if ($(".shopping-cart_content").hasClass("showcontent")) {
            $(".shopping-cart_content").removeClass("showcontent")
        }
    })
    // close account view
    $(".close_accountView").click(function () {
        $(".accounts_view ").css("right", "-350px")
    })

});


// var allButtons = document.querySelectorAll('.icon_head');
// console.log("Found", allButtons.length, "div which class starts with “button”.");

// for (var i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener('click', function() {
//     $(".shopping-cart_content").toggleClass("showcontent")
//   });
// }



