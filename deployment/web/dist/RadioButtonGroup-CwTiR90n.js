import { reactExports, newId, reactDomExports, getHTMLElement, jsxRuntimeExports } from './index-FQlVOlYf.js';
import { Alert, getAriaLabelProps, getValidationAriaProps } from './F-L0MxFU-CUzh3jjv.js';

const FocusContainerContext = reactExports.createContext("");
class FocusContainer extends reactExports.Component {
  constructor() {
    super(...arguments), this.id = newId(), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this);
  }
  onFocus() {
    this.focused || (this.focused = true, this.props.onEnter && this.props.onEnter());
  }
  onBlur(e) {
    this.isDescendant(e.relatedTarget ?? document.activeElement) ? e.stopPropagation() : (this.focused = false, this.onLeave());
  }
  isDescendant(e) {
    const containerNode = reactDomExports.findDOMNode(this);
    let current = e && getHTMLElement(e);
    for (; current; ) {
      if (current === containerNode || current.getAttribute("data-focuscontainer") === this.id)
        return true;
      current = current.parentElement;
    }
    return false;
  }
  onLeave() {
    this.props.onLeave && this.props.onLeave();
  }
  componentWillUnmount() {
    this.focused && this.onLeave();
  }
  render() {
    return jsxRuntimeExports.jsx(FocusContainerContext.Provider, { value: this.id, children: reactExports.cloneElement(reactExports.Children.only(this.props.children), { onFocus: this.onFocusHandler, onBlur: this.onBlurHandler }) });
  }
}
const createFocusAwarePortal = (children, container, key) => reactDomExports.createPortal(jsxRuntimeExports.jsx(FocusContainerContext.Consumer, { children: (containerId) => reactExports.cloneElement(reactExports.Children.only(children), { ref: (e) => {
  const node = reactDomExports.findDOMNode(e);
  null !== node && containerId && node.setAttribute("data-focuscontainer", containerId);
} }) }), container, key);

class RadioButtonGroup extends reactExports.Component {
  constructor() {
    super(...arguments), this.onChangeHandler = this.onChange.bind(this), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this);
  }
  getCaption(value) {
    return this.props.value.formatter.format(value);
  }
  onChange(e) {
    const currentValue = this.props.value.universe.find((v) => v.toString() === e.target.value);
    this.props.value.setValue(currentValue);
  }
  onFocus() {
    this.dispatchAction("onEnter");
  }
  onBlur() {
    this.dispatchAction("onLeave");
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: ["control" !== this.props.readOnlyStyle && this.props.value.readOnly ? this.renderAsText() : this.renderAsInput(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.value.validation })] });
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(FocusContainer, { onEnter: this.onFocusHandler, onLeave: this.onBlurHandler, children: jsxRuntimeExports.jsx("div", { id: this.props.id, className: "mx-radiogroup", ...this.props.ariaLabel ? {} : { "aria-labelledby": this.props.id + "-label" }, role: "radiogroup", ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.value.validation, this.props.id), "aria-required": this.props.ariaRequired, children: this.renderRadioButtons() }) });
  }
  renderRadioButtons() {
    const universe = this.props.value.universe;
    if (!universe)
      return [];
    const currentValue = this.props.value.value, forcedOption = void 0 === currentValue || universe.includes(currentValue) ? [] : [currentValue];
    return [...universe, ...forcedOption].map((value, index) => this.renderRadioButton(value, index));
  }
  renderRadioButton(radioValue, index) {
    const { id, tabIndex: propTabIndex, value } = this.props, { value: currentValue, readOnly } = value, inputId = `${id}_${index}`, tabIndex = void 0 === currentValue && 0 === index || currentValue === radioValue ? propTabIndex : -1;
    return jsxRuntimeExports.jsxs("div", { className: "radio", children: [jsxRuntimeExports.jsx("input", { type: "radio", id: inputId, name: id, value: radioValue.toString(), checked: currentValue === radioValue, onChange: this.onChangeHandler, disabled: readOnly, tabIndex }), jsxRuntimeExports.jsx("label", { htmlFor: inputId, children: this.getCaption(radioValue) })] }, radioValue.toString());
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: this.props.value.displayValue || "\xA0" });
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.value.status && prop && prop.execute();
  }
}

export { RadioButtonGroup };
