define(['vendor/three', 'app/3dcontainer'],
  function(THREE, container) {
    var renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.sortObjects = false;
    renderer.autoClear = false;
    container.append( renderer.domElement );

    var updateSize = function () {
      renderer.setSize( window.innerWidth, window.innerHeight );
    };
    window.addEventListener( 'resize', updateSize, false );
    updateSize();

    return renderer;
  }
);
