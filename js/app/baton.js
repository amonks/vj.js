define(["vendor/baton"],function(e){return baton=new e,baton.connect(function(){for(var e=0;e<baton.inputs().length;e++)baton.listen(e)}),baton});