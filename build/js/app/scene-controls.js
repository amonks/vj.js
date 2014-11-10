define(['app/vjjs', 'jquery'],
  function(VJJS, $) {
    function makeSceneLoader(scene, params) {
      var buttonString = '<div class="control-group"><h3>' + scene + '</h3>';
      buttonString += '<button id="load-' + scene + '">load</button>';
      buttonString += '<button id="destroy-' + scene + '">destroy</button>';
      buttonString += '</div>';

      $('#scene-list').append($(buttonString));
      $('#load-' + scene).on('click', function() {
        VJJS.loadScene(scene);
      });
      $('#destroy-' + scene).on('click', function() {
        VJJS.destroyScene(scene);
      });
    }
    var scenes = VJJS.getScenes();
    for (var scene in scenes) {
      makeSceneLoader(scenes[scene]);
    }
  }
);
