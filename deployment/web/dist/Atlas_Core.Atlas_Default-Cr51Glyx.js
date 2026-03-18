import { reactExports, asPluginWidgets, Fragment, PlaceholderProperty } from './index-FQlVOlYf.js';
import { ActionProperty, TextProperty } from './ActionButton-dEkVZjqk.js';
import { AssociationProperty } from './AssociationProperty-WAySTpZ7.js';
import { ListAttributeProperty, DatabaseObjectListProperty } from './ListAttributeProperty-CXLDrwR-.js';
import { DerivedUniqueIdProperty } from './DerivedUniqueIdProperty-CMoZmJLZ.js';
import { Placeholder, ExpressionProperty } from './Placeholder-DFcDqEIU.js';
import { SprintrFeedbackWidgetModule, SidebarToggle, NavigationTree, ACT_Open_Feedback_Modal, MicroflowObjectProperty, OCH_UpdateUserLanguage } from './Atlas_Core.OCH_UpdateUserLanguage-CYtkbF7W.js';
import { FormGroup, ValidationProperty } from './FormGroup-D4kp91rN.js';
import { WebIconProperty } from './WebIconProperty-znHzcziz.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-BHhgotvB.js';
import { ComboboxWidgetModule } from './Combobox-CTuBdCKm.js';
import { ImageWidgetModule, Container } from './Image-C3uz38Dk.js';
import { DataView } from './DataView-Dip00PtH.js';
import { Div } from './Div-o8iece77.js';
import './Fragment-686zUVRb.js';
import { ScrollContainer } from './ScrollContainer-_UwHUp6v.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;
const { $ScrollContainer, $Fragment, $SprintrFeedback, $Div, $Container, $SidebarToggle, $Image, $DataView, $FormGroup, $Combobox, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Div, Container, SidebarToggle, Image, DataView, FormGroup, Combobox, NavigationTree, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l.Atlas_Core.Atlas_Default.layoutContainer",
      $widgetId: "l.Atlas_Core.Atlas_Default.layoutContainer",
      class: "mx-name-layoutContainer",
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Fragment,
            {
              key: "l.Atlas_Core.Atlas_Default.snippetCall1",
              $widgetId: "l.Atlas_Core.Atlas_Default.snippetCall1",
              content: [
                /* @__PURE__ */ React.createElement(
                  $SprintrFeedback,
                  {
                    key: "l.Atlas_Core.FeedbackWidget.feedback1",
                    $widgetId: "l.Atlas_Core.FeedbackWidget.feedback1",
                    sprintrapp: "1",
                    foreignObjectRendering: false,
                    scrollableAreaSelector: ".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper",
                    feedbackButtonAction: ActionProperty({
                      "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Open_Feedback_Modal, "allowedRoles": ["User"] }, "disabledDuringExecution": false },
                      "argumentTypes": {}
                    }),
                    showAdvancedSettings: false,
                    title_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Feedback" }, "args": {} }
                    }),
                    take_screenshot_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Take screenshot" }, "args": {} }
                    }),
                    annotate_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Annotate" }, "args": {} }
                    }),
                    done_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                    }),
                    cancel_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                    }),
                    clear_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                    }),
                    userDefinedButtonStyle: "side",
                    showInDesignMode: true,
                    class: "mx-name-feedback1"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Div,
            {
              key: "l.Atlas_Core.Atlas_Default.layoutGrid1",
              $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid1",
              class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
              content: [
                /* @__PURE__ */ React.createElement(
                  $Div,
                  {
                    key: "l.Atlas_Core.Atlas_Default.layoutGrid1$row0",
                    $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid1$row0",
                    class: "row",
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Div,
                        {
                          key: "l.Atlas_Core.Atlas_Default.layoutGrid1$row0$column0",
                          $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid1$row0$column0",
                          class: "col-lg-12 col-md-12 col-12",
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $Container,
                              {
                                key: "l.Atlas_Core.Atlas_Default.container1",
                                $widgetId: "l.Atlas_Core.Atlas_Default.container1",
                                class: "mx-name-container1 topbar-content",
                                renderMode: "div",
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $SidebarToggle,
                                    {
                                      key: "l.Atlas_Core.Atlas_Default.sidebarToggle3",
                                      $widgetId: "l.Atlas_Core.Atlas_Default.sidebarToggle3",
                                      buttonId: "l.Atlas_Core.Atlas_Default.sidebarToggle3",
                                      renderType: "button",
                                      buttonClass: "btn-primary",
                                      caption: ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      }),
                                      tooltip: TextProperty({
                                        "value": "Toggle Menu"
                                      }),
                                      icon: WebIconProperty({
                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                                      }),
                                      class: "mx-name-sidebarToggle3 toggle-btn"
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "l.Atlas_Core.Atlas_Default.layoutGrid2",
                                      $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid2",
                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Div,
                                          {
                                            key: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0",
                                            $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0",
                                            class: "row align-children-center",
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column0",
                                                  $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column0",
                                                  class: "col-lg col-md col",
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_Default.staticImage1",
                                                        $widgetId: "l.Atlas_Core.Atlas_Default.staticImage1",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
                                                        }),
                                                        imageUrl: ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        }),
                                                        isBackgroundImage: false,
                                                        onClickType: "action",
                                                        alternativeText: ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        }),
                                                        widthUnit: "auto",
                                                        width: 100,
                                                        heightUnit: "auto",
                                                        height: 100,
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: false,
                                                        class: "mx-name-staticImage1"
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column1",
                                                  $widgetId: "l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column1",
                                                  class: "col-lg-auto col-md-auto col-auto align-self-center",
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Fragment,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_Default.snippetCall2",
                                                        $widgetId: "l.Atlas_Core.Atlas_Default.snippetCall2",
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $DataView,
                                                            {
                                                              key: "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                              $widgetId: "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                              class: "mx-name-dataView1 form-horizontal",
                                                              object: MicroflowObjectProperty({
                                                                "dataSourceId": "l.31",
                                                                "editable": true,
                                                                "operationId": "JtB3c78CK1ub1+fPNQUPgw",
                                                                "argMap": {}
                                                              }),
                                                              emptyMessage: TextProperty({
                                                                "value": ""
                                                              }),
                                                              body: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $FormGroup,
                                                                  {
                                                                    key: "l.Atlas_Core.LanguageSelectorWidget.comboBox1$formGroup",
                                                                    $widgetId: "l.Atlas_Core.LanguageSelectorWidget.comboBox1$formGroup",
                                                                    class: "mx-name-comboBox1 language-selector hide-bg",
                                                                    style: {
                                                                      "--cb-text-color": "var(--font-color-contrast)"
                                                                    },
                                                                    control: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Combobox,
                                                                        {
                                                                          key: "l.Atlas_Core.LanguageSelectorWidget.comboBox1",
                                                                          $widgetId: "l.Atlas_Core.LanguageSelectorWidget.comboBox1",
                                                                          source: "context",
                                                                          optionsSourceType: "association",
                                                                          optionsSourceAssociationCaptionType: "attribute",
                                                                          optionsSourceDatabaseCaptionType: "attribute",
                                                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                                                            "path": "",
                                                                            "entity": "System.Language",
                                                                            "attribute": "Description",
                                                                            "attributeType": "String",
                                                                            "sortable": true,
                                                                            "filterable": true,
                                                                            "dataSourceId": "l.2",
                                                                            "isList": false
                                                                          }),
                                                                          attributeAssociation: AssociationProperty({
                                                                            "type": "Reference",
                                                                            "entity": "System.User",
                                                                            "path": "",
                                                                            "attribute": "System.User_Language",
                                                                            "endpointEntity": "System.Language",
                                                                            "selectableObjectsId": "l.2",
                                                                            "scope": "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                          }),
                                                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                                                            "dataSourceId": "l.2",
                                                                            "entity": "System.Language",
                                                                            "scope": "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                                            "operationId": "YtlSRwn5oF26F3x4LIxIrQ",
                                                                            "sort": []
                                                                          }),
                                                                          optionsSourceStaticDataSource: [],
                                                                          emptyOptionText: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          }),
                                                                          noOptionsText: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          }),
                                                                          clearable: false,
                                                                          optionsSourceAssociationCustomContentType: "no",
                                                                          optionsSourceDatabaseCustomContentType: "no",
                                                                          staticDataSourceCustomContentType: "no",
                                                                          showFooter: false,
                                                                          selectionMethod: "checkbox",
                                                                          selectedItemsStyle: "text",
                                                                          selectAllButton: false,
                                                                          selectAllButtonCaption: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                                          }),
                                                                          customEditability: "default",
                                                                          customEditabilityExpression: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                          }),
                                                                          readOnlyStyle: "text",
                                                                          onChangeEvent: ActionProperty({
                                                                            "action": { "type": "callNanoflow", "argMap": { "User": { "widget": "l.Atlas_Core.LanguageSelectorWidget.dataView1", "source": "object" } }, "config": { "nanoflow": () => OCH_UpdateUserLanguage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                            "argumentTypes": {}
                                                                          }),
                                                                          ariaRequired: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                          }),
                                                                          ariaLabel: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                                                          }),
                                                                          clearButtonAriaLabel: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                                          }),
                                                                          removeValueAriaLabel: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                                          }),
                                                                          a11ySelectedValue: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                                          }),
                                                                          a11yOptionsAvailable: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                                          }),
                                                                          a11yInstructions: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                                          }),
                                                                          lazyLoading: true,
                                                                          loadingType: "spinner",
                                                                          selectedItemsSorting: "none",
                                                                          filterType: "none",
                                                                          filterInputDebounceInterval: 200,
                                                                          id: DerivedUniqueIdProperty({
                                                                            "widgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                          })
                                                                        }
                                                                      )
                                                                    ],
                                                                    labelFor: DerivedUniqueIdProperty({
                                                                      "widgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                    }),
                                                                    width: 3,
                                                                    orientation: "vertical",
                                                                    hasError: ValidationProperty({
                                                                      "inputWidgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                    })
                                                                  }
                                                                )
                                                              ],
                                                              hideFooter: false
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ]
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ],
                                ariaHidden: false
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ],
        "sizeMode": "auto",
        "class": "region-topbar"
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $NavigationTree,
            {
              key: "l.Atlas_Core.Atlas_Default.navigationTree3",
              $widgetId: "l.Atlas_Core.Atlas_Default.navigationTree3",
              class: "mx-name-navigationTree3",
              menu: [
                {
                  "caption": TextProperty({
                    "value": "Home"
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Home_Web.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                }
              ]
            }
          )
        ],
        "sizeMode": "pixels",
        "sizeValue": 232,
        "class": "region-sidebar",
        "toggleMode": "shrink",
        "initiallyOpen": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l.Atlas_Core.Atlas_Default.Main",
              $widgetId: "l.Atlas_Core.Atlas_Default.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Atlas_Default.Main"
              })
            }
          )
        ],
        "class": "region-content"
      }
    }
  )
];
const content = {
  "Main": region$Main
};

export { content };
