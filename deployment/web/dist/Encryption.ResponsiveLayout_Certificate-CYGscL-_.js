import { asProperty, useValue, withSideEffect$, fromComputation$, loading, mapL, toObjectById, asArray, readUntracked, getOrElseL, getActionArguments$, pageScope, deepEqual, isObjectItem, isObjectItemArray, AssertionError, isDataSourceValid, runInAction, fromComputationWithDeepEquality$, action, reactExports, jsxRuntimeExports, classNames, reactDomExports, asPluginWidgets, PlaceholderProperty } from './index-FQlVOlYf.js';
import { scheduleAction, raiseOnChange, DerivedUniqueIdProperty } from './DerivedUniqueIdProperty-CMoZmJLZ.js';
import { ActionButton, ActionProperty, TextProperty } from './ActionButton-dEkVZjqk.js';
import { Placeholder, ExpressionProperty } from './Placeholder-DFcDqEIU.js';
import { WebIconProperty } from './WebIconProperty-znHzcziz.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-BHhgotvB.js';
import { ConditionalVisibilityWrapper } from './ConditionalVisibilityWrapper--KfmbLq-.js';
import { Label } from './Label-B5T1vOlN.js';
import { MenuBar } from './MenuBar-CkBAJMgg.js';
import { ScrollContainer } from './ScrollContainer-_UwHUp6v.js';

const SelectionProperty = asProperty(({ selectionType, dataSourceId, onChange }, store, widgetId, propertyPath) => {
  const description = `${widgetId}/${propertyPath}`, [slot$, setSlot] = store.useSlot(widgetId, "selection"), [dataSourceItems$] = store.useSlot(widgetId, `${dataSourceId}/items`), [itemMap$, setItemMap] = useValue(`Selected item map of ${description}`, {}), dataSourceItemMap$ = withSideEffect$(`Data source items for ${description}`, fromComputation$(`Data source items by GUID for ${description}`, () => {
    const dataSourceItems = dataSourceItems$.dependOn() ?? loading();
    return mapL(dataSourceItems, toObjectById);
  }), (loadableItemMap) => {
    if ("loading" === loadableItemMap.status)
      return;
    const slot = asArray(readUntracked(slot$)), itemMap = readUntracked(itemMap$), dataSourceItemMap = getOrElseL(loadableItemMap, {}), selection = slot.map((guid) => dataSourceItemMap[guid] ?? itemMap[guid]).filter((o) => void 0 !== o).filter(customKeepSelectionHandler ?? ((object) => object.id in dataSourceItemMap));
    scheduleAction(() => updateSelectedItems(selection));
  }), onChangeHandler = function() {
    if (!onChange)
      return;
    const onChangeArguments$ = getActionArguments$(onChange.argMap, store, widgetId), [form$] = store.useSlot(pageScope, "form");
    return (value, oldValue) => {
      deepEqual(value, oldValue) || raiseOnChange(onChangeArguments$, form$, onChange, widgetId);
    };
  }();
  let customKeepSelectionHandler;
  switch (selectionType) {
    case "Single":
      return selectionValue$();
    case "Multi":
      return void 0 === readUntracked(slot$) && setSlot([]), selectionValue$();
  }
  function updateSelectedItems(items) {
    const guids = items.map((i) => i.id), value = "Single" === selectionType ? guids[0] : guids, oldValue = readUntracked(slot$);
    setSlot(value), setItemMap(toObjectById(items)), onChangeHandler?.(value, oldValue);
  }
  function setSelection(newValue) {
    if (!function(newValue2) {
      return "Single" === selectionType && (void 0 === newValue2 || isObjectItem(newValue2)) || "Multi" === selectionType && isObjectItemArray(newValue2);
    }(newValue))
      throw new AssertionError(`Value ${newValue} is not assignable to selection of type ${selectionType}. (${description})`);
    const newItems = asArray(newValue);
    if (newItems.some((o) => !isDataSourceValid(o, dataSourceId)))
      throw new AssertionError(`An ObjectItem can only be passed to a selection property that belongs to the same data source. (${description})`);
    if (newItems.length > 1 && new Set(newItems.map((o) => o.id)).size !== newItems.length)
      throw new AssertionError(`A multi-selection may not contain duplicate objects. (${description})`);
    runInAction(() => updateSelectedItems(newItems));
  }
  function selectionValue$() {
    const selecteditemMap$ = fromComputationWithDeepEquality$(`Selected items from data source of ${description}`, () => {
      const slot = asArray(slot$.dependOn()), itemMap = itemMap$.dependOn(), dataSourceItemMap = getOrElseL(dataSourceItemMap$.dependOn(), {}), selection = slot.map((guid) => dataSourceItemMap[guid] ?? itemMap[guid]).filter((o) => void 0 !== o);
      return selection.length === slot.length ? selection : Object.values(itemMap);
    });
    return fromComputation$(`Selection value of ${description}`, () => {
      const selection = (value = selecteditemMap$.dependOn(), "Single" === selectionType ? value[0] : value);
      var value;
      return { type: selectionType, name: description, selection: Object.freeze(selection), setSelection: action((newValue) => setSelection(newValue)), setKeepSelection(predicate) {
        customKeepSelectionHandler = predicate;
      } };
    });
  }
});

