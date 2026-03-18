import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { SelectionProperty } from "mendix/SelectionProperty";
import { TextProperty } from "mendix/TextProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import * as DatagridWidgetModule from "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import { Table } from "mendix/widgets/web/Table";
import { TableRow } from "mendix/widgets/web/TableRow";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.ResponsiveLayout_Certificate.js";

const { $Table, $TableRow, $Datagrid, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Table, TableRow, Datagrid, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Table key="p.Encryption.CertificateManagement.table1"
        $widgetId="p.Encryption.CertificateManagement.table1"
        class={"mx-name-table1"}
        autoWidth={false}
        columnWidths={[
            "100%"
        ]}
        rows={[
            <$TableRow key="p.Encryption.CertificateManagement.table1$row0"
                $widgetId="p.Encryption.CertificateManagement.table1$row0"
                class={""}
                cells={[
                    {
                        "class": "",
                        "content": [
                            <$Datagrid key="p.Encryption.CertificateManagement.dataGrid21"
                                $widgetId="p.Encryption.CertificateManagement.dataGrid21"
                                datasource={DatabaseObjectListProperty({
                                    "dataSourceId": "p.0",
                                    "entity": "Encryption.PGPCertificate",
                                    "operationId": "SVoztVXN3l+eL6TptjzrKQ",
                                    "sort": []
                                })}
                                refreshInterval={0}
                                itemSelection={SelectionProperty({
                                    "selectionType": "Single",
                                    "dataSourceId": "p.0"
                                })}
                                itemSelectionMethod={"rowClick"}
                                showSelectAllToggle={true}
                                columns={[
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
                                        "dynamicText": undefined,
                                        "header": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Reference" }, "args": {} }
                                        }),
                                        "tooltip": undefined,
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
                                        "exportValue": undefined,
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
                                        "dynamicText": undefined,
                                        "header": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Email" }, "args": {} }
                                        }),
                                        "tooltip": undefined,
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
                                        "exportValue": undefined,
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
                                        "dynamicText": undefined,
                                        "header": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Certificate Type" }, "args": {} }
                                        }),
                                        "tooltip": undefined,
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
                                        "exportValue": undefined,
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
                                        "dynamicText": undefined,
                                        "header": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                        }),
                                        "tooltip": undefined,
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
                                        "exportValue": undefined,
                                        "allowEventPropagation": true,
                                        "exportType": "default"
                                    }
                                ]}
                                columnsFilterable={true}
                                pageSize={20}
                                pagination={"buttons"}
                                pagingPosition={"bottom"}
                                showPagingButtons={"always"}
                                showEmptyPlaceholder={"none"}
                                onClickTrigger={"single"}
                                columnsSortable={true}
                                columnsResizable={true}
                                columnsDraggable={true}
                                columnsHidable={true}
                                filtersPlaceholder={[
                                    <$ConditionalVisibilityWrapper key="p.Encryption.CertificateManagement.actionButton5$visibility"
                                        $widgetId="p.Encryption.CertificateManagement.actionButton5$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.Encryption.CertificateManagement.actionButton5"
                                                $widgetId="p.Encryption.CertificateManagement.actionButton5"
                                                buttonId={"p.Encryption.CertificateManagement.actionButton5"}
                                                class={"mx-name-actionButton5"}
                                                renderType={"button"}
                                                buttonClass={"btn-default"}
                                                caption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Generate Key Ring Pair" }, "args": {} }
                                                })}
                                                tooltip={TextProperty({
                                                    "value": ""
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "B42/UZK6x1OWiEBqGb2OHw", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.Encryption.CertificateManagement.actionButton6$visibility"
                                        $widgetId="p.Encryption.CertificateManagement.actionButton6$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.Encryption.CertificateManagement.actionButton6"
                                                $widgetId="p.Encryption.CertificateManagement.actionButton6"
                                                buttonId={"p.Encryption.CertificateManagement.actionButton6"}
                                                class={"mx-name-actionButton6"}
                                                renderType={"button"}
                                                buttonClass={"btn-default"}
                                                caption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Upload Public Key Ring" }, "args": {} }
                                                })}
                                                tooltip={TextProperty({
                                                    "value": ""
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "N76UDAUPJF21LORuv/mWAQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.Encryption.CertificateManagement.actionButton7$visibility"
                                        $widgetId="p.Encryption.CertificateManagement.actionButton7$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.Encryption.CertificateManagement.actionButton7"
                                                $widgetId="p.Encryption.CertificateManagement.actionButton7"
                                                buttonId={"p.Encryption.CertificateManagement.actionButton7"}
                                                class={"mx-name-actionButton7"}
                                                renderType={"button"}
                                                buttonClass={"btn-default"}
                                                caption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Upload Private Key Ring" }, "args": {} }
                                                })}
                                                tooltip={TextProperty({
                                                    "value": ""
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "zooYPTXFzVa8vSz4DWvISQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.Encryption.CertificateManagement.actionButton8$visibility"
                                        $widgetId="p.Encryption.CertificateManagement.actionButton8$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.Encryption.CertificateManagement.actionButton8"
                                                $widgetId="p.Encryption.CertificateManagement.actionButton8"
                                                buttonId={"p.Encryption.CertificateManagement.actionButton8"}
                                                class={"mx-name-actionButton8"}
                                                renderType={"button"}
                                                buttonClass={"btn-default"}
                                                caption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Edit [default]" }, "args": {} }
                                                })}
                                                tooltip={TextProperty({
                                                    "value": ""
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Certificate": { "widget": "p.Encryption.CertificateManagement.dataGrid21", "source": "selection" } }, "config": { "operationId": "qVgEGevxPVmc6my4kq2lbQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]}
                                filterSectionTitle={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })}
                                exportDialogLabel={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                                })}
                                cancelExportLabel={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                                })}
                                selectRowLabel={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                                })}
                                itemSelectionMode={"clear"}
                                loadingType={"spinner"}
                                showNumberOfRows={false}
                                loadMoreButtonCaption={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                })}
                                configurationStorageType={"attribute"}
                                storeFiltersInPersonalization={true}
                                selectAllRowsLabel={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                })}
                                autoSelect={false}
                                enableSelectAll={false}
                                keepSelection={false}
                                selectionCounterPosition={"bottom"}
                                refreshIndicator={false}
                                useCustomPagination={false}
                                selectingAllLabel={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Selecting all items..." }, "args": {} }
                                })}
                                cancelSelectionLabel={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Cancel selection" }, "args": {} }
                                })}
                                selectedCountTemplateSingular={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "%d row selected" }, "args": {} }
                                })}
                                selectedCountTemplatePlural={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "%d rows selected" }, "args": {} }
                                })}
                                selectAllText={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Select all rows in the data source" }, "args": {} }
                                })}
                                selectAllTemplate={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Select all %d rows in the data source" }, "args": {} }
                                })}
                                allSelectedText={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "All %d rows selected." }, "args": {} }
                                })}
                                clearSelectionButtonLabel={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                })}
                                class={"mx-name-dataGrid21"} />
                        ]
                    }
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Certificate administration"
]);

export const classes = "";

export const style = {};
export const content = { ...parentContent,
    "Encryption.ResponsiveLayout_Certificate.Main": region$Main,
};
