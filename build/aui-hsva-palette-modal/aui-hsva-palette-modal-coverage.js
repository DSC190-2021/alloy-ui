if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-hsva-palette-modal/aui-hsva-palette-modal.js']) {
   __coverage__['build/aui-hsva-palette-modal/aui-hsva-palette-modal.js'] = {"path":"build/aui-hsva-palette-modal/aui-hsva-palette-modal.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}},"2":{"name":"(anonymous_2)","line":35,"loc":{"start":{"line":35,"column":21},"end":{"line":35,"column":32}}},"3":{"name":"(anonymous_3)","line":50,"loc":{"start":{"line":50,"column":22},"end":{"line":50,"column":33}}},"4":{"name":"(anonymous_4)","line":63,"loc":{"start":{"line":63,"column":28},"end":{"line":63,"column":44}}},"5":{"name":"(anonymous_5)","line":77,"loc":{"start":{"line":77,"column":28},"end":{"line":77,"column":39}}},"6":{"name":"(anonymous_6)","line":109,"loc":{"start":{"line":109,"column":16},"end":{"line":109,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":186,"column":94}},"2":{"start":{"line":10,"column":0},"end":{"line":181,"column":7}},"3":{"start":{"line":36,"column":12},"end":{"line":36,"column":32}},"4":{"start":{"line":38,"column":12},"end":{"line":38,"column":76}},"5":{"start":{"line":40,"column":12},"end":{"line":40,"column":81}},"6":{"start":{"line":51,"column":12},"end":{"line":51,"column":32}},"7":{"start":{"line":53,"column":12},"end":{"line":53,"column":56}},"8":{"start":{"line":64,"column":12},"end":{"line":64,"column":32}},"9":{"start":{"line":66,"column":12},"end":{"line":68,"column":13}},"10":{"start":{"line":67,"column":16},"end":{"line":67,"column":67}},"11":{"start":{"line":78,"column":12},"end":{"line":83,"column":25}},"12":{"start":{"line":85,"column":12},"end":{"line":85,"column":52}},"13":{"start":{"line":87,"column":12},"end":{"line":87,"column":45}},"14":{"start":{"line":89,"column":12},"end":{"line":89,"column":40}},"15":{"start":{"line":91,"column":12},"end":{"line":91,"column":36}},"16":{"start":{"line":93,"column":12},"end":{"line":95,"column":13}},"17":{"start":{"line":94,"column":16},"end":{"line":94,"column":41}},"18":{"start":{"line":97,"column":12},"end":{"line":97,"column":55}},"19":{"start":{"line":99,"column":12},"end":{"line":99,"column":63}},"20":{"start":{"line":101,"column":12},"end":{"line":101,"column":73}},"21":{"start":{"line":103,"column":12},"end":{"line":105,"column":13}},"22":{"start":{"line":104,"column":16},"end":{"line":104,"column":33}},"23":{"start":{"line":107,"column":12},"end":{"line":114,"column":14}},"24":{"start":{"line":110,"column":20},"end":{"line":112,"column":23}},"25":{"start":{"line":183,"column":0},"end":{"line":183,"column":38}}},"branchMap":{"1":{"line":66,"type":"if","locations":[{"start":{"line":66,"column":12},"end":{"line":66,"column":12}},{"start":{"line":66,"column":12},"end":{"line":66,"column":12}}]},"2":{"line":93,"type":"if","locations":[{"start":{"line":93,"column":12},"end":{"line":93,"column":12}},{"start":{"line":93,"column":12},"end":{"line":93,"column":12}}]},"3":{"line":103,"type":"if","locations":[{"start":{"line":103,"column":12},"end":{"line":103,"column":12}},{"start":{"line":103,"column":12},"end":{"line":103,"column":12}}]}},"code":["(function () { YUI.add('aui-hsva-palette-modal', function (A, NAME) {","","/**"," * The Color Picker Component"," *"," * @module aui-color-picker"," * @submodule aui-hsv-palette-modal"," */","","var AWidget = A.Widget,","    Lang = A.Lang,","","    getClassName = A.getClassName,","","    CSS_HSV_PALETTE_MODAL = getClassName('hsv-palette-modal'),","","    /**","     * A base class for `HSVAPaletteModal`.","     *","     * @class A.HSVAPaletteModal","     * @extends A.Modal","     * @param {Object} config Object literal specifying widget configuration","     *     properties.","     * @constructor","     */","    HSVAPaletteModal = A.Base.create('hsv-palette-modal', A.Modal, [A.WidgetCssClass, A.WidgetToggle], {","","        /**","         * Construction logic executed during `HSVAPaletteModal` instantiation.","         * Lifecycle.","         *","         * @method initializer","         * @protected","         */","        initializer: function() {","            var instance = this;","","            instance.after('render', instance._renderHSVAPalette, instance);","","            instance.on('selectedChange', instance._onSelectionChange, instance);","        },","","        /**","         * Returns the currently selected value of the `HSVPalette`.","         *","         * @method _getSelected","         * @return {String} selected hex color value","         * @protected","         */","        _getSelected: function() {","            var instance = this;","","            return instance._hsvPalette.get('selected');","        },","","        /**","         * Sets selected value of the `HSVPalette`.","         *","         * @method _onSelectionChange","         * @param {EventFacade} event","         * @protected","         */","        _onSelectionChange: function(event) {","            var instance = this;","","            if (event.src !== AWidget.UI_SRC) {","                instance._hsvPalette.set('selected', event.newVal);","            }","        },","","        /**","         * Renders the `HSVPalette`.","         *","         * @method _renderHSVAPalette","         * @protected","         */","        _renderHSVAPalette: function() {","            var instance = this,","                body,","                contentBox,","                HsvClass,","                hsvOptions,","                useAlpha;","","            contentBox = instance.get('contentBox');","","            hsvOptions = instance.get('hsv');","","            useAlpha = hsvOptions.alpha;","","            HsvClass = A.HSVPalette;","","            if (useAlpha) {","                HsvClass = A.HSVAPalette;","            }","","            contentBox.addClass(CSS_HSV_PALETTE_MODAL);","","            body = instance.getStdModNode(A.WidgetStdMod.BODY);","","            instance._hsvPalette = new HsvClass(hsvOptions).render(body);","","            if (instance.get('centered')) {","                instance.align();","            }","","            instance._hsvPalette.after(","                'selectedChange',","                function(event) {","                    instance.set('selected', event.newVal, {","                        src: AWidget.UI_SRC","                    });","                }","            );","        }","    }, {","","        /**","         * Static property used to define the default attribute","         * configuration for the `HSVAPaletteModal`.","         *","         * @property ATTRS","         * @type {Object}","         * @static","         */","        ATTRS: {","","            /**","             * Configuration options for the `HSVPalette`.","             *","             * @attribute hsv","             * @type {Object}","             */","            hsv: {","                validator: Lang.isObject,","                value: {","                    alpha: false","                }","            },","","            /**","             * Currently `selected` color value.","             *","             * @attribute selected","             * @default ''","             * @type {String}","             */","            selected: {","                getter: '_getSelected',","                validator: Lang.isString,","                value: ''","            }","        },","","        /**","         * Static property provides a string to identify the CSS prefix.","         *","         * @property CSS_PREFIX","         * @type {String}","         * @static","         */","        CSS_PREFIX: getClassName('hsv-palette-modal'),","","        /**","         * Static property provides a string to identify the class.","         *","         * @property NAME","         * @type {String}","         * @static","         */","        NAME: 'hsv-palette-modal',","","        /**","         * Static property provides a string to identify the namespace.","         *","         * @property NS","         * @type {String}","         * @static","         */","        NS: 'hsv-palette-modal'","    });","","A.HSVAPaletteModal = HSVAPaletteModal;","","","}, '3.0.3-deprecated.49', {\"requires\": [\"aui-hsva-palette\", \"aui-modal\"], \"skinnable\": true});","","}());"]};
}
var __cov_tkV$0Me6tIkjpaW2ZYPf4Q = __coverage__['build/aui-hsva-palette-modal/aui-hsva-palette-modal.js'];
__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['1']++;YUI.add('aui-hsva-palette-modal',function(A,NAME){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.f['1']++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['2']++;var AWidget=A.Widget,Lang=A.Lang,getClassName=A.getClassName,CSS_HSV_PALETTE_MODAL=getClassName('hsv-palette-modal'),HSVAPaletteModal=A.Base.create('hsv-palette-modal',A.Modal,[A.WidgetCssClass,A.WidgetToggle],{initializer:function(){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.f['2']++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['3']++;var instance=this;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['4']++;instance.after('render',instance._renderHSVAPalette,instance);__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['5']++;instance.on('selectedChange',instance._onSelectionChange,instance);},_getSelected:function(){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.f['3']++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['6']++;var instance=this;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['7']++;return instance._hsvPalette.get('selected');},_onSelectionChange:function(event){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.f['4']++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['8']++;var instance=this;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['9']++;if(event.src!==AWidget.UI_SRC){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.b['1'][0]++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['10']++;instance._hsvPalette.set('selected',event.newVal);}else{__cov_tkV$0Me6tIkjpaW2ZYPf4Q.b['1'][1]++;}},_renderHSVAPalette:function(){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.f['5']++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['11']++;var instance=this,body,contentBox,HsvClass,hsvOptions,useAlpha;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['12']++;contentBox=instance.get('contentBox');__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['13']++;hsvOptions=instance.get('hsv');__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['14']++;useAlpha=hsvOptions.alpha;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['15']++;HsvClass=A.HSVPalette;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['16']++;if(useAlpha){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.b['2'][0]++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['17']++;HsvClass=A.HSVAPalette;}else{__cov_tkV$0Me6tIkjpaW2ZYPf4Q.b['2'][1]++;}__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['18']++;contentBox.addClass(CSS_HSV_PALETTE_MODAL);__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['19']++;body=instance.getStdModNode(A.WidgetStdMod.BODY);__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['20']++;instance._hsvPalette=new HsvClass(hsvOptions).render(body);__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['21']++;if(instance.get('centered')){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.b['3'][0]++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['22']++;instance.align();}else{__cov_tkV$0Me6tIkjpaW2ZYPf4Q.b['3'][1]++;}__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['23']++;instance._hsvPalette.after('selectedChange',function(event){__cov_tkV$0Me6tIkjpaW2ZYPf4Q.f['6']++;__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['24']++;instance.set('selected',event.newVal,{src:AWidget.UI_SRC});});}},{ATTRS:{hsv:{validator:Lang.isObject,value:{alpha:false}},selected:{getter:'_getSelected',validator:Lang.isString,value:''}},CSS_PREFIX:getClassName('hsv-palette-modal'),NAME:'hsv-palette-modal',NS:'hsv-palette-modal'});__cov_tkV$0Me6tIkjpaW2ZYPf4Q.s['25']++;A.HSVAPaletteModal=HSVAPaletteModal;},'3.0.3-deprecated.49',{'requires':['aui-hsva-palette','aui-modal'],'skinnable':true});
