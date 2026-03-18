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
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import * as HTMLElementWidgetModule from "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/htmlelement/HTMLElement.mjs";
const HTMLElement = Object.getOwnPropertyDescriptor(HTMLElementWidgetModule, "HTMLElement")?.value || Object.getOwnPropertyDescriptor(HTMLElementWidgetModule, "default")?.value;   
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_TopBar.js";
import { ACT_KMS_UnitTest_Reset } from "../nanoflows/AWSKMSConnector.ACT_KMS_UnitTest_Reset.js";
import { OCh_UnitTest_KeyUsage } from "../nanoflows/AWSKMSConnector.OCh_UnitTest_KeyUsage.js";
import { OCh_UnitTest_KeySpec } from "../nanoflows/AWSKMSConnector.OCh_UnitTest_KeySpec.js";
import { OCH_KMS_UnitTest_Reset } from "../nanoflows/AWSKMSConnector.OCH_KMS_UnitTest_Reset.js";

const { $Div, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Container, $DataView, $HTMLElement, $FormGroup, $RadioButtonGroup, $TextBox, $TextArea } = asPluginWidgets({ Div, Text, ConditionalVisibilityWrapper, ActionButton, Container, DataView, HTMLElement, FormGroup, RadioButtonGroup, TextBox, TextArea });

