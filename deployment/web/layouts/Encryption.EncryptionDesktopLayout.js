import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { PlaceholderProperty } from "mendix/PlaceholderProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Image } from "mendix/widgets/web/Image";
import { Label } from "mendix/widgets/web/Label";
import { MenuBar } from "mendix/widgets/web/MenuBar";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $ConditionalVisibilityWrapper, $Image, $ActionButton, $MenuBar, $Label, $Placeholder } = asPluginWidgets({ ScrollContainer, ConditionalVisibilityWrapper, Image, ActionButton, MenuBar, Label, Placeholder });

const region$Main = [
    <$ScrollContainer key="l.Encryption.EncryptionDesktopLayout.layoutContainer"
        $widgetId="l.Encryption.EncryptionDesktopLayout.layoutContainer"
        class={"mx-name-layoutContainer"}
        scrollPerRegion={true}
        layoutMode={"headline"}
        top={{
            "enabled": true,
            "content": [
                <$ScrollContainer key="l.Encryption.EncryptionDesktopLayout.layoutContainer2"
                    $widgetId="l.Encryption.EncryptionDesktopLayout.layoutContainer2"
                    class={"mx-name-layoutContainer2"}
                    scrollPerRegion={false}
                    layoutMode={"headline"}
                    top={{
                        "enabled": false
                    }}
                    bottom={{
                        "enabled": false
                    }}
                    left={{
                        "enabled": true,
                        "content": [
                            <$ConditionalVisibilityWrapper key="l.Encryption.EncryptionDesktopLayout.staticImageViewer$visibility"
                                $widgetId="l.Encryption.EncryptionDesktopLayout.staticImageViewer$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$Image key="l.Encryption.EncryptionDesktopLayout.staticImageViewer"
                                        $widgetId="l.Encryption.EncryptionDesktopLayout.staticImageViewer"
                                        class={"mx-name-staticImageViewer"}
                                        alternativeText={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })}
                                        responsive={false}
                                        source={WebStaticImageProperty({
                                            "image": { "uri": "img/Encryption$Images$logo.png" }
                                        })}
                                        onClick={ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "FTN3+8d6Hl6JFfbOdZ3wgw", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false }
                                        })} />
                                ]} />
                        ],
                        "sizeMode": "pixels",
                        "sizeValue": 180,
                        "class": "",
                        "toggleMode": "none",
                        "initiallyOpen": false
                    }}
                    right={{
                        "enabled": true,
                        "content": [
                            <$ConditionalVisibilityWrapper key="l.Encryption.EncryptionDesktopLayout.signOutButton$visibility"
                                $widgetId="l.Encryption.EncryptionDesktopLayout.signOutButton$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_isNamedUser", "parameters": [] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="l.Encryption.EncryptionDesktopLayout.signOutButton"
                                        $widgetId="l.Encryption.EncryptionDesktopLayout.signOutButton"
                                        buttonId={"l.Encryption.EncryptionDesktopLayout.signOutButton"}
                                        class={"mx-name-signOutButton"}
                                        tabIndex={-1}
                                        renderType={"button"}
                                        buttonClass={"btn-default"}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Sign out" }, "args": {} }
                                        })}
                                        tooltip={TextProperty({
                                            "value": ""
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ],
                        "sizeMode": "pixels",
                        "sizeValue": 180,
                        "class": "",
                        "style": {
                            "textAlign": "right"
                        },
                        "toggleMode": "none",
                        "initiallyOpen": false
                    }}
                    center={{
                        "content": [
                            <$MenuBar key="l.Encryption.EncryptionDesktopLayout.menuBar"
                                $widgetId="l.Encryption.EncryptionDesktopLayout.menuBar"
                                class={"mx-name-menuBar"}
                                menu={[
                                    {
                                        "caption": TextProperty({
                                            "value": "Home"
                                        }),
                                        "icon": WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                                        }),
                                        "action": ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Home_Web.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                            "skipClientValidation": true
                                        })
                                    }
                                ]} />
                        ],
                        "class": ""
                    }} />
            ],
            "sizeMode": "auto",
            "class": "",
            "style": {
                "padding": "10px"
            }
        }}
        bottom={{
            "enabled": true,
            "content": [
                <$Label key="l.Encryption.EncryptionDesktopLayout.label"
                    $widgetId="l.Encryption.EncryptionDesktopLayout.label"
                    class={"mx-name-label"}
                    id={DerivedUniqueIdProperty({
                        "widgetId": "l.Encryption.EncryptionDesktopLayout.label"
                    })}
                    caption={TextProperty({
                        "value": "Powered by Mendix™"
                    })} />
            ],
            "sizeMode": "auto",
            "class": ""
        }}
        left={{
            "enabled": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
                <$Placeholder key="l.Encryption.EncryptionDesktopLayout.Main"
                    $widgetId="l.Encryption.EncryptionDesktopLayout.Main"
                    content={PlaceholderProperty({
                        "id": "Encryption.EncryptionDesktopLayout.Main"
                    })} />
            ],
            "class": ""
        }} />
];

export const content = {
    "Main": region$Main,
};
