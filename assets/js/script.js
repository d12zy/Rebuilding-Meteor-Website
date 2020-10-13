if ($(window).width() > 992) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass("fixed-top");
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
         // remove padding top from body
        $('body').css('padding-top', '0');
      }   
  });
} // end if

function filterSelection(elementToShow) {
  if(elementToShow != 'All') {
    var x =  document.getElementsByClassName("filter");
    for(var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      console.log(x[i])
      if(y = document.getElementById(elementToShow)) {
        y[i].style.display = "block";
      }
    }

    var y = document.getElementById(elementToShow);
    for(var j = 0; j < y.length; j++){
      y[j].style.display = "block";
    }
  }
  else {
    var x = document.getElementsByClassName("filter");
    for(var i = 0; i < x.length; i++){
      x[i].style.display = "block";
    }
  }
}