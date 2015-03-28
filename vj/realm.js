define(['amonks/fft', 'amonks/baton'],
  function(FFTJS, Baton) {
    var realm = {};
    realm.init = function() {
      console.log("init realm");

      var fft = new FFTJS();
      var baton = new Baton();

      fft.init();

      // connect and listen
      baton.connect(function() {
        for ( var i in baton.inputs() ) {
          baton.listen(i);
        }
      });

      console.log(fft);
      console.log(baton);
    };
    return realm;
  }
);
