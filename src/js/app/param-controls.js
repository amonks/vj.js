define(['app/vjjs', 'jquery'],
  function(VJJS, $) {
    function makeParamMapper(param) {
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
    }
    var params = VJJS.getParams();
    for (var param in params) {
      makeParamMapper(params[param]);
    }
  }
);
