import { useEnsureConstantValues, reactExports, ensure, jsxRuntimeExports, classNames } from './index-FQlVOlYf.js';

var getRect = function(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  return { top, right, bottom, left, width: right - left, height: bottom - top, x: left, y: top, center: { x: (right + left) / 2, y: (bottom + top) / 2 } };
}, shrink = function(target, shrinkBy) {
  return { top: target.top + shrinkBy.top, left: target.left + shrinkBy.left, bottom: target.bottom - shrinkBy.bottom, right: target.right - shrinkBy.right };
}, noSpacing = { top: 0, right: 0, bottom: 0, left: 0 }, parse = function(raw) {
  var value = raw.slice(0, -2);
  if ("px" !== raw.slice(-2))
    return 0;
  var result = Number(value);
  return isNaN(result) && function() {
    throw new Error("Invariant failed");
  }(), result;
}, calculateBox = function(borderBox, styles) {
  return function(_ref2) {
    var target, expandBy, borderBox2 = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = void 0 === _ref2$margin ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = void 0 === _ref2$border ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = void 0 === _ref2$padding ? noSpacing : _ref2$padding, marginBox = getRect((expandBy = margin, { top: (target = borderBox2).top - expandBy.top, left: target.left - expandBy.left, bottom: target.bottom + expandBy.bottom, right: target.right + expandBy.right })), paddingBox = getRect(shrink(borderBox2, border)), contentBox = getRect(shrink(paddingBox, padding));
    return { marginBox, borderBox: getRect(borderBox2), paddingBox, contentBox, margin, border, padding };
  }({ borderBox, margin: { top: parse(styles.marginTop), right: parse(styles.marginRight), bottom: parse(styles.marginBottom), left: parse(styles.marginLeft) }, padding: { top: parse(styles.paddingTop), right: parse(styles.paddingRight), bottom: parse(styles.paddingBottom), left: parse(styles.paddingLeft) }, border: { top: parse(styles.borderTopWidth), right: parse(styles.borderRightWidth), bottom: parse(styles.borderBottomWidth), left: parse(styles.borderLeftWidth) } });
}, getBox = function(el) {
  var borderBox = el.getBoundingClientRect(), styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};
function useLegacyResize(nodeRef, adjustHeight, additionalResizeObservers = []) {
  useEnsureConstantValues(nodeRef, adjustHeight);
  const observersRef = reactExports.useRef([]);
  function startObservingResize(resizeObservers, fireImmediately) {
    const resizeContainer = function(containerNode) {
      for (; containerNode?.classList.contains("mx-placeholder") || containerNode?.getAttribute("data-widget-wrapper"); )
        containerNode = containerNode.parentElement;
      if (!containerNode)
        return;
      return 1 === resizableContainers.filter((k) => containerNode.classList.contains(k)).length ? containerNode : void 0;
    }(nodeRef.current?.parentElement ?? null);
    if (!resizeContainer)
      return;
    const dimensionSource = resizeContainer.classList.contains("mx-tabcontainer-pane") ? ensure(resizeContainer.parentElement) : resizeContainer, onResize = () => {
      nodeRef.current && adjustHeight(function(containerNode, dimensionSource2) {
        return "auto" !== dimensionSource2.style.height && 1 === getChildrenCount(containerNode);
      }(resizeContainer, dimensionSource) ? dimensionSource : void 0);
    };
    dimensionSource !== resizeContainer ? (createObserver(observersRef, dimensionSource, { attributes: true, attributeFilter: ["style"] }, onResize), createObserver(observersRef, resizeContainer, { childList: true }, onResize)) : createObserver(observersRef, resizeContainer, { attributes: true, attributeFilter: ["style"], childList: true }, onResize), resizeObservers.forEach(({ node, options }) => {
      node.current && createObserver(observersRef, node.current, options, onResize);
    }), fireImmediately && onResize();
  }
  reactExports.useEffect(() => () => observersRef.current.forEach((o) => o.disconnect()), []), reactExports.useEffect(() => {
    const widgetNode = (domNode = ensure(nodeRef.current), domNode.parentElement?.getAttribute("data-widget-wrapper") ? domNode.parentElement : domNode);
    var domNode;
    const incubatorParent = function(widgetNode2) {
      return widgetNode2?.parentElement?.classList.contains("mx-placeholder") && widgetNode2.parentElement.parentElement?.classList.contains("mx-incubator") ? widgetNode2.parentElement.parentElement : void 0;
    }(widgetNode);
    if (incubatorParent) {
      const hatchingObserver = createObserver(observersRef, incubatorParent, { childList: true }, (entries) => {
        entries.forEach((entry) => {
          Array.from(entry.removedNodes).includes(widgetNode.parentElement) && (hatchingObserver.disconnect(), startObservingResize(additionalResizeObservers, true));
        });
      });
    } else
      startObservingResize(additionalResizeObservers, false);
  }, []);
}
function getChildrenCount(containerNode) {
  return Array.from(containerNode.children).reduce((acc, currentChild) => acc + (currentChild.classList.contains("mx-placeholder") ? getChildrenCount(currentChild) : 1), 0);
}
const resizableContainers = ["mx-window-body", "mx-page", "mx-dataview-content", "mx-scrollcontainer-wrapper", "mx-tabcontainer-pane"];
function createObserver(observersRef, target, options, callback) {
  const observer = new MutationObserver(callback);
  return observer.observe(target, options), observersRef.current.push(observer), observer;
}

const DataView = (props) => {
  const dvNode = reactExports.useRef(null), controlsNode = reactExports.useRef(null), contentNode = reactExports.useRef(null), adjustHeightCallback = reactExports.useCallback((container) => {
    !function(container2, contentNode2, dvNode2, controlsNode2, hasFooter) {
      const content = ensure(contentNode2);
      if (!container2)
        return content.style.height = "auto", void (content.style.overflow = "");
      const parentBox = getBox(container2), dataView = getBox(dvNode2), remainder = parentBox.contentBox.height - (dataView.marginBox.height - dataView.contentBox.height) - (hasFooter ? getBox(controlsNode2).marginBox.height : 0);
      content.style.height = `${remainder}px`, content.style.overflow = "auto";
    }(container, contentNode.current, dvNode.current, controlsNode.current, !!props.footer);
  }, [props.footer, contentNode, dvNode, controlsNode]);
  return useLegacyResize(dvNode, adjustHeightCallback, [{ node: controlsNode, options: { childList: true, subtree: true, characterData: true } }]), jsxRuntimeExports.jsxs("div", { className: classNames("mx-dataview", props.class), style: props.style, "data-focusindex": props.tabIndex, ref: dvNode, children: [jsxRuntimeExports.jsx("div", { className: "mx-dataview-content", ref: contentNode, children: props.body }), props.emptyMessage.value && "unavailable" === props.object.status && jsxRuntimeExports.jsx("div", { className: "mx-dataview-message", children: jsxRuntimeExports.jsx("div", { children: jsxRuntimeExports.jsx("p", { children: props.emptyMessage.value }) }) }), props.footer && jsxRuntimeExports.jsx("div", { className: "mx-dataview-controls", style: props.hideFooter ? { display: "none" } : {}, ref: controlsNode, children: props.footer })] });
};

export { DataView, getBox, useLegacyResize };
