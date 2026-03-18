import { reactExports, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-B5BaoQn4.js';
import '../F-L0MxFU-CUzh3jjv.js';
import { DerivedUniqueIdProperty, AttributeProperty } from '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import { FileManager, DynamicFileProperty, FileUploadProperty } from '../FileManager-BuCl59tX.js';
import { FormGroup, ValidationProperty } from '../FormGroup-D4kp91rN.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { DataView } from '../DataView-Dip00PtH.js';
import { Div } from '../Div-o8iece77.js';
import { Label } from '../Label-B5T1vOlN.js';
import { Table, TableRow } from '../TableRow-Bya8LUrS.js';
import { Text } from '../Text-DuQAvxSA.js';
import { TextBox } from '../TextBox-Defpuaw0.js';
import { content as content$1 } from '../Encryption.PopupLayout-DsrJrtAU.js';
import '../InlineText-BmGDgYXy.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $Text, $Table, $TableRow, $Label, $FormGroup, $TextBox, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Text, Table, TableRow, Label, FormGroup, TextBox, FileManager, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Encryption.PrivateKey_NewEdit.layoutGrid1",
      $widgetId: "p.Encryption.PrivateKey_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0",
            $widgetId: "p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Encryption.PrivateKey_NewEdit.dataView1",
                        $widgetId: "p.Encryption.PrivateKey_NewEdit.dataView1",
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
                            $DataView,
                            {
                              key: "p.Encryption.PrivateKey_NewEdit.dataView2",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.dataView2",
                              class: "mx-name-dataView2 form-horizontal",
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.15",
                                "scope": "$PGPCertificate",
                                "editable": true,
                                "path": "Encryption.SecretKey_PublicKey/Encryption.PGPCertificate",
                                "operationId": "ld/mG+IRZ1qHyJLeoJYkiQ"
                              }),
                              emptyMessage: TextProperty({
                                "value": ""
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.Encryption.PrivateKey_NewEdit.label4",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.label4",
                                    class: "mx-name-label4",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Public Key Pair" }, "args": {} }
                                    }),
                                    renderMode: "h2"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Table,
                                  {
                                    key: "p.Encryption.PrivateKey_NewEdit.table3",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table3",
                                    class: "mx-name-table3",
                                    autoWidth: false,
                                    columnWidths: [
                                      "25%",
                                      "75%"
                                    ],
                                    rows: [
                                      /* @__PURE__ */ React.createElement(
                                        $TableRow,
                                        {
                                          key: "p.Encryption.PrivateKey_NewEdit.table3$row0",
                                          $widgetId: "p.Encryption.PrivateKey_NewEdit.table3$row0",
                                          class: "",
                                          cells: [
                                            {
                                              "header": true,
                                              "class": "",
                                              "content": [
                                                /* @__PURE__ */ React.createElement(
                                                  $Label,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.label5",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.label5",
                                                    class: "mx-name-label5",
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.label5"
                                                    }),
                                                    caption: TextProperty({
                                                      "value": "Name"
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
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox2$formGroup",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox2$formGroup",
                                                    class: "mx-name-textBox2 mx-textbox",
                                                    control: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $TextBox,
                                                        {
                                                          key: "p.Encryption.PrivateKey_NewEdit.textBox2",
                                                          $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox2",
                                                          inputValue: AttributeProperty({
                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView2",
                                                            "path": "",
                                                            "entity": "Encryption.PGPCertificate",
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
                                                          maxLength: 400,
                                                          autocomplete: "on",
                                                          submitWhileEditing: false,
                                                          submitDelay: 300,
                                                          id: DerivedUniqueIdProperty({
                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
                                                          })
                                                        }
                                                      )
                                                    ],
                                                    labelFor: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
                                                    }),
                                                    width: 4,
                                                    orientation: "vertical",
                                                    hasError: ValidationProperty({
                                                      "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
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
                                          key: "p.Encryption.PrivateKey_NewEdit.table3$row1",
                                          $widgetId: "p.Encryption.PrivateKey_NewEdit.table3$row1",
                                          class: "",
                                          cells: [
                                            {
                                              "header": true,
                                              "class": "",
                                              "content": [
                                                /* @__PURE__ */ React.createElement(
                                                  $Label,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.label6",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.label6",
                                                    class: "mx-name-label6",
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.label6"
                                                    }),
                                                    caption: TextProperty({
                                                      "value": "File"
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
                                                    key: "p.Encryption.PrivateKey_NewEdit.fileManager4$formGroup",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.fileManager4$formGroup",
                                                    class: "mx-fileinput mx-name-fileManager4 mx-filemanager",
                                                    control: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $FileManager,
                                                        {
                                                          key: "p.Encryption.PrivateKey_NewEdit.fileManager4",
                                                          $widgetId: "p.Encryption.PrivateKey_NewEdit.fileManager4",
                                                          download: DynamicFileProperty({
                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView2"
                                                          }),
                                                          upload: FileUploadProperty({
                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView2"
                                                          }),
                                                          showInBrowser: false,
                                                          maxFileSize: 5,
                                                          extensions: "",
                                                          id: DerivedUniqueIdProperty({
                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                          })
                                                        }
                                                      )
                                                    ],
                                                    labelFor: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                    }),
                                                    width: 4,
                                                    orientation: "vertical",
                                                    hasError: ValidationProperty({
                                                      "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
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
                              hideFooter: true
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Encryption.PrivateKey_NewEdit.label7",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label7",
                              class: "mx-name-label7",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Private Key" }, "args": {} }
                              }),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Table,
                            {
                              key: "p.Encryption.PrivateKey_NewEdit.table4",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.table4",
                              class: "mx-name-table4",
                              autoWidth: false,
                              columnWidths: [
                                "25%",
                                "75%"
                              ],
                              rows: [
                                /* @__PURE__ */ React.createElement(
                                  $TableRow,
                                  {
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row0",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row0",
                                    class: "",
                                    cells: [
                                      {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Label,
                                            {
                                              key: "p.Encryption.PrivateKey_NewEdit.label2",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label2",
                                              class: "mx-name-label2",
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label2"
                                              }),
                                              caption: TextProperty({
                                                "value": "Reference"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.textBox3$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox3$formGroup",
                                              class: "mx-name-textBox3 mx-textbox",
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox3",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox3",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                      "path": "",
                                                      "entity": "Encryption.PGPCertificate",
                                                      "attribute": "Reference",
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
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
                                                    })
                                                  }
                                                )
                                              ],
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row1",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row1",
                                    class: "",
                                    cells: [
                                      {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Label,
                                            {
                                              key: "p.Encryption.PrivateKey_NewEdit.label1",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label1",
                                              class: "mx-name-label1",
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label1"
                                              }),
                                              caption: TextProperty({
                                                "value": "Email"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.textBox1$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox1$formGroup",
                                              class: "mx-name-textBox1 mx-textbox",
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox1",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox1",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                      "path": "",
                                                      "entity": "Encryption.PGPCertificate",
                                                      "attribute": "EmailAddress",
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
                                                    maxLength: 50,
                                                    autocomplete: "on",
                                                    submitWhileEditing: false,
                                                    submitDelay: 300,
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
                                                    })
                                                  }
                                                )
                                              ],
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row2",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row2",
                                    class: "",
                                    cells: [
                                      {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Label,
                                            {
                                              key: "p.Encryption.PrivateKey_NewEdit.label8",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label8",
                                              class: "mx-name-label8",
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label8"
                                              }),
                                              caption: TextProperty({
                                                "value": "Name"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.textBox4$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox4$formGroup",
                                              class: "mx-name-textBox4 mx-textbox",
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox4",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox4",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                      "path": "",
                                                      "entity": "Encryption.PGPCertificate",
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
                                                    maxLength: 400,
                                                    autocomplete: "on",
                                                    submitWhileEditing: false,
                                                    submitDelay: 300,
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
                                                    })
                                                  }
                                                )
                                              ],
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row3",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row3",
                                    class: "",
                                    cells: [
                                      {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Label,
                                            {
                                              key: "p.Encryption.PrivateKey_NewEdit.label9",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label9",
                                              class: "mx-name-label9",
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label9"
                                              }),
                                              caption: TextProperty({
                                                "value": "Pass Phrase"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.textBox5$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox5$formGroup",
                                              class: "mx-name-textBox5 mx-textbox",
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox5",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox5",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                      "path": "",
                                                      "entity": "Encryption.PGPCertificate",
                                                      "attribute": "PassPhrase_Plain",
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
                                                    maxLength: 20,
                                                    autocomplete: "on",
                                                    submitWhileEditing: false,
                                                    submitDelay: 300,
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
                                                    })
                                                  }
                                                )
                                              ],
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row4",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row4",
                                    class: "",
                                    cells: [
                                      {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Label,
                                            {
                                              key: "p.Encryption.PrivateKey_NewEdit.label10",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label10",
                                              class: "mx-name-label10",
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label10"
                                              }),
                                              caption: TextProperty({
                                                "value": "File"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.fileManager3$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.fileManager3$formGroup",
                                              class: "mx-fileinput mx-name-fileManager3 mx-filemanager",
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $FileManager,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.fileManager3",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.fileManager3",
                                                    download: DynamicFileProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1"
                                                    }),
                                                    upload: FileUploadProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1"
                                                    }),
                                                    showInBrowser: false,
                                                    maxFileSize: 5,
                                                    extensions: "",
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
                                                    })
                                                  }
                                                )
                                              ],
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
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
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Encryption.PrivateKey_NewEdit.microflowButton3$visibility",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.microflowButton3$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Encryption.PrivateKey_NewEdit.microflowButton3",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.microflowButton3",
                                    buttonId: "p.Encryption.PrivateKey_NewEdit.microflowButton3",
                                    class: "mx-name-microflowButton3",
                                    renderType: "button",
                                    buttonClass: "btn-success",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Upload" }, "args": {} }
                                    }),
                                    tooltip: TextProperty({
                                      "value": ""
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Certificate": { "widget": "$PGPCertificate", "source": "object" } }, "config": { "operationId": "MJDkzR1ohl6Mn8LXu/SqZg", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                              key: "p.Encryption.PrivateKey_NewEdit.cancelButton1",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.cancelButton1",
                              buttonId: "p.Encryption.PrivateKey_NewEdit.cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "vJ3UInilZlCu/TUaodaDOg", "closePage": true }, "disabledDuringExecution": true },
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
  "External Certificate Details"
]);
const classes = "page-form page-form-default";
const cancelChangesOperationId = "tgOVpXi+j1qqvPGU6u/2Mw";
const closeButton = "p.Encryption.PrivateKey_NewEdit.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
