define(["app/vjjs","app/baton","app/fft","jquery"],function(e,t,n,r){API={};var i=[{name:"param0",value:0,mapping:null},{name:"param1",value:0,mapping:null},{name:"param2",value:0,mapping:null},{name:"param3",value:0,mapping:null},{name:"param4",value:0,mapping:null},{name:"param5",value:0,mapping:null}];API.init=function(){u()},API.getParams=function(){return s(),i};var s=function(){var e=n.fft();for(var t in i){var s=i[t];s.mapping&&s.mapping.type==="audio"&&(s.value=e[s.mapping.map]/2,r("#display-"+s.name).val(s.value))}},o=function(e){var t='<div class="control-group" id="controls-'+e.name+'">';t+="<h4>"+e.name+"</h4>",t+='<button id="midi-map-'+e.name+'"> midi map</button>',t+='<button id="band-map-'+e.name+'"> band map</button>',t+='<input id="map-band-'+e.name+'" placeholder="band">',t+='<button id="unmap-'+e.name+'">unmap</button>',t+='<input id="display-'+e.name+'" placeholder="value" readonly>',t+="</div>",r("#param-list").append(r(t)),r("#midi-map-"+e.name).on("click",function(){baton.autoMap(e.name,function(t){e.mapping={type:"midi",map:t.channel},e.value=t.value,r("#display-"+e.name).val(t.value)})}),r("#band-map-"+e.name).on("click",function(){var t=r("#map-band-"+e.name).val();!isNaN(t)&&t.length>0&&t>-1&&(e.mapping={type:"audio",map:r("#map-band-"+e.name).val()})}),r("#unmap-"+e.name).on("click",function(){e.mapping=null})},u=function(){for(var e in i)o(i[e])};return API});