import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicFileProperty } from "mendix/DynamicFileProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { FileUploadProperty } from "mendix/FileUploadProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FileManager } from "mendix/widgets/web/FileManager";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Label } from "mendix/widgets/web/Label";
import { Table } from "mendix/widgets/web/Table";
import { TableRow } from "mendix/widgets/web/TableRow";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.PopupLayout.js";

const { $Div, $DataView, $Text, $Table, $TableRow, $Label, $FormGroup, $TextBox, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Text, Table, TableRow, Label, FormGroup, TextBox, FileManager, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.Encryption.PrivateKey_NewEdit.layoutGrid1"
        $widgetId="p.Encryption.PrivateKey_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        content={[
            <$Div key="p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0"
                $widgetId="p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0"
                class={"row"}
                content={[
                    <$Div key="p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        content={[
                            <$DataView key="p.Encryption.PrivateKey_NewEdit.dataView1"
                                $widgetId="p.Encryption.PrivateKey_NewEdit.dataView1"
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
                                    <$DataView key="p.Encryption.PrivateKey_NewEdit.dataView2"
                                        $widgetId="p.Encryption.PrivateKey_NewEdit.dataView2"
                                        class={"mx-name-dataView2 form-horizontal"}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p.15",
                                            "scope": "$PGPCertificate",
                                            "editable": true,
                                            "path": "Encryption.SecretKey_PublicKey/Encryption.PGPCertificate",
                                            "operationId": "ld/mG+IRZ1qHyJLeoJYkiQ"
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": ""
                                        })}
                                        body={[
                                            <$Text key="p.Encryption.PrivateKey_NewEdit.label4"
                                                $widgetId="p.Encryption.PrivateKey_NewEdit.label4"
                                                class={"mx-name-label4"}
                                                caption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Public Key Pair" }, "args": {} }
                                                })}
                                                renderMode={"h2"} />,
                                            <$Table key="p.Encryption.PrivateKey_NewEdit.table3"
                                                $widgetId="p.Encryption.PrivateKey_NewEdit.table3"
                                                class={"mx-name-table3"}
                                                autoWidth={false}
                                                columnWidths={[
                                                    "25%",
                                                    "75%"
                                                ]}
                                                rows={[
                                                    <$TableRow key="p.Encryption.PrivateKey_NewEdit.table3$row0"
                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.table3$row0"
                                                        class={""}
                                                        cells={[
                                                            {
                                                                "header": true,
                                                                "class": "",
                                                                "content": [
                                                                    <$Label key="p.Encryption.PrivateKey_NewEdit.label5"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.label5"
                                                                        class={"mx-name-label5"}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.label5"
                                                                        })}
                                                                        caption={TextProperty({
                                                                            "value": "Name"
                                                                        })} />
                                                                ]
                                                            },
                                                            {
                                                                "class": "",
                                                                "content": [
                                                                    <$FormGroup key="p.Encryption.PrivateKey_NewEdit.textBox2$formGroup"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.textBox2$formGroup"
                                                                        class={"mx-name-textBox2 mx-textbox"}
                                                                        control={[
                                                                            <$TextBox key="p.Encryption.PrivateKey_NewEdit.textBox2"
                                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.textBox2"
                                                                                inputValue={AttributeProperty({
                                                                                    "scope": "p.Encryption.PrivateKey_NewEdit.dataView2",
                                                                                    "path": "",
                                                                                    "entity": "Encryption.PGPCertificate",
                                                                                    "attribute": "Name",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                    "isList": false,
                                                                                    "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                    "validation": null,
                                                                                    "formatting": { }
                                                                                })}
                                                                                isPassword={false}
                                                                                placeholder={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })}
                                                                                mask={""}
                                                                                readOnlyStyle={"text"}
                                                                                maxLength={400}
                                                                                autocomplete={"on"}
                                                                                submitWhileEditing={false}
                                                                                submitDelay={300}
                                                                                id={DerivedUniqueIdProperty({
                                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
                                                                                })} />
                                                                        ]}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
                                                                        })}
                                                                        width={4}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
                                                                        })} />
                                                                ]
                                                            }
                                                        ]} />,
                                                    <$TableRow key="p.Encryption.PrivateKey_NewEdit.table3$row1"
                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.table3$row1"
                                                        class={""}
                                                        cells={[
                                                            {
                                                                "header": true,
                                                                "class": "",
                                                                "content": [
                                                                    <$Label key="p.Encryption.PrivateKey_NewEdit.label6"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.label6"
                                                                        class={"mx-name-label6"}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.label6"
                                                                        })}
                                                                        caption={TextProperty({
                                                                            "value": "File"
                                                                        })} />
                                                                ]
                                                            },
                                                            {
                                                                "class": "",
                                                                "content": [
                                                                    <$FormGroup key="p.Encryption.PrivateKey_NewEdit.fileManager4$formGroup"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.fileManager4$formGroup"
                                                                        class={"mx-fileinput mx-name-fileManager4 mx-filemanager"}
                                                                        control={[
                                                                            <$FileManager key="p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                                                download={DynamicFileProperty({
                                                                                    "scope": "p.Encryption.PrivateKey_NewEdit.dataView2"
                                                                                })}
                                                                                upload={FileUploadProperty({
                                                                                    "scope": "p.Encryption.PrivateKey_NewEdit.dataView2"
                                                                                })}
                                                                                showInBrowser={false}
                                                                                maxFileSize={5}
                                                                                extensions={""}
                                                                                id={DerivedUniqueIdProperty({
                                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                                                })} />
                                                                        ]}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                                        })}
                                                                        width={4}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                                        })} />
                                                                ]
                                                            }
                                                        ]} />
                                                ]} />
                                        ]}
                                        hideFooter={true} />,
                                    <$Text key="p.Encryption.PrivateKey_NewEdit.label7"
                                        $widgetId="p.Encryption.PrivateKey_NewEdit.label7"
                                        class={"mx-name-label7"}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Private Key" }, "args": {} }
                                        })}
                                        renderMode={"h2"} />,
                                    <$Table key="p.Encryption.PrivateKey_NewEdit.table4"
                                        $widgetId="p.Encryption.PrivateKey_NewEdit.table4"
                                        class={"mx-name-table4"}
                                        autoWidth={false}
                                        columnWidths={[
                                            "25%",
                                            "75%"
                                        ]}
                                        rows={[
                                            <$TableRow key="p.Encryption.PrivateKey_NewEdit.table4$row0"
                                                $widgetId="p.Encryption.PrivateKey_NewEdit.table4$row0"
                                                class={""}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PrivateKey_NewEdit.label2"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.label2"
                                                                class={"mx-name-label2"}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.label2"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": "Reference"
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PrivateKey_NewEdit.textBox3$formGroup"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.textBox3$formGroup"
                                                                class={"mx-name-textBox3 mx-textbox"}
                                                                control={[
                                                                    <$TextBox key="p.Encryption.PrivateKey_NewEdit.textBox3"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.textBox3"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                                            "path": "",
                                                                            "entity": "Encryption.PGPCertificate",
                                                                            "attribute": "Reference",
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
                                                                        maxLength={100}
                                                                        autocomplete={"on"}
                                                                        submitWhileEditing={false}
                                                                        submitDelay={300}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
                                                                        })} />
                                                                ]}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />,
                                            <$TableRow key="p.Encryption.PrivateKey_NewEdit.table4$row1"
                                                $widgetId="p.Encryption.PrivateKey_NewEdit.table4$row1"
                                                class={""}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PrivateKey_NewEdit.label1"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.label1"
                                                                class={"mx-name-label1"}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.label1"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": "Email"
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PrivateKey_NewEdit.textBox1$formGroup"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.textBox1$formGroup"
                                                                class={"mx-name-textBox1 mx-textbox"}
                                                                control={[
                                                                    <$TextBox key="p.Encryption.PrivateKey_NewEdit.textBox1"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.textBox1"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                                            "path": "",
                                                                            "entity": "Encryption.PGPCertificate",
                                                                            "attribute": "EmailAddress",
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
                                                                        maxLength={50}
                                                                        autocomplete={"on"}
                                                                        submitWhileEditing={false}
                                                                        submitDelay={300}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
                                                                        })} />
                                                                ]}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />,
                                            <$TableRow key="p.Encryption.PrivateKey_NewEdit.table4$row2"
                                                $widgetId="p.Encryption.PrivateKey_NewEdit.table4$row2"
                                                class={""}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PrivateKey_NewEdit.label8"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.label8"
                                                                class={"mx-name-label8"}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.label8"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": "Name"
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PrivateKey_NewEdit.textBox4$formGroup"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.textBox4$formGroup"
                                                                class={"mx-name-textBox4 mx-textbox"}
                                                                control={[
                                                                    <$TextBox key="p.Encryption.PrivateKey_NewEdit.textBox4"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.textBox4"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                                            "path": "",
                                                                            "entity": "Encryption.PGPCertificate",
                                                                            "attribute": "Name",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                            "validation": null,
                                                                            "formatting": { }
                                                                        })}
                                                                        isPassword={false}
                                                                        placeholder={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })}
                                                                        mask={""}
                                                                        readOnlyStyle={"text"}
                                                                        maxLength={400}
                                                                        autocomplete={"on"}
                                                                        submitWhileEditing={false}
                                                                        submitDelay={300}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
                                                                        })} />
                                                                ]}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />,
                                            <$TableRow key="p.Encryption.PrivateKey_NewEdit.table4$row3"
                                                $widgetId="p.Encryption.PrivateKey_NewEdit.table4$row3"
                                                class={""}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PrivateKey_NewEdit.label9"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.label9"
                                                                class={"mx-name-label9"}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.label9"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": "Pass Phrase"
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PrivateKey_NewEdit.textBox5$formGroup"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.textBox5$formGroup"
                                                                class={"mx-name-textBox5 mx-textbox"}
                                                                control={[
                                                                    <$TextBox key="p.Encryption.PrivateKey_NewEdit.textBox5"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.textBox5"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                                            "path": "",
                                                                            "entity": "Encryption.PGPCertificate",
                                                                            "attribute": "PassPhrase_Plain",
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
                                                                        maxLength={20}
                                                                        autocomplete={"on"}
                                                                        submitWhileEditing={false}
                                                                        submitDelay={300}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
                                                                        })} />
                                                                ]}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />,
                                            <$TableRow key="p.Encryption.PrivateKey_NewEdit.table4$row4"
                                                $widgetId="p.Encryption.PrivateKey_NewEdit.table4$row4"
                                                class={""}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PrivateKey_NewEdit.label10"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.label10"
                                                                class={"mx-name-label10"}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.label10"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": "File"
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PrivateKey_NewEdit.fileManager3$formGroup"
                                                                $widgetId="p.Encryption.PrivateKey_NewEdit.fileManager3$formGroup"
                                                                class={"mx-fileinput mx-name-fileManager3 mx-filemanager"}
                                                                control={[
                                                                    <$FileManager key="p.Encryption.PrivateKey_NewEdit.fileManager3"
                                                                        $widgetId="p.Encryption.PrivateKey_NewEdit.fileManager3"
                                                                        download={DynamicFileProperty({
                                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView1"
                                                                        })}
                                                                        upload={FileUploadProperty({
                                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView1"
                                                                        })}
                                                                        showInBrowser={false}
                                                                        maxFileSize={5}
                                                                        extensions={""}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
                                                                        })} />
                                                                ]}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />
                                        ]} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.Encryption.PrivateKey_NewEdit.microflowButton3$visibility"
                                        $widgetId="p.Encryption.PrivateKey_NewEdit.microflowButton3$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.Encryption.PrivateKey_NewEdit.microflowButton3"
                                                $widgetId="p.Encryption.PrivateKey_NewEdit.microflowButton3"
                                                buttonId={"p.Encryption.PrivateKey_NewEdit.microflowButton3"}
                                                class={"mx-name-microflowButton3"}
                                                renderType={"button"}
                                                buttonClass={"btn-success"}
                                                caption={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Upload" }, "args": {} }
                                                })}
                                                tooltip={TextProperty({
                                                    "value": ""
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Certificate": { "widget": "$PGPCertificate", "source": "object" } }, "config": { "operationId": "MJDkzR1ohl6Mn8LXu/SqZg", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.Encryption.PrivateKey_NewEdit.cancelButton1"
                                        $widgetId="p.Encryption.PrivateKey_NewEdit.cancelButton1"
                                        buttonId={"p.Encryption.PrivateKey_NewEdit.cancelButton1"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "vJ3UInilZlCu/TUaodaDOg", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "External Certificate Details"
]);

export const classes = "page-form page-form-default";

export const cancelChangesOperationId = "tgOVpXi+j1qqvPGU6u/2Mw";
export const closeButton = "p.Encryption.PrivateKey_NewEdit.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Encryption.PopupLayout.Main": region$Main,
};
