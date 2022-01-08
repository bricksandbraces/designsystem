const animations = require("@openbricksandbraces/designtokens/dist/json/animations.json");
const colors = require("@openbricksandbraces/designtokens/dist/json/colors.json");
const metrics = require("@openbricksandbraces/designtokens/dist/json/metrics.json");
const typography = require("@openbricksandbraces/designtokens/dist/json/typography.json");
const Color = require("color");

const rgba = (hex, alpha) => {
  return Color(hex).alpha(alpha ?? 1);
};

const dynamicTheme = {
  light: {
    /* " Root Colors " */
    "color-app-01": colors["gray-950"],
    "color-app-02": colors["gray-800"],
    "color-app-03": colors["gray-700"],
    "color-app-04": colors["gray-500"],
    "color-app-05": colors.black,
    "color-app-05-alpha-5": rgba(colors.black, 0.05),
    "color-app-05-alpha-10": rgba(colors.black, 0.1),
    "color-app-01-alpha-80": rgba(colors["gray-950"], 0.8),
    "color-app-background": colors["gray-950"],

    /* " Background Colors " */
    "color-background": colors["gray-900"],
    "color-background-alpha-0": rgba(colors["gray-900"], 0),
    "color-hover": colors["gray-850"],
    "color-active": colors["gray-800"],
    "color-background-light": colors["gray-850"],
    "color-hover-light": colors["gray-800"],
    "color-active-light": colors["gray-750"],
    "color-focus": colors["purple-500"],
    "color-focus-highlight": rgba(colors["purple-500"], 0.1),
    "color-focus-danger": colors["red-500"],
    "color-focus-danger-highlight": rgba(colors["red-500"], 0.1),
    "color-focus-inverse": colors.white,
    "color-divider-dark": rgba(colors.white, 0.2),
    "color-divider-light": rgba(colors.black, 0.2),
    "color-selected": colors["gray-850"],
    "color-selected-light": colors["gray-800"],
    "color-unselected": colors["gray-900"],
    "color-readonly": colors["gray-900"],
    "color-disabled": colors["gray-850"],
    "color-skeleton-01": colors["gray-900"],
    "color-skeleton-02": colors["gray-850"],
    "color-skeleton-03": colors["gray-750"],
    "color-skeleton-04": rgba(colors["gray-750"], 0.25),
    "color-brand-01": colors["purple-950"],
    "color-brand-02": colors["purple-800"],
    "color-brand-03": colors["purple-700"],
    "color-brand-04": colors["purple-500"],
    "color-brand-05": colors["purple-50"],
    "color-onbrand-01": colors["purple-950"],
    "color-onbrand-02": colors["purple-850"],
    "color-onbrand-03": colors["purple-750"],
    "color-onbrand-04": colors["purple-650"],
    "color-onbrand-05": colors["purple-500"],

    /* " Table Colors " */
    "color-table-background": colors["gray-900"],
    "color-table-hover": colors["gray-800"],
    "color-table-active": colors["gray-750"],

    /* " Border Colors " */
    "color-border": colors["gray-850"],
    "color-border-light": colors["gray-800"],

    /* " Divider Colors " */
    "color-divider-subtle": colors["gray-900"],
    "color-divider-default": colors["gray-850"],
    "color-divider-harsh": colors["gray-700"],

    /* " Font Colors " */
    "color-font-selected": colors.black,
    "color-font-unselected": colors["gray-300"],
    "color-font-text-01": colors["gray-50"],
    "color-font-text-02": colors["gray-150"],
    "color-font-text-03": colors["gray-250"],
    "color-font-text-04": colors["gray-350"],
    "color-font-text-05": colors["gray-500"],
    "color-font-text-inverse-01": colors["gray-950"],
    "color-font-text-inverse-02": colors["gray-850"],
    "color-font-text-inverse-03": colors["gray-750"],
    "color-font-text-inverse-04": colors["gray-650"],
    "color-font-text-inverse-05": colors["gray-500"],
    "color-font-decoration": colors["purple-250"],
    "color-font-link": colors["blue-400"],
    "color-font-link-hover": colors["blue-300"],
    "color-font-placeholder": colors["gray-600"],
    "color-font-readonly": colors["gray-350"],
    "color-font-disabled": colors["gray-750"],
    "color-font-warning": colors["yellow-400"],
    "color-font-success": colors["green-400"],
    "color-font-info": colors["blue-400"],
    "color-font-danger": colors["red-400"],

    /* " Button & Interactive Colors " */
    "color-primary-enabled": colors["purple-500"],
    "color-primary-hover": colors["purple-450"],
    "color-primary-active": colors["purple-400"],
    "color-secondary-enabled": colors["gray-800"],
    "color-secondary-hover": colors["gray-750"],
    "color-secondary-active": colors["gray-700"],
    "color-tertiary-enabled": colors["purple-500"],
    "color-tertiary-hover": colors["purple-450"],
    "color-tertiary-active": colors["purple-400"],
    "color-ghost-enabled": "transparent",
    "color-ghost-hover": rgba(colors.black, 0.1),
    "color-ghost-active": rgba(colors.black, 0.2),
    "color-warning": colors["yellow-500"],
    "color-info": colors["blue-500"],
    "color-success": colors["green-500"],
    "color-danger": colors["red-500"],
    "color-danger-hover": colors["red-550"],
    "color-danger-active": colors["red-600"],

    /* " Gradients " */
    "color-gradient-01":
      "linear-gradient(90deg, rgba(255, 255, 255, 0.85) 20%, rgba(255, 255, 255, 0) 100%)",

    /* " Badge Colors " */
    "color-badge-gray-bg": colors["gray-850"],
    "color-badge-gray-hover": colors["gray-800"],
    "color-badge-gray-active": colors["gray-750"],
    "color-badge-gray-font": colors["gray-100"],
    "color-badge-gray-border": colors["gray-800"],
    "color-badge-red-bg": colors["red-850"],
    "color-badge-red-hover": colors["red-800"],
    "color-badge-red-active": colors["red-750"],
    "color-badge-red-font": colors["red-100"],
    "color-badge-red-border": colors["red-800"],
    "color-badge-green-bg": colors["green-850"],
    "color-badge-green-hover": colors["green-800"],
    "color-badge-green-active": colors["green-750"],
    "color-badge-green-font": colors["green-100"],
    "color-badge-green-border": colors["green-800"],
    "color-badge-yellow-bg": colors["yellow-850"],
    "color-badge-yellow-hover": colors["yellow-800"],
    "color-badge-yellow-active": colors["yellow-750"],
    "color-badge-yellow-font": colors["yellow-100"],
    "color-badge-yellow-border": colors["yellow-800"],
    "color-badge-blue-bg": colors["blue-850"],
    "color-badge-blue-hover": colors["blue-800"],
    "color-badge-blue-active": colors["blue-750"],
    "color-badge-blue-font": colors["blue-100"],
    "color-badge-blue-border": colors["blue-800"],
    "color-badge-cyan-bg": colors["cyan-850"],
    "color-badge-cyan-hover": colors["cyan-800"],
    "color-badge-cyan-active": colors["cyan-750"],
    "color-badge-cyan-font": colors["cyan-100"],
    "color-badge-cyan-border": colors["cyan-800"],
    "color-badge-orange-bg": colors["orange-850"],
    "color-badge-orange-hover": colors["orange-800"],
    "color-badge-orange-active": colors["orange-750"],
    "color-badge-orange-font": colors["orange-100"],
    "color-badge-orange-border": colors["orange-800"],
    "color-badge-purple-bg": colors["purple-850"],
    "color-badge-purple-hover": colors["purple-800"],
    "color-badge-purple-active": colors["purple-750"],
    "color-badge-purple-font": colors["purple-100"],
    "color-badge-purple-border": colors["purple-800"],

    /* " Overlay " */
    "color-overlay": metrics.overlay,

    /* = = = Typography = = = */

    /* " Type Scale " */
    "font-family": typography["font-family"],
    "font-family-code": typography["font-family-code"],

    /* Learn more under https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/ */

    "font-caption-size": typography["font-caption-size"],
    "font-label-size": typography["font-label-size"],
    "font-body-01-size": typography["font-body-01-size"],
    "font-body-02-size": typography["font-body-02-size"],
    "font-headline-01-size": typography["font-headline-01-size"],
    "font-headline-02-size": typography["font-headline-02-size"],
    "font-headline-03-size": typography["font-headline-03-size"],
    "font-headline-04-size": typography["font-headline-04-size"],
    "font-headline-05-size": typography["font-headline-05-size"],
    "font-headline-06-size": typography["font-headline-06-size"],
    "font-marketing-01-size": typography["font-marketing-01-size"],
    "font-marketing-02-size": typography["font-marketing-02-size"],
    "font-quote-01-size": typography["font-quote-01-size"],
    "font-quote-02-size": typography["font-quote-02-size"],
    "font-code-size": typography["font-code-size"],

    /* " Font weights " */
    "font-caption-weight": typography["font-caption-weight"],
    "font-label-weight": typography["font-label-weight"],
    "font-body-01-weight": typography["font-body-01-weight"],
    "font-body-02-weight": typography["font-body-02-weight"],
    "font-headline-01-weight": typography["font-headline-01-weight"],
    "font-headline-02-weight": typography["font-headline-02-weight"],
    "font-headline-03-weight": typography["font-headline-03-weight"],
    "font-headline-04-weight": typography["font-headline-04-weight"],
    "font-headline-05-weight": typography["font-headline-05-weight"],
    "font-headline-06-weight": typography["font-headline-06-weight"],
    "font-marketing-01-weight": typography["font-marketing-01-weight"],
    "font-marketing-02-weight": typography["font-marketing-02-weight"],
    "font-quote-01-weight": typography["font-quote-01-weight"],
    "font-quote-02-weight": typography["font-quote-02-weight"],
    "font-code-weight": typography["font-code-weight"],

    /* " Font styles " */
    "font-caption-style": typography["font-caption-style"],
    "font-label-style": typography["font-label-style"],
    "font-body-01-style": typography["font-body-01-style"],
    "font-body-02-style": typography["font-body-02-style"],
    "font-headline-01-style": typography["font-headline-01-style"],
    "font-headline-02-style": typography["font-headline-02-style"],
    "font-headline-03-style": typography["font-headline-03-style"],
    "font-headline-04-style": typography["font-headline-04-style"],
    "font-headline-05-style": typography["font-headline-05-style"],
    "font-headline-06-style": typography["font-headline-06-style"],
    "font-marketing-01-style": typography["font-marketing-01-style"],
    "font-marketing-02-style": typography["font-marketing-02-style"],
    "font-quote-01-style": typography["font-quote-01-style"],
    "font-quote-02-style": typography["font-quote-02-style"],
    "font-code-style": typography["font-code-style"],

    /* " Line heights " */
    "font-caption-leading": typography["font-caption-leading"],
    "font-label-leading": typography["font-label-leading"],
    "font-body-01-leading": typography["font-body-01-leading"],
    "font-body-02-leading": typography["font-body-02-leading"],
    "font-headline-01-leading": typography["font-headline-01-leading"],
    "font-headline-02-leading": typography["font-headline-02-leading"],
    "font-headline-03-leading": typography["font-headline-03-leading"],
    "font-headline-04-leading": typography["font-headline-04-leading"],
    "font-headline-05-leading": typography["font-headline-05-leading"],
    "font-headline-06-leading": typography["font-headline-06-leading"],
    "font-marketing-01-leading": typography["font-marketing-01-leading"],
    "font-marketing-02-leading": typography["font-marketing-02-leading"],
    "font-quote-01-leading": typography["font-quote-01-leading"],
    "font-quote-02-leading": typography["font-quote-02-leading"],
    "font-code-leading": typography["font-code-leading"],

    /* = = = Sizes = = = */

    /* " Container Sizes " */
    "size-container-01": metrics["container-01"],
    "size-container-02": metrics["container-02"],
    "size-container-03": metrics["container-03"],
    "size-container-04": metrics["container-04"],
    "size-container-05": metrics["container-05"],
    "size-container-06": metrics["container-06"],
    "size-container-07": metrics["container-07"],
    "size-container-08": metrics["container-08"],

    /* " Field Sizes " */
    "size-field-xsmall": metrics["field-xsmall"],
    "size-field-small": metrics["field-small"],
    "size-field-default": metrics["field-default"],
    "size-field-large": metrics["field-large"],

    /* " Border Sizes " */
    "size-border": "0rem",
    "size-border-badge": "0.0625rem",
    "size-border-state": "0.0625rem",

    /* " Focus Sizes " */
    "size-focus": "0.0625rem",

    /* " Border Style " */
    "style-border": "solid",

    /* " Divider Sizes " */
    "size-divider": "0.0625rem",

    /* " Divider Style " */
    "style-divider": "solid",

    /* " Spacing Sizes " */
    "size-spacing-01": metrics["spacing-01"],
    "size-spacing-02": metrics["spacing-02"],
    "size-spacing-03": metrics["spacing-03"],
    "size-spacing-04": metrics["spacing-04"],
    "size-spacing-05": metrics["spacing-05"],
    "size-spacing-06": metrics["spacing-06"],
    "size-spacing-07": metrics["spacing-07"],
    "size-spacing-08": metrics["spacing-08"],
    "size-spacing-09": metrics["spacing-09"],
    "size-spacing-10": metrics["spacing-10"],
    "size-spacing-11": metrics["spacing-11"],
    "size-spacing-12": metrics["spacing-12"],
    "size-spacing-13": metrics["spacing-13"],
    "size-spacing-inner": metrics["spacing-inner"],

    /* = = = Component = = = */

    /* " Border Radius " */
    "component-radius-01": metrics["radius-01"],
    "component-radius-02": metrics["radius-02"],
    "component-radius-03": metrics["radius-03"],

    /* " Box Shadow " */
    "component-shadow-01": metrics["shadow-01"],
    "component-shadow-02": metrics["shadow-02"],
    "component-shadow-03": metrics["shadow-03"],

    /* = = = Transitions = = = */

    /* " Static Transitions " */
    "transition-app-01": animations["transition-app-01"],
    "transition-app-02": animations["transition-app-02"],
    "transition-app-03": animations["transition-app-03"],
    "transition-app-04": animations["transition-app-04"],
    "transition-app-05": animations["transition-app-05"]
  },
  dark: {
    /* " Root Colors " */
    "color-app-01": colors["gray-50"],
    "color-app-02": colors["gray-200"],
    "color-app-03": colors["gray-300"],
    "color-app-04": colors["gray-500"],
    "color-app-05": colors.white,
    "color-app-05-alpha-5": rgba(colors.white, 0.05),
    "color-app-05-alpha-10": rgba(colors.white, 0.1),
    "color-app-01-alpha-80": rgba(colors["gray-50"], 0.8),
    "color-app-background": colors["gray-50"],

    /* " Background Colors " */
    "color-background": colors["gray-100"],
    "color-background-alpha-0": rgba(colors["gray-100"], 0),
    "color-hover": colors["gray-150"],
    "color-active": colors["gray-200"],
    "color-background-light": colors["gray-150"],
    "color-hover-light": colors["gray-200"],
    "color-active-light": colors["gray-250"],
    "color-focus": colors.white,
    "color-focus-highlight": rgba(colors.white, 0.25),
    "color-focus-danger": colors["red-500"],
    "color-focus-danger-highlight": rgba(colors["red-500"], 0.25),
    "color-focus-inverse": colors.black,
    "color-divider-dark": rgba(colors.black, 0.2),
    "color-divider-light": rgba(colors.white, 0.2),
    "color-selected": colors["gray-150"],
    "color-selected-light": colors["gray-200"],
    "color-unselected": colors["gray-100"],
    "color-readonly": colors["gray-100"],
    "color-disabled": colors["gray-150"],
    "color-skeleton-01": colors["gray-100"],
    "color-skeleton-02": colors["gray-150"],
    "color-skeleton-03": colors["gray-250"],
    "color-skeleton-04": rgba(colors["gray-250"], 0.25),
    "color-brand-01": colors["purple-950"],
    "color-brand-02": colors["purple-800"],
    "color-brand-03": colors["purple-700"],
    "color-brand-04": colors["purple-500"],
    "color-brand-05": colors["purple-50"],
    "color-onbrand-01": colors["purple-950"],
    "color-onbrand-02": colors["purple-850"],
    "color-onbrand-03": colors["purple-750"],
    "color-onbrand-04": colors["purple-650"],
    "color-onbrand-05": colors["purple-500"],

    /* " Table Colors " */
    "color-table-background": colors["gray-100"],
    "color-table-hover": colors["gray-200"],
    "color-table-active": colors["gray-250"],

    /* " Border Colors " */
    "color-border": colors["gray-150"],
    "color-border-light": colors["gray-200"],

    /* " Divider Colors " */
    "color-divider-subtle": colors["gray-100"],
    "color-divider-default": colors["gray-150"],
    "color-divider-harsh": colors["gray-300"],

    /* " Font Colors " */
    "color-font-selected": colors.white,
    "color-font-unselected": colors["gray-700"],
    "color-font-text-01": colors["gray-950"],
    "color-font-text-02": colors["gray-850"],
    "color-font-text-03": colors["gray-750"],
    "color-font-text-04": colors["gray-650"],
    "color-font-text-05": colors["gray-500"],
    "color-font-text-inverse-01": colors["gray-50"],
    "color-font-text-inverse-02": colors["gray-150"],
    "color-font-text-inverse-03": colors["gray-250"],
    "color-font-text-inverse-04": colors["gray-350"],
    "color-font-text-inverse-05": colors["gray-500"],
    "color-font-decoration": colors["purple-750"],
    "color-font-link": colors["blue-600"],
    "color-font-link-hover": colors["blue-700"],
    "color-font-placeholder": colors["gray-400"],
    "color-font-readonly": colors["gray-650"],
    "color-font-disabled": colors["gray-250"],
    "color-font-warning": colors["yellow-600"],
    "color-font-success": colors["green-600"],
    "color-font-info": colors["blue-600"],
    "color-font-danger": colors["red-600"],

    /* " Button & Interactive Colors " */
    "color-primary-enabled": colors["purple-500"],
    "color-primary-hover": colors["purple-450"],
    "color-primary-active": colors["purple-400"],
    "color-secondary-enabled": colors["gray-300"],
    "color-secondary-hover": colors["gray-250"],
    "color-secondary-active": colors["gray-200"],
    "color-tertiary-enabled": colors.white,
    "color-tertiary-hover": colors["gray-450"],
    "color-tertiary-active": colors["gray-400"],
    "color-ghost-enabled": "transparent",
    "color-ghost-hover": rgba(colors.white, 0.1),
    "color-ghost-active": rgba(colors.white, 0.2),
    "color-warning": colors["yellow-500"],
    "color-info": colors["blue-500"],
    "color-success": colors["green-500"],
    "color-danger": colors["red-500"],
    "color-danger-hover": colors["red-450"],
    "color-danger-active": colors["red-400"],

    /* " Gradients " */
    "color-gradient-01":
      "linear-gradient(90deg, rgba(0, 0, 0, 0.85) 20%, rgba(0, 0, 0, 0) 100%)",

    /* " Badge Colors " */
    "color-badge-gray-bg": colors["gray-150"],
    "color-badge-gray-hover": colors["gray-200"],
    "color-badge-gray-active": colors["gray-250"],
    "color-badge-gray-font": colors["gray-900"],
    "color-badge-gray-border": colors["gray-200"],
    "color-badge-red-bg": colors["red-150"],
    "color-badge-red-hover": colors["red-200"],
    "color-badge-red-active": colors["red-250"],
    "color-badge-red-font": colors["red-900"],
    "color-badge-red-border": colors["red-200"],
    "color-badge-green-bg": colors["green-150"],
    "color-badge-green-hover": colors["green-200"],
    "color-badge-green-active": colors["green-250"],
    "color-badge-green-font": colors["green-900"],
    "color-badge-green-border": colors["green-200"],
    "color-badge-yellow-bg": colors["yellow-150"],
    "color-badge-yellow-hover": colors["yellow-200"],
    "color-badge-yellow-active": colors["yellow-250"],
    "color-badge-yellow-font": colors["yellow-900"],
    "color-badge-yellow-border": colors["yellow-200"],
    "color-badge-blue-bg": colors["blue-150"],
    "color-badge-blue-hover": colors["blue-200"],
    "color-badge-blue-active": colors["blue-250"],
    "color-badge-blue-font": colors["blue-900"],
    "color-badge-blue-border": colors["blue-200"],
    "color-badge-cyan-bg": colors["cyan-150"],
    "color-badge-cyan-hover": colors["cyan-200"],
    "color-badge-cyan-active": colors["cyan-250"],
    "color-badge-cyan-font": colors["cyan-900"],
    "color-badge-cyan-border": colors["cyan-200"],
    "color-badge-orange-bg": colors["orange-150"],
    "color-badge-orange-hover": colors["orange-200"],
    "color-badge-orange-active": colors["orange-250"],
    "color-badge-orange-font": colors["orange-900"],
    "color-badge-orange-border": colors["orange-200"],
    "color-badge-purple-bg": colors["purple-150"],
    "color-badge-purple-hover": colors["purple-200"],
    "color-badge-purple-active": colors["purple-250"],
    "color-badge-purple-font": colors["purple-900"],
    "color-badge-purple-border": colors["purple-200"],

    /* " Overlay " */
    "color-overlay": metrics.overlay,

    /* = = = Typography = = = */

    /* " Type Scale " */
    "font-family": typography["font-family"],
    "font-family-code": typography["font-family-code"],

    /* Learn more under https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/ */

    "font-caption-size": typography["font-caption-size"],
    "font-label-size": typography["font-label-size"],
    "font-body-01-size": typography["font-body-01-size"],
    "font-body-02-size": typography["font-body-02-size"],
    "font-headline-01-size": typography["font-headline-01-size"],
    "font-headline-02-size": typography["font-headline-02-size"],
    "font-headline-03-size": typography["font-headline-03-size"],
    "font-headline-04-size": typography["font-headline-04-size"],
    "font-headline-05-size": typography["font-headline-05-size"],
    "font-headline-06-size": typography["font-headline-06-size"],
    "font-marketing-01-size": typography["font-marketing-01-size"],
    "font-marketing-02-size": typography["font-marketing-02-size"],
    "font-quote-01-size": typography["font-quote-01-size"],
    "font-quote-02-size": typography["font-quote-02-size"],
    "font-code-size": typography["font-code-size"],

    /* " Font weights " */
    "font-caption-weight": typography["font-caption-weight"],
    "font-label-weight": typography["font-label-weight"],
    "font-body-01-weight": typography["font-body-01-weight"],
    "font-body-02-weight": typography["font-body-02-weight"],
    "font-headline-01-weight": typography["font-headline-01-weight"],
    "font-headline-02-weight": typography["font-headline-02-weight"],
    "font-headline-03-weight": typography["font-headline-03-weight"],
    "font-headline-04-weight": typography["font-headline-04-weight"],
    "font-headline-05-weight": typography["font-headline-05-weight"],
    "font-headline-06-weight": typography["font-headline-06-weight"],
    "font-marketing-01-weight": typography["font-marketing-01-weight"],
    "font-marketing-02-weight": typography["font-marketing-02-weight"],
    "font-quote-01-weight": typography["font-quote-01-weight"],
    "font-quote-02-weight": typography["font-quote-02-weight"],
    "font-code-weight": typography["font-code-weight"],

    /* " Font styles " */
    "font-caption-style": typography["font-caption-style"],
    "font-label-style": typography["font-label-style"],
    "font-body-01-style": typography["font-body-01-style"],
    "font-body-02-style": typography["font-body-02-style"],
    "font-headline-01-style": typography["font-headline-01-style"],
    "font-headline-02-style": typography["font-headline-02-style"],
    "font-headline-03-style": typography["font-headline-03-style"],
    "font-headline-04-style": typography["font-headline-04-style"],
    "font-headline-05-style": typography["font-headline-05-style"],
    "font-headline-06-style": typography["font-headline-06-style"],
    "font-marketing-01-style": typography["font-marketing-01-style"],
    "font-marketing-02-style": typography["font-marketing-02-style"],
    "font-quote-01-style": typography["font-quote-01-style"],
    "font-quote-02-style": typography["font-quote-02-style"],
    "font-code-style": typography["font-code-style"],

    /* " Line heights " */
    "font-caption-leading": typography["font-caption-leading"],
    "font-label-leading": typography["font-label-leading"],
    "font-body-01-leading": typography["font-body-01-leading"],
    "font-body-02-leading": typography["font-body-02-leading"],
    "font-headline-01-leading": typography["font-headline-01-leading"],
    "font-headline-02-leading": typography["font-headline-02-leading"],
    "font-headline-03-leading": typography["font-headline-03-leading"],
    "font-headline-04-leading": typography["font-headline-04-leading"],
    "font-headline-05-leading": typography["font-headline-05-leading"],
    "font-headline-06-leading": typography["font-headline-06-leading"],
    "font-marketing-01-leading": typography["font-marketing-01-leading"],
    "font-marketing-02-leading": typography["font-marketing-02-leading"],
    "font-quote-01-leading": typography["font-quote-01-leading"],
    "font-quote-02-leading": typography["font-quote-02-leading"],
    "font-code-leading": typography["font-code-leading"],

    /* = = = Sizes = = = */

    /* " Container Sizes " */
    "size-container-01": metrics["container-01"],
    "size-container-02": metrics["container-02"],
    "size-container-03": metrics["container-03"],
    "size-container-04": metrics["container-04"],
    "size-container-05": metrics["container-05"],
    "size-container-06": metrics["container-06"],
    "size-container-07": metrics["container-07"],
    "size-container-08": metrics["container-08"],

    /* " Field Sizes " */
    "size-field-xsmall": metrics["field-xsmall"],
    "size-field-small": metrics["field-small"],
    "size-field-default": metrics["field-default"],
    "size-field-large": metrics["field-large"],

    /* " Border Sizes " */
    "size-border": "0rem",
    "size-border-badge": "0.0625rem",
    "size-border-state": "0.0625rem",

    /* " Focus Sizes " */
    "size-focus": "0.0625rem",

    /* " Border Style " */
    "style-border": "solid",
    "style-border-focus": "solid",

    /* " Divider Sizes " */
    "size-divider": "0.0625rem",

    /* " Border Style " */
    "style-divider": "solid",

    /* " Spacing Sizes " */
    "size-spacing-01": metrics["spacing-01"],
    "size-spacing-02": metrics["spacing-02"],
    "size-spacing-03": metrics["spacing-03"],
    "size-spacing-04": metrics["spacing-04"],
    "size-spacing-05": metrics["spacing-05"],
    "size-spacing-06": metrics["spacing-06"],
    "size-spacing-07": metrics["spacing-07"],
    "size-spacing-08": metrics["spacing-08"],
    "size-spacing-09": metrics["spacing-09"],
    "size-spacing-10": metrics["spacing-10"],
    "size-spacing-11": metrics["spacing-11"],
    "size-spacing-12": metrics["spacing-12"],
    "size-spacing-13": metrics["spacing-13"],
    "size-spacing-inner": metrics["spacing-inner"],

    /* = = = Component = = = */

    /* " Border Radius " */
    "component-radius-01": metrics["radius-01"],
    "component-radius-02": metrics["radius-02"],
    "component-radius-03": metrics["radius-03"],

    /* " Box Shadow " */
    "component-shadow-01": metrics["shadow-04"],
    "component-shadow-02": metrics["shadow-05"],
    "component-shadow-03": metrics["shadow-06"],

    /* = = = Transitions = = = */

    /* " Static Transitions " */
    "transition-app-01": animations["transition-app-01"],
    "transition-app-02": animations["transition-app-02"],
    "transition-app-03": animations["transition-app-03"],
    "transition-app-04": animations["transition-app-04"],
    "transition-app-05": animations["transition-app-05"]
  }
};

module.exports = dynamicTheme;
