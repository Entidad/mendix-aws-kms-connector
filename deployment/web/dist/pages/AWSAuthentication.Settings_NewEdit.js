import { reactExports, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-B5BaoQn4.js';
import '../F-L0MxFU-CUzh3jjv.js';
import { AttributeProperty, DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import { FormGroup, ValidationProperty } from '../FormGroup-D4kp91rN.js';
import { ComboboxWidgetModule } from '../Combobox-CTuBdCKm.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { DataView } from '../DataView-Dip00PtH.js';
import { Div } from '../Div-o8iece77.js';
import { RadioButtonGroup } from '../RadioButtonGroup-CwTiR90n.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-14iW8_Cd.js';
import '../ScrollContainer-_UwHUp6v.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $Combobox, $RadioButtonGroup, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, Combobox, RadioButtonGroup, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AWSAuthentication.Settings_NewEdit.layoutGrid1",
      $widgetId: "p.AWSAuthentication.Settings_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AWSAuthentication.Settings_NewEdit.layoutGrid1$row0",
            $widgetId: "p.AWSAuthentication.Settings_NewEdit.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AWSAuthentication.Settings_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.AWSAuthentication.Settings_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AWSAuthentication.Settings_NewEdit.dataView6",
                        $widgetId: "p.AWSAuthentication.Settings_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$Settings",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": ""
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.AWSAuthentication.Settings_NewEdit.comboBox1$formGroup",
                              $widgetId: "p.AWSAuthentication.Settings_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.AWSAuthentication.Settings_NewEdit.comboBox1",
                                    $widgetId: "p.AWSAuthentication.Settings_NewEdit.comboBox1",
                                    source: "context",
                                    optionsSourceType: "enumeration",
                                    attributeEnumeration: AttributeProperty({
                                      "scope": "p.AWSAuthentication.Settings_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "AWSAuthentication.Settings",
                                      "attribute": "Region",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false
                                    }),
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceStaticDataSource: [],
                                    emptyOptionText: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    filterType: "contains",
                                    noOptionsText: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    showFooter: false,
                                    selectionMethod: "checkbox",
                                    selectedItemsStyle: "text",
                                    selectAllButton: false,
                                    selectAllButtonCaption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                    }),
                                    readOnlyStyle: "text",
                                    ariaRequired: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    clearButtonAriaLabel: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                    }),
                                    removeValueAriaLabel: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                    }),
                                    a11ySelectedValue: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                    }),
                                    a11yOptionsAvailable: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                    }),
                                    a11yInstructions: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                    }),
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    customEditability: "default",
                                    customEditabilityExpression: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                    }),
                                    ariaLabel: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                    }),
                                    selectedItemsSorting: "none",
                                    filterInputDebounceInterval: 200,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.AWSAuthentication.Settings_NewEdit.comboBox1"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "AWS Region" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AWSAuthentication.Settings_NewEdit.comboBox1"
                              }),
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AWSAuthentication.Settings_NewEdit.comboBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.AWSAuthentication.Settings_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p.AWSAuthentication.Settings_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p.AWSAuthentication.Settings_NewEdit.radioButtons1",
                                    $widgetId: "p.AWSAuthentication.Settings_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p.AWSAuthentication.Settings_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "AWSAuthentication.Settings",
                                      "attribute": "UseStaticCredentials",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "control",
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.AWSAuthentication.Settings_NewEdit.radioButtons1"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Use static credentials" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AWSAuthentication.Settings_NewEdit.radioButtons1"
                              }),
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AWSAuthentication.Settings_NewEdit.radioButtons1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.AWSAuthentication.Settings_NewEdit.actionButton1$visibility",
                              $widgetId: "p.AWSAuthentication.Settings_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AWSAuthentication.Settings_NewEdit.actionButton1",
                                    $widgetId: "p.AWSAuthentication.Settings_NewEdit.actionButton1",
                                    buttonId: "p.AWSAuthentication.Settings_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
                                    renderType: "button",
                                    buttonClass: "btn-primary",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                    }),
                                    tooltip: TextProperty({
                                      "value": ""
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Settings": { "widget": "$Settings", "source": "object" } }, "config": { "operationId": "6v8WF7Nt7FWGBq6KLxA0hg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.AWSAuthentication.Settings_NewEdit.actionButton2",
                              $widgetId: "p.AWSAuthentication.Settings_NewEdit.actionButton2",
                              buttonId: "p.AWSAuthentication.Settings_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
                              renderType: "button",
                              buttonClass: "btn-default",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                              }),
                              tooltip: TextProperty({
                                "value": ""
                              }),
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "UC6XpNoZ9lazCvGNBogZJQ", "closePage": true }, "disabledDuringExecution": true },
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
  "Configure AWS Authentication Settings"
]);
const classes = "";
const cancelChangesOperationId = "PKokOKqIq1exDbFbwo8o2A";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
