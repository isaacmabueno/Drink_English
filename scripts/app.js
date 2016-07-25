$(document).ready(function() {
$('.banner').fadeIn(4000);
});
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

  $(document).ready(function(){
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
  });

// $(function () {
//     var menu_sub = $('.menu-sub');
//     $('.clickable').on('click', function (e) {
//         e.stopPropagation();
//         menu_sub.toggle();
//     });
//     $(document).on('click', function (e) {
//         menu_sub.hide();
//     });
// });

// GET
// https://www.googleapis.com/blogger/v2/blogs/blogId/posts
// blogId?key=APIKEY
