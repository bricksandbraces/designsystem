const colors = require("@openbricksandbraces/designtokens/dist/json/colors.json");
const typography = require("@openbricksandbraces/designtokens/dist/json/typography.json");
const metrics = require("@openbricksandbraces/designtokens/dist/json/metrics.json");
const animations = require("@openbricksandbraces/designtokens/dist/json/animations.json");
const Color = require("color");

const rgba = (hex, alpha) => {
  return Color(hex).alpha(alpha ?? 1);
};

const dynamicTheme = {
  light: {
    /* " Root Colors " */
    "color-app-01": colors["gray-50"],
    "color-app-02": colors["gray-200"],
    "color-app-03": colors["gray-300"],
    "color-app-04": colors["gray-500"],
    "color-app-05": colors.white,
    "color-app-05-alpha-5": rgba(colors.white, 0.05),
    "color-app-05-alpha-10": rgba(colors.white, 0.1),
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
    "color-focus-inverse": colors.black,
    "color-divider-dark": rgba(colors.black, 0.2),
    "color-divider-light": rgba(colors.white, 0.2),
    "color-decoration": colors["purple-500"],
    "color-selected": colors["gray-150"],
    "color-selected-light": colors["gray-200"],
    "color-unselected": colors["gray-100"],
    "color-readonly": colors["gray-100"],
    "color-disabled": colors["gray-150"],
    "color-skeleton-01": colors["gray-100"],
    "color-skeleton-02": colors["gray-150"],
    "color-skeleton-03": colors["gray-250"],
    "color-skeleton-04": rgba(colors["gray-250"], 0.25),

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
    "color-font-text-inverse": colors["gray-50"],
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

    /* " Badge Colors " */
    "color-badge-gray-bg": colors["gray-150"],
    "color-badge-gray-font": colors["gray-900"],
    "color-badge-gray-border": colors["gray-200"],
    "color-badge-red-bg": colors["red-150"],
    "color-badge-red-font": colors["red-900"],
    "color-badge-red-border": colors["red-200"],
    "color-badge-green-bg": colors["green-150"],
    "color-badge-green-font": colors["green-900"],
    "color-badge-green-border": colors["green-200"],
    "color-badge-yellow-bg": colors["yellow-150"],
    "color-badge-yellow-font": colors["yellow-900"],
    "color-badge-yellow-border": colors["yellow-200"],
    "color-badge-blue-bg": colors["blue-150"],
    "color-badge-blue-font": colors["blue-900"],
    "color-badge-blue-border": colors["blue-200"],
    "color-badge-cyan-bg": colors["cyan-150"],
    "color-badge-cyan-font": colors["cyan-900"],
    "color-badge-cyan-border": colors["cyan-200"],
    "color-badge-orange-bg": colors["orange-150"],
    "color-badge-orange-font": colors["orange-900"],
    "color-badge-orange-border": colors["orange-200"],
    "color-badge-purple-bg": colors["purple-150"],
    "color-badge-purple-font": colors["purple-900"],
    "color-badge-purple-border": colors["purple-200"],

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

    /* = = = Component = = = */

    /* " Border Radius " */
    "component-radius-subtle": metrics["radius-subtle"],
    "component-radius-default": metrics["radius-default"],
    "component-radius-harsh": metrics["radius-harsh"],

    /* " Component Inside Padding " */
    "component-padding-inside": metrics["padding-inside"],

    /* " Box Shadow " */
    "component-shadow-subtle": metrics["shadow-subtle"],
    "component-shadow-default": metrics["shadow-default"],
    "component-shadow-harsh": metrics["shadow-harsh"],

    /* " Overlay " */
    "component-overlay": metrics.overlay,

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
    "color-focus-inverse": colors.black,
    "color-divider-dark": rgba(colors.black, 0.2),
    "color-divider-light": rgba(colors.white, 0.2),
    "color-decoration": colors["purple-500"],
    "color-selected": colors["gray-150"],
    "color-selected-light": colors["gray-200"],
    "color-unselected": colors["gray-100"],
    "color-readonly": colors["gray-100"],
    "color-disabled": colors["gray-150"],
    "color-skeleton-01": colors["gray-100"],
    "color-skeleton-02": colors["gray-150"],
    "color-skeleton-03": colors["gray-250"],
    "color-skeleton-04": rgba(colors["gray-250"], 0.25),

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
    "color-font-text-inverse": colors["gray-50"],
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

    /* " Badge Colors " */
    "color-badge-gray-bg": colors["gray-150"],
    "color-badge-gray-font": colors["gray-900"],
    "color-badge-gray-border": colors["gray-200"],
    "color-badge-red-bg": colors["red-150"],
    "color-badge-red-font": colors["red-900"],
    "color-badge-red-border": colors["red-200"],
    "color-badge-green-bg": colors["green-150"],
    "color-badge-green-font": colors["green-900"],
    "color-badge-green-border": colors["green-200"],
    "color-badge-yellow-bg": colors["yellow-150"],
    "color-badge-yellow-font": colors["yellow-900"],
    "color-badge-yellow-border": colors["yellow-200"],
    "color-badge-blue-bg": colors["blue-150"],
    "color-badge-blue-font": colors["blue-900"],
    "color-badge-blue-border": colors["blue-200"],
    "color-badge-cyan-bg": colors["cyan-150"],
    "color-badge-cyan-font": colors["cyan-900"],
    "color-badge-cyan-border": colors["cyan-200"],
    "color-badge-orange-bg": colors["orange-150"],
    "color-badge-orange-font": colors["orange-900"],
    "color-badge-orange-border": colors["orange-200"],
    "color-badge-purple-bg": colors["purple-150"],
    "color-badge-purple-font": colors["purple-900"],
    "color-badge-purple-border": colors["purple-200"],

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

    /* = = = Component = = = */

    /* " Border Radius " */
    "component-radius-subtle": metrics["radius-subtle"],
    "component-radius-default": metrics["radius-default"],
    "component-radius-harsh": metrics["radius-harsh"],

    /* " Component Inside Padding " */
    "component-padding-inside": metrics["padding-inside"],

    /* " Box Shadow " */
    "component-shadow-subtle": metrics["shadow-subtle"],
    "component-shadow-default": metrics["shadow-default"],
    "component-shadow-harsh": metrics["shadow-harsh"],

    /* " Overlay " */
    "component-overlay": metrics.overlay,

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
