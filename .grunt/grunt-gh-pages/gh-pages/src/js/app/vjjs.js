define(["app/params"],function(e){var t={},n=["crate","boxes","fft"],r=null;return t.init=function(){e.init(),require(["app/snap"]),require(["app/scene-controls"])},t.getScenes=function(){return n},t.getCurrentScene=function(){return r},t.loadScene=function(e){r&&r.destroy(),require(["scenes/"+e+"/scene"],function(e){r=e,r.init()})},t});