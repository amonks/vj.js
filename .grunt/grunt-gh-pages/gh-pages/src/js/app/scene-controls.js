define(["app/vjjs","vendor/jquery-ui-sortable"],function(e,t){function n(n,r){var i='<div class="control-group scene" id="scene-'+n+'">';i+="<h4>"+n+"</h4>",i+='<button id="load-'+n+'">load</button>',i+='<button id="destroy-'+n+'">destroy</button>',i+="</div>",t("#scene-list").append(t(i)),t("#load-"+n).on("click",function(){e.loadScene(n)}),t("#destroy-"+n).on("click",function(){e.destroyScene(n)})}var r=e.getScenes();for(var i in r)n(r[i]);t("#scene-list").sortable({update:function(n,r){t(".scene").each(function(e){t(this).data("id",e+1),t(this).attr("data-id",e+1)});var i=e.getCurrentScenes();for(var s in i){var o=i[s],u=t("#scene-"+o.name).attr("data-id");o.scene.reOrder(u)}}})});