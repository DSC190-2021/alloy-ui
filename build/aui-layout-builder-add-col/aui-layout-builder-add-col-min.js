YUI.add("aui-layout-builder-add-col",function(e,t){var n="addColumn",r=e.getClassName("layout","builder","add","col","draggable"),i=e.getClassName("layout","builder","add","col","handle"),s=e.getClassName("layout","builder","resize","col","draggable","handle"),o=".layout-row";e.LayoutBuilderAddCol=function(){},e.LayoutBuilderAddCol.prototype={initializer:function(){this._eventHandles.push(this.after("enableAddColsChange",this._afterEnableAddColsChange),this.after("enableResizeColsChange",this._afterEnableAddColsChange),this.after("layout:isColumnModeChange",e.bind(this._afterAddColIsColumnModeChange,this))),this._uiSetEnableAddCols(this.get("enableAddCols"))},destructor:function(){this._unbindAddColEvents()},_afterAddColIsColumnModeChange:function(){this._uiSetEnableAddCols(this.get("enableAddCols"))},_afterAddColLayoutColsChange:function(e){var t=e.target.get("node").one(o);this._appendAddColButtonToSingleRow(t)},_afterAddColRowsChange:function(){this._removeAddColButton(),this._appendAddColButtonToRows()},_afterEnableAddColsChange:function(){this._uiSetEnableAddCols(this.get("enableAddCols"))},_appendAddColButtonToRows:function(){var e=this,t=this._layoutContainer.all(o);t.each(function(t){e._appendAddColButtonToSingleRow(t)})},_appendAddColButtonToSingleRow:function(t){var o,u=t.getData("layout-row"),a,f;o=u.get("cols"),o.length<u.get("maximumCols")&&(a=e.Node.create(this.TPL_RESIZE_COL_DRAGGABLE),f=e.Node.create(this.TPL_RESIZE_COL_DRAGGABLE),a.one("."+s).addClass(i),a.addClass(r),a.setData("layout-action",n),a.setData("layout-position",0),a.setData("layout-col2",o[0]),a.setStyle("left","0%"),f.addClass(r),f.one("."+s).addClass(i),f.setData("layout-action",n),f.setData("layout-position",u.get("maximumCols")),f.setData("layout-col1",o[o.length-1]),f.setStyle("left","100%"),t.append(a),t.append(f))},_bindAddColEvents:function(){this._addColsEventHandles=[this.after("layout-row:colsChange",this._afterAddColLayoutColsChange),this.after("layout:rowsChange",this._afterAddColRowsChange)]},_removeAddColButton:function(){this._layoutContainer.all("."+r).remove()},_uiSetEnableAddCols:function(e){e&&this.get("layout").get("isColumnMode")&&this.get("enableResizeCols")?(this._appendAddColButtonToRows(),this._bindAddColEvents()):(this._removeAddColButton(),this._unbindAddColEvents())},_unbindAddColEvents:function(){this._addColsEventHandles&&(new e.EventHandle(this._addColsEventHandles)).detach()}},e.LayoutBuilderAddCol.ATTRS={enableAddCols:{validator:e.Lang.isBoolean,value:!0}}},"3.1.0-deprecated.78",{requires:["event-key","node-base"],skinnable:!0});
