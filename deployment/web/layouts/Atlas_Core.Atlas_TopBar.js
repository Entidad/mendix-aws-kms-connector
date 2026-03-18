import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { PlaceholderProperty } from "mendix/PlaceholderProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import * as ComboboxWidgetModule from "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { MenuBar } from "mendix/widgets/web/MenuBar";
import { NavigationTree } from "mendix/widgets/web/NavigationTree";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { SidebarToggle } from "mendix/widgets/web/SidebarToggle";
import * as SprintrFeedbackWidgetModule from "C:/Users/jorge/Documents/Workspaces/Claude-ws/mendix-aws-kms-connector/deployment/web/widgets/SprintrFeedbackWidget/SprintrFeedback.mjs";
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;   
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { ACT_Open_Feedback_Modal } from "../nanoflows/FeedbackModule.ACT_Open_Feedback_Modal.js";
import { OCH_UpdateUserLanguage } from "../nanoflows/Atlas_Core.OCH_UpdateUserLanguage.js";

const { $ScrollContainer, $Fragment, $SprintrFeedback, $Div, $Container, $SidebarToggle, $Image, $MenuBar, $DataView, $FormGroup, $Combobox, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Div, Container, SidebarToggle, Image, MenuBar, DataView, FormGroup, Combobox, NavigationTree, Placeholder });

