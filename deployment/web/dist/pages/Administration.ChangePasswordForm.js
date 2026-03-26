import { reactExports, asPluginWidgets, selectTranslation } from '../index-Zvs2JQW8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Bmj-Y64R.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-N00bQbXV.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CmxZ8zD0.js';
import '../F-L0MxFU-JT_HvXZp.js';
import { AttributeProperty, DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-BRq0bBYj.js';
import { FormGroup, ValidationProperty } from '../FormGroup-CpbXbBQG.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CWN6xH5D.js';
import { DataView } from '../DataView-BVzZhbt7.js';
import { Div } from '../Div-CljrUJND.js';
import { TextBox } from '../TextBox-CL-vBg5S.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-Bs18kg1_.js';
import '../ScrollContainer-eFomK67V.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.ChangePasswordForm.layoutGrid1",
      $widgetId: "p.Administration.ChangePasswordForm.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.ChangePasswordForm.layoutGrid1$row0",
            $widgetId: "p.Administration.ChangePasswordForm.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.ChangePasswordForm.layoutGrid1$row0$column0",
                  $widgetId: "p.Administration.ChangePasswordForm.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Administration.ChangePasswordForm.dataView2",
                        $widgetId: "p.Administration.ChangePasswordForm.dataView2",
                        class: "mx-name-dataView2 form-horizontal",
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$AccountPasswordData",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": ""
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.ChangePasswordForm.textBox3$formGroup",
                              $widgetId: "p.Administration.ChangePasswordForm.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Administration.ChangePasswordForm.textBox3",
                                    $widgetId: "p.Administration.ChangePasswordForm.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Administration.ChangePasswordForm.dataView2",
                                      "path": "",
                                      "entity": "Administration.AccountPasswordData",
                                      "attribute": "NewPassword",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: true,
                                    placeholder: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 200,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: true,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Administration.ChangePasswordForm.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.ChangePasswordForm.textBox3"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.ChangePasswordForm.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.ChangePasswordForm.textBox1$formGroup",
                              $widgetId: "p.Administration.ChangePasswordForm.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Administration.ChangePasswordForm.textBox1",
                                    $widgetId: "p.Administration.ChangePasswordForm.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Administration.ChangePasswordForm.dataView2",
                                      "path": "",
                                      "entity": "Administration.AccountPasswordData",
                                      "attribute": "ConfirmPassword",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: true,
                                    placeholder: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 200,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: true,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Administration.ChangePasswordForm.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.ChangePasswordForm.textBox1"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.ChangePasswordForm.textBox1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Administration.ChangePasswordForm.microflowButton1$visibility",
                              $widgetId: "p.Administration.ChangePasswordForm.microflowButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Administration.ChangePasswordForm.microflowButton1",
                                    $widgetId: "p.Administration.ChangePasswordForm.microflowButton1",
                                    buttonId: "p.Administration.ChangePasswordForm.microflowButton1",
                                    class: "mx-name-microflowButton1",
                                    renderType: "button",
                                    buttonClass: "btn-success",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Change" }, "args": {} }
                                    }),
                                    tooltip: TextProperty({
                                      "value": ""
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "OqJcT3KEZ1icRHnSh2mc6Q", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.Administration.ChangePasswordForm.cancelButton1",
                              $widgetId: "p.Administration.ChangePasswordForm.cancelButton1",
                              buttonId: "p.Administration.ChangePasswordForm.cancelButton1",
                              class: "mx-name-cancelButton1",
                              renderType: "button",
                              buttonClass: "btn-default",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                              }),
                              tooltip: TextProperty({
                                "value": ""
                              }),
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "kyjZnXEquVCMW4/es+/TIA", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Change Password"
]);
const classes = "";
const cancelChangesOperationId = "UCrQkECcuVC4uf5WW+4LYg";
const closeButton = "p.Administration.ChangePasswordForm.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
