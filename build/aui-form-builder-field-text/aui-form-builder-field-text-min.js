YUI.add("aui-form-builder-field-text",function(e,t){e.FormBuilderFieldText=e.Base.create("form-builder-field-text",e.FormFieldText,[e.FormBuilderFieldBase],{_fillSettings:function(){this._settings.push({attrName:"required",editor:new e.BooleanDataEditor({label:"Required question"})},{attrName:"type",editor:new e.RadioGroupDataEditor({inlineElements:!0,radioLabels:["Singleline","Multiline"],label:"My text field type is:"})})},_fillAdvancedSettings:function(){this._advancedSettings.push({attrName:"name",footerLabel:"Name",editor:new e.TextDataEditor({label:"Name"})},{attrName:"placeholder",editor:new e.TextDataEditor({label:"Placeholder"})})}})},"3.0.3-deprecated.88",{requires:["aui-boolean-data-editor","aui-radio-group-data-editor","aui-form-builder-field-base","aui-form-field-text"]});