const region$Main = [
    <$ScrollContainer key="l.Atlas_Core.Atlas_TopBar.layoutContainer"
        $widgetId="l.Atlas_Core.Atlas_TopBar.layoutContainer"
        class={"mx-name-layoutContainer"}
        scrollPerRegion={true}
        layoutMode={"sidebar"}
        top={{
            "enabled": true,
            "content": [
                <$Fragment key="l.Atlas_Core.Atlas_TopBar.snippetCall1"
                    $widgetId="l.Atlas_Core.Atlas_TopBar.snippetCall1"
                    content={[
                        <$SprintrFeedback key="l.Atlas_Core.FeedbackWidget.feedback1"
                            $widgetId="l.Atlas_Core.FeedbackWidget.feedback1"
                            sprintrapp={"1"}
                            foreignObjectRendering={false}
                            scrollableAreaSelector={".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper"}
                            feedbackButtonAction={ActionProperty({
                                "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Open_Feedback_Modal, "allowedRoles": [ "User" ] }, "disabledDuringExecution": false },
                                "argumentTypes": { }
                            })}
                            showAdvancedSettings={false}
                            title_label={ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Feedback" }, "args": {} }
                            })}
                            take_screenshot_label={ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Take screenshot" }, "args": {} }
                            })}
                            annotate_label={ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Annotate" }, "args": {} }
                            })}
                            done_label={ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                            })}
                            cancel_label={ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                            })}
                            clear_label={ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                            })}
                            userDefinedButtonStyle={"side"}
                            showInDesignMode={true}
                            class={"mx-name-feedback1"} />
                    ]} />,
                <$Div key="l.Atlas_Core.Atlas_TopBar.layoutGrid1"
                    $widgetId="l.Atlas_Core.Atlas_TopBar.layoutGrid1"
                    class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                    content={[
                        <$Div key="l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0"
                            $widgetId="l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0"
                            class={"row"}
                            content={[
                                <$Div key="l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0"
                                    $widgetId="l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0"
                                    class={"col-lg-12 col-md-12 col-12"}
                                    content={[
                                        <$Container key="l.Atlas_Core.Atlas_TopBar.container2"
                                            $widgetId="l.Atlas_Core.Atlas_TopBar.container2"
                                            class={"mx-name-container2 topbar-content"}
                                            renderMode={"div"}
                                            content={[
                                                <$SidebarToggle key="l.Atlas_Core.Atlas_TopBar.sidebarToggle3"
                                                    $widgetId="l.Atlas_Core.Atlas_TopBar.sidebarToggle3"
                                                    buttonId={"l.Atlas_Core.Atlas_TopBar.sidebarToggle3"}
                                                    renderType={"button"}
                                                    buttonClass={"btn-primary"}
                                                    caption={ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })}
                                                    tooltip={TextProperty({
                                                        "value": "Toggle Menu"
                                                    })}
                                                    icon={WebIconProperty({
                                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                                                    })}
                                                    class={"mx-name-sidebarToggle3 toggle-btn"} />,
                                                <$Div key="l.Atlas_Core.Atlas_TopBar.layoutGrid2"
                                                    $widgetId="l.Atlas_Core.Atlas_TopBar.layoutGrid2"
                                                    class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand"}
                                                    content={[
                                                        <$Div key="l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0"
                                                            $widgetId="l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0"
                                                            class={"row align-children-center"}
                                                            content={[
                                                                <$Div key="l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0"
                                                                    $widgetId="l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0"
                                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                                    content={[
                                                                        <$Image key="l.Atlas_Core.Atlas_TopBar.staticImage1"
                                                                            $widgetId="l.Atlas_Core.Atlas_TopBar.staticImage1"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
                                                                            })}
                                                                            imageUrl={ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })}
                                                                            isBackgroundImage={false}
                                                                            onClickType={"action"}
                                                                            alternativeText={ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })}
                                                                            widthUnit={"auto"}
                                                                            width={100}
                                                                            heightUnit={"auto"}
                                                                            height={100}
                                                                            iconSize={14}
                                                                            displayAs={"fullImage"}
                                                                            responsive={false}
                                                                            class={"mx-name-staticImage1"} />
                                                                    ]} />,
                                                                <$Div key="l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1"
                                                                    $widgetId="l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1"
                                                                    class={"col-lg col-md col"}
                                                                    content={[
                                                                        <$MenuBar key="l.Atlas_Core.Atlas_TopBar.menuBar1"
                                                                            $widgetId="l.Atlas_Core.Atlas_TopBar.menuBar1"
                                                                            class={"mx-name-menuBar1 hidden-xs hide-icons"}
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
                                                                    ]} />,
                                                                <$Div key="l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2"
                                                                    $widgetId="l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2"
                                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                                    content={[
                                                                        <$Fragment key="l.Atlas_Core.Atlas_TopBar.snippetCall2"
                                                                            $widgetId="l.Atlas_Core.Atlas_TopBar.snippetCall2"
                                                                            content={[
                                                                                <$DataView key="l.Atlas_Core.LanguageSelectorWidget.dataView1"
                                                                                    $widgetId="l.Atlas_Core.LanguageSelectorWidget.dataView1"
                                                                                    class={"mx-name-dataView1 form-horizontal"}
                                                                                    object={MicroflowObjectProperty({
                                                                                        "dataSourceId": "l.35",
                                                                                        "editable": true,
                                                                                        "operationId": "hCi55QfXp1a2eNyld8C/TA",
                                                                                        "argMap": {}
                                                                                    })}
                                                                                    emptyMessage={TextProperty({
                                                                                        "value": ""
                                                                                    })}
                                                                                    body={[
                                                                                        <$FormGroup key="l.Atlas_Core.LanguageSelectorWidget.comboBox1$formGroup"
                                                                                            $widgetId="l.Atlas_Core.LanguageSelectorWidget.comboBox1$formGroup"
                                                                                            class={"mx-name-comboBox1 language-selector hide-bg"}
                                                                                            style={{
                                                                                                "--cb-text-color": "var(--font-color-contrast)"
                                                                                            }}
                                                                                            control={[
                                                                                                <$Combobox key="l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                                                    $widgetId="l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                                                    source={"context"}
                                                                                                    optionsSourceType={"association"}
                                                                                                    optionsSourceAssociationCaptionType={"attribute"}
                                                                                                    optionsSourceDatabaseCaptionType={"attribute"}
                                                                                                    optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                                                                        "path": "",
                                                                                                        "entity": "System.Language",
                                                                                                        "attribute": "Description",
                                                                                                        "attributeType": "String",
                                                                                                        "sortable": true,
                                                                                                        "filterable": true,
                                                                                                        "dataSourceId": "l.2",
                                                                                                        "isList": false
                                                                                                    })}
                                                                                                    attributeAssociation={AssociationProperty({
                                                                                                        "type": "Reference",
                                                                                                        "entity": "System.User",
                                                                                                        "path": "",
                                                                                                        "attribute": "System.User_Language",
                                                                                                        "endpointEntity": "System.Language",
                                                                                                        "selectableObjectsId": "l.2",
                                                                                                        "scope": "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                                                    })}
                                                                                                    optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                                                                        "dataSourceId": "l.2",
                                                                                                        "entity": "System.Language",
                                                                                                        "scope": "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                                                                        "operationId": "vbHFMMZ+GVqHrp8tBK4t8g",
                                                                                                        "sort": []
                                                                                                    })}
                                                                                                    optionsSourceStaticDataSource={[]}
                                                                                                    emptyOptionText={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                    })}
                                                                                                    noOptionsText={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                    })}
                                                                                                    clearable={false}
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
                                                                                                    onChangeEvent={ActionProperty({
                                                                                                        "action": { "type": "callNanoflow", "argMap": { "User": { "widget": "l.Atlas_Core.LanguageSelectorWidget.dataView1", "source": "object" } }, "config": { "nanoflow": () => OCH_UpdateUserLanguage, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                                                                        "argumentTypes": { }
                                                                                                    })}
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
                                                                                                    filterType={"none"}
                                                                                                    filterInputDebounceInterval={200}
                                                                                                    id={DerivedUniqueIdProperty({
                                                                                                        "widgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                                                    })} />
                                                                                            ]}
                                                                                            labelFor={DerivedUniqueIdProperty({
                                                                                                "widgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                                            })}
                                                                                            width={3}
                                                                                            orientation={"vertical"}
                                                                                            hasError={ValidationProperty({
                                                                                                "inputWidgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                                            })} />
                                                                                    ]}
                                                                                    hideFooter={false} />
                                                                            ]} />
                                                                    ]} />
                                                            ]} />
                                                    ]} />
                                            ]}
                                            ariaHidden={false} />
                                    ]} />
                            ]} />
                    ]} />
            ],
            "sizeMode": "auto",
            "class": "region-topbar"
        }}
        bottom={{
            "enabled": false
        }}
        left={{
            "enabled": true,
            "content": [
                <$NavigationTree key="l.Atlas_Core.Atlas_TopBar.navigationTree1"
                    $widgetId="l.Atlas_Core.Atlas_TopBar.navigationTree1"
                    class={"mx-name-navigationTree1"}
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
            "sizeMode": "pixels",
            "sizeValue": 320,
            "class": "region-sidebar",
            "toggleMode": "push",
            "initiallyOpen": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
                <$Placeholder key="l.Atlas_Core.Atlas_TopBar.Main"
                    $widgetId="l.Atlas_Core.Atlas_TopBar.Main"
                    content={PlaceholderProperty({
                        "id": "Atlas_Core.Atlas_TopBar.Main"
                    })} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};
