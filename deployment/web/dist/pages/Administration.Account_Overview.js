import { asProperty, fromConstant$, ensureAssociationId, registerAssociationType, registerFilterAttribute, getSession, getFocus, getHTMLElement, ensure, isNavigableElement, isHTMLElement, reactExports, newId, Big, useForceUpdate, tuple, repeat, reaction, useStoreBackendValue, readUntracked, jsxRuntimeExports, classNames, NestedStoreProvider, asPluginWidgets, selectTranslation } from '../index-FQlVOlYf.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-DFcDqEIU.js';
import { computeAction, ActionButton, TextProperty, ActionProperty } from '../ActionButton-dEkVZjqk.js';
import { listItemProperty, DatabaseObjectListProperty, ListAttributeProperty } from '../ListAttributeProperty-CXLDrwR-.js';
import '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import { ListExpressionProperty } from '../ListExpressionProperty-BbPebQYY.js';
import { DatagridDateFilterWidgetModule, DatagridTextFilterWidgetModule, TemplatedWidgetProperty } from '../DatagridTextFilter-CAhJ0TCr.js';
import { WebIconProperty } from '../WebIconProperty-znHzcziz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { Container } from '../Image-C3uz38Dk.js';
import { DatagridWidgetModule } from '../Datagrid-D4O9fyfS.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-DdIkciE-.js';
import { Div } from '../Div-o8iece77.js';
import { useLegacyResize, getBox } from '../DataView-Dip00PtH.js';
import { usePersistentState } from '../CJS8msnl-qQy3fsQc.js';
import { Text } from '../Text-DuQAvxSA.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-Cr51Glyx.js';
import '../index-D_nCuE-Y.js';
import '../ScrollContainer-_UwHUp6v.js';
import '../InlineText-BmGDgYXy.js';
import '../AssociationProperty-WAySTpZ7.js';
import '../Atlas_Core.OCH_UpdateUserLanguage-CYtkbF7W.js';
import '../index-fpKsB4fe.js';
import '../FormGroup-D4kp91rN.js';
import '../WebStaticImageProperty-BHhgotvB.js';
import '../Combobox-CTuBdCKm.js';
import '../Fragment-686zUVRb.js';

const AssociationMetaDataProperty = asProperty((config) => {
  const { id, filterable } = listAssociationMetaData(config);
  return fromConstant$({ id, filterable });
});
function listAssociationMetaData(config) {
  const endPointPath = `${config.attribute}/${config.endpointEntity}`, associationPath = config.path ? `${config.path}/${endPointPath}` : endPointPath, id = ensureAssociationId(associationPath, config.dataSourceId, config.selectableObjectsId), filterable = config.filterable && !(mx.isOffline() && config.path);
  return registerAssociationType(id, config.type), registerFilterAttribute(id, filterable), { id, filterable, associationPath };
}

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

let rightToLeft;
function isRightToLeft() {
  if (void 0 === rightToLeft) {
    const session = getSession();
    rightToLeft = "rtl" === session.getConfig("uiconfig.direction");
  }
  return rightToLeft;
}

