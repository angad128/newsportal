 jQuery(document).ready(function() {


  $("ul#ticker01").liScroll();

  


$(".recent-news-slide").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      loop:true,
     
 
      // "singleItem:true" is a shortcut for:
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
       autoplay:true,
    
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    
 
  });





  })

 //Weather Update
$(document).ready(function() {
  $.simpleWeather({
    woeid: '2269179', 
    location: '',
    unit: 'c',
    success: function(weather) {
      if(weather.temp > 75) {
        $('body').animate({backgroundColor: '#F7AC57'}, 1500);
      } else {
        $('body').animate({backgroundColor: '#0091c2'}, 1500);
      }
      html = '<h1 class="icon-'+weather.code+'"></h1>';
      html += '<h2>'+weather.temp+'&deg;</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li></ul>';
      //html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
      
      var timestamp = moment(weather.updated);
      html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});



$(document).ready(function() {

    
    /* ======= Fixed header when scrolled ======= */
      $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
          
             $('.header-top-fix').addClass('hide-on-scroll-down');
            
         }
         else {
          
                  $('.header-top-fix').removeClass('hide-on-scroll-down');
         }
    });
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 64) {
             $('#header').addClass('header-scrolled');
          
             
         }
         else {
             $('#header').removeClass('header-scrolled');
               
         }
    });
    
   $('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
});





    





});

/*=======Img-carousel slider=======*/
$(document).ready(function(){
    
  var clickEvent = false;
  $('#myCarousel').carousel({
    interval:   4000  
  }).on('click', '.list-group li', function() {
      clickEvent = true;
      $('.list-group li').removeClass('active');
      $(this).addClass('active');   
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.list-group').children().length -1;
      var current = $('.list-group li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.list-group li').first().addClass('active'); 
      }
    }
    clickEvent = false;
  });
})

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
  $('#myCarousel .list-group-item').outerHeight(triggerheight);
});