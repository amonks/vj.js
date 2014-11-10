define( ['app/params'],
  function (Params) {
    var VJJS = {};

    var scenes = [
      'crate',
      'boxes',
      'fft',
      'squares'
    ];
    var currentScenes = [];

    VJJS.init = function() {
      Params.init();
      require(['app/snap']);
      require(['app/scene-controls']);
      // require(['app/param-controls']);
    };

    VJJS.getScenes = function() {
      return scenes;
    };

    VJJS.getCurrentScenes = function() {
      return currentScenes;
    };

    VJJS.loadScene = function(sceneName) {
      require(['scenes/' + sceneName + '/scene'], function(scene) {
        currentScenes.push({name: sceneName, scene: scene});
        scene.init();
      });
    };

    VJJS.destroyScene = function(sceneName) {
      for (var s in currentScenes) {
        var scene = currentScenes[s];
        if (scene.name === sceneName) {
          scene.scene.destroy();
        }
      }
    };

    return VJJS;
  }
);