var NavigationKeys, NavigationCommand;
!function(NavigationKeys2) {
  NavigationKeys2[NavigationKeys2.UpDown = 0] = "UpDown", NavigationKeys2[NavigationKeys2.LeftRight = 1] = "LeftRight";
}(NavigationKeys || (NavigationKeys = {})), function(NavigationCommand2) {
  NavigationCommand2[NavigationCommand2.FORWARD = 0] = "FORWARD", NavigationCommand2[NavigationCommand2.BACKWARD = 1] = "BACKWARD";
}(NavigationCommand || (NavigationCommand = {}));
class RovingTabIndex {
  constructor(keys, container, childQuery = findNavigableDescendants) {
    this.children = [], this.currentIndex = -1, this.focused = false, this.updating = false, this.shiftingFocus = false, this.mutationObserver = new MutationObserver(this.onMutation.bind(this)), this.keys = keys, this.container = container, this.childQuery = childQuery, this.keyListener = this.createKeyListener(), this.focusInListener = this.createFocusInListener(), this.focusOutListener = this.createFocusOutListener(), this.addListeners(), this.handleMutation();
  }
  onMutation(_records) {
    this.handleMutation();
  }
  handleMutation() {
    const children = (elements = this.childQuery(this.container), Array.isArray(elements) ? elements : Array.from(elements).filter((e) => e instanceof HTMLElement)).filter((c) => !c.hasAttribute("data-roving-inactive"));
    var elements;
    this.doWithoutMutations(() => this.updateChildren(children));
  }
  setChildQuery(childQuery = findNavigableDescendants) {
    this.childQuery = childQuery;
  }
  setOnActiveRowChange(callback) {
    this.onActiveRowChange = callback;
  }
  setContainer(newContainer) {
    this.container !== newContainer && (this.removeListeners(), this.container = newContainer, this.addListeners(), this.handleMutation());
  }
  updateChildren(newChildren) {
    const oldCurrent = this.getCurrentElement();
    if (function(oldChildren, newChildren2) {
      if (a = oldChildren, b = newChildren2, a.length === b.length && a.every((e, i) => e === b[i]))
        return false;
      var a, b;
      const oldSet = /* @__PURE__ */ new Set();
      return oldChildren.forEach((v) => oldSet.add(v)), newChildren2.forEach((v) => {
        oldSet.delete(v) || v.setAttribute("data-roving-tabindex", "");
      }), oldSet.forEach((v) => unmanageElement(v)), true;
    }(this.children, newChildren) && (this.children = newChildren.slice()), oldCurrent) {
      const newIndex = newChildren.indexOf(oldCurrent);
      if (this.setCurrentIndex(-1 !== newIndex ? newIndex : this.findValidIndex(false, 0)), this.focused) {
        const newCurrent = this.getCurrentElement();
        setTimeout(() => this.restoreFocus(oldCurrent !== newCurrent), 0);
      }
    } else
      this.updateTabIndices();
    this.updateState();
  }
  restoreFocus(force) {
    if (this.shiftingFocus && !force)
      return;
    const active = getFocus(), current = this.getCurrentElement();
    (force || !active || current && current !== active && current.contains(active)) && this.focusCurrentElement();
  }
  updateState() {
    const current = this.getCurrentElement();
    current && isInteractive(current) || (this.setCurrentIndex(this.findValidIndex()), this.focused && this.focusCurrentElement());
  }
  destroy() {
    this.mutationObserver.disconnect(), this.removeListeners(), this.children.forEach(unmanageElement);
  }
  addListeners() {
    this.container.addEventListener("keydown", this.keyListener), this.container.addEventListener("focusin", this.focusInListener), this.container.addEventListener("focusout", this.focusOutListener);
  }
  removeListeners() {
    this.container.removeEventListener("keydown", this.keyListener), this.container.removeEventListener("focusin", this.focusInListener), this.container.removeEventListener("focusout", this.focusOutListener);
  }
  doWithoutMutations(callback) {
    const wasUpdating = this.updating;
    wasUpdating || (this.updating = true, this.mutationObserver.disconnect()), callback(), wasUpdating || (this.mutationObserver.observe(this.container, { childList: true, attributes: true, subtree: true }), this.updating = false);
  }
  createKeyListener() {
    return (e) => {
      const command = this.getNavigationCommand(e);
      if (null !== command) {
        e.preventDefault();
        const reverse = command.valueOf() === NavigationCommand.BACKWARD.valueOf();
        this.setCurrentIndex(this.findValidIndex(reverse)), this.focusCurrentElement();
      }
    };
  }
  createFocusInListener() {
    return (e) => {
      const target = getHTMLElement(ensure(e.target));
      let newIndex = -1, current = target;
      for (; current && (newIndex = this.children.indexOf(current), -1 === newIndex); )
        current = current.parentElement;
      -1 !== newIndex && this.setCurrentIndex(newIndex), target && target !== current && !isNavigableElement(target) && window.setTimeout(() => this.focusCurrentElement(), 0), this.focused = true;
    };
  }
  createFocusOutListener() {
    return (e) => {
      const current = this.getCurrentElement(), relatedTarget = getHTMLElement(ensure(e.relatedTarget ?? document.activeElement));
      this.shiftingFocus = true, relatedTarget && this.container.contains(relatedTarget) || window.setTimeout(() => {
        this.focused = false;
      }, 0), ensure(e.target) === current && window.setTimeout(() => {
        isInteractive(current) && null !== current.parentNode || this.doWithoutMutations(() => {
          this.updateState(), this.focusCurrentElement();
        });
      }, 0), window.setTimeout(() => {
        this.shiftingFocus = false;
      }, 0);
    };
  }
  getNavigationCommand(e) {
    switch (this.keys) {
      case NavigationKeys.UpDown:
        switch (e.key) {
          case "ArrowUp":
          case "Up":
            return NavigationCommand.BACKWARD;
          case "ArrowDown":
          case "Down":
            return NavigationCommand.FORWARD;
        }
        break;
      case NavigationKeys.LeftRight: {
        const rtl = isRightToLeft();
        switch (e.key) {
          case "ArrowLeft":
          case "Left":
            return rtl ? NavigationCommand.FORWARD : NavigationCommand.BACKWARD;
          case "ArrowRight":
          case "Right":
            return rtl ? NavigationCommand.BACKWARD : NavigationCommand.FORWARD;
        }
        break;
      }
    }
    return null;
  }
  setCurrentIndex(index) {
    this.currentIndex = index, this.updateTabIndices(), this.onActiveRowChange && this.onActiveRowChange(index);
  }
  focusCurrentElement() {
    const current = this.getCurrentElement();
    current && current.focus();
  }
  updateTabIndices() {
    this.doWithoutMutations(() => {
      this.children.forEach((c, i) => c.setAttribute("tabindex", i === this.currentIndex ? "0" : "-1"));
    });
  }
  findValidIndex(reverse = false, offset = 1, startIndex = this.currentIndex) {
    const newIndex = reverse ? findLastIndexInArray(this.children, isInteractive, startIndex - offset) : findFirstIndexInArray(this.children, isInteractive, startIndex + offset);
    return -1 !== newIndex ? newIndex : reverse ? findFirstIndexInArray(this.children, isInteractive) : findLastIndexInArray(this.children, isInteractive);
  }
  getCurrentElement() {
    return -1 !== this.currentIndex ? this.children[this.currentIndex] : null;
  }
}
function unmanageElement(e) {
  e.removeAttribute("tabindex"), e.removeAttribute("data-roving-tabindex");
}
function findFirstIndexInArray(elements, predicate, startIndex = 0) {
  const index = elements.slice(startIndex).findIndex(predicate);
  return -1 === index ? -1 : index + startIndex;
}
function findLastIndexInArray(elements, predicate, startIndex = elements.length - 1) {
  const index = elements.slice(0, startIndex + 1).reverse().findIndex(predicate);
  return -1 === index ? -1 : startIndex - index;
}
function findNavigableDescendants(element, output = []) {
  for (let i = 0, len = element.children.length; i < len; i++) {
    const child = element.children.item(i);
    isHTMLElement(child) && ((child.hasAttribute("data-roving-tabindex") || isNavigableElement(child)) && output.push(child), findNavigableDescendants(child, output));
  }
  return output;
}
function isInteractive(element) {
  return function(element2) {
    const computedStyle = window.getComputedStyle(element2);
    return "visible" === computedStyle.visibility && "none" !== computedStyle.display;
  }(element) && function(element2) {
    return !element2.disabled;
  }(element);
}
function useRovingTabIndex(elementRef, navigationKeys, childQuery) {
  reactExports.useLayoutEffect(() => {
    const rovingTabIndex = new RovingTabIndex(navigationKeys, ensure(elementRef.current), childQuery);
    return () => rovingTabIndex.destroy();
  }, [elementRef, navigationKeys, childQuery]);
}

