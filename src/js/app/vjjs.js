define( ['app/params'],
  function (Params) {
    var VJJS = {};

    var scenes = [
      'crate',
      'boxes',
      'fft',
      'squares'
    ];
    var currentScene = null;

    VJJS.init = function() {
      Params.init();
      require(['app/snap']);
      require(['app/scene-controls']);
      // require(['app/param-controls']);
    };

    VJJS.getScenes = function() {
      return scenes;
    };

    VJJS.getCurrentScene = function() {
      return currentScene;
    };

    VJJS.loadScene = function(sceneName) {
      if (currentScene) currentScene.destroy();

      require(['scenes/' + sceneName + '/scene'], function(scene) {
        currentScene = scene;
        currentScene.init();
      });
    };

    return VJJS;
  }
);
