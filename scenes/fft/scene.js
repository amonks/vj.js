define(['jquery', 'app/fft', 'vendor/processing', 'app/2dcontainer'],
  function($, FFTJS, processing, container) {
    var processingInstance, drawerSketch;
    var API = {};

    API.init = function() {
      container.show();
      container.html($('<canvas id="processing-canvas">'));

      drawerSketch = function(processing) {
        var width = window.innerWidth;
        var height = window.innerHeight;

        processing.size(width, height);

        processing.setup = function() {
          processing.colorMode(processing.HSB, 360, 100, 100);
          processing.noStroke();
        };

        processing.draw = function() {
          processing.background(0);
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
      processingInstance = new Processing(document.getElementById('processing-canvas'), drawerSketch);
    };

    API.destroy = function() {
      container.hide();
      $('#container').html('');
      processingInstance = null;
      drawerSketch = null;
    };

    return API;
  }
);
