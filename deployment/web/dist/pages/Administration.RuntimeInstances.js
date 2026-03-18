import { reactExports, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { DatabaseObjectListProperty, ListAttributeProperty } from '../ListAttributeProperty-CXLDrwR-.js';
import { ListExpressionProperty } from '../ListExpressionProperty-BbPebQYY.js';
import { Container } from '../Image-C3uz38Dk.js';
import { DatagridWidgetModule } from '../Datagrid-D4O9fyfS.js';
import { Div } from '../Div-o8iece77.js';
import { Text } from '../Text-DuQAvxSA.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-Cr51Glyx.js';
import '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import '../ActionButton-dEkVZjqk.js';
import '../index-D_nCuE-Y.js';
import '../InlineText-BmGDgYXy.js';
import '../AssociationProperty-WAySTpZ7.js';
import '../Atlas_Core.OCH_UpdateUserLanguage-CYtkbF7W.js';
import '../index-fpKsB4fe.js';
import '../CJS8msnl-qQy3fsQc.js';
import '../ScrollContainer-_UwHUp6v.js';
import '../FormGroup-D4kp91rN.js';
import '../WebIconProperty-znHzcziz.js';
import '../WebStaticImageProperty-BHhgotvB.js';
import '../Combobox-CTuBdCKm.js';
import '../DataView-Dip00PtH.js';
import '../Fragment-686zUVRb.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid } = asPluginWidgets({ Container, Div, Text, Datagrid });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.Administration.RuntimeInstances.container1",
      $widgetId: "p.Administration.RuntimeInstances.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      renderMode: "div",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.RuntimeInstances.layoutGrid1",
            $widgetId: "p.Administration.RuntimeInstances.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.RuntimeInstances.layoutGrid1$row0",
                  $widgetId: "p.Administration.RuntimeInstances.layoutGrid1$row0",
                  class: "row",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.Administration.RuntimeInstances.layoutGrid1$row0$column0",
                        $widgetId: "p.Administration.RuntimeInstances.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.RuntimeInstances.label1",
                              $widgetId: "p.Administration.RuntimeInstances.label1",
                              class: "mx-name-label1 pageheader-title",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Runtime Instances" }, "args": {} }
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
      key: "p.Administration.RuntimeInstances.layoutGrid2",
      $widgetId: "p.Administration.RuntimeInstances.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.RuntimeInstances.layoutGrid2$row0",
            $widgetId: "p.Administration.RuntimeInstances.layoutGrid2$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.RuntimeInstances.layoutGrid2$row0$column0",
                  $widgetId: "p.Administration.RuntimeInstances.layoutGrid2$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p.Administration.RuntimeInstances.dataGrid21",
                        $widgetId: "p.Administration.RuntimeInstances.dataGrid21",
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p.10",
                          "entity": "System.XASInstance",
                          "operationId": "tGuZBx2a/1uiRF6t4C2zeA",
                          "sort": [
                            [
                              "XASId",
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
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "XASId",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "dynamicText": void 0,
                            "header": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Runtime ID" }, "args": {} }
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
                              "entity": "System.XASInstance",
                              "attribute": "createdDate",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "dynamicText": ListExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "createdDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.Administration.RuntimeInstances.dataGrid21", "source": "object" } } },
                              "dataSourceId": "p.10"
                            }),
                            "header": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Created" }, "args": {} }
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
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "AllowedNumberOfConcurrentUsers",
                              "attributeType": "Integer",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "dynamicText": void 0,
                            "header": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Allowed concurrent users" }, "args": {} }
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
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "PartnerName",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "dynamicText": void 0,
                            "header": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Partner" }, "args": {} }
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
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "CustomerName",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "dynamicText": void 0,
                            "header": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Customer" }, "args": {} }
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
                        class: "mx-name-dataGrid21"
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
  "Runtime Instances"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
