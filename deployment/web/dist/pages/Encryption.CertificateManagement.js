import { reactExports, asPluginWidgets, selectTranslation } from '../index-Zvs2JQW8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Bmj-Y64R.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-N00bQbXV.js';
import { DatabaseObjectListProperty, ListAttributeProperty } from '../ListAttributeProperty--Cc-W_Q0.js';
import { SelectionProperty, content as content$1 } from '../Encryption.ResponsiveLayout_Certificate-DD6zkOh_.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-CWN6xH5D.js';
import { DatagridWidgetModule } from '../Datagrid-su1MCSNT.js';
import { Table, TableRow } from '../TableRow-JOm8_xjN.js';
import '../DerivedUniqueIdProperty-BRq0bBYj.js';
import '../WebIconProperty-CknoYWS-.js';
import '../WebStaticImageProperty-DnG6CWYP.js';
import '../Label-B2U079pO.js';
import '../InlineText-BkyswQUs.js';
import '../MenuBar-DsopDVB5.js';
import '../CJS8msnl-D5R4ffv1.js';
import '../ScrollContainer-eFomK67V.js';
import '../index-CRhQ-MyB.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const { $Table, $TableRow, $Datagrid, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Table, TableRow, Datagrid, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Table,
    {
      key: "p.Encryption.CertificateManagement.table1",
      $widgetId: "p.Encryption.CertificateManagement.table1",
      class: "mx-name-table1",
      autoWidth: false,
      columnWidths: [
        "100%"
      ],
      rows: [
        /* @__PURE__ */ React.createElement(
          $TableRow,
          {
            key: "p.Encryption.CertificateManagement.table1$row0",
            $widgetId: "p.Encryption.CertificateManagement.table1$row0",
            class: "",
            cells: [
              {
                "class": "",
                "content": [
                  /* @__PURE__ */ React.createElement(
                    $Datagrid,
                    {
                      key: "p.Encryption.CertificateManagement.dataGrid21",
                      $widgetId: "p.Encryption.CertificateManagement.dataGrid21",
                      datasource: DatabaseObjectListProperty({
                        "dataSourceId": "p.0",
                        "entity": "Encryption.PGPCertificate",
                        "operationId": "SVoztVXN3l+eL6TptjzrKQ",
                        "sort": []
                      }),
                      refreshInterval: 0,
                      itemSelection: SelectionProperty({
                        "selectionType": "Single",
                        "dataSourceId": "p.0"
                      }),
                      itemSelectionMethod: "rowClick",
                      showSelectAllToggle: true,
                      columns: [
                        {
                          "showContentAs": "attribute",
                          "attribute": ListAttributeProperty({
                            "path": "",
                            "entity": "Encryption.PGPCertificate",
                            "attribute": "Reference",
                            "attributeType": "String",
                            "sortable": true,
                            "filterable": true,
                            "dataSourceId": "p.0",
                            "isList": false
                          }),
                          "dynamicText": void 0,
                          "header": ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Reference" }, "args": {} }
                          }),
                          "tooltip": void 0,
                          "visible": ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                          }),
                          "sortable": true,
                          "resizable": true,
                          "draggable": true,
                          "hidable": "yes",
                          "width": "autoFill",
                          "minWidth": "auto",
                          "minWidthLimit": 100,
                          "size": 1,
                          "alignment": "left",
                          "wrapText": false,
                          "exportValue": void 0,
                          "allowEventPropagation": true,
                          "exportType": "default"
                        },
                        {
                          "showContentAs": "attribute",
                          "attribute": ListAttributeProperty({
                            "path": "",
                            "entity": "Encryption.PGPCertificate",
                            "attribute": "EmailAddress",
                            "attributeType": "String",
                            "sortable": true,
                            "filterable": true,
                            "dataSourceId": "p.0",
                            "isList": false
                          }),
                          "dynamicText": void 0,
                          "header": ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Email" }, "args": {} }
                          }),
                          "tooltip": void 0,
                          "visible": ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                          }),
                          "sortable": true,
                          "resizable": true,
                          "draggable": true,
                          "hidable": "yes",
                          "width": "autoFill",
                          "minWidth": "auto",
                          "minWidthLimit": 100,
                          "size": 1,
                          "alignment": "left",
                          "wrapText": false,
                          "exportValue": void 0,
                          "allowEventPropagation": true,
                          "exportType": "default"
                        },
                        {
                          "showContentAs": "attribute",
                          "attribute": ListAttributeProperty({
                            "path": "",
                            "entity": "Encryption.PGPCertificate",
                            "attribute": "CertificateType",
                            "attributeType": "Enum",
                            "sortable": true,
                            "filterable": true,
                            "dataSourceId": "p.0",
                            "isList": false
                          }),
                          "dynamicText": void 0,
                          "header": ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Certificate Type" }, "args": {} }
                          }),
                          "tooltip": void 0,
                          "visible": ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                          }),
                          "sortable": true,
                          "resizable": true,
                          "draggable": true,
                          "hidable": "yes",
                          "width": "autoFill",
                          "minWidth": "auto",
                          "minWidthLimit": 100,
                          "size": 1,
                          "alignment": "left",
                          "wrapText": false,
                          "exportValue": void 0,
                          "allowEventPropagation": true,
                          "exportType": "default"
                        },
                        {
                          "showContentAs": "attribute",
                          "attribute": ListAttributeProperty({
                            "path": "",
                            "entity": "Encryption.PGPCertificate",
                            "attribute": "Name",
                            "attributeType": "String",
                            "sortable": true,
                            "filterable": true,
                            "dataSourceId": "p.0",
                            "isList": false
                          }),
                          "dynamicText": void 0,
                          "header": ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                          }),
                          "tooltip": void 0,
                          "visible": ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                          }),
                          "sortable": true,
                          "resizable": true,
                          "draggable": true,
                          "hidable": "yes",
                          "width": "autoFill",
                          "minWidth": "auto",
                          "minWidthLimit": 100,
                          "size": 1,
                          "alignment": "left",
                          "wrapText": false,
                          "exportValue": void 0,
                          "allowEventPropagation": true,
                          "exportType": "default"
                        }
                      ],
                      columnsFilterable: true,
                      pageSize: 20,
                      pagination: "buttons",
                      pagingPosition: "bottom",
                      showPagingButtons: "always",
                      showEmptyPlaceholder: "none",
                      onClickTrigger: "single",
                      columnsSortable: true,
                      columnsResizable: true,
                      columnsDraggable: true,
                      columnsHidable: true,
                      filtersPlaceholder: [
                        /* @__PURE__ */ React.createElement(
                          $ConditionalVisibilityWrapper,
                          {
                            key: "p.Encryption.CertificateManagement.actionButton5$visibility",
                            $widgetId: "p.Encryption.CertificateManagement.actionButton5$visibility",
                            visible: ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                            }),
                            contents: [
                              /* @__PURE__ */ React.createElement(
                                $ActionButton,
                                {
                                  key: "p.Encryption.CertificateManagement.actionButton5",
                                  $widgetId: "p.Encryption.CertificateManagement.actionButton5",
                                  buttonId: "p.Encryption.CertificateManagement.actionButton5",
                                  class: "mx-name-actionButton5",
                                  renderType: "button",
                                  buttonClass: "btn-default",
                                  caption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Generate Key Ring Pair" }, "args": {} }
                                  }),
                                  tooltip: TextProperty({
                                    "value": ""
                                  }),
                                  action: ActionProperty({
                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "B42/UZK6x1OWiEBqGb2OHw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                  })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ React.createElement(
                          $ConditionalVisibilityWrapper,
                          {
                            key: "p.Encryption.CertificateManagement.actionButton6$visibility",
                            $widgetId: "p.Encryption.CertificateManagement.actionButton6$visibility",
                            visible: ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                            }),
                            contents: [
                              /* @__PURE__ */ React.createElement(
                                $ActionButton,
                                {
                                  key: "p.Encryption.CertificateManagement.actionButton6",
                                  $widgetId: "p.Encryption.CertificateManagement.actionButton6",
                                  buttonId: "p.Encryption.CertificateManagement.actionButton6",
                                  class: "mx-name-actionButton6",
                                  renderType: "button",
                                  buttonClass: "btn-default",
                                  caption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Upload Public Key Ring" }, "args": {} }
                                  }),
                                  tooltip: TextProperty({
                                    "value": ""
                                  }),
                                  action: ActionProperty({
                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "N76UDAUPJF21LORuv/mWAQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                  })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ React.createElement(
                          $ConditionalVisibilityWrapper,
                          {
                            key: "p.Encryption.CertificateManagement.actionButton7$visibility",
                            $widgetId: "p.Encryption.CertificateManagement.actionButton7$visibility",
                            visible: ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                            }),
                            contents: [
                              /* @__PURE__ */ React.createElement(
                                $ActionButton,
                                {
                                  key: "p.Encryption.CertificateManagement.actionButton7",
                                  $widgetId: "p.Encryption.CertificateManagement.actionButton7",
                                  buttonId: "p.Encryption.CertificateManagement.actionButton7",
                                  class: "mx-name-actionButton7",
                                  renderType: "button",
                                  buttonClass: "btn-default",
                                  caption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Upload Private Key Ring" }, "args": {} }
                                  }),
                                  tooltip: TextProperty({
                                    "value": ""
                                  }),
                                  action: ActionProperty({
                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "zooYPTXFzVa8vSz4DWvISQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                  })
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ React.createElement(
                          $ConditionalVisibilityWrapper,
                          {
                            key: "p.Encryption.CertificateManagement.actionButton8$visibility",
                            $widgetId: "p.Encryption.CertificateManagement.actionButton8$visibility",
                            visible: ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                            }),
                            contents: [
                              /* @__PURE__ */ React.createElement(
                                $ActionButton,
                                {
                                  key: "p.Encryption.CertificateManagement.actionButton8",
                                  $widgetId: "p.Encryption.CertificateManagement.actionButton8",
                                  buttonId: "p.Encryption.CertificateManagement.actionButton8",
                                  class: "mx-name-actionButton8",
                                  renderType: "button",
                                  buttonClass: "btn-default",
                                  caption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Edit [default]" }, "args": {} }
                                  }),
                                  tooltip: TextProperty({
                                    "value": ""
                                  }),
                                  action: ActionProperty({
                                    "action": { "type": "callMicroflow", "argMap": { "Certificate": { "widget": "p.Encryption.CertificateManagement.dataGrid21", "source": "selection" } }, "config": { "operationId": "qVgEGevxPVmc6my4kq2lbQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                  })
                                }
                              )
                            ]
                          }
                        )
                      ],
                      filterSectionTitle: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                      }),
                      exportDialogLabel: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                      }),
                      cancelExportLabel: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                      }),
                      selectRowLabel: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                      }),
                      itemSelectionMode: "clear",
                      loadingType: "spinner",
                      showNumberOfRows: false,
                      loadMoreButtonCaption: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                      }),
                      configurationStorageType: "attribute",
                      storeFiltersInPersonalization: true,
                      selectAllRowsLabel: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                      }),
                      autoSelect: false,
                      enableSelectAll: false,
                      keepSelection: false,
                      selectionCounterPosition: "bottom",
                      refreshIndicator: false,
                      useCustomPagination: false,
                      selectingAllLabel: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Selecting all items..." }, "args": {} }
                      }),
                      cancelSelectionLabel: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Cancel selection" }, "args": {} }
                      }),
                      selectedCountTemplateSingular: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "%d row selected" }, "args": {} }
                      }),
                      selectedCountTemplatePlural: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "%d rows selected" }, "args": {} }
                      }),
                      selectAllText: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Select all rows in the data source" }, "args": {} }
                      }),
                      selectAllTemplate: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Select all %d rows in the data source" }, "args": {} }
                      }),
                      allSelectedText: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "All %d rows selected." }, "args": {} }
                      }),
                      clearSelectionButtonLabel: ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                      }),
                      class: "mx-name-dataGrid21"
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
]);
const title = selectTranslation([
  "Certificate administration"
]);
const classes = "";
const style = {};
const content = {
  ...content$1,
  "Encryption.ResponsiveLayout_Certificate.Main": region$Main
};

export { classes, content, style, title };
