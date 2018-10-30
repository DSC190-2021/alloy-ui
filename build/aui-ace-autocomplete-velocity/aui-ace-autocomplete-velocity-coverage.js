if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-ace-autocomplete-velocity/aui-ace-autocomplete-velocity.js']) {
   __coverage__['build/aui-ace-autocomplete-velocity/aui-ace-autocomplete-velocity.js'] = {"path":"build/aui-ace-autocomplete-velocity/aui-ace-autocomplete-velocity.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":60}}},"2":{"name":"(anonymous_2)","line":37,"loc":{"start":{"line":37,"column":18},"end":{"line":37,"column":36}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":179,"column":84}},"2":{"start":{"line":10,"column":0},"end":{"line":174,"column":7}},"3":{"start":{"line":38,"column":12},"end":{"line":40,"column":27}},"4":{"start":{"line":42,"column":12},"end":{"line":63,"column":13}},"5":{"start":{"line":43,"column":16},"end":{"line":43,"column":56}},"6":{"start":{"line":45,"column":16},"end":{"line":51,"column":17}},"7":{"start":{"line":46,"column":20},"end":{"line":50,"column":22}},"8":{"start":{"line":53,"column":17},"end":{"line":63,"column":13}},"9":{"start":{"line":54,"column":16},"end":{"line":54,"column":56}},"10":{"start":{"line":56,"column":16},"end":{"line":62,"column":17}},"11":{"start":{"line":57,"column":20},"end":{"line":61,"column":22}},"12":{"start":{"line":65,"column":12},"end":{"line":65,"column":25}},"13":{"start":{"line":176,"column":0},"end":{"line":176,"column":44}}},"branchMap":{"1":{"line":42,"type":"if","locations":[{"start":{"line":42,"column":12},"end":{"line":42,"column":12}},{"start":{"line":42,"column":12},"end":{"line":42,"column":12}}]},"2":{"line":45,"type":"if","locations":[{"start":{"line":45,"column":16},"end":{"line":45,"column":16}},{"start":{"line":45,"column":16},"end":{"line":45,"column":16}}]},"3":{"line":53,"type":"if","locations":[{"start":{"line":53,"column":17},"end":{"line":53,"column":17}},{"start":{"line":53,"column":17},"end":{"line":53,"column":17}}]},"4":{"line":56,"type":"if","locations":[{"start":{"line":56,"column":16},"end":{"line":56,"column":16}},{"start":{"line":56,"column":16},"end":{"line":56,"column":16}}]}},"code":["(function () { YUI.add('aui-ace-autocomplete-velocity', function (A, NAME) {","","/**"," * The ACE Editor Velocity Plugin"," *"," * @module aui-ace-editor"," * @submodule aui-ace-autocomplete-velocity"," */","","var Lang = A.Lang,","","    MATCH_DIRECTIVES = 0,","    MATCH_VARIABLES = 1,","","    /**","     * A base class for Velocity plugin.","     *","     * @class A.AceEditor.AutoCompleteVelocity","     * @extends A.AceEditor.TemplateProcessor","     * @param {Object} config Object literal specifying widget configuration","     *     properties.","     * @constructor","     */","    Velocity = A.Base.create('aui-ace-autocomplete-velocity', A.AceEditor.TemplateProcessor, [], {","","        /**","         * Checks if the provided content contains directive or variable.","         *","         * @method getMatch","         * @param {String} content The content which should be traversed for","         *     matches","         * @return {Object} An Object which contains the following properties:","         * content - the found content","         * start - the start index of the match","         * type - match type, could be 0 (DIRECTIVES) or 1 (VARIABLES)","         */","        getMatch: function(content) {","            var instance = this,","                match,","                matchIndex;","","            if ((matchIndex = content.lastIndexOf('#')) >= 0) {","                content = content.substring(matchIndex);","","                if (instance.get('directivesMatcher').test(content)) {","                    match = {","                        content: content.substring(1),","                        start: matchIndex,","                        type: MATCH_DIRECTIVES","                    };","                }","            }","            else if ((matchIndex = content.lastIndexOf('$')) >= 0) {","                content = content.substring(matchIndex);","","                if (instance.get('variablesMatcher').test(content)) {","                    match = {","                        content: content.substring(1),","                        start: matchIndex,","                        type: MATCH_VARIABLES","                    };","                }","            }","","            return match;","        }","    }, {","","        /**","         * Static property which provides a string to identify the class.","         *","         * @property NAME","         * @type String","         * @static","         */","        NAME: 'aui-ace-autocomplete-velocity',","","        /**","         * Static property provides a string to identify the namespace.","         *","         * @property NS","         * @type String","         * @static","         */","        NS: 'aui-ace-autocomplete-velocity',","","        /**","         * Static property used to define the default attribute","         * configuration for the Velocity.","         *","         * @property ATTRS","         * @type Object","         * @static","         */","        ATTRS: {","","            /**","             * Contains the list of supported directives according to Velocity","             * specification.","             *","             * @attribute directives","             * @default","             * value: [","             *  'else',","             *  'elseif',","             *  'foreach',","             *  'if',","             *  'include',","             *  'macro',","             *  'parse',","             *  'set',","             *  'stop'","             *]","             * @type Array","             */","            directives: {","                validator: Lang.isArray,","                value: [","                    'else',","                    'elseif',","                    'foreach',","                    'if',","                    'include',","                    'macro',","                    'parse',","                    'set',","                    'stop'","               ]","            },","","            /**","             * Contains the regular expression which checks for directive.","             *","             * @attribute directivesMatcher","             * @default /#[\\w]*[^#]*$/","             */","            directivesMatcher: {","                setter: '_setRegexValue',","                value: /#[\\w]*[^#]*$/","            },","","            /**","             * The Editor in which the current instance is plugged.","             *","             * @attribute host","             * @type Object","             */","            host: {","                validator: Lang.isObject","            },","","            /**","             * Contains the supported variables.","             *","             * @attribute variables","             * @type Object","             */","            variables: {","                validator: Lang.isObject","            },","","            /**","             * Contains the regular expression which will check for variable","             * match.","             *","             * @attribute variablesMatcher","             * @default /\\$[\\w., ()\"]*(?:[^$]|\\\\\\$)*$/","             */","            variablesMatcher: {","                setter: '_setRegexValue',","                value: /\\$[\\w., ()\"]*(?:[^$]|\\\\\\$)*$/","            }","        }","    });","","A.AceEditor.AutoCompleteVelocity = Velocity;","","","}, '3.1.0-deprecated.52', {\"requires\": [\"aui-ace-autocomplete-templateprocessor\"]});","","}());"]};
}
var __cov_ybIZTk7y0b$fCJLAD9_Tgw = __coverage__['build/aui-ace-autocomplete-velocity/aui-ace-autocomplete-velocity.js'];
__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['1']++;YUI.add('aui-ace-autocomplete-velocity',function(A,NAME){__cov_ybIZTk7y0b$fCJLAD9_Tgw.f['1']++;__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['2']++;var Lang=A.Lang,MATCH_DIRECTIVES=0,MATCH_VARIABLES=1,Velocity=A.Base.create('aui-ace-autocomplete-velocity',A.AceEditor.TemplateProcessor,[],{getMatch:function(content){__cov_ybIZTk7y0b$fCJLAD9_Tgw.f['2']++;__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['3']++;var instance=this,match,matchIndex;__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['4']++;if((matchIndex=content.lastIndexOf('#'))>=0){__cov_ybIZTk7y0b$fCJLAD9_Tgw.b['1'][0]++;__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['5']++;content=content.substring(matchIndex);__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['6']++;if(instance.get('directivesMatcher').test(content)){__cov_ybIZTk7y0b$fCJLAD9_Tgw.b['2'][0]++;__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['7']++;match={content:content.substring(1),start:matchIndex,type:MATCH_DIRECTIVES};}else{__cov_ybIZTk7y0b$fCJLAD9_Tgw.b['2'][1]++;}}else{__cov_ybIZTk7y0b$fCJLAD9_Tgw.b['1'][1]++;__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['8']++;if((matchIndex=content.lastIndexOf('$'))>=0){__cov_ybIZTk7y0b$fCJLAD9_Tgw.b['3'][0]++;__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['9']++;content=content.substring(matchIndex);__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['10']++;if(instance.get('variablesMatcher').test(content)){__cov_ybIZTk7y0b$fCJLAD9_Tgw.b['4'][0]++;__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['11']++;match={content:content.substring(1),start:matchIndex,type:MATCH_VARIABLES};}else{__cov_ybIZTk7y0b$fCJLAD9_Tgw.b['4'][1]++;}}else{__cov_ybIZTk7y0b$fCJLAD9_Tgw.b['3'][1]++;}}__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['12']++;return match;}},{NAME:'aui-ace-autocomplete-velocity',NS:'aui-ace-autocomplete-velocity',ATTRS:{directives:{validator:Lang.isArray,value:['else','elseif','foreach','if','include','macro','parse','set','stop']},directivesMatcher:{setter:'_setRegexValue',value:/#[\w]*[^#]*$/},host:{validator:Lang.isObject},variables:{validator:Lang.isObject},variablesMatcher:{setter:'_setRegexValue',value:/\$[\w., ()"]*(?:[^$]|\\\$)*$/}}});__cov_ybIZTk7y0b$fCJLAD9_Tgw.s['13']++;A.AceEditor.AutoCompleteVelocity=Velocity;},'3.1.0-deprecated.52',{'requires':['aui-ace-autocomplete-templateprocessor']});
