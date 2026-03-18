import { reactExports, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-B5BaoQn4.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-BHhgotvB.js';
import { ImageWidgetModule, Container } from '../Image-C3uz38Dk.js';
import { DataView } from '../DataView-Dip00PtH.js';
import { Div } from '../Div-o8iece77.js';
import { Text } from '../Text-DuQAvxSA.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-14iW8_Cd.js';
import '../index-D_nCuE-Y.js';
import '../InlineText-BmGDgYXy.js';
import '../ScrollContainer-_UwHUp6v.js';

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
