define( ["app/vjjs", "app/baton", "app/fft", 'jquery'],
  function( VJJS, Baton, FFTJS, $ ) {
    API = {};

	  var params = [
	    { name: 'param0', value: 0 },
	    { name: 'param1', value: 0 },
	    { name: 'param2', value: 0 },
	    { name: 'param3', value: 0 },
	    { name: 'param4', value: 0 },
	    { name: 'param5', value: 0 }
	  ];

    API.init = function() {

    };

    var paramControls = function() {
      for (var param in params) {
        makeParamMapper(params[param]);
      }
      var makeParamMapper = function(param) {
        var buttonString = '<button id="map-' + param.name + '"> map ' + param.name + '</button>';
        var displayString = '<span id="display-' + param.name + '"></span>';
        $('#param-list').append($(buttonString));
        $('#param-list').append($(displayString));
        $('#map-' + param.name).on('click', function() {
          baton.autoMap(param.name, function(m) {
            param.value = m.value;
            $('#display-' + param.name).text(m.value);
          });
        });
      };
    };
  }
);
