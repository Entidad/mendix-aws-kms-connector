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
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Label } from "mendix/widgets/web/Label";
import { Table } from "mendix/widgets/web/Table";
import { TableRow } from "mendix/widgets/web/TableRow";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.PopupLayout.js";

const { $DataView, $Table, $TableRow, $Label, $FormGroup, $TextBox, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ DataView, Table, TableRow, Label, FormGroup, TextBox, ActionButton, ConditionalVisibilityWrapper });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.Encryption.SavePasswordExample_NewEdit.dataView"
        $widgetId="p.Encryption.SavePasswordExample_NewEdit.dataView"
        class={"mx-name-dataView form-vertical"}
        object={AssociationObjectProperty({
            "dataSourceId": "p.6",
            "scope": "$ExampleConfiguration",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": ""
        })}
        body={[
            <$Table key="p.Encryption.SavePasswordExample_NewEdit.table"
                $widgetId="p.Encryption.SavePasswordExample_NewEdit.table"
                class={"mx-name-table"}
                autoWidth={false}
                columnWidths={[
                    "25%",
                    "75%"
                ]}
                rows={[
                    <$TableRow key="p.Encryption.SavePasswordExample_NewEdit.table$row0"
                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.table$row0"
                        class={""}
                        cells={[
                            {
                                "header": true,
                                "class": "",
                                "content": [
                                    <$Label key="p.Encryption.SavePasswordExample_NewEdit.label2"
                                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.label2"
                                        class={"mx-name-label2"}
                                        id={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label2"
                                        })}
                                        caption={TextProperty({
                                            "value": "Title"
                                        })} />
                                ]
                            },
                            {
                                "class": "",
                                "content": [
                                    <$FormGroup key="p.Encryption.SavePasswordExample_NewEdit.textBox2$formGroup"
                                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        control={[
                                            <$TextBox key="p.Encryption.SavePasswordExample_NewEdit.textBox2"
                                                $widgetId="p.Encryption.SavePasswordExample_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                                    "path": "",
                                                    "entity": "Encryption.ExampleConfiguration",
                                                    "attribute": "Title",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={200}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                                        })}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                                        })} />
                                ]
                            }
                        ]} />,
                    <$TableRow key="p.Encryption.SavePasswordExample_NewEdit.table$row1"
                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.table$row1"
                        class={""}
                        cells={[
                            {
                                "header": true,
                                "class": "",
                                "content": [
                                    <$Label key="p.Encryption.SavePasswordExample_NewEdit.label3"
                                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.label3"
                                        class={"mx-name-label3"}
                                        id={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label3"
                                        })}
                                        caption={TextProperty({
                                            "value": "Username"
                                        })} />
                                ]
                            },
                            {
                                "class": "",
                                "content": [
                                    <$FormGroup key="p.Encryption.SavePasswordExample_NewEdit.textBox3$formGroup"
                                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        control={[
                                            <$TextBox key="p.Encryption.SavePasswordExample_NewEdit.textBox3"
                                                $widgetId="p.Encryption.SavePasswordExample_NewEdit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                                    "path": "",
                                                    "entity": "Encryption.ExampleConfiguration",
                                                    "attribute": "Username",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={200}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                                                })} />
                                        ]}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                                        })}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                                        })} />
                                ]
                            }
                        ]} />,
                    <$TableRow key="p.Encryption.SavePasswordExample_NewEdit.table$row2"
                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.table$row2"
                        class={""}
                        cells={[
                            {
                                "header": true,
                                "class": "",
                                "content": [
                                    <$Label key="p.Encryption.SavePasswordExample_NewEdit.label"
                                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.label"
                                        class={"mx-name-label"}
                                        id={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label"
                                        })}
                                        caption={TextProperty({
                                            "value": "Password"
                                        })} />
                                ]
                            },
                            {
                                "class": "",
                                "content": [
                                    <$FormGroup key="p.Encryption.SavePasswordExample_NewEdit.textBox$formGroup"
                                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.textBox$formGroup"
                                        class={"mx-name-textBox mx-textbox"}
                                        control={[
                                            <$TextBox key="p.Encryption.SavePasswordExample_NewEdit.textBox"
                                                $widgetId="p.Encryption.SavePasswordExample_NewEdit.textBox"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                                    "path": "",
                                                    "entity": "Encryption.ExampleConfiguration",
                                                    "attribute": "Password",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={200}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                                                })} />
                                        ]}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                                        })}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                                        })} />
                                ]
                            }
                        ]} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$ActionButton key="p.Encryption.SavePasswordExample_NewEdit.cancelButton1"
                $widgetId="p.Encryption.SavePasswordExample_NewEdit.cancelButton1"
                buttonId={"p.Encryption.SavePasswordExample_NewEdit.cancelButton1"}
                class={"mx-name-cancelButton1"}
                renderType={"button"}
                buttonClass={"btn-default"}
                caption={ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                })}
                tooltip={TextProperty({
                    "value": ""
                })}
                icon={WebIconProperty({
                    "icon": { "type": "image", "iconUrl": "img/System$Images$Cancel.png" }
                })}
                action={ActionProperty({
                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "2L1As/yHvlaf7Bm7ixtolg", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />,
            <$ConditionalVisibilityWrapper key="p.Encryption.SavePasswordExample_NewEdit.actionButton1$visibility"
                $widgetId="p.Encryption.SavePasswordExample_NewEdit.actionButton1$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p.Encryption.SavePasswordExample_NewEdit.actionButton1"
                        $widgetId="p.Encryption.SavePasswordExample_NewEdit.actionButton1"
                        buttonId={"p.Encryption.SavePasswordExample_NewEdit.actionButton1"}
                        class={"mx-name-actionButton1"}
                        renderType={"button"}
                        buttonClass={"btn-default"}
                        caption={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                        })}
                        tooltip={TextProperty({
                            "value": ""
                        })}
                        icon={WebIconProperty({
                            "icon": { "type": "image", "iconUrl": "img/System$Images$Microflow.png" }
                        })}
                        action={ActionProperty({
                            "action": { "type": "callMicroflow", "argMap": { "ExampleConfiguration": { "widget": "$ExampleConfiguration", "source": "object" } }, "config": { "operationId": "/RMg9PeZlV2/p/Ath7HTeg", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                            "abortOnServerValidation": true
                        })} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Example Configuration"
]);

export const classes = "mx-window-view";

export const cancelChangesOperationId = "V5oEAUGiRFyq96trUuLbDQ";
export const style = {};
export const content = { ...parentContent,
    "Encryption.PopupLayout.Main": region$Main,
};
