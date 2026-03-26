import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-Zvs2JQW8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Bmj-Y64R.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-N00bQbXV.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CmxZ8zD0.js';
import '../F-L0MxFU-JT_HvXZp.js';
import { DerivedUniqueIdProperty, AttributeProperty } from '../DerivedUniqueIdProperty-BRq0bBYj.js';
import { FormGroup, ValidationProperty } from '../FormGroup-CpbXbBQG.js';
import { WebIconProperty } from '../WebIconProperty-CknoYWS-.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CWN6xH5D.js';
import { DataView } from '../DataView-BVzZhbt7.js';
import '../Fragment-CIZB4BT5.js';
import { Label } from '../Label-B2U079pO.js';
import { Table, TableRow } from '../TableRow-JOm8_xjN.js';
import { TextBox } from '../TextBox-CL-vBg5S.js';
import { content as content$1 } from '../Encryption.PopupLayout-C-X1HKm_.js';
import '../InlineText-BkyswQUs.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $Fragment, $Table, $TableRow, $Label, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, Fragment, Table, TableRow, Label, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.Encryption.ChangePassword.dataView",
      $widgetId: "p.Encryption.ChangePassword.dataView",
      class: "mx-name-dataView form-vertical",
      object: AssociationObjectProperty({
        "dataSourceId": "p.6",
        "scope": "$PasswordData",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": ""
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $Fragment,
          {
            key: "p.Encryption.ChangePassword.snippetCallWidget1",
            $widgetId: "p.Encryption.ChangePassword.snippetCallWidget1",
            content: [
              /* @__PURE__ */ React.createElement(
                $Table,
                {
                  key: "p.Encryption.ChangePasswordSnippet.table",
                  $widgetId: "p.Encryption.ChangePasswordSnippet.table",
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
                        key: "p.Encryption.ChangePassword.table$row0",
                        $widgetId: "p.Encryption.ChangePassword.table$row0",
                        class: "",
                        cells: [
                          {
                            "header": true,
                            "class": "",
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Label,
                                {
                                  key: "p.Encryption.ChangePasswordSnippet.label2",
                                  $widgetId: "p.Encryption.ChangePasswordSnippet.label2",
                                  class: "mx-name-label2",
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ChangePasswordSnippet.label2"
                                  }),
                                  caption: TextProperty({
                                    "value": "New password"
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
                                  key: "p.Encryption.ChangePasswordSnippet.textBox2$formGroup",
                                  $widgetId: "p.Encryption.ChangePasswordSnippet.textBox2$formGroup",
                                  class: "mx-name-textBox2 mx-textbox",
                                  control: [
                                    /* @__PURE__ */ React.createElement(
                                      $TextBox,
                                      {
                                        key: "p.Encryption.ChangePasswordSnippet.textBox2",
                                        $widgetId: "p.Encryption.ChangePasswordSnippet.textBox2",
                                        inputValue: AttributeProperty({
                                          "scope": "$PasswordData",
                                          "path": "",
                                          "entity": "Encryption.PasswordData",
                                          "attribute": "NewPassword",
                                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                          "isList": false,
                                          "validation": null,
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
                                        id: DerivedUniqueIdProperty({
                                          "widgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
                                        })
                                      }
                                    )
                                  ],
                                  labelFor: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
                                  }),
                                  orientation: "vertical",
                                  hasError: ValidationProperty({
                                    "inputWidgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
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
                        key: "p.Encryption.ChangePassword.table$row1",
                        $widgetId: "p.Encryption.ChangePassword.table$row1",
                        class: "",
                        cells: [
                          {
                            "header": true,
                            "class": "",
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Label,
                                {
                                  key: "p.Encryption.ChangePasswordSnippet.label",
                                  $widgetId: "p.Encryption.ChangePasswordSnippet.label",
                                  class: "mx-name-label",
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ChangePasswordSnippet.label"
                                  }),
                                  caption: TextProperty({
                                    "value": "Confirm password"
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
                                  key: "p.Encryption.ChangePasswordSnippet.textBox$formGroup",
                                  $widgetId: "p.Encryption.ChangePasswordSnippet.textBox$formGroup",
                                  class: "mx-name-textBox mx-textbox",
                                  control: [
                                    /* @__PURE__ */ React.createElement(
                                      $TextBox,
                                      {
                                        key: "p.Encryption.ChangePasswordSnippet.textBox",
                                        $widgetId: "p.Encryption.ChangePasswordSnippet.textBox",
                                        inputValue: AttributeProperty({
                                          "scope": "$PasswordData",
                                          "path": "",
                                          "entity": "Encryption.PasswordData",
                                          "attribute": "ConfirmPassword",
                                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                          "isList": false,
                                          "validation": null,
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
                                        id: DerivedUniqueIdProperty({
                                          "widgetId": "p.Encryption.ChangePasswordSnippet.textBox"
                                        })
                                      }
                                    )
                                  ],
                                  labelFor: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ChangePasswordSnippet.textBox"
                                  }),
                                  orientation: "vertical",
                                  hasError: ValidationProperty({
                                    "inputWidgetId": "p.Encryption.ChangePasswordSnippet.textBox"
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
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p.Encryption.ChangePassword.actionButton1$visibility",
            $widgetId: "p.Encryption.ChangePassword.actionButton1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p.Encryption.ChangePassword.actionButton1",
                  $widgetId: "p.Encryption.ChangePassword.actionButton1",
                  buttonId: "p.Encryption.ChangePassword.actionButton1",
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
                    "icon": { "type": "image", "iconUrl": "img/System$Images$Save.png" }
                  }),
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "PasswordData": { "widget": "$PasswordData", "source": "object" } }, "config": { "operationId": "tMsbMSTsy1iIgGDIFxzeBw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
            key: "p.Encryption.ChangePassword.cancelButton1",
            $widgetId: "p.Encryption.ChangePassword.cancelButton1",
            buttonId: "p.Encryption.ChangePassword.cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "A9FKjd3kkFeU//+ceoNbAw", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Page Title"
]);
const classes = "mx-window-view";
const cancelChangesOperationId = "yJ+b6Qw9S1SEtW8BK3TQ0Q";
const closeButton = "p.Encryption.ChangePassword.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
