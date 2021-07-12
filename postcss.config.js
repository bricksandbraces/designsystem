module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env"),
    require("postcss-flexbugs-fixes"),
    require("postcss-100vh-fix"),
    require("postcss-mixins"),
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("postcss-utilities"),
    require("autoprefixer"),
    ctx.env === "production" ? require("cssnano") : false
  ]
});
