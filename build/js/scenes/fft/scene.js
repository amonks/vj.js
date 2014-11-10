define(['jquery', 'app/fft', 'vendor/processing'],
  function($, FFTJS, processing) {
    var processingInstance, drawerSketch;
    var API = {};

    API.init = function() {
      $('#snap-content').append($('<canvas id="fft" class="container">'));

      drawerSketch = function(processing) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        console.log(width, height);

        processing.size(width, height);

        processing.setup = function() {
          processing.colorMode(processing.HSB, 360, 100, 100);
          processing.noStroke();
        };

        processing.draw = function() {
          processing.background(0, 0, 0, 0);
          var fft = fftjs.fft();
          var bands = fft.length;
          bandWidth = width / bands;
          for (var band in fft) {
            var mappedHue = processing.map(fft[band], 0, 255, 180, 360);
            processing.fill(mappedHue, 100, 100);
            var bandHeight = processing.map(fft[band], 0, 256, 0, height);
            processing.rect(band * bandWidth, height - bandHeight, bandWidth, bandHeight);
          }
        };
      };

      // attach the sketch function to the canvas
      processingInstance = new Processing(document.getElementById('fft'), drawerSketch);
    };

    API.destroy = function() {
      $('#fft').remove();
    };

    API.reOrder = function(i) {
      $('#fft').css('z-index', 100 - parseInt(i) );
    };

    return API;
  }
);
