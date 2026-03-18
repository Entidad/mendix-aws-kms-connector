import { jsxRuntimeExports } from './index-FQlVOlYf.js';
import './ActionButton-dEkVZjqk.js';
import './DerivedUniqueIdProperty-CMoZmJLZ.js';

const Alert = (props) => props.validation ? jsxRuntimeExports.jsx("div", { id: props.id, className: "alert alert-danger mx-validation-message", role: "alert", children: props.validation }) : null;

const getValidationAriaProps = (validation, id) => validation ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : void 0, getAriaLabelProps = (value) => value ? { "aria-label": value } : {};

export { Alert, getAriaLabelProps, getValidationAriaProps };
