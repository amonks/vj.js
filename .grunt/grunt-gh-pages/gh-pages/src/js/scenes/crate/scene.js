define(["app/params","vendor/three","app/renderer","app/camera","app/3dcontainer"],function(e,t,n,r,i){var s={},o,u,a;return s.init=function(){function s(){i.show(),a=!0,o=new t.Scene;var e=new t.BoxGeometry(200,200,200),r=t.ImageUtils.loadTexture("/js/scenes/crate/crate.gif");r.anisotropy=n.getMaxAnisotropy();var s=new t.MeshBasicMaterial({map:r});u=new t.Mesh(e,s),o.add(u)}function f(){a===!0&&requestAnimationFrame(f);var t=e.getParams();u.scale.x=t[0].value/127+.1,u.scale.y=t[1].value/127+.1,u.scale.z=t[2].value/127+.1,u.rotation.x+=t[3].value/127/10,u.rotation.y+=t[4].value/127/10,u.rotation.z+=t[5].value/127/10,n.render(o,r)}s(),f()},s.destroy=function(){i.hide(),a=!1},s});