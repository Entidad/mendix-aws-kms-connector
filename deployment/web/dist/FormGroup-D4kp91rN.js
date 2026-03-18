import { asProperty, fromComputation$, dynAvailable, jsxRuntimeExports, classNames } from './index-FQlVOlYf.js';

const ValidationProperty = asProperty(({ inputWidgetId }, store, widgetId) => {
  const [isInvalid$] = store.useSlot(inputWidgetId, "isInvalid");
  return fromComputation$(`Validity of ${inputWidgetId} (used by ${widgetId})`, () => dynAvailable(Boolean(isInvalid$.dependOn())));
});

const hasCaption = (props) => void 0 !== props.caption, FormGroup = (props) => jsxRuntimeExports.jsxs("div", { className: classNames(props.class, "form-group", { "has-error": props.hasError.value, "no-columns": "vertical" === props.orientation }), style: props.style, children: [hasCaption(props) && jsxRuntimeExports.jsx("label", { className: classNames("control-label", { [`col-sm-${props.width}`]: "horizontal" === props.orientation }), htmlFor: props.labelFor, id: props.labelFor && props.labelFor + "-label", children: props.caption.value }), "horizontal" === props.orientation ? jsxRuntimeExports.jsx("div", { className: classNames("col-sm-" + (12 - props.width), { [`col-sm-offset-${props.width}`]: !hasCaption(props) }), children: props.control }) : props.control] });

export { FormGroup, ValidationProperty };
