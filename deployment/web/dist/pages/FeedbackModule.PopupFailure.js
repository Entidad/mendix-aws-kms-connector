import { reactExports, asPluginWidgets, selectTranslation } from '../index-Zvs2JQW8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Bmj-Y64R.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-DnG6CWYP.js';
import { ImageWidgetModule, Container } from '../Image-DjJe8vjt.js';
import { Div } from '../Div-CljrUJND.js';
import { Text } from '../Text-CVL0TijG.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-Bs18kg1_.js';
import '../index-CRhQ-MyB.js';
import '../InlineText-BkyswQUs.js';
import '../ScrollContainer-eFomK67V.js';

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $Container, $Image, $Text } = asPluginWidgets({ Div, Container, Image, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.FeedbackModule.PopupFailure.layoutGrid1",
      $widgetId: "p.FeedbackModule.PopupFailure.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.FeedbackModule.PopupFailure.layoutGrid1$row0",
            $widgetId: "p.FeedbackModule.PopupFailure.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.FeedbackModule.PopupFailure.layoutGrid1$row0$column0",
                  $widgetId: "p.FeedbackModule.PopupFailure.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.FeedbackModule.PopupFailure.container1",
                        $widgetId: "p.FeedbackModule.PopupFailure.container1",
                        class: "mx-name-container1",
                        renderMode: "div",
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Image,
                            {
                              key: "p.FeedbackModule.PopupFailure.image1",
                              $widgetId: "p.FeedbackModule.PopupFailure.image1",
                              datasource: "image",
                              imageObject: WebStaticImageProperty({
                                "image": { "uri": "img/FeedbackModule$Images$Failure.png" }
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
                              key: "p.FeedbackModule.PopupFailure.text1",
                              $widgetId: "p.FeedbackModule.PopupFailure.text1",
                              class: "mx-name-text1 text-center d-block spacing-outer-top-large spacing-outer-bottom",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Oops, it seems your feedback wasn't sent!" }, "args": {} }
                              }),
                              renderMode: "h3"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.FeedbackModule.PopupFailure.text2",
                              $widgetId: "p.FeedbackModule.PopupFailure.text2",
                              class: "mx-name-text2 text-center d-block",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Please try again later, or contact support if the issue persists." }, "args": {} }
                              }),
                              renderMode: "p"
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
]);
const title = selectTranslation([
  "Something went wrong"
]);
const classes = "";
const cancelChangesOperationId = "hVmBCssJClyJvWilGk7g+A";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