function TabContainer(props) {
  const id = reactExports.useState(() => newId())[0], [activeTab, activeTabChanged, setActiveTab] = function(activeTab2, defaultTab) {
    const previousCurrentValueRef = reactExports.useRef(void 0), setActiveTab2 = reactExports.useCallback((newTab) => {
      activeTab2 && !activeTab2.readOnly && activeTab2.setValue(new Big(newTab + 1));
    }, [activeTab2?.readOnly, activeTab2?.setValue]);
    if (!activeTab2)
      return [defaultTab, false, () => {
      }];
    const currentValue = Math.max(activeTab2.value?.toNumber() ?? 0, 0), activeTabChanged2 = previousCurrentValueRef.current !== currentValue;
    activeTabChanged2 && (previousCurrentValueRef.current = currentValue);
    return [currentValue - 1, activeTabChanged2, setActiveTab2];
  }(props.activeTab, props.defaultTab), [selectedTabIndex, selectionHasChanged, setSelectedTabIndex] = function(tabs, activeTab2, activeTabChanged2, setActiveTab2) {
    const [selectedTabIndex2, setSelectedTabIndex2] = usePersistentState("selectedTab", activeTab2);
    let visibleTabToSelect = selectedTabIndex2 >= tabs.length ? -1 : selectedTabIndex2;
    if (-1 !== visibleTabToSelect) {
      for (; !isVisible(ensure(tabs[visibleTabToSelect])) && (visibleTabToSelect = (visibleTabToSelect + 1) % tabs.length, visibleTabToSelect !== selectedTabIndex2); )
        ;
      visibleTabToSelect !== selectedTabIndex2 && setSelectedTabIndex2(visibleTabToSelect);
    }
    const previousSelectionRef = reactExports.useRef(visibleTabToSelect), selectionHasChanged2 = previousSelectionRef.current !== visibleTabToSelect;
    previousSelectionRef.current = visibleTabToSelect, activeTabChanged2 && -1 !== activeTab2 && activeTab2 + 1 <= tabs.length && previousSelectionRef.current !== activeTab2 && selectTabIndex(activeTab2, false);
    const forceUpdate = useForceUpdate();
    function selectTabIndex(tabIndex, updateAttribute = true) {
      tabIndex === visibleTabToSelect ? (previousSelectionRef.current = -1, forceUpdate()) : (setSelectedTabIndex2(tabIndex), updateAttribute && setActiveTab2(tabIndex));
    }
    return tuple(visibleTabToSelect, selectionHasChanged2, selectTabIndex);
  }(props.tabs, activeTab, activeTabChanged, setActiveTab), tabsState = function(tabs, selectedTabIndex2, selectionHasChanged2) {
    const tabStateRef = reactExports.useRef(tabs.map((tab) => !tab.isDelayed && isVisible(tab) ? { key: 0 } : "hidden"));
    if (-1 !== selectedTabIndex2) {
      const selectedTabState = ensure(tabStateRef.current[selectedTabIndex2]);
      "hidden" === selectedTabState ? tabStateRef.current[selectedTabIndex2] = { key: 0 } : selectionHasChanged2 && ensure(tabs[selectedTabIndex2]).refreshOnShow && (selectedTabState.key += 1);
    }
    return tabStateRef.current;
  }(props.tabs, selectedTabIndex, selectionHasChanged), [invalidCounts, handleStore] = function(widgetName, length) {
    const [invalidCounts2, setInvalidCounts] = reactExports.useState(() => repeat(length, () => 0)), disposersRef = reactExports.useRef(repeat(length, () => {
    }));
    function handleStore2(store, index) {
      disposersRef.current[index]?.();
      const allInvalid$ = store.getAll$("isInvalid");
      disposersRef.current[index] = reaction(() => allInvalid$.dependOn().filter(Boolean).length, (invalidCount) => {
        setInvalidCounts((prevInvalidCounts) => {
          const newInvalidCounts = [...prevInvalidCounts];
          return newInvalidCounts[index] = invalidCount, newInvalidCounts;
        });
      }, { fireImmediately: false, name: `Validation of tab ${index} of ${widgetName}` });
    }
    return reactExports.useEffect(() => () => disposersRef.current.forEach((d) => d?.()), []), tuple(invalidCounts2, handleStore2);
  }(props.name, props.tabs.length), tabContainerNode = reactExports.useRef(null), tabListNode = reactExports.useRef(null), tabContentNode = reactExports.useRef(null);
  return useRovingTabIndex(tabListNode, NavigationKeys.LeftRight, reactExports.useCallback((element) => element.querySelectorAll("a"), [])), useLegacyResize(tabContainerNode, reactExports.useCallback(function(container) {
    const tabContent = ensure(tabContentNode.current);
    if (!container)
      return tabContent.style.height = "auto", void (tabContent.style.overflow = "");
    const parentBox = getBox(container), tabListBox = getBox(ensure(tabListNode.current)), remainder = parentBox.contentBox.height - tabListBox.marginBox.height;
    remainder > 100 ? (tabContent.style.height = `${remainder}px`, tabContent.style.overflow = "auto") : (tabContent.style.height = "auto", tabContent.style.overflow = "");
  }, [tabContentNode, tabListNode])), props.hoistedSelections?.forEach((s) => {
    const [value$, setValue] = useStoreBackendValue(s, "selection");
    setValue(readUntracked(value$));
  }), jsxRuntimeExports.jsxs("div", { className: classNames("mx-tabcontainer", props.class), style: props.style, "data-focusindex": props.tabIndex, ref: tabContainerNode, children: [jsxRuntimeExports.jsx("ul", { className: "nav nav-tabs mx-tabcontainer-tabs", role: "tablist", ref: tabListNode, children: props.tabs.map((tab, index) => isVisible(tab) ? jsxRuntimeExports.jsxs("li", { className: classNames({ active: selectedTabIndex === index }), role: "presentation", onClick: (e) => {
    setSelectedTabIndex(index), e.preventDefault();
  }, children: [jsxRuntimeExports.jsxs("a", { href: "#", className: `mx-name-${tab.name}`, id: `${id}-t${index}`, "aria-controls": `${id}-p${index}`, role: "tab", "aria-selected": selectedTabIndex === index, children: [tab.caption.value, tab.badge && jsxRuntimeExports.jsx("span", { className: "mx-tabcontainer-badge", style: { display: tab.badge.value ? "inline-block" : "none" }, children: tab.badge.value })] }), ensure(invalidCounts[index]) > 0 && jsxRuntimeExports.jsx("span", { className: "mx-tabcontainer-indicator", children: invalidCounts[index] })] }, index) : void 0) }), jsxRuntimeExports.jsx("div", { className: "tab-content mx-tabcontainer-content", "data-focusindex": "0", ref: tabContentNode, children: props.tabs.map((tab, index) => {
    const tabState = ensure(tabsState[index]), isContentVisible = reactExports.useMemo(() => void 0 === tab.isVisible || !!tab.isVisible.value, [tab.isVisible]);
    return jsxRuntimeExports.jsx("div", { className: classNames("tab-pane mx-tabcontainer-pane", { active: selectedTabIndex === index }), style: isVisible(tab) ? void 0 : { display: "none" }, id: `${id}-p${index}`, role: "tabpanel", "aria-labelledby": `${id}-t${index}`, children: jsxRuntimeExports.jsx(NestedStoreProvider, { namespace: `${props.widgetId}.${index}`, setupStore: reactExports.useCallback((store) => handleStore(store, index), []), children: "hidden" !== tabState && isContentVisible ? jsxRuntimeExports.jsx(PageFragment, { renderKey: tabState.key, children: tab.content }) : null }) }, index);
  }) })] });
}
function isVisible(tab) {
  return !tab.isVisible || "loading" === tab.isVisible.status && void 0 === tab.isVisible.value || Boolean(tab.isVisible.value);
}

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $TabContainer, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, TabContainer, Datagrid, DatagridTextFilter, DatagridDropdownFilter, DatagridDateFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.Administration.Account_Overview.container1",
      $widgetId: "p.Administration.Account_Overview.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      renderMode: "div",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.Account_Overview.layoutGrid1",
            $widgetId: "p.Administration.Account_Overview.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.Account_Overview.layoutGrid1$row0",
                  $widgetId: "p.Administration.Account_Overview.layoutGrid1$row0",
                  class: "row",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.Administration.Account_Overview.layoutGrid1$row0$column0",
                        $widgetId: "p.Administration.Account_Overview.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.Account_Overview.label1",
                              $widgetId: "p.Administration.Account_Overview.label1",
                              class: "mx-name-label1 pageheader-title",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Account Overview" }, "args": {} }
                              }),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.Account_Overview.label2",
                              $widgetId: "p.Administration.Account_Overview.label2",
                              class: "mx-name-label2 pageheader-subtitle",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "These are the local users of your app. Please note that only these users should be managed in this app. MendixSSO users are provisioned by the MendixSSO module and should be managed from the App User Management screen (Developer Portal > General Settings > Manage App Users)." }, "args": {} }
                              }),
                              renderMode: "h4"
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
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.Account_Overview.layoutGrid4",
      $widgetId: "p.Administration.Account_Overview.layoutGrid4",
      class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.Account_Overview.layoutGrid4$row0",
            $widgetId: "p.Administration.Account_Overview.layoutGrid4$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.Account_Overview.layoutGrid4$row0$column0",
                  $widgetId: "p.Administration.Account_Overview.layoutGrid4$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $TabContainer,
                      {
                        key: "p.Administration.Account_Overview.tabControl",
                        $widgetId: "p.Administration.Account_Overview.tabControl",
                        class: "mx-name-tabControl tabsfullwidth",
                        widgetId: "p.Administration.Account_Overview.tabControl",
                        defaultTab: 0,
                        tabs: [
                          {
                            "name": "tabPage2",
                            "caption": TextProperty({
                              "value": "Local Users"
                            }),
                            "isDelayed": false,
                            "refreshOnShow": false,
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Datagrid,
                                {
                                  key: "p.Administration.Account_Overview.dataGrid21",
                                  $widgetId: "p.Administration.Account_Overview.dataGrid21",
                                  datasource: DatabaseObjectListProperty({
                                    "dataSourceId": "p.14",
                                    "entity": "Administration.Account",
                                    "operationId": "Pc/ggOTYolqAfZWTixaLFw",
                                    "sort": [
                                      [
                                        "FullName",
                                        "asc"
                                      ]
                                    ],
                                    "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "function", "name": "or", "parameters": [{ "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] } } } }, { "type": "function", "name": "not", "parameters": [{ "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole2", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole2", "attributeType": "ObjectReference" }, "next": { "type": "attribute", "attribute": "id", "context": "System.UserRole2", "attributeType": "ObjectReference" } }] }] }, { "type": "function", "name": "!=", "parameters": [{ "type": "attribute", "attribute": "Name", "context": "Administration.Account", "attributeType": "String" }, { "type": "literal", "value": null }] }] }
                                  }),
                                  refreshInterval: 0,
                                  itemSelectionMethod: "checkbox",
                                  showSelectAllToggle: true,
                                  columns: [
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "dynamicText": void 0,
                                      "header": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                      }),
                                      "tooltip": void 0,
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.Administration.Account_Overview.textFilter1",
                                            $widgetId: "p.Administration.Account_Overview.textFilter1",
                                            defaultFilter: "contains",
                                            placeholder: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            adjustable: true,
                                            delay: 500,
                                            screenReaderButtonCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            screenReaderInputCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            attrChoice: "auto",
                                            attributes: [],
                                            class: "mx-name-textFilter1"
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": void 0,
                                      "allowEventPropagation": true,
                                      "exportType": "default"
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "Name",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "dynamicText": void 0,
                                      "header": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Login" }, "args": {} }
                                      }),
                                      "tooltip": void 0,
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.Administration.Account_Overview.textFilter2",
                                            $widgetId: "p.Administration.Account_Overview.textFilter2",
                                            defaultFilter: "contains",
                                            placeholder: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            adjustable: true,
                                            delay: 500,
                                            screenReaderButtonCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            screenReaderInputCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            attrChoice: "auto",
                                            attributes: [],
                                            class: "mx-name-textFilter2"
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": void 0,
                                      "allowEventPropagation": true,
                                      "exportType": "default"
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "System.UserRoles/System.UserRole",
                                        "entity": "System.UserRole",
                                        "attribute": "Name",
                                        "attributeType": "String",
                                        "sortable": false,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": true
                                      }),
                                      "dynamicText": void 0,
                                      "header": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Roles" }, "args": {} }
                                      }),
                                      "tooltip": void 0,
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter1",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter1",
                                            auto: true,
                                            filterOptions: [],
                                            emptyOptionCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "None" }, "args": {} }
                                            }),
                                            multiSelect: true,
                                            ariaLabel: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "ref",
                                            attrChoice: "auto",
                                            refEntity: AssociationMetaDataProperty({
                                              "type": "ReferenceSet",
                                              "entity": void 0,
                                              "path": "",
                                              "attribute": "System.UserRoles",
                                              "endpointEntity": "System.UserRole",
                                              "selectableObjectsId": "p.15",
                                              "filterable": true,
                                              "dataSourceId": "p.14"
                                            }),
                                            refOptions: DatabaseObjectListProperty({
                                              "dataSourceId": "p.15",
                                              "entity": "System.UserRole",
                                              "operationId": "KmXqbqNE/16UR8gBjpCwsQ",
                                              "sort": []
                                            }),
                                            refCaptionSource: "exp",
                                            refCaptionExp: ListExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.drop_downFilter1", "source": "object" } } },
                                              "dataSourceId": "p.15"
                                            }),
                                            fetchOptionsLazy: true,
                                            emptySelectionCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                            }),
                                            filterInputPlaceholderCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                            }),
                                            class: "mx-name-drop_downFilter1"
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": false,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": void 0,
                                      "allowEventPropagation": true,
                                      "exportType": "default"
                                    },
                                    {
                                      "showContentAs": "dynamicText",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "LastLogin",
                                        "attributeType": "DateTime",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "dynamicText": ListExpressionProperty({
                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "LastLogin" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                        "dataSourceId": "p.14"
                                      }),
                                      "header": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Last login" }, "args": {} }
                                      }),
                                      "tooltip": void 0,
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDateFilter,
                                          {
                                            key: "p.Administration.Account_Overview.dateFilter1",
                                            $widgetId: "p.Administration.Account_Overview.dateFilter1",
                                            defaultFilter: "equal",
                                            placeholder: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            adjustable: true,
                                            screenReaderButtonCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            screenReaderCalendarCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            screenReaderInputCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            attrChoice: "auto",
                                            attributes: [],
                                            class: "mx-name-dateFilter1"
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": void 0,
                                      "allowEventPropagation": true,
                                      "exportType": "default"
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "Active",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.text2$visibility",
                                              $widgetId: "p.Administration.Account_Overview.text2$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Active" }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Text,
                                                  {
                                                    key: "p.Administration.Account_Overview.text2",
                                                    $widgetId: "p.Administration.Account_Overview.text2",
                                                    class: "mx-name-text2 badge label-success",
                                                    caption: ExpressionProperty({
                                                      "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                    }),
                                                    renderMode: "span"
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.text3$visibility",
                                              $widgetId: "p.Administration.Account_Overview.text3$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Active" }] }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Text,
                                                  {
                                                    key: "p.Administration.Account_Overview.text3",
                                                    $widgetId: "p.Administration.Account_Overview.text3",
                                                    class: "mx-name-text3 badge label-secondary",
                                                    caption: ExpressionProperty({
                                                      "expression": { "expr": { "type": "literal", "value": "Inactive" }, "args": {} }
                                                    }),
                                                    renderMode: "span"
                                                  }
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": void 0,
                                      "header": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                      }),
                                      "tooltip": void 0,
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter2",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter2",
                                            auto: true,
                                            filterOptions: [],
                                            emptyOptionCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            multiSelect: false,
                                            ariaLabel: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            attrChoice: "auto",
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                            }),
                                            filterInputPlaceholderCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                            }),
                                            class: "mx-name-drop_downFilter2"
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": void 0,
                                      "allowEventPropagation": true,
                                      "exportType": "default"
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "WebServiceUser",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "dynamicText": void 0,
                                      "header": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Web service user" }, "args": {} }
                                      }),
                                      "tooltip": void 0,
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter3",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter3",
                                            auto: true,
                                            filterOptions: [],
                                            emptyOptionCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            multiSelect: false,
                                            ariaLabel: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            attrChoice: "auto",
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                            }),
                                            filterInputPlaceholderCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                            }),
                                            class: "mx-name-drop_downFilter3"
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": void 0,
                                      "allowEventPropagation": true,
                                      "exportType": "default"
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "IsLocalUser",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "dynamicText": void 0,
                                      "header": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Local" }, "args": {} }
                                      }),
                                      "tooltip": void 0,
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter4",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter4",
                                            auto: true,
                                            filterOptions: [],
                                            emptyOptionCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            multiSelect: false,
                                            ariaLabel: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            }),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            attrChoice: "auto",
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                            }),
                                            filterInputPlaceholderCaption: ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                            }),
                                            class: "mx-name-drop_downFilter4"
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": void 0,
                                      "allowEventPropagation": true,
                                      "exportType": "default"
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton3$visibility",
                                              $widgetId: "p.Administration.Account_Overview.actionButton3$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ActionButton,
                                                  {
                                                    key: "p.Administration.Account_Overview.actionButton3",
                                                    $widgetId: "p.Administration.Account_Overview.actionButton3",
                                                    buttonId: "p.Administration.Account_Overview.actionButton3",
                                                    class: "mx-name-actionButton3 btn-lg",
                                                    renderType: "link",
                                                    role: "button",
                                                    buttonClass: "btn-default",
                                                    caption: ExpressionProperty({
                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    }),
                                                    tooltip: TextProperty({
                                                      "value": ""
                                                    }),
                                                    icon: WebIconProperty({
                                                      "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-pencil" }
                                                    }),
                                                    action: ActionProperty({
                                                      "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                      "abortOnServerValidation": true
                                                    })
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton4",
                                              $widgetId: "p.Administration.Account_Overview.actionButton4",
                                              buttonId: "p.Administration.Account_Overview.actionButton4",
                                              class: "mx-name-actionButton4 btn-lg spacing-outer-left-medium",
                                              renderType: "link",
                                              role: "button",
                                              buttonClass: "btn-default",
                                              caption: ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              }),
                                              tooltip: TextProperty({
                                                "value": ""
                                              }),
                                              icon: WebIconProperty({
                                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                              }),
                                              action: ActionProperty({
                                                "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "txr/hpXXh1+4WrqXhH4sjQ" }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": void 0,
                                      "header": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                                      }),
                                      "tooltip": void 0,
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": false,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "no",
                                      "width": "autoFit",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": void 0,
                                      "allowEventPropagation": true,
                                      "exportType": "default"
                                    }
                                  ],
                                  columnsFilterable: true,
                                  pageSize: 20,
                                  pagination: "buttons",
                                  pagingPosition: "bottom",
                                  showPagingButtons: "always",
                                  showEmptyPlaceholder: "none",
                                  onClick: ListActionProperty({
                                    "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                    "abortOnServerValidation": false,
                                    "dataSourceId": "p.14",
                                    "argumentTypes": {}
                                  }),
                                  columnsSortable: true,
                                  columnsResizable: true,
                                  columnsDraggable: true,
                                  columnsHidable: true,
                                  filtersPlaceholder: [
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p.Administration.Account_Overview.actionButton1$visibility",
                                        $widgetId: "p.Administration.Account_Overview.actionButton1$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton1",
                                              $widgetId: "p.Administration.Account_Overview.actionButton1",
                                              buttonId: "p.Administration.Account_Overview.actionButton1",
                                              class: "mx-name-actionButton1 spacing-outer-bottom",
                                              renderType: "button",
                                              buttonClass: "btn-success",
                                              caption: ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "New local user" }, "args": {} }
                                              }),
                                              tooltip: TextProperty({
                                                "value": ""
                                              }),
                                              action: ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "0GMeM+LAHFOSuJvdx2UuTA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    ),
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p.Administration.Account_Overview.actionButton2$visibility",
                                        $widgetId: "p.Administration.Account_Overview.actionButton2$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton2",
                                              $widgetId: "p.Administration.Account_Overview.actionButton2",
                                              buttonId: "p.Administration.Account_Overview.actionButton2",
                                              class: "mx-name-actionButton2 spacing-outer-left spacing-outer-bottom",
                                              renderType: "button",
                                              buttonClass: "btn-default",
                                              caption: ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "New web service user" }, "args": {} }
                                              }),
                                              tooltip: TextProperty({
                                                "value": ""
                                              }),
                                              action: ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "e2V6pYJSDFydRNPHw7P+5g", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ],
                                  filterSectionTitle: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                  }),
                                  exportDialogLabel: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                                  }),
                                  cancelExportLabel: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                                  }),
                                  selectRowLabel: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                                  }),
                                  onClickTrigger: "double",
                                  itemSelectionMode: "clear",
                                  loadingType: "spinner",
                                  showNumberOfRows: false,
                                  loadMoreButtonCaption: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                  }),
                                  configurationStorageType: "attribute",
                                  storeFiltersInPersonalization: true,
                                  selectAllRowsLabel: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                  }),
                                  autoSelect: false,
                                  enableSelectAll: false,
                                  keepSelection: false,
                                  selectionCounterPosition: "bottom",
                                  refreshIndicator: false,
                                  useCustomPagination: false,
                                  selectingAllLabel: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Selecting all items..." }, "args": {} }
                                  }),
                                  cancelSelectionLabel: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Cancel selection" }, "args": {} }
                                  }),
                                  selectedCountTemplateSingular: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "%d row selected" }, "args": {} }
                                  }),
                                  selectedCountTemplatePlural: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "%d rows selected" }, "args": {} }
                                  }),
                                  selectAllText: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Select all rows in the data source" }, "args": {} }
                                  }),
                                  selectAllTemplate: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Select all %d rows in the data source" }, "args": {} }
                                  }),
                                  allSelectedText: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "All %d rows selected." }, "args": {} }
                                  }),
                                  clearSelectionButtonLabel: ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                  }),
                                  class: "mx-name-dataGrid21 table-hover"
                                }
                              )
                            ]
                          }
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
]);
const title = selectTranslation([
  "Accounts"
]);
const classes = "layout-atlas layout-atlas-responsive-default page-tabs page-tabs-fullwidth";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
