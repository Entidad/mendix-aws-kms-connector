import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-B5BaoQn4.js';
import '../F-L0MxFU-CUzh3jjv.js';
import { AttributeProperty, DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import { FormGroup, ValidationProperty } from '../FormGroup-D4kp91rN.js';
import { WebIconProperty } from '../WebIconProperty-znHzcziz.js';
import { CheckBox } from '../CheckBox-3a16XFTn.js';
import { ComboboxWidgetModule } from '../Combobox-CTuBdCKm.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { Container } from '../Image-C3uz38Dk.js';
import { DataView } from '../DataView-Dip00PtH.js';
import { Div } from '../Div-o8iece77.js';
import '../Fragment-686zUVRb.js';
import { Text } from '../Text-DuQAvxSA.js';
import { TextBox } from '../TextBox-Defpuaw0.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-Cr51Glyx.js';
import '../index-D_nCuE-Y.js';
import '../InlineText-BmGDgYXy.js';
import '../AssociationProperty-WAySTpZ7.js';
import '../ListAttributeProperty-CXLDrwR-.js';
import '../Atlas_Core.OCH_UpdateUserLanguage-CYtkbF7W.js';
import '../index-fpKsB4fe.js';
import '../CJS8msnl-qQy3fsQc.js';
import '../ScrollContainer-_UwHUp6v.js';
import '../WebStaticImageProperty-BHhgotvB.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $ActionButton, $DataView, $Fragment, $FormGroup, $CheckBox, $Text, $ConditionalVisibilityWrapper, $Container, $TextBox, $Combobox } = asPluginWidgets({ Div, ActionButton, DataView, Fragment, FormGroup, CheckBox, Text, ConditionalVisibilityWrapper, Container, TextBox, Combobox });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2",
      $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row0",
            $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row0$column0",
                  $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p.AWSKMSConnector.AWS_KMS_Credentials.actionButton1",
                        $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.actionButton1",
                        buttonId: "p.AWSKMSConnector.AWS_KMS_Credentials.actionButton1",
                        class: "mx-name-actionButton1 pull-right spacing-outer-bottom-medium",
                        renderType: "link",
                        role: "button",
                        buttonClass: "btn-default",
                        caption: ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": "Close page" }, "args": {} }
                        }),
                        tooltip: TextProperty({
                          "value": ""
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "glyph", "iconClass": "glyphicon-eye-close" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                          "abortOnServerValidation": true
                        })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row1",
            $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row1",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row1$column0",
                  $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row1$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AWSKMSConnector.AWS_KMS_Credentials.dataView1",
                        $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.18",
                          "scope": "$AWSKMSCredentialHelper",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": ""
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Fragment,
                            {
                              key: "p.AWSKMSConnector.AWS_KMS_Credentials.snippetCall1",
                              $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.snippetCall1",
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.layoutGrid1",
                                    $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.layoutGrid1",
                                    class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row0",
                                          $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row0",
                                          class: "row",
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row0$column0",
                                                $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row0$column0",
                                                class: "col-lg col-md col",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $FormGroup,
                                                    {
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1$formGroup",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1$formGroup",
                                                      class: "mx-name-checkBox1 mx-checkbox label-after",
                                                      control: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $CheckBox,
                                                          {
                                                            key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1",
                                                            $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1",
                                                            value: AttributeProperty({
                                                              "scope": "$AWSKMSCredentialHelper",
                                                              "path": "",
                                                              "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                              "attribute": "IsActive",
                                                              "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                              "isList": false,
                                                              "validation": null
                                                            }),
                                                            readOnlyStyle: "control",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                            }),
                                                            id: DerivedUniqueIdProperty({
                                                              "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1"
                                                            })
                                                          }
                                                        )
                                                      ],
                                                      labelFor: DerivedUniqueIdProperty({
                                                        "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1"
                                                      }),
                                                      orientation: "vertical",
                                                      hasError: ValidationProperty({
                                                        "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1"
                                                      })
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row1",
                                          $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row1",
                                          class: "row",
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row1$column0",
                                                $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row1$column0",
                                                class: "col-lg col-md col",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text5",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text5",
                                                      class: "mx-name-text5",
                                                      caption: ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "AWS Credentials" }, "args": {} }
                                                      }),
                                                      renderMode: "h3"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container2$visibility",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container2$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "KMSCredentialHelper", "path": "IsActive" }, "args": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container2",
                                                            $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container2",
                                                            class: "mx-name-container2",
                                                            renderMode: "div",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $FormGroup,
                                                                {
                                                                  key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2$formGroup",
                                                                  $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2$formGroup",
                                                                  class: "mx-name-textBox2 mx-textbox",
                                                                  control: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $TextBox,
                                                                      {
                                                                        key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2",
                                                                        $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2",
                                                                        inputValue: AttributeProperty({
                                                                          "scope": "$AWSKMSCredentialHelper",
                                                                          "path": "",
                                                                          "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                          "attribute": "AccessKeyId",
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
                                                                        readOnlyStyle: "control",
                                                                        maxLength: 200,
                                                                        autocomplete: "on",
                                                                        submitWhileEditing: false,
                                                                        submitDelay: 300,
                                                                        id: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  caption: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "Access Key ID" }, "args": {} }
                                                                  }),
                                                                  labelFor: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2"
                                                                  }),
                                                                  orientation: "vertical",
                                                                  hasError: ValidationProperty({
                                                                    "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2"
                                                                  })
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $FormGroup,
                                                                {
                                                                  key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9$formGroup",
                                                                  $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9$formGroup",
                                                                  class: "mx-name-textBox9 mx-textbox",
                                                                  control: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $TextBox,
                                                                      {
                                                                        key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9",
                                                                        $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9",
                                                                        inputValue: AttributeProperty({
                                                                          "scope": "$AWSKMSCredentialHelper",
                                                                          "path": "",
                                                                          "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                          "attribute": "SecretAccessKey",
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
                                                                        readOnlyStyle: "control",
                                                                        maxLength: 200,
                                                                        autocomplete: "on",
                                                                        submitWhileEditing: false,
                                                                        submitDelay: 300,
                                                                        id: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  caption: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "Secret Access Key" }, "args": {} }
                                                                  }),
                                                                  labelFor: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9"
                                                                  }),
                                                                  orientation: "vertical",
                                                                  hasError: ValidationProperty({
                                                                    "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9"
                                                                  })
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text6$visibility",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text6$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "KMSCredentialHelper", "path": "IsActive" }, "args": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text6",
                                                            $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text6",
                                                            class: "mx-name-text6",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "AWS Region" }, "args": {} }
                                                            }),
                                                            renderMode: "h3"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container3$visibility",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container3$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "KMSCredentialHelper", "path": "IsActive" }, "args": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container3",
                                                            $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container3",
                                                            class: "mx-name-container3",
                                                            renderMode: "div",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $FormGroup,
                                                                {
                                                                  key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1$formGroup",
                                                                  $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1$formGroup",
                                                                  class: "mx-name-dropDown1",
                                                                  control: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Combobox,
                                                                      {
                                                                        key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1",
                                                                        $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1",
                                                                        source: "context",
                                                                        optionsSourceType: "enumeration",
                                                                        attributeEnumeration: AttributeProperty({
                                                                          "scope": "$AWSKMSCredentialHelper",
                                                                          "path": "",
                                                                          "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                          "attribute": "Region",
                                                                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                          "isList": false
                                                                        }),
                                                                        optionsSourceAssociationCaptionType: "attribute",
                                                                        optionsSourceDatabaseCaptionType: "attribute",
                                                                        optionsSourceStaticDataSource: [],
                                                                        emptyOptionText: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        }),
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
                                                                        customEditability: "default",
                                                                        customEditabilityExpression: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                        }),
                                                                        readOnlyStyle: "text",
                                                                        ariaRequired: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                        }),
                                                                        ariaLabel: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
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
                                                                        selectedItemsSorting: "none",
                                                                        filterType: "contains",
                                                                        filterInputDebounceInterval: 200,
                                                                        id: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  caption: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "Region" }, "args": {} }
                                                                  }),
                                                                  labelFor: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1"
                                                                  }),
                                                                  orientation: "vertical",
                                                                  hasError: ValidationProperty({
                                                                    "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1"
                                                                  })
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text4",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text4",
                                                      class: "mx-name-text4",
                                                      caption: ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "AWS KMS Customer Managed Key" }, "args": {} }
                                                      }),
                                                      renderMode: "h3"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container1$visibility",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container1$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "KMSCredentialHelper", "path": "IsActive" }, "args": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container1",
                                                            $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container1",
                                                            class: "mx-name-container1",
                                                            renderMode: "div",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $FormGroup,
                                                                {
                                                                  key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1$formGroup",
                                                                  $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1$formGroup",
                                                                  class: "mx-name-textBox1 mx-textbox",
                                                                  control: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $TextBox,
                                                                      {
                                                                        key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1",
                                                                        $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1",
                                                                        inputValue: AttributeProperty({
                                                                          "scope": "$AWSKMSCredentialHelper",
                                                                          "path": "",
                                                                          "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                          "attribute": "KeyId",
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
                                                                        readOnlyStyle: "control",
                                                                        maxLength: 200,
                                                                        autocomplete: "on",
                                                                        submitWhileEditing: false,
                                                                        submitDelay: 300,
                                                                        id: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  caption: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "Key ID" }, "args": {} }
                                                                  }),
                                                                  labelFor: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1"
                                                                  }),
                                                                  orientation: "vertical",
                                                                  hasError: ValidationProperty({
                                                                    "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1"
                                                                  })
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
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
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row2",
                                          $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row2",
                                          class: "row",
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row2$column0",
                                                $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row2$column0",
                                                class: "col-lg col-md col",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3$visibility",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3",
                                                            $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3",
                                                            buttonId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3",
                                                            class: "mx-name-actionButton3 spacing-outer-top-medium",
                                                            renderType: "button",
                                                            buttonClass: "btn-primary",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                                            }),
                                                            tooltip: TextProperty({
                                                              "value": ""
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } }, "config": { "operationId": "5byU1+sirl2h+bK+ojlnRQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      key: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton2",
                                                      $widgetId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton2",
                                                      buttonId: "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton2",
                                                      class: "mx-name-actionButton2 spacing-outer-left spacing-outer-top-medium",
                                                      renderType: "button",
                                                      buttonClass: "btn-default",
                                                      caption: ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                                      }),
                                                      tooltip: TextProperty({
                                                        "value": ""
                                                      }),
                                                      action: ActionProperty({
                                                        "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "b9H2WE4PZluju3Twc8eJuw", "closePage": true }, "disabledDuringExecution": true },
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
                        ],
                        hideFooter: true
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row2",
            $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row2",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row2$column0",
                  $widgetId: "p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row2$column0",
                  class: "col-lg col-md col"
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
  "AWS KMS Credentials"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
