var main = function() {
    
    
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  
  $('.arrow-next').click(function nextSlide() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(300).removeClass('active-slide');
    nextSlide.fadeIn(300).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    clearTimeout(timeoutID);
  });


  $('.arrow-prev').click(function prevSlide() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(300).removeClass('active-slide');
    prevSlide.fadeIn(300).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
    clearTimeout(timeoutID);
  });
    
  var timeoutID;

  function delayTransition(){
    timeoutID = setTimeout(fadeForward, 8000);
  }

  var fadeForward = function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(300).removeClass('active-slide');
    nextSlide.fadeIn(300).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    clearTimeout(timeoutID);
    main();
  }

  delayTransition(); 
    

}



$(document).ready(main);