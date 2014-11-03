define(['vendor/baton'],
  function(Baton) {
    baton = new Baton();
    // connect to midi, set the function to be called when connected
    baton.connect(function() {
      // listen to all inputs
      for (var i = 0; i < baton.inputs().length; i++) {
        baton.listen(i);
      }
    });
    return baton;
  }
);
