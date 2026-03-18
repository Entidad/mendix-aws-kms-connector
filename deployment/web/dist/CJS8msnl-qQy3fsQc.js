import { AssertionError, reactExports, WidgetIdContext, useEnsureConstantValues, useStoreBackendValue, useOwnStoreBackendSlot, readUntracked, useDependableValue, isJson, pageScope, fromComputation$, ensure, jsxRuntimeExports, classNames } from './index-FQlVOlYf.js';
import { Icon } from './ActionButton-dEkVZjqk.js';
import { SidebarToggleContext } from './ScrollContainer-_UwHUp6v.js';

function usePersistentState(key, initialValue) {
  if ("string" != typeof key || 0 === key.length)
    throw new AssertionError("Key must be defined");
  const widgetId = reactExports.useContext(WidgetIdContext);
  reactExports.useDebugValue(`usePersistentState(${key}, ${widgetId})`), useEnsureConstantValues(key, widgetId);
  const slotName = `hook:${key}`, [slot$, setSlot] = useStoreBackendValue(widgetId, slotName);
  useOwnStoreBackendSlot(widgetId, slotName);
  const setValue = reactExports.useCallback((newValueOrBuilder) => {
    newValueOrBuilder instanceof Function ? setValue(newValueOrBuilder(readUntracked(slot$))) : void 0 !== newValueOrBuilder ? (assertIsValidPersistableValue(newValueOrBuilder), setSlot(JSON.parse(JSON.stringify(newValueOrBuilder)))) : setSlot(void 0);
  }, [slot$]);
  return reactExports.useMemo(() => {
    void 0 === readUntracked(slot$) && setValue("function" == typeof initialValue ? initialValue() : initialValue);
  }, []), [useDependableValue(slot$), setValue];
}
function assertIsValidPersistableValue(value) {
  if (!["boolean", "number", "string"].includes(typeof value) && null !== value)
    if (Array.isArray(value))
      value.forEach(assertIsValidPersistableValue);
    else {
      if (!isJson(value))
        throw new AssertionError(`usePersistentState: received non-primitive value ${value}`);
      Object.values(value).forEach(assertIsValidPersistableValue);
    }
}

function useHistoryFrameId() {
  const description = `useCurrentFormId(${reactExports.useContext(WidgetIdContext)})`;
  reactExports.useDebugValue(description);
  const [form$] = useStoreBackendValue(pageScope, "form"), formId$ = reactExports.useMemo(() => fromComputation$(description, () => ensure(form$.dependOn())[0].getHistoryId()), []);
  return useDependableValue(formId$);
}

function preProcessMenus(menus) {
  return identifyMenus(menus, "").flatMap(filterMenu);
}
function identifyMenus(menus, idPrefix) {
  return menus.map((menu, index) => {
    const stableId = `${idPrefix}${index}`;
    return { stableId, caption: menu.caption, icon: menu.icon, altCaption: menu.altCaption, action: menu.action, items: menu.items ? identifyMenus(menu.items, `${stableId}-`) : void 0 };
  });
}
function filterMenu(menu) {
  if (menu.action && !menu.action.isAuthorized)
    return [];
  if (menu.items) {
    const filteredItems = menu.items.flatMap(filterMenu);
    return filteredItems.length ? [{ ...menu, items: filteredItems }] : [];
  }
  return [menu];
}
function createAnchor(widgetName, menuItem, expanded, activate, props = {}) {
  const caption = menuItem.caption?.value ?? "", hasChildren = menuItem.items?.length;
  return jsxRuntimeExports.jsxs("a", { ...props, className: classNames(`mx-name-${widgetName}-${menuItem.stableId}`, props.className), href: "#", role: "menuitem", title: caption, onClick: (e) => {
    e.preventDefault(), e.stopPropagation(), activate(menuItem);
  }, onKeyDown: (e) => {
    "Enter" !== e.key && " " !== e.key || (e.preventDefault(), e.stopPropagation(), activate(menuItem));
  }, "aria-haspopup": !!hasChildren || void 0, "aria-expanded": hasChildren ? expanded : void 0, children: [menuItem.icon ? jsxRuntimeExports.jsx(Icon, { icon: menuItem.icon.value, altText: menuItem.caption?.value ? void 0 : menuItem.altCaption?.value }) : null, " " + caption, props.children] });
}
function useMenuActiveItem() {
  const [activeItemId, setActiveItemId] = useNavigationActiveItem(), { resetSidebar } = reactExports.useContext(SidebarToggleContext);
  return [activeItemId, reactExports.useCallback((menuItem) => {
    (void 0 === menuItem.action || menuItem.action.canExecute && (!menuItem.action.disabledDuringExecution || !menuItem.action.isExecuting)) && (menuItem.action?.execute(), setActiveItemId(menuItem.stableId), resetSidebar());
  }, [])];
}
function useNavigationActiveItem() {
  const currentFormId = useHistoryFrameId(), [formToItemIdMapping, setFormToItemIdMapping] = usePersistentState("activeItem", () => ({ [currentFormId]: null })), [activeItemId, setActiveItemId] = reactExports.useState(formToItemIdMapping[currentFormId] ?? void 0), previousFormId = reactExports.useRef(currentFormId);
  return previousFormId.current !== currentFormId && (currentFormId in formToItemIdMapping ? setActiveItemId(formToItemIdMapping[currentFormId] ?? void 0) : setFormToItemIdMapping({ ...formToItemIdMapping, [currentFormId]: activeItemId ?? null }), previousFormId.current = currentFormId), [activeItemId, setActiveItemId];
}

export { createAnchor, preProcessMenus, useMenuActiveItem, usePersistentState };
