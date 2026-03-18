import { reactExports, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { DatabaseObjectListProperty, ListAttributeProperty } from '../ListAttributeProperty-CXLDrwR-.js';
import { ListExpressionProperty } from '../ListExpressionProperty-BbPebQYY.js';
import { DatagridDateFilterWidgetModule, DatagridTextFilterWidgetModule, TemplatedWidgetProperty } from '../DatagridTextFilter-CAhJ0TCr.js';
import { WebIconProperty } from '../WebIconProperty-znHzcziz.js';
import { Container } from '../Image-C3uz38Dk.js';
import { DatagridWidgetModule } from '../Datagrid-D4O9fyfS.js';
import { Div } from '../Div-o8iece77.js';
import { Text } from '../Text-DuQAvxSA.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-Cr51Glyx.js';
import '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import '../index-D_nCuE-Y.js';
import '../InlineText-BmGDgYXy.js';
import '../AssociationProperty-WAySTpZ7.js';
import '../Atlas_Core.OCH_UpdateUserLanguage-CYtkbF7W.js';
import '../index-fpKsB4fe.js';
import '../CJS8msnl-qQy3fsQc.js';
import '../ScrollContainer-_UwHUp6v.js';
import '../FormGroup-D4kp91rN.js';
import '../WebStaticImageProperty-BHhgotvB.js';
import '../Combobox-CTuBdCKm.js';
import '../DataView-Dip00PtH.js';
import '../Fragment-686zUVRb.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid, $DatagridTextFilter, $DatagridDateFilter, $ActionButton } = asPluginWidgets({ Container, Div, Text, Datagrid, DatagridTextFilter, DatagridDateFilter, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.Administration.ActiveSessions.container1",
      $widgetId: "p.Administration.ActiveSessions.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      renderMode: "div",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.ActiveSessions.layoutGrid1",
            $widgetId: "p.Administration.ActiveSessions.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.ActiveSessions.layoutGrid1$row0",
                  $widgetId: "p.Administration.ActiveSessions.layoutGrid1$row0",
                  class: "row",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.Administration.ActiveSessions.layoutGrid1$row0$column0",
                        $widgetId: "p.Administration.ActiveSessions.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.ActiveSessions.label1",
                              $widgetId: "p.Administration.ActiveSessions.label1",
                              class: "mx-name-label1 pageheader-title",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Active Sessions" }, "args": {} }
                              }),
                              renderMode: "h2"
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
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.ActiveSessions.layoutGrid2",
      $widgetId: "p.Administration.ActiveSessions.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.ActiveSessions.layoutGrid2$row0",
            $widgetId: "p.Administration.ActiveSessions.layoutGrid2$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.ActiveSessions.layoutGrid2$row0$column0",
                  $widgetId: "p.Administration.ActiveSessions.layoutGrid2$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p.Administration.ActiveSessions.dataGrid21",
                        $widgetId: "p.Administration.ActiveSessions.dataGrid21",
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p.10",
                          "entity": "System.Session",
                          "operationId": "i2D4lJe8rFqSOzjv1QKBxg",
                          "sort": [
                            [
                              "System.Session_User/System.User/Name",
                              "asc"
                            ]
                          ]
                        }),
                        refreshInterval: 0,
                        itemSelectionMethod: "checkbox",
                        showSelectAllToggle: true,
                        columns: [
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "System.Session_User/System.User",
                              "entity": "System.User",
                              "attribute": "Name",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "dynamicText": void 0,
                            "header": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                            }),
                            "tooltip": void 0,
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p.Administration.ActiveSessions.textFilter1",
                                  $widgetId: "p.Administration.ActiveSessions.textFilter1",
                                  defaultFilter: "contains",
                                  placeholder: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  adjustable: true,
                                  delay: 500,
                                  screenReaderButtonCaption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  screenReaderInputCaption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  attrChoice: "auto",
                                  attributes: [],
                                  class: "mx-name-textFilter1"
                                }
                              )
                            ],
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": void 0,
                            "allowEventPropagation": true,
                            "exportType": "default"
                          },
                          {
                            "showContentAs": "dynamicText",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.Session",
                              "attribute": "LastActive",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "dynamicText": ListExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "LastActive" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.Administration.ActiveSessions.dataGrid21", "source": "object" } } },
                              "dataSourceId": "p.10"
                            }),
                            "header": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Last active" }, "args": {} }
                            }),
                            "tooltip": void 0,
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDateFilter,
                                {
                                  key: "p.Administration.ActiveSessions.dateFilter1",
                                  $widgetId: "p.Administration.ActiveSessions.dateFilter1",
                                  defaultFilter: "equal",
                                  placeholder: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  adjustable: true,
                                  screenReaderButtonCaption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  screenReaderCalendarCaption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  screenReaderInputCaption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  attrChoice: "auto",
                                  attributes: [],
                                  class: "mx-name-dateFilter1"
                                }
                              )
                            ],
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": void 0,
                            "allowEventPropagation": true,
                            "exportType": "default"
                          },
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.Session",
                              "attribute": "LastActive",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.10",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Administration.ActiveSessions.actionButton1",
                                    $widgetId: "p.Administration.ActiveSessions.actionButton1",
                                    buttonId: "p.Administration.ActiveSessions.actionButton1",
                                    class: "mx-name-actionButton1 btn-lg",
                                    renderType: "link",
                                    role: "button",
                                    buttonClass: "btn-default",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    }),
                                    tooltip: TextProperty({
                                      "value": ""
                                    }),
                                    icon: WebIconProperty({
                                      "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-logout" }
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.Administration.ActiveSessions.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "gzETRTX0/1iQptebAgFq3g" }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }),
                            "dynamicText": void 0,
                            "header": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            }),
                            "tooltip": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": false,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "no",
                            "width": "autoFit",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
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
                        columnsSortable: true,
                        columnsResizable: true,
                        columnsDraggable: true,
                        columnsHidable: true,
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
                        onClickTrigger: "single",
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
                        class: "mx-name-dataGrid21 table-hover"
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
  "Active Sessions"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