const Image = (props) => {
  const [enlarged, setEnlarged] = reactExports.useState(false), image = props.source.value ?? props.placeholder?.value;
  if (!image)
    return jsxRuntimeExports.jsx("img", { style: { display: "none" } });
  const tabIndex = props.alternativeText?.value ?? props.onClick ? { tabIndex: props.tabIndex ?? 0 } : {}, a11yProps = { ...props.alternativeText?.value ? { alt: props.alternativeText.value } : { role: "presentation" }, ...props.onClick ?? props.onClickEnlarge ? { role: "button" } : {}, ...tabIndex }, useMaxSize = props.width && props.height && isInPx(props.width) && isInPx(props.height), onClickHandler = props.onClickEnlarge ? () => setEnlarged(true) : props.onClick?.canExecute ? () => props.onClick?.canExecute && props.onClick.execute() : void 0;
  return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsx("img", { className: classNames("mx-image", props.class, { "img-responsive": props.responsive }), src: image.uri, onClick: onClickHandler, ...a11yProps, style: { ...props.style, cursor: onClickHandler ? "pointer" : void 0, maxHeight: useMaxSize ? props.height : void 0, maxWidth: useMaxSize ? props.width : void 0, height: useMaxSize ? void 0 : props.height, width: useMaxSize ? void 0 : props.width } }), enlarged ? reactDomExports.createPortal(jsxRuntimeExports.jsx(ImageZoom, { src: image.uri, alt: props.alternativeText?.value ?? void 0, onClick: () => setEnlarged(false) }), document.body) : null] });
};
function isInPx(value) {
  return value.endsWith("px");
}
const ImageZoom = ({ src, alt, onClick }) => (reactExports.useEffect(() => {
  const pageYOffset = window.pageYOffset;
  return document.getElementById("content").style.display = "none", () => {
    document.getElementById("content").style.display = "", setTimeout(() => window.scrollTo(0, pageYOffset), 0);
  };
}, []), jsxRuntimeExports.jsx("div", { className: "mx-imagezoom", onClick, role: "button", tabIndex: 0, children: jsxRuntimeExports.jsx("div", { className: "mx-imagezoom-wrapper", children: jsxRuntimeExports.jsx("img", { className: "mx-imagezoom-image", src, alt }) }) }));

