define(["app/vjjs","vendor/three","app/renderer","app/camera","app/3dcontainer"],function(e,t,n,r,i){var s={},o,u,a=[];return s.init=function(){function s(){var e=new t.BoxGeometry(200,200,200),r=t.ImageUtils.loadTexture("/js/scenes/boxes/box.jpg");r.anisotropy=n.getMaxAnisotropy();var i=new t.MeshBasicMaterial({map:r});return mesh=new t.Mesh(e,i),mesh.velocity={},mesh.velocity.x=Math.random()*10-5,mesh.velocity.y=Math.random()*10-5,mesh.velocity.z=Math.random()*10-5,mesh}function f(){i.show(),u=!0,o=new t.Scene;var e=s();a.push(e),o.add(e)}function l(){if(fftjs.fft()[5]>200){var t=s();a.push(t),o.add(t)}u===!0&&requestAnimationFrame(l);var i=e.getParams();for(var f in a)a[f].scale.x=i[0].value/127+.1,a[f].scale.y=i[1].value/127+.1,a[f].scale.z=i[2].value/127+.1,a[f].rotation.x+=i[3].value/127/10,a[f].rotation.y+=i[4].value/127/10,a[f].rotation.z+=i[5].value/127/10,a[f].position.x+=a[f].velocity.x,a[f].position.y+=a[f].velocity.y,a[f].position.z+=a[f].velocity.z;n.render(o,r)}f(),l()},s.destroy=function(){i.hide(),a=[],u=!1},s});