AUI.add("aui-resize",function(Ab){var AL=Ab.Lang,F=AL.isArray,At=AL.isBoolean,y=AL.isNumber,Ax=AL.isString,Ap=AL.trim,U=Ab.Array.indexOf,AU=".",g=",",d=" ",c="active",x="activeHandle",AE="activeHandleEl",k="all",A7="auto",Ae="autoHide",Ak="bottom",Af="className",u="constrain2node",z="constrain2region",AF="constrain2view",Ai="cursor",S="diagonal",Aj="dotted",AV="dragCursor",D="grip",AN="gripsmall",m="handle",w="handles",AS="hidden",C="horizontal",AQ="icon",j="inner",E="left",v="margin",Z="maxHeight",Ay="maxWidth",V="minHeight",AB="minWidth",b="node",o="nodeName",AJ="none",r="offsetHeight",Aw="offsetWidth",H="parentNode",X="position",W="preserveRatio",An="proxy",l="proxyEl",AM="px",J="region",P="relative",Ac="resize",a="resizing",M="right",A2="static",Ao="tickX",Al="tickY",O="top",AZ="vertical",Ag="wrap",A0="wrapper",AY="wrapTypes",s="resize:mouseUp",h="resize:resize",t="resize:end",AG="resize:start",AO="t",A1="tr",AP="r",Ar="br",Aa="b",Au="bl",AT="l",A3="tl",AC=function(A){return(A instanceof Ab.Node);},A4=function(A){return m+A.toUpperCase();},Az=function(){return Array.prototype.slice.call(arguments).join(d);},f=function(A){return Ab.one(A);},AD=Ab.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),n=Ab.ClassNameManager.getClassName,Q=n(AQ),As=n(AQ,AN,S,Ar),AX=n(AQ,D,Aj,C),AI=n(AQ,D,Aj,AZ),Aq=n(Ac),Ah=n(Ac,m),AR=n(Ac,m,c),I=n(Ac,m,j),p=n(Ac,m,j,"{handle}"),A5=n(Ac,m,"{handle}"),G=n(Ac,AS,w),i=n(Ac,An),Av=n(Ac,A0),AW=Az(Q,As),Am=Az(Q,AX),Y=Az(Q,AI),K=/^(t|b)$/i,AH=/^(tl|l|bl)$/i,AA=/^(tl|t|tr)$/i,q=/^(bl|br|l|r|tl|tr)$/i,Ad='<div class="'+Az(Ah,A5)+'">'+'<div class="'+Az(I,p)+'"></div>'+"</div>",AK='<div class="'+i+'"></div>',A6='<div class="'+Av+'"></div>',e=[AO,A1,AP,Ar,Aa,Au,AT,A3];var N=Ab.Component.create({NAME:Ac,ATTRS:{activeHandle:{value:null,validator:Ax},activeHandleEl:{value:null,validator:AC},autoHide:{value:false,validator:At},constrain2node:{setter:Ab.one,value:null},constrain2region:{value:null},constrain2view:{value:false},handles:{setter:function(L){var A=this;var B=[];if(F(L)){B=L;}else{if(Ax(L)){if(L.toLowerCase()==k){B=e;}else{Ab.each(L.split(g),function(T,R){var A8=Ap(T);if(U(e,A8)>-1){B.push(A8);}});}}}return B;},value:k},minHeight:{value:15,validator:y},minWidth:{value:15,validator:y},maxHeight:{value:Infinity,validator:y},maxWidth:{value:Infinity,validator:y},node:{setter:f},preserveRatio:{value:false,validator:At},proxy:{value:false,validator:At},proxyEl:{setter:f,valueFn:function(){return Ab.Node.create(AK);}},resizing:{value:false,validator:At},tickX:{value:false},tickY:{value:false},wrap:{setter:function(R){var A=this;var L=A.get(b);var T=L.get(o);var B=A.get(AY);if(B.test(T)){R=true;}return R;},value:false,validator:At},wrapTypes:{readOnly:true,value:/canvas|textarea|input|select|button|img/i},wrapper:{setter:function(){var A=this;var B=A.get(b);var L=B;if(A.get(Ag)){L=Ab.Node.create(A6);B.placeBefore(L);L.append(B);A._copyStyles(B,L);B.setStyles({position:A2,left:0,top:0});}return L;},value:null,writeOnce:true}},EXTENDS:Ab.Base,prototype:{CSS_INNER_HANDLE_MAP:{r:Y,l:Y,t:Am,b:Am,br:AW},changeHeightHandles:false,changeLeftHandles:false,changeTopHandles:false,changeWidthHandles:false,info:null,originalInfo:null,initializer:function(){var A=this;A.info={};A.originalInfo={};A.get(b).addClass(Aq);A.renderer();},renderUI:function(){var A=this;A._renderHandles();A._renderProxy();},bindUI:function(){var A=this;A._createEvents();A._bindResize();A._bindDD();A._bindHandle();},syncUI:function(){var A=this;A._setHideHandlesUI(A.get(Ae));},destructor:function(){var A=this;var B=A.get(b);var L=A.get(A0);Ab.Event.purgeElement(L,true);A.eachHandle(function(T){var R=T.dd;if(R){R.destroy();}T.remove();});if(A.get(Ag)){B.setStyles({margin:L.getStyle(v),position:L.getStyle(X)});L.placeBefore(B);L.remove();}B.removeClass(Aq);B.removeClass(G);},renderer:function(){this.renderUI();this.bindUI();this.syncUI();},_bindDD:function(){var A=this;A.on("drag:drag",A._handleResizeEvent);A.on("drag:dropmiss",A._handleMouseUpEvent);A.on("drag:end",A._handleResizeEndEvent);A.on("drag:start",A._handleResizeStartEvent);},_bindHandle:function(){var A=this;var B=A.get(A0);B.on("mouseenter",Ab.bind(A._onWrapperMouseEnter,A));B.on("mouseleave",Ab.bind(A._onWrapperMouseLeave,A));B.delegate("mouseenter",Ab.bind(A._onHandleMouseOver,A),AU+Ah);B.delegate("mouseleave",Ab.bind(A._onHandleMouseOut,A),AU+Ah);},_bindResize:function(){var A=this;A.after(h,A._afterResize);},_createEvents:function(){var A=this;var B=function(L,R){A.publish(L,{defaultFn:R,queuable:false,emitFacade:true,bubbles:true,prefix:Ac});};B(AG,this._defResizeStartFn);B(h,this._defResizeFn);B(t,this._defResizeEndFn);B(s,this._defMouseUpFn);},_renderHandles:function(){var A=this;var B=A.get(A0);A.eachHandle(function(L){B.append(L);});},_renderProxy:function(){var B=this;var A=B.get(l);B.get(A0).get(H).append(A.hide());},eachHandle:function(B){var A=this;Ab.each(A.get(w),function(T,L){var R=A.get(A4(T));B.apply(A,[R,T,L]);});},_buildHandle:function(L){var A=this;var B=Ab.Node.create(Ab.substitute(Ad,{handle:L}));B.one(AU+I).addClass(A.CSS_INNER_HANDLE_MAP[L]);A._setupHandleDD(L,B);return B;},_checkConstrain:function(B,BD,L){var BB=this;var A=BB.info;var A8=BB.get(u);if(A8){var A9=A8.get(J);var BA=A[B]+A[L];var R=A9[BD];if(BA>=R){A[L]-=(BA-R);}var T=A[B];var BC=A9[B];if(T<=BC){A[B]+=(BC-T);A[L]-=(BC-T);}}},_checkHeight:function(){var B=this;var A8=B.info;var T=B.originalInfo;var L=B.get(Z);var R=B.get(V);B._checkConstrain(O,Ak,r);var A9=(A8.offsetHeight>L);var A=(A8.offsetHeight<R);if(A9){A8.offsetHeight=L;if(B.changeTopHandles){A8.top=T.top+T.offsetHeight-L;}}if(A){A8.offsetHeight=R;if(B.changeTopHandles){A8.top=T.top+T.offsetHeight-R;}}},_checkRatio:function(){var A8=this;var B=A8.info;var R=A8.originalInfo;var BA=R.offsetWidth;var A=R.offsetHeight;var T=R.top;var BB=R.left;var A9=function(){return(B.offsetWidth/BA);};var L=function(){return(B.offsetHeight/A);};if(A8.changeHeightHandles){B.offsetWidth=BA*L();A8._checkWidth();
B.offsetHeight=A*A9();}else{if(A8.changeWidthHandles){B.offsetHeight=A*A9();A8._checkHeight();B.offsetWidth=BA*L();}}if(A8.changeTopHandles){B.top=T+(A-B.offsetHeight);}if(A8.changeLeftHandles){B.left=BB+(BA-B.offsetWidth);}},_checkRegion:function(){var A=this;var B=A.get(u).get(J);return Ab.DOM.inRegion(null,B,true,A.info);},_checkWidth:function(){var A=this;var A9=A.info;var A8=A.originalInfo;var T=A.get(Ay);var R=A.get(AB);A._checkConstrain(E,M,Aw);var L=(A9.offsetWidth>T);var B=(A9.offsetWidth<R);if(L){A9.offsetWidth=T;if(A.changeLeftHandles){A9.left=A8.left+A8.offsetWidth-T;}}if(B){A9.offsetWidth=R;if(A.changeLeftHandles){A9.left=A8.left+A8.offsetWidth-R;}}},_copyStyles:function(T,A8){var B=this;var A=T.getStyle(X).toLowerCase();if(A==A2){A=P;}var R={position:A};var L={};Ab.each([O,M,Ak,E],function(BA){var A9=v+AD(BA);L[A9]=A8.getStyle(A9);R[A9]=T.getStyle(A9);});A8.setStyles(R);T.setStyles(L);T.setStyles({margin:0});A8.set(r,T.get(r));A8.set(Aw,T.get(Aw));},_extractHandleName:Ab.cached(function(L){var B=L.get(Af);var A=B.match(new RegExp(n(Ac,m,"(\\w{1,2})\\b")));return A?A[1]:null;}),_getInfo:function(T,A){var BC=this,A8;var BA=A.dragEvent.target;if(A){A8=(BA.actXY.length?BA.actXY:BA.lastXY);}var A9=T.getXY();var R=A9[0];var L=A9[1];var B=T.get(r);var BB=T.get(Aw);return{actXY:A8,bottom:(L+B),left:R,offsetHeight:B,offsetWidth:BB,right:(R+BB),top:L};},_recalculateXY:function(){var A=this;var L=A.info;var B=A.originalInfo;L.left=B.left+(L.left-B.left);L.top=B.top+(L.top-B.top);},_resize:function(){var A=this;var R=A.get(x);var A8=A.info;var T=A.originalInfo;var L=A8.actXY[0]-T.actXY[0];var B=A8.actXY[1]-T.actXY[1];var A9={t:function(){A8.top=T.top+B;A8.offsetHeight=T.offsetHeight-B;},r:function(){A8.offsetWidth=T.offsetWidth+L;},l:function(){A8.left=T.left+L;A8.offsetWidth=T.offsetWidth-L;},b:function(){A8.offsetHeight=T.offsetHeight+B;},tr:function(){this.t();this.r();},br:function(){this.b();this.r();},tl:function(){this.t();this.l();},bl:function(){this.b();this.l();}};A9[R](L,B);},_setupHandleDD:function(R,L){var B=this;var A=new Ab.DD.Drag({bubbleTargets:B,clickPixelThresh:0,clickTimeThresh:0,data:{handle:R,node:L},node:L,useShim:true,move:false});A.plug(Ab.Plugin.DDConstrained,{stickX:(R==AP||R==AT),stickY:(R==AO||R==Aa),tickX:B.get(Ao),tickY:B.get(Al)});},_setOffset:function(L,B,A){L.set(Aw,B);L.set(r,A);},_syncUI:function(){var A=this;var L=A.info;var R=A.get(A0);var B=A.get(b);A._setOffset(R,L.offsetWidth,L.offsetHeight);if(A.changeLeftHandles||A.changeTopHandles){R.setXY([L.left,L.top]);}if(!R.compareTo(B)){A._setOffset(B,L.offsetWidth,L.offsetHeight);}if(Ab.UA.webkit){B.setStyle(Ac,AJ);}},_syncProxyUI:function(){var B=this;var R=B.info;var L=B.get(AE);var A=B.get(l);var T=L.getStyle(Ai);A.show().setStyles({cursor:T,height:R.offsetHeight+AM,width:R.offsetWidth+AM});L.dd.set(AV,T);A.setXY([R.left,R.top]);},_updateChangeHandleInfo:function(B){var A=this;A.changeHeightHandles=K.test(B);A.changeLeftHandles=AH.test(B);A.changeTopHandles=AA.test(B);A.changeWidthHandles=q.test(B);},_updateInfo:function(B){var A=this;A.info=A._getInfo(A.get(A0),B);},_setActiveHandlesUI:function(L){var A=this;var B=A.get(AE);if(B){if(L){A.eachHandle(function(R){R.removeClass(AR);});B.addClass(AR);}else{B.removeClass(AR);}}},_setHideHandlesUI:function(B){var A=this;var L=A.get(A0);if(!A.get(a)){if(B){L.addClass(G);}else{L.removeClass(G);}}},_defMouseUpFn:function(B){var A=this;A.set(a,false);},_defResizeFn:function(L){var A=this;var B=A.info;A._updateInfo(L);A._resize();A._checkHeight();A._checkWidth();if(A.get(W)){A._checkRatio();}A._recalculateXY();if(A.get(u)&&!A._checkRegion()){A.info=B;}},_defResizeEndFn:function(L){var A=this;var B=L.dragEvent.target;B.actXY=[];if(A.get(An)){A._syncProxyUI();A.get(l).hide();}A._syncUI();A.set(x,null);A.set(AE,null);A._setActiveHandlesUI(false);},_defResizeStartFn:function(B){var A=this;A.set(a,true);A.originalInfo=A._getInfo(A.get(A0),B);A._updateInfo(B);},_afterResize:function(B){var A=this;if(A.get(An)){A._syncProxyUI();}else{A._syncUI();}},_handleMouseUpEvent:function(A){this.fire(s,{dragEvent:A,info:this.info});},_handleResizeEvent:function(A){this.fire(h,{dragEvent:A,info:this.info});},_handleResizeEndEvent:function(A){this.fire(t,{dragEvent:A,info:this.info});},_handleResizeStartEvent:function(A){this.fire(AG,{dragEvent:A,info:this.info});},_onWrapperMouseEnter:function(B){var A=this;if(A.get(Ae)){A._setHideHandlesUI(false);}},_onWrapperMouseLeave:function(B){var A=this;if(A.get(Ae)){A._setHideHandlesUI(true);}},_onHandleMouseOver:function(L){var A=this;var B=L.currentTarget;var R=A._extractHandleName(B);if(!A.get(a)){A.set(x,R);A.set(AE,B);A._setActiveHandlesUI(true);A._updateChangeHandleInfo(R);}},_onHandleMouseOut:function(B){var A=this;if(!A.get(a)){A._setActiveHandlesUI(false);}}}});Ab.each(e,function(B,A){N.ATTRS[A4(B)]={setter:function(){return this._buildHandle(B);},value:null,writeOnce:true};});Ab.Resize=N;},"@VERSION@",{requires:["aui-base","dd","substitute"],skinnable:true});