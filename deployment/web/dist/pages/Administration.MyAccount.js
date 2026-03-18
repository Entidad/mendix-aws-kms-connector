import { reactExports, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-B5BaoQn4.js';
import { AssociationProperty } from '../AssociationProperty-WAySTpZ7.js';
import '../F-L0MxFU-CUzh3jjv.js';
import { DatabaseObjectListProperty, ListAttributeProperty } from '../ListAttributeProperty-CXLDrwR-.js';
import { AttributeProperty, DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import { FormGroup, ValidationProperty } from '../FormGroup-D4kp91rN.js';
import { ComboboxWidgetModule } from '../Combobox-CTuBdCKm.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { DataView } from '../DataView-Dip00PtH.js';
import { Div } from '../Div-o8iece77.js';
import { TextBox } from '../TextBox-Defpuaw0.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-14iW8_Cd.js';
import '../ScrollContainer-_UwHUp6v.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Combobox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.MyAccount.layoutGrid1",
      $widgetId: "p.Administration.MyAccount.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.MyAccount.layoutGrid1$row0",
            $widgetId: "p.Administration.MyAccount.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.MyAccount.layoutGrid1$row0$column0",
                  $widgetId: "p.Administration.MyAccount.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Administration.MyAccount.dataView1",
                        $widgetId: "p.Administration.MyAccount.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.15",
                          "scope": "$Account",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": ""
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.MyAccount.textBox2$formGroup",
                              $widgetId: "p.Administration.MyAccount.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Administration.MyAccount.textBox2",
                                    $widgetId: "p.Administration.MyAccount.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Administration.MyAccount.dataView1",
                                      "path": "",
                                      "entity": "Administration.Account",
                                      "attribute": "FullName",
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
                                      "widgetId": "p.Administration.MyAccount.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.MyAccount.textBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.MyAccount.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.MyAccount.textBox5$formGroup",
                              $widgetId: "p.Administration.MyAccount.textBox5$formGroup",
                              class: "mx-name-textBox5 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Administration.MyAccount.textBox5",
                                    $widgetId: "p.Administration.MyAccount.textBox5",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Administration.MyAccount.dataView1",
                                      "path": "",
                                      "entity": "Administration.Account",
                                      "attribute": "Name",
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
                                    maxLength: 100,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Administration.MyAccount.textBox5"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.MyAccount.textBox5"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.MyAccount.textBox5"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.MyAccount.comboBox3$formGroup",
                              $widgetId: "p.Administration.MyAccount.comboBox3$formGroup",
                              class: "mx-name-comboBox3",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.Administration.MyAccount.comboBox3",
                                    $widgetId: "p.Administration.MyAccount.comboBox3",
                                    optionsSourceType: "association",
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "Administration.Account",
                                      "path": "",
                                      "attribute": "System.User_Language",
                                      "endpointEntity": "System.Language",
                                      "selectableObjectsId": "p.0",
                                      "scope": "p.Administration.MyAccount.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.0",
                                      "entity": "System.Language",
                                      "scope": "p.Administration.MyAccount.dataView1",
                                      "operationId": "9vlz1LHf7F6pJ910IlekiQ",
                                      "sort": []
                                    }),
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "System.Language",
                                      "attribute": "Description",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p.0",
                                      "isList": false
                                    }),
                                    emptyOptionText: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    filterType: "contains",
                                    noOptionsText: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    showFooter: false,
                                    selectionMethod: "checkbox",
                                    selectedItemsStyle: "text",
                                    selectAllButton: false,
                                    selectAllButtonCaption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                    }),
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
                                    source: "context",
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceStaticDataSource: [],
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    readOnlyStyle: "text",
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
                                      "widgetId": "p.Administration.MyAccount.comboBox3"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.MyAccount.comboBox3"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.MyAccount.comboBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Administration.MyAccount.microflowTrigger1$visibility",
                              $widgetId: "p.Administration.MyAccount.microflowTrigger1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Administration.MyAccount.microflowTrigger1",
                                    $widgetId: "p.Administration.MyAccount.microflowTrigger1",
                                    buttonId: "p.Administration.MyAccount.microflowTrigger1",
                                    class: "mx-name-microflowTrigger1 spacing-outer-bottom-medium",
                                    renderType: "button",
                                    buttonClass: "btn-default",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                                    }),
                                    tooltip: TextProperty({
                                      "value": ""
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Account": { "widget": "$Account", "source": "object" } }, "config": { "operationId": "0mpKpuWphlqXE5BlEIbdug", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                      "abortOnServerValidation": true
                                    })
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
                              key: "p.Administration.MyAccount.saveButton1",
                              $widgetId: "p.Administration.MyAccount.saveButton1",
                              buttonId: "p.Administration.MyAccount.saveButton1",
                              class: "mx-name-saveButton1",
                              renderType: "button",
                              buttonClass: "btn-success",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                              }),
                              tooltip: TextProperty({
                                "value": ""
                              }),
                              action: ActionProperty({
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.Administration.MyAccount.dataView1", "source": "object" } }, "config": { "operationId": "8fL15qlN1F6TagIFMDiN/w", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.Administration.MyAccount.cancelButton1",
                              $widgetId: "p.Administration.MyAccount.cancelButton1",
                              buttonId: "p.Administration.MyAccount.cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "GubhPCihh12OWR8HLj/7cw", "closePage": true }, "disabledDuringExecution": true },
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
  "My Account"
]);
const classes = "";
const cancelChangesOperationId = "eWg/7jBk0VOSGA8ybx+UQg";
const closeButton = "p.Administration.MyAccount.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
