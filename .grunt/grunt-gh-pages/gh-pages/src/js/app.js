requirejs.config({baseUrl:"js",paths:{jquery:"vendor/jquery"},shim:{"vendor/fft":{exports:"FFTJS"},"vendor/snap":{exports:"Snap"},"vendor/baton":{exports:"Baton"},"vendor/processing":{exports:"processing"},"vendor/three":{exports:"THREE"},"vendor/webgl-debug":{exports:"WebGLDebugUtils"}}}),requirejs(["app/vjjs"],function(e){e.init()});