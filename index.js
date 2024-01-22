$(document).ready(function () {
  $(".btnImg").on("click", function () {
    let currentImg = $(".active");
    let nextImg = currentImg.next();
     
    if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -1);
        nextImg.addClass('active').css('z-index', 1);
    }else {
      $(".img-Container img").removeClass('active').css('z-index', -1);
      $(".img-Container img:first-child").addClass('active').css('z-index', 1);
    }
    
  });
});
