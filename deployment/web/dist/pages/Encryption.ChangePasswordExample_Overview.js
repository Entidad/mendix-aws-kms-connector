import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { DatabaseObjectListProperty, ListAttributeProperty } from '../ListAttributeProperty-CXLDrwR-.js';
import { SelectionProperty, content as content$1 } from '../Encryption.ResponsiveLayout_Certificate-CYGscL-_.js';
import { WebIconProperty } from '../WebIconProperty-znHzcziz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { DatagridWidgetModule } from '../Datagrid-D4O9fyfS.js';
import '../Fragment-686zUVRb.js';
import '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import '../WebStaticImageProperty-BHhgotvB.js';
import '../Label-B5T1vOlN.js';
import '../InlineText-BmGDgYXy.js';
import '../MenuBar-CkBAJMgg.js';
import '../CJS8msnl-qQy3fsQc.js';
import '../ScrollContainer-_UwHUp6v.js';
import '../index-D_nCuE-Y.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const { $Fragment, $Datagrid, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Fragment, Datagrid, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Fragment,
    {
      key: "p.Encryption.ChangePasswordExample_Overview.snippetCallWidget1",
      $widgetId: "p.Encryption.ChangePasswordExample_Overview.snippetCallWidget1",
      content: [
        /* @__PURE__ */ React.createElement(
          $Datagrid,
          {
            key: "p.Encryption.ExampleConfigurations.dataGrid21",
            $widgetId: "p.Encryption.ExampleConfigurations.dataGrid21",
            datasource: DatabaseObjectListProperty({
              "dataSourceId": "p.0",
              "entity": "Encryption.ExampleConfiguration",
              "operationId": "69YLsaVJWVu7QI6CKI9v8g",
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
                  "entity": "Encryption.ExampleConfiguration",
                  "attribute": "Title",
                  "attributeType": "String",
                  "sortable": true,
                  "filterable": true,
                  "dataSourceId": "p.0",
                  "isList": false
                }),
                "dynamicText": void 0,
                "header": ExpressionProperty({
                  "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
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
                  "entity": "Encryption.ExampleConfiguration",
                  "attribute": "Password",
                  "attributeType": "String",
                  "sortable": true,
                  "filterable": true,
                  "dataSourceId": "p.0",
                  "isList": false
                }),
                "dynamicText": void 0,
                "header": ExpressionProperty({
                  "expression": { "expr": { "type": "literal", "value": "Password" }, "args": {} }
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
                  key: "p.Encryption.ExampleConfigurations.actionButton1$visibility",
                  $widgetId: "p.Encryption.ExampleConfigurations.actionButton1$visibility",
                  visible: ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                  }),
                  contents: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p.Encryption.ExampleConfigurations.actionButton1",
                        $widgetId: "p.Encryption.ExampleConfigurations.actionButton1",
                        buttonId: "p.Encryption.ExampleConfigurations.actionButton1",
                        class: "mx-name-actionButton1",
                        renderType: "button",
                        buttonClass: "btn-default",
                        caption: ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": "New" }, "args": {} }
                        }),
                        tooltip: TextProperty({
                          "value": ""
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "image", "iconUrl": "img/System$Images$New.png" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "createObject", "argMap": {}, "config": { "entity": "Encryption.ExampleConfiguration", "operationId": "we9R86k+S1GdWblfUg8g9A", "pageSettings": { "name": "Encryption/ChangePasswordExample_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "allowedRoles": ["Administrator", "User"], "objectParameter": "param$ExampleConfiguration" }, "disabledDuringExecution": true },
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
                  key: "p.Encryption.ExampleConfigurations.actionButton2$visibility",
                  $widgetId: "p.Encryption.ExampleConfigurations.actionButton2$visibility",
                  visible: ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                  }),
                  contents: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p.Encryption.ExampleConfigurations.actionButton2",
                        $widgetId: "p.Encryption.ExampleConfigurations.actionButton2",
                        buttonId: "p.Encryption.ExampleConfigurations.actionButton2",
                        class: "mx-name-actionButton2",
                        renderType: "button",
                        buttonClass: "btn-default",
                        caption: ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": "Edit [default]" }, "args": {} }
                        }),
                        tooltip: TextProperty({
                          "value": ""
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "image", "iconUrl": "img/System$Images$Edit.png" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "openPage", "argMap": { "param$ExampleConfiguration": { "widget": "p.Encryption.ExampleConfigurations.dataGrid21", "source": "selection" } }, "config": { "name": "Encryption/ChangePasswordExample_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
  )
]);
const title = selectTranslation([
  "Home"
]);
const classes = "";
const style = {};
const content = {
  ...content$1,
  "Encryption.ResponsiveLayout_Certificate.Main": region$Main
};

export { classes, content, style, title };
