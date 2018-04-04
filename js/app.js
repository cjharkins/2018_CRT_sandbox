$(document)
  .ready(function() {
    // ------------- VARIABLES ------------- //
    var ticking = false;
    var isFirefox = /Firefox/i.test(navigator.userAgent);
    var isIe = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent);
    var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
    var slideDurationSetting = 600; //Amount of time for which slide is "locked"
    var currentSlideNumber = 0;
    var totalSlideNumber = $(".background")
      .length;
    let divBars = `
  <div class="divBars">
      <div class="divBar-lg"></div>
      <div class="divBar-md"></div>
      <div class="divBar-sm"></div>
      <div class="divBar-xs"></div>
      <div class="divBar-nano"></div>
    </div>
`;
    // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
    function parallaxScroll(evt) {
      if (isFirefox) {
        //Set delta for Firefox
        delta = evt.detail * -120;
      } else if (isIe) {
        //Set delta for IE
        delta = -evt.deltaY;
      } else {
        //Set delta for all other browsers
        delta = evt.wheelDelta;
      }
      if (ticking != true) {
        if (delta <= -scrollSensitivitySetting) {
          //Down scroll
          ticking = true;
          console.log("scrolling down");
          console.log(currentSlideNumber);
          //trigger animation event here!!!
          if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
          }
          slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
          //Up scroll
          ticking = true;
          if (currentSlideNumber !== 0) {
            currentSlideNumber--;
          }
          previousItem();
          slideDurationTimeout(slideDurationSetting);
        }
      }
    }
    // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
    function slideDurationTimeout(slideDuration) {
      setTimeout(function() {
        ticking = false;
      }, slideDuration);
    }
    // ------------- ADD EVENT LISTENER ------------- //
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
    // ------------- SLIDE MOTION ------------- //
    var slideActive = false;

    function nextItem() {
      var $previousSlide = $(".background")
        .eq(currentSlideNumber - 1);
      var $currentSlide = $(".background")
        .eq(currentSlideNumber);
      console.log(currentSlideNumber);
      $previousSlide.removeClass("up-scroll")
        .addClass("down-scroll");
      console.log("going forward");
      if (currentSlideNumber === 5) {
        slideActive = true;
      }
      if (!slideActive) {
        $currentSlide.prepend(divBars);
      }
    }

    function previousItem() {
      var $currentSlide = $(".background")
        .eq(currentSlideNumber);
      $currentSlide.removeClass("down-scroll")
        .addClass("up-scroll");
      slideCount = true;
    }
    var cardContainer = document.getElementById('card-container');

    function filterProductData(data) {
      html = ``;
      for (var i = 0; i < packageStyles.die.length; i++) {
        for (var j = 0; j < packageStyles.die[i].stocks.length; j++) {
          if (packageStyles.die[i].stocks[j] === data) {
            html += `
         <img class="card-img-top img-product-scale img-fluid" src="img/styles/${parseInt(packageStyles.die[i].num)}.png" alt="Card image cap" />
  `;
          }
        }
      }
    }
    $('li')
      .click(function(e) {
        let id = e.target.id;
        if (id === "flat") {
          filterProductData(id);
          cardContainer.innerHTML = html;
        } else if (id === "sbs") {
          filterProductData(id);
          cardContainer.innerHTML = html;
        } else if (id === "flute") {
          filterProductData(id);
          cardContainer.innerHTML = html;
        } else if (id === "turned-edge") {
          filterProductData(id);
          cardContainer.innerHTML = html;
        }
        $('#myModal')
          .on('shown.bs.modal', function() {
            $('#myInput')
              .trigger('focus')
          });
      });
  });