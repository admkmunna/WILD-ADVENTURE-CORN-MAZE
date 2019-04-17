$(document).ready(function(){
	$('#nav').slicknav();
	$('.client_crousel').slick({
	  infinite: true,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [{
		  breakpoint: 991,
		  settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: true
		  }
	  },
	  {
	      breakpoint: 767,
	      settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1,
			  infinite: true
	      }
	  },
	  {
	      breakpoint: 480,
	      settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
			  infinite: true
	      }
	  }
	]
	});
	$('.testimonial_list').slick({
		dots: true,
		arrows: false,
		speed: 600
	});
	
});