define(['vendor/snap', 'jquery'],
  function (Snap, $) {
    var snapper = new Snap({
      element: document.getElementById('snap-content'),
      resistance: 0.8,
      tapToClose: 'false',
      maxPosition: 150,
      minPosition: -150,
      hyperextensible: false
    });
    $('#show-scene-panel').on('click', function() {
      if (snapper.state().state === "left") {
        snapper.close();
      } else {
        snapper.open('left');
      }
    });
    $('#show-param-panel').on('click', function() {
      if (snapper.state().state === "right") {
        snapper.close();
      } else {
        snapper.open('right');
      }
    });
    return snapper;
  }
);
