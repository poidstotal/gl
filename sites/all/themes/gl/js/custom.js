
jQuery(document).ready(function($) {

 jQuery("#block-views-clients-logo-block .view-content").slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
	 responsive: [
    	 {
     		 breakpoint: 1024,
     		 settings: {
       		 arrows: true,
        	slidesToScroll: 3,
        	 slidesToShow: 3
       		}
         },
         {
     		 breakpoint: 769,
    		 settings: {
       		 arrows: false,
	         slidesToScroll: 2,
        	 slidesToShow: 2
         	 }
          },
		
          {
     		 breakpoint: 415,
    		 settings: {
       		 arrows: false,
	         slidesToScroll: 1,
        	 slidesToShow: 1
         	 }
          },
      ]	

      });

  $('#page-top div.next-page').click(function(){

  	tops = $('#main-content').offset().top;
        $('html,body').animate({scrollTop: tops}, 400);
  });


  $('#block-views-homepageintro-block div.next-page').click(function(){

  	$nextPage = $(this).parent().parent().parent().next();

	if(!$(this).parent().parent().parent().hasClass('views-row-last')){
		tops = $nextPage.offset().top;
        	$('html,body').animate({scrollTop: tops}, 400);	  
	}else{
		tops = $('#block-views-homepageintro-block-1').offset().top;
        	$('html,body').animate({scrollTop: tops}, 400);	
	}


  });

  $('#block-views-homepageintro-block-1 div.next-page-1').click(function(){

  	tops = $('#block-views-clients-logo-block').offset().top;
        $('html,body').animate({scrollTop: tops}, 400);


  });

  $('#block-views-clients-logo-block div.next-page-1').click(function(){

  	tops = $('#block-block-2').offset().top;
        $('html,body').animate({scrollTop: tops}, 400);


 });

  $('#block-block-2 div.next-page').click(function(){

  	tops = $('#footer-wrapper').offset().top;
        $('html,body').animate({scrollTop: tops}, 400);


  });
});
jQuery(window).load(function(){
changeBannerImg();
});

function changeBannerImg(){

  if(jQuery(window).width()<1440){
    var mleft=(jQuery("#block-block-2 .map").width()-jQuery("#block-block-2 .map img").width())/2;
    jQuery("#block-block-2 .map img").css("margin-left",mleft+"px"); 
  }

}

jQuery(window).resize(function(){
changeBannerImg();
});


