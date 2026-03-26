import { reactExports, asPluginWidgets, selectTranslation } from '../index-Zvs2JQW8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Bmj-Y64R.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-N00bQbXV.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CmxZ8zD0.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-DnG6CWYP.js';
import { ImageWidgetModule, Container } from '../Image-DjJe8vjt.js';
import { DataView } from '../DataView-BVzZhbt7.js';
import { Div } from '../Div-CljrUJND.js';
import { Text } from '../Text-CVL0TijG.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-Bs18kg1_.js';
import '../index-CRhQ-MyB.js';
import '../InlineText-BkyswQUs.js';
import '../ScrollContainer-eFomK67V.js';

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Image, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, Container, Image, Text, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.FeedbackModule.PopupSuccess.layoutGrid1",
      $widgetId: "p.FeedbackModule.PopupSuccess.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.FeedbackModule.PopupSuccess.layoutGrid1$row0",
            $widgetId: "p.FeedbackModule.PopupSuccess.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.FeedbackModule.PopupSuccess.layoutGrid1$row0$column0",
                  $widgetId: "p.FeedbackModule.PopupSuccess.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.FeedbackModule.PopupSuccess.dataView1",
                        $widgetId: "p.FeedbackModule.PopupSuccess.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.10",
                          "scope": "$Response",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": ""
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.FeedbackModule.PopupSuccess.container1",
                              $widgetId: "p.FeedbackModule.PopupSuccess.container1",
                              class: "mx-name-container1",
                              renderMode: "div",
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Image,
                                  {
                                    key: "p.FeedbackModule.PopupSuccess.image1",
                                    $widgetId: "p.FeedbackModule.PopupSuccess.image1",
                                    datasource: "image",
                                    imageObject: WebStaticImageProperty({
                                      "image": { "uri": "img/FeedbackModule$Images$Success.png" }
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
                                    heightUnit: "pixels",
                                    height: 240,
                                    iconSize: 14,
                                    displayAs: "fullImage",
                                    responsive: true,
                                    class: "mx-name-image1 img-center"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.FeedbackModule.PopupSuccess.text1",
                                    $widgetId: "p.FeedbackModule.PopupSuccess.text1",
                                    class: "mx-name-text1 text-center d-block spacing-outer-top-large spacing-outer-bottom-medium",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Thanks for sharing your feedback with us!" }, "args": {} }
                                    }),
                                    renderMode: "h3"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.FeedbackModule.PopupSuccess.actionButton2",
                                    $widgetId: "p.FeedbackModule.PopupSuccess.actionButton2",
                                    buttonId: "p.FeedbackModule.PopupSuccess.actionButton2",
                                    class: "mx-name-actionButton2 d-block center-block",
                                    renderType: "button",
                                    buttonClass: "btn-primary",
                                    caption: ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "View your feedback" }, "args": {} }
                                    }),
                                    tooltip: TextProperty({
                                      "value": ""
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "openLink", "argMap": { "$object": { "widget": "$Response", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "FeedbackModule.ResponseHelper/URL" }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: true
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
]);
const title = selectTranslation([
  "Feedback Submitted"
]);
const classes = "";
const cancelChangesOperationId = "Z7YEag/DslWyJ1N3PIMgsQ";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
