requirejs.config({
  baseUrl: 'js',
  paths: {
    // jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
    jquery: 'vendor/jquery'
  },
  shim: {
    'vendor/fft': {
      exports: 'FFTJS'
    },
    'vendor/snap': {
      exports: 'Snap'
    },
    'vendor/baton': {
      exports: 'Baton'
    },
    'vendor/jquery-ui-sortable': {
      exports: '$',
      deps: ['jquery']
    },
    'vendor/processing': {
      exports: 'processing'
    },
    'vendor/three': {
      exports: 'THREE'
    },
    'vendor/webgl-debug': {
      exports: 'WebGLDebugUtils'
    }
  }
});

requirejs(['app/vjjs'],
  function(VJJS) {
    VJJS.init();
});
