module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  syntax: "postcss-scss",
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env"),
    require("postcss-flexbugs-fixes"),
    require("postcss-100vh-fix"),
    require("postcss-utilities"),
    require("autoprefixer"),
    ctx.env === "production" ? require("cssnano") : false
  ]
});
