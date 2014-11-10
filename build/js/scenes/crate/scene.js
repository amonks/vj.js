define(['app/params', 'vendor/three', 'app/renderer', 'app/camera', 'app/3dcontainer'],
  function (Params, THREE, renderer, camera, container) {

    var API = {};
    var scene, mesh;
    var rendering;

    API.init = function() {
      function initScene() {
        container.show();

        rendering = true;

        scene = new THREE.Scene();

        var geometry = new THREE.BoxGeometry( 200, 200, 200 );

        var texture = THREE.ImageUtils.loadTexture( '/js/scenes/crate/crate.gif' );
        texture.anisotropy = renderer.getMaxAnisotropy();

        var material = new THREE.MeshBasicMaterial( { map: texture } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
      }

      function animate() {
        if (rendering === true) requestAnimationFrame( animate );

        var params = Params.getParams();

        mesh.scale.x = params[0].value / 127 + 0.1;
        mesh.scale.y = params[1].value / 127 + 0.1;
        mesh.scale.z = params[2].value / 127 + 0.1;
        mesh.rotation.x += params[3].value / 127 / 10;
        mesh.rotation.y += params[4].value / 127 / 10;
        mesh.rotation.z += params[5].value / 127 / 10;

        renderer.render( scene, camera );
      }

      initScene();
      animate();
    };

    API.destroy = function() {
      container.hide();
      rendering = false;
    };

    API.reOrder = function(i) {
      $('#three-container').css('z-index', 100 - parseInt(i));
    };

    return API;
  }
);
