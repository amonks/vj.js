define(function () {
  var VJJS = {};

  var scenes = [
    'crate',
    'boxes',
    'fft'
  ];
  var currentScene = null;

  var params = [
    { name: 'param0', value: 0 },
    { name: 'param1', value: 0 },
    { name: 'param2', value: 0 },
    { name: 'param3', value: 0 },
    { name: 'param4', value: 0 },
    { name: 'param5', value: 0 }
  ];

  VJJS.init = function() {
    snapper = require(['app/snap']);
    baton = require(['app/baton']);
    fft = require(['app/fft']);
    require(['app/scene-controls']);
    require(['app/param-controls']);
  };

  VJJS.getScenes = function() {
    return scenes;
  };

  VJJS.getCurrentScene = function() {
    return currentScene;
  };

  VJJS.getParams = function() {
    return params;
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
