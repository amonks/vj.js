define(['app/vjjs', 'vendor/three', 'app/renderer', 'app/camera', 'app/3dcontainer'],
  function (VJJS, THREE, renderer, camera, container) {

    var API = {};
    var scene, rendering;
    var meshes = [];

    API.init = function() {

      initScene();
      animate();

      function makeMesh() {
        var geometry = new THREE.BoxGeometry( 200, 200, 200 );

        var texture = THREE.ImageUtils.loadTexture( '/js/scenes/boxes/box.jpg' );
        texture.anisotropy = renderer.getMaxAnisotropy();

        var material = new THREE.MeshBasicMaterial( { map: texture } );

        mesh = new THREE.Mesh( geometry, material );

        mesh.velocity = {};
        mesh.velocity.x = Math.random() * 10 - 5;
        mesh.velocity.y = Math.random() * 10 - 5;
        mesh.velocity.z = Math.random() * 10 - 5;

        return mesh;
      }

      function initScene() {
        container.show();

        rendering = true;

        scene = new THREE.Scene();

        var mesh = makeMesh();
        meshes.push(mesh);
        scene.add(mesh);
      }

      function animate() {
        if (fftjs.fft()[5] > 200) {
          var mesh = makeMesh();
          meshes.push(mesh);
          scene.add(mesh);
        }

        if (rendering === true) requestAnimationFrame( animate );

        var params = VJJS.getParams();

        for (var meshIndex in meshes) {
          meshes[meshIndex].scale.x = params[0].value / 127 + 0.1;
          meshes[meshIndex].scale.y = params[1].value / 127 + 0.1;
          meshes[meshIndex].scale.z = params[2].value / 127 + 0.1;

          meshes[meshIndex].rotation.x += params[3].value / 127 / 10;
          meshes[meshIndex].rotation.y += params[4].value / 127 / 10;
          meshes[meshIndex].rotation.z += params[5].value / 127 / 10;

          meshes[meshIndex].position.x += meshes[meshIndex].velocity.x;
          meshes[meshIndex].position.y += meshes[meshIndex].velocity.y;
          meshes[meshIndex].position.z += meshes[meshIndex].velocity.z;
        }

        renderer.render( scene, camera );
      }
    };

    API.destroy = function() {
      container.hide();
      meshes = [];
      rendering = false;
    };

    return API;
  }
);
