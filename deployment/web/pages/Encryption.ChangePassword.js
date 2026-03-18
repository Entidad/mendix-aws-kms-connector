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
    <$DataView key="p.Encryption.ChangePassword.dataView"
        $widgetId="p.Encryption.ChangePassword.dataView"
        class={"mx-name-dataView form-vertical"}
        object={AssociationObjectProperty({
            "dataSourceId": "p.6",
            "scope": "$PasswordData",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": ""
        })}
        body={[
            <$Fragment key="p.Encryption.ChangePassword.snippetCallWidget1"
                $widgetId="p.Encryption.ChangePassword.snippetCallWidget1"
                content={[
                    <$Table key="p.Encryption.ChangePasswordSnippet.table"
                        $widgetId="p.Encryption.ChangePasswordSnippet.table"
                        class={"mx-name-table"}
                        autoWidth={false}
                        columnWidths={[
                            "25%",
                            "75%"
                        ]}
                        rows={[
                            <$TableRow key="p.Encryption.ChangePassword.table$row0"
                                $widgetId="p.Encryption.ChangePassword.table$row0"
                                class={""}
                                cells={[
                                    {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                            <$Label key="p.Encryption.ChangePasswordSnippet.label2"
                                                $widgetId="p.Encryption.ChangePasswordSnippet.label2"
                                                class={"mx-name-label2"}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ChangePasswordSnippet.label2"
                                                })}
                                                caption={TextProperty({
                                                    "value": "New password"
                                                })} />
                                        ]
                                    },
                                    {
                                        "class": "",
                                        "content": [
                                            <$FormGroup key="p.Encryption.ChangePasswordSnippet.textBox2$formGroup"
                                                $widgetId="p.Encryption.ChangePasswordSnippet.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                control={[
                                                    <$TextBox key="p.Encryption.ChangePasswordSnippet.textBox2"
                                                        $widgetId="p.Encryption.ChangePasswordSnippet.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "$PasswordData",
                                                            "path": "",
                                                            "entity": "Encryption.PasswordData",
                                                            "attribute": "NewPassword",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={true}
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
                                                            "widgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
                                                        })} />
                                                ]}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
                                                })}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
                                                })} />
                                        ]
                                    }
                                ]} />,
                            <$TableRow key="p.Encryption.ChangePassword.table$row1"
                                $widgetId="p.Encryption.ChangePassword.table$row1"
                                class={""}
                                cells={[
                                    {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                            <$Label key="p.Encryption.ChangePasswordSnippet.label"
                                                $widgetId="p.Encryption.ChangePasswordSnippet.label"
                                                class={"mx-name-label"}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ChangePasswordSnippet.label"
                                                })}
                                                caption={TextProperty({
                                                    "value": "Confirm password"
                                                })} />
                                        ]
                                    },
                                    {
                                        "class": "",
                                        "content": [
                                            <$FormGroup key="p.Encryption.ChangePasswordSnippet.textBox$formGroup"
                                                $widgetId="p.Encryption.ChangePasswordSnippet.textBox$formGroup"
                                                class={"mx-name-textBox mx-textbox"}
                                                control={[
                                                    <$TextBox key="p.Encryption.ChangePasswordSnippet.textBox"
                                                        $widgetId="p.Encryption.ChangePasswordSnippet.textBox"
                                                        inputValue={AttributeProperty({
                                                            "scope": "$PasswordData",
                                                            "path": "",
                                                            "entity": "Encryption.PasswordData",
                                                            "attribute": "ConfirmPassword",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={true}
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
                                                            "widgetId": "p.Encryption.ChangePasswordSnippet.textBox"
                                                        })} />
                                                ]}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ChangePasswordSnippet.textBox"
                                                })}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.Encryption.ChangePasswordSnippet.textBox"
                                                })} />
                                        ]
                                    }
                                ]} />
                        ]} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$ConditionalVisibilityWrapper key="p.Encryption.ChangePassword.actionButton1$visibility"
                $widgetId="p.Encryption.ChangePassword.actionButton1$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p.Encryption.ChangePassword.actionButton1"
                        $widgetId="p.Encryption.ChangePassword.actionButton1"
                        buttonId={"p.Encryption.ChangePassword.actionButton1"}
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
                            "icon": { "type": "image", "iconUrl": "img/System$Images$Save.png" }
                        })}
                        action={ActionProperty({
                            "action": { "type": "callMicroflow", "argMap": { "PasswordData": { "widget": "$PasswordData", "source": "object" } }, "config": { "operationId": "tMsbMSTsy1iIgGDIFxzeBw", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                            "abortOnServerValidation": true
                        })} />
                ]} />,
            <$ActionButton key="p.Encryption.ChangePassword.cancelButton1"
                $widgetId="p.Encryption.ChangePassword.cancelButton1"
                buttonId={"p.Encryption.ChangePassword.cancelButton1"}
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
                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "A9FKjd3kkFeU//+ceoNbAw", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Page Title"
]);

export const classes = "mx-window-view";

export const cancelChangesOperationId = "yJ+b6Qw9S1SEtW8BK3TQ0Q";
export const closeButton = "p.Encryption.ChangePassword.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Encryption.PopupLayout.Main": region$Main,
};
