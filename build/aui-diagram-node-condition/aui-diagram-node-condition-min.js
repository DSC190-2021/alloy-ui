YUI.add("aui-diagram-node-condition",function(e,t){var n=e.Component.create({NAME:"diagram-node",ATTRS:{height:{value:60},type:{value:"condition"},width:{value:60}},EXTENDS:e.DiagramNodeState,prototype:{hotPoints:e.DiagramNode.DIAMOND_POINTS,renderShapeBoundary:function(){var e=this,t=e.boundary=e.get("graphic").addShape(e.get("shapeBoundary"));return t.translate(10,10),t.rotate(45),t},_valueShapeBoundary:e.DiagramNode.prototype._valueShapeBoundary}});e.DiagramNodeCondition=n},"3.0.3-deprecated.98",{requires:["aui-diagram-node-state"]});
