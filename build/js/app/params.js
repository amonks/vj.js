define( ["app/vjjs", "app/baton", "app/fft", 'jquery'],
  function( VJJS, Baton, FFTJS, $ ) {
    API = {};

	  var params = [
	    { name: 'param0', value: 0, mapping: null },
	    { name: 'param1', value: 0, mapping: null },
	    { name: 'param2', value: 0, mapping: null },
	    { name: 'param3', value: 0, mapping: null },
	    { name: 'param4', value: 0, mapping: null },
	    { name: 'param5', value: 0, mapping: null }
	  ];

    API.init = function() {
      paramControls();
    };

    API.getParams = function() {
      update();
      return params;
    };

    var update = function() {
      var fft = FFTJS.fft();
      // update fft ones
      for (var p in params) {
        var param = params[p];
        if (param.mapping && param.mapping.type === 'audio') {
          param.value = fft[param.mapping.map] / 2;
          $('#display-' + param.name).val(param.value);
        }
      }
    };

    var makeParamMapper = function(param) {
      var buttonString = '<div class="control-group" id="controls-' + param.name + '">';
      buttonString += '<h4>' + param.name + '</h4>';
      buttonString += '<button id="midi-map-' + param.name + '"> midi map</button>';
      buttonString += '<button id="band-map-' + param.name + '"> band map</button>';
      buttonString += '<input id="map-band-' + param.name + '" placeholder="band">';
      buttonString += '<button id="unmap-' + param.name + '">unmap</button>';
      buttonString += '<input id="display-' + param.name + '" placeholder="value" readonly>';
      buttonString += '</div>';

      $('#param-list').append($(buttonString));

      $('#midi-map-' + param.name).on('click', function() {
        // on midi event
        baton.autoMap(param.name, function(m) {
          param.mapping = {
            type: 'midi',
            map: m.channel
          };
          param.value = m.value;
          $('#display-' + param.name).val(m.value);
        });
      });

      $('#band-map-' + param.name).on('click', function() {
        var band = $('#map-band-' + param.name).val();
        if ( !isNaN(band) && band.length > 0 && band > (-1) ) {
          param.mapping = {
            type: 'audio',
            map: $('#map-band-' + param.name).val()
          };
        }
      });

      $('#unmap-' + param.name).on('click', function() {
        param.mapping = null;
      });
    };

    var paramControls = function() {
      for (var param in params) {
        makeParamMapper(params[param]);
      }
    };
    return API;
  }
);
