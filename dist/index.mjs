var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/Icons.jsx
import React from "react";
var GenericIcon = ({ className, path, height = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", {
  className,
  viewBox: "0 0 24 24",
  height,
  fill: color
}, /* @__PURE__ */ React.createElement("path", {
  d: path
}));
var Close = ({ height = 24, color = "currentColor" }) => /* @__PURE__ */ React.createElement("svg", {
  viewBox: "0 0 24 24",
  height,
  fill: color
}, /* @__PURE__ */ React.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}));

// src/Button.jsx
import React2 from "react";
import { Button } from "theme-ui";
import styled from "@emotion/styled";
var ThemedButton = React2.forwardRef((_a, ref) => {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React2.createElement(Button, __spreadProps(__spreadValues({}, rest), {
    ref
  }), children);
});
ThemedButton.displayName = "Button";
var StyledThemedButton = styled(ThemedButton)`
  appearance: none;
  cursor: pointer;
  position: relative;
  user-select: none;
  outline: none;
  line-height: 1;
  font-family: inherit;
  font-size: inherit;
`;
var Button_default = StyledThemedButton;

// src/InputSearch.jsx
import React3, { forwardRef } from "react";
import styled2 from "@emotion/styled";
import { Box } from "theme-ui";
var InputSearch = forwardRef((_a, ref) => {
  var _b = _a, { value, onChange, className, width, maxWidth, inputWidth = "100%", iconSize = 24 } = _b, rest = __objRest(_b, ["value", "onChange", "className", "width", "maxWidth", "inputWidth", "iconSize"]);
  function handleIconClick(e) {
    if (value) {
      e.target.value = "";
      onChange(e);
    } else {
      ref.current.focus();
    }
  }
  const pathIcon = !value ? "M14.76 13.27L20.49 19 19 20.49l-5.73-5.73C12.2 15.53 10.91 16 9.5 16A6.5 6.5 0 1116 9.5c0 1.41-.47 2.7-1.24 3.77zM9.5 5C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z" : "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z";
  return /* @__PURE__ */ React3.createElement(Box, {
    sx: { display: "grid", width, maxWidth },
    className
  }, /* @__PURE__ */ React3.createElement("button", {
    className: "search-box__btn",
    onClick: handleIconClick
  }, /* @__PURE__ */ React3.createElement("svg", {
    width: iconSize,
    height: iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: pathIcon
  }))), /* @__PURE__ */ React3.createElement("input", __spreadValues({
    ref,
    className: "search-box__input",
    value,
    onChange,
    style: { width: inputWidth }
  }, rest)));
});
InputSearch.displayName = "InputSearch";
var StyledInputSearch = styled2(InputSearch)`
  & > * {
    grid-column: 1;
    grid-row: 1;
  }
  & > .search-box__btn {
    background: 0 0;
    border: 0;
    cursor: pointer;
    text-decoration: none;

    z-index: 10;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 3rem;

    color: inherit;
  }
  .search-box__input {
    font-family: inherit;
    font-size: inherit;
    padding: 0.6rem 1rem 0.6rem 3rem;
    color: inherit;

    background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.smoke) || "#eeeeee";
}};
    border: 0;
    border-radius: 6.25rem;

    &::placeholder {
      color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.muted) || "#cccccc";
}};
    }
    &:focus {
      outline: none;
    }
  }
`;
var InputSearch_default = StyledInputSearch;

