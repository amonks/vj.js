define(['app/vjjs', 'jquery'],
  function(VJJS, $) {
    function makeSceneLoader(scene, params) {
      var buttonString = '<button id="load-' + scene + '">' + scene +'</button>';
      $('#scene-list').append($(buttonString));
      $('#load-' + scene).on('click', function() {
        VJJS.loadScene(scene);
      });
    }
    var scenes = VJJS.getScenes();
    for (var scene in scenes) {
      makeSceneLoader(scenes[scene]);
    }
  }
);
