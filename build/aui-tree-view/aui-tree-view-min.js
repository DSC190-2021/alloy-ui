YUI.add("aui-tree-view",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isString,s=e.UA,o=e.getClassName,u=o("tree","hitarea"),a=o("tree","icon"),f=o("tree","label"),l=o("tree","node"),c=o("tree","node","content"),h=o("tree","node","content","invalid"),p=o("tree","root","container"),d=o("tree","view","content"),v=function(e){e.addClass(l),e.all("> ul > li").each(function(e){v(e)})},m=function(){return Array.prototype.slice.call(arguments).join(" ")},g=function(t){return t instanceof e.TreeNode},y=e.Component.create({NAME:"tree-view",ATTRS:{type:{value:"file",validator:i},lastSelected:{value:null,validator:g},lazyLoad:{validator:r,value:!0},selectOnToggle:{validator:r,value:!1}},AUGMENTS:[e.TreeData,e.TreeViewPaginator,e.TreeViewIO],HTML_PARSER:{contentBox:function(e){var t=e.all("> li");return v(t),e}},prototype:{CONTENT_TEMPLATE:"<ul></ul>",initializer:function(){var e=this,t=e.get("boundingBox");t.setData("tree-view",e)},bindUI:function(){var t=this;t.after("childrenChange",e.bind(t._afterSetChildren,t)),t._delegateDOM()},renderUI:function(){var e=this;e._renderElements()},_afterKeyNodeEl:function(e){e.preventDefault(),this._toggleTreeContent(e)},_afterSetChildren:function(e){var t=this,n=t.get("paginator");if(n&&n.total){var r=-1;e.newVal.length>e.prevVal.length&&(r=1),n.total+=r}t._syncPaginatorUI()},_createFromHTMLMarkup:function(t){var n=this;t.all("> li").each(function(t){var r=t.one("> *").remove(),i=r.outerHTML(),s=t.one("> ul"),o=new e.TreeNode({boundingBox:t,container:s,label:i,leaf:!s,ownerTree:n});n.get("lazyLoad")?e.setTimeout(function(){o.render()},50):o.render();var u=t.get("parentNode").get("parentNode"),a=u.getData("tree-node");e.instanceOf(a,e.TreeNode)||(a=u.getData("tree-view")),a.appendChild(o),s&&n._createFromHTMLMarkup(s)})},_createNodeContainer:function(){var e=this,t=e.get("contentBox");return e.set("container",t),t},_renderElements:function(){var e=this,t=e.get("contentBox"),n=e.get("children"),r=e.get("type"),i=o("tree",r);t.addClass(d),t.addClass(m(i,p)),n.length||e._createFromHTMLMarkup(t)},_delegateDOM:function(){var t=this,n=t.get("boundingBox");n.delegate("click",e.bind(t._onClickNodeEl,t),"."+c),n.delegate("key",e.bind(t._afterKeyNodeEl,t),"down:enter,space","."+c),n.delegate("dblclick",e.bind(t._onClickHitArea,t),"."+a),n.delegate("dblclick",e.bind(t._onClickHitArea,t),"."+f),n.delegate("mouseenter",e.bind(t._onMouseEnterNodeEl,t),"."+c),n.delegate("mouseleave",e.bind(t._onMouseLeaveNodeEl,t),"."+c)},_onClickNodeEl:function(e){this._toggleTreeContent(e)},_onMouseEnterNodeEl:function(e){var t=this,n=t.getNodeByChild(e.currentTarget);n&&n.over()},_onMouseLeaveNodeEl:function(e){var t=this,n=t.getNodeByChild(e.currentTarget);n&&n.out()},_onClickHitArea:function(e){var t=this,n=t.getNodeByChild(e.currentTarget);n&&n.toggle()},_toggleTreeContent:function(e){var t=this.getNodeByChild(e.currentTarget);if(t){if(e.target.test("."+u)){t.toggle();if(!this.get("selectOnToggle"))return}if(!t.isSelected()){var n=this.get("lastSelected");n&&n.unselect(),t.select()}}}}});e.TreeView=y;var b=n.isNumber,w=e.DD.DDM,E=o("clearfix"),S=o("glyphicon"),x=o("tree","drag","helper"),T=o("tree","drag","helper","content"),N=o("tree","drag","helper","label"),C=o("tree","drag","insert","above"),k=o("tree","drag","insert","append"),L=o("tree","drag","insert","below"),A=o("tree","drag","state","append"),O=o("tree","drag","state","insert","above"),M=o("tree","drag","state","insert","below"),_='<div class="'+x+'">'+'<div class="'+[T,E].join(" ")+'">'+'<span class="'+S+'"></span>'+'<span class="'+N+'"></span>'+"</div>"+"</div>",D=e.Component.create({NAME:"tree-drag-drop",ATTRS:{helper:{value:null},scrollDelay:{value:100,validator:b}},EXTENDS:e.TreeView,prototype:{direction:"below",dropAction:null,lastY:0,node:null,nodeContent:null,destructor:function(){var e=this,t=e.get("helper");t&&t.remove(!0),e.ddDelegate&&e.ddDelegate.destroy()},bindUI:function(){var t=this;e.TreeViewDD.superclass.bindUI.apply(this,arguments),t._bindDragDrop()},renderUI:function(){var t=this;e.TreeViewDD.superclass.renderUI.apply(this,arguments);var n=e.Node.create(_).hide();e.one("body").append(n),t.set("helper",n),w.set("dragCursor","default")},_bindDragDrop:function(){var t=this,n=t.get("boundingBox"),r=null;t._createDragInitHandler=function(){t.ddDelegate=new e.DD.Delegate({bubbleTargets:t,container:n,invalid:"."+h,nodes:"."+c,target:!0});var i=t.ddDelegate.dd;i.plug(e.Plugin.DDProxy,{moveOnEnd:!1,positionProxy:!1,borderStyle:null}).plug(e.Plugin.DDNodeScroll,{scrollDelay:t.get("scrollDelay"),node:n}),i.removeInvalid("a"),r&&r.detach()},s.touch?t._createDragInitHandler():r=n.on(["focus","mousedown","mousemove"],t._createDragInitHandler),t.on("drag:align",t._onDragAlign),t.on("drag:start",t._onDragStart),t.on("drop:exit",t._onDropExit),t.after("drop:hit",t._afterDropHit),t.on("drop:hit",t._onDropHit),t.on("drop:over",t._onDropOver)},_appendState:function(e){var t=this;t.dropAction="append",t.get("helper").addClass(A),e.addClass(k)},_goingDownState:function(e){var t=this;t.dropAction="below",t.get("helper").addClass(M),e.addClass(L)},_goingUpState:function(e){var t=this;t.dropAction="above",t.get("helper").addClass(O),e.addClass(C)},_resetState:function(e){var t=this,n=t.get("helper");n.removeClass(A),n.removeClass(O),n.removeClass(M),e&&(e.removeClass(C),e.removeClass(k),e.removeClass(L))},_updateNodeState:function(e){var t=this,n=e.drag,r=e.drop,i=r.get("node"),s=i.get("parentNode"),o=n.get("node").get("parentNode"),u=s.getData("tree-node");t._resetState(t.nodeContent);if(!!u.get("draggable")&&!o.contains(s)){var a=i.get("offsetHeight")/3,f=i.getY(),l=f+a,c=f+a*2,h=n.mouseXY[1];h>f&&h<l?t._goingUpState(i):h>c?t._goingDownState(i):h>l&&h<c&&(u&&!u.isLeaf()?t._appendState(i):t.direction==="up"?t._goingUpState(i):t._goingDownState(i))}t.nodeContent=i},_afterDropHit:function(e){var t=this,n=t.dropAction,r=e.drag.get("node").get("parentNode"),i=e.drop.get("node").get("parentNode"),s=i.getData("tree-node"),o=r.getData("tree-node"
),u=t.getEventOutputMap(t);u.tree.dropNode=s,u.tree.dragNode=o,n==="above"?(s.insertBefore(o),t.bubbleEvent("dropInsert",u)):n==="below"?(s.insertAfter(o),t.bubbleEvent("dropInsert",u)):n==="append"&&s&&!s.isLeaf()&&(s.get("expanded")||s.expand(),s.appendChild(o),t.bubbleEvent("dropAppend",u)),t._resetState(t.nodeContent),t.bubbleEvent("drop",u),t.dropAction=null},_onDragAlign:function(e){var t=this,n=t.lastY,r=e.target.lastXY[1];r!==n&&(t.direction=r<n?"up":"down"),t.lastY=r},_onDragStart:function(e){var t=this,n=e.target,r=n.get("node").get("parentNode"),i=r.getData("tree-node"),s=t.get("lastSelected");s&&s.unselect(),i.select();var o=t.get("helper"),u=o.one("."+N);o.setStyle("display","block").show(),u.html(i.get("label")),n.set("dragNode",o)},_onDropOver:function(e){var t=this;t._updateNodeState(e)},_onDropHit:function(e){var t=e.drop.get("node").get("parentNode"),n=t.getData("tree-node");g(n)||e.preventDefault()},_onDropExit:function(){var e=this;e.dropAction=null,e._resetState(e.nodeContent)}}});e.TreeViewDD=D},"3.1.0-deprecated.82",{requires:["dd-delegate","dd-proxy","widget","aui-tree-node","aui-tree-paginator","aui-tree-io"],skinnable:!0});
