const config = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  rules: {
    /** Vendor prefixes should be handled by postcss autoprefixer. */
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,

    /** Limits. */
    "alpha-value-notation": "percentage",
    "color-function-notation": "modern",
    "color-named": "never",
    "color-no-hex": true,
    "font-weight-notation": "numeric",
    "hue-degree-notation": "angle",

    /** Order of keywords and nested rules. */
    "order/order": [
      [
        "custom-properties",
        "declarations",
        {
          type: "at-rule",
          name: "supports",
        },
        {
          type: "at-rule",
          name: "media",
        },
        "rules",
        "at-rules",
      ],
      { severity: "warning" },
    ],
    /** Order of properties. */
    "order/properties-order": [
      [
        "composes",

        "all",

        "content",
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "display",
        "vertical-align",
        "flex",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-wrap",
        "grid",
        "grid-area",
        "grid-template",
        "grid-template-areas",
        "grid-template-rows",
        "grid-template-columns",
        "grid-row",
        "grid-row-start",
        "grid-row-end",
        "grid-column",
        "grid-column-start",
        "grid-column-end",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-gap",
        "grid-row-gap",
        "grid-column-gap",
        "gap",
        "row-gap",
        "column-gap",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "justify-items",
        "justify-self",
        "order",
        "float",
        "clear",
        "object-fit",
        "overflow",
        "overflow-x",
        "overflow-y",
        "overflow-scrolling",
        "clip",

        "box-sizing",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "margin",
        "margin-block",
        "margin-block-start",
        "margin-block-end",
        "margin-inline",
        "margin-inline-start",
        "margin-inline-end",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-block",
        "padding-block-start",
        "padding-block-end",
        "padding-inline",
        "padding-inline-start",
        "padding-inline-end",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border",
        "border-spacing",
        "border-collapse",
        "border-width",
        "border-style",
        "border-color",
        "border-top",
        "border-top-width",
        "border-top-style",
        "border-top-color",
        "border-right",
        "border-right-width",
        "border-right-style",
        "border-right-color",
        "border-bottom",
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color",
        "border-left",
        "border-left-width",
        "border-left-style",
        "border-left-color",
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius",
        "border-image",
        "border-image-source",
        "border-image-slice",
        "border-image-width",
        "border-image-outset",
        "border-image-repeat",
        "border-top-image",
        "border-right-image",
        "border-bottom-image",
        "border-left-image",
        "border-corner-image",
        "border-top-left-image",
        "border-top-right-image",
        "border-bottom-right-image",
        "border-bottom-left-image",
        "scroll-snap-type",
        "scroll-padding",
        "scroll-padding-top",
        "scroll-padding-right",
        "scroll-padding-bottom",
        "scroll-padding-left",
        "scroll-padding-inline",
        "scroll-padding-inline-start",
        "scroll-padding-inline-end",
        "scroll-padding-block",
        "scroll-padding-block-start",
        "scroll-padding-block-end",
        "scroll-snap-align",
        "scroll-margin",
        "scroll-margin-top",
        "scroll-margin-right",
        "scroll-margin-bottom",
        "scroll-margin-left",
        "scroll-margin-inline",
        "scroll-margin-inline-start",
        "scroll-margin-inline-end",
        "scroll-margin-block",
        "scroll-margin-block-start",
        "scroll-margin-block-end",
        "scroll-snap-stop",

        "color-scheme",
        "accent-color",
        "background",
        "background-color",
        "background-image",
        "background-attachment",
        "background-position",
        "background-position-x",
        "background-position-y",
        "background-clip",
        "background-origin",
        "background-size",
        "background-repeat",
        "color",
        "box-decoration-break",
        "box-shadow",
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",
        "table-layout",
        "caption-side",
        "empty-cells",
        "list-style",
        "list-style-position",
        "list-style-type",
        "list-style-image",

        "font",
        "font-weight",
        "font-style",
        "font-variant",
        "font-size-adjust",
        "font-stretch",
        "font-size",
        "font-family",
        "src",
        "line-height",
        "letter-spacing",
        "quotes",
        "counter-increment",
        "counter-reset",
        "-ms-writing-mode",
        "text-align",
        "text-align-last",
        "text-decoration",
        "text-decoration-skip-ink",
        "text-underline-offset",
        "text-emphasis",
        "text-emphasis-position",
        "text-emphasis-style",
        "text-emphasis-color",
        "text-indent",
        "text-justify",
        "text-outline",
        "text-transform",
        "text-wrap",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "text-shadow",
        "white-space",
        "word-spacing",
        "word-wrap",
        "word-break",
        "overflow-wrap",
        "tab-size",
        "hyphens",
        "interpolation-mode",

        "opacity",
        "visibility",
        "filter",
        "resize",
        "cursor",
        "pointer-events",
        "user-select",

        "unicode-bidi",
        "direction",
        "columns",
        "column-span",
        "column-width",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-width",
        "column-rule-style",
        "column-rule-color",
        "break-before",
        "break-inside",
        "break-after",
        "page-break-before",
        "page-break-inside",
        "page-break-after",
        "orphans",
        "widows",
        "zoom",
        "max-zoom",
        "min-zoom",
        "user-zoom",
        "orientation",
        "fill",
        "stroke",

        "transition",
        "transition-delay",
        "transition-timing-function",
        "transition-duration",
        "transition-property",
        "transform",
        "transform-origin",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-play-state",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction",
        "animation-fill-mode",
      ],
      {
        unspecified: "bottom",
        severity: "warning",
      },
    ],
  },
};

module.exports = config;