// src/Select.jsx
import React4 from "react";
import styled3 from "@emotion/styled";
import { css } from "@emotion/react";
var Select = (_a) => {
  var _b = _a, { children, placeholder = null, width, maxWidth, invalid } = _b, rest = __objRest(_b, ["children", "placeholder", "width", "maxWidth", "invalid"]);
  return /* @__PURE__ */ React4.createElement("select", __spreadValues({}, rest), placeholder && /* @__PURE__ */ React4.createElement("option", {
    value: ""
  }, placeholder), children);
};
var StyledSelect = styled3(Select)`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  outline: 0;
  cursor: pointer;

  font-family: inherit;
  font-size: inherit;
  padding: 0.5em 2em 0.5em 0.8em;
  color: inherit;

  background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.snow) || "#eeeeee";
}};
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22${(props) => props.theme && props.theme.colors && props.theme.colors.grey200 ? encodeURIComponent(props.theme.colors.grey200) : "grey"}%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right 0.3em top 50%;
  background-size: 1.25em auto;
  ${(props) => props.maxWidth && css`max-width: ${props.maxWidth};`}
  ${(props) => props.width && css`width: ${props.width};`}
  border: 1px solid ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.hairline) || "#eeeeee";
}};
  ${(props) => {
  var _a, _b;
  return props.invalid && css`border-color: ${((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.danger) || "red"} !important;`;
}}
  &:focus {
    outline: 3px solid ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.smoke) || "lightgrey";
}};
  }
  &:disabled {
    background-color: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.smoke) || "lightgrey";
}};
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22grey%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E');
    border: 1px solid ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.smoke) || "lightgrey";
}};
    cursor: not-allowed;
  }
`;
var Select_default = StyledSelect;

// src/OptimisticCheckbox.jsx
import React5 from "react";
import { css as css2 } from "@emotion/react";
import styled4 from "@emotion/styled";
var OptimisticCheckbox = React5.forwardRef(({ checked = false, onChange, className }, ref) => {
  const [checkedState, setCheckedState] = React5.useState(false);
  React5.useEffect(() => {
    setCheckedState(checked);
  }, [checked]);
  const handleClick = () => {
    const newCheckedState = !checkedState;
    setCheckedState(newCheckedState);
    setTimeout(() => {
      onChange(newCheckedState);
    }, 10);
  };
  return /* @__PURE__ */ React5.createElement("div", {
    className,
    ref,
    onKeyPress: (e) => ["Enter", " "].includes(e.key) && handleClick(),
    onClick: handleClick,
    css: css2`
        ${(props) => checkedState && `border-color: ${props.theme && props.theme.colors && props.theme.colors.primary ? props.theme.colors.primary : "hsla(0, 0%, 86%, 1)"} !important;`}
      `
  }, /* @__PURE__ */ React5.createElement("div", {
    style: { opacity: checkedState ? 1 : 0 }
  }));
});
OptimisticCheckbox.displayName = "OptimisticCheckbox";
var StyledOptimisticCheckbox = styled4(OptimisticCheckbox)`
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 2px;
  border: 2px solid ${(props) => props.theme && props.theme.colors && props.theme.colors.grey200 ? props.theme.colors.grey200 : "hsla(0, 0%, 86%, 1)"};
  /* transition: background-color 300ms, border-color 300ms; */
  &:hover {
    background-color: ${(props) => props.theme && props.theme.colors && props.theme.colors.grey100 ? props.theme.colors.grey100 : "hsla(0, 0%, 96%, 1)"};
    border-color: ${(props) => props.theme && props.theme.colors && props.theme.colors.primary ? props.theme.colors.primary : "hsla(0, 0%, 86%, 1)"};
  }
  & > div {
    position: absolute;
    top: 1px;
    left: 4px;
    width: 6px;
    height: 10px;
    border-bottom: 2px solid ${(props) => props.theme && props.theme.colors && props.theme.colors.primary ? props.theme.colors.primary : "hsla(0, 0%, 86%, 1)"};
    border-left: none;
    border-right: 2px solid ${(props) => props.theme && props.theme.colors && props.theme.colors.primary ? props.theme.colors.primary : "hsla(0, 0%, 86%, 1)"};
    border-top: none;
    transform: rotate(45deg);
    pointer-events: none;
  }
`;
var OptimisticCheckbox_default = StyledOptimisticCheckbox;

// src/Input.jsx
import React6 from "react";
import styled5 from "@emotion/styled";
var Input = React6.forwardRef((_a, ref) => {
  var _b = _a, { width, invalid } = _b, rest = __objRest(_b, ["width", "invalid"]);
  return /* @__PURE__ */ React6.createElement("input", __spreadProps(__spreadValues({}, rest), {
    ref
  }));
});
var StyledInput = styled5(Input)`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0.5em 0.8em;
  color: inherit;
  overflow: visible;
  background: ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.snow) || "#eee";
}};
  border: 1px solid ${(props) => {
  var _a, _b;
  return ((_b = (_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.colors) == null ? void 0 : _b.hairline) || "#ccc";
}};
  ${(props) => (props == null ? void 0 : props.width) && `width: ${props.width};`}
`;
var Input_default = StyledInput;
export {
  Button_default as Button,
  Close,
  GenericIcon,
  Input_default as Input,
  InputSearch_default as InputSearch,
  OptimisticCheckbox_default as OptimisticCheckbox,
  Select_default as Select
};