const React$1 = { createElement: reactExports.createElement };
const { $ScrollContainer, $ConditionalVisibilityWrapper, $Image, $ActionButton, $MenuBar, $Label, $Placeholder: $Placeholder$1 } = asPluginWidgets({ ScrollContainer, ConditionalVisibilityWrapper, Image, ActionButton, MenuBar, Label, Placeholder });
const region$Main$1 = [
  /* @__PURE__ */ React$1.createElement(
    $ScrollContainer,
    {
      key: "l.Encryption.EncryptionDesktopLayout.layoutContainer",
      $widgetId: "l.Encryption.EncryptionDesktopLayout.layoutContainer",
      class: "mx-name-layoutContainer",
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $ScrollContainer,
            {
              key: "l.Encryption.EncryptionDesktopLayout.layoutContainer2",
              $widgetId: "l.Encryption.EncryptionDesktopLayout.layoutContainer2",
              class: "mx-name-layoutContainer2",
              scrollPerRegion: false,
              layoutMode: "headline",
              top: {
                "enabled": false
              },
              bottom: {
                "enabled": false
              },
              left: {
                "enabled": true,
                "content": [
                  /* @__PURE__ */ React$1.createElement(
                    $ConditionalVisibilityWrapper,
                    {
                      key: "l.Encryption.EncryptionDesktopLayout.staticImageViewer$visibility",
                      $widgetId: "l.Encryption.EncryptionDesktopLayout.staticImageViewer$visibility",
                      visible: ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                      }),
                      contents: [
                        /* @__PURE__ */ React$1.createElement(
                          $Image,
                          {
                            key: "l.Encryption.EncryptionDesktopLayout.staticImageViewer",
                            $widgetId: "l.Encryption.EncryptionDesktopLayout.staticImageViewer",
                            class: "mx-name-staticImageViewer",
                            alternativeText: ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            }),
                            responsive: false,
                            source: WebStaticImageProperty({
                              "image": { "uri": "img/Encryption$Images$logo.png" }
                            }),
                            onClick: ActionProperty({
                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "FTN3+8d6Hl6JFfbOdZ3wgw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false }
                            })
                          }
                        )
                      ]
                    }
                  )
                ],
                "sizeMode": "pixels",
                "sizeValue": 180,
                "class": "",
                "toggleMode": "none",
                "initiallyOpen": false
              },
              right: {
                "enabled": true,
                "content": [
                  /* @__PURE__ */ React$1.createElement(
                    $ConditionalVisibilityWrapper,
                    {
                      key: "l.Encryption.EncryptionDesktopLayout.signOutButton$visibility",
                      $widgetId: "l.Encryption.EncryptionDesktopLayout.signOutButton$visibility",
                      visible: ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_isNamedUser", "parameters": [] }, "args": {} }
                      }),
                      contents: [
                        /* @__PURE__ */ React$1.createElement(
                          $ActionButton,
                          {
                            key: "l.Encryption.EncryptionDesktopLayout.signOutButton",
                            $widgetId: "l.Encryption.EncryptionDesktopLayout.signOutButton",
                            buttonId: "l.Encryption.EncryptionDesktopLayout.signOutButton",
                            class: "mx-name-signOutButton",
                            tabIndex: -1,
                            renderType: "button",
                            buttonClass: "btn-default",
                            caption: ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Sign out" }, "args": {} }
                            }),
                            tooltip: TextProperty({
                              "value": ""
                            }),
                            action: ActionProperty({
                              "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": true },
                              "abortOnServerValidation": true
                            })
                          }
                        )
                      ]
                    }
                  )
                ],
                "sizeMode": "pixels",
                "sizeValue": 180,
                "class": "",
                "style": {
                  "textAlign": "right"
                },
                "toggleMode": "none",
                "initiallyOpen": false
              },
              center: {
                "content": [
                  /* @__PURE__ */ React$1.createElement(
                    $MenuBar,
                    {
                      key: "l.Encryption.EncryptionDesktopLayout.menuBar",
                      $widgetId: "l.Encryption.EncryptionDesktopLayout.menuBar",
                      class: "mx-name-menuBar",
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
                "class": ""
              }
            }
          )
        ],
        "sizeMode": "auto",
        "class": "",
        "style": {
          "padding": "10px"
        }
      },
      bottom: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Label,
            {
              key: "l.Encryption.EncryptionDesktopLayout.label",
              $widgetId: "l.Encryption.EncryptionDesktopLayout.label",
              class: "mx-name-label",
              id: DerivedUniqueIdProperty({
                "widgetId": "l.Encryption.EncryptionDesktopLayout.label"
              }),
              caption: TextProperty({
                "value": "Powered by Mendix\u2122"
              })
            }
          )
        ],
        "sizeMode": "auto",
        "class": ""
      },
      left: {
        "enabled": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Placeholder$1,
            {
              key: "l.Encryption.EncryptionDesktopLayout.Main",
              $widgetId: "l.Encryption.EncryptionDesktopLayout.Main",
              content: PlaceholderProperty({
                "id": "Encryption.EncryptionDesktopLayout.Main"
              })
            }
          )
        ],
        "class": ""
      }
    }
  )
];
const content$1 = {
  "Main": region$Main$1
};

const React = { createElement: reactExports.createElement };
const { $Placeholder } = asPluginWidgets({ Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $Placeholder,
    {
      key: "l.Encryption.ResponsiveLayout_Certificate.Main",
      $widgetId: "l.Encryption.ResponsiveLayout_Certificate.Main",
      content: PlaceholderProperty({
        "id": "Encryption.ResponsiveLayout_Certificate.Main"
      })
    }
  )
];
const content = {
  ...content$1,
  "Encryption.EncryptionDesktopLayout.Main": region$Main
};

export { SelectionProperty, content };
