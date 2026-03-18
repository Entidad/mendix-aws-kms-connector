import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $Combobox, $RadioButtonGroup, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, Combobox, RadioButtonGroup, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AWSAuthentication.Settings_NewEdit.layoutGrid1"
        $widgetId="p.AWSAuthentication.Settings_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        content={[
            <$Div key="p.AWSAuthentication.Settings_NewEdit.layoutGrid1$row0"
                $widgetId="p.AWSAuthentication.Settings_NewEdit.layoutGrid1$row0"
                class={"row"}
                content={[
                    <$Div key="p.AWSAuthentication.Settings_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.AWSAuthentication.Settings_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        content={[
                            <$DataView key="p.AWSAuthentication.Settings_NewEdit.dataView6"
                                $widgetId="p.AWSAuthentication.Settings_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$Settings",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": ""
                                })}
                                body={[
                                    <$FormGroup key="p.AWSAuthentication.Settings_NewEdit.comboBox1$formGroup"
                                        $widgetId="p.AWSAuthentication.Settings_NewEdit.comboBox1$formGroup"
                                        class={"mx-name-comboBox1"}
                                        control={[
                                            <$Combobox key="p.AWSAuthentication.Settings_NewEdit.comboBox1"
                                                $widgetId="p.AWSAuthentication.Settings_NewEdit.comboBox1"
                                                source={"context"}
                                                optionsSourceType={"enumeration"}
                                                attributeEnumeration={AttributeProperty({
                                                    "scope": "p.AWSAuthentication.Settings_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "AWSAuthentication.Settings",
                                                    "attribute": "Region",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false
                                                })}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceStaticDataSource={[]}
                                                emptyOptionText={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })}
                                                filterType={"contains"}
                                                noOptionsText={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })}
                                                clearable={true}
                                                optionsSourceAssociationCustomContentType={"no"}
                                                optionsSourceDatabaseCustomContentType={"no"}
                                                staticDataSourceCustomContentType={"no"}
                                                showFooter={false}
                                                selectionMethod={"checkbox"}
                                                selectedItemsStyle={"text"}
                                                selectAllButton={false}
                                                selectAllButtonCaption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                })}
                                                readOnlyStyle={"text"}
                                                ariaRequired={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                })}
                                                clearButtonAriaLabel={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                })}
                                                removeValueAriaLabel={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                })}
                                                a11ySelectedValue={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                })}
                                                a11yOptionsAvailable={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                })}
                                                a11yInstructions={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                })}
                                                lazyLoading={true}
                                                loadingType={"spinner"}
                                                customEditability={"default"}
                                                customEditabilityExpression={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                })}
                                                ariaLabel={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                                })}
                                                selectedItemsSorting={"none"}
                                                filterInputDebounceInterval={200}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AWSAuthentication.Settings_NewEdit.comboBox1"
                                                })} />
                                        ]}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "AWS Region" }, "args": {} }
                                        })}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AWSAuthentication.Settings_NewEdit.comboBox1"
                                        })}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AWSAuthentication.Settings_NewEdit.comboBox1"
                                        })} />,
                                    <$FormGroup key="p.AWSAuthentication.Settings_NewEdit.radioButtons1$formGroup"
                                        $widgetId="p.AWSAuthentication.Settings_NewEdit.radioButtons1$formGroup"
                                        class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                        control={[
                                            <$RadioButtonGroup key="p.AWSAuthentication.Settings_NewEdit.radioButtons1"
                                                $widgetId="p.AWSAuthentication.Settings_NewEdit.radioButtons1"
                                                value={AttributeProperty({
                                                    "scope": "p.AWSAuthentication.Settings_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "AWSAuthentication.Settings",
                                                    "attribute": "UseStaticCredentials",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                readOnlyStyle={"control"}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AWSAuthentication.Settings_NewEdit.radioButtons1"
                                                })} />
                                        ]}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Use static credentials" }, "args": {} }
                                        })}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AWSAuthentication.Settings_NewEdit.radioButtons1"
                                        })}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AWSAuthentication.Settings_NewEdit.radioButtons1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.AWSAuthentication.Settings_NewEdit.actionButton1$visibility"
                                        $widgetId="p.AWSAuthentication.Settings_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.AWSAuthentication.Settings_NewEdit.actionButton1"
                                                $widgetId="p.AWSAuthentication.Settings_NewEdit.actionButton1"
                                                buttonId={"p.AWSAuthentication.Settings_NewEdit.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                renderType={"button"}
                                                buttonClass={"btn-primary"}
                                                caption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                                })}
                                                tooltip={TextProperty({
                                                    "value": ""
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Settings": { "widget": "$Settings", "source": "object" } }, "config": { "operationId": "6v8WF7Nt7FWGBq6KLxA0hg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.AWSAuthentication.Settings_NewEdit.actionButton2"
                                        $widgetId="p.AWSAuthentication.Settings_NewEdit.actionButton2"
                                        buttonId={"p.AWSAuthentication.Settings_NewEdit.actionButton2"}
                                        class={"mx-name-actionButton2"}
                                        renderType={"button"}
                                        buttonClass={"btn-default"}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                        })}
                                        tooltip={TextProperty({
                                            "value": ""
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "UC6XpNoZ9lazCvGNBogZJQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Configure AWS Authentication Settings"
]);

export const classes = "";

export const cancelChangesOperationId = "PKokOKqIq1exDbFbwo8o2A";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
