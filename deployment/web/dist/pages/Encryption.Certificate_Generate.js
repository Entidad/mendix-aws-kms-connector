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
import { content as content$1 } from '../Encryption.PopupLayout-C-X1HKm_.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Encryption.Certificate_Generate.layoutGrid1",
      $widgetId: "p.Encryption.Certificate_Generate.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Encryption.Certificate_Generate.layoutGrid1$row0",
            $widgetId: "p.Encryption.Certificate_Generate.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Encryption.Certificate_Generate.layoutGrid1$row0$column0",
                  $widgetId: "p.Encryption.Certificate_Generate.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Encryption.Certificate_Generate.dataView1",
                        $widgetId: "p.Encryption.Certificate_Generate.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$PGPCertificate",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": ""
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Encryption.Certificate_Generate.textBox8$formGroup",
                              $widgetId: "p.Encryption.Certificate_Generate.textBox8$formGroup",
                              class: "mx-name-textBox8 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Encryption.Certificate_Generate.textBox8",
                                    $widgetId: "p.Encryption.Certificate_Generate.textBox8",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Encryption.Certificate_Generate.dataView1",
                                      "path": "",
                                      "entity": "Encryption.PGPCertificate",
                                      "attribute": "Reference",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["This field is required"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 100,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: true,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Encryption.Certificate_Generate.textBox8"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Reference" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Encryption.Certificate_Generate.textBox8"
                              }),
                              width: 4,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Encryption.Certificate_Generate.textBox8"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Encryption.Certificate_Generate.textBox9$formGroup",
                              $widgetId: "p.Encryption.Certificate_Generate.textBox9$formGroup",
                              class: "mx-name-textBox9 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Encryption.Certificate_Generate.textBox9",
                                    $widgetId: "p.Encryption.Certificate_Generate.textBox9",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Encryption.Certificate_Generate.dataView1",
                                      "path": "",
                                      "entity": "Encryption.PGPCertificate",
                                      "attribute": "EmailAddress",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["This field is required"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 50,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: true,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Encryption.Certificate_Generate.textBox9"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Email address" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Encryption.Certificate_Generate.textBox9"
                              }),
                              width: 4,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Encryption.Certificate_Generate.textBox9"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Encryption.Certificate_Generate.textBox6$formGroup",
                              $widgetId: "p.Encryption.Certificate_Generate.textBox6$formGroup",
                              class: "mx-name-textBox6 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Encryption.Certificate_Generate.textBox6",
                                    $widgetId: "p.Encryption.Certificate_Generate.textBox6",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Encryption.Certificate_Generate.dataView1",
                                      "path": "",
                                      "entity": "Encryption.PGPCertificate",
                                      "attribute": "PassPhrase_Plain",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["This field is required"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    mask: "",
                                    readOnlyStyle: "text",
                                    maxLength: 20,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: true,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Encryption.Certificate_Generate.textBox6"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Pass phrase  plain" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Encryption.Certificate_Generate.textBox6"
                              }),
                              width: 4,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Encryption.Certificate_Generate.textBox6"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Encryption.Certificate_Generate.actionButton1$visibility",
                              $widgetId: "p.Encryption.Certificate_Generate.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Encryption.Certificate_Generate.actionButton1",
                                    $widgetId: "p.Encryption.Certificate_Generate.actionButton1",
                                    buttonId: "p.Encryption.Certificate_Generate.actionButton1",
                                    class: "mx-name-actionButton1",
                                    renderType: "button",
                                    buttonClass: "btn-success",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Generate" }, "args": {} }
                                    }),
                                    tooltip: TextProperty({
                                      "value": ""
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Certificate_PrivateKey": { "widget": "$PGPCertificate", "source": "object" } }, "config": { "operationId": "9cprXO7fZVeqXvXW4PCpJw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                              key: "p.Encryption.Certificate_Generate.cancelButton1",
                              $widgetId: "p.Encryption.Certificate_Generate.cancelButton1",
                              buttonId: "p.Encryption.Certificate_Generate.cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "/ruWJhMzbVe9M8RgTFjfxQ", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Certificate"
]);
const classes = "page-form page-form-default";
const cancelChangesOperationId = "Cf0KC/gzf1mgf0dLMXYoPg";
const closeButton = "p.Encryption.Certificate_Generate.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
