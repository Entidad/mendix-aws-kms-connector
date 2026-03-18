import { reactExports, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-B5BaoQn4.js';
import '../F-L0MxFU-CUzh3jjv.js';
import { AttributeProperty, DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import { FormGroup, ValidationProperty } from '../FormGroup-D4kp91rN.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { DataView } from '../DataView-Dip00PtH.js';
import { Div } from '../Div-o8iece77.js';
import { TextBox } from '../TextBox-Defpuaw0.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-14iW8_Cd.js';
import '../ScrollContainer-_UwHUp6v.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.ChangeMyPasswordForm.layoutGrid1",
      $widgetId: "p.Administration.ChangeMyPasswordForm.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.ChangeMyPasswordForm.layoutGrid1$row0",
            $widgetId: "p.Administration.ChangeMyPasswordForm.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.ChangeMyPasswordForm.layoutGrid1$row0$column0",
                  $widgetId: "p.Administration.ChangeMyPasswordForm.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Administration.ChangeMyPasswordForm.dataView2",
                        $widgetId: "p.Administration.ChangeMyPasswordForm.dataView2",
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
                              key: "p.Administration.ChangeMyPasswordForm.textBox2$formGroup",
                              $widgetId: "p.Administration.ChangeMyPasswordForm.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Administration.ChangeMyPasswordForm.textBox2",
                                    $widgetId: "p.Administration.ChangeMyPasswordForm.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Administration.ChangeMyPasswordForm.dataView2",
                                      "path": "",
                                      "entity": "Administration.AccountPasswordData",
                                      "attribute": "OldPassword",
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
                                      "widgetId": "p.Administration.ChangeMyPasswordForm.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Old password" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.ChangeMyPasswordForm.textBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.ChangeMyPasswordForm.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.ChangeMyPasswordForm.textBox3$formGroup",
                              $widgetId: "p.Administration.ChangeMyPasswordForm.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Administration.ChangeMyPasswordForm.textBox3",
                                    $widgetId: "p.Administration.ChangeMyPasswordForm.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Administration.ChangeMyPasswordForm.dataView2",
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
                                      "widgetId": "p.Administration.ChangeMyPasswordForm.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.ChangeMyPasswordForm.textBox3"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.ChangeMyPasswordForm.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.ChangeMyPasswordForm.textBox1$formGroup",
                              $widgetId: "p.Administration.ChangeMyPasswordForm.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Administration.ChangeMyPasswordForm.textBox1",
                                    $widgetId: "p.Administration.ChangeMyPasswordForm.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Administration.ChangeMyPasswordForm.dataView2",
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
                                      "widgetId": "p.Administration.ChangeMyPasswordForm.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.ChangeMyPasswordForm.textBox1"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.ChangeMyPasswordForm.textBox1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Administration.ChangeMyPasswordForm.microflowButton1$visibility",
                              $widgetId: "p.Administration.ChangeMyPasswordForm.microflowButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Administration.ChangeMyPasswordForm.microflowButton1",
                                    $widgetId: "p.Administration.ChangeMyPasswordForm.microflowButton1",
                                    buttonId: "p.Administration.ChangeMyPasswordForm.microflowButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "cszkh1q6pVCrkQ6MSmePaw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                              key: "p.Administration.ChangeMyPasswordForm.cancelButton1",
                              $widgetId: "p.Administration.ChangeMyPasswordForm.cancelButton1",
                              buttonId: "p.Administration.ChangeMyPasswordForm.cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "CUKRapsprFKQL38GdKiNGQ", "closePage": true }, "disabledDuringExecution": true },
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
const cancelChangesOperationId = "Pz+YyVupkVy+QTB2Bmnn4A";
const closeButton = "p.Administration.ChangeMyPasswordForm.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
