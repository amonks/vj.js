define( ['app/params', 'jquery'],
  function (Params, $) {
    var VJJS = {};

    var scenes = ['hat', 'scarf'];
    var currentScenes = [];

    VJJS.init = function() {
      Params.init();
      refreshScenes();
      require(['app/snap']);
      require(['app/scene-controls']);
      // require(['app/param-controls']);
    };

    refreshScenes = function() {
      $.get('/scenes/list', function(data) {
        scenes = JSON.parse(data);
      });
    };

    VJJS.getScenes = function() {
      return scenes;
    };

    VJJS.getCurrentScenes = function() {
      return currentScenes;
    };

    VJJS.loadScene = function(sceneName) {
      require(['scenes/' + sceneName + '/js'], function(scene) {
        currentScenes.push({name: sceneName, scene: scene});
        scene.init();
      });
    };

    // VJJS.loadScene = function(sceneName) {
    //   require(['scenes/' + sceneName + '/scene'], function(scene) {
    //     currentScenes.push({name: sceneName, scene: scene});
    //     scene.init();
    //   });
    // };

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
