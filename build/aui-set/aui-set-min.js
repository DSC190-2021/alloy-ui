YUI.add("aui-set",function(e,t){var n=e.Base.create("set",e.Base,[],{_map:null,initializer:function(){var t=this;t._map=new e.Map,t.publish({add:{defaultFn:t._defAddFn},clear:{defaultFn:t._defClearFn},remove:{defaultFn:t._defRemoveFn}})},add:function(e){this.fire("add",{value:e})},clear:function(){this.fire("clear")},has:function(e,t){return this._map.has(e,t)},isEmpty:function(){return this._map.isEmpty()},remove:function(e){this.fire("remove",{value:e})},size:function(){return this._map.size()},values:function(){return this._map.keys()},_defAddFn:function(e){this._map.put(e.value,n.PRESENT,e.hash)},_defClearFn:function(){var t=this;e.Array.each(t.values(),function(e){t.remove(e)})},_defRemoveFn:function(e){var t=this,r=t._map,i=r.remove(e.value,e.hash);e.removed=i===n.PRESENT}},{PRESENT:{}});e.Set=n},"3.1.0-deprecated.82",{requires:["aui-map"]});
