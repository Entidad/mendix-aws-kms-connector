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
import { Fragment } from "mendix/widgets/web/Fragment";
import { Label } from "mendix/widgets/web/Label";
import { Table } from "mendix/widgets/web/Table";
import { TableRow } from "mendix/widgets/web/TableRow";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.PopupLayout.js";

const { $DataView, $Fragment, $Table, $TableRow, $Label, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, Fragment, Table, TableRow, Label, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.Encryption.ChangePasswordExample_NewEdit.dataView"
        $widgetId="p.Encryption.ChangePasswordExample_NewEdit.dataView"
        class={"mx-name-dataView form-vertical"}
        object={AssociationObjectProperty({
            "dataSourceId": "p.8",
            "scope": "$ExampleConfiguration",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": ""
        })}
        body={[
            <$Fragment key="p.Encryption.ChangePasswordExample_NewEdit.snippetCallWidget1"
                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.snippetCallWidget1"
                content={[
                    <$Table key="p.Encryption.ExampleConfiguration.table"
                        $widgetId="p.Encryption.ExampleConfiguration.table"
                        class={"mx-name-table"}
                        autoWidth={false}
                        columnWidths={[
                            "25%",
                            "75%"
                        ]}
                        rows={[
                            <$TableRow key="p.Encryption.ChangePasswordExample_NewEdit.table$row0"
                                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.table$row0"
                                class={""}
                                cells={[
                                    {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                            <$Label key="p.Encryption.ExampleConfiguration.label2"
                                                $widgetId="p.Encryption.ExampleConfiguration.label2"
                                                class={"mx-name-label2"}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ExampleConfiguration.label2"
                                                })}
                                                caption={TextProperty({
                                                    "value": "Title"
                                                })} />
                                        ]
                                    },
                                    {
                                        "class": "",
                                        "content": [
                                            <$FormGroup key="p.Encryption.ExampleConfiguration.textBox2$formGroup"
                                                $widgetId="p.Encryption.ExampleConfiguration.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                control={[
                                                    <$TextBox key="p.Encryption.ExampleConfiguration.textBox2"
                                                        $widgetId="p.Encryption.ExampleConfiguration.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "$ExampleConfiguration",
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
                                                            "widgetId": "p.Encryption.ExampleConfiguration.textBox2"
                                                        })} />
                                                ]}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ExampleConfiguration.textBox2"
                                                })}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.Encryption.ExampleConfiguration.textBox2"
                                                })} />
                                        ]
                                    }
                                ]} />,
                            <$TableRow key="p.Encryption.ChangePasswordExample_NewEdit.table$row1"
                                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.table$row1"
                                class={""}
                                cells={[
                                    {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                            <$Label key="p.Encryption.ExampleConfiguration.label3"
                                                $widgetId="p.Encryption.ExampleConfiguration.label3"
                                                class={"mx-name-label3"}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ExampleConfiguration.label3"
                                                })}
                                                caption={TextProperty({
                                                    "value": "Username"
                                                })} />
                                        ]
                                    },
                                    {
                                        "class": "",
                                        "content": [
                                            <$FormGroup key="p.Encryption.ExampleConfiguration.textBox3$formGroup"
                                                $widgetId="p.Encryption.ExampleConfiguration.textBox3$formGroup"
                                                class={"mx-name-textBox3 mx-textbox"}
                                                control={[
                                                    <$TextBox key="p.Encryption.ExampleConfiguration.textBox3"
                                                        $widgetId="p.Encryption.ExampleConfiguration.textBox3"
                                                        inputValue={AttributeProperty({
                                                            "scope": "$ExampleConfiguration",
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
                                                            "widgetId": "p.Encryption.ExampleConfiguration.textBox3"
                                                        })} />
                                                ]}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ExampleConfiguration.textBox3"
                                                })}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.Encryption.ExampleConfiguration.textBox3"
                                                })} />
                                        ]
                                    }
                                ]} />,
                            <$TableRow key="p.Encryption.ChangePasswordExample_NewEdit.table$row2"
                                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.table$row2"
                                class={""}
                                cells={[
                                    {
                                        "class": "",
                                        "content": undefined
                                    },
                                    {
                                        "class": "",
                                        "content": [
                                            <$ConditionalVisibilityWrapper key="p.Encryption.ExampleConfiguration.microflowButton$visibility"
                                                $widgetId="p.Encryption.ExampleConfiguration.microflowButton$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.Encryption.ExampleConfiguration.microflowButton"
                                                        $widgetId="p.Encryption.ExampleConfiguration.microflowButton"
                                                        buttonId={"p.Encryption.ExampleConfiguration.microflowButton"}
                                                        class={"mx-name-microflowButton"}
                                                        renderType={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                                                        })}
                                                        tooltip={TextProperty({
                                                            "value": ""
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "ExampleConfiguration": { "widget": "$ExampleConfiguration", "source": "object" } }, "config": { "operationId": "tapvpwCBIlarkTsbC9yoKA", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]
                                    }
                                ]} />
                        ]} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$ActionButton key="p.Encryption.ChangePasswordExample_NewEdit.saveButton1"
                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.saveButton1"
                buttonId={"p.Encryption.ChangePasswordExample_NewEdit.saveButton1"}
                class={"mx-name-saveButton1"}
                renderType={"button"}
                buttonClass={"btn-default"}
                caption={ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                })}
                tooltip={TextProperty({
                    "value": ""
                })}
                icon={WebIconProperty({
                    "icon": { "type": "image", "iconUrl": "img/System$Images$Save.png" }
                })}
                action={ActionProperty({
                    "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.Encryption.ChangePasswordExample_NewEdit.dataView", "source": "object" } }, "config": { "operationId": "loNb04wCll6RDonWi8rNLg", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />,
            <$ActionButton key="p.Encryption.ChangePasswordExample_NewEdit.cancelButton1"
                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.cancelButton1"
                buttonId={"p.Encryption.ChangePasswordExample_NewEdit.cancelButton1"}
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
                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "jmNc9XOgwF6NgfN0SGOOyA", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Example Configuration"
]);

export const classes = "mx-window-view";

export const cancelChangesOperationId = "f1DWA8HrZVesWd0SyLuvhg";
export const closeButton = "p.Encryption.ChangePasswordExample_NewEdit.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Encryption.PopupLayout.Main": region$Main,
};
