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
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.Encryption.Certificate_Generate.layoutGrid1"
        $widgetId="p.Encryption.Certificate_Generate.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        content={[
            <$Div key="p.Encryption.Certificate_Generate.layoutGrid1$row0"
                $widgetId="p.Encryption.Certificate_Generate.layoutGrid1$row0"
                class={"row"}
                content={[
                    <$Div key="p.Encryption.Certificate_Generate.layoutGrid1$row0$column0"
                        $widgetId="p.Encryption.Certificate_Generate.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        content={[
                            <$DataView key="p.Encryption.Certificate_Generate.dataView1"
                                $widgetId="p.Encryption.Certificate_Generate.dataView1"
                                class={"mx-name-dataView1 form-horizontal"}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$PGPCertificate",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": ""
                                })}
                                body={[
                                    <$FormGroup key="p.Encryption.Certificate_Generate.textBox8$formGroup"
                                        $widgetId="p.Encryption.Certificate_Generate.textBox8$formGroup"
                                        class={"mx-name-textBox8 mx-textbox"}
                                        control={[
                                            <$TextBox key="p.Encryption.Certificate_Generate.textBox8"
                                                $widgetId="p.Encryption.Certificate_Generate.textBox8"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.Certificate_Generate.dataView1",
                                                    "path": "",
                                                    "entity": "Encryption.PGPCertificate",
                                                    "attribute": "Reference",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "This field is required" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={100}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.Certificate_Generate.textBox8"
                                                })} />
                                        ]}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Reference" }, "args": {} }
                                        })}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.Certificate_Generate.textBox8"
                                        })}
                                        width={4}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.Certificate_Generate.textBox8"
                                        })} />,
                                    <$FormGroup key="p.Encryption.Certificate_Generate.textBox9$formGroup"
                                        $widgetId="p.Encryption.Certificate_Generate.textBox9$formGroup"
                                        class={"mx-name-textBox9 mx-textbox"}
                                        control={[
                                            <$TextBox key="p.Encryption.Certificate_Generate.textBox9"
                                                $widgetId="p.Encryption.Certificate_Generate.textBox9"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.Certificate_Generate.dataView1",
                                                    "path": "",
                                                    "entity": "Encryption.PGPCertificate",
                                                    "attribute": "EmailAddress",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "This field is required" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={50}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.Certificate_Generate.textBox9"
                                                })} />
                                        ]}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Email address" }, "args": {} }
                                        })}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.Certificate_Generate.textBox9"
                                        })}
                                        width={4}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.Certificate_Generate.textBox9"
                                        })} />,
                                    <$FormGroup key="p.Encryption.Certificate_Generate.textBox6$formGroup"
                                        $widgetId="p.Encryption.Certificate_Generate.textBox6$formGroup"
                                        class={"mx-name-textBox6 mx-textbox"}
                                        control={[
                                            <$TextBox key="p.Encryption.Certificate_Generate.textBox6"
                                                $widgetId="p.Encryption.Certificate_Generate.textBox6"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.Certificate_Generate.dataView1",
                                                    "path": "",
                                                    "entity": "Encryption.PGPCertificate",
                                                    "attribute": "PassPhrase_Plain",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "This field is required" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={20}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.Certificate_Generate.textBox6"
                                                })} />
                                        ]}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Pass phrase  plain" }, "args": {} }
                                        })}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.Certificate_Generate.textBox6"
                                        })}
                                        width={4}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.Certificate_Generate.textBox6"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.Encryption.Certificate_Generate.actionButton1$visibility"
                                        $widgetId="p.Encryption.Certificate_Generate.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.Encryption.Certificate_Generate.actionButton1"
                                                $widgetId="p.Encryption.Certificate_Generate.actionButton1"
                                                buttonId={"p.Encryption.Certificate_Generate.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                renderType={"button"}
                                                buttonClass={"btn-success"}
                                                caption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Generate" }, "args": {} }
                                                })}
                                                tooltip={TextProperty({
                                                    "value": ""
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Certificate_PrivateKey": { "widget": "$PGPCertificate", "source": "object" } }, "config": { "operationId": "9cprXO7fZVeqXvXW4PCpJw", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.Encryption.Certificate_Generate.cancelButton1"
                                        $widgetId="p.Encryption.Certificate_Generate.cancelButton1"
                                        buttonId={"p.Encryption.Certificate_Generate.cancelButton1"}
                                        class={"mx-name-cancelButton1"}
                                        renderType={"button"}
                                        buttonClass={"btn-default"}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                        })}
                                        tooltip={TextProperty({
                                            "value": ""
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "/ruWJhMzbVe9M8RgTFjfxQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Certificate"
]);

export const classes = "page-form page-form-default";

export const cancelChangesOperationId = "Cf0KC/gzf1mgf0dLMXYoPg";
export const closeButton = "p.Encryption.Certificate_Generate.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Encryption.PopupLayout.Main": region$Main,
};
