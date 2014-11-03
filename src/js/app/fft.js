define(['vendor/fft'],
  function(FFTJS) {
    fftjs = new FFTJS();
    fftjs.init(128);
    return fftjs;
  }
);
