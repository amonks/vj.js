define([],function(){var e={},t=["crate","boxes","fft"],n=null,r=[{name:"param0",value:0},{name:"param1",value:0},{name:"param2",value:0},{name:"param3",value:0},{name:"param4",value:0},{name:"param5",value:0}];return e.init=function(){snapper=require(["app/snap"]),baton=require(["app/baton"]),fft=require(["app/fft"]),require(["app/scene-controls"]),require(["app/param-controls"])},e.getScenes=function(){return t},e.getCurrentScene=function(){return n},e.getParams=function(){return r},e.loadScene=function(e){n&&n.destroy(),require(["scenes/"+e+"/scene"],function(e){n=e,n.init()})},e});