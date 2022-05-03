// on scroll heder add class

$(window).scroll(function() {
    var windowYmax = 100;
    var scrolledY = $(window).scrollTop();
  
    if (scrolledY > windowYmax) {
  
      $('a.navbtn').addClass("dnone");
    } else {
      $('a.navbtn').removeClass("dnone");
     
    }
  });
  
         
		
		
		
		    $(document).ready(function(){
      $(".navbar-toggler").click(function(){
        $(".navbar-collapse").toggleClass("show");

      });
    });
	
	



