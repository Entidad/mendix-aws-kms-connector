import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ExpressionProperty } from "mendix/ExpressionProperty";

import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Container, $Div, $Text } = asPluginWidgets({ Container, Div, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p.MyFirstModule.Home_Web.container1"
        $widgetId="p.MyFirstModule.Home_Web.container1"
        class={"mx-name-container1 pageheader"}
        renderMode={"div"}
        content={[
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2"
                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row0"
                        class={"row"}
                        content={[
                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row0$column0"
                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row0$column0"
                                class={"col-lg col-md col"}
                                content={[
                                    <$Text key="p.MyFirstModule.Home_Web.text1"
                                        $widgetId="p.MyFirstModule.Home_Web.text1"
                                        class={"mx-name-text1 pageheader-title spacing-outer-bottom"}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Home" }, "args": {} }
                                        })}
                                        renderMode={"h3"} />,
                                    <$Text key="p.MyFirstModule.Home_Web.text3"
                                        $widgetId="p.MyFirstModule.Home_Web.text3"
                                        class={"mx-name-text3 pageheader-subtitle text-detail"}
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Getting started:\r\n- This page is the home page of your new app.\r\n- The Domain model defines your data structure.\r\n- The MyFirstLogic microflow shows how to start building app logic. \r\nBy doing a Right-click on the MyFirstModule you can add new pages, logic, or other documents to your app.\r\n\r\nFor a quick start: https://docs.mendix.com/quickstarts\r\n\r\n" }, "args": {} }
                                        })}
                                        renderMode={"p"} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />,
    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1"
        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        content={[
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0"
                class={"row"}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column1"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column1"
                        class={"col-lg col-md col"} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column2"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column2"
                        class={"col-lg col-md col"} />,
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column3"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column3"
                        class={"col-lg col-md col"} />
                ]} />,
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1"
                class={"row"}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1$column0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1$column0"
                        class={"col-lg col-md col"} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Homepage"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
