define(['vendor/snap', 'jquery'],
  function (Snap, $) {
    var snapper = new Snap({
      element: document.getElementById('snap-content'),
      resistance: 0.8,
      tapToClose: 'false',
      maxPosition: 100,
      disable: 'right',
      minPosition: -100
    });
    $('#show-side-panel').on('click', function() {
      if (snapper.state().state === "left") {
        snapper.close();
      } else {
        snapper.open('left');
      }
    });
    return snapper;
  }
);
