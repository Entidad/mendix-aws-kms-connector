import { reactExports, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-B5BaoQn4.js';
import '../F-L0MxFU-CUzh3jjv.js';
import { DerivedUniqueIdProperty, AttributeProperty } from '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import { FormGroup, ValidationProperty } from '../FormGroup-D4kp91rN.js';
import { WebIconProperty } from '../WebIconProperty-znHzcziz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { DataView } from '../DataView-Dip00PtH.js';
import { Label } from '../Label-B5T1vOlN.js';
import { Table, TableRow } from '../TableRow-Bya8LUrS.js';
import { TextBox } from '../TextBox-Defpuaw0.js';
import { content as content$1 } from '../Encryption.PopupLayout-DsrJrtAU.js';
import '../InlineText-BmGDgYXy.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $Table, $TableRow, $Label, $FormGroup, $TextBox, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ DataView, Table, TableRow, Label, FormGroup, TextBox, ActionButton, ConditionalVisibilityWrapper });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.Encryption.SavePasswordExample_NewEdit.dataView",
      $widgetId: "p.Encryption.SavePasswordExample_NewEdit.dataView",
      class: "mx-name-dataView form-vertical",
      object: AssociationObjectProperty({
        "dataSourceId": "p.6",
        "scope": "$ExampleConfiguration",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": ""
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $Table,
          {
            key: "p.Encryption.SavePasswordExample_NewEdit.table",
            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.table",
            class: "mx-name-table",
            autoWidth: false,
            columnWidths: [
              "25%",
              "75%"
            ],
            rows: [
              /* @__PURE__ */ React.createElement(
                $TableRow,
                {
                  key: "p.Encryption.SavePasswordExample_NewEdit.table$row0",
                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.table$row0",
                  class: "",
                  cells: [
                    {
                      "header": true,
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $Label,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.label2",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.label2",
                            class: "mx-name-label2",
                            id: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label2"
                            }),
                            caption: TextProperty({
                              "value": "Title"
                            })
                          }
                        )
                      ]
                    },
                    {
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $FormGroup,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.textBox2$formGroup",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox2$formGroup",
                            class: "mx-name-textBox2 mx-textbox",
                            control: [
                              /* @__PURE__ */ React.createElement(
                                $TextBox,
                                {
                                  key: "p.Encryption.SavePasswordExample_NewEdit.textBox2",
                                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox2",
                                  inputValue: AttributeProperty({
                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                    "path": "",
                                    "entity": "Encryption.ExampleConfiguration",
                                    "attribute": "Title",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                    "isList": false,
                                    "validation": null,
                                    "formatting": {}
                                  }),
                                  isPassword: false,
                                  placeholder: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  mask: "",
                                  readOnlyStyle: "text",
                                  maxLength: 200,
                                  autocomplete: "on",
                                  submitWhileEditing: false,
                                  submitDelay: 300,
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                                  })
                                }
                              )
                            ],
                            labelFor: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                            }),
                            orientation: "vertical",
                            hasError: ValidationProperty({
                              "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                            })
                          }
                        )
                      ]
                    }
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $TableRow,
                {
                  key: "p.Encryption.SavePasswordExample_NewEdit.table$row1",
                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.table$row1",
                  class: "",
                  cells: [
                    {
                      "header": true,
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $Label,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.label3",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.label3",
                            class: "mx-name-label3",
                            id: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label3"
                            }),
                            caption: TextProperty({
                              "value": "Username"
                            })
                          }
                        )
                      ]
                    },
                    {
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $FormGroup,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.textBox3$formGroup",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox3$formGroup",
                            class: "mx-name-textBox3 mx-textbox",
                            control: [
                              /* @__PURE__ */ React.createElement(
                                $TextBox,
                                {
                                  key: "p.Encryption.SavePasswordExample_NewEdit.textBox3",
                                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox3",
                                  inputValue: AttributeProperty({
                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                    "path": "",
                                    "entity": "Encryption.ExampleConfiguration",
                                    "attribute": "Username",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                    "isList": false,
                                    "validation": null,
                                    "formatting": {}
                                  }),
                                  isPassword: false,
                                  placeholder: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  mask: "",
                                  readOnlyStyle: "text",
                                  maxLength: 200,
                                  autocomplete: "on",
                                  submitWhileEditing: false,
                                  submitDelay: 300,
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                                  })
                                }
                              )
                            ],
                            labelFor: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                            }),
                            orientation: "vertical",
                            hasError: ValidationProperty({
                              "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                            })
                          }
                        )
                      ]
                    }
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $TableRow,
                {
                  key: "p.Encryption.SavePasswordExample_NewEdit.table$row2",
                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.table$row2",
                  class: "",
                  cells: [
                    {
                      "header": true,
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $Label,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.label",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.label",
                            class: "mx-name-label",
                            id: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label"
                            }),
                            caption: TextProperty({
                              "value": "Password"
                            })
                          }
                        )
                      ]
                    },
                    {
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $FormGroup,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.textBox$formGroup",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox$formGroup",
                            class: "mx-name-textBox mx-textbox",
                            control: [
                              /* @__PURE__ */ React.createElement(
                                $TextBox,
                                {
                                  key: "p.Encryption.SavePasswordExample_NewEdit.textBox",
                                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox",
                                  inputValue: AttributeProperty({
                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                    "path": "",
                                    "entity": "Encryption.ExampleConfiguration",
                                    "attribute": "Password",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                    "isList": false,
                                    "validation": null,
                                    "formatting": {}
                                  }),
                                  isPassword: false,
                                  placeholder: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  mask: "",
                                  readOnlyStyle: "text",
                                  maxLength: 200,
                                  autocomplete: "on",
                                  submitWhileEditing: false,
                                  submitDelay: 300,
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                                  })
                                }
                              )
                            ],
                            labelFor: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                            }),
                            orientation: "vertical",
                            hasError: ValidationProperty({
                              "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                            })
                          }
                        )
                      ]
                    }
                  ]
                }
              )
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p.Encryption.SavePasswordExample_NewEdit.cancelButton1",
            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.cancelButton1",
            buttonId: "p.Encryption.SavePasswordExample_NewEdit.cancelButton1",
            class: "mx-name-cancelButton1",
            renderType: "button",
            buttonClass: "btn-default",
            caption: ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
            }),
            tooltip: TextProperty({
              "value": ""
            }),
            icon: WebIconProperty({
              "icon": { "type": "image", "iconUrl": "img/System$Images$Cancel.png" }
            }),
            action: ActionProperty({
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "2L1As/yHvlaf7Bm7ixtolg", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p.Encryption.SavePasswordExample_NewEdit.actionButton1$visibility",
            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.actionButton1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p.Encryption.SavePasswordExample_NewEdit.actionButton1",
                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.actionButton1",
                  buttonId: "p.Encryption.SavePasswordExample_NewEdit.actionButton1",
                  class: "mx-name-actionButton1",
                  renderType: "button",
                  buttonClass: "btn-default",
                  caption: ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                  }),
                  tooltip: TextProperty({
                    "value": ""
                  }),
                  icon: WebIconProperty({
                    "icon": { "type": "image", "iconUrl": "img/System$Images$Microflow.png" }
                  }),
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "ExampleConfiguration": { "widget": "$ExampleConfiguration", "source": "object" } }, "config": { "operationId": "/RMg9PeZlV2/p/Ath7HTeg", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
]);
const title = selectTranslation([
  "Edit Example Configuration"
]);
const classes = "mx-window-view";
const cancelChangesOperationId = "V5oEAUGiRFyq96trUuLbDQ";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
