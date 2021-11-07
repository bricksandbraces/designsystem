module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    require("postcss-import")(require("postcss-normalize")().postcssImport()),
    require("postcss-preset-env"),
    require("postcss-flexbugs-fixes"),
    require("postcss-each")({
      plugins: {
        beforeEach: [
          require("postcss-mixins"),
          require("postcss-nested"),
          require("postcss-simple-vars"),
          require("postcss-hexrgba"),
          require("postcss-utilities"),
          require("postcss-calc")
        ]
      }
    }),
    require("postcss-viewport-height-correction"),
    require("postcss-size"),
    require("autoprefixer"),
    ctx.env === "production" ? require("cssnano") : false
  ]
});
