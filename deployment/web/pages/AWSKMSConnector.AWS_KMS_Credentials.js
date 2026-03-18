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
import { CheckBox } from "mendix/widgets/web/CheckBox";
import * as ComboboxWidgetModule from "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $ActionButton, $DataView, $Fragment, $FormGroup, $CheckBox, $Text, $ConditionalVisibilityWrapper, $Container, $TextBox, $Combobox } = asPluginWidgets({ Div, ActionButton, DataView, Fragment, FormGroup, CheckBox, Text, ConditionalVisibilityWrapper, Container, TextBox, Combobox });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2"
        $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        content={[
            <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row0"
                $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row0"
                class={"row"}
                content={[
                    <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row0$column0"
                        $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        content={[
                            <$ActionButton key="p.AWSKMSConnector.AWS_KMS_Credentials.actionButton1"
                                $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.actionButton1"
                                buttonId={"p.AWSKMSConnector.AWS_KMS_Credentials.actionButton1"}
                                class={"mx-name-actionButton1 pull-right spacing-outer-bottom-medium"}
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
                                    "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />
                        ]} />
                ]} />,
            <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row1"
                $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row1"
                class={"row"}
                content={[
                    <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row1$column0"
                        $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row1$column0"
                        class={"col-lg col-md col"}
                        content={[
                            <$DataView key="p.AWSKMSConnector.AWS_KMS_Credentials.dataView1"
                                $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.18",
                                    "scope": "$AWSKMSCredentialHelper",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": ""
                                })}
                                body={[
                                    <$Fragment key="p.AWSKMSConnector.AWS_KMS_Credentials.snippetCall1"
                                        $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.snippetCall1"
                                        content={[
                                            <$Div key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.layoutGrid1"
                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.layoutGrid1"
                                                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid"}
                                                content={[
                                                    <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row0"
                                                        $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row0"
                                                        class={"row"}
                                                        content={[
                                                            <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row0$column0"
                                                                $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row0$column0"
                                                                class={"col-lg col-md col"}
                                                                content={[
                                                                    <$FormGroup key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1$formGroup"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1$formGroup"
                                                                        class={"mx-name-checkBox1 mx-checkbox label-after"}
                                                                        control={[
                                                                            <$CheckBox key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1"
                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1"
                                                                                value={AttributeProperty({
                                                                                    "scope": "$AWSKMSCredentialHelper",
                                                                                    "path": "",
                                                                                    "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                                    "attribute": "IsActive",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                    "isList": false,
                                                                                    "validation": null
                                                                                })}
                                                                                readOnlyStyle={"control"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                                                })}
                                                                                id={DerivedUniqueIdProperty({
                                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1"
                                                                                })} />
                                                                        ]}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1"
                                                                        })}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.checkBox1"
                                                                        })} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row1"
                                                        $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row1"
                                                        class={"row"}
                                                        content={[
                                                            <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row1$column0"
                                                                $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row1$column0"
                                                                class={"col-lg col-md col"}
                                                                content={[
                                                                    <$Text key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text5"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text5"
                                                                        class={"mx-name-text5"}
                                                                        caption={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "AWS Credentials" }, "args": {} }
                                                                        })}
                                                                        renderMode={"h3"} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container2$visibility"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container2$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "KMSCredentialHelper", "path": "IsActive" }, "args": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Container key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container2"
                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container2"
                                                                                class={"mx-name-container2"}
                                                                                renderMode={"div"}
                                                                                content={[
                                                                                    <$FormGroup key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2$formGroup"
                                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2$formGroup"
                                                                                        class={"mx-name-textBox2 mx-textbox"}
                                                                                        control={[
                                                                                            <$TextBox key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2"
                                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2"
                                                                                                inputValue={AttributeProperty({
                                                                                                    "scope": "$AWSKMSCredentialHelper",
                                                                                                    "path": "",
                                                                                                    "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                                                    "attribute": "AccessKeyId",
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
                                                                                                readOnlyStyle={"control"}
                                                                                                maxLength={200}
                                                                                                autocomplete={"on"}
                                                                                                submitWhileEditing={false}
                                                                                                submitDelay={300}
                                                                                                id={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2"
                                                                                                })} />
                                                                                        ]}
                                                                                        caption={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Access Key ID" }, "args": {} }
                                                                                        })}
                                                                                        labelFor={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2"
                                                                                        })}
                                                                                        orientation={"vertical"}
                                                                                        hasError={ValidationProperty({
                                                                                            "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox2"
                                                                                        })} />,
                                                                                    <$FormGroup key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9$formGroup"
                                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9$formGroup"
                                                                                        class={"mx-name-textBox9 mx-textbox"}
                                                                                        control={[
                                                                                            <$TextBox key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9"
                                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9"
                                                                                                inputValue={AttributeProperty({
                                                                                                    "scope": "$AWSKMSCredentialHelper",
                                                                                                    "path": "",
                                                                                                    "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                                                    "attribute": "SecretAccessKey",
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
                                                                                                readOnlyStyle={"control"}
                                                                                                maxLength={200}
                                                                                                autocomplete={"on"}
                                                                                                submitWhileEditing={false}
                                                                                                submitDelay={300}
                                                                                                id={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9"
                                                                                                })} />
                                                                                        ]}
                                                                                        caption={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Secret Access Key" }, "args": {} }
                                                                                        })}
                                                                                        labelFor={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9"
                                                                                        })}
                                                                                        orientation={"vertical"}
                                                                                        hasError={ValidationProperty({
                                                                                            "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox9"
                                                                                        })} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text6$visibility"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text6$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "KMSCredentialHelper", "path": "IsActive" }, "args": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Text key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text6"
                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text6"
                                                                                class={"mx-name-text6"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "AWS Region" }, "args": {} }
                                                                                })}
                                                                                renderMode={"h3"} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container3$visibility"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container3$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "KMSCredentialHelper", "path": "IsActive" }, "args": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Container key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container3"
                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container3"
                                                                                class={"mx-name-container3"}
                                                                                renderMode={"div"}
                                                                                content={[
                                                                                    <$FormGroup key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1$formGroup"
                                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1$formGroup"
                                                                                        class={"mx-name-dropDown1"}
                                                                                        control={[
                                                                                            <$Combobox key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1"
                                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1"
                                                                                                source={"context"}
                                                                                                optionsSourceType={"enumeration"}
                                                                                                attributeEnumeration={AttributeProperty({
                                                                                                    "scope": "$AWSKMSCredentialHelper",
                                                                                                    "path": "",
                                                                                                    "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                                                    "attribute": "Region",
                                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                    "isList": false
                                                                                                })}
                                                                                                optionsSourceAssociationCaptionType={"attribute"}
                                                                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                                                                optionsSourceStaticDataSource={[]}
                                                                                                emptyOptionText={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                })}
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
                                                                                                customEditability={"default"}
                                                                                                customEditabilityExpression={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                                                })}
                                                                                                readOnlyStyle={"text"}
                                                                                                ariaRequired={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                                                })}
                                                                                                ariaLabel={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
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
                                                                                                selectedItemsSorting={"none"}
                                                                                                filterType={"contains"}
                                                                                                filterInputDebounceInterval={200}
                                                                                                id={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1"
                                                                                                })} />
                                                                                        ]}
                                                                                        caption={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Region" }, "args": {} }
                                                                                        })}
                                                                                        labelFor={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1"
                                                                                        })}
                                                                                        orientation={"vertical"}
                                                                                        hasError={ValidationProperty({
                                                                                            "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.dropDown1"
                                                                                        })} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]} />,
                                                                    <$Text key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text4"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.text4"
                                                                        class={"mx-name-text4"}
                                                                        caption={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "AWS KMS Customer Managed Key" }, "args": {} }
                                                                        })}
                                                                        renderMode={"h3"} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container1$visibility"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container1$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "KMSCredentialHelper", "path": "IsActive" }, "args": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Container key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container1"
                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.container1"
                                                                                class={"mx-name-container1"}
                                                                                renderMode={"div"}
                                                                                content={[
                                                                                    <$FormGroup key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1$formGroup"
                                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1$formGroup"
                                                                                        class={"mx-name-textBox1 mx-textbox"}
                                                                                        control={[
                                                                                            <$TextBox key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1"
                                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1"
                                                                                                inputValue={AttributeProperty({
                                                                                                    "scope": "$AWSKMSCredentialHelper",
                                                                                                    "path": "",
                                                                                                    "entity": "AWSKMSConnector.KMSCredentialHelper",
                                                                                                    "attribute": "KeyId",
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
                                                                                                readOnlyStyle={"control"}
                                                                                                maxLength={200}
                                                                                                autocomplete={"on"}
                                                                                                submitWhileEditing={false}
                                                                                                submitDelay={300}
                                                                                                id={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1"
                                                                                                })} />
                                                                                        ]}
                                                                                        caption={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Key ID" }, "args": {} }
                                                                                        })}
                                                                                        labelFor={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1"
                                                                                        })}
                                                                                        orientation={"vertical"}
                                                                                        hasError={ValidationProperty({
                                                                                            "inputWidgetId": "p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.textBox1"
                                                                                        })} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row2"
                                                        $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row2"
                                                        class={"row"}
                                                        content={[
                                                            <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row2$column0"
                                                                $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid1$row2$column0"
                                                                class={"col-lg col-md col"}
                                                                content={[
                                                                    <$ConditionalVisibilityWrapper key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3$visibility"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3"
                                                                                $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3"
                                                                                buttonId={"p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton3"}
                                                                                class={"mx-name-actionButton3 spacing-outer-top-medium"}
                                                                                renderType={"button"}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                                                                })}
                                                                                tooltip={TextProperty({
                                                                                    "value": ""
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "KMSCredentialHelper": { "widget": "$AWSKMSCredentialHelper", "source": "object" } }, "config": { "operationId": "5byU1+sirl2h+bK+ojlnRQ", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ActionButton key="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton2"
                                                                        $widgetId="p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton2"
                                                                        buttonId={"p.AWSKMSConnector.SNIP_KMSCredentialHelper_Edit.actionButton2"}
                                                                        class={"mx-name-actionButton2 spacing-outer-left spacing-outer-top-medium"}
                                                                        renderType={"button"}
                                                                        buttonClass={"btn-default"}
                                                                        caption={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                                                        })}
                                                                        tooltip={TextProperty({
                                                                            "value": ""
                                                                        })}
                                                                        action={ActionProperty({
                                                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "b9H2WE4PZluju3Twc8eJuw", "closePage": true }, "disabledDuringExecution": true },
                                                                            "abortOnServerValidation": true
                                                                        })} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]}
                                hideFooter={true} />
                        ]} />
                ]} />,
            <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row2"
                $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row2"
                class={"row"}
                content={[
                    <$Div key="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row2$column0"
                        $widgetId="p.AWSKMSConnector.AWS_KMS_Credentials.layoutGrid2$row2$column0"
                        class={"col-lg col-md col"} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "AWS KMS Credentials"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
