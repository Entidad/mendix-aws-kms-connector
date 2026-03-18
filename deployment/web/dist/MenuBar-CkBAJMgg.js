import { reactExports, jsxRuntimeExports, classNames } from './index-FQlVOlYf.js';
import { useMenuActiveItem, preProcessMenus, createAnchor } from './CJS8msnl-qQy3fsQc.js';
import './ActionButton-dEkVZjqk.js';
import './ScrollContainer-_UwHUp6v.js';

function MenuBar(props) {
  const [activeItemId, setActiveItem] = useMenuActiveItem(), [expandedItemId, setExpandedItemId] = reactExports.useState();
  function onClick(menu) {
    menu.items?.length ? setExpandedItemId((oldExpanded) => oldExpanded !== menu.stableId ? menu.stableId : void 0) : (setActiveItem(menu), setExpandedItemId(void 0));
  }
  return reactExports.useEffect(() => {
    const onGlobalClick = () => setExpandedItemId(void 0);
    return document.addEventListener("click", onGlobalClick), () => document.removeEventListener("click", onGlobalClick);
  }, []), jsxRuntimeExports.jsx("div", { className: classNames("navbar", "navbar-default", "mx-navbar", props.class), style: props.style, tabIndex: -1, children: jsxRuntimeExports.jsx("ul", { className: "nav navbar-nav", role: "menu", children: preProcessMenus(props.menu).map((menu, index) => {
    const hasChildren = Boolean(menu.items?.length);
    return jsxRuntimeExports.jsxs("li", { className: classNames("mx-navbar-item", { dropdown: hasChildren, active: activeItemId === menu.stableId, open: expandedItemId === menu.stableId }), role: "none", children: [createAnchor(props.name, menu, expandedItemId === menu.stableId, onClick, hasChildren ? { children: jsxRuntimeExports.jsx("b", { className: "caret" }) } : {}), hasChildren && jsxRuntimeExports.jsx("ul", { className: "dropdown-menu mx-navbar-submenu", role: "menu", children: menu.items.map((subMenu, subIndex) => jsxRuntimeExports.jsx("li", { className: classNames("mx-navbar-subitem", { active: activeItemId === subMenu.stableId }), role: "none", children: createAnchor(props.name, subMenu, false, onClick) }, subIndex)) })] }, index);
  }) }) });
}

export { MenuBar };
