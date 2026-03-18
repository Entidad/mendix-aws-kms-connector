import { jsxRuntimeExports, classNames, reactExports } from './index-FQlVOlYf.js';

const Table = (props) => jsxRuntimeExports.jsxs("table", { className: classNames("mx-table", props.class), style: { ...props.style, ...props.autoWidth ? { width: "auto" } : {} }, children: [jsxRuntimeExports.jsx("colgroup", { children: props.columnWidths.map((width, index) => jsxRuntimeExports.jsx("col", { style: { width } }, index)) }), jsxRuntimeExports.jsx("tbody", { children: props.rows })] });

const TableRow = (props) => jsxRuntimeExports.jsx("tr", { className: props.class, style: props.style, children: props.cells.map((cell, index) => reactExports.createElement(cell.header ? "th" : "td", { className: cell.class, style: cell.style, colSpan: cell.width && cell.width > 1 ? cell.width.toString() : void 0, rowSpan: cell.height && cell.height > 1 ? cell.height.toString() : void 0, key: index }, cell.content)) });

export { Table, TableRow };