addEnumerations({
    "AWSKMSConnector.ENUM_KeyUsage": [
        [
            "ENCRYPT_DECRYPT",
            t([
                "Symmetric encryption keys"
            ])
        ],
        [
            "GENERATE_VERIFY_MAC",
            t([
                "HMAC (symmetric) signing keys"
            ])
        ],
        [
            "SIGN_VERIFY",
            t([
                "Asymmetric keys with key pairs (RSA , ECC_SECG_P256K1, ML-DSA or SM2)"
            ])
        ],
        [
            "KEY_AGREEMENT",
            t([
                "Asymmetric keys with NIST-standard elliptic curve key pairs"
            ])
        ]
    ],
    "AWSKMSConnector.ENUM_KeySpec": [
        [
            "SYMMETRIC_DEFAULT",
            t([
                "Symmetric key encryption"
            ])
        ],
        [
            "AES_128",
            t([
                "AES_128"
            ])
        ],
        [
            "AES_256",
            t([
                "AES_256"
            ])
        ],
        [
            "HMAC_224",
            t([
                "HMAC_224"
            ])
        ],
        [
            "HMAC_256",
            t([
                "HMAC_256"
            ])
        ],
        [
            "HMAC_384",
            t([
                "HMAC_384"
            ])
        ],
        [
            "HMAC_512",
            t([
                "HMAC_512"
            ])
        ],
        [
            "RSA_2048",
            t([
                "RSA_2048"
            ])
        ],
        [
            "RSA_3072",
            t([
                "RSA_3072"
            ])
        ],
        [
            "RSA_4096",
            t([
                "RSA_4096"
            ])
        ],
        [
            "ECC_NIST_P256",
            t([
                "ECC_NIST_P256 (secp256r1)"
            ])
        ],
        [
            "ECC_NIST_P384",
            t([
                "ECC_NIST_P384 (secp384r1)"
            ])
        ],
        [
            "ECC_NIST_P521",
            t([
                "ECC_NIST_P521 (secp521r1)"
            ])
        ],
        [
            "ECC_NIST_EDWARDS25519",
            t([
                "ECC_NIST_EDWARDS25519 (ed25519) - signing and verification only"
            ])
        ],
        [
            "ECC_SECG_P256K1",
            t([
                "ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies"
            ])
        ],
        [
            "ML_DSA_44",
            t([
                "ML_DSA_44"
            ])
        ],
        [
            "ML_DSA_65",
            t([
                "ML_DSA_65"
            ])
        ],
        [
            "ML_DSA_87",
            t([
                "ML_DSA_87"
            ])
        ],
        [
            "SM2",
            t([
                "SM2 (China Regions only)"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1"
        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        content={[
            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0"
                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0"
                class={"row"}
                content={[
                    <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0$column0"
                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0$column0"
                        class={"col-lg-9 col-md col"}
                        content={[
                            <$Text key="p.AWSKMSConnector.ClientManagedKeys_Tests.text40"
                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.text40"
                                class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                                caption={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "AWS Key Manager Demo" }, "args": {} }
                                })}
                                renderMode={"h1"} />
                        ]} />,
                    <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0$column1"
                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0$column1"
                        class={"col-lg-3 col-md col"}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5$visibility"
                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5"
                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5"
                                        buttonId={"p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5"}
                                        class={"mx-name-actionButton5 pull-right spacing-outer-bottom-medium"}
                                        renderType={"link"}
                                        role={"button"}
                                        buttonClass={"btn-default"}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Close page" }, "args": {} }
                                        })}
                                        tooltip={TextProperty({
                                            "value": ""
                                        })}
                                        icon={WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-eye-close" }
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "AWSKMSConnector/DemoDashboard.page.xml", "location": "content", "allowedRoles": [ "Administrator" ], "numberOfPagesToClose": { "type": "literalNumeric", "value": "1" } }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />,
    <$Container key="p.AWSKMSConnector.ClientManagedKeys_Tests.container1"
        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.container1"
        class={"mx-name-container1 background-secondary spacing-outer-left-large spacing-outer-right-large"}
        renderMode={"div"}
        content={[
            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2"
                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2"
                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                content={[
                    <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2$row0"
                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2$row0"
                        class={"row"}
                        content={[
                            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2$row0$column0"
                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2$row0$column0"
                                class={"col-lg col-md col"}
                                content={[
                                    <$DataView key="p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1"
                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1"
                                        class={"mx-name-dataView1 form-vertical"}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p.35",
                                            "scope": "$UnitTest",
                                            "editable": true
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": ""
                                        })}
                                        body={[
                                            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3"
                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3"
                                                class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid"}
                                                content={[
                                                    <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0"
                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0"
                                                        class={"row"}
                                                        content={[
                                                            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0$column0"
                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0$column0"
                                                                class={"col-lg-auto col-md col"}
                                                                content={[
                                                                    <$Text key="p.AWSKMSConnector.ClientManagedKeys_Tests.text6"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.text6"
                                                                        class={"mx-name-text6 spacing-outer-top-medium spacing-outer-bottom-medium"}
                                                                        caption={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Client Managed Keys" }, "args": {} }
                                                                        })}
                                                                        renderMode={"h2"} />
                                                                ]} />,
                                                            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0$column1"
                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0$column1"
                                                                class={"col-lg col-md col"} />
                                                        ]} />,
                                                    <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row1"
                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row1"
                                                        class={"row"}
                                                        content={[
                                                            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row1$column0"
                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row1$column0"
                                                                class={"col-lg col-md col"}
                                                                content={[
                                                                    <$HTMLElement key="p.AWSKMSConnector.ClientManagedKeys_Tests.hTMLElement3"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.hTMLElement3"
                                                                        tagName={"ol"}
                                                                        tagNameCustom={"div"}
                                                                        tagUseRepeat={false}
                                                                        tagContentMode={"innerHTML"}
                                                                        tagContentHTML={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "<li>Create a client managed key and get the generated KeyId.\r\n<ul>\r\n<li>Set <b>Key usage</b>=\"Symmetric encryption keys\"</li>\r\n<li>Set <b>Key spec</b>=\"Symmetric key encryption\"</li>\r\n<li>Set <b>Key description</b> with your context description or leave the string value pre-populated for your convenience\r\n</ul>\r\n</li>\r\n<li>Encrypt the text input string with the client managed key</li>\r\n<li>Decrypt the encrypted text string with the client managed key</li>" }, "args": {} }
                                                                        })}
                                                                        attributes={[]}
                                                                        events={[]}
                                                                        sanitizationConfigFull={""}
                                                                        class={"mx-name-hTMLElement3"} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2"
                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2"
                                                        class={"row"}
                                                        content={[
                                                            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2$column0"
                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2$column0"
                                                                class={"col-lg col-md col"}
                                                                content={[
                                                                    <$Container key="p.AWSKMSConnector.ClientManagedKeys_Tests.container3"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.container3"
                                                                        class={"mx-name-container3 panel background-main spacing-outer-top-large spacing-outer-bottom-large spacing-inner-top-large spacing-inner-right-large spacing-inner-left-large spacing-inner-bottom-large"}
                                                                        renderMode={"div"}
                                                                        content={[
                                                                            <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1$formGroup"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1$formGroup"
                                                                                class={"mx-name-radioButtons1 mx-radiobuttons"}
                                                                                control={[
                                                                                    <$RadioButtonGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1"
                                                                                        value={AttributeProperty({
                                                                                            "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                            "path": "",
                                                                                            "entity": "AWSKMSConnector.UnitTest",
                                                                                            "attribute": "KeyUsage",
                                                                                            "onChange": { "type": "callNanoflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "nanoflow": () => OCh_UnitTest_KeyUsage, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                                                            "isList": false,
                                                                                            "validation": null
                                                                                        })}
                                                                                        readOnlyStyle={"control"}
                                                                                        id={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1"
                                                                                        })} />
                                                                                ]}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Key usage" }, "args": {} }
                                                                                })}
                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1"
                                                                                })}
                                                                                orientation={"vertical"}
                                                                                hasError={ValidationProperty({
                                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1"
                                                                                })} />,
                                                                            <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2$formGroup$visibility"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2$formGroup$visibility"
                                                                                visible={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "ENCRYPT_DECRYPT" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "GENERATE_VERIFY_MAC" } ] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "SIGN_VERIFY" } ] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "KEY_AGREEMENT" } ] } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                                })}
                                                                                contents={[
                                                                                    <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2$formGroup"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2$formGroup"
                                                                                        class={"mx-name-radioButtons2 mx-radiobuttons"}
                                                                                        control={[
                                                                                            <$RadioButtonGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2"
                                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2"
                                                                                                value={AttributeProperty({
                                                                                                    "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                                    "path": "",
                                                                                                    "entity": "AWSKMSConnector.UnitTest",
                                                                                                    "attribute": "KeySpec",
                                                                                                    "onChange": { "type": "callNanoflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "nanoflow": () => OCh_UnitTest_KeySpec, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                                                                    "isList": false,
                                                                                                    "validation": null
                                                                                                })}
                                                                                                readOnlyStyle={"control"}
                                                                                                id={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2"
                                                                                                })} />
                                                                                        ]}
                                                                                        caption={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Key spec" }, "args": {} }
                                                                                        })}
                                                                                        labelFor={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2"
                                                                                        })}
                                                                                        orientation={"vertical"}
                                                                                        hasError={ValidationProperty({
                                                                                            "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2"
                                                                                        })} />
                                                                                ]} />,
                                                                            <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1$formGroup"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1$formGroup"
                                                                                class={"mx-name-textBox1 mx-textbox"}
                                                                                control={[
                                                                                    <$TextBox key="p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1"
                                                                                        inputValue={AttributeProperty({
                                                                                            "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                            "path": "",
                                                                                            "entity": "AWSKMSConnector.UnitTest",
                                                                                            "attribute": "Description",
                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                            "isList": false,
                                                                                            "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "$UnitTest", "source": "object" } } },
                                                                                            "validation": null,
                                                                                            "formatting": { }
                                                                                        })}
                                                                                        isPassword={false}
                                                                                        placeholder={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                        })}
                                                                                        mask={""}
                                                                                        readOnlyStyle={"control"}
                                                                                        autocomplete={"on"}
                                                                                        submitWhileEditing={false}
                                                                                        submitDelay={300}
                                                                                        id={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1"
                                                                                        })} />
                                                                                ]}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Key description" }, "args": {} }
                                                                                })}
                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1"
                                                                                })}
                                                                                orientation={"vertical"}
                                                                                hasError={ValidationProperty({
                                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1"
                                                                                })} />
                                                                        ]}
                                                                        ariaHidden={false} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2$visibility"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": null } ] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeySpec" }, { "type": "literal", "value": null } ] }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2"
                                                                                buttonId={"p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2"}
                                                                                class={"mx-name-actionButton2 spacing-outer-right-medium spacing-outer-top-medium"}
                                                                                renderType={"button"}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Test KMS CreateKey" }, "args": {} }
                                                                                })}
                                                                                tooltip={TextProperty({
                                                                                    "value": ""
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "VzpLQUW6UluZhd3vENw5zA", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6$visibility"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "ENCRYPT_DECRYPT" } ] }, "else": { "type": "literal", "value": false } }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeySpec" }, { "type": "literal", "value": "AES_128" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeySpec" }, { "type": "literal", "value": "AES_256" } ] } }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6"
                                                                                buttonId={"p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6"}
                                                                                class={"mx-name-actionButton6 spacing-outer-top-medium spacing-outer-right-medium"}
                                                                                renderType={"button"}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Test GenerateDataKey" }, "args": {} }
                                                                                })}
                                                                                tooltip={TextProperty({
                                                                                    "value": "Returns a unique symmetric data key for use outside of AWS KMS. The \"Symmetric data key \" field  will be populated with the response from AWS KMS."
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "bESCNl6ISVeGFVOsVsgx5w", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7$visibility"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DataKeyCipherBlob" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7"
                                                                                buttonId={"p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7"}
                                                                                class={"mx-name-actionButton7 spacing-outer-right-medium spacing-outer-top-medium"}
                                                                                renderType={"button"}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Test DecryptDataKey" }, "args": {} }
                                                                                })}
                                                                                tooltip={TextProperty({
                                                                                    "value": "The \"Symmetric data key\" value will be replaced with the decrypted data key from AWS KMS"
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "43hZkSSe8VWBOw4x9baqjw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3$visibility"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "PlainText" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DecryptedText" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3"
                                                                                buttonId={"p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3"}
                                                                                class={"mx-name-actionButton3 spacing-outer-right-medium spacing-outer-top-medium"}
                                                                                renderType={"button"}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Test EncryptText with Key" }, "args": {} }
                                                                                })}
                                                                                tooltip={TextProperty({
                                                                                    "value": "The \"Text to encrypt\" is prepoluated for convenience but feel free to try different string values."
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "hBc4SFmH61m+RmYzF6oLdQ", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4$visibility"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CipherBlob" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DecryptedText" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4"
                                                                                buttonId={"p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4"}
                                                                                class={"mx-name-actionButton4 spacing-outer-right-medium spacing-outer-top-medium"}
                                                                                renderType={"button"}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Test DecryptText with Key" }, "args": {} }
                                                                                })}
                                                                                tooltip={TextProperty({
                                                                                    "value": "The \"Text to decrypt\" will be populated with the response from AWS KMS"
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "/MDAMHO0rl2Jxp2MTY2DFg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1$visibility"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1"
                                                                                buttonId={"p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1"}
                                                                                class={"mx-name-actionButton1 spacing-outer-top-medium spacing-outer-right-medium"}
                                                                                renderType={"button"}
                                                                                buttonClass={"btn-default"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Reset" }, "args": {} }
                                                                                })}
                                                                                tooltip={TextProperty({
                                                                                    "value": "Reset Unit Test and clear current KMS key reference"
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callNanoflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "nanoflow": () => ACT_KMS_UnitTest_Reset, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]} />,
                                                            <$Div key="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2$column1"
                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2$column1"
                                                                class={"col-lg col-md col"}
                                                                content={[
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.container2$visibility"
                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.container2$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Container key="p.AWSKMSConnector.ClientManagedKeys_Tests.container2"
                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.container2"
                                                                                class={"mx-name-container2 panel background-main spacing-outer-top-large spacing-outer-bottom-large spacing-inner-top-large spacing-inner-left-large spacing-inner-right-large"}
                                                                                renderMode={"div"}
                                                                                content={[
                                                                                    <$Text key="p.AWSKMSConnector.ClientManagedKeys_Tests.text8"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.text8"
                                                                                        class={"mx-name-text8 spacing-outer-top-medium spacing-outer-bottom-medium"}
                                                                                        caption={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Test Results" }, "args": {} }
                                                                                        })}
                                                                                        renderMode={"h4"} />,
                                                                                    <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2$formGroup"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2$formGroup"
                                                                                        class={"mx-name-textBox2 mx-textbox"}
                                                                                        control={[
                                                                                            <$TextBox key="p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2"
                                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2"
                                                                                                inputValue={AttributeProperty({
                                                                                                    "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                                    "path": "",
                                                                                                    "entity": "AWSKMSConnector.UnitTest",
                                                                                                    "attribute": "KeyId",
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
                                                                                                readOnlyStyle={"control"}
                                                                                                maxLength={200}
                                                                                                autocomplete={"on"}
                                                                                                submitWhileEditing={false}
                                                                                                submitDelay={300}
                                                                                                id={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2"
                                                                                                })} />
                                                                                        ]}
                                                                                        caption={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Key ID" }, "args": {} }
                                                                                        })}
                                                                                        labelFor={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2"
                                                                                        })}
                                                                                        orientation={"vertical"}
                                                                                        hasError={ValidationProperty({
                                                                                            "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2"
                                                                                        })} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1$formGroup$visibility"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1$formGroup$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1$formGroup"
                                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1$formGroup"
                                                                                                class={"mx-name-textArea1 mx-textarea"}
                                                                                                control={[
                                                                                                    <$TextArea key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1"
                                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1"
                                                                                                        inputValue={AttributeProperty({
                                                                                                            "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                                            "path": "",
                                                                                                            "entity": "AWSKMSConnector.UnitTest",
                                                                                                            "attribute": "PlainText",
                                                                                                            "onChange": { "type": "callNanoflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "nanoflow": () => OCH_KMS_UnitTest_Reset, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                                                                            "isList": false,
                                                                                                            "validation": null
                                                                                                        })}
                                                                                                        counterMessage={TextProperty({
                                                                                                            "value": ""
                                                                                                        })}
                                                                                                        maxLength={200}
                                                                                                        numberOfLines={5}
                                                                                                        autoGrow={false}
                                                                                                        placeholder={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                        })}
                                                                                                        readOnlyStyle={"control"}
                                                                                                        textTooLongMessage={TextProperty({
                                                                                                            "value": "Value too long."
                                                                                                        })}
                                                                                                        submitWhileEditing={false}
                                                                                                        submitDelay={300}
                                                                                                        id={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1"
                                                                                                        })} />
                                                                                                ]}
                                                                                                caption={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Text to encrypt" }, "args": {} }
                                                                                                })}
                                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1"
                                                                                                })}
                                                                                                orientation={"vertical"}
                                                                                                hasError={ValidationProperty({
                                                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1"
                                                                                                })} />
                                                                                        ]} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2$formGroup$visibility"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2$formGroup$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CipherBlob" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2$formGroup"
                                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2$formGroup"
                                                                                                class={"mx-name-textArea2 mx-textarea"}
                                                                                                control={[
                                                                                                    <$TextArea key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2"
                                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2"
                                                                                                        inputValue={AttributeProperty({
                                                                                                            "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                                            "path": "",
                                                                                                            "entity": "AWSKMSConnector.UnitTest",
                                                                                                            "attribute": "CipherBlob",
                                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                            "isList": false,
                                                                                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                                            "validation": null
                                                                                                        })}
                                                                                                        numberOfLines={5}
                                                                                                        autoGrow={false}
                                                                                                        placeholder={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                        })}
                                                                                                        readOnlyStyle={"control"}
                                                                                                        submitWhileEditing={false}
                                                                                                        submitDelay={300}
                                                                                                        id={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2"
                                                                                                        })} />
                                                                                                ]}
                                                                                                caption={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Encrypted text" }, "args": {} }
                                                                                                })}
                                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2"
                                                                                                })}
                                                                                                orientation={"vertical"}
                                                                                                hasError={ValidationProperty({
                                                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2"
                                                                                                })} />
                                                                                        ]} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3$formGroup$visibility"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3$formGroup$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DecryptedText" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3$formGroup"
                                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3$formGroup"
                                                                                                class={"mx-name-textArea3 mx-textarea"}
                                                                                                control={[
                                                                                                    <$TextArea key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3"
                                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3"
                                                                                                        inputValue={AttributeProperty({
                                                                                                            "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                                            "path": "",
                                                                                                            "entity": "AWSKMSConnector.UnitTest",
                                                                                                            "attribute": "DecryptedText",
                                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                            "isList": false,
                                                                                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                                            "validation": null
                                                                                                        })}
                                                                                                        numberOfLines={5}
                                                                                                        autoGrow={false}
                                                                                                        placeholder={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                        })}
                                                                                                        readOnlyStyle={"control"}
                                                                                                        submitWhileEditing={false}
                                                                                                        submitDelay={300}
                                                                                                        id={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3"
                                                                                                        })} />
                                                                                                ]}
                                                                                                caption={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Decrypted text" }, "args": {} }
                                                                                                })}
                                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3"
                                                                                                })}
                                                                                                orientation={"vertical"}
                                                                                                hasError={ValidationProperty({
                                                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3"
                                                                                                })} />
                                                                                        ]} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4$formGroup$visibility"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4$formGroup$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DataKeyCipherBlob" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4$formGroup"
                                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4$formGroup"
                                                                                                class={"mx-name-textArea4 mx-textarea"}
                                                                                                control={[
                                                                                                    <$TextArea key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4"
                                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4"
                                                                                                        inputValue={AttributeProperty({
                                                                                                            "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                                            "path": "",
                                                                                                            "entity": "AWSKMSConnector.UnitTest",
                                                                                                            "attribute": "DataKeyCipherBlob",
                                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                            "isList": false,
                                                                                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                                            "validation": null
                                                                                                        })}
                                                                                                        numberOfLines={5}
                                                                                                        autoGrow={false}
                                                                                                        placeholder={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                        })}
                                                                                                        readOnlyStyle={"control"}
                                                                                                        submitWhileEditing={false}
                                                                                                        submitDelay={300}
                                                                                                        id={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4"
                                                                                                        })} />
                                                                                                ]}
                                                                                                caption={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Symmetric data key (encrypted)" }, "args": {} }
                                                                                                })}
                                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4"
                                                                                                })}
                                                                                                orientation={"vertical"}
                                                                                                hasError={ValidationProperty({
                                                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4"
                                                                                                })} />
                                                                                        ]} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5$formGroup$visibility"
                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5$formGroup$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyId" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DataKeyPlainText" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$FormGroup key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5$formGroup"
                                                                                                $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5$formGroup"
                                                                                                class={"mx-name-textArea5 mx-textarea"}
                                                                                                control={[
                                                                                                    <$TextArea key="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5"
                                                                                                        $widgetId="p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5"
                                                                                                        inputValue={AttributeProperty({
                                                                                                            "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                                            "path": "",
                                                                                                            "entity": "AWSKMSConnector.UnitTest",
                                                                                                            "attribute": "DataKeyPlainText",
                                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                            "isList": false,
                                                                                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                                            "validation": null
                                                                                                        })}
                                                                                                        numberOfLines={5}
                                                                                                        autoGrow={false}
                                                                                                        placeholder={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                        })}
                                                                                                        readOnlyStyle={"control"}
                                                                                                        submitWhileEditing={false}
                                                                                                        submitDelay={300}
                                                                                                        id={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5"
                                                                                                        })} />
                                                                                                ]}
                                                                                                caption={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Symmetric data key (decrypted)" }, "args": {} }
                                                                                                })}
                                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5"
                                                                                                })}
                                                                                                orientation={"vertical"}
                                                                                                hasError={ValidationProperty({
                                                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5"
                                                                                                })} />
                                                                                        ]} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]}
                                        hideFooter={false} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />
]}</PageFragment>);

export const title = t([
    "Client managed keys"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
