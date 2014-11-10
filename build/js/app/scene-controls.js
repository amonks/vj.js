define(['app/vjjs', 'vendor/jquery-ui-sortable'],
  function(VJJS, $) {
    function makeSceneLoader(scene, params) {
      var buttonString = '<div class="control-group scene" id="scene-' + scene + '">';
      buttonString += '<h4>' + scene + '</h4>';
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
    $("#scene-list").sortable({
      update: function(event, ui) {
        $('.scene').each(function(i) {
          $(this).data('id', i + 1); // updates the data object
          $(this).attr('data-id', i + 1); // updates the attribute
        });
        var currentScenes = VJJS.getCurrentScenes();
        for (var s in currentScenes) {
          var scene = currentScenes[s];
          var i = $('#scene-' + scene.name).attr('data-id');
          scene.scene.reOrder(i);
        }
      }
    });
  }
);
