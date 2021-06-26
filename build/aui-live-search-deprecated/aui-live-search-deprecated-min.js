YUI.add("aui-live-search-deprecated",function(e,t){var n=e.Lang,r=n.isString,i=n.isObject,s=n.isFunction,o=n.isValue,u=n.trim,a="",f="data",l="delay",c="hide",h="index",p="input",d="live-search",v="matchRegex",m="nodes",g="searchValue",y="show",b="*",w=e.Widget.UI_SRC,E="ENTER",S=function(t){return t instanceof e.NodeList},x=e.Component.create({NAME:d,ATTRS:{data:{value:function(e){return e.html()},validator:s},delay:{value:250},hide:{value:function(e){return e.hide()},validator:s},index:{value:[],validator:i},input:{setter:e.one},matchRegex:{validator:function(e){return e instanceof RegExp},value:/(.)*/g},nodes:{setter:"_setNodes"},searchValue:{getter:"_getSearchValue",setter:String,value:""},show:{value:function(e){return e.show()},validator:s}},EXTENDS:e.Base,prototype:{normalizedQuery:a,query:a,timer:null,initializer:function(){var t=this;t.refreshIndex(),t._fireSearchTask=e.debounce(t._fireSearchFn,t.get(l),t),t.bindUI()},bindUI:function(){var e=this,t=e.get(p);t.on("keyup",e._inputKeyUp,e),e.after("searchValueChange",e._afterSearchValueChange),e.publish("search",{defaultFn:e._defSearchFn})},destroy:function(){var e=this,t=e.get(p);t.detach("keyup")},filter:function(t){var n=this,r=[],i=n.get(m),s=n.get(h);n.query=t,n.normalizedQuery=n._normalizeQuery(t);var o=new RegExp(n.normalizedQuery);return e.each(s,function(e,t){var n=i.item(t);r.push({content:e,match:o.test(e),node:n})}),r},refreshIndex:function(){var e=this,t=[],n=e.get(m);n.refresh();var r=e.get(f);n.each(function(n,i,s){var o=r.call(e,n);t.push(u(o).toLowerCase())}),e.set(h,t)},search:function(e){var t=this;return t.set(g,e,{SRC:w})},_afterSearchValueChange:function(e){var t=this;if(e.SRC==w){var n=t.get(p);n.val(e.newVal),t.fire("search")}},_defSearchFn:function(t){var n=this,r=n.get(g),i=n.filter(r);e.Array.each(i,n._iterateResults,n);var s=e.namespace.call(t,"liveSearch");s.results=i},_fireSearchFn:function(e){var t=this;t.set(g,e.currentTarget.val()),t.fire("search",{liveSearch:{inputEvent:e}})},_getSearchValue:function(e){var t=this;return o(e)||(e=t.get(p).val()),e},_iterateResults:function(e,t,n){var r=this,i=c;e.match&&(i=y),r.get(i).call(r,e.node)},_normalizeQuery:function(t){var r=this,i=r.get(v);return t=n.trim(t.toLowerCase()),t=t.match(i).join(a),t=t.replace(b,a),t=e.Lang.String.escapeRegEx(t),t},_inputKeyUp:function(e){var t=this;e.isKey(E)&&e.halt(),t._fireSearchTask(e)},_setNodes:function(t){var n=this;return S(t)||(r(t)?t=e.all(t):t=new e.NodeList([t])),t}}});e.LiveSearch=x},"3.1.0-deprecated.82",{requires:["aui-base-deprecated"]});
