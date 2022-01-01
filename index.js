
(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery);


//   // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = $('.myImg');
// var modalImg = $("#img01");
// var captionText = document.getElementById("caption");
// $('.myImg').click(function(){
//     modal.style.display = "block";
//     var newSrc = this.src;
//     modalImg.attr('src', newSrc);
//     captionText.innerHTML = this.alt;
// });

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }



var height = 700;
var img;

function openImg(event) {
  img = event.target.src;
  console.log(event.target.parentNode)
  Swal.fire({
    imageUrl: img,
    imageAlt: 'A tall image',
    imageWidth: '100%',
    showConfirmButton: false,
    margin: 0,
    background: 'none'
  })
}
