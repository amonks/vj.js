define(function () {
  var VJJS = {};

  var scenes = [
    'crate',
    'boxes',
    'fft'
  ];
  var currentScene = null;

  VJJS.init = function() {
    require(['app/params']);
    require(['app/snap']);
    require(['app/scene-controls']);
    require(['app/param-controls']);
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
});
