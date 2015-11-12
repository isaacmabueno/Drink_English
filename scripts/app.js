$(document).ready(function() {
$('.banner').fadeIn(4000);
});
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});


// GET
// https://www.googleapis.com/blogger/v2/blogs/blogId/posts
// blogId?key=APIKEY
