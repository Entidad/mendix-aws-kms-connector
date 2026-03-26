import { reactExports, asPluginWidgets, selectTranslation } from '../index-Zvs2JQW8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Bmj-Y64R.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-N00bQbXV.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CmxZ8zD0.js';
import { AssociationProperty } from '../AssociationProperty-CbYQYTIs.js';
import '../F-L0MxFU-JT_HvXZp.js';
import { DatabaseObjectListProperty, ListAttributeProperty } from '../ListAttributeProperty--Cc-W_Q0.js';
import { DerivedUniqueIdProperty, AttributeProperty } from '../DerivedUniqueIdProperty-BRq0bBYj.js';
import { ListExpressionProperty } from '../ListExpressionProperty-ynAFxGRH.js';
import { FormGroup, ValidationProperty } from '../FormGroup-CpbXbBQG.js';
import { CheckBox } from '../CheckBox-XJcmBLS9.js';
import { ComboboxWidgetModule } from '../Combobox-nz5rT0V2.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CWN6xH5D.js';
import { DataView } from '../DataView-BVzZhbt7.js';
import { Div } from '../Div-CljrUJND.js';
import { Label } from '../Label-B2U079pO.js';
import { TextBox } from '../TextBox-CL-vBg5S.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-Bs18kg1_.js';
import '../InlineText-BkyswQUs.js';
import '../ScrollContainer-eFomK67V.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $ConditionalVisibilityWrapper, $Label, $FormGroup, $TextBox, $Combobox, $CheckBox, $ActionButton } = asPluginWidgets({ Div, DataView, ConditionalVisibilityWrapper, Label, FormGroup, TextBox, Combobox, CheckBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.Account_Edit.layoutGrid1",
      $widgetId: "p.Administration.Account_Edit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.Account_Edit.layoutGrid1$row0",
            $widgetId: "p.Administration.Account_Edit.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.Account_Edit.layoutGrid1$row0$column0",
                  $widgetId: "p.Administration.Account_Edit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Administration.Account_Edit.dataView1",
                        $widgetId: "p.Administration.Account_Edit.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.17",
                          "scope": "$Account",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": ""
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Administration.Account_Edit.label4$visibility",
                              $widgetId: "p.Administration.Account_Edit.label4$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "IsLocalUser" }] }, "args": { "currentObject": { "widget": "p.Administration.Account_Edit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Label,
                                  {
                                    key: "p.Administration.Account_Edit.label4",
                                    $widgetId: "p.Administration.Account_Edit.label4",
                                    class: "mx-name-label4 alert alert-warning",
                                    style: {
                                      "width": "100%"
                                    },
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Administration.Account_Edit.label4"
                                    }),
                                    caption: TextProperty({
                                      "value": "Mendix AppCloud users are provisioned by the AppCloudServices module, any changes made in this form might get overwritten. "
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.Account_Edit.textBox6$formGroup",
                              $widgetId: "p.Administration.Account_Edit.textBox6$formGroup",
                              class: "mx-name-textBox6 mx-textbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Administration.Account_Edit.textBox6",
                                    $widgetId: "p.Administration.Account_Edit.textBox6",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Administration.Account_Edit.dataView1",
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
                                      "widgetId": "p.Administration.Account_Edit.textBox6"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.Account_Edit.textBox6"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.Account_Edit.textBox6"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Administration.Account_Edit.textBox9$formGroup$visibility",
                              $widgetId: "p.Administration.Account_Edit.textBox9$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsLocalUser" }, "args": { "currentObject": { "widget": "p.Administration.Account_Edit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.Administration.Account_Edit.textBox9$formGroup",
                                    $widgetId: "p.Administration.Account_Edit.textBox9$formGroup",
                                    class: "mx-name-textBox9 mx-textbox",
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.Administration.Account_Edit.textBox9",
                                          $widgetId: "p.Administration.Account_Edit.textBox9",
                                          inputValue: AttributeProperty({
                                            "scope": "p.Administration.Account_Edit.dataView1",
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
                                            "widgetId": "p.Administration.Account_Edit.textBox9"
                                          })
                                        }
                                      )
                                    ],
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                                    }),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.Administration.Account_Edit.textBox9"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.Administration.Account_Edit.textBox9"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Administration.Account_Edit.textBox92$formGroup$visibility",
                              $widgetId: "p.Administration.Account_Edit.textBox92$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsLocalUser" }, "args": { "currentObject": { "widget": "p.Administration.Account_Edit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.Administration.Account_Edit.textBox92$formGroup",
                                    $widgetId: "p.Administration.Account_Edit.textBox92$formGroup",
                                    class: "mx-name-textBox92 mx-textbox",
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.Administration.Account_Edit.textBox92",
                                          $widgetId: "p.Administration.Account_Edit.textBox92",
                                          inputValue: AttributeProperty({
                                            "scope": "p.Administration.Account_Edit.dataView1",
                                            "path": "",
                                            "entity": "Administration.Account",
                                            "attribute": "Name",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
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
                                            "widgetId": "p.Administration.Account_Edit.textBox92"
                                          })
                                        }
                                      )
                                    ],
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "OpenID" }, "args": {} }
                                    }),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.Administration.Account_Edit.textBox92"
                                    }),
                                    width: 3,
                                    orientation: "horizontal",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.Administration.Account_Edit.textBox92"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.Account_Edit.comboBox2$formGroup",
                              $widgetId: "p.Administration.Account_Edit.comboBox2$formGroup",
                              class: "mx-name-comboBox2",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.Administration.Account_Edit.comboBox2",
                                    $widgetId: "p.Administration.Account_Edit.comboBox2",
                                    optionsSourceType: "association",
                                    attributeAssociation: AssociationProperty({
                                      "type": "ReferenceSet",
                                      "entity": "Administration.Account",
                                      "path": "",
                                      "attribute": "System.UserRoles",
                                      "endpointEntity": "System.UserRole",
                                      "selectableObjectsId": "p.0",
                                      "scope": "p.Administration.Account_Edit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.0",
                                      "entity": "System.UserRole",
                                      "scope": "p.Administration.Account_Edit.dataView1",
                                      "operationId": "51Gw/1Mt41mv4gMQClDVSA",
                                      "sort": [
                                        [
                                          "Name",
                                          "asc"
                                        ]
                                      ],
                                      "constraints": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] } } }
                                    }),
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "System.UserRole",
                                      "attribute": "Name",
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
                                      "widgetId": "p.Administration.Account_Edit.comboBox2"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "User role(s)" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.Account_Edit.comboBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.Account_Edit.comboBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.Account_Edit.checkBox1$formGroup",
                              $widgetId: "p.Administration.Account_Edit.checkBox1$formGroup",
                              class: "mx-name-checkBox1 mx-checkbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $CheckBox,
                                  {
                                    key: "p.Administration.Account_Edit.checkBox1",
                                    $widgetId: "p.Administration.Account_Edit.checkBox1",
                                    value: AttributeProperty({
                                      "scope": "p.Administration.Account_Edit.dataView1",
                                      "path": "",
                                      "entity": "Administration.Account",
                                      "attribute": "Blocked",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "text",
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Administration.Account_Edit.checkBox1"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Blocked" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.Account_Edit.checkBox1"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.Account_Edit.checkBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.Account_Edit.checkBox2$formGroup",
                              $widgetId: "p.Administration.Account_Edit.checkBox2$formGroup",
                              class: "mx-name-checkBox2 mx-checkbox",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $CheckBox,
                                  {
                                    key: "p.Administration.Account_Edit.checkBox2",
                                    $widgetId: "p.Administration.Account_Edit.checkBox2",
                                    value: AttributeProperty({
                                      "scope": "p.Administration.Account_Edit.dataView1",
                                      "path": "",
                                      "entity": "Administration.Account",
                                      "attribute": "Active",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "text",
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Administration.Account_Edit.checkBox2"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.Account_Edit.checkBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.Account_Edit.checkBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.Account_Edit.comboBox3$formGroup",
                              $widgetId: "p.Administration.Account_Edit.comboBox3$formGroup",
                              class: "mx-name-comboBox3",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.Administration.Account_Edit.comboBox3",
                                    $widgetId: "p.Administration.Account_Edit.comboBox3",
                                    optionsSourceType: "association",
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "Administration.Account",
                                      "path": "",
                                      "attribute": "System.User_Language",
                                      "endpointEntity": "System.Language",
                                      "selectableObjectsId": "p.1",
                                      "scope": "p.Administration.Account_Edit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.1",
                                      "entity": "System.Language",
                                      "scope": "p.Administration.Account_Edit.dataView1",
                                      "operationId": "YScMGxGv1liRxnN6lO9XTA",
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
                                      "dataSourceId": "p.1",
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
                                      "widgetId": "p.Administration.Account_Edit.comboBox3"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.Account_Edit.comboBox3"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.Account_Edit.comboBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Administration.Account_Edit.comboBox4$formGroup",
                              $widgetId: "p.Administration.Account_Edit.comboBox4$formGroup",
                              class: "mx-name-comboBox4",
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.Administration.Account_Edit.comboBox4",
                                    $widgetId: "p.Administration.Account_Edit.comboBox4",
                                    optionsSourceType: "association",
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "Administration.Account",
                                      "path": "",
                                      "attribute": "System.User_TimeZone",
                                      "endpointEntity": "System.TimeZone",
                                      "selectableObjectsId": "p.2",
                                      "scope": "p.Administration.Account_Edit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.2",
                                      "entity": "System.TimeZone",
                                      "scope": "p.Administration.Account_Edit.dataView1",
                                      "operationId": "GW88hk/lVFm2joATtd93dQ",
                                      "sort": [
                                        [
                                          "RawOffset",
                                          "asc"
                                        ],
                                        [
                                          "Description",
                                          "asc"
                                        ]
                                      ]
                                    }),
                                    optionsSourceAssociationCaptionType: "expression",
                                    optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "p.Administration.Account_Edit.comboBox4", "source": "object" } } },
                                      "dataSourceId": "p.2"
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
                                      "widgetId": "p.Administration.Account_Edit.comboBox4"
                                    })
                                  }
                                )
                              ],
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Time zone" }, "args": {} }
                              }),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Administration.Account_Edit.comboBox4"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Administration.Account_Edit.comboBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Administration.Account_Edit.microflowTrigger1$visibility",
                              $widgetId: "p.Administration.Account_Edit.microflowTrigger1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "IsLocalUser" }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.Administration.Account_Edit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Administration.Account_Edit.microflowTrigger1",
                                    $widgetId: "p.Administration.Account_Edit.microflowTrigger1",
                                    buttonId: "p.Administration.Account_Edit.microflowTrigger1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "Account": { "widget": "$Account", "source": "object" } }, "config": { "operationId": "c9sT0Imx11yBzg9faR8cIg", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                              key: "p.Administration.Account_Edit.saveButton1",
                              $widgetId: "p.Administration.Account_Edit.saveButton1",
                              buttonId: "p.Administration.Account_Edit.saveButton1",
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
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.Administration.Account_Edit.dataView1", "source": "object" } }, "config": { "operationId": "JzTrl+xFw1K23U3wra/kMg", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.Administration.Account_Edit.cancelButton1",
                              $widgetId: "p.Administration.Account_Edit.cancelButton1",
                              buttonId: "p.Administration.Account_Edit.cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "y064QJCz/F6JP2wSJP5Yjw", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Account"
]);
const classes = "";
const cancelChangesOperationId = "MH6leBcQHVmeFrI4eSQo0Q";
const closeButton = "p.Administration.Account_Edit.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
