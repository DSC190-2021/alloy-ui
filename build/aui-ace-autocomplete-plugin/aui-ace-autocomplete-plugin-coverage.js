if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-ace-autocomplete-plugin/aui-ace-autocomplete-plugin.js']) {
   __coverage__['build/aui-ace-autocomplete-plugin/aui-ace-autocomplete-plugin.js'] = {"path":"build/aui-ace-autocomplete-plugin/aui-ace-autocomplete-plugin.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":58}}},"2":{"name":"ACListPlugin","line":15,"loc":{"start":{"line":15,"column":0},"end":{"line":15,"column":30}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":33,"column":81}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":22}},"3":{"start":{"line":15,"column":0},"end":{"line":21,"column":1}},"4":{"start":{"line":16,"column":4},"end":{"line":18,"column":5}},"5":{"start":{"line":17,"column":8},"end":{"line":17,"column":29}},"6":{"start":{"line":20,"column":4},"end":{"line":20,"column":63}},"7":{"start":{"line":23,"column":0},"end":{"line":27,"column":3}},"8":{"start":{"line":29,"column":0},"end":{"line":29,"column":38}},"9":{"start":{"line":30,"column":0},"end":{"line":30,"column":42}}},"branchMap":{"1":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":4},"end":{"line":16,"column":4}},{"start":{"line":16,"column":4},"end":{"line":16,"column":4}}]},"2":{"line":16,"type":"binary-expr","locations":[{"start":{"line":16,"column":8},"end":{"line":16,"column":22}},{"start":{"line":16,"column":26},"end":{"line":16,"column":49}}]}},"code":["(function () { YUI.add('aui-ace-autocomplete-plugin', function (A, NAME) {","","var Plugin = A.Plugin;","","/**"," * Binds an AutoCompleteList instance to a Node instance."," *"," * @module aui-ace-editor"," * @submodule aui-ace-autocomplete-plugin"," *"," * @class A.Plugin.AceAutoCompleteList"," * @extends A.AceEditor.AutoCompleteList"," */","","function ACListPlugin(config) {","    if (!config.render && config.render !== false) {","        config.render = true;","    }","","    ACListPlugin.superclass.constructor.apply(this, arguments);","}","","A.extend(ACListPlugin, A.AceEditor.AutoCompleteList, {}, {","    CSS_PREFIX: 'ace-autocomplete',","    NAME: 'ace-autocomplete-plugin',","    NS: 'ace-autocomplete-plugin'","});","","Plugin.AceAutoComplete = ACListPlugin;","Plugin.AceAutoCompleteList = ACListPlugin;","","","}, '3.1.0-deprecated.60', {\"requires\": [\"aui-ace-autocomplete-list\", \"plugin\"]});","","}());"]};
}
var __cov_Wj$Jv6jjs80G93k1U$gcUA = __coverage__['build/aui-ace-autocomplete-plugin/aui-ace-autocomplete-plugin.js'];
__cov_Wj$Jv6jjs80G93k1U$gcUA.s['1']++;YUI.add('aui-ace-autocomplete-plugin',function(A,NAME){__cov_Wj$Jv6jjs80G93k1U$gcUA.f['1']++;__cov_Wj$Jv6jjs80G93k1U$gcUA.s['2']++;var Plugin=A.Plugin;__cov_Wj$Jv6jjs80G93k1U$gcUA.s['3']++;function ACListPlugin(config){__cov_Wj$Jv6jjs80G93k1U$gcUA.f['2']++;__cov_Wj$Jv6jjs80G93k1U$gcUA.s['4']++;if((__cov_Wj$Jv6jjs80G93k1U$gcUA.b['2'][0]++,!config.render)&&(__cov_Wj$Jv6jjs80G93k1U$gcUA.b['2'][1]++,config.render!==false)){__cov_Wj$Jv6jjs80G93k1U$gcUA.b['1'][0]++;__cov_Wj$Jv6jjs80G93k1U$gcUA.s['5']++;config.render=true;}else{__cov_Wj$Jv6jjs80G93k1U$gcUA.b['1'][1]++;}__cov_Wj$Jv6jjs80G93k1U$gcUA.s['6']++;ACListPlugin.superclass.constructor.apply(this,arguments);}__cov_Wj$Jv6jjs80G93k1U$gcUA.s['7']++;A.extend(ACListPlugin,A.AceEditor.AutoCompleteList,{},{CSS_PREFIX:'ace-autocomplete',NAME:'ace-autocomplete-plugin',NS:'ace-autocomplete-plugin'});__cov_Wj$Jv6jjs80G93k1U$gcUA.s['8']++;Plugin.AceAutoComplete=ACListPlugin;__cov_Wj$Jv6jjs80G93k1U$gcUA.s['9']++;Plugin.AceAutoCompleteList=ACListPlugin;},'3.1.0-deprecated.60',{'requires':['aui-ace-autocomplete-list','plugin']});
